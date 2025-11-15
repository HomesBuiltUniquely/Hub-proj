'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Pincode } from "./Pincode"

export function HeroSection() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [propSelect, setpropSelect] = useState("");
    const options = ["2BHK", "3BHK", "4+BHK/Duplex"]
    const [Selected, setSelected] = useState("Book A slot");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    const [selectedPincode, setSelectedPincode] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [filePreview, setFilePreview] = useState<string>("");
    const [form, setForm] = useState({
        name: "",
        email: "",
        phonennumber: "",
        pincode: "",
        Scheduler: "",
        property: ""
    })

    const timeSlots = [
        "10:00 to 11:00",
        "11:00 to 12:00",
        "12:00 to 01:00",
        "01:00 to 02:00",
        "02:00 to 03:00",
        "03:00 to 04:00",
        "04:00 to 05:00",
        "05:00 to 06:00",
        "06:00 to 07:00",
        "07:00 to 08:00"
    ];

    const pincodes = Pincode; // created a for pincode
    const [pincodeOpen, setPincodeOpen] = useState(false);
    const [pincodeSearch, setPincodeSearch] = useState("");

    // Close dropdowns (pincode & timeslot) when clicking outside or pressing Escape
    useEffect(() => {
        const handleOutside = (e: MouseEvent | TouchEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;

            // Close pincode dropdown when click is outside any pincode wrapper
            if (!target.closest || !target.closest('.pincode-wrapper')) {
                setPincodeOpen(false);
            }

            // Close timeslot dropdown when click is outside any timeslot wrapper
            if (!target.closest || !target.closest('.timeslot-wrapper')) {
                setOpen(false);
            }
        };

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setPincodeOpen(false);
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutside);
        document.addEventListener('touchstart', handleOutside);
        document.addEventListener('keydown', handleKey);

        return () => {
            document.removeEventListener('mousedown', handleOutside);
            document.removeEventListener('touchstart', handleOutside);
            document.removeEventListener('keydown', handleKey);
        };
    }, []);

    const handlePincodeChange = (pincode: string) => {
        setSelectedPincode(pincode);
        setForm(prev => ({ ...prev, pincode }));
        setPincodeOpen(false);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            // Create preview for images
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setFilePreview(e.target?.result as string);
                };
                reader.readAsDataURL(file);
            } else {
                setFilePreview("");
            }
        }
    };

    const removeFile = () => {
        setSelectedFile(null);
        setFilePreview("");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Update form with selected property and time slot
        const updatedForm = {
            ...form,
            property: propSelect,
            Scheduler: Selected !== "Book A slot" ? Selected : ""
        };

        // Basic validation
        if (!updatedForm.name || !updatedForm.email || !updatedForm.phonennumber || !updatedForm.pincode || !updatedForm.property || updatedForm.Scheduler === "") {
            setSubmitMessage("Please fill in all required fields");
            return;
        }

        // Pincode must be exactly 6 numeric digits
        if (!/^\d{6}$/.test(updatedForm.pincode)) {
            setSubmitMessage("Please enter a valid 6-digit pincode");
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            // Create FormData for file upload
            const formData = new FormData();
            formData.append('name', updatedForm.name);
            formData.append('phone', updatedForm.phonennumber);
            formData.append('email', updatedForm.email);
            formData.append('pincode', updatedForm.pincode);
            formData.append('propertyType', updatedForm.property);
            formData.append('timeSlot', updatedForm.Scheduler);
            formData.append('pageUrl', window.location.href);

            if (selectedFile) {
                formData.append('file', selectedFile);
            }

            const response = await fetch('/api/landingpage2-contact', {
                method: 'POST',
                body: formData, // Send as FormData instead of JSON
            });

            const data = await response.json();

            (async () => {
                try {
                    const home1Payload = {
                        name: updatedForm.name,
                        email: updatedForm.email,
                        phoneNumber: updatedForm.phonennumber,
                        propertyPin: updatedForm.pincode,
                        interiorSetup: updatedForm.property,
                        possessionIn: updatedForm.Scheduler,
                    };

                    await fetch('https://hows.hubinterior.com/v1/MetaLead', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(home1Payload),
                    });
                } catch (err) {
                    console.warn('Failed to POST to https://hows.hubinterior.com/v1/MetaLead', err);
                }
            })();

            if (data.success) {
                setSubmitMessage("Appointment request submitted successfully! We'll contact you soon.");
                setForm({
                    name: "",
                    email: "",
                    phonennumber: "",
                    pincode: "",
                    Scheduler: "",
                    property: ""
                });
                setpropSelect("");
                setSelected("Book A slot");
                setSelectedPincode("");
                setSelectedFile(null);
                setFilePreview("");

                // Navigate to Thank-You page after successful submission
                setTimeout(() => {
                    // Set flag to trigger reload on Thank You page
                    sessionStorage.setItem('formSubmitted', 'true');
                    router.push('/Submitted-Thank-You');
                }, 1500);
            } else {
                setSubmitMessage("Failed to submit appointment request. Please try again.");
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitMessage("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleMobileSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Update form with selected property and time slot
        const updatedForm = {
            ...form,
            property: propSelect,
            Scheduler: Selected !== "Book A slot" ? Selected : ""
        };

        // Basic validation
        if (!updatedForm.name || !updatedForm.email || !updatedForm.phonennumber || !updatedForm.pincode || !updatedForm.property || updatedForm.Scheduler === "") {
            setSubmitMessage("Please fill in all required fields");
            return;
        }

        // Pincode must be exactly 6 numeric digits
        if (!/^\d{6}$/.test(updatedForm.pincode)) {
            setSubmitMessage("Please enter a valid 6-digit pincode");
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            // Create FormData for file upload
            const formData = new FormData();
            formData.append('name', updatedForm.name);
            formData.append('phone', updatedForm.phonennumber);
            formData.append('email', updatedForm.email);
            formData.append('pincode', updatedForm.pincode);
            formData.append('propertyType', updatedForm.property);
            formData.append('timeSlot', updatedForm.Scheduler);
            formData.append('pageUrl', window.location.href);

            if (selectedFile) {
                formData.append('file', selectedFile);
            }

            const response = await fetch('/api/landingpage2-contact', {
                method: 'POST',
                body: formData, // Send as FormData instead of JSON
            });


            const data = await response.json();

            // Run fire-and-forget; errors are caught and logged.
            (async () => {
                try {
                    const home1Payload = {
                        name: updatedForm.name,
                        email: updatedForm.email,
                        phoneNumber: updatedForm.phonennumber,
                        propertyPin: updatedForm.pincode,
                        interiorSetup: updatedForm.property,
                        possessionIn: updatedForm.Scheduler,
                    };

                    await fetch('https://hows.hubinterior.com/v1/MetaLead', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(home1Payload),
                    });
                } catch (err) {
                    console.warn('Failed to POST to https://hows.hubinterior.com/v1/MetaLead', err);
                }
            })();

            if (data.success) {
                setSubmitMessage("Appointment request submitted successfully! We'll contact you soon.");
                // Reset form
                setForm({
                    name: "",
                    email: "",
                    phonennumber: "",
                    pincode: "",
                    Scheduler: "",
                    property: ""
                });
                setpropSelect("");
                setSelected("Book A slot");
                setSelectedPincode("");
                setSelectedFile(null);
                setFilePreview("");

                // Navigate to Thank-You page after successful submission
                setTimeout(() => {
                    // Set flag to trigger reload on Thank You page
                    sessionStorage.setItem('formSubmitted', 'true');
                    router.push('/Submitted-Thank-You');
                }, 1500);
            } else {
                setSubmitMessage("Failed to submit appointment request. Please try again.");
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitMessage("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

        <div>
            <div className="lg:block hidden relative w-screen h-[1000px]">
                <Image
                    src="/jit1.png"
                    alt="Hero background"
                    fill
                    className="object-cover border-4 rounded-4xl border-black"
                    loading="lazy"
                />
                <div className="absolute inset-0 flex items-center">
                    <div className="relative flex">
                        <div className="w-[650px] h-[1000px] ml-1 bg-black/50 shadow-lg backdrop-blur-md overflow-hidden rounded-l-3xl">
                            <img src="hub.png" className="w-[150px] h-[60px] ml-10 mt-6"></img>
                            <form onSubmit={handleSubmit}>
                                <div className="flex mt-4">
                                    <input type="text" name="name" placeholder="Name" value={form.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setForm({ ...form, [e.target.name]: e.target.value }) }} className="w-[250px] h-[60px] border-2 border-[#DDCDC1] pl-8 rounded-4xl m-10 placeholder-white manrope  "></input>
                                    <input type="text" name="email" placeholder="Email" value={form.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setForm({ ...form, [e.target.name]: e.target.value }) }} className="w-[250px] h-[60px] border-2 border-[#DDCDC1] pl-8 rounded-4xl m-10 placeholder-white manrope"></input>
                                </div>
                                <div className="flex mt-4">
                                    <input type="text" name="phonennumber" placeholder="PhoneNumber" value={form.phonennumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setForm({ ...form, [e.target.name]: e.target.value }) }} className="w-[250px] h-[60px] border-2 border-[#ddcdc1] pl-8 rounded-4xl ml-10 placeholder-white manrope"></input>

                                    {/* Pincode input + dropdown - desktop */}
                                    <div className="relative ml-18 pincode-wrapper">
                                        <div className="flex items-center">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={pincodeSearch || selectedPincode}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        // allow only digits and limit to 6 characters
                                                        const raw = e.target.value.replace(/\D/g, '').slice(0, 6);
                                                        setPincodeSearch(raw);
                                                        setSelectedPincode(raw);
                                                        setForm(prev => ({ ...prev, pincode: raw }));
                                                        setPincodeOpen(true);
                                                    }}
                                                    onFocus={() => setPincodeOpen(true)}
                                                    placeholder="Pincode"
                                                    inputMode="numeric"
                                                    pattern="[0-9]{6}"
                                                    maxLength={6}
                                                    className="w-[250px] h-[60px] border-2 border-[#ddcdc1] rounded-4xl pl-6 pr-6 text-white bg-transparent"
                                                />
                                            </div>
                                        </div>

                                        {pincodeOpen && (
                                            <div className="absolute z-10 mt-2 w-[250px] max-h-40 bg-white border-2 border-[#ddcdc1] rounded-md shadow-lg overflow-y-auto">
                                                <ul className="py-1 text-gray-700">
                                                    {pincodes
                                                        .filter(pin => pin.toString().includes(pincodeSearch))
                                                        .map((pin) => (
                                                            <li
                                                                key={pin}
                                                                onClick={() => {
                                                                    handlePincodeChange(pin);
                                                                    setPincodeSearch(pin);
                                                                }}
                                                                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                                                            >
                                                                {pin}
                                                            </li>
                                                        ))}
                                                    {pincodes.filter(pin => pin.toString().includes(pincodeSearch)).length === 0 && (
                                                        <li className="px-4 py-2 text-sm text-gray-500">No results</li>
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* Selectables */}
                                <div className="text-white mt-10 text-left pl-12 text-3xl manrope-medium">Property Type</div>
                                <div className="mt-6 flex justify-evenly w-[600px] ml-5">
                                    {options.map((option) => (
                                        <div key={option} onClick={() => setpropSelect(option)} className={`cursor-pointer mt-4 border-2 border-[#DDCDC1] w-[180px] h-[50px] text-center pt-3 pr-3 rounded-4xl text-white manrope-medium 
                            
                            ${propSelect === option ? "bg-[#ef0101] border-[#DDCDC1]" : ""

                                            }`}>

                                            {option}
                                        </div>
                                    ))}
                                </div>

                                <div className="relative inline-block  text-left timeslot-wrapper">
                                    <button type="button" onClick={() => setOpen(!open)} className="w-[580px] h-[60px] mt-14 ml-8 rounded-4xl text-white text-xl border-2 border-[#DDCDC1] flex justify-between p-4 pl-6 manrope">{Selected} {!open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                    }
                                    </button>
                                    {open && (
                                        <div className="absolute z-10 mt-2 w-[570px] max-h-50 bg-white border-2 border-[#ddcdc1] rounded-md shadow-lg ml-10 overflow-y-auto">
                                            <ul className="py-1 text-gray-700">
                                                {timeSlots.map((slot) => (
                                                    <li
                                                        key={slot}
                                                        onClick={() => {
                                                            setSelected(slot);
                                                            setOpen(false);
                                                        }}
                                                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${Selected === slot ? "bg-gray-200 font-medium" : ""
                                                            }`}
                                                    >
                                                        {slot}
                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* File Upload Section */}
                                <div className="mt-8 ml-10">
                                    <div className="text-white text-lg mb-3">Upload Files (Optional)</div>
                                    <div className="flex items-start space-x-4">
                                        <div className="flex flex-col space-y-2">
                                            <input
                                                type="file"
                                                onChange={handleFileChange}
                                                accept="image/*,.pdf,.doc,.docx"
                                                className="hidden"
                                                id="file-upload"
                                            />
                                            <label
                                                htmlFor="file-upload"
                                                className="cursor-pointer bg-[#ef0101] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                                            >
                                                Choose File
                                            </label>
                                            {selectedFile && (
                                                <div className="text-white text-sm">
                                                    {selectedFile.name}
                                                </div>
                                            )}
                                        </div>
                                        {filePreview && (
                                            <div className="flex flex-col items-center">
                                                <img
                                                    src={filePreview}
                                                    alt="Floor plan preview"
                                                    className="w-40 h-32 object-cover rounded border border-[#DDCDC1]"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={removeFile}
                                                    className="mt-2 text-red-400 hover:text-red-300 text-sm underline"
                                                >
                                                    Remove File
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="  flex mt-10 pl-14">
                                    <input type="checkbox" required />
                                    <label className="ml-4 text-white ">Yes, all provided details are correct</label>
                                </div>

                                {/* Submit message display */}
                                {submitMessage && (
                                    <div className={`mt-4 ml-10 text-sm ${submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                                        {submitMessage}
                                    </div>
                                )}

                                <div className="mt-10 relative">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-[200px] h-[60px] border-2 border-[#ddcdc1] manrope-medium text-white ml-10 text-2xl rounded-4xl hover:bg-[#ef0101] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </div>
                            </form>
                            <div>
                            </div>
                        </div>
                        <div className="text-5xl w-[620px] h-[100px] text-white wulkan-display pt-160 pl-6">Complete Home Interiors
                            <div className="text-2xl w-[620px] h-[100px] text-white manrope-medium pt-4 pl-3">Tailored For Every Style & Lifestyle</div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="lg:hidden block h-[1100px] bg-white">
                <div className="w-screen h-[1000px] bg-white">
                    <div className="relative">
                        <div className="relative ">
                            <img src="jitmob.png" className="absolute h-[700px] w-screen"></img>
                            <img src="LOGO.png" alt="Logo" className="absolute top-4 w-[100px] h-[40px] m-4"></img>
                        </div>

                        {/* Mobile Form */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-64 w-full px-4">

                            <form
                                onSubmit={handleMobileSubmit}
                                className="w-full max-w-[425px] mx-auto px-6 py-10 
                                    bg-black/40 backdrop-blur-md rounded-3xl shadow-lg 
                                    overflow-visible space-y-6">

                                <h1 className="text-white text-2xl wulkan-display text-center">
                                    Complete Home Interiors
                                </h1>

                                {/* Name Input */}
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                                    className="w-full h-[50px] border-2 border-[#DDCDC1] rounded-3xl placeholder-white pl-4 text-white"
                                    placeholder="Name"
                                    required
                                />

                                {/* Email Input */}
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                                    className="w-full h-[50px] border-2 border-[#DDCDC1] rounded-3xl placeholder-white pl-4 text-white"
                                    placeholder="Email"
                                />

                                {/* Phone Input */}
                                <input
                                    type="tel"
                                    name="phonennumber"
                                    value={form.phonennumber}
                                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                                    className="w-full h-[50px] border-2 border-[#DDCDC1] rounded-3xl placeholder-white pl-4 text-white"
                                    placeholder="Phone Number"
                                />

                                {/* PINCODE */}
                                <div className="relative pincode-wrapper">
                                    <input
                                        type="text"
                                        value={pincodeSearch || selectedPincode}
                                        onChange={(e) => {
                                            const raw = e.target.value.replace(/\D/g, '').slice(0, 6);
                                            setPincodeSearch(raw);
                                            setSelectedPincode(raw);
                                            setForm(prev => ({ ...prev, pincode: raw }));
                                            setPincodeOpen(true);
                                        }}
                                        onFocus={() => setPincodeOpen(true)}
                                        placeholder="Pincode"
                                        maxLength={6}
                                        className="w-full h-[50px] border-2 border-[#DDCDC1] rounded-3xl pl-4 text-white text-sm bg-transparent"
                                    />

                                    {pincodeOpen && (
                                        <div className="absolute z-20 mt-2 w-full max-h-40 bg-white border-2 border-[#DDCDC1] rounded-md shadow-lg overflow-y-auto">
                                            <ul className="py-1 text-gray-700">
                                                {pincodes
                                                    .filter(pin => pin.toString().includes(pincodeSearch))
                                                    .map((pin) => (
                                                        <li
                                                            key={pin}
                                                            onClick={() => { handlePincodeChange(pin); setPincodeSearch(pin); }}
                                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                                                        >
                                                            {pin}
                                                        </li>
                                                    ))}

                                                {pincodes.filter(pin => pin.toString().includes(pincodeSearch)).length === 0 && (
                                                    <li className="px-4 py-2 text-sm text-gray-500">No results</li>
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* PROPERTY TYPE */}
                                <div>
                                    <div className="text-white text-lg font-medium mb-2">Property Type</div>
                                    <div className="flex flex-wrap gap-3">
                                        {options.map((option) => (
                                            <div
                                                key={option}
                                                onClick={() => setpropSelect(option)}
                                                className={`cursor-pointer border-2 border-[#DDCDC1] px-4 py-2 rounded-3xl text-white text-sm
                     ${propSelect === option ? "bg-[#ef0101]" : ""}`}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Time Slot */}
                                <div className="relative timeslot-wrapper">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(!open)}
                                        className="w-full h-[50px] rounded-3xl border-2 border-[#DDCDC1] text-white text-sm flex justify-between items-center px-4"
                                    >
                                        {Selected}
                                        {open ? (
                                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>
                                        ) : (
                                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        )}
                                    </button>

                                    {open && (
                                        <div className="absolute z-20 mt-2 w-full max-h-40 bg-white border-2 border-[#DDCDC1] rounded-md shadow-lg overflow-y-auto">
                                            <ul className="py-1 text-gray-700">
                                                {timeSlots.map((slot) => (
                                                    <li
                                                        key={slot}
                                                        onClick={() => { setSelected(slot); setOpen(false); }}
                                                        className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 
                ${Selected === slot ? "bg-gray-200 font-medium" : ""}`}
                                                    >
                                                        {slot}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* FILE UPLOAD */}
                                <div>
                                    <div className="text-white text-sm mb-2">Upload Files (Optional)</div>
                                    <div className="flex gap-3 items-start">
                                        <div>
                                            <input type="file" id="file-upload-mobile" onChange={handleFileChange}
                                                accept="image/*,.pdf,.doc,.docx" className="hidden" />

                                            <label htmlFor="file-upload-mobile"
                                                className="cursor-pointer bg-[#ef0101] text-white px-3 py-1 rounded text-xs hover:bg-red-700">
                                                Choose File
                                            </label>

                                            {selectedFile && <div className="text-white text-xs mt-1 truncate">{selectedFile.name}</div>}
                                        </div>

                                        {filePreview && (
                                            <div className="flex flex-col items-center">
                                                <img src={filePreview} className="w-24 h-20 object-cover rounded border border-[#DDCDC1]" />
                                                <button type="button" onClick={removeFile}
                                                    className="text-red-400 hover:text-red-300 text-xs underline mt-1">Remove</button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* CHECKBOX */}
                                <label className="flex items-center gap-2 text-white text-sm">
                                    <input type="checkbox" required />
                                    Yes, all provided details are correct
                                </label>

                                {/* MESSAGE */}
                                {submitMessage && (
                                    <div className={`text-xs ${submitMessage.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                                        {submitMessage}
                                    </div>
                                )}

                                {/* SUBMIT BUTTON */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full h-[50px] border-2 border-[#DDCDC1] text-white text-lg rounded-3xl 
                hover:bg-[#ef0101] transition-all duration-200 
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}