"use client";
import React, { useState, useEffect } from "react";
import testimonialIcon from "../../public/Testimonial.png";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-poppins",
});

const rating = 5;

const testimonials = [
    {
        icon: testimonialIcon,
        des: "I recently used Oz Shine Cleaners for their services, and I'm extremely satisfied with the results. The team was punctual, professional, and thorough in their cleaning. My space now looks impeccable, and they exceeded my expectations. I highly recommend Oz Shine Cleaners for their top-notch service and attention to detail.",
        testimoniName: "Ahmad Amin",
    },
    {
        icon: testimonialIcon,
        des: "Ozshine Cleaners did an outstanding job cleaning my house. They were professional, efficient, and left everything sparkling. Highly recommend!",
        testimoniName: "Anesh Chakma 968",
    },
    {
        icon: testimonialIcon,
        des: "Outstanding end-of-lease cleaning! Puntual, metculas and friendly team. Impressed by their attention to detail. Highly recommend for a stress free move out experience!",
        testimoniName: "Peter Hanna",
    },
    {
        icon: testimonialIcon,
        des: "I recently hired Oz Cleaners for a deep cleaning service and I am absoulutely thrilled with the results. From initial contact to the completion of the job the entire experinces was seamlessa and professional.",
        testimoniName: "Sarah Khattak",
    },
    {
        icon: testimonialIcon,
        des: "I recently had the pleasure of using their services and I must say, I am throughly impressed. From start to finish, the experinces was top-notch",
        testimoniName: "Maryam Fayyaz",
    },
    {
        icon: testimonialIcon,
        des: "I highly recommend Oz Shine Cleaners to anyone in need of reliable and through cleaning service. They are now my go-to cleaning company and I look forward to scheduling regular cleanings with them in the future. Thank you, Oz Shine Cleaners, for making my home shine!",
        testimoniName: "Dawood Haider",
    },
];

const StarRating: React.FC<{ count: number }> = ({ count }) => (
    <div className="flex mb-4">
        {[...Array(count)].map((_, i) => (
            <span key={i} className="text-yellow-500 text-xl">
                &#9733;
            </span>
        ))}
    </div>
);

const TestimonialCard: React.FC<typeof testimonials[0]> = ({
    icon,
    des,
    testimoniName,
}) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="relative w-full mx-auto mt-15 min-h-[300px]">
            <Image
                src={icon}
                alt={testimoniName}
                width={70}
                height={70}
                className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full border-2 border-[#145B42] z-10"
            />

            {/* Clipped div */}
            <div
                className="relative p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 z-0 bg-white min-h-[300px]"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 90%, 80% 100%, 0 100%)",
                }}>
                <p className={`${poppins.className} italic mb-4 px-1 mt-12 tracking-tight text-left whitespace-normal hyphens-auto text-lg ${expanded ? "" : "line-clamp-4"}`}>
                    {des}
                </p>

                {des.length > 120 && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="font-semibold hover:underline mb-4 text-lg">
                        {expanded ? "See less" : "See more"}
                    </button>
                )}

                <h2 className="text-lg font-semibold text-[#145B42] mb-5">
                    {testimoniName}
                </h2>
                <StarRating count={rating} />
            </div>
        </div>
    );
};

const Testimonial: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    // Update cards to show based on window width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setCardsToShow(1); // Mobile
            else if (window.innerWidth < 1024) setCardsToShow(2); // Tablet
            else setCardsToShow(3); // Desktop
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const prevSlide = () => {
        setCurrentIndex(
            (prev) => (prev === 0 ? testimonials.length - 1 : prev - 1)
        );
    };

    const nextSlide = () => {
        setCurrentIndex(
            (prev) => (prev === testimonials.length - 1 ? 0 : prev + 1)
        );
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < cardsToShow; i++) {
            visible.push(testimonials[(currentIndex + i) % testimonials.length]);
        }
        return visible;
    };

    return (
        <div className="bg-[#F5F5F5] py-20 ">
            <h2
                className={`${poppins.className} text-2xl md:text-3xl text-[#145B42] text-center font-bold`}>
                Hear From Our Clients
            </h2>
            <div className="relative px-5 max-w-7xl mx-auto mt-8 flex items-center">
                {/* Prev Button */}
                <button
                    onClick={prevSlide}
                    className="z-20 text-2xl text-[#145B42] p-3 rounded cursor-pointer border border-white bg-white shadow-md hover:bg-[#145B42] hover:text-white transition-all">
                    <IoIosArrowBack />
                </button>

                {/* Cards */}
                <div className="flex gap-8 flex-1 overflow-hidden px-0 lg:px-10">
                    {getVisibleTestimonials().map((testimonial, idx) => (
                        <div
                            key={idx}
                            className={`flex-1 min-w-[300px] transition-all duration-300`}>
                            <TestimonialCard {...testimonial} />
                        </div>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="z-20 text-2xl text-[#145B42] p-3 rounded cursor-pointer border border-white bg-white shadow-md hover:bg-[#145B42] hover:text-white transition-all">
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
