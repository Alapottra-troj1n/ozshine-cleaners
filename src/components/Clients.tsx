"use client"
import React, { useState } from 'react';
import location from '../../public/Location.png';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const testimonials = [location, location, location];

const Clients = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='mt-15'>
            <h2 className={`text-center ${poppins.className} font-bold text-2xl md:text-3xl mb-14 text-[#0B4936]`}>
                Domestic Clients
            </h2>

            <div className="relative max-w-sm md:max-w-5xl mx-auto">
                <div className="flex justify-center">
                    <Image src={testimonials[currentIndex]} alt="location" className="object-contain" />
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 bg-white text-black p-3 text-xl border border-gray-300 cursor-pointer rounded shadow-2xl  z-10"   >
                    <IoIosArrowBack />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 bg-white text-black p-3 text-xl border border-gray-300 cursor-pointer rounded shadow-2xl  z-10">
                    <IoIosArrowForward />
                </button>

                <div className="flex justify-center mt-6">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full mx-2 ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                                }`}>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;
