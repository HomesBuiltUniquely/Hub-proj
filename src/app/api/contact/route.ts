import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, phone, email, pincode, urlParams } = await req.json(); // ⬅️ Include urlParams

  // ✅ Setup transport using Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // ✅ Email content including landing URL
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // You can change this to a team email
    subject: 'Sales Lead',
    html: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Pincode:</strong> ${pincode}</p>
      <p><strong>Landing URL:</strong> <a href="${urlParams}" target="_blank">${urlParams}</a></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
