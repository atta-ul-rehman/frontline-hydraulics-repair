import React, { useState } from 'react';
import { Phone, CheckCircle2, MapPin, ChevronDown, ChevronUp, Star, PhoneCall, Calendar, ShieldCheck, Wrench } from 'lucide-react';
import { ServicePageData } from '../types';
import SeoHead from './SeoHead';

interface ServicePageProps {
  data: ServicePageData;
  onOpenContact: () => void;
  onNavigate: (page: string) => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ data, onOpenContact, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Enhanced Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": data.title,
    "name": data.title,
    "provider": {
        "@type": "LocalBusiness",
        "name": "Frontline Hydraulic Services",
        "telephone": "+1-661-555-0123",
        "url": "https://frontlinehydraulics.com"
    },
    "areaServed": [
        {
            "@type": "City",
            "name": "Bakersfield"
        },
        {
            "@type": "City",
            "name": "Wichita"
        },
        {
            "@type": "City",
            "name": "Lubbock"
        }
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": data.title,
        "itemListElement": data.features.map(feature => ({
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": feature
            }
        }))
    },
    "description": data.subheading
  };

  // Breadcrumbs
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services/" },
    { name: data.title, item: `/services/${data.id.replace('service-', '')}/` }
  ];

  return (
    <div className="bg-white">
      <SeoHead 
        title={data.title}
        description={data.subheading}
        type="service"
        schema={serviceSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* SECTION 1: HERO */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-brand-navy border-b-8 border-brand-orange">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.heroImage}
            alt={data.title} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb Visual */}
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-brand-orange transition-colors">Home</button>
            <span className="text-brand-orange">/</span>
            <span className="text-gray-300">Services</span>
            <span className="text-brand-orange">/</span>
            <span className="text-white">{data.title}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 uppercase tracking-tight leading-tight">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
            {data.subheading}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:555-123-4567" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white text-lg font-black px-8 py-4 rounded shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>(XXX) XXX-XXXX</span>
            </a>
            <button 
              onClick={onOpenContact}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy text-lg font-bold px-8 py-4 rounded transition-colors"
            >
              <span>Request Service</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: OVERVIEW & COMMON ISSUES */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Column: Description & Integrated Content */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-heading font-black text-brand-navy mb-6">
                {data.description.heading}
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                {data.description.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* INTEGRATED: Common Issues (Clean List Style) */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-brand-orange" />
                  Common Issues We Resolve
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  {data.commonIssues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* INTEGRATED: Related Services (Subtle Navigation) */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-baseline gap-4">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider flex-shrink-0">Related Services:</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {data.relatedServices.map((service, idx) => (
                        <button 
                            key={idx}
                            onClick={() => onNavigate(service.id)}
                            className="text-brand-navy font-bold text-sm hover:text-brand-orange transition-colors border-b border-gray-200 hover:border-brand-orange"
                        >
                            {service.title}
                        </button>
                    ))}
                    <button onClick={() => onNavigate('services')} className="text-brand-orange font-bold text-sm hover:underline">View All</button>
                </div>
              </div>
            </div>

            {/* Right Column: Features Box */}
            <div className="w-full lg:w-1/3">
              <div className="bg-brand-light border-l-4 border-brand-orange p-8 rounded-r-lg shadow-sm sticky top-24">
                <h3 className="text-xl font-bold text-brand-navy mb-6 uppercase tracking-wide">Why Choose Us</h3>
                <ul className="space-y-4 mb-8">
                  {data.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white p-6 rounded border border-gray-200 text-center shadow-sm">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">24/7 Dispatch</p>
                  <a href="tel:555-123-4567" className="block text-2xl font-black text-brand-navy hover:text-brand-orange transition-colors mb-4">
                    (XXX) XXX-XXXX
                  </a>
                  <button 
                    onClick={onOpenContact}
                    className="w-full bg-brand-orange text-white font-bold py-3 rounded text-sm hover:bg-brand-darkOrange transition-colors shadow-md"
                  >
                    Request Service Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT'S INCLUDED */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4">
              What's Included
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive {data.title} service covers every step to ensure your equipment is back to full operational capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.whatsIncluded.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-brand-light p-3 rounded-full group-hover:bg-brand-orange transition-colors">
                    <item.icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg text-brand-navy">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {data.process.map((step, idx) => (
              <div key={idx} className="relative">
                {idx < data.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-100 -z-10"></div>
                )}
                <div className="bg-white p-6 text-center">
                  <div className="w-16 h-16 bg-brand-navy text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-6 shadow-lg relative z-10 border-4 border-white">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-lg text-brand-navy mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: INDUSTRIES */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-heading font-black mb-6">
                Industries We Serve
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We have deep experience dealing with the specific hydraulic challenges found in these sectors.
              </p>
              <button 
                onClick={onOpenContact}
                className="bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-3 px-8 rounded shadow-lg transition-colors"
              >
                Get Industry Service
              </button>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                  <ul className="space-y-4">
                    {data.industries.left.map((ind, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                         <span className="font-medium text-gray-200">{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                  <ul className="space-y-4">
                    {data.industries.right.map((ind, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                         <span className="font-medium text-gray-200">{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4">Why Choose Frontline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.benefits.map((benefit, idx) => (
              <div key={idx} className="text-center p-6 border border-gray-100 rounded-lg hover:border-brand-orange transition-colors">
                <benefit.icon className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                <h3 className="font-bold text-xl text-brand-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: SERVICE AREA */}
      <section className="py-20 bg-white bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-black text-brand-navy mb-6">
                Mobile Service Throughout The Region
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                We provide {data.title} to businesses and job sites throughout [City Name], [County], and surrounding areas. Our fully mobile fleet ensures we can reach even the most remote job sites.
              </p>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-gray-700 font-medium"><MapPin className="w-5 h-5 text-brand-orange" /> Downtown Industrial District</div>
                <div className="flex items-center gap-2 text-gray-700 font-medium"><MapPin className="w-5 h-5 text-brand-orange" /> North County Construction Zones</div>
                <div className="flex items-center gap-2 text-gray-700 font-medium"><MapPin className="w-5 h-5 text-brand-orange" /> Eastern Agricultural Belt</div>
              </div>
              <button onClick={() => onNavigate('home')} className="text-brand-navy font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors">
                View Full Service Area Map
              </button>
            </div>
            <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden border-4 border-gray-50 shadow-inner">
               <img 
                 src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80"
                 alt="Service Area Map"
                 className="w-full h-full object-cover opacity-70 grayscale"
               />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-black text-brand-navy mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-brand-navy text-lg">{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="text-brand-orange" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: TRUST */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex items-center gap-2">
                   <Star className="w-6 h-6 text-brand-orange fill-brand-orange" />
                   <span className="font-bold text-xl text-brand-navy">5-Star Rated Service</span>
               </div>
               <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
               <div className="flex items-center gap-2">
                   <ShieldCheck className="w-6 h-6 text-brand-navy" />
                   <span className="font-bold text-xl text-brand-navy">Fully Licensed & Insured</span>
               </div>
            </div>
        </div>
      </section>

      {/* SECTION 10: BOTTOM CTA */}
      <section className="bg-brand-navy py-20 px-4 text-center border-t-8 border-brand-orange">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">
              Need {data.title}? We're Ready to Help
          </h2>
          <p className="text-gray-300 text-lg mb-10">
              Fast mobile service available 24/7 for emergencies.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
                href="tel:555-123-4567" 
                className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white text-xl font-bold px-10 py-5 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
                <PhoneCall className="w-6 h-6 fill-current" />
                Call Now
            </a>
            <button 
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy text-xl font-bold px-10 py-5 rounded-md transition-colors"
            >
                <Calendar className="w-6 h-6" />
                Request Service Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;