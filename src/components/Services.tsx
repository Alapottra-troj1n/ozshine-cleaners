"use client"
import React from 'react'
import serviceOne from '../../public/ServiceOne.png'
import serviceTwo from '../../public/ServiceTwo.png'
import serviceThree from '../../public/ServiceThree.png'
import serviceFour from '../../public/ServiceFour.png'
import Image from 'next/image'
import { Poppins } from "next/font/google";
import { usePathname } from 'next/navigation'

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const services = [
    {
        title: 'Tailored cleaning plans',
        slug: '/tailored',
        icon: serviceOne,
        des: 'Our tailored cleaning plans discard generic checklists, focusing on your homes unique rhythm and specific needs. We conduct a detailed consultation to create a fully personalized checklist, ensuring maximum efficiency and satisfaction.'
    },
    {
        title: 'Office Cleaning',
        slug: '/office',
        icon: serviceTwo,
        des: 'We deliver professional, hygienic cleaning for every corner of your workspace, from high-touch surfaces to common areas. Using eco-friendly products and expert methods, we ensure a pristine environment that enhances productivity and makes a lasting, positive impression.'
    },
    {
        title: 'Carpet Cleaning',
        slug: '/carpet',
        icon: serviceThree,
        des: 'Using eco-friendly, oxygen-powered cleaners, we remove deep-seated dirt, stains, and allergens, leaving your home fresh and healthy. Our gentle yet effective methods are safe for children and pets, ensuring a clean and comfortable living space for the entire family.'
    },
    {
        title: 'Regular House Cleaning',
        slug: '/regular',
        icon: serviceFour,
        des: 'Our regular house cleaning service is designed to keep your home consistently fresh, tidy, and comfortable. From dusting and vacuuming to mopping floors and sanitizing surfaces. Using safe, eco-friendly products, we ensure your living space stays clean and healthy.'
    }
]
const Services = () => {
    const pathname = usePathname();
    const filteredServices = services.filter((service) => service.slug === pathname);
    const serviceToShow = filteredServices.length > 0 ? filteredServices : services
    return (
        <div className='bg-[#0B4936] shadow-[0_10px_60px_-15px_rgba(0,0,0,0.4)]'>
            <div className='max-w-7xl mx-auto'>
                <div className={`mt-5 flex items-center justify-center flex-col py-10 gap-5 text-white ${poppins.className}`}>
                    <h2 className='text-3xl md:text-4xl font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]'>Our Services</h2>
                    <p className='text-lg text-center md:max-w-3xl mx-4 lg:mx-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]'>
                        We Always Deliver Superior Service for Your Varied Cleaning Requirements in Melbourne
                    </p>
                </div>

                <div className={`grid ${filteredServices.length>0?'grid-cols-1':'sm:grid-cols-2'} px-5 gap-8 pb-16`}>
                    {serviceToShow.map((service, index) =>
                        <div
                            key={index}
                            className='border border-[#5B936C] px-8 md:px-15 py-10 flex flex-col items-center rounded-2xl bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm'>
                            <Image
                                className="mb-4 w-[103px] h-[113px] object-contain drop-shadow-[0_6px_16px_rgba(255,149,49,0.3)] 
                                hover:drop-shadow-[0_8px_20px_rgba(255,149,49,0.5)] transition-all duration-300"
                                src={service.icon}
                                alt={service.title}

                            />
                            <h2 className='text-[#FF9531] font-semibold text-xl lg:text-2xl mb-3 drop-shadow-[0_2px_8px_rgba(255,149,49,0.4)]'>
                                {service.title}
                            </h2>
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