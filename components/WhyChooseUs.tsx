import React from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';

const benefits = [
  {
    title: "Mobile Fabrication Lab",
    description: "On-site mobile hydraulic hose fabrication using industrial crimpers and certified fittings."
  },
  {
    title: "60-Minute Emergency Response",
    description: "24/7 emergency mobile hydraulic hose repair with technicians dispatched within 60 minutes."
  },
  {
    title: "Local Expert Technicians",
    description: "Manufacturer-trained local technicians providing fast mobile hydraulic repair on-site."
  },
  {
    title: "OEM Equipment Expertise",
    description: "Emergency hydraulic repair for Caterpillar, John Deere, and all major OEM equipment."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80&fm=webp" 
                alt="Hydraulic repair technician working on heavy machinery" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                width="1770"
                height="1180"
              />
              <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply"></div>
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-brand-navy text-white p-6 rounded shadow-xl hidden sm:block max-w-xs border-l-4 border-brand-orange">
              <p className="text-4xl font-heading font-black mb-1 text-brand-orange">1hr</p>
              <p className="text-sm font-bold uppercase tracking-wide">Target Response Time</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-brand-orange w-5 h-5" />
                <h2 className="text-brand-gray font-bold tracking-wider uppercase text-sm">Locally Owned & Operated</h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-6">Why Industries Choose Local Hydraulic Experts</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              When industrial hydraulic systems fail, every minute costs thousands in downtime. You need certified local hydraulic technicians with emergency repair expertise and the right parts in-truck, right now. No call center middleman—just expert mobile hydraulic service.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1 mr-4 fill-brand-orange/10" />
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: benefit.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;