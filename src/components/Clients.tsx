"use client";
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});


const testimonials = [
    // Melbourne
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.0868292330735!2d144.9631576153172!3d-37.813627979751624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779f0f9c5a7e5!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1692354467890!5m2!1sen!2sau"
     width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
     referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    // `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.0868292330735!2d144.9631576153172!3d-37.813627979751624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779f0f9c5a7e5!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1692354467890!5m2!1sen!2sau"
    //  width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    //  referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    // `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.0868292330735!2d144.9631576153172!3d-37.813627979751624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779f0f9c5a7e5!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1692354467890!5m2!1sen!2sau"
    //  width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    //  referrerpolicy="no-referrer-when-downgrade"></iframe>`,


];

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
                    {/* Render iframe directly as HTML */}
                    <div
                        dangerouslySetInnerHTML={{ __html: testimonials[currentIndex] }}
                        className="w-full h-[450px]"
                    />
                </div>

                {/* Left arrow */}
                {/* <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-[-50px] transform -translate-y-1/2  text-[#145B42] p-3 text-2xl  cursor-pointer rounded  z-10">
                    <IoIosArrowBack />
                </button> */}

                {/* Right arrow */}
                {/* <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-[-50px] transform -translate-y-1/2  text-[#145B42] p-3 text-2xl  cursor-pointer rounded  z-10">
                    <IoIosArrowForward />
                </button> */}

                {/* Dots indicator */}
                {/* <div className="flex justify-center mt-6">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full mx-2 ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'}`}>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default Clients;
