import { NextResponse } from 'next/server';

const MSG91_AUTH_KEY = '474017ATbezJxlxhn69454948P1';
const MSG91_VERIFY_OTP_URL = 'https://control.msg91.com/api/v5/otp/verify';

export async function POST(req: Request) {
  try {
    const { phone, otp } = await req.json();

    if (!phone || !otp) {
      return NextResponse.json(
        { success: false, message: 'Phone number and OTP are required' },
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

    // Verify OTP via MSG91
    const url = `${MSG91_VERIFY_OTP_URL}?otp=${otp}&mobile=${mobileNumber}&authkey=${MSG91_AUTH_KEY}`;
    
    console.log('Verifying MSG91 OTP:', { url, mobileNumber, otp });

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
      },
    });

    const responseText = await response.text();
    console.log('MSG91 OTP verify response status:', response.status);
    console.log('MSG91 OTP verify response body:', responseText);

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse MSG91 verify response as JSON:', responseText);
      return NextResponse.json(
        { success: false, message: 'Invalid response from OTP service' },
        { status: 500 }
      );
    }

    if (data.type === 'success' || data.message === 'OTP verified successfully' || response.ok) {
      return NextResponse.json({
        success: true,
        message: 'OTP verified successfully',
      });
    } else {
      const errorMessage = data.message || data.error || 'Invalid OTP';
      console.error('MSG91 OTP verification error:', data);
      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error verifying MSG91 OTP:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to verify OTP. Please try again.' },
      { status: 500 }
    );
  }
}

