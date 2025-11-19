'use client'
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const PopUpPage: React.FC = () => {

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
        "562129", "562149", "562157", "562162", "563160"];

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [pin, setPin] = useState("");

    const [error, setError] = useState("");  // ONE message

    const [isOpen, setIsOpen] = useState(false);
    const pinRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
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

        if (!/^\d*$/.test(value)) return;   // only numbers  
        if (value.length > 6) return;       // max 6 digits  

        setPin(value);
        setIsOpen(true);
    };

    const handleSelect = (value: string) => {
        setPin(value);
        setIsOpen(false);
    };

    // FORM VALIDATION
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

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

        setError("");
        alert("Form submitted successfully!");
    };

    return (
        <div className="w-[700px] h-[470px] bg-gray-100 rounded-3xl flex justify-between items-center mx-auto px-3 mt-20 shadow-lg">

            <div className="flex flex-col gap-4 w-1/2">
                <h2 className="text-4xl manrope w-[300px]">Grab your offer now!</h2>

                <form className="flex flex-col gap-3 py-3" onSubmit={handleSubmit}>

                    {/* NAME */}
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

                    {/* PHONE */}
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => {
                            if (!/^\d*$/.test(e.target.value)) return;
                            if (e.target.value.length > 10) return;
                            setPhone(e.target.value);
                            setError("");
                        }}
                        onFocus={() => setIsOpen(false)}
                        className="py-2 px-4 manrope-medium rounded-full border border-gray-400 focus:border-red-500 focus:ring-0 focus:outline-none"


                    />

                    {/* PINCODE */}
                    <div className="relative w-full" ref={pinRef}>
                        <input
                            type="text"
                            placeholder="Enter or select pincode"
                            value={pin}
                            onChange={handlePinChange}
                            onFocus={() => {
                                setIsOpen(true);
                                setError("");
                            }}
                            className="w-full py-2 px-4 manrope-medium rounded-full border border-gray-400 focus:border-red-500 focus:outline-none focus:ring-0"
                        />

                        {isOpen && (
                            <div className="absolute z-10 left-0  right-0 bg-white border rounded-xl shadow-lg max-h-40 overflow-y-auto mt-2">
                                {Pincode.filter((p) => p.startsWith(pin)).map((p) => (
                                    <div
                                        key={p}
                                        onClick={() => handleSelect(p)}
                                        className="px-4 py-2  hover:bg-gray-100 cursor-pointer"
                                    >
                                        {p}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* SIMPLE ERROR MESSAGE ABOVE BUTTON */}
                    {error && (
                        <p className="text-red-600 text-sm manrope-medium">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="py-2 px-4 rounded-full text-white manrope-medium border border-gray-400 bg-red-500 focus:border-red-500  hover:bg-red-600 transition "

                    >
                        Submit
                    </button>

                </form>
            </div>

            <div className="w-[300px] h-[425px] flex justify-end">
                <Image
                    src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/PopUp.png"
                    alt="Offer Image"
                    width={350}
                    height={300}
                    className="rounded-3xl"
                />
            </div>

        </div>
    );
};

export default PopUpPage;
