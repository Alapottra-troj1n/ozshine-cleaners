import React from 'react'
import valueOne from '../../public/valueOne.png'
import valueTwo from '../../public/valueTwo.png'
import valueThree from '../../public/valueThree.png'
import valueFour from '../../public/valueFour.png'
import Image from 'next/image'
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const values = [
    {
        title: 'What $10 Million Coverage Means for You',
        icon: valueOne,
        des: 'Our $10 million insurance coverage goes above and beyond industry standards. It serves as a testament to our confidence in our highly-trained and professional cleaning teams. In the unlikely event of any damages or incidents, you can rest easy knowing that you are covered by a substantial insurance policy'
    },
    {
        title: 'Transparency and Trust',
        icon: valueTwo,
        des: 'At Ozshinecleaners, transparency is one of our core values. We believe in open communication, and our insurance coverage is just one example of how we prioritize transparency. Our commitment to providing the best cleaning services goes hand-in-hand with our dedication to ensuring our clients peace of mind.'
    },
    {
        title: 'Partner with Us',
        icon: valueThree,
        des: 'Choose Ozshinecleaners for your cleaning needs and experience the difference of working with a reliable and insured cleaning service. We go the extra mile to protect your property and provide the highest standard of service.'
    },
    {
        title: 'Contact Us Today',
        icon: valueFour,
        des: 'Ready to schedule a cleaning service with confidence? Contact us today to discuss your cleaning requirements, and let us show you the exceptional service backed by $1 million in public reliability insurance.'
    }
]

const Value = () => {
    return (
        <div className='bg-[#0B4936] mt-20'>
            <div className='max-w-7xl mx-auto '>
                <div className={`mt-5 flex items-center justify-center flex-col py-10 gap-5 text-white ${poppins.className}`}>
                    <h2 className='text-2xl md:text-4xl mx-3 lg:mx-0 font-bold text-center'>Our Public Reliability Insurance</h2>
                    <p className='text-md mx-4 lg:mx-0 md:text-lg text-center md:max-w-3xl '>
                        Our robust public reliability insurance coverage is designed to provide you with the utmost assurance and protection.
                    </p>
                </div>

                <div className='grid grid-cols-1 xl:px-5 sm:grid-cols-2 gap-8 pb-16'>
                    {values.map((value, index) =>
                        <div
                            key={index}
                            className='border border-[#5B936C] px-8 md:px-15 py-10 flex flex-col items-center rounded-2xl bg-white/5 
                       hover:shadow-xl hover:scale-[1.02] transition-all duration-300'>
                            <Image
                                className="mb-4 w-[103px] h-[80px] object-contain"
                                src={value.icon}
                                alt={value.title}

                            />
                            <h2 className='text-[#FF9531] font-semibold text-xl text-center  lg:text-2xl mb-3'>{value.title}</h2>
                            <p className={`text-left hyphenate tracking-tighter text-white text-xl leading-relaxed ${poppins.className}`}>
                                {value.des}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Value;
