
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SeoHead from './SeoHead';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with Webpack/React
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
});

const locations = [
  {
    id: 'location-bakersfield',
    name: "Bakersfield, CA",
    coords: [35.3733, -119.0187] as [number, number],
    phone: "859 462-4673",
    description: "Serving Kern County oil fields and agriculture.",
    location: '/locations/bakersfield'
  },
  {
    id: 'location-wichita',
    name: "Wichita, KS",
    coords: [37.6872, -97.3301] as [number, number],
    phone: "859 462-4673",
    description: "Serving aviation and industrial manufacturing.",
    location: '/locations/wichita'
  },
  {
    id: 'location-lubbock',
    name: "Lubbock, TX",
    coords: [33.5779, -101.8552] as [number, number],
    phone: "859 462-4673",
    description: "Serving West Texas cotton and oil industries.",
    location: '/locations/lubbock'
  }
];

const ServiceMapPage: React.FC = ({  }) => {
  return (
    <div className="bg-white">
      <SeoHead 
        title="Service Map - Coverage Areas | Frontline Hydraulic Services"
        description="View our service map and coverage areas. 24/7 emergency mobile hydraulic repair available in Bakersfield CA, Wichita KS, and Lubbock TX. Contact dispatch now."
        canonicalUrl="https://emergencyhydraulics.com/service-map"
        type="website"
        keywords="service map, coverage area, hydraulic repair near me, Bakersfield hydraulic repair, Wichita hydraulic repair, Lubbock hydraulic repair, mobile repair"
      />

      {/* Hero Section */}
     <section className="relative pt-12 pb-8 sm:pt-0 sm:pb-0 sm:h-[500px] flex items-center justify-center overflow-hidden bg-brand-navy border-b-8 border-brand-orange">
           <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1641604570736-20db3310dbe8?auto=format&fit=crop&w=2000&q=80&fm=webp"
            alt={`Mobile Hydraulic Repair Truck in Bakersfield, CA`} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/40"></div>
        </div>
           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <div className="flex items-center justify-center gap-2 text-[8px] sm:text-xs md:text-sm font-bold tracking-widest text-gray-400 mb-6">
                <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
                <span className="text-brand-orange">/</span>
                <span className="text-white">Service Map</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 tracking-tight">
                Our Service Network
            </h1>
            <p className="text-[14px] sm:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
                We provide mobile hydraulic repair across three major industrial hubs. Find the dispatch center nearest you.
            </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[250px] sm:h-[600px] w-full relative z-0">
        <MapContainer 
            center={[35.5, -108.0]} 
            zoom={5} 
            scrollWheelZoom={false} 
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc) => (
                <Marker key={loc.id} position={loc.coords} icon={customIcon}>
                    <Popup>
                        <div className="text-center p-2">
                            <h3 className="font-bold text-brand-navy text-lg mb-1">{loc.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{loc.description}</p>
                            <Link 
                                to={loc.location}
                                className="text-brand-orange font-bold text-sm underline"
                            >
                                View Location Details
                            </Link>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
        
        {/* Overlay Legend for Desktop */}
        <div className="hidden md:block absolute top-4 right-4 z-[1000] bg-white/90 backdrop-blur rounded-lg shadow-xl p-4 border border-gray-200 max-w-xs">
            <h3 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-orange" /> Active Hubs
            </h3>
            <ul className="space-y-2 text-sm">
                {locations.map(loc => (
                    <li key={loc.id} className="flex justify-between items-center text-gray-700">
                        <span>{loc.name}</span>
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    </li>
                ))}
            </ul>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {locations.map((loc) => (
                    <div key={loc.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-brand-orange/10 p-3 rounded-full">
                                <MapPin className="w-6 h-6 text-brand-orange" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-brand-navy">{loc.name}</h3>
                                <span className="text-xs font-bold uppercase text-green-600 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Techs Available
                                </span>
                            </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6 min-h-[48px]">{loc.description}</p>
                        
                        <div className="space-y-3">
                            <a 
                                href={`tel:${loc.phone.replace(/\D/g,'')}`} 
                                className="flex items-center justify-center gap-2 w-full bg-brand-navy text-white font-bold py-3 rounded hover:bg-brand-gray transition-colors"
                            >
                                <Phone className="w-4 h-4" /> Call Dispatch
                            </a>
                            <Link 
                                to={loc.location}
                                className="flex items-center justify-center gap-2 w-full border border-gray-300 text-brand-navy font-bold py-3 rounded hover:bg-gray-50 transition-colors"
                            >
                                Location Page <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-16 text-center border-t border-gray-200">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-heading font-bold text-brand-navy mb-4">Outside Our Primary Area?</h2>
            <p className="text-gray-600 mb-8">
                We frequently travel to surrounding counties and neighboring states for fleet projects and major repairs. 
                Contact us to check availability for your location.
            </p>
            <Link 
                to="/contect"
                className="bg-brand-orange text-white font-bold py-3 px-8 rounded hover:bg-brand-darkOrange transition-colors"
            >
                Check Coverage Availability
            </Link>
         </div>
      </section>
    </div>
  );
};

export default ServiceMapPage;
