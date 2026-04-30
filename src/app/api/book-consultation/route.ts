import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type LeadDetails = {
  name?: string;
  email?: string;
  phone?: string;
};

type ConsultationDetails = {
  consultationMode?: string;
  selectedDate?: string;
  preferredSlot?: string;
  propertyName?: string;
  possessionTimeline?: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const firstFormDetails: LeadDetails = body?.firstFormDetails || {};
    const consultationDetails: ConsultationDetails = body?.consultationDetails || {};
    const pageUrl: string = body?.pageUrl || "";

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

    const html = `
      <h2>Book Consultation Submission</h2>
      <h3>First Form Details (Pre-OTP/Lead Form)</h3>
      <p><strong>Name:</strong> ${firstFormDetails.name || "Not provided"}</p>
      <p><strong>Email:</strong> ${firstFormDetails.email || "Not provided"}</p>
      <p><strong>Phone:</strong> ${firstFormDetails.phone || "Not provided"}</p>
      <hr />
      <h3>Book Consultation Details</h3>
      <p><strong>Consultation Mode:</strong> ${consultationDetails.consultationMode || "Not provided"}</p>
      <p><strong>Preferred Date:</strong> ${consultationDetails.selectedDate || "Not provided"}</p>
      <p><strong>Preferred Slot:</strong> ${consultationDetails.preferredSlot || "Not provided"}</p>
      <p><strong>Property Name / House:</strong> ${consultationDetails.propertyName || "Not provided"}</p>
      <p><strong>Possession Timeline:</strong> ${consultationDetails.possessionTimeline || "Not provided"}</p>
      <p><strong>Page URL:</strong> <a href="${pageUrl || "#"}">${pageUrl || "Not provided"}</a></p>
    `;

    await transporter.sendMail({
      from: mailUser,
      to: mailUser,
      subject: "Book Consultation Lead Submission",
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
