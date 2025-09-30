"use client";
import React, { useState, useRef, useEffect } from "react";
import { Prata, Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

interface SlideType {
    beforeImage: string;
    afterImage: string;
}

interface SliderProps {
    slides: SlideType[];
    height?: number;
    spaceBetween?: number;
}


const ArrowBackIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
    </svg>
);

const ArrowForwardIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
);

const CustomSwiper: React.FC<any> = ({
    children,
    onInit,
    navigation,
    breakpoints,
    className,
    ...props
}) => {
    const slidesArray = React.Children.toArray(children);
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [spaceBetween, setSpaceBetween] = useState(10);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let newSlidesPerView = 1;
            let newSpaceBetween = 10;

            if (width >= 1024) {
                newSlidesPerView = 3;
                newSpaceBetween = 30;
            } else if (width >= 640) {
                newSlidesPerView = 2;
                newSpaceBetween = 20;
            }
            setSlidesPerView(newSlidesPerView);
            setSpaceBetween(newSpaceBetween);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = slidesArray.length;
    const maxIndex = Math.max(0, totalSlides - slidesPerView);
    const goToSlide = (index: number) => {
        const clampedIndex = Math.max(0, Math.min(maxIndex, index));
        setActiveIndex(clampedIndex);
    };


    useEffect(() => {
        const mockSwiper = {
            params: { navigation },
            navigation: {
                init: () => {

                },
                update: () => { }
            }
        };
        if (navigation?.prevEl) {
            navigation.prevEl.onclick = () => goToSlide(activeIndex - 1);
        }
        if (navigation?.nextEl) {
            navigation.nextEl.onclick = () => goToSlide(activeIndex + 1);
        }

        if (onInit) {
            onInit(mockSwiper);
        }

    }, [navigation, activeIndex, maxIndex, slidesPerView]);

    const isPrevDisabled = activeIndex === 0;
    const isNextDisabled = activeIndex >= maxIndex;

    const itemWidth = 100 / slidesPerView;
    const itemGap = spaceBetween;
    const totalGap = itemGap * activeIndex;
    const finalTransformValue = `translateX(calc(-${activeIndex * itemWidth}% - ${totalGap}px))`;

    return (
        <div className={`swiper-container overflow-hidden ${className}`}>
            <div
                className="swiper-wrapper flex transition-transform duration-500 ease-in-out"
                style={{ transform: finalTransformValue }}>
                {slidesArray.map((slide, index) => (
                    <div
                        key={index}
                        className="swiper-slide shrink-0 flex justify-center items-center"
                        style={{
                            width: `calc(${100 / slidesPerView}% - ${spaceBetween / slidesPerView}px)`,
                            marginRight: index < totalSlides - 1 ? `${spaceBetween}px` : '0px'
                        }}>
                        {slide}
                    </div>
                ))}
            </div>
            <div className="swiper-pagination flex justify-center mt-4">
                {Array(Math.ceil(totalSlides / slidesPerView)).fill(0).map((_, index) => (
                    <span
                        key={index}
                        className={`w-2.5 h-2.5 mx-1 rounded-full cursor-pointer transition-colors ${index * slidesPerView <= activeIndex && (index + 1) * slidesPerView > activeIndex
                            ? 'bg-gray-100' : 'bg-gray-300'
                            }`}
                        onClick={() => goToSlide(index * slidesPerView)}
                    ></span>
                ))}
            </div>
            {navigation && navigation.prevEl && (
                <style>{`
                    .swiper-button-prev-custom { 
                        opacity: ${isPrevDisabled ? 0.3 : 1}; 
                        pointer-events: ${isPrevDisabled ? 'none' : 'auto'} !important;
                    }
                `}</style>
            )}
            {navigation && navigation.nextEl && (
                <style>{`
                    .swiper-button-next-custom { 
                        opacity: ${isNextDisabled ? 0.3 : 1}; 
                        pointer-events: ${isNextDisabled ? 'none' : 'auto'} !important;
                    }
                `}</style>
            )}
        </div>
    );
};
const CustomSwiperSlide: React.FC<any> = ({ children }) => <>{children}</>;

const BeforeAfterSlider: React.FC<{
    beforeImage: string;
    afterImage: string;
    height: number;
}> = ({ beforeImage, afterImage, height }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [sliderPos, setSliderPos] = useState<number>(50);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const handleRef = useRef<HTMLDivElement | null>(null);
    const startDrag = () => setIsDragging(true);
    const stopDrag = () => setIsDragging(false);
    const onDrag = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        let pos = ((clientX - rect.left) / rect.width) * 100;
        pos = Math.max(0, Math.min(100, pos));
        setSliderPos(pos);
    };

    useEffect(() => {
        if (!isDragging) return;

        const handleMouseMove = (e: MouseEvent) => onDrag(e.clientX);
        const handleMouseUp = () => stopDrag();
        const handleTouchMove = (e: TouchEvent) => onDrag(e.touches[0].clientX);
        const handleTouchEnd = () => stopDrag();

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className="relative select-none touch-none w-full shadow-lg overflow-hidden rounded-lg transition-transform duration-300 hover:shadow-2xl"
            style={{ height }}>
            <img
                src={afterImage}
                alt="After (Background)"
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
            />
            <img
                src={beforeImage}
                alt="Before (Clipped Overlay)"
                className="absolute top-0 left-0 w-full h-full object-cover"

                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)`, aspectRatio: '4/3' }}
            />

            <div
                ref={handleRef}
                onMouseDown={startDrag}
                onTouchStart={startDrag}
                className="swiper-no-swiping absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-2xl border border-white  cursor-ew-resize flex items-center justify-center z-20 transition-transform duration-100 ease-out hover:scale-110"
                style={{ left: `${sliderPos}%` }}>
                <div className="text-2xl text-gray-800 font-extrabold flex">
                    <ArrowBackIcon className="w-5 h-5" />
                    <ArrowForwardIcon className="w-5 h-5" />
                </div>
            </div>
            <div
                className="absolute top-0 h-full border border-white shadow-inner pointer-events-none z-10"
                style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            />
        </div>
    );
};
const Slider: React.FC<SliderProps> = ({
    slides,
    height = 250,
    spaceBetween = 20
}) => {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    return (
        <>
            <div className={`flex flex-col items-center justify-center mt-15 mb-5 gap-3 ${poppins.className}`}>
                <h2 className="text-[#145B42] font-bold text-3xl">Our Impeccable Results</h2>
                <p className="text-lg">Witness Unmatched Excellence Displayed in Every Post-Cleaning Photograph in Melbourne</p>
            </div>
            <div className="relative w-full max-w-7xl mx-auto py-8 px-4">
                <CustomSwiper
                    onInit={(swiper: any) => {
                        if (swiper.params.navigation) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    }}
                    navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                    className="pb-10">

                    {slides.map((slide, index) => (
                        <CustomSwiperSlide key={index}>
                            <BeforeAfterSlider
                                beforeImage={slide.beforeImage}
                                afterImage={slide.afterImage}
                                height={height}
                            />
                        </CustomSwiperSlide>
                    ))}
                </CustomSwiper>

                <div className="absolute inset-0 flex items-center justify-between z-30 pointer-events-none">
                    <div
                        ref={prevRef}
                        className="swiper-button-prev-custom pointer-events-auto bg-white rounded-full p-3 shadow-xl hover:bg-gray-100 transition-colors cursor-pointer z-40 -ml-4 md:-ml-8 opacity-100 disabled:opacity-30 disabled:pointer-events-none">
                        <ArrowBackIcon className="text-xl text-gray-800 w-6 h-6" />
                    </div>
                    <div
                        ref={nextRef}
                        className="swiper-button-next-custom pointer-events-auto bg-white rounded-full p-3 shadow-xl hover:bg-gray-100 transition-colors cursor-pointer z-40 -mr-4 md:-mr-8 opacity-100 disabled:opacity-30 disabled:pointer-events-none">
                        <ArrowForwardIcon className="text-xl text-gray-800 w-6 h-6" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
