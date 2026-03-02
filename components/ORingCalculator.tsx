import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Search, Phone, ChevronDown, ChevronUp, Calculator, 
  ArrowRight, CheckCircle2, Info, AlertTriangle,
  Copy, Check, Ruler, ArrowLeftRight, Circle, Filter
} from 'lucide-react';
import { 
  oRingData, 
  oRingSeries,
  oRingFaqData,
  oRingConversions,
  getORingByDashNumber,
  findORingsByID,
  findORingsByCrossSection,
  getORingsBySeries,
  ORingSize
} from '../data/oRingData';

// Analytics helper
const trackEvent = (eventName: string, params: Record<string, string>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

const ORingCalculator: React.FC = () => {
  // Search states
  const [dashSearch, setDashSearch] = useState<string>('');
  const [idSearch, setIdSearch] = useState<string>('');
  const [csSearch, setCsSearch] = useState<string>('');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [selectedORing, setSelectedORing] = useState<ORingSize | null>(null);
  
  // Converter states
  const [inchValue, setInchValue] = useState<string>('');
  const [mmValue, setMmValue] = useState<string>('');
  const [converterSource, setConverterSource] = useState<'inches' | 'mm'>('inches');
  
  // UI states
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'finder' | 'chart' | 'converter'>('finder');

  // Dash number search result
  const dashSearchResult = useMemo(() => {
    if (!dashSearch) return null;
    // Normalize input: handle formats like "214", "-214", "dash214", "dash 214"
    const normalized = dashSearch.replace(/[-\s]?(dash\s*)?/gi, '').trim();
    if (!normalized) return null;
    
    const result = getORingByDashNumber(normalized);
    if (result) {
      trackEvent('oring_dash_search', { dash: normalized, found: 'true' });
    }
    return result;
  }, [dashSearch]);

  // ID search results
  const idSearchResults = useMemo(() => {
    if (!idSearch) return [];
    const id = parseFloat(idSearch);
    if (isNaN(id) || id <= 0) return [];
    
    const results = findORingsByID(id, 0.05);
    trackEvent('oring_id_search', { id: idSearch, results: results.length.toString() });
    return results;
  }, [idSearch]);

  // Cross-section search results
  const csSearchResults = useMemo(() => {
    if (!csSearch) return [];
    const cs = parseFloat(csSearch);
    if (isNaN(cs) || cs <= 0) return [];
    
    const results = findORingsByCrossSection(cs, 0.02);
    return results;
  }, [csSearch]);

  // Filtered chart data
  const filteredChartData = useMemo(() => {
    if (selectedSeries === 'all') {
      return oRingData;
    }
    return getORingsBySeries(selectedSeries as any);
  }, [selectedSeries]);

  // Converter effect
  React.useEffect(() => {
    if (converterSource === 'inches' && inchValue) {
      const inches = parseFloat(inchValue);
      if (!isNaN(inches)) {
        setMmValue(oRingConversions.inchesToMm(inches).toFixed(3));
      }
    } else if (converterSource === 'mm' && mmValue) {
      const mm = parseFloat(mmValue);
      if (!isNaN(mm)) {
        setInchValue(oRingConversions.mmToInches(mm).toFixed(4));
      }
    }
  }, [inchValue, mmValue, converterSource]);

  // Copy to clipboard
  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
      trackEvent('oring_copy', { field, value: text });
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Schema markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "O-Ring Dash Size Chart (AS568 Standard)",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free AS568 O-ring dash size chart and conversion tool. Look up O-ring dimensions by dash number, inside diameter, or cross-section. Includes inch to mm converter.",
    "url": "https://emergencyhydraulics.com/tools/o-ring-dash-size-chart",
    "provider": {
      "@type": "Organization",
      "name": "Frontline Hydraulic Services",
      "telephone": "+1-859-462-4673"
    },
    "featureList": [
      "AS568 O-ring dash number lookup",
      "O-ring size conversion",
      "Inside diameter search",
      "Cross-section finder",
      "Inch to mm converter",
      "Complete AS568 reference chart"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": oRingFaqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Measure O-Ring Size",
    "description": "Step-by-step guide to correctly measure O-ring inside diameter and cross-section to find the AS568 dash number.",
    "totalTime": "PT3M",
    "supply": [
      { "@type": "HowToSupply", "name": "O-ring sample" }
    ],
    "tool": [
      { "@type": "HowToTool", "name": "Digital calipers" },
      { "@type": "HowToTool", "name": "AS568 O-ring chart" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Lay O-ring flat",
        "text": "Place the O-ring on a flat surface without stretching or distorting it."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Measure inside diameter",
        "text": "Using calipers, measure across the inner opening of the O-ring to get the inside diameter (ID)."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Measure cross-section",
        "text": "Gently compress the O-ring with calipers to measure the cord thickness (cross-section)."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Find dash number",
        "text": "Compare both measurements to the AS568 chart to find the matching dash number."
      }
    ]
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>O-Ring Dash Size Chart (AS568 Standard) | Inch & Metric Conversion</title>
        <meta name="description" content="Free AS568 O-ring dash size chart with inch and metric conversion. Look up dash numbers, find O-ring sizes by ID or cross-section. Complete 0XX, 1XX, 2XX, 3XX, 4XX series reference." />
        <meta name="keywords" content="o ring dash size chart, as568 dash chart, o ring dash number chart, o ring size conversion, dash o ring size in mm, o ring cross section chart, hydraulic o ring sizing, AS568 o ring" />
        <link rel="canonical" href="https://emergencyhydraulics.com/tools/o-ring-dash-size-chart" />
        
        {/* Open Graph */}
        <meta property="og:title" content="O-Ring Dash Size Chart (AS568 Standard) | Free Tool" />
        <meta property="og:description" content="Complete AS568 O-ring dash size chart. Convert dash numbers to inches/mm. Find O-rings by ID or cross-section." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emergencyhydraulics.com/tools/o-ring-dash-size-chart" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="O-Ring Dash Size Chart (AS568)" />
        <meta name="twitter:description" content="Free AS568 O-ring size chart. Convert dash numbers to metric dimensions." />
        
        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative sm:h-[450px] flex items-center justify-center overflow-hidden bg-brand-navy border-b-8 border-brand-orange pt-12 md:pt-0 pb-8 sm:pb-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp" 
            alt="O-rings and seals" 
            className="w-full h-full object-cover opacity-20"
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
            <span className="text-white">O-Ring Size Chart</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 tracking-wide leading-tight">
            O-Ring <span className="text-brand-orange">Dash Size Chart</span> (AS568)
          </h1>
          <p className="text-normal sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium mb-6 leading-relaxed">
            Complete AS568 O-ring dash number chart with inch and metric conversion. 
            Look up dash sizes by number, inside diameter, or cross-section.
          </p>
          
          {/* Important Notice */}
          <div className="bg-yellow-500/20 border border-yellow-400/50 rounded-lg p-4 max-w-2xl mx-auto mb-8">
            <p className="text-yellow-200 text-sm flex items-center justify-center gap-2">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <span><strong>Important:</strong> O-ring dash numbers follow AS568 standard and are NOT the same as hose dash sizing.</span>
            </p>
          </div>
          
          <a 
            href="tel:+18594624673" 
            className="inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white sm:text-lg font-black px-8 py-4 rounded shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <Phone className="w-5 h-5 fill-current" />
            Need O-Rings? Call 859-462-4673
          </a>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            <button
              onClick={() => setActiveTab('finder')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === 'finder' ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Search className="w-4 h-4" />
              Size Finder
            </button>
            <button
              onClick={() => setActiveTab('chart')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === 'chart' ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Ruler className="w-4 h-4" />
              AS568 Chart
            </button>
            <button
              onClick={() => setActiveTab('converter')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === 'converter' ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ArrowLeftRight className="w-4 h-4" />
              Unit Converter
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab: Size Finder */}
          {activeTab === 'finder' && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Search Panel */}
              <div className="space-y-6">
                {/* Dash Number Search */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                    <Search className="w-6 h-6 text-brand-orange" />
                    Find O-Ring by Dash Number
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    Enter an AS568 dash number to find the O-ring dimensions.
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      value={dashSearch}
                      onChange={(e) => setDashSearch(e.target.value)}
                      placeholder="e.g., 214, 110, 320"
                      className="w-full px-4 py-4 text-xl font-bold border-2 border-brand-orange rounded-lg focus:ring-2 focus:ring-brand-orange"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">Dash #</span>
                  </div>
                  
                  {/* Dash Search Result */}
                  {dashSearch && (
                    <div className="mt-4">
                      {dashSearchResult ? (
                        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span className="font-bold text-green-800">Found: Dash {dashSearchResult.dashNumber}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <p className="text-gray-500">Inside Diameter</p>
                              <p className="font-bold text-brand-navy">{dashSearchResult.insideDiameterInches}" ({dashSearchResult.insideDiameterMm}mm)</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Cross-Section</p>
                              <p className="font-bold text-brand-navy">{dashSearchResult.crossSectionInches}" ({dashSearchResult.crossSectionMm}mm)</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Outside Diameter</p>
                              <p className="font-bold text-brand-navy">{dashSearchResult.outsideDiameterInches}" ({dashSearchResult.outsideDiameterMm}mm)</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Series</p>
                              <p className="font-bold text-brand-navy">{dashSearchResult.series}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => setSelectedORing(dashSearchResult)}
                            className="mt-4 w-full bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
                          >
                            View Full Details →
                          </button>
                        </div>
                      ) : (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <p className="text-yellow-800 text-sm">No AS568 O-ring found for dash {dashSearch}. Try a different number or search by ID.</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* ID Search */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                    <Circle className="w-5 h-5 text-brand-orange" />
                    Find by Inside Diameter
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Enter measured ID (inches) to find matching O-ring dash numbers.
                  </p>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.001"
                      value={idSearch}
                      onChange={(e) => setIdSearch(e.target.value)}
                      placeholder="e.g., 0.984"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">inches</span>
                  </div>
                  
                  {idSearchResults.length > 0 && (
                    <div className="mt-4 space-y-2 max-h-48 overflow-y-auto">
                      {idSearchResults.slice(0, 10).map(o => (
                        <button
                          key={o.dashNumber}
                          onClick={() => setSelectedORing(o)}
                          className="w-full text-left p-3 bg-gray-50 hover:bg-orange-50 rounded-lg border border-gray-200 hover:border-brand-orange transition-colors"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-brand-navy">Dash {o.dashNumber}</span>
                            <span className="text-sm text-gray-500">{o.series}</span>
                          </div>
                          <p className="text-sm text-gray-600">ID: {o.insideDiameterInches}" × CS: {o.crossSectionInches}"</p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Cross-Section Search */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-brand-orange" />
                    Find by Cross-Section
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Enter cross-section thickness to filter O-ring series.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {oRingSeries.map(series => (
                      <button
                        key={series.series}
                        onClick={() => {
                          setCsSearch(series.crossSectionInches.toString());
                          setSelectedSeries(series.series);
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                          csSearch === series.crossSectionInches.toString()
                            ? 'bg-brand-orange text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {series.series} ({series.crossSectionInches}")
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result Panel */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {selectedORing ? (
                  <>
                    <div className="bg-gradient-to-r from-brand-navy to-brand-blue p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-300 text-sm font-medium">AS568 O-Ring Size</p>
                          <h3 className="text-4xl font-black text-white">Dash {selectedORing.dashNumber}</h3>
                        </div>
                        <button
                          onClick={() => copyToClipboard(selectedORing.dashNumber, 'dashNumber')}
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                          title="Copy dash number"
                        >
                          {copiedField === 'dashNumber' ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-white" />}
                        </button>
                      </div>
                      <p className="text-gray-300 mt-2">{selectedORing.series} Series</p>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      {/* Dimensions */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Inside Diameter (ID)</p>
                          <p className="text-2xl font-black text-brand-navy">{selectedORing.insideDiameterInches}"</p>
                          <p className="text-sm text-gray-600">{selectedORing.insideDiameterMm} mm</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Cross-Section (CS)</p>
                          <p className="text-2xl font-black text-brand-navy">{selectedORing.crossSectionInches}"</p>
                          <p className="text-sm text-gray-600">{selectedORing.crossSectionMm} mm</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <p className="text-xs text-blue-600 uppercase font-semibold mb-1">Outside Diameter (OD)</p>
                        <p className="text-xl font-bold text-blue-800">{selectedORing.outsideDiameterInches}"</p>
                        <p className="text-sm text-blue-600">{selectedORing.outsideDiameterMm} mm</p>
                        <p className="text-xs text-blue-500 mt-2">OD = ID + (2 × CS)</p>
                      </div>

                      {/* Common Applications */}
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Common Applications</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedORing.commonApplications.map((app, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Series Info */}
                      <div className="border-t border-gray-200 pt-4">
                        {oRingSeries.filter(s => s.series === selectedORing.series).map(series => (
                          <div key={series.series} className="text-sm text-gray-600">
                            <p className="font-semibold text-brand-navy mb-1">{series.series} Series Info:</p>
                            <p>{series.description}</p>
                            <p className="text-xs text-gray-500 mt-1">Dash range: {series.dashRange}</p>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="bg-brand-navy rounded-xl p-5 text-center">
                        <p className="text-white mb-3">Need Dash {selectedORing.dashNumber} O-rings?</p>
                        <a
                          href="tel:+18594624673"
                          className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                          <Phone className="w-5 h-5" />
                          Call 859-462-4673
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="p-8 text-center h-full flex flex-col items-center justify-center">
                    <Circle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-2">Search for an O-ring size</p>
                    <p className="text-sm text-gray-400">Enter a dash number or ID measurement to see details</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab: AS568 Chart */}
          {activeTab === 'chart' && (
            <div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                    <Ruler className="w-6 h-6 text-brand-orange" />
                    AS568 O-Ring Dash Number Chart
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete O-ring dash size chart based on AS568 standard. Click any row for details.
                  </p>
                  
                  {/* Series Filter */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedSeries('all')}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                        selectedSeries === 'all' ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      All Series
                    </button>
                    {oRingSeries.map(series => (
                      <button
                        key={series.series}
                        onClick={() => setSelectedSeries(series.series)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                          selectedSeries === series.series ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {series.series} ({series.crossSectionMm}mm CS)
                      </button>
                    ))}
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy">Dash #</th>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy">ID (in)</th>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy">ID (mm)</th>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy">CS (in)</th>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy">CS (mm)</th>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy">OD (in)</th>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy hidden lg:table-cell">Series</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredChartData.map((o, idx) => (
                        <tr 
                          key={o.dashNumber} 
                          className={`border-b border-gray-100 hover:bg-orange-50 cursor-pointer transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                          onClick={() => { setSelectedORing(o); setActiveTab('finder'); }}
                        >
                          <td className="px-4 py-3 font-bold text-brand-navy">{o.dashNumber}</td>
                          <td className="px-4 py-3">{o.insideDiameterInches}</td>
                          <td className="px-4 py-3">{o.insideDiameterMm}</td>
                          <td className="px-4 py-3">{o.crossSectionInches}</td>
                          <td className="px-4 py-3">{o.crossSectionMm}</td>
                          <td className="px-4 py-3">{o.outsideDiameterInches}</td>
                          <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{o.series}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-gray-50 text-xs text-gray-500">
                  <p>Click any row for full details. Data based on AS568B standard. Always verify with manufacturer specifications.</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab: Unit Converter */}
          {activeTab === 'converter' && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                  <ArrowLeftRight className="w-6 h-6 text-brand-orange" />
                  O-Ring Inch ⟷ Millimeter Converter
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Convert O-ring dimensions between inches and millimeters for AS568 and ISO 3601 compatibility.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Inches</label>
                    <input
                      type="number"
                      step="0.001"
                      value={inchValue}
                      onChange={(e) => { setInchValue(e.target.value); setConverterSource('inches'); }}
                      placeholder="Enter inches"
                      className="w-full px-4 py-4 text-xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>
                  <div className="flex justify-center">
                    <ArrowLeftRight className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Millimeters</label>
                    <input
                      type="number"
                      step="0.01"
                      value={mmValue}
                      onChange={(e) => { setMmValue(e.target.value); setConverterSource('mm'); }}
                      placeholder="Enter mm"
                      className="w-full px-4 py-4 text-xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                {/* Quick Reference */}
                <div className="mt-8">
                  <h4 className="font-bold text-brand-navy mb-4">AS568 Series Cross-Section Reference</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {oRingSeries.map(series => (
                      <div key={series.series} className="bg-gray-50 rounded-lg p-3">
                        <p className="font-bold text-brand-navy">{series.series}</p>
                        <p className="text-sm text-gray-600">{series.crossSectionInches}" = {series.crossSectionMm}mm</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <h4 className="font-bold text-blue-800 text-sm mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Conversion Formula
                  </h4>
                  <div className="text-xs text-blue-700 space-y-1 font-mono">
                    <p>Inches × 25.4 = Millimeters</p>
                    <p>Millimeters ÷ 25.4 = Inches</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Series Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-navy/10 text-brand-navy font-semibold text-sm rounded-full mb-4">AS568 SERIES</span>
            <h2 className="text-2xl md:text-4xl font-heading font-black text-brand-navy mb-4">
              O-Ring Cross-Section Series Chart
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              AS568 O-rings are organized by cross-section (cord diameter). Each series covers a range of inside diameters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {oRingSeries.map(series => (
              <div key={series.series} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-brand-orange transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black text-brand-navy">{series.series}</h3>
                  <span className="px-3 py-1 bg-brand-orange text-white rounded-full text-sm font-bold">
                    {series.crossSectionMm}mm CS
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{series.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cross-Section:</span>
                    <span className="font-semibold">{series.crossSectionInches}" ({series.crossSectionMm}mm)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Dash Range:</span>
                    <span className="font-semibold">{series.dashRange}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">Common uses:</p>
                  <div className="flex flex-wrap gap-1">
                    {series.applications.slice(0, 3).map((app, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white text-gray-600 rounded text-xs">{app}</span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => { setSelectedSeries(series.series); setActiveTab('chart'); }}
                  className="mt-4 w-full bg-brand-navy hover:bg-brand-blue text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
                >
                  View {series.series} Sizes →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Measure Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 font-semibold text-sm rounded-full mb-4">MEASUREMENT GUIDE</span>
              <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-navy mb-6">
                How to Measure O-Ring Size
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Accurate measurement is critical for finding the correct AS568 dash number. Always measure both inside diameter (ID) and cross-section (CS).
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-brand-navy">Lay O-ring flat</p>
                    <p className="text-gray-600 text-sm">Place on a flat surface without stretching or distorting</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-brand-navy">Measure inside diameter (ID)</p>
                    <p className="text-gray-600 text-sm">Measure across the inner opening with calipers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-brand-navy">Measure cross-section (CS)</p>
                    <p className="text-gray-600 text-sm">Gently compress to measure cord thickness</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <div>
                    <p className="font-semibold text-brand-navy">Find dash number</p>
                    <p className="text-gray-600 text-sm">Match both measurements to AS568 chart</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-bold text-brand-navy mb-6">Measurement Tips</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Use digital calipers for accurate measurements (±0.001")</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Measure multiple points and average for worn O-rings</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Cross-section determines the series (0XX, 1XX, 2XX, etc.)</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Worn O-rings may measure smaller than nominal—verify against AS568 standard dimensions</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> O-ring outside diameter (OD) = ID + (2 × CS). Use ID and CS for identification, not OD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Distinction Section */}
      <section className="py-12 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">O-Ring Dash ≠ Hose Dash</h2>
          <p className="text-gray-300 mb-6">
            O-ring dash numbers follow AS568 standard and are NOT the same as hydraulic hose dash sizing. 
            Hose dash sizes represent inside diameter in sixteenths of an inch (e.g., -8 = 1/2"). 
            O-ring dash numbers are arbitrary reference numbers that identify specific ID and cross-section combinations.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-bold text-brand-orange">Hose Dash -8</p>
              <p className="text-sm">= 0.5" ID ({`8÷16`})</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-bold text-brand-orange">O-Ring Dash 214</p>
              <p className="text-sm">= 0.984" ID × 0.139" CS</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-navy mb-4 text-center">
            O-Ring Sizing FAQs
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Common questions about AS568 O-ring dash numbers, size conversion, and hydraulic O-ring sizing.
          </p>
          <div className="space-y-4 max-w-4xl mx-auto">
            {oRingFaqData.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:ring-2 focus:ring-brand-orange focus:ring-inset hover:bg-gray-100 transition-colors"
                  aria-expanded={expandedFaq === idx}
                >
                  <span className="font-bold text-brand-navy text-lg pr-4">{faq.question}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="text-brand-orange flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-orange py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-4">
            Need O-Rings or Hydraulic Seals?
          </h2>
          <p className="text-white/90 text-lg mb-6">
            We stock common AS568 O-ring sizes and can source specialty seals for your hydraulic equipment.
          </p>
          <a
            href="tel:+18594624673"
            className="inline-flex items-center gap-2 bg-white text-brand-orange hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            859-462-4673
          </a>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-brand-navy mb-6">Related Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/tools/hydraulic-hose-dash-size-calculator" 
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-brand-navy transition-colors"
            >
              <Calculator className="w-4 h-4" />
              Hose Dash Size Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            <strong>Disclaimer:</strong> This O-ring dash size chart reference is based on AS568 (Aerospace Standard 568) dimensional standards. 
            Data sourced from publicly available SAE and Parker O-Ring Handbook specifications. 
            Tolerances vary by application class and manufacturer. Always verify manufacturer specifications and tolerances when ordering O-rings for critical applications. 
            Frontline Hydraulic Services is not liable for O-ring selection errors. This tool is for reference purposes only.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ORingCalculator;
