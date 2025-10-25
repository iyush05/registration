import { ChevronDown, X, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

// Toast Component
const Toast = ({ message, type, onClose, duration = 5000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, duration]);

    const getToastStyles = () => {
        const baseStyles = "fixed top-4 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg border backdrop-blur-sm transform transition-all duration-300 ease-in-out";
        
        if (type === 'success') {
            return `${baseStyles} bg-green-900/90 border-green-500 text-green-100`;
        } else {
            return `${baseStyles} bg-red-900/90 border-red-500 text-red-100`;
        }
    };

    const Icon = type === 'success' ? CheckCircle : AlertCircle;

    return (
        <div className={getToastStyles()}>
            <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                    <p className="text-sm font-medium">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

// Toast Container Component
const ToastContainer = ({ toasts, removeToast }) => {
    return (
        <div className="fixed top-0 right-0 z-50 p-4 space-y-2">
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                    duration={toast.duration}
                />
            ))}
        </div>
    );
};

// Custom hook for toast management
const useToast = () => {
    const [toasts, setToasts] = useState([]);

    const showToast = (message, type = 'error', duration = 5000) => {
        const id = Date.now() + Math.random();
        const newToast = { id, message, type, duration };
        
        setToasts(prev => [...prev, newToast]);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return { toasts, showToast, removeToast };
};

export default function RegistrationForm() {
    const { toasts, showToast, removeToast } = useToast();
    const [captchaValue, setCaptchaValue] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSendingOTP, setIsSendingOTP] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
    const CAPTCHA_SITE = import.meta.env.VITE_CAPTCHA_SITE;

    const handleCaptcha = (value) => {
        console.log("Captcha value:", value);
        setCaptchaValue(value);
    };

    const [form, setForm] = useState({
        name: '',
        studentNo: '',
        email: '',
        otp: '',
        phone: '',
        gender: '',
        branch: '',
        hostelStatus: '',
        updates: false,
    });

    // Validation functions
    const validateName = (name) => {
        const trimmed = name.trim();
        if (!trimmed) return "Name is required";
        return null;
    };

    const validateStudentNo = (studentNo) => {
    const trimmed = studentNo.trim();
    if (!trimmed) return "Student number is required";
    if (!trimmed.startsWith("23") && !trimmed.startsWith("24") && !trimmed.startsWith("25")) {
        return "Only 1st , 2nd and 3rd year students are eligible";
    }
    return null;
};

    const validateEmail = (email, studentNo = '') => {
        if (!email) return "Email is required";
        
        if (!email.endsWith('@akgec.ac.in')) {
            return "Please use your official college email ending with @akgec.ac.in";
        }
        
        const emailPrefix = email.split('@')[0];
        
        if (studentNo && studentNo.trim()) {
            if (!emailPrefix.includes(studentNo.trim())) {
                return `Please enter your own college email address. Example: yourname${studentNo}@akgec.ac.in`;
            }
        }
        
        const emailFormatRegex = /^[a-z]+[0-9]+$/;
        if (!emailFormatRegex.test(emailPrefix)) {
            return "Email format should be: yourname followed by numbers @akgec.ac.in";
        }
        
        return null;
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phone) return "Phone number is required";
        if (!phoneRegex.test(phone)) return "Valid phone number is required";
        return null;
    };

    const validateBranch = (branch) => {
        if (!branch) return "Branch is required";
        return null;
    };

    const validateHostelStatus = (status) => {
        const validStatuses = ["Hosteler", "Day Scholar"];
        if (!status) return "Hostel status is required";
        if (!validStatuses.includes(status)) return "Invalid hostel status";
        return null;
    };

    const validateGender = (gender) => {
        const validGenders = ["male", "female"];
        if (!gender) return "Gender is required";
        if (!validGenders.includes(gender)) return "Gender must be Male or Female";
        return null;
    };

    const validateOTP = (otp) => {
        if (!otp) return "OTP is required";
        if (otp.length !== 6) return "OTP must be 6 digits";
        if (!/^\d{6}$/.test(otp)) return "OTP must contain only numbers";
        return null;
    };

    const validateFormForOTP = () => {
        const newErrors = {};

        const nameError = validateName(form.name);
        if (nameError) newErrors.name = nameError;

        const studentNoError = validateStudentNo(form.studentNo);
        if (studentNoError) newErrors.studentNo = studentNoError;

        const emailError = validateEmail(form.email, form.studentNo);
        if (emailError) newErrors.email = emailError;

        const phoneError = validatePhone(form.phone);
        if (phoneError) newErrors.phone = phoneError;

        const branchError = validateBranch(form.branch);
        if (branchError) newErrors.branch = branchError;

        const hostelError = validateHostelStatus(form.hostelStatus);
        if (hostelError) newErrors.hostelStatus = hostelError;

        const genderError = validateGender(form.gender);
        if (genderError) newErrors.gender = genderError;

        if (!captchaValue) {
            newErrors.captcha = "Please complete the captcha";
        }

        return newErrors;
    };

    const validateForm = () => {
        const formErrors = validateFormForOTP();
        
        const otpError = validateOTP(form.otp);
        if (otpError) formErrors.otp = otpError;

        return formErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }

        if (name === 'studentNo' && errors.email) {
            setErrors(prev => ({
                ...prev,
                email: null
            }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = null;

        switch (name) {
            case 'name':
                error = validateName(value);
                break;
            case 'studentNo':
                error = validateStudentNo(value);
                if (!error && form.email) {
                    const emailError = validateEmail(form.email, value);
                    if (emailError) {
                        setErrors(prev => ({
                            ...prev,
                            email: emailError
                        }));
                    }
                }
                break;
            case 'email':
                error = validateEmail(value, form.studentNo);
                break;
            case 'phone':
                error = validatePhone(value);
                break;
            case 'branch':
                error = validateBranch(value);
                break;
            case 'hostelStatus':
                error = validateHostelStatus(value);
                break;
            case 'gender':
                error = validateGender(value);
                break;
            case 'otp':
                error = validateOTP(value);
                break;
        }

        if (error) {
            setErrors(prev => ({
                ...prev,
                [name]: error
            }));
        }
    };

    // Send OTP function with toast notifications
    const handleSendOTP = async () => {
        setIsSendingOTP(true);

        const formErrors = validateFormForOTP();
        
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setIsSendingOTP(false);
            showToast('Please fix the validation errors before sending OTP', 'error');
            return;
        }

        console.log('Sending registration data:', form);

        try {
            const registrationData = {
                name: form.name,
                studentNo: form.studentNo,
                branch: form.branch,
                gender: form.gender,
                email: form.email,
                phone: form.phone,
                hostelStatus: form.hostelStatus,
                reCaptchaValue: captchaValue,
            };

            console.log('Registration payload:', registrationData);

            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData)
            });

            const data = await response.json();
            console.log('Backend response:', data);

            if (response.ok) {
                showToast(data.message, 'success');
                setOtpSent(true);
                setErrors({});
            } else {
                if (data.error) {
                    showToast(data.error, 'error');
                } else if (data.errors) {
                    // Handle validation errors from express-validator
                    const backendErrors = {};
                    data.errors.forEach(err => {
                        backendErrors[err.path || err.param] = err.msg;
                    });
                    setErrors(backendErrors);
                    showToast('Please fix the validation errors', 'error');
                } else {
                    showToast('Failed to send OTP. Please try again.', 'error');
                }
            }
        } catch (error) {
            console.error('Send OTP error:', error);
            showToast('Network error. Please check your connection and try again.', 'error');
        } finally {
            setIsSendingOTP(false);
        }
    };

    // Resend OTP function with toast notifications
    const handleResendOTP = async () => {
        setIsSendingOTP(true);

        try {
            const response = await fetch(`${API_BASE_URL}/resend-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: form.email
                })
            });

            const data = await response.json();

            if (response.ok) {
                showToast(data.message, 'success');
            } else {
                showToast(data.error || 'Failed to resend OTP. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Resend OTP error:', error);
            showToast('Network error. Please try again.', 'error');
        } finally {
            setIsSendingOTP(false);
        }
    };

    // Submit form function with toast notifications
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formErrors = validateForm();
        
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setIsSubmitting(false);
            showToast('Please fix the validation errors before submitting', 'error');
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/verify-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: form.email,
                    otp: form.otp
                })
            });

            const data = await response.json();

            if (response.ok) {
                showToast(data.message, 'success', 6000);
                setErrors({});
                setIsRegistered(true);
                // Reset form after successful registration
                setTimeout(() => {
                    setForm({
                        name: '',
                        studentNo: '',
                        email: '',
                        otp: '',
                        phone: '',
                        gender: '',
                        branch: '',
                        hostelStatus: '',
                        updates: false,
                    });
                    setOtpSent(false);
                    setCaptchaValue(null);
                }, 5000);
                
            } else {
                showToast(data.error || 'Failed to verify OTP. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Verify OTP error:', error);
            showToast('Network error. Please try again.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const getInputClassName = (fieldName) => {
        const baseClass = "w-full bg-[#33333A] border rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2";
        const errorClass = errors[fieldName] ? "border-red-500 focus:ring-red-500" : "border-zinc-600 focus:ring-blue-500";
        return `${baseClass} ${errorClass}`;
    };

    const getSelectClassName = (fieldName) => {
        const baseClass = "w-full bg-[#33333A] border rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2";
        const errorClass = errors[fieldName] ? "border-red-500 focus:ring-red-500" : "border-zinc-600 focus:ring-blue-500";
        return `${baseClass} ${errorClass}`;
    };

    return (
        <>
            <ToastContainer toasts={toasts} removeToast={removeToast} />
            
            <div id="register" className="relative z-1 min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950">
                <div className="min-h-screen flex items-center justify-center font-sans">
                    <div className="rounded-2xl shadow-lg flex w-full max-w-4xl overflow-hidden">
                        <div className="w-full p-8 text-white md:p-12">
                            {isRegistered ? (
                                <div className="text-center">
                                    <h2 className="mb-4 text-3xl font-bold text-green-400">
                                        Registered Successfully! 🎉
                                    </h2>
                                    <p className="text-zinc-300">
                                        Thank you for registering. We'll contact you soon.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="mb-4 text-3xl font-bold">Register Now</h2>
                                    <p className="mb-8 text-zinc-400">
                                        Please fill out the form below to complete your registration.
                                    </p>

                                    <div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                                            {/* Name */}
                                            <div>
                                                <input   
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="name"
                                                    type="text" 
                                                    placeholder="Name" 
                                                    className={getInputClassName('name')}
                                                    disabled={otpSent}
                                                />
                                                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                                            </div>
                                            
                                            {/* Student No */}
                                            <div>
                                                <input 
                                                    value={form.studentNo}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="studentNo"
                                                    type="text" 
                                                    placeholder="Student Number" 
                                                    className={getInputClassName('studentNo')}
                                                    disabled={otpSent}
                                                />
                                                {errors.studentNo && <p className="mt-1 text-sm text-red-400">{errors.studentNo}</p>}
                                            </div>

                                            {/* Email */}
                                            <div className="md:col-span-2">
                                                <input 
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="email"
                                                    type="email" 
                                                    placeholder="Email Address (e.g. yourname2410043@akgec.ac.in)" 
                                                    className={getInputClassName('email')}
                                                    disabled={otpSent}
                                                />
                                                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <input 
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="phone" 
                                                    type="tel" 
                                                    placeholder="Mobile No." 
                                                    className={getInputClassName('phone')}
                                                    disabled={otpSent}
                                                />
                                                {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                                            </div>

                                            {/* Gender */}
                                            <div className="relative">
                                                <select 
                                                    className={getSelectClassName('gender')} 
                                                    value={form.gender} 
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="gender"
                                                    disabled={otpSent}
                                                >
                                                    <option value="" disabled className="text-zinc-400">Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-zinc-400">
                                                    <ChevronDown size={20} />
                                                </div>
                                                {errors.gender && <p className="mt-1 text-sm text-red-400">{errors.gender}</p>}
                                            </div>

                                            {/* Branch */}
                                            <div className="relative">
                                                <select 
                                                    className={getSelectClassName('branch')} 
                                                    value={form.branch} 
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="branch"
                                                    disabled={otpSent}
                                                >
                                                    <option value="" disabled className="text-zinc-400">Branch</option>
                                                    <option value="CSE">CSE</option>
                                                    <option value="CSE(AIML)">CSE(AIML)</option>
                                                    <option value="CSE(DS)">CSE(DS)</option>
                                                    <option value="CSE(HINDI)">CSE(HINDI)</option>
                                                    <option value="CS">CS</option>
                                                    <option value="CSIT">CSIT</option>
                                                    <option value="IT">IT</option>
                                                    <option value="ECE">ECE</option>
                                                    <option value="EN">EN</option>
                                                    <option value="ME">ME</option>
                                                    <option value="CIVIL">CIVIL</option>
                                                    <option value="AIML">AIML</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-zinc-400">
                                                    <ChevronDown size={20} />
                                                </div>
                                                {errors.branch && <p className="mt-1 text-sm text-red-400">{errors.branch}</p>}
                                            </div>

                                            {/* Hostel Status */}
                                            <div className="relative">
                                                <select 
                                                    className={getSelectClassName('hostelStatus')} 
                                                    value={form.hostelStatus} 
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="hostelStatus"
                                                    disabled={otpSent}
                                                >
                                                    <option value="" disabled className="text-zinc-400">Hostel Status</option>
                                                    <option value="Hosteler">Hosteller</option>
                                                    <option value="Day Scholar">Day Scholar</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-zinc-400">
                                                    <ChevronDown size={20} />
                                                </div>
                                                {errors.hostelStatus && <p className="mt-1 text-sm text-red-400">{errors.hostelStatus}</p>}
                                            </div>

                                            {/* OTP */}
                                            {otpSent && <div>
                                                <input 
                                                    value={form.otp}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="otp"
                                                    type="text" 
                                                    placeholder="Enter 6-digit OTP" 
                                                    className={getInputClassName('otp')}
                                                    maxLength="6"
                                                />
                                                {errors.otp && <p className="mt-1 text-sm text-red-400">{errors.otp}</p>}
                                            </div>}
                                        </div>

                                        <div className="flex items-center mt-8 mb-6">
                                            <input 
                                                type="checkbox" 
                                                checked={form.updates} 
                                                onChange={(e) => setForm(prev => ({...prev, updates: e.target.checked}))} 
                                                name="updates" 
                                                id="updates" 
                                                className="w-5 h-5 bg-[#33333A] border-zinc-600 rounded text-blue-500 focus:ring-blue-500" 
                                            />
                                            <label htmlFor="updates" className="ml-3 text-zinc-400">I agree to receive updates about GDG events</label>
                                        </div>

                                        <div className='pb-2'>
                                            <ReCAPTCHA 
                                                sitekey={CAPTCHA_SITE}
                                                onChange={handleCaptcha} 
                                            />
                                            {errors.captcha && <p className="mt-1 text-sm text-red-400">{errors.captcha}</p>}
                                        </div>

                                        <div className="flex justify-center mb-2 md:grid-cols-2 gap-x-6 gap-y-6 mb-2">
                                            <button  
                                                type="button"
                                                onClick={otpSent ? handleResendOTP : handleSendOTP}
                                                disabled={isSendingOTP}
                                                className="w-full max-w-44 px-4 py-3 font-bold text-white transition duration-300 rounded-lg bg-[#0ea5e9] hover:bg-[#318cb7] disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSendingOTP ? 'Sending...' : (otpSent ? 'Resend OTP' : 'Send OTP')}
                                            </button>
                                        </div>

                                        <button  
                                            type="submit"
                                            onClick={handleSubmit}
                                            disabled={isSubmitting || !otpSent}
                                            className="w-full px-4 py-3 font-bold text-white transition duration-300 rounded-lg bg-[#0ea5e9] hover:bg-[#318cb7] disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'Verifying...' : 'Secure My Spot'}
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}