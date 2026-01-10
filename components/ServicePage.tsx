import React, { useState } from 'react';
import { Phone, CheckCircle2, MapPin, ChevronDown, ChevronUp, Star, PhoneCall, Calendar, ShieldCheck, Wrench, Settings, Clock, Truck } from 'lucide-react';
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

  // Brands list for Trust Signal
  const brands = ["Caterpillar", "John Deere", "Komatsu", "Volvo", "Case", "Hitachi", "Bobcat", "Parker", "Eaton", "Kubota"];

  // Enhanced Service Schema with Explicit Location Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": data.title,
    "name": data.title,
    "provider": {
        "@type": "LocalBusiness",
        "name": "Frontline Hydraulic Services",
        "telephone": "+1-859-462-4673",
        "url": "https://frontlinehydraulics.com",
        "priceRange": "$$"
    },
    "areaServed": [
        { "@type": "City", "name": "Bakersfield", "address": { "@type": "PostalAddress", "addressRegion": "CA" } },
        { "@type": "City", "name": "Wichita", "address": { "@type": "PostalAddress", "addressRegion": "KS" } },
        { "@type": "City", "name": "Lubbock", "address": { "@type": "PostalAddress", "addressRegion": "TX" } }
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${data.title} Services`,
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

  // SEO Optimized Title & Description
  const seoTitle = `${data.title} | Mobile Service in Bakersfield, Wichita & Lubbock`;
  const seoDesc = `24/7 ${data.title}. Mobile hydraulic service for ${data.industries.left[0]} and ${data.industries.right[0]}. We come to you in Bakersfield, Wichita, and Lubbock.`;

  // Breadcrumbs
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services/" },
    { name: data.title, item: `/services/${data.id.replace('service-', '')}/` }
  ];

  return (
    <div className="bg-white">
      <SeoHead 
        title={seoTitle}
        description={seoDesc}
        type="service"
        schema={serviceSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* SECTION 1: HERO */}
      <section className="relative sm:h-[450px] flex items-center justify-center overflow-hidden bg-brand-navy border-b-8 border-brand-orange pt-12 md:pt-0 pb-4 sm:pb-0">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.heroImage}
            alt={`${data.title} - Mobile Hydraulic Service Truck`} 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb Visual */}
          <div className="flex items-center justify-center gap-2 text-[8px] md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-brand-orange transition-colors">Home</button>
            <span className="text-brand-orange">/</span>
            <span className="text-gray-300">Services</span>
            <span className="text-brand-orange">/</span>
            <span className="text-white">{data.title}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 uppercase tracking-tight leading-tight">
            {data.title}
          </h1>
          <p className="text-normal sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium mb-10 leading-relaxed border-l-4 border-brand-orange pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            {data.subheading}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:8594624673" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white sm:text-lg font-black px-8 py-4 rounded shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 fill-current animate-pulse" />
              <span>CALL NOW!: 859 462-4673</span>
            </a>
            <button 
              onClick={onOpenContact}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy text-lg font-bold px-8 py-4 rounded transition-colors"
            >
              <span>Request Quote Online</span>
            </button>
          </div>

          {/* Local Trust Signal */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-1"><Truck className="w-4 h-4 text-brand-orange" /> Serving Bakersfield</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="flex items-center gap-1"><Truck className="w-4 h-4 text-brand-orange" /> Serving Wichita</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="flex items-center gap-1"><Truck className="w-4 h-4 text-brand-orange" /> Serving Lubbock</span>
          </div>
        </div>
      </section>

      {/* SCARCITY BANNER */}
      <div className="bg-green-100 border-b border-green-200 py-3 text-center">
         <p className="text-green-800 text-sm font-bold flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Technicians Currently Available for Immediate Dispatch
         </p>
      </div>

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
                  <p key={idx} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
                ))}
              </div>

              {/* INTEGRATED: Common Issues */}
              <div className="mb-10 bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-brand-orange" />
                  Common {data.title} Issues We Fix
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  {data.commonIssues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* INTEGRATED: Related Services */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-baseline gap-4">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider flex-shrink-0">Related Services:</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {data.relatedServices.map((service, idx) => (
                        <button 
                            key={idx}
                            onClick={() => onNavigate(service.id)}
                            className="text-brand-navy font-bold text-sm hover:text-brand-orange transition-colors border-b-2 border-transparent hover:border-brand-orange"
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
                <h3 className="text-xl font-bold text-brand-navy mb-6 uppercase tracking-wide">Why Choose Frontline</h3>
                <ul className="space-y-4 mb-8">
                  {data.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white p-6 rounded border border-gray-200 text-center shadow-sm">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">24/7 Mobile Dispatch</p>
                  <a href="tel:8594624673" className="block text-2xl font-black text-brand-navy hover:text-brand-orange transition-colors mb-4">
                    859 462-4673
                  </a>
                  <button 
                    onClick={onOpenContact}
                    className="w-full bg-brand-orange text-white font-bold py-3 rounded text-sm hover:bg-brand-darkOrange transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Clock className="w-4 h-4" /> Dispatch Technician
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Brands & Systems We Service</h3>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-60">
                {brands.map((brand, idx) => (
                    <span key={idx} className="text-xl font-bold text-brand-navy uppercase tracking-tight">{brand}</span>
                ))}
            </div>
         </div>
      </section>

      {/* SECTION 3: WHAT'S INCLUDED */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4">
              What's Included in {data.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive service process covers every step to ensure your equipment is back to full operational capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.whatsIncluded.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
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
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4">Our {data.title} Process</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {data.process.map((step, idx) => (
              <div key={idx} className="relative">
                {idx < data.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
                )}
                <div className="bg-white p-6 text-center rounded-lg shadow-sm border border-gray-100 h-full">
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
                Industries Utilizing {data.title}
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We have deep experience dealing with the specific hydraulic challenges found in these sectors across Bakersfield, Wichita, and Lubbock.
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
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4">Why Choose Frontline for {data.title}</h2>
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
                We provide **{data.title}** to businesses and job sites throughout **Bakersfield**, **Wichita**, **Lubbock**, and surrounding counties. Our fully mobile fleet ensures we can reach even the most remote job sites.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-gray-700 font-medium"><MapPin className="w-5 h-5 text-brand-orange" /> Serving Kern County, CA</div>
                <div className="flex items-center gap-2 text-gray-700 font-medium"><MapPin className="w-5 h-5 text-brand-orange" /> Serving Sedgwick County, KS</div>
                <div className="flex items-center gap-2 text-gray-700 font-medium"><MapPin className="w-5 h-5 text-brand-orange" /> Serving Lubbock County, TX</div>
              </div>
              <button onClick={() => onNavigate('home')} className="text-brand-navy font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors">
                View Full Service Area Map
              </button>
            </div>
            <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden border-4 border-gray-50 shadow-inner">
               <img 
                 src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80"
                 alt="Service Area Map - Mobile Hydraulic Repair"
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
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
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
                href="tel:8594624673" 
                className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white text-xl font-bold px-10 py-5 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
                <PhoneCall className="w-6 h-6 fill-current" />
                Call Now
            </a>
            <button 
                onClick={onOpenContact}
                className="hidden md:inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy text-xl font-bold px-10 py-5 rounded-md transition-colors"
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