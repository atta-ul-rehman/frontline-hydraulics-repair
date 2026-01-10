import React from 'react';
import { Phone, Clock, ShieldCheck, Wrench } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative bg-brand-navy pt-12 pb-16 lg:pt-28 lg:pb-32 overflow-hidden border-b-8 border-brand-orange">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Mobile hydraulic hose repair technician truck on site" 
          className="w-full h-full object-cover object-center"
        />
        {/* Heavy Industrial Overlay */}
        <div className="absolute inset-0 bg-brand-navy/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-orange text-white text-xs md:text-sm font-black px-4 py-1.5 uppercase tracking-wider mb-6 transform -skew-x-12">
            <span className="skew-x-12">24/7 Hydraulic Service</span>
          </div>
          
          {/* H1 Optimized for: Mobile Hydraulic Repair [City] */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.09em] tracking-wide mb-6 drop-shadow-lg">
            MOBILE HYDRAULIC HOSE REPAIR<br />
            <span className="text-brand-orange">WE GOT YOU 24/7</span>
            <span className="inline-flex items-center gap-2 mt-4 px-0 sm:px-4 py-2 text-base md:text-2xl mt-2 text-gray-300"> <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s8-4.438 8-11a8 8 0 10-16 0c0 6.562 8 11 8 11z" />
  </svg> Bakersfield, Wichita & Lubbock</span>
          </h1>
          
          {/* Subtext Optimized for: hydraulic hose repair near me, emergency hydraulic repair */}
          <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl font-medium border-l-4 border-brand-orange pl-6">
            <strong>Downtime costs you money.</strong> When a line blows, you need a truck on-site, fast. We bring the hose shop to you—24/7, no excuses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="tel:8594624673"
              className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white text-base sm:text-lg font-black px-6 sm:px-10 py-4 sm:py-5 rounded transition-all shadow-lg hover:shadow-orange-900/50 transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current animate-pulse" />
              <span>CALL DISPATCH: 859 462-4673</span>
            </a>
            
            <button 
              onClick={onOpenContact}
              className="flex items-center justify-center gap-2 bg-white text-brand-navy border-2 border-white hover:bg-gray-100 text-base sm:text-lg font-bold px-6 sm:px-10 py-4 sm:py-5 rounded transition-all shadow-md"
            >
              <span>Dispatch Technician Now</span>
            </button>
          </div>

          {/* Trust Indicators - Optimized for Keywords */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-700 pt-8">
             <div className="flex items-center gap-3">
                <div className="bg-brand-gray p-2 rounded">
                    <Clock className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                    <span className="block text-white font-bold uppercase text-sm">On-Site Fast</span>
                    <span className="block text-gray-400 text-xs">60-Min Avg Response</span>
                </div>
             </div>
             <div className="flex items-center gap-3">
                <div className="bg-brand-gray p-2 rounded">
                    <ShieldCheck className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                    <span className="block text-white font-bold uppercase text-sm">We Build It There</span>
                    <span className="block text-gray-400 text-xs">Mobile Fabrication</span>
                </div>
             </div>
             <div className="flex items-center gap-3">
                <div className="bg-brand-gray p-2 rounded">
                    <Wrench className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                    <span className="block text-white font-bold uppercase text-sm">All Equipment</span>
                    <span className="block text-gray-400 text-xs">Cat, Deere, Komatsu</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;