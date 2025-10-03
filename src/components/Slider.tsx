"use client";
import React, { useState, useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    height?: number;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage, height = 250 }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState(50);
    const [dragging, setDragging] = useState(false);

    const updatePos = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        let newPos = ((clientX - rect.left) / rect.width) * 100;
        newPos = Math.max(0, Math.min(100, newPos));
        setPos(newPos);
    };

    useEffect(() => {
        if (!dragging) return;
        const style = document.body.style as any;
        const value = 'none';
        style.userSelect = value;
        style.MozUserSelect = value;
        style.webkitUserSelect = value;
        style.msUserSelect = value;

        const handleMouseMove = (e: MouseEvent) => updatePos(e.clientX);
        const handleMouseUp = () => setDragging(false);
        const handleTouchMove = (e: TouchEvent) => updatePos(e.touches[0].clientX);
        const handleTouchEnd = () => setDragging(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
            const resetValue = '';
            style.userSelect = resetValue;
            style.MozUserSelect = resetValue;
            style.webkitUserSelect = resetValue;
            style.msUserSelect = resetValue;
        };
    }, [dragging]);

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden rounded-lg shadow-lg"
            style={{ height }}
        >
            <img src={afterImage} className="absolute top-0 left-0 w-full h-full object-cover" />
            <img
                src={beforeImage}
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            />
            <div
                className="absolute top-0 h-full border border-white z-10 pointer-events-none"
                style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            />
            <div
                onMouseDown={() => setDragging(true)}
                onTouchStart={() => setDragging(true)}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-xl cursor-ew-resize flex items-center justify-center z-20 focus:outline-none active:outline-none ring-0 selection:bg-transparent select-none"
                style={{ left: `${pos}%`, outline: "none", WebkitTapHighlightColor: "transparent" }}>
                <IoIosArrowBack className="w-4 h-4 text-gray-700" />
                <IoIosArrowForward className="w-4 h-4 text-gray-700" />
            </div>
        </div>
    );
};


interface SlideType {
    beforeImage: string;
    afterImage: string;
}

interface SliderProps {
    slides: SlideType[];
    height?: number;
}

const Slider: React.FC<SliderProps> = ({ slides, height = 250 }) => {
    const [active, setActive] = useState(0);
    const [perView, setPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;
            if (w >= 1024) setPerView(3);
            else if (w >= 640) setPerView(2);
            else setPerView(1);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, slides.length - perView);

    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className={`flex flex-col items-center justify-center mt-15 mb-5 gap-3 ${poppins.className}`}>
                <h2 className="text-[#145B42] font-bold text-2xl md:text-3xl">Our Impactable Results</h2>
                <p className="text-md md:text-lg text-center">
                    Witness Unmatched Excellence Displayed in Every Post-Cleaning Photograph in Melbourne
                </p>
            </div>

            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${(active * 100) / perView}%)` }}>
                    {slides.map((s, i) => (
                        <div key={i} className="shrink-0 px-2" style={{ width: `${100 / perView}%` }}>
                            <BeforeAfter beforeImage={s.beforeImage} afterImage={s.afterImage} height={height} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => setActive((a) => Math.max(0, a - 1))}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md disabled:opacity-40 focus:outline-none active:outline-none"
                    disabled={active === 0}>
                    <IoIosArrowBack className="text-2xl cursor-pointer" />
                </button>
                <button
                    onClick={() => setActive((a) => Math.min(maxIndex, a + 1))}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md disabled:opacity-40 focus:outline-none active:outline-none"
                    disabled={active >= maxIndex}>
                    <IoIosArrowForward className="text-2xl cursor-pointer" />
                </button>
            </div>
        </div>
    );
};

export default Slider;