// import { Poppins } from 'next/font/google';
// import React from 'react';
// import { CheckCircle, Calendar, UserCheck, Sparkles } from 'lucide-react';


// const poppins = Poppins({
//     weight: ["400", "500", "600", "700"],
//     subsets: ["latin"],
//     variable: "--font-poppins",
// });

// const Subscription = () => {
//     const plans = [
//         {
//             id: 1,
//             name: "Weekly Plan",
//             description: "Ideal for busy households or professionals who want a fresh, spotless home all week long.",
//             price: "From $50 / week",
//             color: "emerald",
//             features: [
//                 "One cleaning per week",
//                 "Consistent cleaning team",
//                 "Priority scheduling",
//                 "Free rescheduling"
//             ],
//             buttonText: "Get Started",
//             popular: false
//         },
//         {
//             id: 2,
//             name: "Fortnightly Plan",
//             description: "Perfect for smaller homes or couples who want regular maintenance without overdoing it.",
//             price: "From $75 / 2 weeks",
//             color: "blue",
//             features: [
//                 "One cleaning every two weeks",
//                 "Dedicated cleaner",
//                 "Flexible scheduling",
//                 "Seasonal deep cleaning"
//             ],
//             buttonText: "Choose Plan",
//             popular: true
//         },
//         {
//             id: 3,
//             name: "Monthly Plan",
//             description: "A great option for clients seeking a regular deep clean to maintain freshness and order.",
//             price: "From $120 / month",
//             color: "amber",
//             features: [
//                 "One cleaning per month",
//                 "Comprehensive cleaning",
//                 "Customizable checklist",
//                 "Monthly reports"
//             ],
//             buttonText: "Subscribe Now",
//             popular: false
//         }
//     ];

//     const steps = [
//         {
//             icon: <Calendar className="w-8 h-8" />,
//             title: "1. Book Your Preferred Day & Time",
//             description: "Choose a schedule that fits your routine — easily book online or by phone with flexible rescheduling options."
//         },
//         {
//             icon: <UserCheck className="w-8 h-8" />,
//             title: "2. Meet Your Assigned Cleaner",
//             description: "A trusted, background-checked professional will be assigned to your home for consistency and comfort."
//         },
//         {
//             icon: <Sparkles className="w-8 h-8" />,
//             title: "3. Enjoy a Spotless Home Every Week",
//             description: "Sit back and relax while we keep your space shining — week after week, with zero hassle."
//         }
//     ];

//     const getColorClasses = (color:any) => {
//         switch (color) {
//             case "emerald":
//                 return {
//                     border: "border-emerald-500",
//                     text: "text-emerald-600",
//                     bg: "bg-emerald-600",
//                     hover: "hover:bg-emerald-700",
//                     lightBg: "bg-emerald-50"
//                 };
//             case "blue":
//                 return {
//                     border: "border-blue-500",
//                     text: "text-blue-600",
//                     bg: "bg-blue-600",
//                     hover: "hover:bg-blue-700",
//                     lightBg: "bg-blue-50"
//                 };
//             case "amber":
//                 return {
//                     border: "border-amber-500",
//                     text: "text-amber-600",
//                     bg: "bg-amber-500",
//                     hover: "hover:bg-amber-600",
//                     lightBg: "bg-amber-50"
//                 };
//             default:
//                 return {
//                     border: "border-gray-500",
//                     text: "text-gray-600",
//                     bg: "bg-gray-600",
//                     hover: "hover:bg-gray-700",
//                     lightBg: "bg-gray-50"
//                 };
//         }
//     };

//     return (
//         <div className={`${poppins.className} min-h-screen`}>
//             <section className="max-w-7xl mx-auto py-5 px-6 text-center">
//                 {/* Membership / Plan Section */}
//                 <div className="bg-white rounded-3xl py-12 lg:px-8 mb-5">
//                     <h2 className="text-3xl font-semibold text-gray-800 mb-12 mx-2 lg:mx-0">
//                         Choose Your Cleaning Plan
//                     </h2>
//                     <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                         {plans.map((plan) => {
//                             const colorClasses = getColorClasses(plan.color);
//                             return (
//                                 <div
//                                     key={plan.id}
//                                     className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 ${colorClasses.border} relative flex flex-col`}>
//                                     {plan.popular && (
//                                         <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
//                                             Most Popular
//                                         </div>
//                                     )}
//                                     <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
//                                     <p className="text-gray-600 mb-6 flex-grow">
//                                         {plan.description}
//                                     </p>
//                                     <p className={`text-3xl font-bold ${colorClasses.text} mb-6`}>
//                                         {plan.price}
//                                     </p>
//                                     <ul className="mb-8 space-y-3">
//                                         {plan.features.map((feature, index) => (
//                                             <li key={index} className="flex items-start">
//                                                 <CheckCircle className={`w-5 h-5 ${colorClasses.text} mr-2 flex-shrink-0 mt-0.5`} />
//                                                 <span className="text-gray-600 text-left">{feature}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                     <button className={`${colorClasses.bg} text-white px-6 py-3 rounded-full font-medium ${colorClasses.hover} transition w-full mt-auto`}>
//                                         {plan.buttonText}
//                                     </button>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* How It Works Section */}
//                 <div className="my-5">
//                     <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//                         How It Works
//                     </h2>
//                     <p className="text-gray-600 max-w-2xl mx-auto mb-12">
//                         Getting started with our professional cleaning service is simple and hassle-free.
//                     </p>
//                     <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                         {steps.map((step, index) => (
//                             <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                                 <div className="flex justify-center mb-6">
//                                     <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
//                                         {step.icon}
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                                     {step.title}
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     {step.description}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>   
//             </section>
//         </div>
//     );
// };

// export default Subscription;