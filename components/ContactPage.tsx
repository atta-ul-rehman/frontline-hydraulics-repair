import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, AlertTriangle, CheckCircle2, HelpCircle, ChevronRight, Loader2, Send, ShieldCheck, Truck } from 'lucide-react';

interface ContactPageProps {
  onNavigateHome: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Emergency Repair',
    equipmentType: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative h-[250px] flex items-center justify-center overflow-hidden bg-brand-navy border-b-8 border-brand-orange">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Construction site communication" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         {/* Breadcrumbs */}
          <div className="mb-6 flex items-center justify-center gap-2 text-[8px] sm:text-sm font-bold uppercase tracking-widest text-gray-400">
            <button onClick={onNavigateHome} className="hover:text-brand-orange transition-colors">Home</button>
            <span className="text-brand-orange">/</span>
            <span className="text-white">Contact</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 uppercase tracking-tight">
            Contact Frontline
          </h1>
          <p className="sm:text-lg text-gray-300 max-w-2xl mx-auto font-medium">
            Get fast mobile hydraulic repair — call now or request service online.
          </p>
          
        </div>
      </section>

      {/* SECTION 2: EMERGENCY BANNER */}
      <section className="bg-brand-orange py-6 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left animate-pulse">
            <div className="bg-white p-2 rounded-full shadow-sm">
                <AlertTriangle className="w-8 h-8 text-brand-orange" />
            </div>
            <div>
                <span className="block text-white font-black text-xl uppercase tracking-wide">Hydraulic Emergency? Call Now for 24/7 Service</span>
            </div>
            <a 
                href="tel:8594624673" 
                className="bg-white text-brand-orange hover:text-brand-darkOrange px-6 py-2 rounded-md font-black text-xl shadow-lg transition-transform transform hover:scale-105"
            >
                859 462-4673
            </a>
        </div>
      </section>

      {/* SECTION 3: CONTACT METHODS & FORM */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
                
                {/* LEFT COLUMN: INFO */}
                <div className="w-full lg:w-2/5 space-y-8">
                    <div className="bg-brand-light border border-gray-200 p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-heading font-bold text-brand-navy mb-8 pb-4 border-b border-gray-200">Get In Touch</h2>
                        
                        <div className="space-y-8">
                            {/* Phone */}
                            <div className="flex items-start group">
                                <div className="bg-white p-3 rounded-md shadow-sm border border-gray-100 mr-4 group-hover:border-brand-orange transition-colors">
                                    <Phone className="w-6 h-6 text-brand-orange" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">Call or Text</h4>
                                    <a href="tel:8594624673" className="block text-2xl font-black text-brand-navy hover:text-brand-orange transition-colors mb-1">859 462-4673</a>
                                    <span className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-bold px-2 py-1 rounded">24/7 Emergency Service</span>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start group">
                                <div className="bg-white p-3 rounded-md shadow-sm border border-gray-100 mr-4 group-hover:border-brand-orange transition-colors">
                                    <Clock className="w-6 h-6 text-brand-orange" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">Service Hours</h4>
                                    <p className="text-gray-700 font-medium">Emergency Service: <span className="font-bold text-brand-navy">24/7</span></p>
                                    <p className="text-gray-500 text-sm">Office: Mon-Fri 8AM-5PM</p>
                                </div>
                            </div>

                            {/* Service Area */}
                            <div className="flex items-start group">
                                <div className="bg-white p-3 rounded-md shadow-sm border border-gray-100 mr-4 group-hover:border-brand-orange transition-colors">
                                    <MapPin className="w-6 h-6 text-brand-orange" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">Service Area</h4>
                                    <p className="text-gray-700 mb-2">Serving [City Name], [County], and surrounding areas.</p>
                                    <button className="text-brand-orange font-bold text-sm underline hover:text-brand-navy transition-colors">View Service Area Map</button>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start group">
                                <div className="bg-white p-3 rounded-md shadow-sm border border-gray-100 mr-4 group-hover:border-brand-orange transition-colors">
                                    <Mail className="w-6 h-6 text-brand-orange" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">Email</h4>
                                    <a href="mailto:service@frontlinehydraulics.com" className="text-brand-navy font-bold hover:text-brand-orange transition-colors">service@frontlinehydraulics.com</a>
                                    <p className="text-gray-400 text-xs mt-1">For non-emergency inquiries</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Service Note */}
                    <div className="bg-brand-navy p-6 rounded-lg shadow-lg text-white relative overflow-hidden">
                        <div className="absolute -right-6 -bottom-6 text-white/5">
                            <Truck size={120} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Truck className="text-brand-orange" />
                                We Are a Mobile Service
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                We come directly to your job site or facility. Our fully equipped service vehicles handle repairs on-location, eliminating the need for you to visit a shop.
                            </p>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
                                <CheckCircle2 size={16} /> Fully Equipped Mobile Units
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: FORM */}
                <div className="w-full lg:w-3/5">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                        <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
                            <h2 className="text-2xl font-heading font-bold text-brand-navy">Request Service or Quote</h2>
                            <p className="text-gray-500 text-sm mt-1">Fill out the form below and we'll get back to you immediately.</p>
                        </div>
                        
                        <div className="p-8">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-navy mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 mb-8 max-w-sm mx-auto">We have received your request. A member of our team will review it and contact you shortly.</p>
                                    <button 
                                        onClick={() => setSubmitted(false)}
                                        className="inline-flex items-center text-brand-orange font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                id="name" 
                                                required
                                                placeholder="Your Name"
                                                className="block w-full bg-white border border-gray-300 rounded-md py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                                            <input 
                                                type="tel" 
                                                name="phone" 
                                                id="phone" 
                                                required
                                                placeholder="(XXX) XXX-XXXX"
                                                className="block w-full bg-white border border-gray-300 rounded-md py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="email" 
                                                required
                                                placeholder="your@email.com"
                                                className="block w-full bg-white border border-gray-300 rounded-md py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="serviceType" className="block text-sm font-bold text-gray-700 mb-1">Service Type <span className="text-red-500">*</span></label>
                                            <select 
                                                id="serviceType" 
                                                name="serviceType" 
                                                required
                                                className="block w-full bg-white border border-gray-300 rounded-md py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                                                value={formData.serviceType}
                                                onChange={handleChange}
                                            >
                                                <option>Emergency Repair</option>
                                                <option>Scheduled Service</option>
                                                <option>Fleet Maintenance Quote</option>
                                                <option>General Inquiry</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="equipmentType" className="block text-sm font-bold text-gray-700 mb-1">Equipment Type</label>
                                            <input 
                                                type="text" 
                                                name="equipmentType" 
                                                id="equipmentType" 
                                                placeholder="E.g., Excavator, dump truck"
                                                className="block w-full bg-white border border-gray-300 rounded-md py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                                                value={formData.equipmentType}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="location" className="block text-sm font-bold text-gray-700 mb-1">Service Location</label>
                                            <input 
                                                type="text" 
                                                name="location" 
                                                id="location" 
                                                placeholder="City or Address"
                                                className="block w-full bg-white border border-gray-300 rounded-md py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                                                value={formData.location}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            rows={4} 
                                            required
                                            className="block w-full bg-white border border-gray-300 rounded-md py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                                            placeholder="Describe your hydraulic repair needs or question..."
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-md shadow-md text-lg font-bold text-white bg-brand-orange hover:bg-brand-darkOrange focus:outline-none focus:ring-4 focus:ring-orange-200 disabled:opacity-70 transition-all transform hover:-translate-y-0.5"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="-ml-1 mr-2 h-5 w-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>

                                    <div className="text-center space-y-2">
                                        <p className="text-sm text-gray-600 font-medium">
                                            For immediate emergency service, please call <a href="tel:8594624673" className="text-brand-orange font-bold hover:underline">859 462-4673</a>
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            We respect your privacy and will never share your information.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 4: SERVICE AREA MAP */}
      <section className="bg-brand-light py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Our Service Area</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Providing mobile hydraulic repair throughout [City Name], [County], and surrounding communities.
                </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 relative overflow-hidden h-[400px]">
                {/* Simulated Map */}
                <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1774&q=80" 
                    alt="Map of service area" 
                    className="w-full h-full object-cover rounded-lg opacity-60 grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-xl text-center border-l-4 border-brand-orange">
                        <MapPin className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                        <h3 className="font-bold text-brand-navy text-lg">Central Dispatch</h3>
                        <p className="text-sm text-gray-600">Serving a 50-mile radius</p>
                    </div>
                </div>
            </div>
            
            <p className="text-center text-sm font-medium text-gray-500 mt-6 flex items-center justify-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Need service outside this area? <a href="tel:8594624673" className="text-brand-orange hover:underline font-bold">Contact us</a> — we may be able to help.
            </p>
        </div>
      </section>

      {/* SECTION 5: WHAT HAPPENS NEXT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">What to Expect</h2>
                <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"></div>

                <div className="relative z-10 text-center bg-white p-6">
                    <div className="w-24 h-24 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white">
                        <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3">1. Quick Response</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We'll respond to your inquiry immediately for emergencies or within 1 hour for standard quotes.
                    </p>
                </div>

                <div className="relative z-10 text-center bg-white p-6">
                    <div className="w-24 h-24 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white">
                        <ShieldCheck className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3">2. Service Assessment</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We'll discuss your equipment, issue, and location to ensure we dispatch the right truck with the right parts.
                    </p>
                </div>

                <div className="relative z-10 text-center bg-white p-6">
                    <div className="w-24 h-24 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white">
                        <Truck className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3">3. On-Site Repair</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Our technician arrives with a fully-equipped service vehicle to get your equipment running again.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-brand-navy mb-10 text-center">Common Questions</h2>
            
            <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-brand-orange">
                    <h3 className="font-bold text-lg text-brand-navy mb-2 flex justify-between items-center">
                        Do you charge for travel to my location?
                    </h3>
                    <p className="text-gray-600">Yes, we have a standard trip charge based on mileage from our dispatch center. This will be clearly communicated before we dispatch a technician.</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-brand-orange">
                    <h3 className="font-bold text-lg text-brand-navy mb-2">
                        How quickly can you respond to emergencies?
                    </h3>
                    <p className="text-gray-600">Our average response time is under 60 minutes for calls within our primary service area. We dispatch the nearest available mobile unit immediately upon receiving emergency calls.</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-brand-orange">
                    <h3 className="font-bold text-lg text-brand-navy mb-2">
                        What payment methods do you accept?
                    </h3>
                    <p className="text-gray-600">We accept all major credit cards, company checks, and cash. Net-30 billing accounts are available for established fleet customers.</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-brand-orange">
                    <h3 className="font-bold text-lg text-brand-navy mb-2">
                        Do you service all brands of equipment?
                    </h3>
                    <p className="text-gray-600">Yes! We carry fittings and adapters for metric, British Standard, JIS, and SAE applications. We service CAT, John Deere, Komatsu, Volvo, and virtually all other heavy equipment brands.</p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 7: TRUST SIGNALS */}
      <section className="bg-brand-navy py-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="text-white/80 font-bold uppercase tracking-wider text-sm flex flex-col items-center gap-2">
                   <ShieldCheck className="text-brand-orange mb-1" />
                   Licensed & Insured
                </div>
                <div className="text-white/80 font-bold uppercase tracking-wider text-sm flex flex-col items-center gap-2">
                   <Clock className="text-brand-orange mb-1" />
                   24/7 Emergency Service
                </div>
                <div className="text-white/80 font-bold uppercase tracking-wider text-sm flex flex-col items-center gap-2">
                   <Truck className="text-brand-orange mb-1" />
                   Mobile Service
                </div>
                <div className="text-white/80 font-bold uppercase tracking-wider text-sm flex flex-col items-center gap-2">
                   <CheckCircle2 className="text-brand-orange mb-1" />
                   All Major Brands
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 8: BOTTOM CTA */}
      <section className="bg-gray-900 py-20 px-4 text-center border-t-8 border-brand-orange">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-heading font-black text-white mb-6">
              Ready to Get Started?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
                href="tel:8594624673" 
                className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white text-xl font-bold px-10 py-5 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
                <Phone className="w-6 h-6 fill-current" />
                Call Now for Service
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;