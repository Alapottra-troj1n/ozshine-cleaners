"use client"
import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';
import { MdInfo, MdClose } from 'react-icons/md';
import toast, { Toaster } from "react-hot-toast";
import { IoIosArrowDown } from 'react-icons/io';
import axios from 'axios';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (showSuccessModal) {
            const timer = setTimeout(() => {
                setShowSuccessModal(false);
            }, 30000); 

            return () => clearTimeout(timer);
        }
    }, [showSuccessModal]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (showSuccessModal) {
                    setShowSuccessModal(false);
                } else {
                    onClose();
                }
            }
        };

        if (isOpen || showSuccessModal) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, showSuccessModal, onClose]);

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const templateParams = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            service: formData.get("service"),
            message: formData.get("message"),
        };

        setIsLoading(true);

        try {
            const response = await axios.post(
                "https://o-zshinecleaners-server.vercel.app/quoteInfo",
                templateParams,
                { withCredentials: true }
            );

            if (response.data.success) {
                formRef.current?.reset();

                // 🚀 THE KEY CHANGE: Close the main modal and then open the success modal
                onClose();
                setShowSuccessModal(true);
            }
        } catch (error) {
            console.error("Error submitting request:", error);
            toast.error("Failed to submit request. Please try again.", {
                duration: 4000,
                position: "top-center",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoHome = () => {
        setShowSuccessModal(false);
        router.push('/');
    };

    if (!isOpen) {
        // Only return null if both modals are closed
        if (!showSuccessModal) return null;
    }

    return (
        <>
            <Toaster />

            {/* Success Modal - Renders when showSuccessModal is true, independent of isOpen */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
                    <div className={`bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center transform transition-all duration-300 ${poppins.className}`}>
                        {/* Close button for success modal */}
                        <button
                            onClick={() => setShowSuccessModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-200"
                            aria-label="Close success modal">
                            <MdClose className="text-2xl" />
                        </button>

                        {/* Success Icon */}
                        <div className="mx-auto w-20 h-20 bg-gradient-to-r from-[#0F5E46] to-[#1a7a5e] rounded-full flex items-center justify-center mb-6">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        {/* Success Message */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Thank You! 🎉
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Your quote request has been received! We'll call you within <span className="font-semibold text-[#0F5E46]">30 minutes</span> to confirm your details and provide a personalized quote.
                        </p>

                        {/* Buttons */}
                        <div className="space-y-3">
                            <a
                                href="tel:+61452676982"
                                className="bg-gradient-to-r from-[#FF6500] to-[#ff8534] hover:from-[#e55a00] hover:to-[#ff6500] text-white font-bold py-4 px-6 rounded-lg w-full flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                <FaPhone className="text-xl scale-x-[-1]" />
                                Call Us Now: +61452676982
                            </a>

                            <button
                                onClick={handleGoHome}
                                className="bg-gradient-to-r from-[#0F5E46] to-[#1a7a5e] hover:from-[#0d4d39] hover:to-[#15654d] text-white font-bold py-4 px-6 rounded-lg w-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Go To Home
                            </button>
                        </div>

                        {/* Auto-close notice */}
                        <p className="text-xs text-gray-400 mt-6">
                            This message will automatically close in 30 seconds
                        </p>
                    </div>
                </div>
            )}

            {/* Backdrop and Main Modal - Only render when isOpen is true */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none ${poppins.className}`}>
                        <div
                            className="bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-100 pointer-events-auto transform transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-200 z-10"
                                aria-label="Close modal">
                                <MdClose className="text-2xl" />
                            </button>

                            <div className="p-6 md:p-8">
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                        Get My Free Quote
                                    </h2>
                                    <p className="text-base text-gray-600">
                                        Fill out the form below or{" "}
                                        <span className="text-[#EE892A] font-semibold">call us to book instantly</span>
                                    </p>
                                </div>

                                <form
                                    ref={formRef}
                                    onSubmit={sendEmail}
                                    className="space-y-4">
                                    {/* Name & Email Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Full Name"
                                                required
                                                disabled={isLoading}
                                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400"
                                            />
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required
                                                disabled={isLoading}
                                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            disabled={isLoading}
                                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>

                                    {/* Service Selection */}
                                    <div className="relative">
                                        <select
                                            name="service"
                                            defaultValue="Regular House Cleaning"
                                            required
                                            disabled={isLoading}
                                            className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white appearance-none focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 cursor-pointer">
                                            <option>Regular House Cleaning</option>
                                            <option>Office Cleaning</option>
                                        </select>
                                        <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0F5E46] pointer-events-none text-xl" />
                                    </div>

                                    {/* Message */}
                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            placeholder="Tell us about your cleaning needs..."
                                            rows={4}
                                            required
                                            disabled={isLoading}
                                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400 resize-none">
                                        </textarea>
                                    </div>

                                    {/* Buttons with Gradients */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="bg-gradient-to-r from-[#0F5E46] to-[#013627] text-white font-bold py-4 px-6 rounded-lg flex-1 cursor-pointer disabled:bg-gradient-to-r disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group">
                                            <span className="relative z-10 flex items-center gap-2">
                                                {isLoading ? (
                                                    <>
                                                        <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    "Get Free Quote"
                                                )}
                                            </span>
                                        </button>
                                        <a
                                            href="tel:+61452676982"
                                            className="bg-gradient-to-r from-[#FF6500] to-[#ac4907] text-white font-bold py-4 px-6 rounded-lg flex-1 flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group">
                                            <span className="relative z-10 flex items-center gap-2">
                                                <FaPhone className="scale-x-[-1]" />
                                                <span className="hidden sm:inline">Call:</span> +61452676982
                                            </span>
                                        </a>
                                    </div>

                                    {/* Info Banner */}
                                    <div className="bg-amber-50 border-l-4 border-[#EE892A] p-4 rounded-r-lg mt-4">
                                        <div className="flex items-start gap-3">
                                            <MdInfo className="text-[#EE892A] text-xl flex-shrink-0 mt-0.5" />
                                            <div className="text-sm text-gray-700 leading-relaxed">
                                                <p className="mb-1">
                                                    <span className="font-semibold text-gray-900">Important:</span> We specialize in recurring cleans only — not one-off or end-of-lease cleans.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default QuoteModal;