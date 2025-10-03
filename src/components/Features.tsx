import React from 'react';
import EcoFriendlyIcon from '../../public/ecofriendly.png';
import RatingIcon from '../../public/Ratings.png';
import CustomerServiceIcon from '../../public/public-service.png';
import ExpertTraineeIcon from '../../public/operator.png';
import { Poppins } from "next/font/google";
import Image from 'next/image';
const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});
const features = [
    {
        title: 'Expert Trained Staff',
        icon: ExpertTraineeIcon
    },
    {

        title: 'Eco Friendly Products',
        icon: EcoFriendlyIcon
    },
    {
        title: 'Responsible Customer Service',
        icon: CustomerServiceIcon
    },
    {
        title: 'Top-Rated Google Reviews',
        icon: RatingIcon
    }
];

const Features = () => {
    return (
        <div className="bg-[#0B4936]">
            <div className={`max-w-7xl mx-auto py-8 md:mt-44 ${poppins.className}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-white gap-10 md:gap-0">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center px-4">
                            <div className="mb-3">
                                <Image
                                    src={feature.icon}
                                    height={60}
                                    width={60}
                                    alt={feature.title}
                                    className="filter brightness-0 invert"
                                />
                            </div>
                            <p className="text-lg font-medium w-2/3">{feature.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Features;