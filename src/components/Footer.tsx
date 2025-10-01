import React from 'react';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});
const Footer = () => {
    return (
        <footer className='mt-25'>
            <h2 className={`text-center text-sm font-bold text-[#094835] ${poppins.className}`}>Copyright © 2025 - All right reserved</h2>
        </footer>
    );
};

export default Footer;