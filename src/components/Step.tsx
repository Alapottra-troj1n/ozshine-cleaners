import React from 'react';
import stepOne from '../../public/Emi1.png'
import stepTwo from '../../public/Emi2.png'
import stepThree from '../../public/Emi3.png'
import stepFour from '../../public/Emi4.png'
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const steps = [
    {
        icon: stepThree,
        title: 'Request Your Free Quote',
        des: 'Fill out the form or call one of our friendly staff to request a free quote'
    },
    {
        icon: stepFour,
        title: 'Call for Booking',
        des: 'Speak directly with our friendly team and secure your preferred cleaning time today'
    },
    {
        icon: stepTwo,
        title: 'We Come and Clean',
        des: 'Our team arrives on time, fully equipped, and ready to make your home shine'
    },
];

const Step = () => {
    return (
        <div>
            <div className='mt-20 flex flex-col items-center justify-center gap-5'>
                <Image src={stepOne} alt='step-one' height={80} width={80} />
                <h2 className={`text-[#0B4936] text-2xl md:text-3xl font-bold text-center ${poppins.className}`}>
                    3-Step House Cleaning Melbourne Process
                </h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-15 max-w-7xl mx-auto '>
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center gap-4">
                        <Image
                            src={step.icon}
                            alt={step.title}                       
                            className="object-contain w-[200px] h-[200px]"
                        />
                        <h2 className={`text-xl font-bold ${poppins.className}`}>{step.title}</h2>
                        <p className="text-[#3A3A3A] text-lg px-5 lg:px-0 ">{step.des}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Step;
