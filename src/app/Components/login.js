'use client'
import { useEffect,useState } from "react"
import React from "react"
import {getAuth,RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth"
import {app} from '../config';
import { useRouter } from "next/navigation";

export default function Login(){
    const [phoneNumber,setPhoneNumber]= useState('');
    const [otp, setOtp]= useState('');
    const [confirmationResult,setConfirmationResult]=useState(null)
    const [otpSent,setOtpSent]= useState(false);
    const auth=getAuth(app);
    const router=useRouter();

    useEffect(()=>{
        if (window.recaptchaVerifier) {
            window.recaptchaVerifier.clear(); 
            window.recaptchaVerifier = null;
          }

        window.recaptchaVerifier = new RecaptchaVerifier(auth,"recaptcha-container",{
            'size': 'normal',
            'callback': ()=>{

            },
            'expired-callack':()=>{

            }
        })
    },[auth])

    const handlePhoneNumberChange = (e)=>{
        setPhoneNumber(e.target.value);
    };

    const handleOtpChange = (e)=>{
        setOtp(e.target.value);
    };

    const handleSendOtp = async()=>{
        try{
            const formattedPhoneNUmber= `+${phoneNumber.replace(/\D/g," ")}`
            const confirmation = await signInWithPhoneNumber(auth,formattedPhoneNUmber,window.recaptchaVerifier)
            setConfirmationResult(confirmation);
            setOtpSent(true);
            setPhoneNumber('');
            alert('Otp has been sent');
        }catch(error){
            console.error(error);
        }
       
    };

    const handleOtpSubmit = async () =>{
        try{
            await confirmationResult.confirm(otp);
            setOtp('');
            router.push('/interior-designers-in-bangalore')
        }catch (error){
            console.error(error)
        }
    };

    return <div>
        {!otpSent ? (
            <div id='recaptcha-container'></div>
        ):null}
        <input 
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter Your Phone Number"
            className="border border-gray-500 p-2 rounded-md"
        />
        <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter Otp"
            className="border border-gray-500 p-2 rounded-md"
        />
        <button onClick={otpSent ? handleOtpSubmit : handleSendOtp}
            className={`bg-${otpSent ? 'green' : 'blue'}-500 text-white p-2 rounded-md m-2`}
            style={{backgroundColor: otpSent ? 'green' : 'blue'}}
        >
            {otpSent ? 'Submit OTP' : 'Send OTP'}
        </button>
    </div>
    
}