import React from 'react';
import { ArrowRight, Phone, Wrench, ShieldCheck, Truck } from 'lucide-react';
import { servicesList } from '../data/services';

interface ServicesListingPageProps {
  onNavigate: (page: string) => void;
  onOpenContact: () => void;
}

const ServicesListingPage: React.FC<ServicesListingPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-brand-navy border-b-8 border-brand-orange">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
            alt="Hydraulic services workshop" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/90 to-brand-navy/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 uppercase tracking-tight">
            Our Hydraulic Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Complete mobile solutions for construction, industrial, and agricultural equipment.
          </p>
          
           {/* Breadcrumbs */}
           <div className="mt-8 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400">
            <button onClick={() => onNavigate('home')} className="hover:text-brand-orange transition-colors">Home</button>
            <span className="text-brand-orange">/</span>
            <span className="text-white">All Services</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesList.map((service, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
                        <div className="p-8">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors duration-300">
                                <service.icon className="w-8 h-8 text-brand-navy group-hover:text-white transition-colors duration-300" />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-brand-navy mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 min-h-[80px]">{service.description}</p>
                            
                            <button 
                                onClick={() => onNavigate(service.id)}
                                className="inline-flex items-center text-brand-orange font-bold text-sm uppercase tracking-wider hover:text-brand-navy transition-colors"
                            >
                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                        <div className="h-2 bg-brand-navy w-0 group-hover:w-full transition-all duration-500"></div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 3: GENERAL INFO */}
      <section className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                  <div className="w-full lg:w-1/2">
                      <h2 className="text-3xl font-heading font-black text-brand-navy mb-6">Mobile Service Capabilities</h2>
                      <div className="space-y-6 text-gray-600 text-lg">
                          <p>
                              We don't just patch problems; we provide permanent solutions. Our service trucks are mobile workshops equipped with everything needed to do the job right the first time.
                          </p>
                          <ul className="space-y-4">
                              <li className="flex items-center gap-3">
                                  <Truck className="w-6 h-6 text-brand-orange" />
                                  <span className="font-bold text-brand-navy">On-Site Hose Fabrication (up to 2")</span>
                              </li>
                              <li className="flex items-center gap-3">
                                  <ShieldCheck className="w-6 h-6 text-brand-orange" />
                                  <span className="font-bold text-brand-navy">Huge Inventory of Metric & Imperial Fittings</span>
                              </li>
                              <li className="flex items-center gap-3">
                                  <Wrench className="w-6 h-6 text-brand-orange" />
                                  <span className="font-bold text-brand-navy">System Diagnostics & Pressure Testing</span>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="w-full lg:w-1/2 relative">
                      <div className="absolute inset-0 bg-brand-orange transform translate-x-4 translate-y-4 rounded-lg"></div>
                      <img 
                          src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                          alt="Technician truck interior" 
                          className="relative rounded-lg shadow-xl w-full h-auto object-cover"
                      />
                  </div>
              </div>
          </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="bg-brand-navy py-20 px-4 text-center border-t-8 border-brand-orange">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">
              Need A Service Not Listed?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
              We handle all aspects of hydraulic maintenance and repair. Give us a call to discuss your specific needs.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
                href="tel:8594624673" 
                className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white text-xl font-bold px-10 py-5 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
                <Phone className="w-6 h-6 fill-current" />
                Call Dispatch
            </a>
            <button 
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy text-xl font-bold px-10 py-5 rounded-md transition-colors"
            >
                Request Quote Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesListingPage;