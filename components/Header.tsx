import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isLocationsDropdownOpen, setIsLocationsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsLocationsDropdownOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md transition-all duration-300 h-20 md:${isScrolled ? 'h-16' : 'h-24'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" onClick={handleNavClick}>
              <img 
                src="/assets/FrontLine-Logo.png" 
                alt="Frontline Hydraulic Services Logo"
                className={`transition-all ${isScrolled ? 'h-12 w-auto' : 'h-16 w-auto'}`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            
            {/* Services Dropdown */}
            <div 
                className="relative group h-full flex items-center"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
                <Link 
                  to="/services"
                  className={`flex items-center gap-1 font-bold text-sm uppercase tracking-wide transition-colors ${location.pathname.startsWith('/services') ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
                  onClick={handleNavClick}
                >
                  Services <ChevronDown className="w-4 h-4" />
                </Link>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 w-80 bg-white shadow-xl border-t-4 border-brand-orange transform transition-all duration-200 origin-top ${isServicesDropdownOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}>
                    <div className="py-2">
                        <Link to="/services/emergency-repair" onClick={handleNavClick} className="block w-full text-left px-6 py-3 text-sm font-bold text-brand-navy hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100">Emergency Repair</Link>
                        <Link to="/services/mobile-fabrication" onClick={handleNavClick} className="block w-full text-left px-6 py-3 text-sm font-bold text-brand-navy hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100">Mobile Fabrication</Link>
                        <Link to="/services/diagnostics" onClick={handleNavClick} className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100">Diagnostics & Testing</Link>
                        <Link to="/services/cylinder-repair" onClick={handleNavClick} className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100">Pump & Cylinder Repair</Link>
                        <Link to="/services/fluid-services" onClick={handleNavClick} className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100">Oil & Fluid Services</Link>
                        <Link to="/services/fleet-maintenance" onClick={handleNavClick} className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100">Fleet Maintenance</Link>
                        <Link to="/services" onClick={handleNavClick} className="block w-full text-left px-6 py-3 text-sm font-bold text-brand-orange hover:bg-gray-50 transition-colors">View All Services</Link>
                    </div>
                </div>
            </div>

            {/* Locations Dropdown */}
            <div 
                className="relative group h-full flex items-center"
                onMouseEnter={() => setIsLocationsDropdownOpen(true)}
                onMouseLeave={() => setIsLocationsDropdownOpen(false)}
            >
                <Link 
                  to="/"
                  className={`flex items-center gap-1 font-bold text-sm uppercase tracking-wide transition-colors ${location.pathname.startsWith('/locations') ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('service-area');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    handleNavClick();
                  }}
                >
                  Locations <ChevronDown className="w-4 h-4" />
                </Link>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 w-60 bg-white shadow-xl border-t-4 border-brand-orange transform transition-all duration-200 origin-top ${isLocationsDropdownOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}>
                    <div className="py-2">
                        <Link 
                            to="/locations/bakersfield"
                            onClick={handleNavClick}
                            className="block w-full text-left px-6 py-3 text-sm font-bold text-brand-navy hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100"
                        >
                            Bakersfield, CA
                        </Link>
                        <Link 
                            to="/locations/wichita"
                            onClick={handleNavClick}
                            className="block w-full text-left px-6 py-3 text-sm font-bold text-brand-navy hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100"
                        >
                            Wichita, KS
                        </Link>
                        <Link 
                            to="/locations/lubbock"
                            onClick={handleNavClick}
                            className="block w-full text-left px-6 py-3 text-sm font-bold text-brand-navy hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100"
                        >
                            Lubbock, TX
                        </Link>
                        <Link 
                            to="/service-map"
                           onClick={handleNavClick}
                            className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-brand-orange transition-colors"
                        >
                            View Full Map
                        </Link>
                    </div>
                </div>
            </div>
            
            <Link 
              to="/blog"
              onClick={handleNavClick}
              className={`font-bold text-sm uppercase tracking-wide transition-colors ${location.pathname.startsWith('/blog') ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
            >
              Blog
            </Link>

            <Link 
              to="/about"
              onClick={handleNavClick}
              className={`font-bold text-sm uppercase tracking-wide transition-colors ${location.pathname === '/about' ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
            >
              About
            </Link>
            
            <Link 
              to="/contact"
              onClick={handleNavClick}
              className={`font-bold text-sm uppercase tracking-wide transition-colors ${location.pathname === '/contact' ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
            >
              Contact
            </Link>
            
            <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                <div className={`text-right hidden xl:block transition-opacity duration-300 ${isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                    <span className="block text-xs font-bold text-gray-500 uppercase">24/7 Dispatch</span>
                    <span className="block text-xs text-green-600 font-bold flex items-center justify-end gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Techs Available
                    </span>
                </div>
                <a 
                href="tel:8594624673"
                className={`bg-brand-orange hover:bg-brand-darkOrange text-white rounded-md font-black transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${isScrolled ? 'px-4 py-2 text-sm' : 'px-5 py-3 text-base'}`}
                >
                <Phone size={isScrolled ? 16 : 20} className="fill-current" />
                <span className="hidden xl:inline">859 462-4673</span>
                <span className="xl:hidden">Call Now</span>
                </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
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
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl absolute w-full left-0 top-full overflow-y-auto max-h-[80vh]">
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
                        <Link to="/services/emergency-repair" onClick={handleNavClick} className="w-full text-left block px-6 py-3 text-base font-bold text-brand-navy hover:bg-gray-100 border-b border-gray-100">Emergency Repair</Link>
                        <Link to="/services/mobile-fabrication" onClick={handleNavClick} className="w-full text-left block px-6 py-3 text-base font-bold text-brand-navy hover:bg-gray-100 border-b border-gray-100">Mobile Fabrication</Link>
                        <Link to="/services/diagnostics" onClick={handleNavClick} className="w-full text-left block px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 border-b border-gray-100">Diagnostics</Link>
                        <Link to="/services/cylinder-repair" onClick={handleNavClick} className="w-full text-left block px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 border-b border-gray-100">Cylinder Repair</Link>
                        <Link to="/services/fleet-maintenance" onClick={handleNavClick} className="w-full text-left block px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 border-b border-gray-100">Fleet Maintenance</Link>
                        <Link to="/services" onClick={handleNavClick} className="w-full text-left block px-6 py-3 text-base font-medium text-gray-500 hover:bg-gray-100">View All Services</Link>
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
                        <Link to="/locations/bakersfield" onClick={handleNavClick} className="w-full text-left block px-6 py-3 text-base font-bold text-brand-navy hover:bg-gray-100 hover:text-brand-orange border-b border-gray-100">Bakersfield, CA</Link>
                        <Link to="/locations/wichita" onClick={handleNavClick} className="w-full text-left block px-6 py-3 text-base font-bold text-brand-navy hover:bg-gray-100 hover:text-brand-orange border-b border-gray-100">Wichita, KS</Link>
                        <Link to="/locations/lubbock" onClick={handleNavClick} className="w-full text-left block px-6 py-3 text-base font-bold text-brand-navy hover:bg-gray-100 hover:text-brand-orange border-b border-gray-100">Lubbock, TX</Link>
                    </div>
                )}
            </div>

            <Link to="/blog" onClick={handleNavClick} className="w-full text-left block px-3 py-4 border-b border-gray-100 text-lg font-bold text-brand-navy hover:text-brand-orange">Blog</Link>
            <Link to="/about" onClick={handleNavClick} className="w-full text-left block px-3 py-4 border-b border-gray-100 text-lg font-bold text-brand-navy hover:text-brand-orange">About Us</Link>
            <Link to="/contact" onClick={handleNavClick} className="w-full text-left block px-3 py-4 border-b border-gray-100 text-lg font-bold text-brand-navy hover:text-brand-orange">Contact</Link>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-left block px-3 py-4 text-lg font-bold text-brand-orange"
            >
              Dispatch Technician Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;