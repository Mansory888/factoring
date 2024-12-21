import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle email submission
        console.log('Email submitted:', email);
    };

    return (
        <div className="relative">
            {/* Split backgrounds - corrected order and height */}
            <div className="h-[300px] bg-transparent" />
            <div className="h-[400px] bg-primary rounded-b-3xl" />

            {/* Content container - centered on the split */}
            <div className="absolute inset-x-0 top-[50px] px-4">
                <div className="w-full max-w-4xl mx-auto">
                    {/* Card overlapping the split */}
                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden h-[500px]">
                        {/* Background image */}
                        <img
                            src="/images/emailBg.jpg"
                            alt="Decorative office setup"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Hero content */}
                        <div className="relative z-10 p-8 lg:p-12 max-w-2xl mx-auto text-center text-white">
                            <h1 className="text-3xl lg:text-5xl font-bold mb-6">
                                We Betalen Direct Met Een Glimlach
                            </h1>
                            <p className="text-gray-200 mb-8">
                                We geven de voorkeur aan een persoonlijk gesprek. Laat je email achter.
                            </p>

                            {/* Email form */}
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    className="flex-1 px-4 py-3 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C84E31]"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-[#C84E31] text-white rounded-lg hover:bg-[#B33D22] transition-colors duration-200 flex items-center justify-center gap-2"
                                    aria-label="Submit email"
                                >
                                    <ArrowRight size={20} />
                                </button>
                            </form>
                        </div>

                        {/* Background overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;