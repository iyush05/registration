import { ChevronDown, X, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export default function RegistrationClose() {

    return (
        <>  
            <div id="register" className="relative z-1 floating-dots min-h-screen">
                <div className="min-h-screen flex items-center justify-center font-sans">
                    <div className="rounded-2xl shadow-lg flex w-full max-w-4xl overflow-hidden p-1">
                        <p className='text-6xl text-center font-serif'>Registrations are now closed—thank you for your interest!</p>
                    </div>
                </div>
            </div>
        </>
    );
}