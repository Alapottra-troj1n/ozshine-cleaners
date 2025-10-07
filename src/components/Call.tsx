import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-poppins",
});
const Call = () => {
    return (
        <div className='mt-15 flex flex-col items-center justify-center gap-7'>
            <div className={`flex  items-center justify-center gap-3 text-[#0B4936] font-bold text-xl ${poppins.className}`}>
                <FaPhone className='scale-x-[-1]' />
                <h2>Call us now</h2>
            </div>
            <span className={`bg-[#FF9531] px-6 py-2 text-white rounded font-semibold ${poppins.className}`}>+61452679582</span>
        </div>
    );
};

export default Call;