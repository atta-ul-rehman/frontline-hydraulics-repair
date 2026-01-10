import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Blew a main boom hose on our Cat 336 at 2 AM. Frontline had a truck on site in 45 minutes. Saved us a full day of downtime.",
    author: "Mike R.",
    role: "Site Superintendent, Bakersfield",
    stars: 5
  },
  {
    text: "We run a fleet of refuse trucks in Wichita. Frontline handles all our hydraulic issues. Their techs are knowledgeable and fast.",
    author: "Sarah J.",
    role: "Fleet Manager, Wichita",
    stars: 5
  },
  {
    text: "During harvest, every minute counts. They came out to the field and fixed our stripper right there in the dirt. Highly recommend.",
    author: "David L.",
    role: "Farm Owner, Lubbock",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-black text-brand-navy mb-4">Trusted By Industry Pros</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                    <Quote className="absolute top-6 right-6 text-brand-orange/20 w-10 h-10" />
                    <div className="flex text-brand-orange mb-4">
                        {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
                    <div>
                        <p className="font-bold text-brand-navy">{t.author}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;