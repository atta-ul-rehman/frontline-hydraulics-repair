import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import ServiceArea from './components/ServiceArea';
import CtaBanner from './components/CtaBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import FloatingCallButton from './components/FloatingCallButton';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ServicePage from './components/ServicePage';
import ServicesListingPage from './components/ServicesListingPage';
import LocationPage from './components/LocationPage';
import BlogIndexPage from './components/BlogIndexPage';
import BlogPostPage from './components/BlogPostPage';
import RecentJobs from './components/RecentJobs';
import CommercialAccounts from './components/CommercialAccounts';
import Testimonials from './components/Testimonials';
import SeoHead from './components/SeoHead';
import { 
  emergencyRepairData, 
  mobileFabricationData, 
  diagnosticsData, 
  cylinderRepairData, 
  fluidServicesData, 
  maintenanceData, 
  industrialData, 
  equipmentRepairData 
} from './data/services';
import { 
  bakersfieldData, 
  wichitaData, 
  lubbockData 
} from './data/locations';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Effect to listen for custom navigation events from deep components
  useEffect(() => {
    const handleCustomNav = (e: Event) => {
        const customEvent = e as CustomEvent;
        if (customEvent.detail) {
            handleNavigate(customEvent.detail);
        }
    };

    window.addEventListener('navigate', handleCustomNav);
    return () => window.removeEventListener('navigate', handleCustomNav);
  }, []);

  const openModal = () => {
    if (currentPage === 'contact') {
        window.scrollTo(0, 0); 
        return;
    }

    const contactSection = document.getElementById('contact');
    if (contactSection && currentPage === 'home') {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else if (currentPage !== 'home') {
      setCurrentPage('contact');
      window.scrollTo(0, 0);
    } else {
      setIsContactModalOpen(true);
    }
  };
  
  const closeModal = () => setIsContactModalOpen(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <HelmetProvider>
      <div className="font-sans text-gray-900 bg-white selection:bg-brand-orange selection:text-white">
        <Header 
          onOpenContact={openModal} 
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />
        
        <main>
          {currentPage === 'home' && (
            <>
              <SeoHead 
                title="Mobile Hydraulic Repair Bakersfield | 24/7 Emergency Service | Frontline Hydraulics"
                description="Fast mobile hydraulic hose repair in Bakersfield & Kern County. Emergency on-site service available 24/7. Call 859 462-4673 for immediate response."
                type="website"
              />
              <Hero onOpenContact={openModal} />
              <RecentJobs />
              <Services />
              <WhyChooseUs />
              <CommercialAccounts />
              <Industries />
              <Testimonials />
              <ServiceArea />
              <CtaBanner />
              <ContactSection />
            </>
          )}

          {currentPage === 'about' && (
            <>
              <SeoHead 
                title="About Us - Hydraulic Experts"
                description="Learn about Frontline Hydraulic Services. Fully licensed and insured mobile hydraulic repair technicians serving the region since 2010."
              />
              <AboutPage 
                onOpenContact={openModal} 
                onNavigateHome={() => handleNavigate('home')}
              />
            </>
          )}

          {currentPage === 'contact' && (
            <>
              <SeoHead 
                title="Contact Us - 24/7 Dispatch"
                description="Contact Frontline Hydraulic Services for immediate emergency repair. Call our 24/7 dispatch hotline or request a quote online."
              />
              <ContactPage 
                onNavigateHome={() => handleNavigate('home')}
              />
            </>
          )}

          {currentPage === 'services' && (
            <>
              <SeoHead 
                title="All Hydraulic Services"
                description="Browse our full range of mobile hydraulic services including emergency hose repair, cylinder repair, and fleet maintenance."
              />
              <ServicesListingPage 
                onNavigate={handleNavigate}
                onOpenContact={openModal}
              />
            </>
          )}

           {/* BLOG PAGES */}
           {currentPage === 'blog' && (
            <BlogIndexPage 
              onNavigate={handleNavigate}
              onOpenContact={openModal}
            />
          )}

          {currentPage.startsWith('blog/') && (
            <BlogPostPage 
              postSlug={currentPage.replace('blog/', '')}
              onNavigate={handleNavigate}
              onOpenContact={openModal}
            />
          )}

          {/* SERVICE PAGES */}
          {currentPage === 'service-emergency' && (
            <ServicePage data={emergencyRepairData} onOpenContact={openModal} onNavigate={handleNavigate} />
          )}

          {currentPage === 'service-fabrication' && (
            <ServicePage data={mobileFabricationData} onOpenContact={openModal} onNavigate={handleNavigate} />
          )}

          {currentPage === 'service-diagnostics' && (
            <ServicePage data={diagnosticsData} onOpenContact={openModal} onNavigate={handleNavigate} />
          )}

          {currentPage === 'service-cylinders' && (
            <ServicePage data={cylinderRepairData} onOpenContact={openModal} onNavigate={handleNavigate} />
          )}

          {currentPage === 'service-fluid' && (
            <ServicePage data={fluidServicesData} onOpenContact={openModal} onNavigate={handleNavigate} />
          )}

          {currentPage === 'service-fleet' && (
            <ServicePage data={maintenanceData} onOpenContact={openModal} onNavigate={handleNavigate} />
          )}

          {currentPage === 'service-industrial' && (
            <ServicePage data={industrialData} onOpenContact={openModal} onNavigate={handleNavigate} />
          )}

          {currentPage === 'service-equipment' && (
            <ServicePage data={equipmentRepairData} onOpenContact={openModal} onNavigate={handleNavigate} />
          )}

          {/* LOCATION PAGES */}
          {currentPage === 'location-bakersfield' && (
            <LocationPage data={bakersfieldData} onOpenContact={openModal} onNavigate={handleNavigate} />
          )}
          
          {currentPage === 'location-wichita' && (
            <LocationPage data={wichitaData} onOpenContact={openModal} onNavigate={handleNavigate} />
          )}

          {currentPage === 'location-lubbock' && (
            <LocationPage data={lubbockData} onOpenContact={openModal} onNavigate={handleNavigate} />
          )}

        </main>

        <Footer onNavigate={(page, section) => {
          handleNavigate(page);
          if (section) {
            setTimeout(() => {
              const el = document.getElementById(section);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }} />
        
        <FloatingCallButton />
        
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={closeModal} 
        />
      </div>
    </HelmetProvider>
  );
}

export default App;