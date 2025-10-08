"use client";
import React, { useRef, useState } from "react";
import { Poppins } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from "next/image";
import axios, { AxiosError } from "axios";
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

        // Extract form data
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
            className={`${poppins.className} mt-[50px] md:mt-[60px] mb-20`}>
            <Toaster />

            <div className="mx-auto px-3 lg:px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start lg:gap-12">
                    {/* LEFT COLUMN */}
                    <section className="w-full lg:w-1/2 relative  md:mb-0">
                        <div className="text-5xl md:text-6xl lg:text-7xl text-center md:text-left xl:text-[80px] lg:leading-[1.1] ">
                            <h1 className="text-black font-semibold ">Your Home.</h1>
                            <h1 className="font-semibold text-[#0F5E46]">Our Priority!</h1>
                        </div>
                        <div className="mt-8 text-lg font-medium space-y-2 max-w-xl text-black">
                            <p className="space-x-2">
                                <Image
                                    src="/Location-Exit.png"
                                    alt="Location-exit icon"
                                    width={20}
                                    height={20}
                                    className="object-contain text-[#0F5E46] inline"
                                />
                                <span className="align-text-top ">
                                    Our natural, non-toxic home cleaning services
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
                        </div>
                        <div className="flex justify-center md:justify-start md:absolute md:left-[-100px] top-[220px] md:top-[220px]">
                            <img
                                src="/Hero.png"
                                alt="OzShine Cleaner Service Worker with supplies"
                                className="object-cover transform scale-x-[-1]  max-w-2xl h-auto md:w-[482px] md:h-[500px] [filter:drop-shadow(25px_5px_5px_rgba(0,0,0,0.15))]"
                            />
                        </div>
                    </section>

                    {/* FORM SECTION */}
                    <section className="lg:w-1/2 w-full md:mt-10 lg:mt-20">
                        <div className="bg-white sm:p-10 rounded-xl w-full lg:max-w-xl lg:ml-auto ">
                            <p className="text-lg text-center  md:mt-0 mb-6 font-bold">
                                Get a free quote today or{" "}
                                <span className="text-[#EE892A] font-bold">call us </span>!
                            </p>
                            <form
                                ref={formRef}
                                onSubmit={sendEmail}
                                className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
                                <div className="flex flex-col gap-8">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                        disabled={isLoading}
                                        className="p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F5E46] focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address (required)"
                                        required
                                        disabled={isLoading}
                                        className="p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F5E46] focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number (optional)"
                                        disabled={isLoading}
                                        className="p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F5E46] focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="relative">
                                        <select
                                            name="service"
                                            defaultValue=""
                                            required
                                            disabled={isLoading}
                                            className="py-3 px-2 border border-gray-300 rounded bg-white appearance-none focus:ring-2 focus:ring-[#0F5E46] focus:outline-none transition-colors w-full pr-10 disabled:bg-gray-100 disabled:cursor-not-allowed">
                                            <option>Regular House Cleaning</option>
                                            <option>Deep Cleaning</option>
                                            <option>Office Cleaning</option>
                                        </select>
                                        <IoIosArrowDown className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0F5E46] pointer-events-none" />
                                    </div>
                                    <textarea
                                        name="message"
                                        placeholder="Describe Message"
                                        rows={5}
                                        required
                                        disabled={isLoading}
                                        className="p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F5E46] focus:outline-none transition-colors w-full disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    ></textarea>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-4 mt-8 col-span-full">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="bg-[#0F5E46] text-white font-bold py-3 px-6 rounded flex-1 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? (
                                            <>
                                                <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                                                Submitting...
                                            </>
                                        ) : (
                                            "Get Free Quote"
                                        )}
                                    </button>
                                    <a
                                        href="tel:+61452676982"
                                        className="bg-[#FF6500] text-white font-bold py-3 px-6 rounded flex-1 flex items-center justify-center gap-2">
                                        <FaPhone className="scale-x-[-1]" />
                                        +61452676982
                                    </a>
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