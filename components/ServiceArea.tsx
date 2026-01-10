import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const ServiceArea: React.FC = () => {
  return (
    <section id="service-area" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
          <div className="order-2 lg:order-1">
             {/* Abstract Map Representation since we don't have an API Key */}
             <div className="relative w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1774&q=80" 
                    alt="Map of service area" 
                    className="w-full h-full object-cover opacity-60 grayscale"
                />
                
                {/* Simulated Pins */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                        <span className="flex h-6 w-6 relative z-10">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-6 w-6 bg-brand-orange border-2 border-white"></span>
                        </span>
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-brand-navy text-white text-xs font-bold py-1 px-2 rounded whitespace-nowrap">
                            Local Techs Ready
                        </div>
                    </div>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-3">Service Coverage</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">Serving Bakersfield, Wichita & Lubbock</h3>
            <p className="text-gray-600 mb-8 text-lg">
                Our fleet is positioned to reach your job site fast. Whether you are in the <strong>Kern County oil fields</strong>, the <strong>Kansas aviation district</strong>, or the <strong>Texas cotton belt</strong>, we have a truck nearby.
            </p>

            <ul className="space-y-4 mb-8">
                <li className="flex items-center text-brand-navy font-semibold">
                    <MapPin className="w-5 h-5 text-brand-orange mr-3" />
                    Bakersfield & Kern County, CA
                </li>
                <li className="flex items-center text-brand-navy font-semibold">
                    <MapPin className="w-5 h-5 text-brand-orange mr-3" />
                    Wichita & Sedgwick County, KS
                </li>
                <li className="flex items-center text-brand-navy font-semibold">
                    <MapPin className="w-5 h-5 text-brand-orange mr-3" />
                    Lubbock & South Plains, TX
                </li>
                <li className="flex items-center text-brand-navy font-semibold">
                    <MapPin className="w-5 h-5 text-brand-orange mr-3" />
                    Remote & Off-Road Sites
                </li>
            </ul>

            <button className="flex items-center text-brand-navy font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors">
                <Navigation className="w-4 h-4 mr-2" />
                View Detailed Maps
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceArea;