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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[0.95] mb-6 drop-shadow-lg">
            WE FIX HOSES<br />
            <span className="text-brand-orange">WHERE YOU WORK</span>
            <span className="block text-2xl md:text-4xl mt-2 text-gray-300">BAKERSFIELD • WICHITA • LUBBOCK</span>
          </h1>
          
          {/* Subtext Optimized for: hydraulic hose repair near me, emergency hydraulic repair */}
          <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl font-medium border-l-4 border-brand-orange pl-6">
            <strong>Downtime costs you money.</strong> When a line blows, you need a truck on-site, fast. We bring the hose shop to you—24/7, no excuses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="tel:555-123-4567"
              className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white text-lg font-black px-10 py-5 rounded transition-all shadow-lg hover:shadow-orange-900/50 transform hover:-translate-y-1"
            >
              <Phone className="w-6 h-6 fill-current animate-pulse" />
              <span>CALL DISPATCH: (XXX) XXX-XXXX</span>
            </a>
            
            <button 
              onClick={onOpenContact}
              className="flex items-center justify-center gap-2 bg-brand-navy/80 backdrop-blur-sm border-2 border-gray-500 hover:border-white hover:bg-white hover:text-brand-navy text-white text-lg font-bold px-10 py-5 rounded transition-all"
            >
              <span>Get A Quote</span>
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