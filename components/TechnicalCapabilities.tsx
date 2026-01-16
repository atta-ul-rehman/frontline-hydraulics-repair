import React from 'react';
import { Wrench, Zap, Settings } from 'lucide-react';

const capabilities = [
  {
    icon: Wrench,
    title: "Heavy-Duty Crimping",
    description: "Crimping up to 2-inch 6-wire hoses with Parker, Gates, and Weatherhead specifications"
  },
  {
    icon: Settings,
    title: "Multi-Standard Fittings",
    description: "JIC, ORFS, BSPP, and metric fittings for all major equipment manufacturers"
  },
  {
    icon: Zap,
    title: "High-Pressure Systems",
    description: "Up to 10,000 PSI assemblies for mining, construction, and oilfield applications"
  },
  {
    icon: Wrench,
    title: "OEM Diagnostics",
    description: "Caterpillar, John Deere, Komatsu, and Volvo system troubleshooting and repair"
  },
  {
    icon: Settings,
    title: "Mobile Fabrication",
    description: "On-site hose assembly and custom manifold fabrication"
  },
  {
    icon: Zap,
    title: "Emergency Pump Repair",
    description: "Variable displacement pump rebuilds and hydraulic motor servicing"
  }
];

const TechnicalCapabilities: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4">
            Certified Hydraulic Repair & System Diagnostics
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Professional hydraulic technicians don't just patch emergency leaks—we diagnose and rebuild industrial systems. Our certified service spans mobile fabrication, OEM-specific diagnostics, high-pressure hose assembly, and pump repair for mining, construction, and oilfield applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-brand-orange p-3 rounded-lg mr-4">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">{capability.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 italic">
            All work performed by certified technicians with manufacturer training
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;