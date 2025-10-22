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
        <footer className={`${poppins.className} mt-20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)]`}>
            {/* Main Footer Content */}
            <div className="max-w-5xl mx-auto px-5 py-5 lg:py-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center justify-center">

                    {/* Company Info */}
                    <div>
                        <Link href={'/'} className="inline-block  transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src={Logo}
                                alt="OzShine Cleaners Logo"
                                height={120}
                                width={120}
                                className=""
                            />
                        </Link>

                    </div>

                    {/* Contact Info */}
                    <div className='lg:col-span-2'>
                        <ul className="flex gap-10 flex-col lg:flex-row ">
                            <li>
                                <a href="tel:+61452679582"
                                    className="flex items-start gap-3 hover:text-[#FF6500] transition-colors duration-300 group">
                                    <FaPhone className="text-[#0F5E46] text-lg mt-1 scale-x-[-1] group-hover:text-[#FF6500] transition-colors" />
                                    <div>
                                        <p className="text-xs  mb-1">Call Us</p>
                                        <p className="font-semibold">+61 452 679 582</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:admin@ozshinecleaners.com"
                                    className="flex items-start gap-3 hover:text-[#FF6500] transition-colors duration-300 group">
                                    <FaEnvelope className="text-[#0F5E46] text-lg mt-1 group-hover:text-[#FF6500] transition-colors" />
                                    <div>
                                        <p className="text-xs  mb-1">Email</p>
                                        <p className="font-semibold text-sm break-all">admin@ozshinecleaners.com</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="text-[#0F5E46] text-lg mt-1" />
                                    <div>
                                        <p className="text-xs mb-1">Location</p>
                                        <p className="font-semibold">Melbourne</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-400">
                <div className="px-5 py-6">
                    <p className="text-sm text-center">
                        © 2025 <span className="font-semibold">OzShine Cleaners</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;