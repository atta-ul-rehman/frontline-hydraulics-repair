import React from 'react';
import { FileText, Truck, CreditCard, ShieldCheck } from 'lucide-react';

const CommercialAccounts: React.FC = () => {
  return (
    <section className="py-20 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
                <div className="inline-block bg-brand-orange text-white text-xs font-bold uppercase px-3 py-1 rounded mb-6">
                    For Fleet Managers
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-black mb-6">
                    Streamline Your Hydraulic Maintenance
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Stop juggling credit cards and invoices for every blown hose. Open a commercial account with Frontline and get priority dispatch, simplified billing, and fleet-wide consistency.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                        <CreditCard className="w-6 h-6 text-brand-orange flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-white">Net-30 Terms</h4>
                            <p className="text-sm text-gray-400">Simplified monthly billing for approved accounts.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Truck className="w-6 h-6 text-brand-orange flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-white">Priority Dispatch</h4>
                            <p className="text-sm text-gray-400">Your fleet jumps to the front of the line.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand-orange flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-white">Asset Tracking</h4>
                            <p className="text-sm text-gray-400">Service history logs for every machine.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="w-6 h-6 text-brand-orange flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-white">Locked-In Rates</h4>
                            <p className="text-sm text-gray-400">No surprise pricing for contract partners.</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-10">
                    <a 
                        href="tel:8594624673"
                        className="inline-block bg-white text-brand-navy font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors"
                    >
                        Call to Setup Account: 859 462-4673
                    </a>
                </div>
            </div>

            <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange/20 rounded-lg transform rotate-2"></div>
                <img 
                    src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                    alt="Fleet manager reviewing paperwork" 
                    className="relative rounded-lg shadow-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>

        </div>
      </div>
    </section>
  );
};

export default CommercialAccounts;