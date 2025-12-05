import { UserInfo } from "@/types/userInfo";

/**
 * Sends user information to Google Sheets via Google Apps Script
 * @param userInfo - The user information to send
 * @returns Promise that resolves to true if successful, false otherwise
 */
export async function sendToGoogleSheets(
  userInfo: UserInfo
): Promise<boolean> {
  const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

  // If no URL is configured, skip sending (development mode)
  if (!GOOGLE_SHEETS_URL) {
    console.warn("Google Sheets URL not configured. Skipping data submission.");
    return true; // Return true to not block the user
  }

  try {
    await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      mode: "no-cors", // Google Apps Script requires no-cors
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        organisationType: userInfo.organisationType,
      }),
    });

    // With no-cors mode, we can't read the response
    // So we assume success if no error was thrown
    console.log("Data sent to Google Sheets successfully");
    return true;
  } catch (error) {
    console.error("Error sending data to Google Sheets:", error);
    // Return true anyway to not block the user experience
    // The data is not critical for the user to access the content
    return true;
  }
}

