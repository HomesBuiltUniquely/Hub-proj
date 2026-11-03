import { NextResponse } from "next/server";
import { getVerificationStatus } from "@/lib/leadVerification";

/**
 * Records a WhatsApp floating-button click: POST JSON body to Hub backend (same DB path as other website leads).
 * Body: { pageUrl?: string; message?: string }
 */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const pageUrl =
      typeof body.pageUrl === "string" ? body.pageUrl : "";
    const message =
      typeof body.message === "string" ? body.message : "";

    let pathLabel = "unknown";
    try {
      if (pageUrl) {
        pathLabel = new URL(pageUrl).pathname || pageUrl;
      }
    } catch {
      pathLabel = pageUrl.slice(0, 120) || "unknown";
    }

    const name = `WhatsApp floating — ${pageUrl || pathLabel}`.slice(0, 250);

    console.log("whatsapp-lead:", { pageUrl, pathLabel, message });

    const websiteLeadPayload = {
      name,
      email: "",
      phoneNumber: "",
      propertyPin: "",
      verificationStatus: getVerificationStatus(false),
      otpSuccess: false,
    };

    try {
      const websiteLeadResponse = await fetch(
        "https://Hows.hubinterior.com/v1/WebsiteLead",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(websiteLeadPayload),
        }
      );

      if (!websiteLeadResponse.ok) {
        console.error(
          "WebsiteLead API (whatsapp-lead) error:",
          websiteLeadResponse.status,
          websiteLeadResponse.statusText
        );
      } else {
        const text = await websiteLeadResponse.text();
        console.log("WebsiteLead API (whatsapp-lead) response:", text);
      }
    } catch (err) {
      console.error("Error sending whatsapp-lead to WebsiteLead API:", err);
      // Still return 200 so the user can open WhatsApp even if CRM is down
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("whatsapp-lead route error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to record lead" },
      { status: 500 }
    );
  }
}
