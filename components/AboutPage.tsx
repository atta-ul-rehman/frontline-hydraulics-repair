import React from 'react';
import { Clock, Wrench, Truck, CheckCircle2, Phone, ShieldCheck, MapPin, Award, Users } from 'lucide-react';
import { HardHat, Factory, Tractor, Droplet } from 'lucide-react';

interface AboutPageProps {
  onOpenContact: () => void;
  onNavigateHome: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact, onNavigateHome }) => {
  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative pt-12 pb-4 sm:pt-0 sm:pb-0 sm:h-[350px] flex items-center justify-center overflow-hidden bg-brand-navy border-b-8 border-brand-orange">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Industrial warehouse background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         {/* Breadcrumbs */}
          <div className="mb-8 flex items-center justify-center gap-2 text-[8px] md:text-sm font-bold uppercase tracking-widest text-gray-400">
            <button onClick={onNavigateHome} className="hover:text-brand-orange transition-colors">Home</button>
            <span className="text-brand-orange">/</span>
            <span className="text-white">About Us</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 tracking-wide">
            About Frontline <span className="text-brand-orange">Hydraulic Network</span>
          </h1>
          <p className="md:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            A network of certified technicians dedicated to keeping your equipment running.
          </p>
          
        </div>
      </section>

      {/* SECTION 2: COMPANY OVERVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Column: Text */}
            <div className="w-full lg:w-3/5">
              <div className="inline-block bg-brand-light border border-gray-200 rounded-full px-4 py-1 mb-6">
                <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-8">
                The Frontline Network
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  <span className="font-bold text-brand-navy">Frontline Hydraulic Services</span> operates as a premier dispatch network connecting commercial clients with certified, independent mobile hydraulic technicians. We were founded on a simple truth: downtime destroys profit.
                </p>
                <p>
                  When your equipment breaks, you don't care about corporate structure—you care about speed. We leverage a network of local, owner-operated service trucks to ensure faster response times than centralized dealerships.
                </p>
                <p>
                  Every technician in our network is vetted for certification, insurance, and inventory depth. We coordinate the dispatch, so you make one call and get one invoice, while a local expert handles the repair.
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
                <h3 className="text-white font-heading font-bold text-xl mb-4">The Network Standard</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 text-brand-orange mr-3" />
                    24/7 Central Dispatch
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 text-brand-orange mr-3" />
                    Vetted Local Techs
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Wrench className="w-5 h-5 text-brand-orange mr-3" />
                    Cat, Deere, Komatsu Expert
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ShieldCheck className="w-5 h-5 text-brand-orange mr-3" />
                    Fully Insured Partners
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
                We track our network trucks in real-time. When you call, we send the closest unit to you immediately.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-brand-orange">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Parts On Board</h3>
              <p className="text-gray-600 leading-relaxed">
                Our partners stock thousands of fittings on every truck. We don't have to leave your site to find parts.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-brand-orange">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Fully Equipped</h3>
              <p className="text-gray-600 leading-relaxed">
                Trucks have crimpers, saws, welders, and compressors. It's a full shop on wheels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMMITMENT TO QUALITY */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-1 bg-brand-orange mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-8">Our Service Guarantee</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 mb-8">
             <div className="flex flex-col items-center justify-center gap-4">
                <Award className="w-12 h-12 text-brand-orange" />
                <h3 className="text-2xl font-bold text-brand-navy">No-Fix, No-Pay Guarantee</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                    If our technician cannot fix your hydraulic issue on-site due to lack of expertise or standard tooling, you don't pay for the labor. We stand by the quality of our network.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA BANNER */}
      <section className="bg-brand-gray py-20 px-4 text-center border-t-8 border-brand-orange">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading leading-[1.25em] tracking-[0.1em] font-black text-white mb-6">
              Need Hydraulic Repair? We're Available 24/7
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
                href="tel:8594624673" 
                className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white sm:text-xl font-bold px-10 py-5 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
                <Phone className="w-6 h-6 fill-current" />
                Call Now: 859 462-4673
            </a>
            <button 
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy sm:text-xl font-bold px-10 py-5 rounded-md transition-colors"
            >
                Dispatch Technician Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;