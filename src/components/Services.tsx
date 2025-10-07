import React from 'react'
import serviceOne from '../../public/ServiceOne.png'
import serviceTwo from '../../public/ServiceTwo.png'
import serviceThree from '../../public/ServiceThree.png'
import serviceFour from '../../public/ServiceFour.png'
import Image from 'next/image'
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const services = [
    {
        title: 'Deep Cleaning',
        icon: serviceOne,
        des: 'We focus on areas often overlooked in regular cleaning, removing built-up dust, dirt, and grime to restore a spotless and healthy environment. Using safe, eco-friendly products and professional techniques, our team ensures every corner is cleaned and sanitized, leaving your space fresh, hygienic, and truly revitalized.'
    },
    {
        title: 'End of Lease Cleaning',
        icon: serviceTwo,
        des: 'Ensure a smooth transition with our professional end-of-lease cleaning services. Our expert team will leave your rental property spotless, ensuring you receive your full bond back. Ideal for landlords, tenants, and those moving into a new home, our thorough cleaning includes deep carpet cleaning.'
    },
    {
        title: 'Carpet Cleaning',
        icon: serviceThree,
        des: 'Using eco-friendly, oxygen-powered cleaners, we remove deep-seated dirt, stains, and allergens, leaving your home fresh and healthy. Our gentle yet effective methods are safe for children and pets, ensuring a clean and comfortable living space for the entire family.'
    },
    {
        title: 'Regular House Cleaning',
        icon: serviceFour,
        des: 'Our regular house cleaning service is designed to keep your home consistently fresh, tidy, and comfortable. From dusting and vacuuming to mopping floors and sanitizing surfaces. Using safe, eco-friendly products, we ensure your living space stays clean and healthy.'
    }
]
const Services = () => {
    return (
        <div className='bg-[#0B4936]  '>
            <div className='max-w-7xl mx-auto'>
                <div className={`mt-5 flex items-center justify-center flex-col py-10 gap-5 text-white ${poppins.className}`}>
                    <h2 className='text-3xl md:text-4xl font-bold '>Our Services</h2>
                    <p className='text-lg text-center md:max-w-3xl mx-4 lg:mx-0 '>
                        We Always Deliver Superior Service for Your Varied Cleaning Requirements in Melbourne
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 px-5 gap-8 pb-16'>
                    {services.map((service, index) =>
                        <div
                            key={index}
                            className='border border-[#5B936C] px-8 md:px-15 py-10 flex flex-col items-center rounded-2xl bg-white/5 
                       hover:shadow-xl hover:scale-[1.02] transition-all duration-300'>
                            <Image
                                className=" mb-4 w-[103px] h-[113px] object-contain"
                                src={service.icon}
                                alt={service.title}

                            />
                            <h2 className='text-[#FF9531] font-semibold text-xl lg:text-2xl mb-3'>{service.title}</h2>
                            <p className={`text-left hyphenate tracking-tighter text-white text-xl leading-relaxed ${poppins.className}`}>
                                {service.des}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;
