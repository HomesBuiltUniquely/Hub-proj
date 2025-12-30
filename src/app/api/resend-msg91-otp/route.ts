import { NextResponse } from 'next/server';

const MSG91_AUTH_KEY = '474017ATbezJxlxhn69454948P1';
const MSG91_RESEND_OTP_URL = 'https://control.msg91.com/api/v5/otp/retry';

export async function POST(req: Request) {
  try {
    const { phone, retrytype = 'text' } = await req.json();

    if (!phone) {
      return NextResponse.json(
        { success: false, message: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Normalize phone number to MSG91 format
    // Always add 91 prefix regardless of what user entered
    let mobileNumber = phone.toString().trim();
    
    // Remove any + or spaces, keep only digits
    mobileNumber = mobileNumber.replace(/[\s+]/g, '').replace(/\D/g, '');
    
    // Always add 91 prefix (even if it already starts with 91)
    mobileNumber = `91${mobileNumber}`;

    // Resend OTP via MSG91
    const url = `${MSG91_RESEND_OTP_URL}?authkey=${MSG91_AUTH_KEY}&retrytype=${retrytype}&mobile=${mobileNumber}`;
    
    console.log('Resending MSG91 OTP request:', { url, mobileNumber, retrytype, authkey: MSG91_AUTH_KEY });

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
      },
    });

    const responseText = await response.text();
    console.log('MSG91 Resend OTP response status:', response.status);
    console.log('MSG91 Resend OTP response body:', responseText);

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse MSG91 resend response as JSON:', responseText);
      if (responseText.toLowerCase().includes('success') || response.ok) {
        return NextResponse.json({
          success: true,
          message: 'OTP resent successfully',
        });
      }
      return NextResponse.json(
        { success: false, message: 'Failed to resend OTP. Please try again.' },
        { status: 500 }
      );
    }

    if (data.type === 'success' || data.message === 'OTP resent successfully' || response.ok) {
      return NextResponse.json({
        success: true,
        message: 'OTP resent successfully',
      });
    } else {
      const errorMessage = data.message || data.error || 'Failed to resend OTP';
      console.error('MSG91 OTP resend error:', data);
      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error resending MSG91 OTP:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to resend OTP. Please try again.' },
      { status: 500 }
    );
  }
}

