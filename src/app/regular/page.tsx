import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const Page = () => {
    return (
        <div className={`${poppins.className}`}>
            <section className="max-w-7xl mx-auto py-16 px-6 text-center">
                <h2 className='text-3xl mb-5 italic text-red-700'>[This content is wokring on. We will update very soon. Thank You!]</h2>
                <h1 className="text-4xl font-semibold text-gray-800 mb-4">
                    Regular Cleaning Services
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                    Our Regular Cleaning Service is designed to keep your home or workplace spotless, fresh, and hygienic on a consistent schedule. Whether it’s daily, weekly, or bi-weekly maintenance, our trained professionals ensure every surface shines and every corner is cared for — so you can focus on what matters most.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
                    <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">✨ How We Work</h3>
                        <p className="text-gray-600">
                            We follow a structured cleaning plan tailored to your space and schedule. From dusting and mopping to sanitizing high-touch areas, our team uses eco-friendly products and modern cleaning techniques to deliver consistent, high-quality results.
                        </p>
                    </div>

                    <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">🧹 What’s Included</h3>
                        <p className="text-gray-600">
                            Regular cleaning includes surface dusting, vacuuming, kitchen and bathroom cleaning, floor care, waste removal, and disinfecting common areas. Optional deep-cleaning add-ons are also available for high-traffic or special areas.
                        </p>
                    </div>

                    <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">🌟 What Clients Say</h3>
                        <p className="text-gray-600 italic">
                            “They make our office feel brand new every week. Professional, punctual, and reliable — highly recommended!”
                            <br />
                            <span className="not-italic text-gray-700 font-medium">— Sarah Ahmed, Office Manager</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
