import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Search, X, Phone, MapPin, ChevronDown, ChevronUp, 
  AlertTriangle, Wrench, Info, Download, Mail, Filter,
  Zap, Settings, Cog, ArrowRight, CheckCircle2, Clock, AlertCircle
} from 'lucide-react';
import { 
  excavatorParts, 
  partCategories, 
  searchParts, 
  getPartsByCategory,
  getPartById,
  ExcavatorPart 
} from '../data/excavatorParts';

// Analytics helper (would integrate with GA4 in production)
const trackEvent = (eventName: string, params: Record<string, string>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
  console.log('Track:', eventName, params);
};

const ExcavatorPartsDiagram: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<ExcavatorPart | null>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchResults, setSearchResults] = useState<ExcavatorPart[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Filter parts by category
  const filteredParts = getPartsByCategory(activeCategory);

  // Handle search
  useEffect(() => {
    if (searchQuery.length >= 2) {
      const results = searchParts(searchQuery);
      setSearchResults(results);
      setShowSearchResults(true);
      trackEvent('parts_search', { query: searchQuery, results_count: results.length.toString() });
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchQuery]);

  // Handle part selection
  const handlePartClick = useCallback((partId: string) => {
    const part = getPartById(partId);
    if (part) {
      setSelectedPart(part);
      setShowSearchResults(false);
      trackEvent('part_clicked', { part_id: partId, part_name: part.part_name });
    }
  }, []);

  // Close modal on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPart(null);
        setShowSearchResults(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelectedPart(null);
      }
    };
    if (selectedPart) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedPart]);

  // Get urgency color
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'upper_structure': return '#3B82F6'; // blue
      case 'arm_assembly': return '#F97316'; // orange
      case 'undercarriage': return '#22C55E'; // green
      case 'hydraulic_system': return '#EF4444'; // red
      default: return '#6B7280';
    }
  };

  // Handle CTA click
  const handleCtaClick = (type: string) => {
    trackEvent('cta_click', { 
      cta_type: type, 
      part_context: selectedPart?.part_name || 'none' 
    });
  };

  // Handle PDF download (placeholder)
  const handlePdfDownload = () => {
    trackEvent('pdf_download', { page: 'excavator_parts_diagram' });
    alert('PDF download feature coming soon! Call 859-462-4673 for a printed diagram.');
  };

  // FAQ data - Commercial/Local intent focused
  const faqs = [
    {
      question: "How much does excavator hydraulic repair cost in Kansas and Texas?",
      answer: "Excavator hydraulic repair costs vary based on the component and severity. Minor hose replacements start around $150-400. Cylinder seal kits run $200-800 for parts plus labor. Major pump or motor rebuilds can range $1,500-5,000+. Frontline offers free on-site diagnosis in Wichita, Lubbock, and Bakersfield areas—call for an exact quote before we dispatch."
    },
    {
      question: "What is your emergency response time for excavator breakdown?",
      answer: "Our mobile technicians typically arrive within 60-90 minutes for emergency calls in Wichita, Lubbock, and Bakersfield metro areas. We stock common hoses, seals, and fittings on our service trucks. For rural locations, we aim for same-day service. Call 859-462-4673 for immediate dispatch."
    },
    {
      question: "Do you repair all excavator brands?",
      answer: "Yes, we service all major brands including CAT, John Deere, Komatsu, Hitachi, Kubota, Bobcat, Case, Kobelco, and more. Our technicians carry universal fittings and can fabricate custom hoses on-site to match OEM specs."
    },
    {
      question: "What causes excavator hydraulic cylinder drift?",
      answer: "Cylinder drift is usually caused by worn piston seals allowing internal bypass, a faulty holding valve, or contaminated hydraulic fluid. Signs include the boom slowly lowering when parked or the bucket curling on its own. Our mobile service can diagnose and repair cylinders on-site in most cases."
    },
    {
      question: "How often should excavator hydraulic fluid be changed?",
      answer: "Most manufacturers recommend changing hydraulic fluid every 2,000-4,000 operating hours or annually, whichever comes first. Filters should be replaced every 500 hours. Contaminated fluid causes 80% of hydraulic failures—we offer fluid analysis and flushing services to extend component life."
    },
    {
      question: "Can you repair hydraulic hoses in the field?",
      answer: "Absolutely. Our mobile units carry crimp machines, bulk hose, and a full range of fittings. We can fabricate and install replacement hoses on-site, often in under an hour. This eliminates towing costs and gets your excavator back to work the same day."
    }
  ];

  // Schema markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Interactive Excavator Parts Diagram",
    "description": "Free interactive excavator parts identification tool showing 35+ components with names, functions, and common issues. Perfect for operators, mechanics, and fleet managers.",
    "url": "https://emergencyhydraulics.com/tools/excavator-parts-diagram",
    "applicationCategory": "Reference",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "Frontline Hydraulic Services",
      "telephone": "+1-859-462-4673"
    },
    "featureList": [
      "Interactive clickable diagram",
      "35+ excavator components identified",
      "Common issues for each part",
      "Mobile-responsive design",
      "Search functionality",
      "Category filtering"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Interactive Excavator Parts Diagram | Identify All Components | Free Tool</title>
        <meta name="description" content="Free interactive excavator parts diagram showing 35+ components with names, functions, and common issues. Click any part for details. Perfect for operators and mechanics." />
        <meta name="keywords" content="excavator parts diagram, excavator parts, parts of excavator, excavator components, excavator arm parts, excavator bucket parts, hydraulic excavator parts, mini excavator parts diagram" />
        <link rel="canonical" href="https://emergencyhydraulics.com/tools/excavator-parts-diagram" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Interactive Excavator Parts Diagram | Free Identification Tool" />
        <meta property="og:description" content="Click any part on our interactive excavator diagram to learn its name, function, and common issues. 35+ components covered." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emergencyhydraulics.com/tools/excavator-parts-diagram" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interactive Excavator Parts Diagram" />
        <meta name="twitter:description" content="Free tool to identify excavator parts. Click any component for details." />
        
        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative sm:h-[450px] flex items-center justify-center overflow-hidden bg-brand-navy border-b-8 border-brand-orange pt-12 md:pt-0 pb-8 sm:pb-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp" 
            alt="Excavator heavy equipment on construction site" 
            className="w-full h-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-[8px] md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
            <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <span className="text-brand-orange">/</span>
            <span className="text-gray-300">Tools</span>
            <span className="text-brand-orange">/</span>
            <span className="text-white">Excavator Parts Diagram</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 tracking-wide leading-tight">
            Excavator Parts <span className="text-brand-orange">Diagram</span>
          </h1>
          <p className="text-normal sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
            Click any component on our interactive excavator diagram to learn its name, function, and common issues. 
            Identify parts fast for repairs or understanding your equipment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+18594624673" 
              onClick={() => handleCtaClick('hero_phone')}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white sm:text-lg font-black px-6 py-3 sm:px-8 sm:py-4 rounded shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 fill-current" />
              Need Repair? Call 859-462-4673
            </a>
            <button 
              onClick={handlePdfDownload}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy text-lg font-bold px-6 py-3 sm:px-8 sm:py-4 rounded transition-colors"
            >
              <Download className="w-5 h-5" />
              Download PDF Diagram
            </button>
          </div>
        </div>
      </section>

      {/* How to Use This Tool */}
      <section className="bg-white py-8 border-b border-gray-200" aria-labelledby="how-to-use-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="how-to-use-heading" className="sr-only">How to Use This Tool</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div>
                <h3 className="font-bold text-brand-navy text-lg mb-1">Search or Browse</h3>
                <p className="text-gray-600 text-sm">Use the search bar to find parts by name, or filter by category (Arm, Hydraulic, Undercarriage).</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <div>
                <h3 className="font-bold text-brand-navy text-lg mb-1">Click Any Part</h3>
                <p className="text-gray-600 text-sm">Tap or click any labeled component on the diagram to see detailed information.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <div>
                <h3 className="font-bold text-brand-navy text-lg mb-1">Get Help Fast</h3>
                <p className="text-gray-600 text-sm">Review common issues and maintenance tips, then call us for on-site repair.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search parts by name (e.g., 'boom', 'cylinder', 'sprocket')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  aria-label="Search excavator parts"
                />
                {searchQuery && (
                  <button 
                    onClick={() => { setSearchQuery(''); setShowSearchResults(false); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                
                {/* Search Results Dropdown */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-80 overflow-y-auto z-50">
                    <div className="p-2 text-xs text-gray-500 border-b border-gray-100">
                      {searchResults.length} results found
                    </div>
                    {searchResults.map(part => (
                      <button
                        key={part.part_id}
                        onClick={() => handlePartClick(part.part_id)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-0 flex items-center gap-3"
                      >
                        <div 
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: getCategoryColor(part.category) }}
                        />
                        <div>
                          <div className="font-semibold text-brand-navy">{part.part_name}</div>
                          <div className="text-xs text-gray-500">{part.category_label}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Filters - Desktop */}
              <div className="hidden md:flex items-center gap-2">
                {partCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      activeCategory === cat.id
                        ? 'bg-brand-navy text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.label} ({cat.count})
                  </button>
                ))}
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold"
                aria-expanded={showMobileFilters}
              >
                <Filter className="w-4 h-4" />
                Filter by Category
                <ChevronDown className={`w-4 h-4 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Mobile Filters */}
            {showMobileFilters && (
              <div className="md:hidden mt-4 flex flex-wrap gap-2">
                {partCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setShowMobileFilters(false); }}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      activeCategory === cat.id
                        ? 'bg-brand-navy text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {cat.label} ({cat.count})
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Interactive Diagram Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* SVG Diagram */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-200 p-4 md:p-6">
                <div className="mb-4 flex flex-col sm:flex-row items-center justify-between">
                  <h2 className="text-xl font-bold text-brand-navy">Click Any Part to Learn More</h2>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-blue-500"></span> Upper
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-orange-500"></span> Arm
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-green-500"></span> Undercarriage
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span> Hydraulic
                    </span>
                  </div>
                </div>
                
                {/* SVG Container */}
                <div className="relative overflow-hidden bg-gray-100 rounded-lg" style={{ touchAction: 'pan-y' }}>
                  <svg 
                    ref={svgRef}
                    viewBox="0 0 600 400" 
                    className="w-full h-auto"
                    role="img"
                    aria-label="Interactive excavator parts diagram showing all major components"
                  >
                    {/* Background */}
                    <rect width="600" height="400" fill="#f8fafc" />
                    
                    {/* Ground line */}
                    <line x1="50" y1="360" x2="550" y2="360" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="10,5" />
                    
                    {/* Excavator Base Drawing */}
                    {/* Tracks */}
                    <g className="undercarriage">
                      {/* Track frame outline */}
                      <path 
                        d="M100,355 L100,300 L150,300 L150,290 L450,290 L450,300 L500,300 L500,355 L480,365 L120,365 Z" 
                        fill="#374151" 
                        stroke="#1f2937" 
                        strokeWidth="2"
                      />
                      {/* Track shoes detail */}
                      <rect x="105" y="355" width="390" height="8" fill="#4b5563" rx="2" />
                      {/* Front idler */}
                      <circle cx="130" cy="330" r="25" fill="#6b7280" stroke="#4b5563" strokeWidth="2" />
                      <circle cx="130" cy="330" r="15" fill="#374151" />
                      {/* Rear sprocket */}
                      <circle cx="470" cy="330" r="25" fill="#6b7280" stroke="#4b5563" strokeWidth="2" />
                      <circle cx="470" cy="330" r="15" fill="#374151" />
                      {/* Track rollers */}
                      <circle cx="200" cy="345" r="10" fill="#6b7280" stroke="#4b5563" strokeWidth="1" />
                      <circle cx="260" cy="345" r="10" fill="#6b7280" stroke="#4b5563" strokeWidth="1" />
                      <circle cx="320" cy="345" r="10" fill="#6b7280" stroke="#4b5563" strokeWidth="1" />
                      <circle cx="380" cy="345" r="10" fill="#6b7280" stroke="#4b5563" strokeWidth="1" />
                      {/* Top rollers */}
                      <circle cx="260" cy="295" r="8" fill="#6b7280" stroke="#4b5563" strokeWidth="1" />
                      <circle cx="340" cy="295" r="8" fill="#6b7280" stroke="#4b5563" strokeWidth="1" />
                    </g>

                    {/* House / Upper Structure */}
                    <g className="upper-structure">
                      {/* Main house body */}
                      <path 
                        d="M250,285 L250,200 L270,195 L340,195 L340,175 L380,175 L380,195 L480,195 L490,200 L490,285 Z" 
                        fill="#fbbf24" 
                        stroke="#f59e0b" 
                        strokeWidth="2"
                      />
                      {/* Cab */}
                      <rect x="275" y="200" width="60" height="55" fill="#1e3a5f" stroke="#0f172a" strokeWidth="2" rx="3" />
                      <rect x="280" y="205" width="50" height="35" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" rx="2" />
                      {/* Engine compartment */}
                      <rect x="340" y="200" width="80" height="55" fill="#ca8a04" stroke="#a16207" strokeWidth="2" rx="2" />
                      <line x1="355" y1="205" x2="355" y2="250" stroke="#a16207" strokeWidth="1" />
                      <line x1="375" y1="205" x2="375" y2="250" stroke="#a16207" strokeWidth="1" />
                      <line x1="395" y1="205" x2="395" y2="250" stroke="#a16207" strokeWidth="1" />
                      {/* Counterweight */}
                      <rect x="425" y="200" width="55" height="60" fill="#78716c" stroke="#57534e" strokeWidth="2" rx="3" />
                      {/* Exhaust */}
                      <rect x="395" y="175" width="12" height="25" fill="#44403c" stroke="#292524" strokeWidth="1" rx="2" />
                    </g>

                    {/* Boom */}
                    <g className="arm-assembly">
                      {/* Boom main structure */}
                      <path 
                        d="M260,220 L130,130 L115,135 L110,150 L125,155 L245,235 Z" 
                        fill="#fbbf24" 
                        stroke="#f59e0b" 
                        strokeWidth="2"
                      />
                      {/* Boom cylinder */}
                      <rect x="220" y="205" width="50" height="12" fill="#9ca3af" stroke="#6b7280" strokeWidth="1" rx="2" transform="rotate(-35, 245, 211)" />
                      <rect x="215" y="200" width="12" height="20" fill="#6b7280" stroke="#4b5563" strokeWidth="1" rx="1" transform="rotate(-35, 221, 210)" />
                      
                      {/* Stick */}
                      <path 
                        d="M130,130 L55,75 L45,80 L40,95 L55,100 L125,150 Z" 
                        fill="#fbbf24" 
                        stroke="#f59e0b" 
                        strokeWidth="2"
                      />
                      {/* Stick cylinder */}
                      <rect x="95" y="115" width="40" height="10" fill="#9ca3af" stroke="#6b7280" strokeWidth="1" rx="2" transform="rotate(-45, 115, 120)" />
                      
                      {/* Bucket */}
                      <path 
                        d="M55,75 L25,95 L15,140 L25,145 L70,145 L75,140 L65,95 Z" 
                        fill="#6b7280" 
                        stroke="#4b5563" 
                        strokeWidth="2"
                      />
                      {/* Bucket teeth */}
                      <path d="M20,145 L18,160 L25,160 L27,145" fill="#4b5563" stroke="#374151" strokeWidth="1" />
                      <path d="M32,145 L30,160 L37,160 L39,145" fill="#4b5563" stroke="#374151" strokeWidth="1" />
                      <path d="M44,145 L42,160 L49,160 L51,145" fill="#4b5563" stroke="#374151" strokeWidth="1" />
                      <path d="M56,145 L54,160 L61,160 L63,145" fill="#4b5563" stroke="#374151" strokeWidth="1" />
                      
                      {/* Bucket cylinder */}
                      <rect x="50" y="90" width="30" height="8" fill="#9ca3af" stroke="#6b7280" strokeWidth="1" rx="2" transform="rotate(-20, 65, 94)" />
                      
                      {/* H-Link */}
                      <rect x="58" y="98" width="15" height="8" fill="#78716c" stroke="#57534e" strokeWidth="1" rx="1" transform="rotate(-40, 65, 102)" />
                      
                      {/* Pivot points */}
                      <circle cx="130" cy="135" r="6" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
                      <circle cx="55" cy="80" r="5" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
                      <circle cx="260" cy="225" r="6" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
                    </g>

                    {/* Interactive Hotspots - Invisible clickable areas */}
                    {filteredParts.map(part => (
                      <g key={part.part_id}>
                        <path
                          d={part.svgPath}
                          fill={hoveredPart === part.part_id ? getCategoryColor(part.category) : 'transparent'}
                          fillOpacity={hoveredPart === part.part_id ? 0.3 : 0}
                          stroke={hoveredPart === part.part_id || selectedPart?.part_id === part.part_id ? getCategoryColor(part.category) : 'transparent'}
                          strokeWidth="3"
                          className="cursor-pointer transition-all duration-200"
                          onMouseEnter={() => setHoveredPart(part.part_id)}
                          onMouseLeave={() => setHoveredPart(null)}
                          onClick={() => handlePartClick(part.part_id)}
                          role="button"
                          tabIndex={0}
                          aria-label={`${part.part_name}: Click for details`}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePartClick(part.part_id); }}
                        />
                        {/* Label on hover */}
                        {hoveredPart === part.part_id && (
                          <g>
                            <rect
                              x={part.labelPosition.x - 60}
                              y={part.labelPosition.y - 25}
                              width="120"
                              height="20"
                              fill="white"
                              stroke={getCategoryColor(part.category)}
                              strokeWidth="1"
                              rx="3"
                              className="pointer-events-none"
                            />
                            <text
                              x={part.labelPosition.x}
                              y={part.labelPosition.y - 12}
                              textAnchor="middle"
                              fontSize="10"
                              fontWeight="bold"
                              fill="#1f2937"
                              className="pointer-events-none"
                            >
                              {part.part_name.length > 20 ? part.part_name.substring(0, 18) + '...' : part.part_name}
                            </text>
                          </g>
                        )}
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Instructions */}
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <strong>How to use:</strong> Hover over or tap any part of the excavator to Learn Its Name, Function & Common Issues.
                    </div>
                  </div>
                </div>
              </div>

              {/* Parts List Sidebar */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 pt-0 p-4 md:pt-0 md:p-6 max-h-[700px] overflow-y-auto">
                <h3 className="text-lg font-bold text-brand-navy mb-4 sticky top-0 bg-white pb-2 pt-4 border-b border-gray-100">
                  {activeCategory === 'all' ? 'All Components' : partCategories.find(c => c.id === activeCategory)?.label} 
                  <span className="text-gray-500 font-normal ml-2">({filteredParts.length})</span>
                </h3>
                <div className="space-y-2">
                  {filteredParts.map(part => (
                    <button
                      key={part.part_id}
                      onClick={() => handlePartClick(part.part_id)}
                      onMouseEnter={() => setHoveredPart(part.part_id)}
                      onMouseLeave={() => setHoveredPart(null)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        selectedPart?.part_id === part.part_id
                          ? 'bg-brand-navy text-white border-brand-navy'
                          : hoveredPart === part.part_id
                          ? 'bg-gray-100 border-gray-300'
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: selectedPart?.part_id === part.part_id ? 'white' : getCategoryColor(part.category) }}
                        />
                        <span className="font-semibold text-sm">{part.part_name}</span>
                      </div>
                      {part.hydraulic_related && (
                        <span className={`text-xs mt-1 inline-block ${selectedPart?.part_id === part.part_id ? 'text-blue-200' : 'text-red-600'}`}>
                          ⚡ Hydraulic Component
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Part Detail Modal */}
        {selectedPart && (
          <div className="modal-backdrop fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="part-modal-title">
            <div 
              ref={modalRef}
              className="modal-content modal-scrollbar bg-white rounded-2xl shadow-2xl max-w-2xl lg:max-w-4xl w-full max-h-[90vh] lg:max-h-[85vh] overflow-y-auto lg:overflow-y-visible border border-gray-100"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-brand-navy p-4 md:p-6 flex items-start justify-between rounded-t-2xl">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="w-3 h-3 rounded-full ring-2 ring-white/30"
                      style={{ backgroundColor: getCategoryColor(selectedPart.category) }}
                    />
                    <span className="text-sm text-gray-300 font-medium">{selectedPart.category_label}</span>
                  </div>
                  <h2 id="part-modal-title" className="text-xl md:text-2xl font-bold text-white">{selectedPart.part_name}</h2>
                  {selectedPart.alternate_names.length > 0 && (
                    <p className="text-sm text-gray-300 mt-1">
                      Also known as: {selectedPart.alternate_names.slice(0, 3).join(', ')}
                    </p>
                  )}
                </div>
                <button 
                  onClick={() => setSelectedPart(null)} 
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 hover:rotate-90"
                  aria-label="Close dialog"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 md:p-6 lg:p-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 space-y-6 lg:space-y-0">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Function */}
                    <div>
                      <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-2 text-xl sm:text-2xl">
                        <Info className="w-5 h-5 text-blue-500" />
                        Function & Purpose
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{selectedPart.function}</p>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getUrgencyColor(selectedPart.repair_urgency)}`}>
                        {selectedPart.repair_urgency === 'critical' ? '🔴' : selectedPart.repair_urgency === 'high' ? '🟠' : selectedPart.repair_urgency === 'medium' ? '🟡' : '🟢'} 
                        {' '}{selectedPart.repair_urgency.charAt(0).toUpperCase() + selectedPart.repair_urgency.slice(1)} Priority
                      </span>
                      {selectedPart.hydraulic_related && (
                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-800 border border-red-200">
                          <Zap className="w-3 h-3 inline mr-1" />
                          Hydraulic Component
                        </span>
                      )}
                    </div>

                    {/* Common Issues */}
                    <div>
                      <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-3 text-xl sm:text-2xl">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        Common Issues
                      </h3>
                      <ul className="space-y-2">
                        {selectedPart.common_issues.map((issue, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                            <span className="text-orange-500 text-sm sm:text-base">•</span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Diagnostic Questions */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-3 text-base md:text-lg">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                        Symptoms Checklist
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">Check any issues you're experiencing:</p>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
                          <span>Visible oil leak near this component</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
                          <span>Slow or jerky movement</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
                          <span>Unusual noise (whining, grinding, knocking)</span>
                        </label>
                      </div>
                      <p className="text-xs text-amber-700 mt-3">
                        ⚡ Multiple symptoms? Call now for priority diagnosis.
                      </p>
                    </div>

                    {/* Maintenance Schedule */}
                    <div>
                      <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-3 text-lg md:text-xl">
                        <Wrench className="w-5 h-5 text-green-500" />
                        Maintenance Schedule
                      </h3>
                      <ul className="space-y-2">
                        {selectedPart.maintenance_tips.slice(0, 3).map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Related Parts */}
                    {selectedPart.related_parts.length > 0 && (
                      <div>
                        <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-3 text-base md:text-lg">
                          <Cog className="w-5 h-5 text-gray-500" />
                          Related Parts
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedPart.related_parts.map(relatedId => {
                            const relatedPart = getPartById(relatedId);
                            if (!relatedPart) return null;
                            return (
                              <button
                                key={relatedId}
                                onClick={() => handlePartClick(relatedId)}
                                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors"
                              >
                                {relatedPart.part_name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA - Full width below columns */}
                <div className="bg-gradient-to-r from-brand-navy to-gray-800 rounded-lg p-4 md:p-6 mt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                        Need {selectedPart.part_name} Repair?
                      </h4>
                      <p className="text-gray-300 text-sm flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-400" />
                        60-min emergency response in Wichita, Lubbock & Bakersfield
                      </p>
                    </div>
                    <a
                      href="tel:+18594624673"
                      onClick={() => handleCtaClick('modal_phone')}
                      className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl text-lg whitespace-nowrap"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now: 859-462-4673
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Banner */}
        <section className="bg-brand-orange py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-4">
              Need Hydraulic Excavator Repair?
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Our mobile technicians come to your job site with fully-equipped service trucks. 
              24/7 emergency response available.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+18594624673"
                onClick={() => handleCtaClick('banner_phone')}
                className="inline-flex items-center gap-2 bg-white text-brand-orange hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                859-462-4673
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-navy hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Request Service Online
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Content Sections for SEO */}

        {/* Section: Four Main Systems Overview */}
        <section className="py-16 bg-white" aria-labelledby="systems-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="systems-heading" className="text-2xl md:text-4xl font-heading font-black text-brand-navy mb-4">
                Four Main Systems of an Excavator
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Every hydraulic excavator consists of four interconnected systems. Understanding these helps identify parts, diagnose problems, and communicate with repair technicians.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
              <article className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow" role="listitem">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center" aria-hidden="true">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-lg">Upper Structure</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Operator cab with controls</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Engine compartment</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Counterweight for stability</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Slew ring (360° rotation)</span></li>
                </ul>
              </article>
              
              <article className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow" role="listitem">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center" aria-hidden="true">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-lg">Arm Assembly</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Boom (main lifting arm)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Stick (dipper arm for reach)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Bucket with teeth</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Hydraulic cylinders</span></li>
                </ul>
              </article>
              
              <article className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow" role="listitem">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center" aria-hidden="true">
                    <Cog className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-lg">Undercarriage</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Track frames & shoes</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Sprockets & idlers</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Track rollers</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Final drives</span></li>
                </ul>
              </article>
              
              <article className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500 hover:shadow-lg transition-shadow" role="listitem">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center" aria-hidden="true">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-brand-navy text-lg">Hydraulic System</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Pumps & tank</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Control valves</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Hoses & filters</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" aria-hidden="true" /><span>Center swivel</span></li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Section: Boom and Arm Components */}
        <section className="py-16 bg-gray-50" aria-labelledby="arm-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 font-semibold text-sm rounded-full mb-4">ARM ASSEMBLY</span>
                <h2 id="arm-heading" className="text-2xl md:text-3xl font-heading font-black text-brand-navy mb-6">
                  Excavator Boom, Stick & Bucket Components
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The excavator arm assembly is the most visible and hardest-working part of the machine. The <strong>boom</strong> connects to the house at one end and the stick at the other, providing the primary lifting motion. A large hydraulic cylinder—the boom cylinder—controls boom raise and lower functions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong>stick</strong> (or dipper arm) extends from the boom and provides crowd motion for digging. At the end of the stick, the <strong>bucket</strong> attaches through a linkage system. The bucket cylinder works through the H-link to curl the bucket for digging and dump material.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Bucket types</strong> include general purpose, heavy duty, rock buckets with extra wear protection, and ditching buckets with smooth edges for grading. Key bucket parts include the shell, side cutters, cutting edge, and replaceable teeth attached to adapters.
                </p>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Arm assembly components">
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold" role="listitem">Boom</span>
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold" role="listitem">Stick</span>
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold" role="listitem">Bucket</span>
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold" role="listitem">Cylinders</span>
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold" role="listitem">H-Link</span>
                  <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold" role="listitem">Bucket Teeth</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h3 className="font-bold text-brand-navy text-xl mb-6 flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-orange-500" aria-hidden="true" />
                  Key Maintenance Points
                </h3>
                <ul className="space-y-5" role="list">
                  <li className="flex items-start gap-4" role="listitem">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-700 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <strong className="text-brand-navy text-base">Daily Greasing</strong>
                      <p className="text-gray-600 mt-1">Pivot pins and bushings at each joint require daily greasing to prevent premature wear.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4" role="listitem">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-700 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <strong className="text-brand-navy text-base">Bucket Teeth Inspection</strong>
                      <p className="text-gray-600 mt-1">Replaceable wear items that provide the cutting edge. Check for wear and rotate or replace as needed.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4" role="listitem">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-700 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <strong className="text-brand-navy text-base">Quick Coupler</strong>
                      <p className="text-gray-600 mt-1">Many excavators feature a quick coupler for rapid attachment changes without leaving the cab.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Undercarriage Components */}
        <section className="py-16 bg-brand-navy text-white" aria-labelledby="undercarriage-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-green-500/20 text-green-300 font-semibold text-sm rounded-full mb-4">UNDERCARRIAGE</span>
              <h2 id="undercarriage-heading" className="text-2xl md:text-4xl font-heading font-black mb-4">
                Excavator Undercarriage Components
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                The undercarriage supports the entire machine and enables travel across job sites. Proper maintenance extends track life and prevents costly repairs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6" role="list">
              <article className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors" role="listitem">
                <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-base font-bold">1</span>
                  Track Frame & Chains
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The <strong className="text-white">track frame</strong> provides structural foundation. <strong className="text-white">Track chains</strong> consist of linked segments wrapping around the sprocket and idler, propelling the machine.
                </p>
              </article>
              <article className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors" role="listitem">
                <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-base font-bold">2</span>
                  Shoes, Sprockets & Idlers
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Track shoes</strong> (grousers) bolt to chain links and contact ground. <strong className="text-white">Sprockets</strong> transfer power from final drives. <strong className="text-white">Front idlers</strong> guide the chain and provide tension adjustment.
                </p>
              </article>
              <article className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors" role="listitem">
                <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-base font-bold">3</span>
                  Rollers & Final Drives
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Track rollers</strong> support machine weight—bottom rollers carry load, top rollers prevent sag. <strong className="text-white">Final drives</strong> multiply torque from travel motors to turn sprockets.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Section: Hydraulic System */}
        <section className="py-16 bg-white" aria-labelledby="hydraulic-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
                <div className="grid grid-cols-2 gap-4" role="list">
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100" role="listitem">
                    <Zap className="w-10 h-10 text-red-500 mb-3" aria-hidden="true" />
                    <h4 className="font-bold text-brand-navy">Hydraulic Pump</h4>
                    <p className="text-gray-600 text-sm mt-1">Variable displacement piston pump</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100" role="listitem">
                    <Settings className="w-10 h-10 text-red-500 mb-3" aria-hidden="true" />
                    <h4 className="font-bold text-brand-navy">Control Valve</h4>
                    <p className="text-gray-600 text-sm mt-1">Directs oil based on operator input</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100" role="listitem">
                    <Cog className="w-10 h-10 text-red-500 mb-3" aria-hidden="true" />
                    <h4 className="font-bold text-brand-navy">Hoses & Lines</h4>
                    <p className="text-gray-600 text-sm mt-1">Withstand 3,000-5,000 PSI</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100" role="listitem">
                    <Filter className="w-10 h-10 text-red-500 mb-3" aria-hidden="true" />
                    <h4 className="font-bold text-brand-navy">Filters</h4>
                    <p className="text-gray-600 text-sm mt-1">Remove contamination</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 font-semibold text-sm rounded-full mb-4">HYDRAULIC SYSTEM</span>
                <h2 id="hydraulic-heading" className="text-2xl md:text-3xl font-heading font-black text-brand-navy mb-6">
                  Hydraulic Excavator Parts & System
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The hydraulic system is the heart of any excavator, converting engine power into the force needed for digging, lifting, and traveling. The hydraulic pump draws oil from the tank and pressurizes it for use throughout the system.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The <strong>center swivel</strong> allows oil to flow between the rotating upper structure and stationary undercarriage, enabling continuous 360° rotation while supplying the travel motors.
                </p>
                <a 
                  href="tel:+18594624673" 
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Hydraulic Repair: 859-462-4673
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Maintenance Schedule Table */}
        <section className="py-16 bg-gray-50" aria-labelledby="maintenance-schedule-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold text-sm rounded-full mb-4">PREVENTIVE MAINTENANCE</span>
              <h2 id="maintenance-schedule-heading" className="text-2xl md:text-4xl font-heading font-black text-brand-navy mb-4">
                Excavator Hydraulic Maintenance Schedule
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Follow these intervals to prevent 80% of hydraulic failures and extend component life. Based on standard operating conditions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full" role="table">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="px-6 py-4 text-left font-bold" scope="col">Component</th>
                      <th className="px-6 py-4 text-left font-bold" scope="col">Inspect</th>
                      <th className="px-6 py-4 text-left font-bold" scope="col">Replace</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-brand-navy">Hydraulic Fluid Level</td>
                      <td className="px-6 py-4 text-gray-600">Daily (8 hours)</td>
                      <td className="px-6 py-4 text-gray-600">—</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-brand-navy">Hydraulic Hoses</td>
                      <td className="px-6 py-4 text-gray-600">Weekly (50 hours)</td>
                      <td className="px-6 py-4 text-gray-600">2-4 years or when damaged</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-brand-navy">Hydraulic Filters</td>
                      <td className="px-6 py-4 text-gray-600">Every 250 hours</td>
                      <td className="px-6 py-4 text-gray-600">Every 500 hours</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-brand-navy">Hydraulic Oil</td>
                      <td className="px-6 py-4 text-gray-600">Sample every 500 hours</td>
                      <td className="px-6 py-4 text-gray-600">2,000-4,000 hours or annually</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-brand-navy">Cylinder Seals</td>
                      <td className="px-6 py-4 text-gray-600">Check for leaks weekly</td>
                      <td className="px-6 py-4 text-gray-600">When leaking or drifting</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-brand-navy">Pivot Pins & Bushings</td>
                      <td className="px-6 py-4 text-gray-600">Grease daily</td>
                      <td className="px-6 py-4 text-gray-600">When play exceeds spec</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-brand-navy">Track Tension</td>
                      <td className="px-6 py-4 text-gray-600">Daily visual check</td>
                      <td className="px-6 py-4 text-gray-600">Adjust as needed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 px-6 py-4 border-t border-gray-200">
                <p className="text-sm text-blue-800 flex items-center gap-2">
                  <Info className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Pro Tip:</strong> Severe conditions (dust, heat, heavy loads) require more frequent intervals. Contact us for a custom maintenance plan.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Mini Excavator */}
        <section className="py-16 bg-white" aria-labelledby="mini-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 bg-brand-navy p-8 flex flex-col justify-center">
                  <span className="inline-block px-4 py-1.5 bg-white/20 text-white font-semibold text-sm rounded-full mb-4 w-fit">COMPACT EQUIPMENT</span>
                  <h2 id="mini-heading" className="text-2xl md:text-3xl font-heading font-black text-white mb-4">
                    Mini Excavator Parts
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Mini excavators under 6 metric tons feature the same basic components in a compact package—perfect for confined spaces and residential work.
                  </p>
                </div>
                <div className="lg:col-span-3 p-8">
                  <h3 className="font-bold text-brand-navy text-lg mb-5">Key Differences from Full-Size Machines:</h3>
                  <div className="grid sm:grid-cols-2 gap-5" role="list">
                    <div className="flex items-start gap-3" role="listitem">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-brand-navy">Compact Tail Swing</strong>
                        <p className="text-gray-600 mt-1">Counterweight stays within track width</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3" role="listitem">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-brand-navy">Shorter Boom & Stick</strong>
                        <p className="text-gray-600 mt-1">Designed for confined space work</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3" role="listitem">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-brand-navy">Rubber Tracks</strong>
                        <p className="text-gray-600 mt-1">Better traction, less ground damage</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3" role="listitem">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-brand-navy">Dozer Blade</strong>
                        <p className="text-gray-600 mt-1">Front-mounted for backfilling and grading</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-6 border-t border-gray-200 pt-4">
                    Despite smaller size, mini excavators contain all the same hydraulic components and require the same maintenance attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Terminology Glossary */}
        <section className="py-16 bg-gray-50" aria-labelledby="terminology-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 font-semibold text-sm rounded-full mb-4">GLOSSARY</span>
              <h2 id="terminology-heading" className="text-2xl md:text-4xl font-heading font-black text-brand-navy mb-4">
                Excavator Parts Terminology Glossary
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Complete reference of excavator part names, alternate terms, and regional variations. Use this when ordering parts or describing issues to technicians.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
                {/* Arm Assembly Terms */}
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Boom</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Main arm, lift arm, boom arm</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Stick</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Arm, dipper arm, crowd arm</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Bucket</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Scoop, dipper bucket</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Bucket Teeth</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Tips, points, adapters</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">H-Link</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Bucket linkage, idler link</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Quick Coupler</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Quick hitch, quick attach</div>
                </div>
                
                {/* Hydraulic Terms */}
                <div className="bg-red-50 rounded-lg p-4 border border-red-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Hydraulic Cylinder</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Ram, actuator, jack</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Hydraulic Pump</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Main pump, piston pump</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Control Valve</div>
                  <div className="text-gray-600 text-sm mt-1">Also: MCV, main control valve</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Center Swivel</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Rotary joint, center joint</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Hydraulic Hoses</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Lines, high-pressure hoses</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Seal Kit</div>
                  <div className="text-gray-600 text-sm mt-1">Also: O-rings, packing, repair kit</div>
                </div>
                
                {/* Undercarriage Terms */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Track Shoes</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Pads, grousers, plates</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Final Drive</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Travel drive, track motor</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Sprocket</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Drive sprocket, drive wheel</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Idler</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Front idler, track tensioner</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Track Roller</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Bottom roller, carrier roller</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Track Chain</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Track links, track assembly</div>
                </div>
                
                {/* Upper Structure Terms */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">House</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Cab, upper structure, turret</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Slew Ring</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Swing bearing, turntable</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Counterweight</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Rear weight, balance weight</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Swing Motor</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Slew motor, rotation motor</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Hydraulic Tank</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Oil reservoir, fluid tank</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100" role="listitem">
                  <div className="font-bold text-brand-navy text-base">Boom Foot Pin</div>
                  <div className="text-gray-600 text-sm mt-1">Also: Base pin, pivot pin</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">
                  <strong>Can't find a term?</strong> Call our technicians at <a href="tel:+18594624673" className="text-brand-orange font-semibold hover:underline">859-462-4673</a> — we speak excavator.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 border-t border-gray-200" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-heading font-black text-brand-navy mb-10 text-center">
              Frequently Asked Questions About Excavator Parts
            </h2>
            <div className="space-y-4" role="list">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200" role="listitem">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-inset hover:bg-gray-50 transition-colors"
                    aria-expanded={expandedFaq === idx}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="font-bold text-brand-navy text-lg pr-4">{faq.question}</span>
                    {expandedFaq === idx ? (
                      <ChevronUp className="text-brand-orange flex-shrink-0 w-6 h-6" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="text-gray-500 flex-shrink-0 w-6 h-6" aria-hidden="true" />
                    )}
                  </button>
                  {expandedFaq === idx && (
                    <div id={`faq-answer-${idx}`} className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Links */}
        <section className="py-12 bg-white border-t border-gray-200" aria-labelledby="locations-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 id="locations-heading" className="text-xl font-bold text-brand-navy mb-6">
              Mobile Hydraulic Repair Service Areas
            </h3>
            <p className="text-gray-600 mb-6">
              We dispatch mobile hydraulic technicians throughout these regions for emergency excavator repair:
            </p>
            <div className="flex flex-wrap justify-center gap-4" role="list">
              <Link 
                to="/locations/bakersfield" 
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-brand-navy transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                role="listitem"
              >
                <MapPin className="w-5 h-5" aria-hidden="true" />
                Bakersfield, CA
              </Link>
              <Link 
                to="/locations/wichita" 
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-brand-navy transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                role="listitem"
              >
                <MapPin className="w-5 h-5" aria-hidden="true" />
                Wichita, KS
              </Link>
              <Link 
                to="/locations/lubbock" 
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-brand-navy transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                role="listitem"
              >
                <MapPin className="w-5 h-5" aria-hidden="true" />
                Lubbock, TX
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-gray-100 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              <strong>Disclaimer:</strong> This excavator parts diagram is for general educational reference only. Part configurations, names, and locations may vary by manufacturer, model, and year of production. This tool does not represent any specific brand or machine. Always consult your equipment operator's manual or a certified technician for accurate part identification, specifications, and repair procedures. Frontline Hydraulic Services is not responsible for any actions taken based on this reference material.
            </p>
          </div>
        </section>
    </div>
  );
};

export default ExcavatorPartsDiagram;
