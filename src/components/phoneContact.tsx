import React, { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const PhoneContactSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle the callback request here
    console.log('Callback requested for:', phoneNumber);
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      {/* Direct Contact Section */}
      <div className="bg-white p-6 ">
        <h2 className="text-xl font-semibold text-secondary mb-3">
          Direct contact?
        </h2>
        <p className="mb-4 text-secondary">
          Bel <a href="tel:+31 06 51 950 524" className="text-primary hover:underline">+31 06 51 950 524</a> of laat ons terugbellen
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="tel"
            placeholder="Telefoonnummer"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
          >
            Bel mij terug
          </button>
        </form>
      </div>

      {/* Make Appointment Button */}
      <button className="w-full bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
        <span className="text-xl font-semibold text-secondary">
          Maak een afspraak
        </span>
        <ArrowRight className="text-primary transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default PhoneContactSection;