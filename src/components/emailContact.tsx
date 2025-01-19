import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle the callback request here
        console.log('Callback requested for:', phoneNumber);
      };

    return (
        <div className="relative">
            {/* Split backgrounds */}
            <div className="h-[200px] md:h-[300px] bg-transparent" />
            <div className="h-[500px] md:h-[400px] bg-primary rounded-b-3xl" />

            {/* Content container */}
            <div className="absolute inset-x-0 top-[20px] md:top-[50px] px-4">
                <div className="w-full max-w-6xl mx-auto">
                    {/* Main card */}
                    <div className="relative bg-secondary text-white md:p-8 rounded-2xl shadow-xl min-h-[600px] flex items-center">
                        {/* Text content */}
                        <div className="relative z-10 w-full md:w-1/2 p-4">
                            <div className="max-w-xl">
                                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                    We betalen direct met<br className="hidden md:block" />
                                    een glimlach<span className="text-red-500">.</span>
                                </h1>
                                <p className="text-base md:text-lg mb-8">
                                    Bij de vriendelijkste factoring service van{' '}
                                    <br className="hidden md:block" />
                                    Nederland hoort een gezicht: Onze{' '}
                                    <br className="hidden md:block" />
                                    Commercieel Directeur Jaap van Aalst is{' '}
                                    <br className="hidden md:block" />
                                    makkelijk bereikbaar.
                                </p>
                            </div>

                            <div>
                                <p className="mb-4 text-white">
                                    Bel <a href="tel:+31 06 51 950 524" className="text-primary hover:underline">+31 06 51 950 524</a> of laat ons terugbellen
                                </p>
                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="tel"
                                        placeholder="Telefoonnummer"
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
                                    >
                                        Bel mij terug
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Image section - responsive overlay */}
                        <div className="absolute inset-0 md:inset-auto md:right-0 md:top-0 md:bottom-0 md:w-1/2 overflow-hidden rounded-2xl md:rounded-l-none md:rounded-r-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent md:hidden" />
                            <img
                                src="/images/white.png"
                                alt="Director portrait"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;