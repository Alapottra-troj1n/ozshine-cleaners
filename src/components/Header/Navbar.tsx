"use client";

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

interface NavbarProps {
    onQuoteClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname(); 

    const handleLinkClick = (action?: (() => void) | null) => {
        setIsMenuOpen(false);
        if (action) action();
    };

    const links = [
        { href: '/', label: 'Home', action: null },
        { href: '/regular', label: 'Home Cleaning', action: null },
        { href: '/office', label: 'Office Cleaning', action: null },
    ];

    const NavItem = ({ href, label, action }: { href: string; label: string; action: (() => void) | null }) => {
        const isActive = pathname === href; 
        return (
            <Link
                href={href}
                onClick={() => handleLinkClick(action)}
                className={`relative text-base font-medium transition-colors duration-300 group py-2
                    ${isActive ? 'text-[#0F5E46]' : 'text-gray-700 hover:text-[#0F5E46]'}
                `}
            >
                {label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0F5E46] to-[#FF6500] group-hover:w-full transition-all duration-300
                    ${isActive ? 'w-full' : ''}
                `}></span>
            </Link>
        );
    };

    const MobileNavItem = ({ label, action, href }: { label: string; action?: (() => void) | null; href?: string }) => {
        const isActive = href ? pathname === href : false;
        const commonClasses = `block text-md font-semibold py-3 border-b border-gray-100 transition duration-300 w-full text-left 
            ${isActive ? 'text-[#0F5E46]' : 'text-gray-800 hover:text-[#0F5E46]'} 
        `;

        if (href) {
            return (
                <Link href={href} onClick={() => handleLinkClick(action)} className={commonClasses}>
                    {label}
                </Link>
            );
        }

        return (
            <button onClick={() => handleLinkClick(action)} className={commonClasses}>
                {label}
            </button>
        );
    };

    return (
        <div className={`flex items-center justify-end ${poppins.className}`}>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex gap-8 items-center">
                {links.map((item) => (
                    <NavItem key={item.href} {...item} />
                ))}

                <button
                    onClick={() => handleLinkClick(onQuoteClick)}
                    className="relative text-gray-700 font-medium text-base hover:text-[#0F5E46] transition-colors duration-300 group py-2 cursor-pointer bg-transparent border-none"
                >
                    Quote
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0F5E46] to-[#FF6500] group-hover:w-full transition-all duration-300"></span>
                </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-2xl text-[#0F5E46] p-2 focus:outline-none z-50"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
            >
                <HiMenu className="text-xl" />
            </button>

            {/* Mobile Navbar */}
            <div
                className={`fixed inset-0 z-50 transform transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {isMenuOpen && (
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
                )}

                <div className="relative w-72 max-w-full h-full bg-white shadow-xl p-6 flex flex-col items-start space-y-4">
                    <button
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 p-2"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <MdClose className="text-3xl" />
                    </button>

                    <nav className="flex flex-col w-full space-y-2 mt-5">
                        {links.map((item) => (
                            <MobileNavItem key={item.href} label={item.label} href={item.href} />
                        ))}

                        <MobileNavItem label="Get A Free Quote" action={onQuoteClick} />
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
