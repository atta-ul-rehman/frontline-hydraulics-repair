import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ServiceMapPage from './components/ServiceMapPage';
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

// Home Page Component
const HomePage: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openModal = () => setIsContactModalOpen(true);
  const closeModal = () => setIsContactModalOpen(false);

  return (
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

      <ContactModal isOpen={isContactModalOpen} onClose={closeModal} />
      <FloatingCallButton />
    </>
  );
};

// Layout Component with Header and Footer
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openModal = () => setIsContactModalOpen(true);
  const closeModal = () => setIsContactModalOpen(false);

  return (
    <>
      <Header onOpenContact={openModal} />
      <main>{children}</main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeModal} />
      <FloatingCallButton />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="font-sans text-gray-900 bg-white selection:bg-brand-orange selection:text-white">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Layout><HomePage /></Layout>} />

            {/* About Page */}
            <Route path="/about" element={
              <Layout>
                <AboutPage
                  onOpenContact={() => {}}
                  onNavigateHome={() => {}}
                />
              </Layout>
            } />

            {/* Contact Page */}
            <Route path="/contact" element={
              <Layout>
                <ContactPage onNavigateHome={() => {}} />
              </Layout>
            } />

            {/* Service Map Page */}
            <Route path="/service-map" element={
              <Layout>
                <ServiceMapPage onOpenContact={() => {}} />
              </Layout>
            } />

            {/* Services Pages */}
            <Route path="/services" element={
              <Layout>
                <ServicesListingPage
                  onOpenContact={() => {}}
                />
              </Layout>
            } />

            <Route path="/services/emergency-repair" element={
              <Layout>
                <ServicePage
                  data={emergencyRepairData}
                  onNavigateHome={() => {}}
                />
              </Layout>
            } />

            <Route path="/services/mobile-fabrication" element={
              <Layout>
                <ServicePage
                  data={mobileFabricationData}
                  onNavigateHome={() => {}}
                />
              </Layout>
            } />

            <Route path="/services/diagnostics" element={
              <Layout>
                <ServicePage
                  data={diagnosticsData}
                  onNavigateHome={() => {}}
                />
              </Layout>
            } />

            <Route path="/services/cylinder-repair" element={
              <Layout>
                <ServicePage
                  data={cylinderRepairData}
                  onNavigateHome={() => {}}
                />
              </Layout>
            } />

            <Route path="/services/fluid-services" element={
              <Layout>
                <ServicePage
                  data={fluidServicesData}
                  onNavigateHome={() => {}}
                />
              </Layout>
            } />

            <Route path="/services/fleet-maintenance" element={
              <Layout>
                <ServicePage
                  data={maintenanceData}
                  onNavigateHome={() => {}}
                />
              </Layout>
            } />

            <Route path="/services/industrial-plant-service" element={
              <Layout>
                <ServicePage
                  data={industrialData}
                  onNavigateHome={() => {}}
                />
              </Layout>
            } />

            <Route path="/services/heavy-equipment-repair" element={
              <Layout>
                <ServicePage
                  data={equipmentRepairData}
                  onNavigateHome={() => {}}
                />
              </Layout>
            } />

            {/* Location Pages */}
            <Route path="/locations/bakersfield" element={
              <Layout>
                <LocationPage data={bakersfieldData} />
              </Layout>
            } />

            <Route path="/locations/wichita" element={
              <Layout>
                <LocationPage data={wichitaData} />
              </Layout>
            } />

            <Route path="/locations/lubbock" element={
              <Layout>
                <LocationPage data={lubbockData} />
              </Layout>
            } />

            {/* Blog Pages */}
            <Route path="/blog" element={
              <Layout>
                <BlogIndexPage />
              </Layout>
            } />

            <Route path="/blog/:slug" element={
              <Layout>
                <BlogPostPage />
              </Layout>
            } />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;