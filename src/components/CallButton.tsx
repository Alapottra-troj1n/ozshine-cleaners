"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
    return (
        <a
            href="tel:+61452679582"
            className="fixed bottom-10 right-5 z-50 bg-[#0F5E46] text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 lg:hidden"
            aria-label="Call Now"
        >
            <FaPhoneAlt className="text-2xl" />
        </a>
    );
};

export default CallButton;
