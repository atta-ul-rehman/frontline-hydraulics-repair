import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, section?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, page: string, section?: string) => {
    e.preventDefault();
    onNavigate(page);
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
        window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={(e) => handleLinkClick(e, 'home')}>
                <div className="bg-brand-orange p-1.5 rounded-sm">
                    <span className="font-heading font-extrabold text-lg text-white">FHS</span>
                </div>
                <div>
                    <span className="block font-heading font-bold text-lg leading-none">FRONTLINE</span>
                    <span className="block text-xs text-brand-orange font-bold tracking-widest uppercase">Hydraulic Services</span>
                </div>
            </div>
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
              <li><button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-brand-orange transition-colors">All Services</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'service-emergency')} className="hover:text-brand-orange transition-colors">Emergency Repair</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'service-fabrication')} className="hover:text-brand-orange transition-colors">Mobile Fabrication</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-brand-orange transition-colors">About Us</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-brand-orange transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-6">Our Locations</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={(e) => handleLinkClick(e, 'location-bakersfield')} className="hover:text-brand-orange transition-colors">Bakersfield, CA</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'location-wichita')} className="hover:text-brand-orange transition-colors">Wichita, KS</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'location-lubbock')} className="hover:text-brand-orange transition-colors">Lubbock, TX</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'home', 'service-area')} className="hover:text-brand-orange transition-colors">View Service Map</button></li>
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