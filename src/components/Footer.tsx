import React from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Logo from '../../public/Ozshine cleaners logo.webp';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const Footer = () => {
    return (
        <footer className={`${poppins.className} bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20`}>
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-5 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href={'/'} className="inline-block mb-4 transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src={Logo}
                                alt="OzShine Cleaners Logo"
                                height={120}
                                width={120}
                                className="drop-shadow-lg"
                            />
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                            Melbourne's trusted cleaning service for over 8 years. We specialize in eco-friendly recurring home cleaning services for families who value a healthy, spotless home.
                        </p>                    
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-white relative inline-block">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:+61452679582"
                                    className="flex items-start gap-3 text-gray-300 hover:text-[#FF6500] transition-colors duration-300 group">
                                    <FaPhone className="text-[#0F5E46] text-lg mt-1 scale-x-[-1] group-hover:text-[#FF6500] transition-colors" />
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">Call Us</p>
                                        <p className="font-semibold">+61 452 679 582</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@ozshinecleaners.com.au"
                                    className="flex items-start gap-3 text-gray-300 hover:text-[#FF6500] transition-colors duration-300 group">
                                    <FaEnvelope className="text-[#0F5E46] text-lg mt-1 group-hover:text-[#FF6500] transition-colors" />
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">Email</p>
                                        <p className="font-semibold text-sm break-all">admin@ozshinecleaners.com</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-gray-300">
                                    <FaMapMarkerAlt className="text-[#0F5E46] text-lg mt-1" />
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">Location</p>
                                        <p className="font-semibold">Melbourne</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className=" px-5 py-6">
                        <p className="text-sm text-center">
                            © 2025 <span className="font-semibold">OzShine Cleaners</span>. All rights reserved.
                        </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;