"use client";
import React, { useRef, useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdInfo, MdClose } from "react-icons/md";
import HomeCleanImage from '../../../public/HomeCleaning/HomeClean.jpg'

// Feature Image
import EcoFriendlyIcon from '../../../public/Eco-friendly.png';
import RatingIcon from '../../../public/Star.png';
import ExpertTraineeIcon from '../../../public/Cleaner-icon.png';

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Features from "@/components/Features";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const features = [
    {
        icon: ExpertTraineeIcon,
        title: 'Fully Insured'
    },
    {
        icon: EcoFriendlyIcon,
        title: 'Eco Friendly'
    },
    {
        icon: RatingIcon,
        title: 'Top-Rated Melbourne Cleaners'
    },
]

const Page = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [scrollY, setScrollY] = useState(0);
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
            if (e.key === 'Escape' && showSuccessModal) {
                setShowSuccessModal(false);
            }
        };

        if (showSuccessModal) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [showSuccessModal]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleGoHome = () => {
        setShowSuccessModal(false);
        router.push('/');
    };

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const templateParams = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            suburb: formData.get("suburb"),
            frequency: formData.get("frequency"),
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
                setShowSuccessModal(true);
            }
        } catch (error) {
            console.error("Error submitting request:", error);
            let errorMessage = "Failed to submit request. Please try again.";
            toast.error(errorMessage, {
                duration: 4000,
                position: "top-center",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <section className={`${poppins.className} relative overflow-hidden`}>
                <Toaster />

                {/* Success Modal */}
                {showSuccessModal && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
                        <div className={`bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center transform transition-all duration-300 relative ${poppins.className}`}>
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
                                Thank You!
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

                <Image
                    src={HomeCleanImage}
                    alt="Home Cleaning Service Background"
                    className="absolute top-0 left-0 right-0 bottom-0 bg-cover -z-10 brightness-[38%]"
                />
                <div className="mx-auto px-3 lg:px-4 max-w-7xl z-30 relative flex-1 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start lg:gap-12">
                        {/* LEFT COLUMN */}
                        <section className="w-full md:mb-0">
                            <div className="text-center lg:leading-[1.1]">
                                <h1 className="text-white font-semibold text-xl lg:text-5xl max-w-md md:max-w-[950px] mx-auto">
                                    Melbourne's Most Trusted <span className="text-green-400">Regular House Cleaning </span> Service.
                                </h1>
                                <h3 className="text-white text-sm max-w-xs lg:text-[17px] md:max-w-lg lg:max-w-3xl mx-auto my-5">
                                    Weekly, fortnightly & monthly cleaning for busy families — eco-friendly, insured & reliable.
                                </h3>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-12 lg:my-0 lg:py-10">
                                <button
                                    onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-green-700 font-semibold text-sm md:text-lg cursor-pointer text-white px-5 py-3 rounded hover:bg-green-800 transition-colors w-full sm:w-auto text-center">
                                    Get Free Quote
                                </button>
                                <a
                                    href="tel:+61452679582"
                                    className="bg-orange-700 font-semibold text-sm lg:text-lg text-white px-5 py-3 rounded hover:bg-orange-800 transition-colors w-full sm:w-auto text-center">
                                    Call Us
                                </a>
                            </div>

                            {/* OverView Section */}
                            <div className="max-w-5xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* Benefit 1 */}
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-green-400/20 rounded-full p-3 flex-shrink-0">
                                                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="md:text-white font-semibold text-lg mb-2">100% Eco-Friendly</h4>
                                                <p className="md:text-gray-200 text-sm">Non-toxic products safe for your kids and pets.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Benefit 2 */}
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-400/20 rounded-full p-3 flex-shrink-0">
                                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="md:text-white font-semibold text-lg mb-2">8+ Years Trusted</h4>
                                                <p className="md:text-gray-200 text-sm">Premium recurring cleaning solutions.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Benefit 3 */}
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-yellow-400/20 rounded-full p-3 flex-shrink-0">
                                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="md:text-white font-semibold text-lg mb-2">100+ Happy Families</h4>
                                                <p className="md:text-gray-200 text-sm">Reliable, high-quality service guarantee.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* FORM SECTION */}
                    <section id="form" className="flex items-center justify-center mt-10 ">
                        <div className="bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-2xl w-full lg:max-w-6xl p-8 border border-gray-100">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Get My Free Quote
                                </h2>
                                <p className="text-base text-gray-600">
                                    Fill out the form below or{" "}
                                    <span className="text-[#EE892A] font-semibold">call us to book instantly</span>
                                </p>
                            </div>

                            {/* Form Section */}
                            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                                {/* Name & Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            required
                                            disabled={isLoading}
                                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
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
                                        placeholder="Phone"
                                        disabled={isLoading}
                                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400"
                                    />
                                </div>

                                {/* Suburb & Frequency Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Suburb selection */}
                                    <div className="relative">
                                        <select
                                            name="suburb"
                                            defaultValue=""
                                            required
                                            disabled={isLoading}
                                            className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white appearance-none focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 cursor-pointer">
                                            <option>Richmond</option>
                                            <option>South Yarra / Toorak / Malvern East</option>
                                            <option>Brunswick / Carlton / Fitzroy</option>
                                            <option>Hawthorn / Camberwell / Kew</option>
                                            <option>Footscray / Yarraville / Williamstown</option>
                                            <option>Box Hill / Doncaster / Blackburn</option>
                                            <option>Glen Waverley / Mount Waverley / Burwood</option>
                                            <option>Essendon / Moonee Ponds / Brunswick East</option>
                                            <option>Balwyn North / Camberwell East</option>
                                            <option>Werribee / Cranbourne / Craigieburn / Tarneit / Pakenham</option>
                                        </select>
                                        <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0F5E46] pointer-events-none text-xl" />
                                    </div>

                                    {/* Frequency selection */}
                                    <div className="relative">
                                        <select
                                            name="frequency"
                                            defaultValue=""
                                            required
                                            disabled={isLoading}
                                            className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white appearance-none focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 cursor-pointer">
                                            <option>Weekly</option>
                                            <option>Fortnightly</option>
                                            <option>Monthly</option>
                                        </select>
                                        <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0F5E46] pointer-events-none text-xl" />
                                    </div>
                                </div>

                                {/* Service Selection */}
                                <div className="relative">
                                    <select
                                        name="service"
                                        defaultValue=""
                                        required
                                        disabled={isLoading}
                                        className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white appearance-none focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 cursor-pointer">
                                        <option>Regular House Cleaning</option>
                                    </select>
                                    <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0F5E46] pointer-events-none text-xl" />
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        placeholder="Tell us about your cleaning needs... (optional)"
                                        rows={4}
                                        disabled={isLoading}
                                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400 resize-none"
                                    ></textarea>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className=" bg-[#02352d] text-white font-bold py-4 px-6 rounded-lg flex-1 cursor-pointer disabled:bg-gradient-to-r disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group">
                                        <span className="relative z-10 flex items-center gap-2">
                                            {isLoading ? (
                                                <>
                                                    <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                "Submit for Free Quote"
                                            )}
                                        </span>
                                    </button>
                                    <a
                                        href="tel:+61452676982"
                                        className=" bg-[#cc5709] text-white font-bold py-4 px-6 rounded-lg flex-1 flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group">
                                        <span className="relative z-10 flex items-center gap-2">
                                            <FaPhone className="scale-x-[-1]" />
                                            <span className="hidden sm:inline">Call:</span> +61452676982
                                        </span>
                                    </a>
                                </div>

                                {/* Important Notice */}
                                <div className="bg-amber-50 border-l-4 border-[#EE892A] p-4 rounded-r-lg mt-6">
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
                    </section>
                </div>
            </section>
            <Features />
        </div>
    );
};

export default Page;