"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const Accordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const items = [
        {
            title: "How can I get a free quote for Melbourne cleaning services with OzShine Cleaners Melbourne?",
            content: "You can easily request a free, no-obligation quote by filling out our online form or giving us a quick call. Our team will assess your cleaning needs and provide a transparent price estimate tailored to your home or business.",
        },
        {
            title: "Can I schedule regular house cleaning services with OzShine Cleaners Melbourne?",
            content: "Yes, absolutely! We offer flexible scheduling for weekly, fortnightly, or monthly cleaning services. You can choose a time that suits your lifestyle, and we’ll make sure your home stays consistently fresh and spotless.",
        },
        {
            title: "What sets OzShine Cleaners Melbourne apart as a leading Melbourne cleaning company?",
            content: "OzShine Cleaners stands out because of our experienced staff, eco-friendly products, and commitment to delivering high-quality results. We focus on reliability, attention to detail, and customer satisfaction, making us one of Melbourne’s most trusted cleaning companies.",
        },
        {
            title: 'Do I get the same cleaner each time?',
            content: 'Yes. We will provide same cleaner again.'

        },
        {
            title: 'Do you bring your own equipment?',
            content: 'No !. Our professionals will bring it with them.'

        },
        {
            title: 'What areas of Melbourne do you service?',
            content: 'Richmon,South Yarra,Carlton,Box hill, Brunswick, Glen Waverley, Essendon, Footscray etc. Please call us for enquiry.'

        },
    ];


    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-20">
            <h2 className="text-center text-[#484848] text-4xl font-bold ">FAQ</h2>
            <div className="w-full max-w-5xl mx-auto mt-5  flex flex-col gap-2">
                {items.map((item, index: number) => (
                    <div key={index} className="border border-gray-300 rounded mx-5 lg:mx-0">
                        <button
                            onClick={() => toggleItem(index)}
                            className={`justify-between w-full p-4 text-left text-lg font-semibold focus:outline-none flex items-center ${poppins.className}`}>
                            {item.title}
                            <span>{openIndex === index ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
                        </button>
                        {openIndex === index && (
                            <div className="p-4 text-gray-600">{item.content}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Accordion;
