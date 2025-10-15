import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const page = () => {
    return (
        <div
            className={`${poppins.className} py-20 lg:py-0 lg:min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-50 to-white px-6`}>
            {/* Success Icon */}
            <FaCheckCircle className="text-[#0F5E46] text-7xl mb-6 drop-shadow-md animate-bounce-slow" />

            {/* Success Message */}
            <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                Thank You!
            </h3>
            <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
                Your quote request has been received! We'll call you within{" "}
                <span className="font-semibold text-[#0F5E46]">30 minutes</span>{" "}
                to confirm your details and provide a personalized quote.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                {/* Call Us Button */}
                <a href="tel:+61452676982"
                    className="rounded-md bg-[#EE892A]">
                    <span className="flex items-center justify-center gap-2 rounded-[10px] bg-white/10 px-6 py-4 text-white text-sm font-semibold backdrop-blur-md transition-all duration-300 group-hover:bg-white/20">
                        <FaPhone className="text-lg scale-x-[-1]" />
                        Call Us Now: +61452679582
                    </span>
                </a>

                {/* Home Button */}
                <Link href="/" className="rounded-md bg-[#0F5E46]">
                    <span className="flex items-center justify-center  gap-2 rounded-[10px] bg-white/10 px-6 py-4 text-white text-sm font-semibold backdrop-blur-md transition-all duration-300 group-hover:bg-white/20">
                        Go to Home
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default page;
