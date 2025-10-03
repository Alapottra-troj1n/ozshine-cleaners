import React from "react";
import { Poppins } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const HeroBanner = () => {
    return (
        <section id="hero-form" className={`${poppins.className} mt-[50px] md:mt-[60px] mb-20`}>
            <div className="mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                    {/* LEFT COLUMN */}
                    <div className="w-full lg:w-1/2 relative mb-40 md:mb-0">
                        <div className="text-5xl sm:text-7xl text-center lg:text-left lg:text-[80px] lg:leading-[1.1] ">
                            <h1 className="text-black font-semibold ">
                                Your Home.
                            </h1>
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
                                <span className="align-text-top ">Our natural, non-toxic home cleaning services</span>
                            </p>
                            <p className="space-x-2">
                                <Image
                                    src="/Location-Exit.png"
                                    alt="Location-exit icon"
                                    width={20}
                                    height={20}
                                    className="object-contain text-[#0F5E46] inline"
                                />
                                <span className="align-text-top">A healthier, safer environment for you and your family.</span>
                            </p>
                        </div>
                        <div className="absolute md:left-[-100px] top-[250px] md:top-[220px]">
                            <img src="/Hero.png" alt="OzShine Cleaner Service Worker with supplies"
                                className="object-cover transform scale-x-[-1] w-[300px] h-[300px] md:w-[482px] md:h-[500px] [filter:drop-shadow(25px_5px_5px_rgba(0,0,0,0.15))]"
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full mt-20">
                        <div className="bg-white sm:p-10 rounded-xl w-full lg:max-w-xl lg:ml-auto ">
                            <p className="text-lg text-center mt-15 md:mt-0 mb-6 font-bold">
                                Get a free quote today or  <span className="text-[#EE892A] font-bold">call us </span>!
                            </p>
                            <form className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
                                <div className="flex flex-col gap-8">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F5E46] focus:outline-none transition-colors"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address (required)"
                                        required
                                        className="p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F5E46] focus:outline-none transition-colors"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number (optional)"
                                        className="p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F5E46] focus:outline-none transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="relative">
                                        <select
                                            defaultValue=""
                                            className="p-3 border border-gray-300 rounded bg-white appearance-none focus:ring-2 focus:ring-[#0F5E46] focus:outline-none transition-colors w-full pr-10">
                                            <option value="" disabled>I'm Looking For:</option>
                                            <option>Regular House Cleaning</option>
                                            <option>Deep Cleaning</option>
                                            <option>Office Cleaning</option>
                                        </select>
                                        <IoIosArrowDown
                                            className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0F5E46] pointer-events-none"
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Describe Message"
                                        rows={5}
                                        className="p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0F5E46] focus:outline-none transition-colors w-full">
                                    </textarea>
                                </div>
                            </form>

                            {/* BUTTONS */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:px-10">
                                <button
                                    type="submit"
                                    className="bg-[#0F5E46] text-white font-bold py-3 px-6 rounded flex-1 shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-0.5">
                                    Get Free Quote
                                </button>
                                <a
                                    href="tel:+61452676982"
                                    className="bg-[#FF6500] text-white font-bold py-3 px-6 rounded flex-1 text-center shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2" >
                                    <FaPhone />+61452676982
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
