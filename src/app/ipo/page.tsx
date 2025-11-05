"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import TableOfContents from "@/components/TableOfContents";
import SampleSectionCompact from "@/components/SampleSectionCompact";
import IpoMapCompact from "@/components/IpoMapCompact";
import StockExchangeChartsCompact from "@/components/StockExchangeChartsCompact";
import PostIpoPerformanceSectionCompact from "@/components/PostIpoPerformanceSectionCompact";
import ExchangePerformanceCompact from "@/components/ExchangePerformanceCompact";
import RevenueGroupPerformanceCompact from "@/components/RevenueGroupPerformanceCompact";
import SectorPerformanceChartCompact from "@/components/SectorPerformanceChartCompact";
import MarketPerformanceTableCompact from "@/components/MarketPerformanceTableCompact";
import ValuationMultiplesTableCompact from "@/components/ValuationMultiplesTableCompact";
import ConclusionSectionCompact from "@/components/ConclusionSectionCompact";
import ContactSection from "@/components/ContactSection";
import ShareFooter from "@/components/ShareFooter";
import UserInfoModal from "@/components/UserInfoModal";
import { UserInfo } from "@/types/userInfo";

export default function IpoPage() {
  const [hasSubmittedInfo, setHasSubmittedInfo] = useState(false);

  const handleUserInfoSubmit = (userInfo: UserInfo) => {
    console.log("User info submitted:", userInfo);
    setHasSubmittedInfo(true);
  };

  const sections = [
    { id: "hero", title: "Introduction" },
    { id: "sample", title: "The Sample" },
    { id: "executive-summary", title: "Executive Summary" },
    { id: "geography", title: "Geography" },
    { id: "exchanges", title: "Stock Exchanges" },
    { id: "post-ipo", title: "Post-IPO Performance" },
    { id: "exchange-perf", title: "Exchange Performance" },
    { id: "revenue-perf", title: "Revenue Performance" },
    { id: "sectors", title: "Sector Performance" },
    { id: "market-perf", title: "Market Performance" },
    { id: "valuation", title: "Valuation Multiples" },
  ];

  return (
    <div className="relative">
      {/* Main scrollable container with snap */}
      <div
        className={`h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth ${
          hasSubmittedInfo ? "" : "blur-sm pointer-events-none"
        }`}
        style={{
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Sample Section */}
        <SectionWrapper id="sample" backgroundColor="bg-white">
          <SampleSectionCompact />
        </SectionWrapper>

        {/* Executive Summary Section */}
        <SectionWrapper id="executive-summary" backgroundColor="bg-gray-50">
          <ConclusionSectionCompact />
        </SectionWrapper>

        {/* Geography Section */}
        <SectionWrapper id="geography" backgroundColor="bg-white">
          <IpoMapCompact />
        </SectionWrapper>

        {/* Stock Exchanges Section */}
        <SectionWrapper id="exchanges" backgroundColor="bg-gray-50">
          <StockExchangeChartsCompact />
        </SectionWrapper>

        {/* Post-IPO Performance Section */}
        <SectionWrapper id="post-ipo" backgroundColor="bg-white">
          <PostIpoPerformanceSectionCompact />
        </SectionWrapper>

        {/* Exchange Performance Section */}
        <SectionWrapper id="exchange-perf" backgroundColor="bg-gray-50">
          <ExchangePerformanceCompact />
        </SectionWrapper>

        {/* Revenue Group Performance Section */}
        <SectionWrapper id="revenue-perf" backgroundColor="bg-white">
          <RevenueGroupPerformanceCompact />
        </SectionWrapper>

        {/* Sector Performance Section */}
        <SectionWrapper id="sectors" backgroundColor="bg-gray-50">
          <SectorPerformanceChartCompact />
        </SectionWrapper>

        {/* Market Performance Section */}
        <SectionWrapper id="market-perf" backgroundColor="bg-white">
          <MarketPerformanceTableCompact />
        </SectionWrapper>

        {/* Valuation Multiples Section */}
        <SectionWrapper id="valuation" backgroundColor="bg-gray-50">
          <ValuationMultiplesTableCompact />
        </SectionWrapper>

        {/* Contact & Share Footer - Final section */}
        <div className="snap-start h-auto min-h-screen flex items-center justify-center bg-white px-6 py-12">
          <div className="w-full">
            <ContactSection />
            <ShareFooter />
          </div>
        </div>
      </div>

      {/* Table of Contents - Fixed position */}
      {hasSubmittedInfo && <TableOfContents sections={sections} />}

      {/* Modal overlay - only shown when form not submitted */}
      {!hasSubmittedInfo && <UserInfoModal onSubmit={handleUserInfoSubmit} />}
    </div>
  );
}
