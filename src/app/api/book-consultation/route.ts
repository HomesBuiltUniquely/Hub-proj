import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type LeadDetails = {
  name?: string;
  email?: string;
  phone?: string;
  pincode?: string;
  budget?: string;
};

type ConsultationDetails = {
  consultationMode?: string;
  selectedDate?: string;
  preferredSlot?: string;
  propertyName?: string;
  possessionTimeline?: string;
};

function formatConsultationMode(mode?: string): string {
  if (mode === "experience-center") return "Experience Center Visit";
  if (mode === "video-call") return "Video Conference";
  return mode || "Not provided";
}

function formatPossessionTimeline(timeline?: string): string {
  const labels: Record<string, string> = {
    immediately: "Immediately",
    "0-3-months": "0 - 3 months",
    "3-6-months": "3 - 6 months",
    "more-than-6-months": "More than 6 months",
    "under-construction": "Under construction",
    "construction-not-yet-ready": "Construction not yet ready",
  };
  if (!timeline) return "Not provided";
  return labels[timeline] || timeline;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const firstFormDetails: LeadDetails = body?.firstFormDetails || {};
    const consultationDetails: ConsultationDetails = body?.consultationDetails || {};
    const pageUrl: string = body?.pageUrl || "";
    const formSource: string = body?.formSource || "book-consultation";
    const phoneVerified: boolean = body?.phoneVerified === true;

    if (!consultationDetails.selectedDate || !consultationDetails.preferredSlot) {
      return NextResponse.json(
        { success: false, message: "Date and preferred slot are required." },
        { status: 400 }
      );
    }

    const mailUser = process.env.GMAIL_USER;
    const mailPass = process.env.GMAIL_PASS;
    if (!mailUser || !mailPass) {
      return NextResponse.json(
        { success: false, message: "Email configuration is missing on server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: mailUser,
        pass: mailPass.replace(/\s/g, ""),
      },
    });

    const isDesignConsultation = formSource === "design-consultation";
    const submissionTitle = isDesignConsultation
      ? "Design Consultation Submission"
      : "Book Consultation Submission";
    const personalSectionTitle = isDesignConsultation
      ? "Personal Details"
      : "First Form Details (Pre-OTP/Lead Form)";

    const html = `
      <h2>${submissionTitle}</h2>
      <p><strong>Form Source:</strong> ${formSource}</p>
      <h3>${personalSectionTitle}</h3>
      <p><strong>Full Name:</strong> ${firstFormDetails.name || "Not provided"}</p>
      <p><strong>Email:</strong> ${firstFormDetails.email || "Not provided"}</p>
      <p><strong>Phone:</strong> ${firstFormDetails.phone || "Not provided"}</p>
      <p><strong>Phone Verified (OTP):</strong> ${phoneVerified ? "Yes" : "No"}</p>
      <p><strong>Property Pincode:</strong> ${firstFormDetails.pincode || "Not provided"}</p>
      ${firstFormDetails.budget ? `<p><strong>Budget:</strong> ${firstFormDetails.budget}</p>` : ""}
      <hr />
      <h3>Consultation Details</h3>
      <p><strong>Consultation Mode:</strong> ${formatConsultationMode(consultationDetails.consultationMode)}</p>
      <p><strong>Preferred Date:</strong> ${consultationDetails.selectedDate || "Not provided"}</p>
      <p><strong>Preferred Slot:</strong> ${consultationDetails.preferredSlot || "Not provided"}</p>
      <hr />
      <h3>Property & Possession</h3>
      <p><strong>Property Name / Individual House:</strong> ${consultationDetails.propertyName || "Not provided"}</p>
      <p><strong>Possession Timeline:</strong> ${formatPossessionTimeline(consultationDetails.possessionTimeline)}</p>
      <hr />
      <p><strong>Page URL:</strong> <a href="${pageUrl || "#"}">${pageUrl || "Not provided"}</a></p>
    `;

    await transporter.sendMail({
      from: mailUser,
      to: mailUser,
      subject: isDesignConsultation
        ? "Design Consultation Lead Submission"
        : "Book Consultation Lead Submission",
      html,
    });

    return NextResponse.json({ success: true, message: "Consultation submitted successfully." });
  } catch (error) {
    console.error("Book consultation API error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit consultation details." },
      { status: 500 }
    );
  }
}
