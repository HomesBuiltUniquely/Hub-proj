'use client'
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


type PopUpProps = {
    onFormSuccess: () => void;   // 🔥 callback from parent
};

const PopUp: React.FC<PopUpProps> = ({ onFormSuccess }) => {
    const router = useRouter();

    // ----- Your existing states -----
    const Pincode = ["560001", "560002", "560003", "560004", "560005",
        "560006", "560007", "560008", "560009", "560010",
        "560011", "560012", "560013", "560014", "560015",
        "560016", "560017", "560018", "560019", "560020",
        "560021", "560022", "560023", "560024", "560025",
        "560026", "560027", "560028", "560029", "560030",
        "560031", "560032", "560033", "560034", "560035",
        "560036", "560037", "560038", "560039", "560040",
        "560041", "560042", "560043", "560044", "560045",
        "560046", "560047", "560048", "560049", "560050",
        "560051", "560052", "560053", "560054", "560055",
        "560056", "560057", "560058", "560059", "560060",
        "560061", "560062", "560063", "560064", "560065",
        "560066", "560067", "560068", "560069", "560070",
        "560071", "560072", "560073", "560074", "560075",
        "560076", "560077", "560078", "560079", "560080",
        "560081", "560082", "560083", "560084", "560085",
        "560086", "560087", "560088", "560089", "560090",
        "560091", "560092", "560093", "560094", "560095",
        "560096", "560097", "560098", "560099", "560100",
        "560101", "560102", "560103", "560104", "560105",
        "560106", "561203", "562106", "562107", "562109",
        "562110", "562114", "562117", "562123", "562125",
        "562129", "562149", "562157", "562162", "563160", "563163", "635103"];

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [pin, setPin] = useState("");
    const [error, setError] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // OTP related states
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [isSendingOTP, setIsSendingOTP] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [otpError, setOtpError] = useState('');

    const pinRef = useRef<HTMLDivElement>(null);
    const prevPhoneRef = useRef<string>('');

    // Reset OTP when phone number changes
    useEffect(() => {
        if (phone !== prevPhoneRef.current && prevPhoneRef.current !== '') {
            setOtpSent(false);
            setOtp('');
            setIsVerified(false);
            setOtpError('');
        }
        prevPhoneRef.current = phone;
    }, [phone]);

    // ----- Your existing handlers -----
    useEffect(() => {
        const handleOutside = (e: MouseEvent) => {
            if (pinRef.current && !pinRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutside);
        return () => document.removeEventListener("mousedown", handleOutside);
    }, []);

    const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!/^\d*$/.test(value)) return;
        if (value.length > 6) return;
        setPin(value);
        setIsOpen(true);
    };

    const handleSelect = (value: string) => {
        setPin(value);
        setIsOpen(false);
    };

    const sendOTP = async () => {
        if (!phone) {
            setOtpError('Please enter a phone number first');
            return;
        }

        if (phone.length !== 10) {
            setOtpError('Please enter a valid 10-digit phone number');
            return;
        }

        setIsSendingOTP(true);
        setOtpError('');

        try {
            console.log('Sending OTP request for phone:', phone);
            const response = await fetch('/api/send-msg91-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone }),
            });

            console.log('OTP API response status:', response.status);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('OTP API response data:', data);
            
            if (data.success) {
                setOtpSent(true);
                setOtpError('');
            } else {
                const errorMsg = data.message || 'Failed to send OTP';
                console.error('OTP send failed:', errorMsg, data);
                setOtpError(errorMsg);
            }
        } catch (error) {
            console.error('OTP send error:', error);
            setOtpError(`Failed to send OTP: ${error instanceof Error ? error.message : 'Please try again.'}`);
        } finally {
            setIsSendingOTP(false);
        }
    };

    const resendOTP = async () => {
        if (!phone) {
            setOtpError('Please enter a phone number first');
            return;
        }

        try {
            console.log('Resending OTP for phone:', phone);
            const response = await fetch('/api/resend-msg91-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, retrytype: 'text' }),
            });

            const data = await response.json();
            console.log('Resend OTP API response:', data);
            
            if (data.success) {
                setOtpError('');
                setOtpError('OTP resent successfully. Please check your phone.');
                setTimeout(() => setOtpError(''), 3000);
            } else {
                const errorMsg = data.message || data.error || 'Failed to resend OTP';
                console.error('Resend OTP failed:', errorMsg, data);
                setOtpError(errorMsg);
            }
        } catch (error) {
            console.error('Resend OTP error:', error);
            setOtpError(`Failed to resend OTP: ${error instanceof Error ? error.message : 'Please try again.'}`);
        }
    };

    const verifyOTP = async () => {
        if (!otp) {
            setOtpError('Please enter the OTP');
            return;
        }

        setIsVerifying(true);
        try {
            const response = await fetch('/api/verify-msg91-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, otp }),
            });

            const data = await response.json();
            if (data.success) {
                setIsVerified(true);
                setOtpError('');
            } else {
                setOtpError(data.message || 'Invalid OTP');
            }
        } catch {
            setOtpError('Failed to verify OTP. Please try again.');
        } finally {
            setIsVerifying(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isVerified) {
            setOtpError('Please verify your phone number with OTP first');
            return;
        }

        if (!name.trim() || !phone.trim() || !pin.trim()) {
            setError("All fields are mandatory");
            return;
        }
        if (phone.length !== 10) {
            setError("Enter a valid 10-digit phone number");
            return;
        }
        if (pin.length !== 6) {
            setError("Enter a valid 6-digit pincode");
            return;
        }

        if (!Pincode.includes(pin)) {
            setError("Service unavailable for this pincode");
            return;
        }


        setError("");
        setIsSubmitting(true);

        try {
            const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

            const response = await fetch('/api/popup-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name.trim(),
                    phone: phone.trim(),
                    pincode: pin.trim(),
                    pageUrl: pageUrl
                }),
            });

            const data = await response.json();

            if (data.success) {
                // ✅ Tell parent "form is successful"
                onFormSuccess();

                // Set flag to trigger reload on Thank You page
                sessionStorage.setItem('formSubmitted', 'true');

                // Reset OTP states
                setOtpSent(false);
                setOtp('');
                setIsVerified(false);
                setOtpError('');

                // Navigate to Thank-You page after successful submission
                setTimeout(() => {
                    router.push('/Form-Submit-Thank-You');
                }, 500);
            } else {
                setError("Failed to submit form. Please try again.");
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setError("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <>
            {/* ================= DESKTOP ================= */}
            <div className="desktop-wrapper">

                {/** YOUR ENTIRE DESKTOP UI EXACTLY AS YOU PROVIDED */}
                <div className="w-[700px] h-auto py-5 bg-gray-100 rounded-3xl flex justify-between items-center mx-auto px-3 mt-20 shadow-lg">

                    <div className="flex flex-col gap-4 w-1/2 mt-2">
                        <h2 className="text-4xl manrope w-[300px] px-3">Grab your offer now!</h2>

                        <form className="flex flex-col gap-3 py-3 px-3" onSubmit={handleSubmit}>

                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setError("");
                                }}
                                onFocus={() => setIsOpen(false)}
                                className="py-2 px-4 manrope-medium rounded-full border border-gray-400 focus:border-red-500 focus:ring-0 focus:outline-none"
                            />

                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">+91</span>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, '');
                                        if (value.length > 10) return;
                                        setPhone(value);
                                        setError("");
                                    }}
                                    onFocus={() => setIsOpen(false)}
                                    className="w-full py-2 pl-12 pr-4 manrope-medium rounded-full border border-gray-400 focus:border-red-500 focus:ring-0 focus:outline-none"
                                />
                            </div>
                            
                            {/* OTP Section */}
                            {phone && phone.length > 0 && (
                                <div className="space-y-2">
                                    {!otpSent ? (
                                        <button
                                            type="button"
                                            onClick={sendOTP}
                                            disabled={phone.length !== 10 || isSendingOTP}
                                            className="w-full py-2 px-4 rounded-full text-white manrope-medium bg-blue-500 hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSendingOTP ? 'Sending OTP...' : 'Send OTP'}
                                        </button>
                                    ) : !isVerified ? (
                                        <div className="space-y-2">
                                            <input
                                                type="text"
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                                placeholder="Enter OTP *"
                                                className="w-full py-2 px-4 manrope-medium rounded-full border border-gray-400 focus:border-red-500 focus:ring-0 focus:outline-none"
                                            />
                                            <div className="flex gap-2">
                                                <button
                                                    type="button"
                                                    onClick={verifyOTP}
                                                    disabled={isVerifying}
                                                    className="flex-1 py-2 px-4 rounded-full text-white manrope-medium bg-green-500 hover:bg-green-600 transition disabled:opacity-50"
                                                >
                                                    {isVerifying ? 'Verifying...' : 'Verify OTP'}
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={resendOTP}
                                                    className="px-4 py-2 rounded-full text-white manrope-medium bg-blue-500 hover:bg-blue-600 transition text-sm"
                                                >
                                                    Resend
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full py-2 px-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center manrope-medium">
                                            ✅ Phone Number Verified
                                        </div>
                                    )}
                                    
                                    {otpError && (
                                        <p className="text-red-600 text-sm manrope-medium">{otpError}</p>
                                    )}
                                </div>
                            )}

                            <div className="relative w-full" ref={pinRef}>
                                <input
                                    type="text"
                                    placeholder="Pincode"
                                    value={pin}
                                    onChange={handlePinChange}
                                    onFocus={() => {
                                        setIsOpen(true);
                                        setError("");
                                    }}
                                    className="w-full py-2 px-4 manrope-medium rounded-full border border-gray-400 focus:border-red-500 focus:outline-none focus:ring-0"
                                />

                                {isOpen && (
                                    <div className="absolute z-10 left-0 right-0 bg-white border rounded-xl shadow-lg max-h-40 overflow-y-auto mt-2">
                                        {Pincode.filter((p) => p.startsWith(pin)).map((p) => (
                                            <div
                                                key={p}
                                                onClick={() => handleSelect(p)}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {p}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {error && (
                                <p className="text-red-600 text-sm manrope-medium">{error}</p>
                            )}


                            {/* check box */}
                            <div className="flex mx-auto">
                                <input type="checkbox" required />
                                <label className="ml-4 text-black ">Yes, all provided details are correct</label>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="py-2 px-4 rounded-full text-white manrope-medium bg-red-500 hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>

                        </form>
                    </div>

                    <div className="w-[300px] h-[350px] flex justify-end">
                        <Image
                            src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/POP%20UP%20LOD.png"
                            alt="Offer Image"
                            width={350}
                            height={300}
                            className="rounded-3xl"
                            
                        />
                    </div>

                </div>

            </div>

            {/* ================= MOBILE VERSION  ================= */}
            <div className="mobile-wrapper -mt-25 px-1">

                <div className="w-full bg-gray-100 rounded-2xl p-1 mx-auto shadow-lg flex flex-col gap-4">

                    {/* IMAGE - TOP */}

                    <div className="w-full h-[190px] flex justify-end">
                        <Image
                            src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/POP%20UP%20mobilelo.png"
                            alt="Offer Image"
                            width={350}
                            height={300}
                            className="rounded-2xl "
                        />
                    </div>


                    {/* TEXT + FORM */}
                    <div className="flex flex-col gap-3">

                        <h2 className="text-2xl manrope text-center -mt-1">Grab your offer now!</h2>

                        <form className="flex flex-col gap-3 px-3" onSubmit={handleSubmit}>

                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setError("");
                                }}
                                onFocus={() => setIsOpen(false)}
                                className="py-2 px-4 manrope-medium rounded-full border border-gray-400"
                            />
                            
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">+91</span>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, '');
                                        if (value.length > 10) return;
                                        setPhone(value);
                                        setError("");
                                    }}
                                    onFocus={() => setIsOpen(false)}
                                    className="w-full py-2 pl-12 pr-4 manrope-medium rounded-full border border-gray-400"
                                />
                            </div>
                            
                            {/* OTP Section */}
                            <div className="space-y-2">
                                {!phone || phone.length === 0 ? (
                                    <div className="text-sm text-gray-500 text-center py-2">
                                        Enter phone number to verify
                                    </div>
                                ) : !otpSent ? (
                                    <button
                                        type="button"
                                        onClick={sendOTP}
                                        disabled={phone.length !== 10 || isSendingOTP}
                                        className="w-full py-2 px-4 rounded-full text-white manrope-medium bg-blue-500 hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSendingOTP ? 'Sending OTP...' : 'Send OTP'}
                                    </button>
                                ) : !isVerified ? (
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            placeholder="Enter OTP *"
                                            className="w-full py-2 px-4 manrope-medium rounded-full border border-gray-400"
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={verifyOTP}
                                                disabled={isVerifying}
                                                className="flex-1 py-2 px-4 rounded-full text-white manrope-medium bg-green-500 hover:bg-green-600 transition disabled:opacity-50"
                                            >
                                                {isVerifying ? 'Verifying...' : 'Verify OTP'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={resendOTP}
                                                className="px-4 py-2 rounded-full text-white manrope-medium bg-blue-500 hover:bg-blue-600 transition text-sm"
                                            >
                                                Resend
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full py-2 px-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center manrope-medium">
                                        ✅ Phone Number Verified
                                    </div>
                                )}
                                
                                {otpError && (
                                    <p className="text-red-600 text-sm manrope-medium text-center">{otpError}</p>
                                )}
                            </div>

                            <div className="relative w-full" ref={pinRef}>
                                <input
                                    type="text"
                                    placeholder="Pincode"
                                    value={pin}
                                    onChange={handlePinChange}
                                    onFocus={() => {
                                        setIsOpen(true);
                                        setError("");
                                    }}
                                    className="w-full py-2 px-4 manrope-medium rounded-full border border-gray-400"
                                />

                                {isOpen && (
                                    <div className="absolute z-10 left-0 right-0 bg-white border rounded-xl shadow-lg max-h-40 overflow-y-auto mt-2">
                                        {Pincode.filter((p) => p.startsWith(pin)).map((p) => (
                                            <div
                                                key={p}
                                                onClick={() => handleSelect(p)}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {p}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {error && (
                                <p className="text-red-600 text-sm manrope-medium text-center">{error}</p>
                            )}

                            {/* check box */}

                            <div className="flex mx-auto">
                                <input type="checkbox" required />
                                <label className="ml-4 text-black ">Yes, all provided details are correct</label>
                            </div>


                            {/* CENTERED BUTTON */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="py-2 px-8 mb-2 rounded-full text-white manrope-medium bg-red-500 hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>

            <style jsx>{`
                .desktop-wrapper {
                    display: block;
                }
                .mobile-wrapper {
                    display: none;
                }

                /* MOBILE ONLY */
                @media (max-width: 767px) {
                    .desktop-wrapper {
                        display: none;
                    }
                    .mobile-wrapper {
                        display: block;
                    }
                }
            `}</style>
        </>
    );
};

export default PopUp;
