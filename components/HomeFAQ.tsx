import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const homeFaqs = [
  {
    question: "How fast can you get to a job site?",
    answer: "Our average response time is under 60 minutes for locations within our primary service zones (Bakersfield, Wichita, Lubbock). We dispatch the nearest available mobile service truck immediately upon receiving your call to minimize your downtime."
  },
  {
    question: "Do you make hydraulic hoses on site?",
    answer: "Yes. Every service truck in our network is a fully equipped mobile fabrication shop. We carry crimpers, saws, and over 1,000 fittings to build 2-wire, 4-wire, and 6-wire hydraulic hose assemblies right where your equipment is parked."
  },
  {
    question: "Is emergency service available on weekends?",
    answer: "Yes, we operate 24/7, 365 days a year. Hydraulic failures don't stick to business hours, and neither do we. Whether it's 2 AM on a Tuesday or Sunday afternoon during harvest, we have technicians ready to roll."
  }
];

const HomeFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-black text-brand-navy mb-4">Common Questions About Mobile Repair</h2>
            <p className="text-gray-600">Quick answers for urgent situations.</p>
        </div>
        
        <div className="space-y-4">
          {homeFaqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-brand-navy text-lg">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-brand-orange" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;