import React from 'react';
import clientOne from '../../public/client1.png'
import clientTwo from '../../public/client2.png'
import clientThree from '../../public/client3.png'
import clientFour from '../../public/client4.png'
import { Poppins } from 'next/font/google';
import Image from 'next/image';
const clients = [clientOne, clientTwo, clientThree, clientFour]
const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-poppins",
});
const CommercialClient = () => {
    return (
        <div className='mt-20 bg-[#0B4936]'>
            <div className='max-w-7xl mx-auto'>
                <h2 className={`text-center font-bold text-2xl  md:text-3xl text-white pt-10 ${poppins.className}`}>Our Commercial Clients</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
                    {clients.map((client, index) =>
                        <div key={index} className='py-10 px-20 flex justify-center items-center'>
                            <Image quality={100}
                                priority src={client} alt='client-image' className='md:h-[100px] md:object-fit md:w-auto' />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommercialClient;