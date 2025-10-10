import { Poppins } from 'next/font/google';
import React from 'react';
const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});
const Page = () => {
    return (
        <div>
            <section className={`max-w-7xl mx-auto py-16 px-6 text-center ${poppins.className}`}>
                <h2 className='text-3xl mb-5 italic text-red-700'>[This content is wokring on. We will update very soon. Thank You!]</h2>
                <h1 className="text-4xl font-semibold text-gray-800 mb-4">
                    Office Cleaning Services
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                    A clean and organized workspace plays a vital role in productivity, health, and first impressions.
                    Our Office Cleaning Service ensures your work environment remains spotless, sanitized, and welcoming every day.
                    We handle the details so your team can focus on performance and success.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
                    {/* How We Work */}
                    <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">🏢 How We Work</h3>
                        <p className="text-gray-600">
                            Our trained cleaning staff follow a systematic plan tailored for office environments.
                            From desk areas and meeting rooms to washrooms and break areas — every space is cleaned with precision and care,
                            using eco-friendly products and efficient equipment.
                        </p>
                    </div>

                    {/* What’s Included */}
                    <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">🧽 What’s Included</h3>
                        <p className="text-gray-600">
                            Our standard service includes floor cleaning, dusting, trash removal, glass polishing, restroom sanitization,
                            and kitchen maintenance. We also offer customizable schedules — daily, weekly, or bi-weekly — based on your business needs.
                        </p>
                    </div>

                    {/* Client Feedback */}
                    <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">💬 What Clients Say</h3>
                        <p className="text-gray-600 italic">
                            “Our office has never looked better. The team is professional, thorough, and always on time.
                            We’ve noticed a real boost in morale since partnering with them.”
                            <br />
                            <span className="not-italic text-gray-700 font-medium">
                                — Md. Rahim, Operations Director
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
