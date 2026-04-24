import { NextResponse } from 'next/server';
import { isValidIndianPhone, normalizeIndianPhone } from '@/lib/phoneValidation';

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
    if (!isValidIndianPhone(phone)) {
      return NextResponse.json(
        { success: false, message: 'Phone number must be exactly 10 digits' },
        { status: 400 }
      );
    }

    // Normalize phone number to MSG91 format
    const mobileNumber = `91${normalizeIndianPhone(phone)}`;

    // Verify OTP via MSG91 (authkey in header)
    const query = new URLSearchParams({
      otp: String(otp),
      mobile: mobileNumber,
    });
    const url = `${MSG91_VERIFY_OTP_URL}?${query.toString()}`;
    
    console.log('Verifying MSG91 OTP:', { url, mobileNumber, otp });

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        authkey: MSG91_AUTH_KEY,
        'accept': 'application/json',
      },
    });

    const responseText = await response.text();
    console.log('MSG91 OTP verify response status:', response.status);
    console.log('MSG91 OTP verify response body:', responseText);

    let data: { type?: string; message?: string; error?: string; msg?: string };
    try {
      data = JSON.parse(responseText);
    } catch {
      console.error('Failed to parse MSG91 verify response as JSON:', responseText);
      return NextResponse.json(
        { success: false, message: 'Invalid response from OTP service' },
        { status: 500 }
      );
    }

    const normalizedType = data.type?.toLowerCase();
    const normalizedMessage = data.message?.toLowerCase();
    const isVerified =
      normalizedType === 'success' ||
      (!!normalizedMessage &&
        (normalizedMessage.includes('otp verified') ||
          normalizedMessage.includes('verified successfully')));

    if (isVerified) {
      return NextResponse.json({
        success: true,
        message: 'OTP verified successfully',
      });
    } else {
      const rawErrorMessage =
        data.message ||
        data.error ||
        data.msg ||
        (response.status === 401 || response.status === 400
          ? 'Invalid OTP'
          : 'Failed to verify OTP');
      const isMaxAttemptsError = rawErrorMessage
        .toLowerCase()
        .includes('max limit reached');
      const errorMessage = isMaxAttemptsError
        ? 'Maximum OTP verification attempts reached. Please resend OTP and try again.'
        : rawErrorMessage;
      console.error('MSG91 OTP verification error:', data);
      // Keep business-level OTP failure as 200 so frontend can handle
      // "wrong OTP" without noisy browser "Failed to load resource" logs.
      return NextResponse.json(
        {
          success: false,
          message: errorMessage,
          reason: isMaxAttemptsError ? 'MAX_ATTEMPTS' : 'INVALID_OTP',
        },
        { status: 200 }
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

