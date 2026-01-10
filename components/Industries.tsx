import React from 'react';
import { HardHat, Factory, Tractor, Truck, Droplet } from 'lucide-react';
import { IndustryItem } from '../types';

const industries: IndustryItem[] = [
  { name: "Construction", icon: HardHat },
  { name: "Oil & Gas", icon: Droplet },
  { name: "Agriculture", icon: Tractor },
  { name: "Trucking/Fleet", icon: Truck },
  { name: "Manufacturing", icon: Factory },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-white border-b-8 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-navy mb-4">Industries We Serve</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">From excavators to oil field equipment, we service hydraulic systems across all industries.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {industries.map((industry, index) => (
                    <div key={index} className="flex flex-col items-center group">
                        <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-orange transition-colors duration-300">
                            <industry.icon className="w-10 h-10 text-brand-navy group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="font-bold text-sm text-brand-navy text-center">{industry.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Industries;