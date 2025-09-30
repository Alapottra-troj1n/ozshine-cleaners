"use client";
import React, { useState } from 'react';
import testimonialIcon from '../../public/Testimonial.png';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-poppins",
});

const rating = 5;

const testimonials = [
    { icon: testimonialIcon, des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ', testimoniName: 'Peter Mike' },
    { icon: testimonialIcon, des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ', testimoniName: 'Peter Mike' },
    { icon: testimonialIcon, des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ', testimoniName: 'Peter Mike' },
    { icon: testimonialIcon, des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ', testimoniName: 'Mark Lee' },

];

const StarRating: React.FC<{ count: number }> = ({ count }) => (
    <div className="flex mb-4">
        {[...Array(count)].map((_, i) => (
            <span key={i} className="text-yellow-500 text-xl">&#9733;</span>
        ))}
    </div>
);

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ icon, des, testimoniName }) => (
    <div className="relative w-full mx-auto mt-15 min-h-[300px]">
        <Image
            src={icon}
            alt={testimoniName}
            width={70}
            height={70}
            className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full border-2 border-[#145B42] z-10"
        />

        {/* Clipped div */}
        <div className="relative p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 z-0 bg-white min-h-[300px]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 80% 100%, 0 100%)" }}>
            <p className={`${poppins.className} italic mb-4 mt-12 leading-relaxed text-justify text-lg`}>{des}</p>
            <h2 className="text-lg font-semibold text-[#145B42] mb-5">{testimoniName}</h2>
            <StarRating count={rating} />
        </div>
    </div>

);

const Testimonial: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(testimonials[(currentIndex + i) % testimonials.length]);
        }
        return visible;
    };

    return (
        <div className="bg-[#F5F5F5] py-20">
            <h2 className={`${poppins.className} text-3xl text-[#145B42] text-center font-bold`}>Hear From Our Clients</h2>
            <div className="relative max-w-8xl mx-auto mt-8 px-4 md:px-16 flex items-center">
                {/* Prev Button */}
                <button onClick={prevSlide} className="z-20 text-2xl text-[#145B42] p-3 rounded cursor-pointer border border-white bg-white shadow-md hover:bg-[#145B42] hover:text-white transition-all">
                    <IoIosArrowBack />
                </button>

                {/* Cards */}
                <div className="flex gap-8 flex-1 overflow-hidden">
                    {getVisibleTestimonials().map((testimonial, idx) => (
                        <div key={idx} className="flex-1 min-w-[300px]">
                            <TestimonialCard {...testimonial} />
                        </div>
                    ))}
                </div>

                {/* Next Button */}
                <button onClick={nextSlide} className="z-20 text-2xl text-[#145B42] p-3 rounded cursor-pointer border border-white bg-white shadow-md hover:bg-[#145B42] hover:text-white transition-all">
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
