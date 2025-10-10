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
            className={`${poppins.className} mt-[50px] md:mt-[50px] mb-[82px]`}>
            <Toaster />

            <div className="mx-auto px-3 lg:px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start lg:gap-12">
                    {/* LEFT COLUMN */}
                    <section className="w-full lg:w-2/3 relative md:mb-0">
                        <div className="text-3xl md:text-5xl lg:text-5xl text-center md:text-left lg:leading-[1.1]">
                            <h1 className="text-black font-semibold">Melbourne's Trusted Regular House <span className="text-green-800">Cleaning Service</span> .</h1>
                        </div>
                        <div className="mt-8 text-lg font-medium space-y-2 max-w-xl text-black">
                            <p className="space-x-2 lg:flex lg:items-start">
                                <Image
                                    src="/Location-Exit.png"
                                    alt="Location-exit icon"
                                    width={20}
                                    height={20}
                                    className="object-contain lg:mt-1 text-[#0F5E46] inline"
                                />
                                <span className="align-text-top">
                                    Our natural, non-toxic Premium Recurring Home Cleaning in Melbourne.
                                </span>
                            </p>
                            <p className="space-x-2">
                                <Image
                                    src="/Location-Exit.png"
                                    alt="Location-exit icon"
                                    width={20}
                                    height={20}
                                    className="object-contain text-[#0F5E46] inline"
                                />
                                <span className="align-text-top">
                                    A healthier, safer environment for you and your family.
                                </span>
                            </p>
                            <p className="space-x-2">
                                <Image
                                    src="/Location-Exit.png"
                                    alt="Location-exit icon"
                                    width={20}
                                    height={20}
                                    className="object-contain text-[#0F5E46] inline"
                                />
                                <span className="align-text-top">
                                    Trusted by 100+ Melbourne families for 8+ years.
                                </span>
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-start md:absolute md:left-[-100px] top-[220px] md:top-[275px]">
                            <img
                                src="/Hero.png"
                                alt="OzShine Cleaner Service Worker with supplies"
                                className="object-cover transform scale-x-[-1] max-w-2xl h-auto md:w-[482px] md:h-[500px] [filter:drop-shadow(25px_5px_5px_rgba(0,0,0,0.15))]"
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

                            <form
                                ref={formRef}
                                onSubmit={sendEmail}
                                className="space-y-5">
                                {/* Name & Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder=" Name"
                                            required
                                            disabled={isLoading}
                                            className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email "
                                            required
                                            disabled={isLoading}
                                            className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone "
                                        disabled={isLoading}
                                        className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400"
                                    />
                                </div>

                                {/* Service Selection */}
                                <div className="relative">
                                    <select
                                        name="service"
                                        defaultValue=""
                                        required
                                        disabled={isLoading}
                                        className="w-full p-2 border-2 border-gray-200 rounded-lg bg-white appearance-none focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 cursor-pointer">
                                        {/* <option value="">Select a Service</option> */}
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
                                        className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400 resize-none"
                                    ></textarea>
                                </div>

                                {/* Buttons with Gradients */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="bg-gradient-to-r from-[#0F5E46] to-[#013627]  text-white font-bold py-4 px-6 rounded-lg flex-1 cursor-pointer disabled:bg-gradient-to-r disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group">
                                
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
                                    <a href="tel:+61452676982"
                                        className="bg-gradient-to-r from-[#FF6500] to-[#ac4907] text-white font-bold py-4 px-6 rounded-lg flex-1 flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group">
                                        <span className="relative z-10 flex items-center gap-2">
                                            <FaPhone className="scale-x-[-1]" />
                                            <span className="hidden sm:inline">Call:</span> +61452676982
                                        </span>
                                    </a>
                                </div>
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