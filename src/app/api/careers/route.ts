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

    // Log credential status (without showing actual values)
    console.log('Career email configuration check:');
    console.log('CAREER_GMAIL_USER exists:', !!process.env.CAREER_GMAIL_USER);
    console.log('CAREER_GMAIL_PASS exists:', !!process.env.CAREER_GMAIL_PASS);
    console.log('CAREER_EMAIL exists:', !!process.env.CAREER_EMAIL);
    console.log('Using mailUser:', mailUser ? `${mailUser.substring(0, 3)}***` : 'NOT SET');
    console.log('Using mailPass:', mailPass ? 'SET' : 'NOT SET');
    console.log('Sending to email:', toEmail);

    if (!mailUser || !mailPass) {
      console.error('Career Gmail credentials not configured');
      console.error('mailUser:', !!mailUser, 'mailPass:', !!mailPass);
      return NextResponse.json(
        {
          success: false,
          message: 'Email not sent. Career Gmail credentials not configured.',
        },
        { status: 500 },
      );
    }

    // Remove any spaces from the password (Gmail app passwords should not have spaces)
    const cleanedPass = mailPass.replace(/\s/g, '');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: mailUser,
        pass: cleanedPass,
      },
      connectionTimeout: 10000, // 10 seconds
      socketTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
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
    console.log('Career email sent successfully to:', toEmail);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Career email send error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorCode =
      error && typeof error === 'object' && 'code' in error
        ? String(error.code)
        : 'UNKNOWN';

    // Log detailed error information
    console.error('=== Career Email Error Details ===');
    console.error('Error Code:', errorCode);
    console.error('Error Message:', errorMessage);
    if (error && typeof error === 'object' && 'response' in error) {
      console.error('Error Response:', (error as { response?: string }).response);
    }
    if (error && typeof error === 'object' && 'responseCode' in error) {
      console.error('Error Response Code:', (error as { responseCode?: number }).responseCode);
    }
    console.error('Stack:', error instanceof Error ? error.stack : 'No stack trace');
    console.error('================================');

    // Provide specific error messages
    let userMessage = 'Failed to send email. Please try again.';
    if (errorCode === 'EAUTH') {
      userMessage = 'Email authentication failed. Please verify your Gmail app password is correct and that 2-Step Verification is enabled on your Google account.';
      console.error('AUTHENTICATION FAILED - Check:');
      console.error('1. Gmail app password is correct (no spaces, 16 characters)');
      console.error('2. 2-Step Verification is enabled on Google account');
      console.error('3. App password was generated for "Mail" application');
      console.error('4. CAREER_GMAIL_USER matches the Google account email');
    } else if (errorCode === 'ECONNECTION') {
      userMessage = 'Email connection failed. Please check your internet connection.';
    } else if (errorMessage.includes('certificate') || errorMessage.includes('SSL')) {
      userMessage = 'Email security certificate error. Please contact support.';
    } else if (errorMessage.includes('timeout')) {
      userMessage = 'Email request timed out. Please try again.';
    }

    const fullError = {
      errorMessage,
      errorCode,
      response: error && typeof error === 'object' && 'response' in error ? String((error as { response?: unknown }).response) : undefined,
      responseCode: error && typeof error === 'object' && 'responseCode' in error ? (error as { responseCode?: number }).responseCode : undefined,
      stack: error instanceof Error ? error.stack : undefined,
    };

    console.error('Full career email error details:', JSON.stringify(fullError, null, 2));

    return NextResponse.json(
      { success: false, message: userMessage, error: errorMessage },
      { status: 500 },
    );
  }
}
