import React from 'react';
import SeoHead from './SeoHead';

const TermsOfService: React.FC = () =>{ return ( 

<div className="bg-white">

    <SeoHead
      title="Terms of Service | Emergency Hydraulics"
      description="Read the Terms of Service and referral service disclosure for Emergency Hydraulics. Understand your rights and responsibilities as a user."
      canonicalUrl="https://emergencyhydraulics.com/terms"
      type="website"
    />

      {/* Hero */}
      <section className="bg-brand-navy py-12 border-b-8 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
                <button className="hover:text-brand-orange transition-colors">Home</button>
                <span className="text-brand-orange">/</span>
                <span className="text-white">Legal</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 uppercase tracking-tight">
                Terms of Service
            </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-heading font-black text-brand-navy uppercase tracking-wide mb-8 pb-4 border-b-2 border-brand-orange">
                    REFERRAL SERVICE DISCLOSURE
                </h2>
                
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                    <p className="mb-6 font-medium">
                        Emergency Hydraulics is a referral service connecting users with 
                        third-party hydraulic repair providers. We do <strong>NOT</strong> directly provide 
                        hydraulic repair services.
                    </p>

                    <p className="mb-8">
                        When you submit a request through our site, we may share your 
                        information with independent service providers in your area. 
                        These providers are <strong>NOT</strong> employees or agents of Emergency Hydraulics.
                    </p>

                    <div className="bg-white p-6 rounded border border-gray-200 mb-8">
                        <h3 className="text-lg font-bold text-brand-navy mb-4 uppercase tracking-wider">We do not:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Guarantee service quality or response times</li>
                            <li>Control pricing or service terms</li>
                            <li>Assume liability for provider actions or omissions</li>
                            <li>Verify licenses, insurance, or certifications of providers</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded border border-gray-200">
                        <h3 className="text-lg font-bold text-brand-navy mb-4 uppercase tracking-wider">Users agree to:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Verify provider credentials independently</li>
                            <li>Negotiate terms directly with providers</li>
                            <li>Hold Emergency Hydraulics harmless for service disputes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;