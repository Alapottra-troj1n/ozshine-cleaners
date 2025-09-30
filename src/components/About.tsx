import React from "react";
import Clean from "../../public/Clean.jpg";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const features = [
    {
        title: "Safe and Healthy Spaces",
        text: "Cruelty-free cleaning products and HEPA-filtered vacuums to eliminate toxins and allergens, creating a healthier environment for your family.",
    },
    {
        title: "Trusted Professionals",
        text: "Our team is extensively trained and consistently receives high marks for their dedication and professionalism.",
    },
    {
        title: "Uncompromising Quality",
        text: "Our advanced, energy-efficient equipment and meticulous cleaning methods ensure a spotless clean without sacrificing effectiveness.",
    },
];

const About = () => {
    return (
        <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row gap-10">
            {/* Left Section */}
            <div className="md:w-2/3">
                <div className="mb-5">
                    <h2 className="inline-block border border-[#DDF8D5] rounded-full px-5 py-2 bg-[#DDF8D5] font-bold">
                        About Us
                    </h2>
                </div>

                <h2 className={`text-[#136048] ${poppins.className} font-bold text-3xl md:w-2/3`}>
                    Your Ultimate Home Cleaning Partner!
                </h2>

                <p className={`mt-6 ${poppins.className} text-lg mb-10 leading-relaxed text-gray-700`}>
                    As your best Melbourne cleaning company, we specialize in a range of
                    services designed to cater to your unique needs. From ensuring a
                    seamless transition with our meticulous End of Lease cleaning in
                    Melbourne to reviving the vibrancy of your carpets through our
                    top-notch carpet cleaning services in Melbourne,
                </p>

                <ul className={`flex flex-col gap-5 ${poppins.className}`}>
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <Image
                                src="/Location-Exit.png"
                                alt="Feature icon"
                                width={24}
                                height={24}
                                className="mt-1"
                            />
                            <p className="text-base leading-relaxed text-gray-800">
                                <span className="text-[#3A3A3A] font-semibold">
                                    {feature.title}:
                                </span>{" "}
                                {feature.text}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Section */}
            <div className="md:w-1/3">
                <Image src={Clean} alt="Cleaning service" height={700} width={500} className="rounded-xl object-cover shadow-lg h-[550px]" />
            </div>
        </div>
    );
};

export default About;
