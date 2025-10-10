"use client"
import { useState } from "react";
import { usePathname } from "next/navigation"; // Add this import
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { Prata, Poppins } from "next/font/google";
import Image from "next/image";
import Logo from '../../../public/Ozshine cleaners logo.webp'
import Navbar from "./Navbar";
import QuoteModal from "../QuoteModal";

const prata = Prata({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-prata",
});

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const handleQuoteClick = () => {
        if (isHomePage) {
            const formSection = document.getElementById('hero-form');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <header className="flex justify-between max-w-7xl mx-auto px-5 items-center gap-5 md:gap-0">
                <Link href={'/'} className="hidden lg:block">
                    <Image src={Logo} alt="ozshine-cleaners-logo" height={100} width={100} />
                </Link>


                <div className="flex items-center">
                    <Navbar onQuoteClick={handleQuoteClick} />
                    <Link href={'/'} className="block lg:hidden">
                        <Image src={Logo} alt="ozshine-cleaners-logo" height={100} width={100} />
                    </Link>
                </div>

                <div className="flex flex-col justify-end">
                    <div className="flex justify-end leading-tight ">
                        <span className={`${poppins.className} text-sm font-normal`}>
                            Quick Contact
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhone className="text-[#0E4E38] text-md md:text-lg scale-x-[-1] rotate-12 mb-[5px]" />
                        <a href="tel:+61452679582" className={`${poppins.className} text-lg font-semibold text-[#0E4E38]`}>
                            +61452679582
                        </a>
                    </div>
                </div>
            </header>
            {!isHomePage && (
                <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            )}
        </>
    );
};

export default Header;