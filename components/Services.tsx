import React from 'react';
import { Wrench, Zap, Timer, ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Emergency Hose Replacement",
    icon: Timer,
    description: [
      "We come to your job site (No towing)",
      "Trucks stocked with 1000+ fittings",
      "Fabrication up to 2\" 6-wire on site",
      "Back up and running in hours, not days"
    ]
  },
  {
    title: "Hydraulic System Diagnostics",
    icon: Zap,
    description: [
      "Pinpoint low pressure & flow issues",
      "Identify contamination sources",
      "Troubleshoot pump failures",
      "Stop small leaks before they blow"
    ]
  },
  {
    title: "Preventive Maintenance",
    icon: Wrench,
    description: [
      "Scheduled hose audits during downtime",
      "Replace aging hoses before failure",
      "Fleet-wide hydraulic management",
      "Zero unplanned downtime programs"
    ]
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-black tracking-widest uppercase text-sm mb-3">Don't Let A Blown Hose Stop The Job</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4">Complete On-Site Hydraulic Solutions</h3>
          <p className="text-gray-600 text-normal md:text-lg leading-relaxed">
            We provide expert <strong>mobile hydraulic hose repair</strong> directly at your location. 
            Our trucks are mobile workshops equipped to handle 95% of hydraulic failures on the first trip. You focus on the project; we'll handle the pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-brand-navy hover:border-brand-orange group">
              <div className="p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-brand-navy group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h4 className="text-xl font-bold text-brand-navy mb-4">{service.title}</h4>
                
                <ul className="space-y-4 mb-8">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 font-medium text-sm">
                      <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-orange rounded-sm transform rotate-45 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Specific link for the first service to demonstrate the template */}
                {index === 0 ? (
                    <button 
                        onClick={() => {
                           // Dispatching a custom event to bubble up to App
                           const event = new CustomEvent('navigate', { detail: 'service-emergency' });
                           window.dispatchEvent(event);
                        }}
                        className="inline-flex items-center text-brand-navy font-bold text-sm uppercase tracking-wide group-hover:text-brand-orange transition-colors"
                    >
                        View Emergency Repair Services <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                ) : (
                    <a href="#contact" className="inline-flex items-center text-brand-navy font-bold text-sm uppercase tracking-wider group-hover:text-brand-orange transition-colors">
                        Request This Service <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Equipment We Service - SEO Block */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
            <h4 className="text-lg font-bold text-brand-navy mb-4 uppercase tracking-wide">Equipment We Service</h4>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
                We repair hydraulics on: <span className="font-bold text-brand-navy">Excavators</span>, <span className="font-bold text-brand-navy">Backhoes</span>, <span className="font-bold text-brand-navy">Skid Steers</span>, <span className="font-bold text-brand-navy">Forklifts</span>, <span className="font-bold text-brand-navy">Dump Trucks</span>, <span className="font-bold text-brand-navy">Ag Tractors</span>, <span className="font-bold text-brand-navy">Cotton Strippers</span>, <span className="font-bold text-brand-navy">Oil Rigs</span>, and <span className="font-bold text-brand-navy">Industrial Presses</span>.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Services;