"use client";
import React, { useRef, useState } from "react";
import { Poppins } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdInfo } from "react-icons/md";
import Image from "next/image";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const HeroBanner = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);

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
                toast.success("Thank you! Your request has been successfully submitted.", {
                    duration: 5000,
                    position: "top-center",
                    style: {
                        background: "#0F5E46",
                        color: "#fff",
                        padding: "16px",
                        fontSize: "16px",
                        fontWeight: "500",
                    },
                    iconTheme: {
                        primary: "#fff",
                        secondary: "#0F5E46",
                    },
                });
                formRef.current?.reset();
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
        <section
            id="hero-form"
            className={`${poppins.className} mt-[50px] md:mt-[50px] mb-[42px]`}>
            <Toaster />

            <div className="mx-auto px-3 lg:px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-2 lg:gap-12">
                    {/* LEFT COLUMN */}
                    <section className="w-full lg:w-2/3 relative md:mb-0">
                        <div className="text-3xl md:text-5xl lg:text-5xl text-center lg:text-left lg:leading-[1.1]">
                            <h1 className="text-black font-semibold">Melbourne's Trusted Regular  <span className="text-green-800">Cleaning Service</span> .</h1>
                        </div>
                        <div className="mt-8 text-lg font-medium space-y-2 max-w-xl text-black">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-400/20 rounded-full p-2 flex-shrink-0">
                                    <svg className="w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    {/* <h4 className="md:text-white font-semibold text-lg mb-2">100% Eco-Friendly</h4> */}
                                    <p className="text-md font-semibold">100% Eco-Friendly Non-toxic products safe for your kids and pets.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-400/20 rounded-full p-2 flex-shrink-0">
                                    <svg className="w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    {/* <h4 className="md:text-white font-semibold text-lg mb-2"></h4> */}
                                    <p className="text-md font-semibold">Trusted Premium recurring cleaning solutions for 8+ Years.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-400/20 rounded-full p-2 flex-shrink-0">
                                    <svg className="w-6  text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    {/* <h4 className="md:text-white font-semibold text-lg mb-2"></h4> */}
                                    <p className="text-md font-semibold">100+ Happy Families Rely on Our High-Quality Service.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start lg:absolute md:left-[-100px] top-[220px] md:top-[275px]">
                            <img
                                src="/Hero.png"
                                alt="OzShine Cleaner Service Worker with supplies"
                                className="object-cover transform scale-x-[-1] max-w-2xl h-auto lg:w-[482px] md:h-[500px] [filter:drop-shadow(25px_5px_5px_rgba(0,0,0,0.15))]"
                            />
                        </div>
                    </section>

                    {/* FORM SECTION - IMPROVED */}
                    <section className="lg:w-1/2 w-full">
                        <div className="bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-2xl w-full lg:max-w-xl lg:ml-auto p-8 border border-gray-100">
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
                                        <option>Office Cleaning</option>
                                    </select>
                                    <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0F5E46] pointer-events-none text-xl" />
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        placeholder="Tell us about your cleaning needs... (optional)"
                                        rows={2}
                                        disabled={isLoading}
                                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400 resize-none"
                                    ></textarea>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className=" bg-[#02352d] text-white font-bold py-4 px-6  rounded-lg flex-1 cursor-pointer disabled:bg-gradient-to-r disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group">
                                        <span className="relative z-10 flex items-center gap-2 text-sm">
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
                                            <span className="hidden sm:inline text-sm">Call:</span> +61452676982
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
            </div>
        </section>
    );
};

export default HeroBanner;