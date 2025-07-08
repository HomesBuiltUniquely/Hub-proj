import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'; // ✅ This is where Nodemailer is imported

export async function POST(req: Request) {
  const { name, phone, email, pincode } = await req.json();

  // ✅ Nodemailer transport setup
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // ✅ Email content
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // or any other email you want to send to
    subject: 'New Contact Form Submission',
    html: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Pincode:</strong> ${pincode}</p>
    `,
  };

  // ✅ Send the email
  try {
    await transporter.sendMail(mailOptions); // <--- Nodemailer in action
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
