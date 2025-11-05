"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { UserInfo, organisationTypes } from "@/types/userInfo";
import { sendToGoogleSheets } from "@/lib/googleSheets";

interface UserInfoModalProps {
  onSubmit: (userInfo: UserInfo) => void;
}

export default function UserInfoModal({ onSubmit }: UserInfoModalProps) {
  const [formData, setFormData] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "",
    organisationType: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof UserInfo, string>>>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter organisation types based on search term
  const filteredOrganisationTypes = useMemo(() => {
    if (!searchTerm) return organisationTypes;
    return organisationTypes.filter((type) =>
      type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Check if form is valid
  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    isValidEmail(formData.email) &&
    formData.organisationType !== "" &&
    !isSubmitting;

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleOrganisationSelect = (type: string) => {
    setFormData((prev) => ({ ...prev, organisationType: type }));
    setSearchTerm(type);
    setIsDropdownOpen(false);

    // Clear error for this field
    if (errors.organisationType) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.organisationType;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Partial<Record<keyof UserInfo, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!formData.organisationType) {
      newErrors.organisationType = "Organisation type is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Send to Google Sheets
    setIsSubmitting(true);
    try {
      await sendToGoogleSheets(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Continue anyway - we don't want to block the user
    } finally {
      setIsSubmitting(false);
    }

    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 bg-opacity-20">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm mx-4 p-6">
        {/* Header */}
        <div className="mb-5 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            European Tech IPOs Barometer
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs text-gray-400 uppercase tracking-wide">
              by
            </span>
            <Image src="/logo.svg" alt="ScaleX Invests" width={80} height={16} className="h-4 w-auto" />
          </div>
          <p className="text-sm text-gray-500">
            Understanding European Tech IPOs: a data-driven perspective. Fill in
            your details to access the data.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-xs font-medium text-gray-600 mb-1"
            >
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className={`w-full px-3 py-1.5 text-sm border rounded-md focus:ring-1 focus:ring-[#2B57FF] focus:border-[#2B57FF] transition-all ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-0.5">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-xs font-medium text-gray-600 mb-1"
            >
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className={`w-full px-3 py-1.5 text-sm border rounded-md focus:ring-1 focus:ring-[#2B57FF] focus:border-[#2B57FF] transition-all ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-0.5">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-600 mb-1"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`w-full px-3 py-1.5 text-sm border rounded-md focus:ring-1 focus:ring-[#2B57FF] focus:border-[#2B57FF] transition-all ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>
            )}
          </div>

          {/* Organisation Type - Searchable Dropdown */}
          <div className="relative">
            <label
              htmlFor="organisationType"
              className="block text-xs font-medium text-gray-600 mb-1"
            >
              Organisation type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full px-3 py-1.5 text-sm border rounded-md text-left flex items-center justify-between focus:ring-1 focus:ring-[#2B57FF] focus:border-[#2B57FF] transition-all ${
                  errors.organisationType ? "border-red-500" : "border-gray-300"
                } ${
                  !formData.organisationType ? "text-gray-400" : "text-gray-900"
                }`}
              >
                <span className="truncate">
                  {formData.organisationType || "Select"}
                </span>
                <svg
                  className={`w-4 h-4 ml-2 flex-shrink-0 transition-transform ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-56 overflow-hidden">
                  {/* Search Input */}
                  <div className="p-2 border-b border-gray-200">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search..."
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#2B57FF] focus:border-[#2B57FF]"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>

                  {/* Dropdown Options */}
                  <div className="overflow-y-auto max-h-40">
                    {filteredOrganisationTypes.length > 0 ? (
                      filteredOrganisationTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleOrganisationSelect(type)}
                          className={`w-full text-left px-3 py-1.5 text-sm hover:bg-[#2B57FF] hover:text-white transition-colors ${
                            formData.organisationType === type
                              ? "bg-[#2B57FF] text-white"
                              : "text-gray-900"
                          }`}
                        >
                          {type}
                        </button>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-gray-500 text-xs">
                        No results found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            {errors.organisationType && (
              <p className="text-red-500 text-xs mt-0.5">
                {errors.organisationType}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 px-4 rounded-md text-sm font-medium text-white transition-all mt-4 ${
              isFormValid
                ? "bg-[#2B57FF] hover:bg-[#1E40AF] cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Access"}
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-[10px] text-gray-400 text-center mt-3">
          Never share sensitive information (credit card numbers, passwords,
          etc.) via this form. By filling it in, you agree to be contacted by
          our team and consent to the processing of your data in accordance with
          our privacy policy.
        </p>
      </div>
    </div>
  );
}
