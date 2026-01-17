import React from 'react';
import { Clock, Wrench, Truck, CheckCircle2, Phone, ShieldCheck, MapPin, Award, Users } from 'lucide-react';
import { HardHat, Factory, Tractor, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import SeoHead from './SeoHead';

interface AboutPageProps {
  onOpenContact: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  return (
    <div className="bg-white">
      <SeoHead
        title="About Frontline Hydraulic Services | Our Mobile Network"
        description="Discover Frontline Hydraulic Services: certified mobile hydraulic techs, 24/7 emergency repair, and fast dispatch in Bakersfield, Wichita, and Lubbock."
        canonicalUrl="https://emergencyhydraulics.com/about"
        type="website"
      />
      {/* SECTION 1: HERO */}
      <section className="relative pt-12 pb-4 sm:pt-0 sm:pb-0 sm:h-[350px] flex items-center justify-center overflow-hidden bg-brand-navy border-b-8 border-brand-orange">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp" 
            alt="Industrial warehouse background" 
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         {/* Breadcrumbs */}
          <div className="mb-8 flex items-center justify-center gap-2 text-[8px] md:text-sm font-bold uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <span className="text-brand-orange">/</span>
            <span className="text-white">About Us</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 tracking-wide">
           <span className="sr-only">Frontline: Expert </span>
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
                  <span className="font-bold text-brand-navy">Frontline Hydraulic Services</span> operates as a premier emergency dispatch network connecting commercial clients with certified, independent mobile hydraulic technicians and on-site fabrication specialists. We were founded on a simple truth: industrial downtime destroys profit.
                </p>
                <p>
                  When your equipment breaks, you don't care about corporate structure—you care about fast emergency response. We leverage a network of local, owner-operated mobile hydraulic repair trucks to ensure faster 60-minute response times than centralized dealerships and parts-store solutions.
                </p>
                <p>
                  Every certified technician in our network is vetted for manufacturer training, insurance, mobile fabrication equipment, and inventory depth. We coordinate the emergency dispatch, so you make one call and get one consolidated invoice, while a local hydraulic expert handles the on-site repair or hose assembly.
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
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80&fm=webp" 
                  alt="Technician repairing hydraulic equipment" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="1770"
                  height="1180"
                />
              </div>
              
              {/* Quick Facts Box */}
              <div className="bg-brand-navy p-8 rounded-lg shadow-xl relative mt-[-40px] ml-4 mr-4 lg:-ml-10 lg:mt-[-80px] border-l-4 border-brand-orange">
                <h3 className="text-white font-heading font-bold text-xl mb-4">The Network Standard</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 text-brand-orange mr-3" />
                    24/7 Emergency Dispatch
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 text-brand-orange mr-3" />
                    Certified Mobile Technicians
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Wrench className="w-5 h-5 text-brand-orange mr-3" />
                    OEM Equipment Specialist
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ShieldCheck className="w-5 h-5 text-brand-orange mr-3" />
                    Insurance & Warranty Backed
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
              Why Industries Trust Frontline
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built for emergency speed and mobile repair reliability. How we keep your operations moving without costly downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-brand-orange">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Fast Emergency Response</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time dispatch tracking for our mobile hydraulic repair network. Call for emergency service and we send the closest certified technician to you immediately—typically within 60 minutes.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-brand-orange">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Certified Fittings</h3>
              <p className="text-gray-600 leading-relaxed">
                Every mobile unit stocks 1,000+ certified hydraulic fittings (Parker, Gates, Weatherhead standards). We don't have to leave your job site to find hydraulic components—we build hose assemblies on-location.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-brand-orange">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Mobile Fabrication</h3>
              <p className="text-gray-600 leading-relaxed">
                Fully equipped mobile hydraulic repair trucks with crimpers, saws, welders, and compressors. Complete on-site high-pressure hose fabrication up to 2-inch 6-wire, 10,000+ PSI assemblies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMMITMENT TO QUALITY */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-1 bg-brand-orange mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy mb-8">Our Repair Guarantee</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 mb-8">
             <div className="flex flex-col items-center justify-center gap-4">
                <Award className="w-12 h-12 text-brand-orange" />
                <h3 className="text-2xl font-bold text-brand-navy">No-Fix, No-Pay Promise</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                    If our certified technician cannot repair your industrial hydraulic system on-site due to lack of manufacturer expertise or specialized equipment, you don't pay for labor. We guarantee qualified emergency hydraulic repair or we don't charge. Standing by our network quality.
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