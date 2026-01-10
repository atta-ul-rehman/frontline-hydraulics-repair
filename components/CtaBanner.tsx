import React from 'react';
import { Phone } from 'lucide-react';

const CtaBanner: React.FC = () => {
  return (
    <section className="bg-brand-navy py-20 px-4 text-center border-t-8 border-brand-orange">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Hydraulic Emergency? We're Ready 24/7
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Don't let equipment downtime cost you money. Call now for immediate service.
        </p>
            
        <div className="flex flex-col items-center justify-center gap-4">
            <a 
                href="tel:555-123-4567" 
                className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white text-xl font-bold px-10 py-5 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
                <Phone className="w-6 h-6 fill-current" />
                (XXX) XXX-XXXX
            </a>
            <span className="text-gray-400 text-sm mt-4">Available 24 hours a day, 7 days a week, 365 days a year</span>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;