import React, { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const PhoneContactSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle the callback request here
    console.log('Callback requested for:', phoneNumber);
  };

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      {/* Direct Contact Section */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          Direct contact?
        </h2>
        <p className="mb-4 text-secondary">
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

      {/* Make Appointment Button */}
      <div className="p-6 ">
        <button className="w-full h-full bg-white rounded-3xl p-6 flex items-center justify-between group transition-all duration-300 hover:shadow-lg">
          <span className="text-2xl font-semibold text-secondary">
            Maak een afspraak
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>

  );
};

export default PhoneContactSection;