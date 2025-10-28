"use client"
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';
import { MdInfo, MdClose } from 'react-icons/md';
import toast from "react-hot-toast";
import { IoIosArrowDown } from 'react-icons/io';
import axios from 'axios';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}
const suburbs = [
    "Balwyn North", "Blackburn", "Box Hill", "Brunswick", "Brunswick East",
    "Burwood", "Camberwell", "Camberwell East", "Carlton", "Cranbourne",
    "Craigieburn", "Doncaster", "Essendon", "Fitzroy", "Footscray",
    "Glen Waverley", "Hawthorn", "Kew", "Malvern East", "Moonee Ponds",
    "Mount Waverley", "Pakenham", "Richmond", "South Yarra", "Tarneit",
    "Toorak", "Werribee", "Williamstown", "Yarraville"
];


const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [suburbInput, setSuburbInput] = useState('');
    const [isSuburbOpen, setIsSuburbOpen] = useState(false);
    const [filteredSuburbs, setFilteredSuburbs] = useState<string[]>(suburbs);
    const suburbWrapperRef = useRef<HTMLDivElement>(null);

    // Filter suburbs based on input
    useEffect(() => {
        const filtered = suburbs.filter(suburb =>
            suburb.toLowerCase().includes(suburbInput.toLowerCase())
        );
        setFilteredSuburbs(filtered);
    }, [suburbInput]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (suburbWrapperRef.current && !suburbWrapperRef.current.contains(event.target as Node)) {
                setIsSuburbOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const templateParams = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            suburb: formData.get("suburb"),
            frequency: formData.get("frequency"),
            service: formData.get("service"),
            message: formData.get("message"),
        };

        setIsLoading(true);

        try {
            const response = await axios.post(
                "https://o-zshinecleaners-server.vercel.app/quoteInfo",
                templateParams,
                { withCredentials: true }
            );

            if (response.data.success) {
                formRef.current?.reset();
                onClose()
                router.push('/thankyou')
            }
        } catch (error) {
            console.error("Error submitting request:", error);
            toast.error("Failed to submit request. Please try again.", {
                duration: 4000,
                position: "top-center",
            });
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none ${poppins.className}`}>
                        <div
                            className="bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-100 pointer-events-auto transform transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-200 z-10"
                                aria-label="Close modal">
                                <MdClose className="text-2xl" />
                            </button>

                            <div className="p-6 md:p-8">
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                        Get My Free Quote
                                    </h2>
                                    <p className="text-base text-gray-600">
                                        Fill out the form below or{" "}
                                        <span className="text-[#EE892A] font-semibold">call us to book instantly</span>
                                    </p>
                                </div>

                                <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                                    {/* Name & Email Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                required
                                                disabled={isLoading}
                                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400"
                                            />
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                required
                                                disabled={isLoading}
                                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone"
                                            disabled={isLoading}
                                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400"
                                        />
                                    </div>

                                    {/* Suburb & Frequency Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Suburb selection */}
                                        <div className="relative" ref={suburbWrapperRef}>
                                            <input
                                                type="text"
                                                name="suburb"
                                                value={suburbInput}
                                                onChange={(e) => {
                                                    setSuburbInput(e.target.value);
                                                    setIsSuburbOpen(true);
                                                }}
                                                onFocus={() => setIsSuburbOpen(true)}
                                                placeholder="Select suburb"
                                                required
                                                disabled={isLoading}
                                                className="w-full p-3 pr-12 border-2 border-gray-200 rounded-lg bg-white focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400"
                                                autoComplete="off"
                                            />

                                            <IoIosArrowDown
                                                className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0F5E46] pointer-events-none text-xl transition-transform duration-200 ${isSuburbOpen ? 'rotate-180' : ''}`}
                                            />

                                            {isSuburbOpen && filteredSuburbs.length > 0 && (
                                                <ul className="absolute z-10 w-full mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                                                    {filteredSuburbs.map((suburb) => (
                                                        <li
                                                            key={suburb}
                                                            onClick={() => {
                                                                setSuburbInput(suburb);
                                                                setIsSuburbOpen(false);
                                                            }}
                                                            className="p-3 hover:bg-[#0F5E46] hover:text-white cursor-pointer transition-colors text-gray-900"
                                                        >
                                                            {suburb}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {isSuburbOpen && filteredSuburbs.length === 0 && suburbInput && (
                                                <div className="absolute z-10 w-full mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-lg p-3 text-gray-500 text-sm">
                                                    No suburbs found
                                                </div>
                                            )}
                                        </div>

                                        {/* Frequency selection */}
                                        <div className="relative">
                                            <select
                                                name="frequency"
                                                defaultValue=""
                                                required
                                                disabled={isLoading}
                                                className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white appearance-none focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 cursor-pointer">
                                                {/* <option value="" disabled>Select Frequency</option> */}
                                                <option>Weekly</option>
                                                <option>Fortnightly</option>
                                                <option>Monthly</option>
                                            </select>
                                            <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0F5E46] pointer-events-none text-xl" />
                                        </div>
                                    </div>

                                    {/* Service Selection */}
                                    <div className="relative">
                                        <select
                                            name="service"
                                            defaultValue=""
                                            required
                                            disabled={isLoading}
                                            className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white appearance-none focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 cursor-pointer">
                                            {/* <option value="" disabled>Select a Service</option> */}
                                            {/* <option>Regular House Cleaning</option> */}
                                            <option>Office Cleaning</option>
                                        </select>
                                        <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0F5E46] pointer-events-none text-xl" />
                                    </div>

                                    {/* Message */}
                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            placeholder="Tell us about your cleaning needs... (optional)"
                                            rows={4}
                                            disabled={isLoading}
                                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0F5E46] focus:ring-2 focus:ring-[#0F5E46]/20 focus:outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 placeholder:text-gray-400 resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className=" bg-[#0E4E38] text-white font-bold py-4 px-6 rounded-lg flex-1 cursor-pointer disabled:bg-gradient-to-r disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group">
                                            <span className="relative z-10 flex items-center gap-2">
                                                {isLoading ? (
                                                    <>
                                                        <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    "Submit for Free Quote"
                                                )}
                                            </span>
                                        </button>
                                        <a
                                            href="tel:+61452676982"
                                            className=" bg-[#EE892A] text-white font-bold py-4 px-6 rounded-lg flex-1 flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group">
                                            <span className="relative z-10 flex items-center gap-2">
                                                <FaPhone className="scale-x-[-1]" />
                                                <span className="hidden sm:inline">Call:</span> +61452676982
                                            </span>
                                        </a>
                                    </div>

                                    {/* Important Notice */}
                                    <div className="bg-amber-50 border-l-4 border-[#EE892A] p-4 rounded-r-lg mt-6">
                                        <div className="flex items-start gap-3">
                                            <MdInfo className="text-[#EE892A] text-xl flex-shrink-0 mt-0.5" />
                                            <div className="text-sm text-gray-700 leading-relaxed">
                                                <p className="mb-1">
                                                    <span className="font-semibold text-gray-900">Important:</span> We specialize in recurring cleans only — not one-off or end-of-lease cleans.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default QuoteModal;