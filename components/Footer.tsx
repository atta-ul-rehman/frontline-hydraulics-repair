import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="col-span-1">
            <Link to="/" className="mb-6 cursor-pointer inline-block">
                <img 
                  src="/assets/FrontLine-Logo.webp" 
                  alt="Frontline Hydraulic Services Logo"
                  className="h-12 w-auto"
                />
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              24/7 Mobile Hydraulic Repair Specialists. We bring the repair shop to you.
            </p>
            <div className="mb-2">
                 <h5 className="font-bold text-white mb-1">859 462-4673</h5>
                 <p className="text-gray-400 text-xs">24/7 Emergency Service Available</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-brand-orange transition-colors">All Services</Link></li>
              <li><Link to="/services/emergency-repair" className="hover:text-brand-orange transition-colors">Emergency Repair</Link></li>
              <li><Link to="/services/mobile-fabrication" className="hover:text-brand-orange transition-colors">Mobile Fabrication</Link></li>
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-6">Our Locations</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/locations/bakersfield" className="hover:text-brand-orange transition-colors">Bakersfield, CA</Link></li>
              <li><Link to="/locations/wichita" className="hover:text-brand-orange transition-colors">Wichita, KS</Link></li>
              <li><Link to="/locations/lubbock" className="hover:text-brand-orange transition-colors">Lubbock, TX</Link></li>
              <li><Link to="/service-map" className="hover:text-brand-orange transition-colors">View Service Map</Link></li>
            </ul>
          </div>

          {/* Hours / Social */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-6">Service Hours</h4>
            <ul className="space-y-3 text-sm text-gray-400 mb-8">
              <li>24 Hours a Day</li>
              <li>7 Days a Week</li>
              <li>365 Days a Year</li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Frontline Hydraulic Services. All rights reserved.</p>
          <p>Licensed & Insured | Emergency Service Available</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;