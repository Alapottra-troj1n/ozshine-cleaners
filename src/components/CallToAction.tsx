import React from 'react';
import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});
const CallToAction = () => {
    return (
        <div className='bg-[#0B4936] mt-20 p-10 flex flex-col items-center justify-center gap-5'>
            <h2 className={`text-white font-bold ${poppins.className} text-3xl`}>Professional Cleaning Made Simple, Get Your Free Quote Today!</h2>
            <button className='border border-white px-5 py-2 rounded-md font-semibold text-black bg-white'>Get Quote</button>
        </div>
    );
};

export default CallToAction;