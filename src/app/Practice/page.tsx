"use client"

import { useState } from "react";

export default function Practice() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState(1); // 1: phone input, 2: OTP verification
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [generatedOTP, setGeneratedOTP] = useState("");

    const generateOTP = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const sendOTP = async () => {
        if (!phoneNumber) {
            setError("Please enter a phone number");
            return;
        }

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const otpCode = generateOTP();
            setGeneratedOTP(otpCode);

            const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
            const messageBody = `Your HUB INTERIOR verification code is: ${otpCode}`;

            const response = await fetch('/api/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    to: formattedPhone, 
                    message: messageBody 
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess("OTP sent successfully via SMS!");
                setStep(2);
            } else {
                setError(data.error || `Failed to send OTP (Status: ${response.status})`);
            }
        } catch (err) {
            console.error("Error sending OTP:", err);
            setError(`Failed to send OTP: ${err instanceof Error ? err.message : 'Unknown error'}`);
        } finally {
            setLoading(false);
        }
    };

    const verifyOTP = () => {
        if (!otp) {
            setError("Please enter the OTP");
            return;
        }

        if (otp === generatedOTP) {
            setSuccess("OTP verified successfully!");
            setError("");
            setTimeout(() => {
                setStep(1);
                setPhoneNumber("");
                setOtp("");
                setGeneratedOTP("");
                setSuccess("");
            }, 2000);
        } else {
            setError("Invalid OTP. Please try again.");
            setSuccess("");
        }
    };

    const resetForm = () => {
        setStep(1);
        setPhoneNumber("");
        setOtp("");
        setGeneratedOTP("");
        setError("");
        setSuccess("");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-6">HUB INTERIOR OTP Verification</h1>
                
                {step === 1 ? (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="+919940578335"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={loading}
                            />
                        </div>
                        
                        {error && (
                            <div className="text-red-600 text-sm">{error}</div>
                        )}
                        
                        {success && (
                            <div className="text-green-600 text-sm">{success}</div>
                        )}
                        
                        <button
                            onClick={sendOTP}
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Sending..." : "Send OTP"}
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Enter HUB INTERIOR OTP
                            </label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="Enter 4-digit code"
                                maxLength={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={loading}
                            />
                        </div>
                        
                        {error && (
                            <div className="text-red-600 text-sm">{error}</div>
                        )}
                        
                        {success && (
                            <div className="text-green-600 text-sm">{success}</div>
                        )}
                        
                        <div className="flex space-x-2">
                            <button
                                onClick={verifyOTP}
                                disabled={loading}
                                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50"
                            >
                                Verify OTP
                            </button>
                            <button
                                onClick={resetForm}
                                disabled={loading}
                                className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 disabled:opacity-50"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                )}
                
                {/* Information */}
                <div className="mt-6 p-4 bg-gray-50 rounded-md">
                    <h3 className="font-medium text-gray-900 mb-2">HUB INTERIOR OTP Information:</h3>
                    <p className="text-sm text-gray-600 mb-1">
                        • Phone: Use any valid phone number format
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        • OTP: 4-digit code generated locally and sent via SMS
                    </p>
                    <p className="text-sm text-gray-600">
                        • Uses Twilio SMS API for HUB INTERIOR message delivery
                    </p>
                </div>
            </div>
        </div>
    );
}
