import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type CareerPayload = {
  jobTitle?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  position?: string;
  about?: string;
  pageUrl?: string;
  resume?: {
    name?: string;
    type?: string;
    data?: string; // base64
  } | null;
};

export async function POST(req: Request) {
  try {
    const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
    const body = (await req.json()) as CareerPayload;
    const {
      jobTitle,
      firstName,
      lastName,
      email,
      phone,
      position,
    about,
      pageUrl,
      resume,
    } = body;

    console.log('Career form API route called with data:', {
      jobTitle,
      firstName,
      lastName,
      email,
      phone,
      position,
    about,
      pageUrl,
      resumeName: resume?.name,
      resumeType: resume?.type,
      hasResumeData: !!resume?.data,
    });

    if (!resume?.data || !resume?.name) {
      return NextResponse.json(
        { success: false, message: 'Resume is required.' },
        { status: 400 },
      );
    }

    const base64Size = (base64: string) => {
      const padding = base64.endsWith('==') ? 2 : base64.endsWith('=') ? 1 : 0;
      return Math.floor((base64.length * 3) / 4) - padding;
    };
    if (base64Size(resume.data) > MAX_RESUME_SIZE_BYTES) {
      return NextResponse.json(
        { success: false, message: 'Resume must be 5MB or smaller.' },
        { status: 413 },
      );
    }

    const mailUser = process.env.CAREER_GMAIL_USER || process.env.GMAIL_USER;
    const mailPass = process.env.CAREER_GMAIL_PASS || process.env.GMAIL_PASS;
    const toEmail = process.env.CAREER_EMAIL || 'career@hubinterior.com';

    if (!mailUser || !mailPass) {
      console.error('Career Gmail credentials not configured');
      return NextResponse.json(
        {
          success: false,
          message: 'Email not sent. Career Gmail credentials not configured.',
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    const attachments =
      resume?.data && resume?.name
        ? [
            {
              filename: resume.name,
              content: Buffer.from(resume.data, 'base64'),
              contentType: resume.type || 'application/octet-stream',
            },
          ]
        : [];

    const mailOptions = {
      from: mailUser,
      to: toEmail,
      subject: `Career Application${jobTitle ? ` - ${jobTitle}` : ''}`,
      html: `
        <h3>Career Application Submission</h3>
        <p><strong>Job Listing:</strong> ${jobTitle || 'Not provided'}</p>
        <p><strong>Position Applying For:</strong> ${position || 'Not provided'}</p>
        <p><strong>First Name:</strong> ${firstName || 'Not provided'}</p>
        <p><strong>Last Name:</strong> ${lastName || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Resume:</strong> ${resume?.name || 'Not provided'}</p>
        <p><strong>About:</strong> ${about || 'Not provided'}</p>
        <p><strong>Page URL:</strong> <a href="${pageUrl || '#'}" target="_blank">${
        pageUrl || 'Not provided'
      }</a></p>
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Career email send error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, message: 'Failed to send email.', error: errorMessage },
      { status: 500 },
    );
  }
}
