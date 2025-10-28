"use client";
import React, { useRef, useState } from "react";
import { Poppins } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdInfo } from "react-icons/md";
import OfficeClean from '../../../public/OfficeCleaning/Office.jpg'


import beforeTwo from '../../../public/Before-2.jpg'
import afterTwo from '../../../public/After-2.jpg'
import beforeThree from '../../../public/Before-3.jpg'
import afterThree from '../../../public/After-3.jpg'
import beforeFour from '../../../public/Befor-4.jpg'
import afterFour from '../../../public/After-4.jpg'
import beforeOne from '../../../public/before-1.jpg'
import afterOne from '../../../public/after-1.jpg'

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Features from "@/components/Features";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Slider from "@/components/Slider";
import Services from "@/components/Services";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Step from "@/components/Step";
import Value from "@/components/Value";
import Testimonial from "@/components/Testimonial";
import Clients from "@/components/Clients";
import CommercialClient from "@/components/CommercialClient";
import Call from "@/components/Call";
import Accordion from "@/components/Acccordian";
import CallButton from "@/components/CallButton";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const Page = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // useEffect(() => {
    //     if (showSuccessModal) {
    //         const timer = setTimeout(() => {
    //             setShowSuccessModal(false);
    //         }, 30000);

    //         return () => clearTimeout(timer);
    //     }
    // }, [showSuccessModal]);

    // useEffect(() => {
    //     const handleEscape = (e: KeyboardEvent) => {
    //         if (e.key === 'Escape' && showSuccessModal) {
    //             setShowSuccessModal(false);
    //         }
    //     };

    //     if (showSuccessModal) {
    //         document.addEventListener('keydown', handleEscape);
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'unset';
    //     }

    //     return () => {
    //         document.removeEventListener('keydown', handleEscape);
    //     };
    // }, [showSuccessModal]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollY(window.scrollY);
    //     };

    //     window.addEventListener('scroll', handleScroll, { passive: true });

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const handleGoHome = () => {
    //     setShowSuccessModal(false);
    //     router.push('/');
    // };

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
                router.push('/thankyou')
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
                <Image
                    src={OfficeClean}
                    alt="Office Cleaning Service Background"
                    className="absolute top-0 left-0 right-0 bottom-0 bg-cover -z-10 brightness-[38%]"
                />
                <div className="mx-auto px-3 lg:px-4 max-w-7xl z-30 relative flex-1 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start lg:gap-12">
                        {/* LEFT COLUMN */}
                        <section className="w-full md:mb-0">
                            <div className="text-center lg:leading-[1.1]">
                                <h1 className="text-white font-semibold text-2xl lg:text-5xl max-w-md md:max-w-4xl mx-auto">
                                    Melbourne's Most Trusted <span className="text-[#11b87d]">Office Cleaning </span> Service.
                                </h1>
                                <h3 className="text-white text-sm max-w-xs lg:text-[17px] md:max-w-2xl lg:max-w-3xl mx-auto my-5">
                                    We Provide Reliable and Efficient Office Cleaning Solutions.
                                </h3>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-12 lg:my-0 lg:py-10">
                                <button
                                    onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-[#0E4E38] font-semibold text-sm lg:text-lg cursor-pointer text-white px-5 py-3 rounded w-full lg:w-[200px] text-center">
                                    Get Free Quote
                                </button>
                                <a
                                    href="tel:+61452679582"
                                    className="bg-[#EE892A]  font-semibold text-sm lg:text-lg text-white px-5 py-3 rounded w-full lg:w-[200px] text-center">
                                    Call Us
                                </a>
                            </div>

                            {/* OverView Section */}
                            <div className="max-w-5xl mx-auto ">
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
                                                <p className="md:text-gray-200 text-sm">Non-toxic products safe for nature, pets and people.</p>
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
                                                <h4 className="md:text-white font-semibold text-lg mb-2">30+ Satisfied Offices</h4>
                                                <p className="md:text-gray-200 text-sm">Reliable and professional cleaning services you can trust.</p>
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
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
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
                                            className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white appearance-none focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 cursor-pointer"
                                        >
                                            <option value="">Select Suburb</option>
                                            <option>Richmond</option>
                                            <option>South Yarra</option>
                                            <option>Toorak</option>
                                            <option>Malvern East</option>
                                            <option>Brunswick</option>
                                            <option>Carlton</option>
                                            <option>Fitzroy</option>
                                            <option>Hawthorn</option>
                                            <option>Camberwell</option>
                                            <option>Kew</option>
                                            <option>Footscray</option>
                                            <option>Yarraville</option>
                                            <option>Williamstown</option>
                                            <option>Box Hill</option>
                                            <option>Doncaster</option>
                                            <option>Blackburn</option>
                                            <option>Glen Waverley</option>
                                            <option>Mount Waverley</option>
                                            <option>Burwood</option>
                                            <option>Essendon</option>
                                            <option>Moonee Ponds</option>
                                            <option>Brunswick East</option>
                                            <option>Balwyn North</option>
                                            <option>Camberwell East</option>
                                            <option>Werribee</option>
                                            <option>Cranbourne</option>
                                            <option>Craigieburn</option>
                                            <option>Tarneit</option>
                                            <option>Pakenham</option>
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
                                        <option>Office Cleaning</option>
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
                                        className=" bg-[#0E4E38] text-white font-bold py-4 px-6 rounded-lg flex-1 cursor-pointer disabled:bg-gradient-to-r disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group">
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
                                        className=" bg-[#EE892A] text-white font-bold py-4 px-6 rounded-lg flex-1 flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group">
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
            <Slider slides={[
                { beforeImage: beforeTwo.src, afterImage: afterTwo.src },
                { beforeImage: beforeThree.src, afterImage: afterThree.src },
                { beforeImage: beforeFour.src, afterImage: afterFour.src },
                { beforeImage: beforeOne.src, afterImage: afterOne.src },
            ]}
                height={400} />
            <Services />
            {/* <About /> */}
            <CallToAction />
            <Step />
            <Value />
            <Testimonial />
            {/* <Clients /> */}
            <CommercialClient />
            <Call />
            <Accordion />
            <CallButton />
        </div>
    );
};

export default Page;