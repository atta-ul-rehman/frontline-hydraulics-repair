import React, { useState, Suspense, lazy } from 'react';
import * as ReactHelmetAsync from 'react-helmet-async';
const HelmetProvider = ReactHelmetAsync.HelmetProvider || (ReactHelmetAsync as any).default?.HelmetProvider;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import ScrollToTop component
import ScrollToTop from './components/ScrollToTop';

// Eagerly load critical components
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import TechnicalCapabilities from './components/TechnicalCapabilities';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import ServiceArea from './components/ServiceArea';
import CtaBanner from './components/CtaBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import FloatingCallButton from './components/FloatingCallButton';

// Lazy load page components
// 2. Page Imports (Changed from lazy to standard)
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
import ServiceMapPage from './components/ServiceMapPage';
import SeoHead from './components/SeoHead';
import TermsOfService from './components/TermsOfService';
import ExcavatorPartsDiagram from './components/ExcavatorPartsDiagram';
import HoseCalculator from './components/HoseCalculator';

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
  const openModal = () => setIsContactModalOpen(true);
  const closeModal = () => setIsContactModalOpen(false);

  // Home Page Component
  const HomePageWithModal: React.FC = () => (
    <>
      <SeoHead
        title="Mobile Hydraulic Hose Repair Bakersfield, Wichita & Lubbock | 24/7 Emergency Service"
        description="Emergency hydraulic hose repair in Bakersfield. Fast mobile service, certified techs, and 24/7 dispatch. Call now for immediate response."
        canonicalUrl="https://emergencyhydraulics.com/"
        type="website"
      />
      <Hero onOpenContact={openModal} />
      <TrustBar />
      <RecentJobs />
      <Services />
      <TechnicalCapabilities />
      <WhyChooseUs />
      <CommercialAccounts />
      <Industries />
      <Testimonials />
      <ServiceArea />
      <CtaBanner />
      <ContactSection />
      <FloatingCallButton />
    </>
  );

  // Layout Component with Header and Footer
  const LayoutWithModal: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <>
      <Header onOpenContact={openModal} />
      <main id="main-content">{children}</main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeModal} />
      <FloatingCallButton />
    </>
  );

  return (
        <div className="font-sans text-gray-900 bg-white selection:bg-brand-orange selection:text-white">
        <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-orange"></div></div>}>
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<LayoutWithModal><HomePageWithModal /></LayoutWithModal>} />
              {/* About Page */}
              <Route path="/about" element={<LayoutWithModal><AboutPage /></LayoutWithModal>} />
              {/* Contact Page */}
              <Route path="/contact" element={<LayoutWithModal><ContactPage /></LayoutWithModal>} />
              {/* Service Map Page */}
              <Route path="/service-map" element={<LayoutWithModal><ServiceMapPage /></LayoutWithModal>} />
              {/* Services Pages */}
              <Route path="/services" element={<LayoutWithModal><ServicesListingPage onOpenContact={openModal} /></LayoutWithModal>} />
              <Route path="/services/emergency-repair" element={<LayoutWithModal><ServicePage data={emergencyRepairData} onOpenContact={openModal} /></LayoutWithModal>} />
              <Route path="/services/mobile-fabrication" element={<LayoutWithModal><ServicePage data={mobileFabricationData} onOpenContact={openModal} /></LayoutWithModal>} />
              <Route path="/services/diagnostics" element={<LayoutWithModal><ServicePage data={diagnosticsData} onOpenContact={openModal} /></LayoutWithModal>} />
              <Route path="/services/cylinder-repair" element={<LayoutWithModal><ServicePage data={cylinderRepairData} onOpenContact={openModal} /></LayoutWithModal>} />
              <Route path="/services/fluid-services" element={<LayoutWithModal><ServicePage data={fluidServicesData} onOpenContact={openModal} /></LayoutWithModal>} />
              <Route path="/services/fleet-maintenance" element={<LayoutWithModal><ServicePage data={maintenanceData} onOpenContact={openModal} /></LayoutWithModal>} />
              <Route path="/services/industrial-plant-service" element={<LayoutWithModal><ServicePage data={industrialData} onOpenContact={openModal} /></LayoutWithModal>} />
              <Route path="/services/heavy-equipment-repair" element={<LayoutWithModal><ServicePage data={equipmentRepairData} onOpenContact={openModal} /></LayoutWithModal>} />
              {/* Location Pages */}
              <Route path="/locations/bakersfield" element={<LayoutWithModal><LocationPage data={bakersfieldData} /></LayoutWithModal>} />
              <Route path="/locations/wichita" element={<LayoutWithModal><LocationPage data={wichitaData} /></LayoutWithModal>} />
              <Route path="/locations/lubbock" element={<LayoutWithModal><LocationPage data={lubbockData} /></LayoutWithModal>} />
              {/* Blog Pages */}
              <Route path="/blog" element={<LayoutWithModal><BlogIndexPage /></LayoutWithModal>} />
              <Route path="/blog/:slug" element={<LayoutWithModal><BlogPostPage /></LayoutWithModal>} />
              {/* Terms of Service Page */}
              <Route path="/terms" element={<LayoutWithModal><TermsOfService /></LayoutWithModal>} />
              {/* Tools Pages */}
              <Route path="/tools/excavator-parts-diagram" element={<LayoutWithModal><ExcavatorPartsDiagram /></LayoutWithModal>} />
              <Route path="/tools/hydraulic-hose-dash-size-calculator" element={<LayoutWithModal><HoseCalculator /></LayoutWithModal>} />
            </Routes>
          </Suspense>
        </div>
      
  );
}

export default App;