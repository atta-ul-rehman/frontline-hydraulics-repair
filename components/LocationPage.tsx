import React, { useState } from 'react';
import { Phone, CheckCircle2, MapPin, ChevronDown, ChevronUp, Star, PhoneCall, Calendar, Clock, ShieldCheck, ArrowRight, Timer, Zap, Wrench, Droplet, Truck, Factory } from 'lucide-react';
import { LocationPageData } from '../types';
import SeoHead from './SeoHead';

interface LocationPageProps {
  data: LocationPageData;
  onOpenContact: () => void;
  onNavigate: (page: string) => void;
}

const LocationPage: React.FC<LocationPageProps> = ({ data, onOpenContact, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Generate City Specific Schema
  const citySchema = {
    "@type": "LocalBusiness",
    "name": `Frontline Hydraulic Services - ${data.city}`,
    "telephone": data.localDetails.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": data.city,
      "addressRegion": data.state,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": data.city
    }
  };

  // Breadcrumbs
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Locations", item: "/locations/" },
    { name: `${data.city}, ${data.state}`, item: `/locations/${data.id.replace('location-', '')}/` }
  ];

  // Standard services list for the grid (static as per template, but linking to dynamic pages)
  const standardServices = [
    { title: "Emergency Hose Repair", desc: "24/7 emergency hydraulic hose replacement", icon: Timer, link: "service-emergency" },
    { title: "Mobile Hose Fabrication", desc: "On-site custom hose assembly and crimping", icon: Factory, link: "service-fabrication" },
    { title: "System Diagnostics", desc: "Hydraulic pressure testing and leak detection", icon: Zap, link: "service-diagnostics" },
    { title: "Pump & Cylinder Repair", desc: "Component rebuilding and replacement", icon: Wrench, link: "service-cylinders" },
    { title: "Fluid Services", desc: "Hydraulic oil changes and system flushing", icon: Droplet, link: "services" },
    { title: "Fleet Maintenance", desc: `Scheduled maintenance programs for ${data.city} fleets`, icon: Truck, link: "service-fleet" }
  ];

  return (
    <div className="bg-white">
      <SeoHead 
        title={`Mobile Hydraulic Repair in ${data.city}, ${data.state}`}
        description={`24/7 on-site hydraulic hose repair and mobile service in ${data.city}, ${data.state}. Licensed, insured, and fast response time.`}
        type="local"
        schema={citySchema}
        breadcrumbs={breadcrumbs}
      />

      {/* SECTION 1: LOCAL HERO */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-brand-navy border-b-8 border-brand-orange">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.heroImage}
            alt={`Mobile Hydraulic Repair in ${data.city}, ${data.state}`} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-brand-orange transition-colors">Home</button>
            <span className="text-brand-orange">/</span>
            <span className="text-gray-300">Service Areas</span>
            <span className="text-brand-orange">/</span>
            <span className="text-white">{data.city}, {data.state}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 uppercase tracking-tight leading-tight drop-shadow-lg">
            Mobile Hydraulic Repair <br />
            <span className="text-brand-orange">in {data.city}, {data.state}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
            24/7 On-Site Hydraulic Hose Repair & Service Throughout {data.city} and {data.county}.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href={`tel:${data.localDetails.phone.replace(/\D/g,'')}`} 
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white text-lg font-black px-8 py-4 rounded shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call {data.city} Service</span>
            </a>
            <button 
              onClick={onOpenContact}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy text-lg font-bold px-8 py-4 rounded transition-colors"
            >
              <span>Request Service</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-bold text-gray-300 uppercase tracking-wider border-t border-gray-600 pt-6">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-orange" /> 24/7 Emergency Service</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-orange" /> Licensed & Insured</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-orange" /> Serving {data.city} Area</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: LOCAL INTRODUCTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Column: Content */}
            <div className="w-full lg:w-3/5">
              <h2 className="text-3xl font-heading font-black text-brand-navy mb-6">
                {data.intro.heading}
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                {data.intro.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Local Info Box */}
            <div className="w-full lg:w-2/5">
              <div className="bg-brand-light border border-gray-200 rounded-lg p-8 shadow-sm h-full">
                <h3 className="text-xl font-bold text-brand-navy mb-6 uppercase tracking-wide border-b border-gray-200 pb-4">
                  {data.city} Service Details
                </h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-orange p-2 rounded text-white mt-1">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="block font-bold text-brand-navy text-sm uppercase">Phone</span>
                        <a href={`tel:${data.localDetails.phone.replace(/\D/g,'')}`} className="block text-2xl font-black text-brand-navy hover:text-brand-orange transition-colors">
                            {data.localDetails.phone}
                        </a>
                        <span className="text-sm text-gray-500">Call or text for service</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="bg-brand-navy p-2 rounded text-white mt-1">
                        <Clock className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="block font-bold text-brand-navy text-sm uppercase">Hours</span>
                        <span className="block font-medium text-gray-900">{data.localDetails.hours}</span>
                        <span className="text-sm text-gray-500">Mon-Fri 8AM-5PM (Standard)</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="bg-brand-navy p-2 rounded text-white mt-1">
                        <Timer className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="block font-bold text-brand-navy text-sm uppercase">Response Time</span>
                        <span className="block font-medium text-gray-900">{data.localDetails.responseTime}</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="bg-brand-navy p-2 rounded text-white mt-1">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="block font-bold text-brand-navy text-sm uppercase">Coverage</span>
                        <span className="block font-medium text-gray-900">{data.localDetails.serviceAreaShort}</span>
                        <div className="mt-2 text-sm text-gray-600">
                            We serve: {data.localDetails.coverageAreas.join(', ')}
                        </div>
                    </div>
                  </li>
                </ul>

                <a 
                    href={`tel:${data.localDetails.phone.replace(/\D/g,'')}`}
                    className="mt-8 w-full block text-center bg-brand-navy text-white font-bold py-3 rounded hover:bg-brand-gray transition-colors"
                >
                    Call Now for {data.city} Service
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES GRID */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4">
                    Hydraulic Services in {data.city}
                </h2>
                <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {standardServices.map((service, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group border-t-4 border-transparent hover:border-brand-orange">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-brand-light p-3 rounded-full group-hover:bg-brand-orange transition-colors">
                                <service.icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-bold text-lg text-brand-navy">{service.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                        <button 
                            onClick={() => onNavigate(service.link)}
                            className="text-brand-orange font-bold text-sm uppercase flex items-center gap-1 hover:gap-2 transition-all"
                        >
                            Learn More <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 4: LOCAL INDUSTRIES */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
                    Industries We Serve in {data.city}
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    We specialize in the heavy equipment and industrial machinery that keeps {data.city}'s economy moving.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.localIndustries.map((ind, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-lg flex items-start gap-6 hover:bg-white/10 transition-colors">
                        <div className="bg-brand-orange/20 p-4 rounded-lg">
                            <ind.icon className="w-8 h-8 text-brand-orange" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">{ind.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{ind.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 5: MAP & AREA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-heading font-black text-brand-navy mb-4">Our {data.city} Service Area</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We provide mobile hydraulic repair throughout {data.city}, {data.county}, and surrounding areas including:
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                 {/* City List */}
                 <div className="lg:col-span-1 bg-brand-light p-8 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-brand-navy uppercase tracking-wide mb-6 border-b border-gray-300 pb-2">Communities Served</h3>
                    <ul className="space-y-3">
                        {data.serviceArea.cities.map((city, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                                <MapPin className="w-4 h-4 text-brand-orange" />
                                {city}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-gray-300">
                        <p className="text-sm text-gray-500 mb-4">Need service outside this area?</p>
                        <button onClick={onOpenContact} className="text-brand-orange font-bold text-sm hover:underline">Contact us regarding travel</button>
                    </div>
                 </div>

                 {/* Simulated Map */}
                 <div className="lg:col-span-2 relative h-[400px] bg-gray-200 rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                    <img 
                        src={data.serviceArea.mapImage} 
                        alt={`Map of ${data.city} service area`} 
                        className="w-full h-full object-cover opacity-60 grayscale"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-xl text-center border-l-4 border-brand-orange">
                            <MapPin className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                            <h3 className="font-bold text-brand-navy text-lg">{data.city} Dispatch</h3>
                            <p className="text-sm text-gray-600">Serving {data.county}</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE US */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4">Why {data.city} Businesses Choose Frontline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm border-b-4 border-brand-orange">
                <MapPin className="w-12 h-12 text-brand-navy mx-auto mb-4" />
                <h3 className="font-bold text-xl text-brand-navy mb-3">Local Knowledge</h3>
                <p className="text-gray-600">We understand {data.city}'s industries and the unique hydraulic challenges faced by local operations.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm border-b-4 border-brand-orange">
                <Timer className="w-12 h-12 text-brand-navy mx-auto mb-4" />
                <h3 className="font-bold text-xl text-brand-navy mb-3">Fast Local Response</h3>
                <p className="text-gray-600">Our {data.city}-area service means faster response times when you need emergency hydraulic repair.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm border-b-4 border-brand-orange">
                <Star className="w-12 h-12 text-brand-navy mx-auto mb-4" />
                <h3 className="font-bold text-xl text-brand-navy mb-3">Proven Track Record</h3>
                <p className="text-gray-600">Trusted by {data.city} businesses for reliable, professional mobile hydraulic service since 2010.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PROCESS (Using similar style to ServicePage) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4">How Our {data.city} Service Works</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
                 { title: "Call Dispatch", desc: `Contact us 24/7 for ${data.city} emergencies.`, icon: Phone },
                 { title: "We Dispatch", desc: `Our truck responds to your ${data.city} location.`, icon: Truck },
                 { title: "On-Site Repair", desc: "Expert diagnosis and repair at your site.", icon: Wrench },
                 { title: "Back to Work", desc: "System tested and documented.", icon: CheckCircle2 }
             ].map((step, idx) => (
                <div key={idx} className="bg-gray-50 p-6 text-center rounded-lg border border-gray-100">
                    <div className="w-16 h-16 bg-brand-navy text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-6 shadow-md">
                        <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg text-brand-navy mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: LOCAL FAQ */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-black text-brand-navy mb-10 text-center">Common Questions from {data.city} Customers</h2>
          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-brand-navy text-lg pr-4">{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="text-brand-orange flex-shrink-0" /> : <ChevronDown className="text-gray-400 flex-shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 mt-2 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: RELATED LOCATIONS */}
      {data.nearbyLocations.length > 0 && (
          <section className="py-16 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">We Also Serve These Areas</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {data.nearbyLocations.map((loc, idx) => (
                        <button 
                            key={idx}
                            onClick={() => onNavigate(loc.id)} // In a real app this would route to that ID
                            className="bg-gray-100 hover:bg-brand-orange hover:text-white text-brand-navy font-bold py-2 px-6 rounded-full transition-colors"
                        >
                            {loc.name}
                        </button>
                    ))}
                    <button 
                        onClick={() => onNavigate('home')} 
                        className="text-brand-orange font-bold py-2 px-6 hover:underline"
                    >
                        View All Locations
                    </button>
                </div>
            </div>
          </section>
      )}

      {/* SECTION 11: LOCAL BOTTOM CTA */}
      <section className="bg-brand-navy py-20 px-4 text-center border-t-8 border-brand-orange">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">
              Need Hydraulic Repair in {data.city}? <br /><span className="text-brand-orange">We're Here to Help.</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10">
              24/7 emergency service available throughout {data.city} and {data.county}.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
                href={`tel:${data.localDetails.phone.replace(/\D/g,'')}`}
                className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white text-xl font-bold px-10 py-5 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
                <PhoneCall className="w-6 h-6 fill-current" />
                Call {data.city} Service
            </a>
            <button 
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy text-xl font-bold px-10 py-5 rounded-md transition-colors"
            >
                <Calendar className="w-6 h-6" />
                Request Service Online
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400 font-bold uppercase tracking-wider">
            Licensed & Insured | 24/7 Emergency Service | All Equipment Types
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;