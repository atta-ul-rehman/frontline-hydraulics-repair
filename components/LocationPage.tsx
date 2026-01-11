import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, MapPin, ChevronDown, ChevronUp, Star, PhoneCall, Calendar, Clock, ShieldCheck, ArrowRight, Timer, Zap, Wrench, Droplet, Truck, Factory } from 'lucide-react';
import { LocationPageData } from '../types';
import SeoHead from './SeoHead';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

interface LocationPageProps {
  data: LocationPageData;
}

const LocationPage: React.FC<LocationPageProps> = ({ data }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Generate City Specific Schema
  const citySchema = {
    "@type": "LocalBusiness",
    "name": `Frontline Hydraulic Services - ${data.city}`,
    "telephone": data.localDetails.phone,
    "url": `https://frontlinehydraulics.com/locations/${data.id.replace('location-', '')}/`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": data.city,
      "addressRegion": data.state,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "addressCountry": "US",
        "addressLocality": data.city,
        "addressRegion": data.state
      },
      "geoRadius": "80000" // ~50 miles in meters
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  // Breadcrumbs
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Locations", item: "/locations/" },
    { name: `${data.city}, ${data.state}`, item: `/locations/${data.id.replace('location-', '')}/` }
  ];
  const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

  const customIcon = new L.Icon({
    iconUrl: iconUrl,
    iconRetinaUrl: iconRetinaUrl,
    shadowUrl: shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

  // Map service links to routes
  const getServiceRoute = (serviceLink: string) => {
    const routeMap: Record<string, string> = {
      'service-emergency': '/services/emergency-repair',
      'service-fabrication': '/services/mobile-fabrication',
      'service-diagnostics': '/services/diagnostics',
      'service-cylinders': '/services/cylinder-repair',
      'service-fluid': '/services/fluid-services',
      'service-fleet': '/services/fleet-maintenance'
    };
    return routeMap[serviceLink] || '/services';
  };

  // Standard services list with DYNAMIC CITY INJECTION for Local SEO Anchor Text
  const standardServices = [
    { title: "Emergency Hose Repair", desc: `24/7 on-site hose replacement in ${data.city}`, icon: Timer, link: "service-emergency" },
    { title: "Mobile Hose Fabrication", desc: `Custom assemblies crimped at your ${data.city} job site`, icon: Factory, link: "service-fabrication" },
    { title: "System Diagnostics", desc: `Hydraulic troubleshooting for ${data.county} industries`, icon: Zap, link: "service-diagnostics" },
    { title: "Pump & Cylinder Repair", desc: `Component rebuilds for ${data.city} equipment`, icon: Wrench, link: "service-cylinders" },
    { title: "Fluid Services", desc: "Hydraulic oil cleaning and flushing", icon: Droplet, link: "service-fluid" },
    { title: "Fleet Maintenance", desc: `Preventive programs for ${data.city} fleets`, icon: Truck, link: "service-fleet" }
  ];

  return (
    <div className="bg-white">
      <SeoHead 
        title={`Mobile Hydraulic Repair ${data.city}, ${data.state} | 24/7 Service`}
        description={`Fast mobile hydraulic hose repair in ${data.city} and ${data.county}. We provide 24/7 on-site emergency service, system diagnostics, and cylinder repair. Licensed & Insured.`}
        canonicalUrl={`https://emergencyhydraulics.com/locations/${data.city.toLowerCase()}`}
        type="local"
        schema={citySchema}
        breadcrumbs={breadcrumbs}
      />

      {/* SECTION 1: LOCAL HERO */}
      <section className="relative pt-12 pb-8 sm:pt-0 sm:pb-0 sm:h-[500px] flex items-center justify-center overflow-hidden bg-brand-navy border-b-8 border-brand-orange">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.heroImage}
            alt={`Mobile Hydraulic Repair Truck in ${data.city}, ${data.state}`} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-[8px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
            <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <span className="text-brand-orange">/</span>
            <span className="text-gray-300">Service Areas</span>
            <span className="text-brand-orange">/</span>
            <span className="text-white">{data.city}, {data.state}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 tracking-wide drop-shadow-lg">
            Mobile Hydraulic Repair <br />
            <span className="text-brand-orange">in {data.city}, {data.state}</span>
          </h1>
          <p className="text-s sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
            We bring the hose shop to you. 24/7 On-Site Hydraulic Service throughout <strong>{data.city}</strong> and <strong>{data.county}</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href={`tel:${data.localDetails.phone.replace(/\D/g,'')}`} 
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white text-lg font-black px-8 py-4 rounded shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call {data.city} Dispatch</span>
            </a>
            <Link 
              to="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy text-lg font-bold px-8 py-4 rounded transition-colors"
            >
              <span>Request Service</span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-bold text-gray-300 uppercase tracking-wider border-t border-gray-600 pt-6">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-orange" /> 24/7 Emergency Service</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-orange" /> Licensed & Insured</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-orange" /> Serving {data.county}</span>
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
                  <p key={idx} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
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
                        <span className="text-sm text-gray-500">Central Dispatch for {data.city}</span>
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
                    Call {data.city} Techs
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
                <p className="text-gray-600 max-w-2xl mx-auto">
                    From emergency hose replacement to preventative maintenance, we cover all hydraulic needs in {data.county}.
                </p>
                <div className="w-20 h-1 bg-brand-orange mx-auto mt-4"></div>
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
                        <Link 
                            to={getServiceRoute(service.link)}
                            className="text-brand-orange font-bold text-sm uppercase flex items-center gap-1 hover:gap-2 transition-all"
                        >
                            Learn More <ArrowRight className="w-4 h-4" />
                        </Link>
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
                    We specialize in the heavy equipment and industrial machinery that keeps the {data.city} economy moving.
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
                    We provide mobile hydraulic repair throughout {data.city}, {data.county}, and surrounding areas. Our trucks are staged to reach you quickly.
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
                        <Link to="/contact" className="text-brand-orange font-bold text-sm hover:underline">Contact us regarding travel</Link>
                    </div>
                 </div>

                 {/* Interactive Map */}

                 <div className="flex flex-col lg:col-span-2 gap-6 justify-between gap-4">
                 <div className="lg:col-span-2 relative h-[420px] rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                    <MapContainer 
                        center={data.coords} 
                        zoom={10} 
                        scrollWheelZoom={false} 
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={data.coords} icon={customIcon}>
                            <Popup>
                                <div className="text-center p-2">
                                    <h3 className="font-bold text-brand-navy text-sm mb-1">{data.city} Dispatch</h3>
                                    <p className="text-xs text-gray-600">Serving {data.county}</p>
                                </div>
                            </Popup>
                        </Marker>
                    </MapContainer>
                 </div>
                 <div className="mb-2">
                 <Link 
                    to="/service-map"
                    className="inline-flex items-center text-brand-navy font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors"
                >
                    <MapPin className="w-4 h-4 mr-2" />
                    View Full Service Area Map
                </Link>
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
      {/* <section className="py-20 bg-white">
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
      </section> */}

      {/* SECTION 10: LOCAL SEO CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-black text-brand-navy mb-8">Mobile Hydraulic Hose Repair Along Key Industrial Routes in {data.city}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {data.city === 'Bakersfield' && (
                <>Heavy equipment breakdowns are a daily reality along {data.city}'s major industrial corridors. Whether you're hauling loads on Highway 99, pushing through the Grapevine on I-5, or working construction sites along Highway 58, hydraulic failures can bring operations to a complete halt. Our mobile hydraulic hose repair service covers these critical routes, ensuring your excavators, loaders, and haul trucks get back to work without towing delays.</>
              )}
              {data.city === 'Wichita' && (
                <>From the aerospace manufacturing plants along I-135 to the agricultural operations on Highway 400, Wichita's industrial routes demand reliable heavy equipment. Hydraulic failures on combines, loaders, and industrial machinery are common due to the demanding workloads and variable conditions. Our mobile hydraulic hose repair trucks are strategically positioned to serve these key corridors, providing emergency on-site service when you need it most.</>
              )}
              {data.city === 'Lubbock' && (
                <>Lubbock's industrial landscape spans from the cotton fields along Highway 84 to the logistics hubs near Loop 289. Heavy equipment operating in these areas faces constant hydraulic stress from dust, heat, and heavy loads. Our mobile hydraulic hose repair service covers these critical routes, ensuring that breakdowns on combines, loaders, and industrial vehicles don't turn into costly downtime.</>
              )}
            </p>

            <h2 className="text-3xl font-heading font-black text-brand-navy mb-8 mt-12">Serving Industrial Areas & Hotspots in {data.city}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {data.city === 'Bakersfield' && (
                <>
                  <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">Oil Fields & Energy Sector</h3>
                    <p className="text-gray-700">Oildale, Belridge, and Elk Hills oil fields rely on hydraulic drilling rigs, workover units, and support equipment that operate 24/7 in harsh conditions.</p>
                  </div>
                  <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">Agricultural Heartland</h3>
                    <p className="text-gray-700">Lamont, Shafter, and Wasco areas feature almond shakers, pistachio harvesters, and tomato processing equipment with complex hydraulic systems.</p>
                  </div>
                  <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">Highway 58 Corridor</h3>
                    <p className="text-gray-700">Construction and mining operations along Highway 58 use excavators, bulldozers, and haul trucks that require reliable hydraulic maintenance.</p>
                  </div>
                  <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">Logistics & Distribution</h3>
                    <p className="text-gray-700">Rosedale and 7th Standard industrial areas serve regional distribution with forklifts, pallet jacks, and loading equipment.</p>
                  </div>
                </>
              )}
              {data.city === 'Wichita' && (
                <>
                  <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">Aerospace & Manufacturing</h3>
                    <p className="text-gray-700">Kellogg Avenue industrial corridor features precision hydraulic systems in aircraft manufacturing and industrial presses.</p>
                  </div>
                  <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">Agricultural Operations</h3>
                    <p className="text-gray-700">Valley Center and Derby areas serve wheat farming with combines, planters, and irrigation equipment requiring regular hydraulic service.</p>
                  </div>
                  <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">I-135 Industrial Zone</h3>
                    <p className="text-gray-700">Manufacturing and logistics facilities along I-135 use hydraulic forklifts, conveyor systems, and material handling equipment.</p>
                  </div>
                  <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">Sedgwick County Agriculture</h3>
                    <p className="text-gray-700">Regional farming operations rely on hydraulic tractors, sprayers, and harvesting equipment throughout the county.</p>
                  </div>
                </>
              )}
              {data.city === 'Lubbock' && (
                <>
                  <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">Cotton Farming Districts</h3>
                    <p className="text-gray-700">Plainview and Brownfield areas feature cotton strippers, module builders, and irrigation systems with heavy hydraulic demands.</p>
                  </div>
                  <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">Oil & Gas Operations</h3>
                    <p className="text-gray-700">Levelland and Brownfield oil fields use hydraulic drilling rigs, workover units, and support vehicles in challenging conditions.</p>
                  </div>
                  <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">Loop 289 Logistics Hub</h3>
                    <p className="text-gray-700">Distribution centers and warehouses use hydraulic forklifts, pallet jacks, and loading dock equipment for regional commerce.</p>
                  </div>
                  <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">Highway 84 Corridor</h3>
                    <p className="text-gray-700">Transportation and construction operations along Highway 84 rely on hydraulic dump trucks, excavators, and service vehicles.</p>
                  </div>
                </>
              )}
            </div>

            <h2 className="text-3xl font-heading font-black text-brand-navy mb-8 mt-12">Common Hydraulic Failures We Fix On-Site in These Areas</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our mobile hydraulic hose repair technicians encounter these failures daily across {data.city}'s industrial landscape:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li><strong>Burst hydraulic hoses</strong> on excavator booms and loader arms from pressure spikes and abrasion</li>
              <li><strong>Leaking fittings and O-rings</strong> caused by vibration, heat cycling, and contamination</li>
              <li><strong>Excavator hydraulic failures</strong> including swing motors, travel motors, and attachment circuits</li>
              <li><strong>Skid steer and loader issues</strong> with lift cylinders, tilt functions, and auxiliary hydraulics</li>
              <li><strong>Combine and harvester breakdowns</strong> during critical harvest seasons with header and unloading systems</li>
              <li><strong>Rig and drilling equipment</strong> hydraulic problems in oil field operations</li>
              <li><strong>Forklift and material handling</strong> failures in warehouses and distribution centers</li>
              <li><strong>Dump truck and haul vehicle</strong> issues with lift gates, steering, and brake systems</li>
            </ul>

            <h2 className="text-3xl font-heading font-black text-brand-navy mb-8 mt-12">Why Fast Emergency Hydraulic Service Matters in {data.city}'s Industrial Zones</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In {data.city}'s fast-paced industrial environment, hydraulic failures don't just cause inconvenience—they create significant financial impact. Every hour of downtime on a $500,000 excavator costs hundreds of dollars in lost productivity. Our 24/7 emergency mobile hydraulic repair service eliminates towing delays and shop wait times, getting your equipment back online faster.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We understand that {data.city} businesses can't afford extended downtime. That's why we maintain local staging areas and carry comprehensive inventories of hoses, fittings, and parts. When you call for mobile hydraulic hose repair in {data.city}, you're not just getting a technician—you're getting a complete mobile workshop that arrives ready to work.
            </p>

            <h2 className="text-3xl font-heading font-black text-brand-navy mb-8 mt-12">Emergency Mobile Hydraulic Repair Near You in {data.city}</h2>
            <div className="bg-brand-light p-8 rounded-lg border-l-4 border-brand-orange">
              <p className="text-gray-700 leading-relaxed mb-6">
                Don't let a hydraulic failure disrupt your {data.city} operations. Our mobile hydraulic hose repair service provides emergency on-site repairs throughout {data.city} and {data.county}, with response times typically under 60 minutes for most locations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Contact our {data.city} dispatch team at <strong>{data.localDetails.phone}</strong> for immediate assistance. We serve the industrial corridors, agricultural districts, and commercial zones that keep {data.city} moving. Emergency mobile hydraulic repair near me—when you need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${data.localDetails.phone.replace(/\D/g,'')}`}
                  className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-darkOrange text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {data.city} Dispatch Now
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-gray text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Request Service Quote
                </Link>
              </div>
            </div>
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
                        <span 
                            key={idx}
                            className="bg-gray-100 text-brand-navy font-bold py-2 px-6 rounded-full"
                        >
                            {loc.name}
                        </span>
                    ))}
                    <Link 
                        to="/service-map" 
                        className="text-brand-orange font-bold py-2 px-6 hover:underline"
                    >
                        View All Locations
                    </Link>
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
            <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy text-xl font-bold px-10 py-5 rounded-md transition-colors"
            >
                <Calendar className="w-6 h-6" />
                Request Service Online
            </Link>
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