import React from 'react';
import { Clock, Wrench, Truck, CheckCircle2, Phone, ShieldCheck, MapPin, Award } from 'lucide-react';
import { HardHat, Factory, Tractor, Droplet } from 'lucide-react';

interface AboutPageProps {
  onOpenContact: () => void;
  onNavigateHome: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact, onNavigateHome }) => {
  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden bg-brand-navy border-b-8 border-brand-orange">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Industrial warehouse background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 uppercase tracking-tight">
            About Frontline <span className="text-brand-orange">Hydraulic Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            We fix hoses so you can get back to work. Plain and simple.
          </p>
          
          {/* Breadcrumbs */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400">
            <button onClick={onNavigateHome} className="hover:text-brand-orange transition-colors">Home</button>
            <span className="text-brand-orange">/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPANY OVERVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Column: Text */}
            <div className="w-full lg:w-3/5">
              <div className="inline-block bg-brand-light border border-gray-200 rounded-full px-4 py-1 mb-6">
                <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-8">
                Built For Uptime
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  <span className="font-bold text-brand-navy">Frontline Hydraulic Services</span> was founded on a simple truth: downtime destroys profit. When your equipment breaks, you don't care about corporate mission statements. You care about getting a technician with the right part to your site, fast.
                </p>
                <p>
                  We are a mobile-first hydraulic repair company. We don't sit behind a counter waiting for you to bring us a broken hose. We come to you—whether that's a muddy construction site, a hot oil field, or a factory floor.
                </p>
                <p>
                  We stock our trucks like mobile warehouses so we can fix the problem in one trip. We answer our phones 24/7 because we know your industry doesn't stop at 5 PM.
                </p>
                <p className="flex items-center gap-2 font-bold text-brand-navy">
                  <MapPin className="text-brand-orange w-5 h-5" />
                  Proudly serving Bakersfield, Wichita, and Lubbock.
                </p>
              </div>
            </div>

            {/* Right Column: Image & Stats */}
            <div className="w-full lg:w-2/5 relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                  alt="Technician repairing hydraulic equipment" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Quick Facts Box */}
              <div className="bg-brand-navy p-8 rounded-lg shadow-xl relative mt-[-40px] ml-4 mr-4 lg:-ml-10 lg:mt-[-80px] border-l-4 border-brand-orange">
                <h3 className="text-white font-heading font-bold text-xl mb-4">The Frontline Standard</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 text-brand-orange mr-3" />
                    24/7 Real Emergency Service
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Truck className="w-5 h-5 text-brand-orange mr-3" />
                    We Come To You
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Wrench className="w-5 h-5 text-brand-orange mr-3" />
                    Cat, Deere, Komatsu Expert
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ShieldCheck className="w-5 h-5 text-brand-orange mr-3" />
                    Licensed & Insured
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US */}
      <section className="py-20 bg-brand-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-4">
              Why Fleets Choose Frontline
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are built for speed and reliability. Here is how we keep your operations moving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-brand-orange">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Fast Response Time</h3>
              <p className="text-gray-600 leading-relaxed">
                We track our trucks in real-time. When you call, we send the closest unit to you immediately.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-brand-orange">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Parts On Board</h3>
              <p className="text-gray-600 leading-relaxed">
                We stock thousands of fittings on every truck. We don't have to leave your site to find parts.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-brand-orange">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Fully Equipped</h3>
              <p className="text-gray-600 leading-relaxed">
                Our trucks have crimpers, saws, welders, and compressors. It's a full shop on wheels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-6">
                Comprehensive Hydraulic Services
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                From emergency hose replacement to scheduled fleet maintenance, we handle the dirty work so you can focus on the job.
              </p>
              <button 
                onClick={onNavigateHome} // Assuming services link is on home or we navigate there
                className="bg-brand-navy text-white font-bold py-3 px-8 rounded hover:bg-brand-gray transition-colors inline-flex items-center"
              >
                View All Services
              </button>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Emergency Hydraulic Hose Repair",
                  "Mobile Hose Fabrication",
                  "Hydraulic System Diagnostics",
                  "Pump & Cylinder Repair",
                  "Hydraulic Fluid Services",
                  "Fleet Maintenance Contracts",
                  "Industrial Hydraulic Services",
                  "Equipment Hydraulic Repair"
                ].map((service, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-gray-50 rounded border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-bold text-brand-navy text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INDUSTRIES SERVED */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">Industries We Serve</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              If it has hydraulics, we fix it.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Construction", icon: HardHat },
              { name: "Oil & Gas", icon: Droplet },
              { name: "Agriculture", icon: Tractor },
              { name: "Trucking", icon: Truck },
              { name: "Manufacturing", icon: Factory },
            ].map((industry, index) => (
              <div key={index} className="bg-white/10 border border-white/20 p-6 rounded-lg text-center hover:bg-white/20 transition-colors group">
                <industry.icon className="w-10 h-10 text-brand-orange mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-sm uppercase tracking-wide">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: COMMITMENT TO QUALITY */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-1 bg-brand-orange mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-8">Our Commitment</h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              We don't cut corners. We use high-quality hoses and fittings that meet or exceed OEM specifications. We don't leave until the system is pressure tested and holding.
            </p>
            <p>
              Your satisfaction is our guarantee. If it leaks after we fix it, we come back and make it right.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA BANNER */}
      <section className="bg-brand-gray py-20 px-4 text-center border-t-8 border-brand-orange">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-6">
              Need Hydraulic Repair? We're Available 24/7
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
                href="tel:555-123-4567" 
                className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white text-xl font-bold px-10 py-5 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
                <Phone className="w-6 h-6 fill-current" />
                Call Now: (XXX) XXX-XXXX
            </a>
            <button 
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy text-xl font-bold px-10 py-5 rounded-md transition-colors"
            >
                Request Service Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;