import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      // Calculator-only fields (expected flattened or nested)
      bhkType,
      rooms,
      wardrobe,
      kitchen,
      collections,
      material,
      calculator,
      // Optional meta
      pageUrl,
    } = body || {};

    const c = calculator || {};

    const data = {
      bhkType: bhkType ?? c.bhkType ?? null,
      rooms: rooms ?? c.rooms ?? null,
      wardrobe: wardrobe ?? c.wardrobe ?? null,
      kitchen: kitchen ?? c.kitchen ?? null,
      collections: collections ?? c.collections ?? null,
      material: material ?? c.material ?? null,
      pageUrl: pageUrl ?? null,
    };

    console.log('[calculator-data] Received:', data);

    // If no email credentials, just acknowledge for testing
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.warn('[calculator-data] Missing GMAIL_USER/GMAIL_PASS; returning success without sending');
      return NextResponse.json({ success: true, message: 'Calculator data received (email not sent)', data });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      // Add connection timeout and retry options
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    const renderJSON = (value) => {
      try {
        if (typeof value === 'string') return value;
        return value ? JSON.stringify(value, null, 2) : 'Not provided';
      } catch {
        return String(value ?? 'Not provided');
      }
    };

    const subject = 'Calculator Selections';
    const html = `
      <h3>Calculator Data</h3>
      <p><strong>BHK Type:</strong> ${data.bhkType ?? 'Not provided'}</p>
      <p><strong>Rooms:</strong></p>
      <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(data.rooms)}</pre>
      <p><strong>Wardrobe:</strong></p>
      <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(data.wardrobe)}</pre>
      <p><strong>Kitchen:</strong></p>
      <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(data.kitchen)}</pre>
      <p><strong>Collections:</strong></p>
      <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(data.collections)}</pre>
      <p><strong>Material Finish:</strong></p>
      <pre style="background:#f6f6f6;padding:10px;border-radius:8px;">${renderJSON(data.material)}</pre>
      <p><strong>Page URL:</strong> ${data.pageUrl ?? 'Not provided'}</p>
    `;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject,
      html,
    };

    console.log('[calculator-data] Email configuration:', {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      hasUser: !!process.env.GMAIL_USER,
      hasPass: !!process.env.GMAIL_PASS
    });
    
    await transporter.sendMail(mailOptions);
    console.log('[calculator-data] Email sent successfully');
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('[calculator-data] Error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    const errorCode = err?.code || 'UNKNOWN';
    console.error('[calculator-data] Error details:', {
      message: errorMessage,
      code: errorCode,
      stack: err instanceof Error ? err.stack : undefined
    });
    
    // Provide more specific error messages
    let userMessage = 'Failed to process calculator data. Please try again.';
    if (errorMessage.includes('Invalid login') || errorMessage.includes('authentication')) {
      userMessage = 'Email service authentication failed. Please contact support.';
    } else if (errorMessage.includes('ECONNECTION') || errorMessage.includes('timeout')) {
      userMessage = 'Connection timeout. Please try again.';
    }
    
    return NextResponse.json({ 
      success: false, 
      message: userMessage,
      error: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    }, { status: 500 });
  }
}




