import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenContact, currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isLocationsDropdownOpen, setIsLocationsDropdownOpen] = useState(false);

  const handleNavClick = (page: string, sectionId?: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsLocationsDropdownOpen(false);
    
    // If we are staying on the same page or moving to a section
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="flex items-center gap-3">
              <div className="bg-brand-navy p-2 rounded shadow-sm">
                <span className="font-heading font-extrabold text-xl text-brand-orange tracking-tighter">FHS</span>
              </div>
              <div>
                <span className="block font-heading font-black text-xl leading-none text-brand-navy tracking-tight">FRONTLINE</span>
                <span className="block text-[10px] text-brand-orange font-bold tracking-[0.2em] uppercase mt-1">Mobile Hydraulics</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            
            {/* Services Dropdown */}
            <div 
                className="relative group"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
                <button 
                  className={`flex items-center gap-1 font-bold text-sm uppercase tracking-wide transition-colors py-8 ${currentPage.startsWith('service') ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
                  onClick={() => handleNavClick('services')}
                >
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 w-80 bg-white shadow-xl border-t-4 border-brand-orange transform transition-all duration-200 origin-top ${isServicesDropdownOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}>
                    <div className="py-2">
                        <button onClick={() => handleNavClick('service-emergency')} className="block w-full text-left px-6 py-3 text-sm font-bold text-brand-navy hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100">Emergency Repair</button>
                        <button onClick={() => handleNavClick('service-fabrication')} className="block w-full text-left px-6 py-3 text-sm font-bold text-brand-navy hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100">Mobile Fabrication</button>
                        <button onClick={() => handleNavClick('service-diagnostics')} className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100">Diagnostics & Testing</button>
                        <button onClick={() => handleNavClick('service-cylinders')} className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100">Pump & Cylinder Repair</button>
                        <button onClick={() => handleNavClick('service-fluid')} className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100">Oil & Fluid Services</button>
                        <button onClick={() => handleNavClick('service-fleet')} className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100">Fleet Maintenance</button>
                        <button onClick={() => handleNavClick('services')} className="block w-full text-left px-6 py-3 text-sm font-bold text-brand-orange hover:bg-gray-50 transition-colors">View All Services</button>
                    </div>
                </div>
            </div>

            {/* Locations Dropdown */}
            <div 
                className="relative group"
                onMouseEnter={() => setIsLocationsDropdownOpen(true)}
                onMouseLeave={() => setIsLocationsDropdownOpen(false)}
            >
                <button 
                  className={`flex items-center gap-1 font-bold text-sm uppercase tracking-wide transition-colors py-8 ${currentPage.startsWith('location') ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
                  onClick={() => handleNavClick('home', 'service-area')}
                >
                  Locations <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 w-60 bg-white shadow-xl border-t-4 border-brand-orange transform transition-all duration-200 origin-top ${isLocationsDropdownOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}>
                    <div className="py-2">
                        <button 
                            onClick={() => handleNavClick('location-bakersfield')}
                            className="block w-full text-left px-6 py-3 text-sm font-bold text-brand-navy hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100"
                        >
                            Bakersfield, CA
                        </button>
                        <button 
                            onClick={() => handleNavClick('location-wichita')}
                            className="block w-full text-left px-6 py-3 text-sm font-bold text-brand-navy hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100"
                        >
                            Wichita, KS
                        </button>
                        <button 
                            onClick={() => handleNavClick('location-lubbock')}
                            className="block w-full text-left px-6 py-3 text-sm font-bold text-brand-navy hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100"
                        >
                            Lubbock, TX
                        </button>
                        <button 
                            onClick={() => handleNavClick('home', 'service-area')}
                            className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-brand-orange transition-colors"
                        >
                            View Full Map
                        </button>
                    </div>
                </div>
            </div>
            
            <button 
              onClick={() => handleNavClick('about')} 
              className={`font-bold text-sm uppercase tracking-wide transition-colors ${currentPage === 'about' ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
            >
              About
            </button>
            
            {/* Added Blog Link */}
            <button 
              onClick={() => handleNavClick('blog')} 
              className={`font-bold text-sm uppercase tracking-wide transition-colors ${currentPage.startsWith('blog') ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
            >
              Blog
            </button>

            <button 
              onClick={() => handleNavClick('contact')} 
              className={`font-bold text-sm uppercase tracking-wide transition-colors ${currentPage === 'contact' ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
            >
              Contact
            </button>
            
            <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                <div className="text-right hidden xl:block">
                    <span className="block text-xs font-bold text-gray-500 uppercase">24/7 Dispatch</span>
                    <span className="block text-xs text-green-600 font-bold flex items-center justify-end gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Techs Available
                    </span>
                </div>
                <a 
                href="tel:555-123-4567"
                className="bg-brand-orange hover:bg-brand-darkOrange text-white px-5 py-3 rounded-md font-black transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                <Phone size={20} className="fill-current" />
                <span className="text-lg hidden xl:inline">(XXX) XXX-XXXX</span>
                <span className="text-lg xl:hidden">Call Now</span>
                </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <a 
                href="tel:555-123-4567"
                className="bg-brand-orange text-white p-2 rounded-md shadow-md"
            >
                <Phone size={24} className="fill-current" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-navy hover:text-brand-orange focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl absolute w-full left-0 top-24 overflow-y-auto max-h-[80vh]">
          <div className="px-4 pt-2 pb-6 space-y-2">
            
            {/* Mobile Services Accordion */}
            <div className="border-b border-gray-100 pb-2">
                <button 
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className="w-full flex justify-between items-center px-3 py-4 text-lg font-bold text-brand-navy hover:text-brand-orange"
                >
                    Services 
                    <ChevronDown className={`w-5 h-5 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesDropdownOpen && (
                    <div className="bg-gray-50 rounded-md mb-2 overflow-hidden">
                        <button onClick={() => handleNavClick('service-emergency')} className="w-full text-left block px-6 py-3 text-base font-bold text-brand-navy hover:bg-gray-100 border-b border-gray-100">Emergency Repair</button>
                        <button onClick={() => handleNavClick('service-fabrication')} className="w-full text-left block px-6 py-3 text-base font-bold text-brand-navy hover:bg-gray-100 border-b border-gray-100">Mobile Fabrication</button>
                        <button onClick={() => handleNavClick('service-diagnostics')} className="w-full text-left block px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 border-b border-gray-100">Diagnostics</button>
                        <button onClick={() => handleNavClick('service-cylinders')} className="w-full text-left block px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 border-b border-gray-100">Cylinder Repair</button>
                        <button onClick={() => handleNavClick('service-fleet')} className="w-full text-left block px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 border-b border-gray-100">Fleet Maintenance</button>
                        <button onClick={() => handleNavClick('services')} className="w-full text-left block px-6 py-3 text-base font-medium text-gray-500 hover:bg-gray-100">View All Services</button>
                    </div>
                )}
            </div>

            {/* Mobile Locations Accordion */}
            <div className="border-b border-gray-100 pb-2">
                <button 
                    onClick={() => setIsLocationsDropdownOpen(!isLocationsDropdownOpen)}
                    className="w-full flex justify-between items-center px-3 py-4 text-lg font-bold text-brand-navy hover:text-brand-orange"
                >
                    Locations
                    <ChevronDown className={`w-5 h-5 transition-transform ${isLocationsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLocationsDropdownOpen && (
                    <div className="bg-gray-50 rounded-md mb-2 overflow-hidden">
                        <button onClick={() => handleNavClick('location-bakersfield')} className="w-full text-left block px-6 py-3 text-base font-bold text-brand-navy hover:bg-gray-100 hover:text-brand-orange border-b border-gray-100">Bakersfield, CA</button>
                        <button onClick={() => handleNavClick('location-wichita')} className="w-full text-left block px-6 py-3 text-base font-bold text-brand-navy hover:bg-gray-100 hover:text-brand-orange border-b border-gray-100">Wichita, KS</button>
                        <button onClick={() => handleNavClick('location-lubbock')} className="w-full text-left block px-6 py-3 text-base font-bold text-brand-navy hover:bg-gray-100 hover:text-brand-orange border-b border-gray-100">Lubbock, TX</button>
                    </div>
                )}
            </div>

            <button onClick={() => handleNavClick('about')} className="w-full text-left block px-3 py-4 border-b border-gray-100 text-lg font-bold text-brand-navy hover:text-brand-orange">About Us</button>
            
            {/* Added Blog Link Mobile */}
            <button onClick={() => handleNavClick('blog')} className="w-full text-left block px-3 py-4 border-b border-gray-100 text-lg font-bold text-brand-navy hover:text-brand-orange">Blog</button>
            
            <button onClick={() => handleNavClick('contact')} className="w-full text-left block px-3 py-4 border-b border-gray-100 text-lg font-bold text-brand-navy hover:text-brand-orange">Contact</button>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-left block px-3 py-4 text-lg font-bold text-brand-orange"
            >
              Request Service Online
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;