import React from 'react';
import { Shield, CreditCard, HardHat } from 'lucide-react';

const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Licensed & Insured */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="bg-brand-navy p-3 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h5 className="font-bold text-brand-navy text-sm uppercase tracking-wide">Licensed & Insured</h5>
              <p className="text-gray-600 text-xs">Full commercial liability coverage for fleet operations</p>
            </div>
          </div>

          {/* Net-30 Billing */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="bg-brand-navy p-3 rounded-lg">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h5 className="font-bold text-brand-navy text-sm uppercase tracking-wide">Net-30 Billing Available</h5>
              <p className="text-gray-600 text-xs">Flexible payment terms for commercial fleets</p>
            </div>
          </div>

          {/* OSHA Compliant */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="bg-brand-navy p-3 rounded-lg">
                <HardHat className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h5 className="font-bold text-brand-navy text-sm uppercase tracking-wide">OSHA/Safety Compliant</h5>
              <p className="text-gray-600 text-xs">Certified technicians following industry safety standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;