'use client'

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function HeroSection() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [propSelect,setpropSelect]= useState("");
    const options =["2BHK","3BHK","4+BHK/Duplex"]
    const [Selected, setSelected] = useState("Book A slot");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    const [form,setForm]=useState({
        name:"",
        email:"",
        phonennumber:"",
        pincode:"",
        Scheduler:"",
        property:""
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

        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            const response = await fetch('/api/landingpage2-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: updatedForm.name,
                    phone: updatedForm.phonennumber,
                    email: updatedForm.email,
                    pincode: updatedForm.pincode,
                    propertyType: updatedForm.property,
                    timeSlot: updatedForm.Scheduler,
                    pageUrl: window.location.href
                }),
            });

            const data = await response.json();

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
                
                // Navigate to Thank-You page after successful submission
                setTimeout(() => {
                    // Set flag to trigger reload on Thank You page
                    sessionStorage.setItem('formSubmitted', 'true');
                    router.push('/Thank-You');
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

        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            const response = await fetch('/api/landingpage2-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: updatedForm.name,
                    phone: updatedForm.phonennumber,
                    email: updatedForm.email,
                    pincode: updatedForm.pincode,
                    propertyType: updatedForm.property,
                    timeSlot: updatedForm.Scheduler,
                    pageUrl: window.location.href
                }),
            });

            const data = await response.json();

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
                
                // Navigate to Thank-You page after successful submission
                setTimeout(() => {
                    // Set flag to trigger reload on Thank You page
                    sessionStorage.setItem('formSubmitted', 'true');
                    router.push('/Thank-You');
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
        <div className="lg:block hidden relative w-screen h-screen">
            <Image 
                src="/bn.jpg" 
                alt="Hero background" 
                fill
                className="object-cover border-4 rounded-4xl border-black"
                loading="lazy"
            />
            <div className="absolute inset-0 flex items-center">
                <div className="relative flex">      
                    <div className="w-[650px] h-[823px] ml-1 bg-black/50 shadow-lg backdrop-blur-md overflow-hidden rounded-l-3xl"> 
                    <img src="hub.png" className="w-[180px] h-[75px] ml-10 mt-6"></img>
                    <form onSubmit={handleSubmit}>
                    <div className="flex ">
                       <input type="text" name="name" placeholder="Name" value={form.name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setForm({...form,[e.target.name]: e.target.value})}} className="w-[250px] h-[60px] border-2 border-[#DDCDC1] pl-8 rounded-4xl m-10 placeholder-white manrope  "></input>
                       <input type="text" name="email" placeholder="Email" value={form.email} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setForm({...form,[e.target.name]: e.target.value})}} className="w-[250px] h-[60px] border-2 border-[#DDCDC1] pl-8 rounded-4xl m-10 placeholder-white manrope"></input>
                    </div>
                    <div className="flex mt-4">
                    <input type="text" name="phonennumber"  placeholder="PhoneNumber" value={form.phonennumber} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setForm({...form,[e.target.name]:e.target.value})}} className="w-[250px] h-[60px] border-2 border-[#ddcdc1] pl-8 rounded-4xl ml-8 placeholder-white manrope"></input>
                    <input type="text" name="pincode" placeholder="Pincode (Banglore)" value={form.pincode} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setForm({...form,[e.target.name]:e.target.value})}} className="w-[250px] h-[60px] border-2 border-[#ddcdc1] pl-8 rounded-4xl ml-20 placeholder-white manrope"></input>
                    </div>
                {/* Selectables */}
                    <div className="text-white mt-10 text-left pl-12 text-3xl manrope-medium">Property Type</div>
                    <div className="mt-6 flex justify-evenly w-[600px] ml-5">
                        {options.map((option)=>(
                            <div key={option} onClick={()=> setpropSelect(option)} className={`cursor-pointer mt-4 border-2 border-[#DDCDC1] w-[180px] h-[50px] text-center pt-3 pr-3 rounded-4xl text-white manrope-medium 
                            
                            ${
                                propSelect === option ? "bg-[#ef0101] border-[#DDCDC1]" : ""

                            }`}>

                                {option}
                            </div>
                        ))}
                    </div>  

                    <div className="relative inline-block  text-left">
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
                                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                                    Selected === slot ? "bg-gray-200 font-medium" : ""
                                    }`}
                                >
                                    {slot}
                                </li>
                        ))}

                        </ul>
                        </div>
                    )}
                    </div> 
                    <div className="  flex mt-10 pl-14">
                        <input type="checkbox" required/>
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
                        <img src="jit.png" className="absolute h-[700px] w-screen"></img>
                        <img src="LOGO.png" alt="Logo" className="absolute top-4 w-[100px] h-[40px] m-4"></img>
                    </div>
                    
                    {/* Mobile Form */}
                    <form onSubmit={handleMobileSubmit} className="w-[320px] h-[720px] bg-black/40 backdrop-blur-md absolute rounded-3xl top-90 ml-5 overflow-hidden shadow-lg">
                        {/* Name Input */}
                        <h1 className="pl-4 pt-10 text-white text-2xl wulkan-display">Complete Home Interiors</h1>
                        <input 
                            type="text" 
                            name="name"
                            value={form.name}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setForm({...form,[e.target.name]: e.target.value})}}
                            className="required w-[260px] h-[50px] border-2 border-[#DDCDC1] rounded-3xl placeholder-white pl-4 mt-8 ml-6 text-white" 
                            placeholder="Name"
                        />
                        
                        {/* Email Input */}
                        <input 
                            type="email" 
                            name="email"
                            value={form.email}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setForm({...form,[e.target.name]: e.target.value})}}
                            className="w-[260px] h-[50px] border-2 border-[#DDCDC1] rounded-3xl placeholder-white pl-4 mt-4 ml-6 text-white" 
                            placeholder="Email"
                        />
                        
                        {/* Phone Input */}
                        <input 
                            type="tel" 
                            name="phonennumber"
                            value={form.phonennumber}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setForm({...form,[e.target.name]: e.target.value})}}
                            className="w-[260px] h-[50px] border-2 border-[#DDCDC1] rounded-3xl placeholder-white pl-4 mt-4 ml-6 text-white" 
                            placeholder="Phone Number"
                        />
                        
                        {/* Pincode Input */}
                        <input 
                            type="text" 
                            name="pincode"
                            value={form.pincode}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setForm({...form,[e.target.name]: e.target.value})}}
                            className="w-[260px] h-[50px] border-2 border-[#DDCDC1] rounded-3xl placeholder-white pl-4 mt-4 ml-6 text-white" 
                            placeholder="Pincode (Bangalore)"
                        />
                        
                        {/* Property Type Selection */}
                        <div className="mt-6 ml-6">
                            <div className="text-white text-lg font-medium mb-3">Property Type</div>
                            <div className="flex flex-row space-y-2">
                                {options.map((option)=>(
                                    <div 
                                        key={option} 
                                        onClick={()=> setpropSelect(option)} 
                                        className={` cursor-pointer border-2 border-[#DDCDC1] w-[200px] mr-4 h-[40px] text-center pt-2 rounded-3xl text-white text-sm
                                        ${propSelect === option ? "bg-[#ef0101] border-[#DDCDC1]" : ""} ${option === "4+BHK/Duplex" ? "w-[300px] px-4" : ""}`}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Time Slot Selection */}
                        <div className="mt-6 ml-6">
                            <div className="relative">
                                <button 
                                    type="button"
                                    onClick={() => setOpen(!open)} 
                                    className="w-[260px] h-[50px] rounded-3xl text-white text-sm border-2 border-[#DDCDC1] flex justify-between items-center px-4"
                                >
                                    {Selected}
                                    {!open ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                    )}
                                </button>
                                
                                {open && (
                                    <div className="absolute z-10 mt-2 w-[260px] max-h-40 bg-white border-2 border-[#ddcdc1] rounded-md shadow-lg overflow-y-auto">
                                        <ul className="py-1 text-gray-700">
                                            {timeSlots.map((slot) => (
                                                <li
                                                    key={slot}
                                                    onClick={() => {
                                                        setSelected(slot);
                                                        setOpen(false);
                                                    }}
                                                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm ${
                                                        Selected === slot ? "bg-gray-200 font-medium" : ""
                                                    }`}
                                                >
                                                    {slot}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Checkbox */}
                        <div className="flex mt-6 ml-6">
                            <input type="checkbox" required className="mt-1"/>
                            <label className="ml-3 text-white text-sm">Yes, all provided details are correct</label>
                        </div>
                        
                        {/* Submit Message */}
                        {submitMessage && (
                            <div className={`mt-4 ml-6 text-xs ${submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                                {submitMessage}
                            </div>
                        )}
                        
                        {/* Submit Button */}
                        <div className="mt-6 ml-6">
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`w-[260px] h-[50px] border-2 border-[#ddcdc1] text-white text-lg rounded-3xl hover:bg-[#ef0101] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>     
            </div>
        </div>
    </div>
    );
}