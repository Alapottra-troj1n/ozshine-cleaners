"use client";
import React, { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const Clients = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // or return a loading skeleton
    }

    return (
        <div className='mt-16 py-10'> {/* Changed mt-15 to mt-16 */}
            <h2 className={`text-center ${poppins.className} font-bold text-2xl md:text-3xl mb-14 text-[#0B4936]`}>
                Domestic Clients
            </h2>

            <div className="relative max-w-sm md:max-w-7xl px-5 mx-auto">
                <div className="flex justify-center">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.0868292330735!2d144.9631576153172!3d-37.813627979751624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779f0f9c5a7e5!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1692354467890!5m2!1sen!2sau"
                        width="100%" 
                        height="450"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen
                        loading="eager"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Melbourne Location Map"
                    />
                </div>
            </div>
        </div>
    );
};

export default Clients;