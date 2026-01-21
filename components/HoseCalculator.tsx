import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Search, Phone, MapPin, ChevronDown, ChevronUp, Calculator, 
  ArrowRight, CheckCircle2, Info, AlertTriangle, Download,
  Copy, Check, RefreshCw, Ruler, Gauge, Zap, Settings,
  ArrowLeftRight, Filter, HelpCircle
} from 'lucide-react';
import { 
  dashSizeData, 
  hoseTypes,
  equipmentTypes,
  conversions, 
  recommendDashSize,
  faqData,
  HoseDashSize,
  getDashSizeByNumber
} from '../data/hydraulicHoseData';

// Analytics helper
const trackEvent = (eventName: string, params: Record<string, string>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
  console.log('Track:', eventName, params);
};

const HoseCalculator: React.FC = () => {
  // Calculator states
  const [selectedDashSize, setSelectedDashSize] = useState<number | null>(8);
  const [inputInches, setInputInches] = useState<string>('');
  const [inputMm, setInputMm] = useState<string>('');
  const [converterMode, setConverterMode] = useState<'dash-to-size' | 'size-to-dash'>('dash-to-size');
  const [reverseLookupInches, setReverseLookupInches] = useState<string>('');
  const [reverseLookupResult, setReverseLookupResult] = useState<{ exact: typeof dashSizeData[0] | null; closest: typeof dashSizeData[0] | null } | null>(null);
  
  // Pressure converter states
  const [psiValue, setPsiValue] = useState<string>('3000');
  const [barValue, setBarValue] = useState<string>('');
  const [mpaValue, setMpaValue] = useState<string>('');
  const [pressureSource, setPressureSource] = useState<'psi' | 'bar' | 'mpa'>('psi');
  
  // Length converter states
  const [lengthInches, setLengthInches] = useState<string>('');
  const [lengthMm, setLengthMm] = useState<string>('');
  const [lengthSource, setLengthSource] = useState<'inches' | 'mm'>('inches');
  
  // Hose selection wizard states
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardEquipment, setWizardEquipment] = useState<string>('');
  const [wizardGpm, setWizardGpm] = useState<string>('');
  const [wizardPsi, setWizardPsi] = useState<string>('');
  const [wizardResult, setWizardResult] = useState<ReturnType<typeof recommendDashSize> | null>(null);
  
  // UI states
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'converter' | 'pressure' | 'wizard' | 'chart'>('converter');
  const [chartFilter, setChartFilter] = useState<string>('all');
  const [chartSort, setChartSort] = useState<'dashSize' | 'diameter' | 'flow'>('dashSize');

  // Get selected dash size data
  const selectedHoseData = useMemo(() => {
    if (selectedDashSize === null) return null;
    return getDashSizeByNumber(selectedDashSize);
  }, [selectedDashSize]);

  // Reverse lookup: find dash size from inches
  useEffect(() => {
    if (reverseLookupInches && converterMode === 'size-to-dash') {
      const inches = parseFloat(reverseLookupInches);
      if (!isNaN(inches) && inches > 0) {
        // Find exact match
        const exact = dashSizeData.find(d => Math.abs(d.insideDiameterInches - inches) < 0.001);
        // Find closest match
        const closest = dashSizeData.reduce((prev, curr) => 
          Math.abs(curr.insideDiameterInches - inches) < Math.abs(prev.insideDiameterInches - inches) ? curr : prev
        );
        setReverseLookupResult({ exact: exact || null, closest });
        trackEvent('reverse_lookup', { inches: reverseLookupInches, result: closest.dashSize });
      } else {
        setReverseLookupResult(null);
      }
    } else {
      setReverseLookupResult(null);
    }
  }, [reverseLookupInches, converterMode]);

  // Pressure converter effect
  useEffect(() => {
    if (pressureSource === 'psi' && psiValue) {
      const psi = parseFloat(psiValue);
      if (!isNaN(psi)) {
        setBarValue(conversions.psiToBar(psi).toFixed(2));
        setMpaValue(conversions.psiToMpa(psi).toFixed(3));
      }
    } else if (pressureSource === 'bar' && barValue) {
      const bar = parseFloat(barValue);
      if (!isNaN(bar)) {
        setPsiValue(conversions.barToPsi(bar).toFixed(0));
        setMpaValue(conversions.barToMpa(bar).toFixed(3));
      }
    } else if (pressureSource === 'mpa' && mpaValue) {
      const mpa = parseFloat(mpaValue);
      if (!isNaN(mpa)) {
        setPsiValue(conversions.mpaToPsi(mpa).toFixed(0));
        setBarValue(conversions.mpaToBar(mpa).toFixed(2));
      }
    }
  }, [psiValue, barValue, mpaValue, pressureSource]);

  // Length converter effect
  useEffect(() => {
    if (lengthSource === 'inches' && lengthInches) {
      const inches = parseFloat(lengthInches);
      if (!isNaN(inches)) {
        setLengthMm(conversions.inchesToMm(inches).toFixed(2));
      }
    } else if (lengthSource === 'mm' && lengthMm) {
      const mm = parseFloat(lengthMm);
      if (!isNaN(mm)) {
        setLengthInches(conversions.mmToInches(mm).toFixed(4));
      }
    }
  }, [lengthInches, lengthMm, lengthSource]);

  // Input conversion effects
  useEffect(() => {
    if (inputInches) {
      const inches = parseFloat(inputInches);
      if (!isNaN(inches)) {
        setInputMm(conversions.inchesToMm(inches).toFixed(2));
        // Find closest dash size
        const dashNum = Math.round(inches * 16);
        if (dashNum >= 2 && dashNum <= 48) {
          setSelectedDashSize(dashNum);
        }
      }
    }
  }, [inputInches]);

  useEffect(() => {
    if (inputMm) {
      const mm = parseFloat(inputMm);
      if (!isNaN(mm)) {
        const inches = conversions.mmToInches(mm);
        setInputInches(inches.toFixed(4));
        const dashNum = Math.round(inches * 16);
        if (dashNum >= 2 && dashNum <= 48) {
          setSelectedDashSize(dashNum);
        }
      }
    }
  }, [inputMm]);

  // Wizard calculation
  const calculateWizardResult = useCallback(() => {
    const gpm = parseFloat(wizardGpm);
    const psi = parseFloat(wizardPsi);
    
    if (!isNaN(gpm) && !isNaN(psi) && gpm > 0 && psi > 0) {
      const result = recommendDashSize(gpm, psi);
      setWizardResult(result);
      trackEvent('hose_wizard_complete', { 
        gpm: wizardGpm, 
        psi: wizardPsi, 
        equipment: wizardEquipment,
        recommended: result.recommended?.dashSize || 'none'
      });
    }
  }, [wizardGpm, wizardPsi, wizardEquipment]);

  // Copy to clipboard
  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
      trackEvent('copy_result', { field, value: text });
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Handle PDF download
  const handlePdfDownload = () => {
    trackEvent('pdf_download', { page: 'hose_calculator' });
    alert('PDF download feature coming soon! Call 859-462-4673 for a printed reference chart.');
  };

  // Handle CTA click
  const handleCtaClick = (type: string) => {
    trackEvent('cta_click', { cta_type: type, page: 'hose_calculator' });
  };

  // Filter and sort chart data
  const filteredChartData = useMemo(() => {
    let data = [...dashSizeData];
    
    // Filter
    if (chartFilter !== 'all') {
      if (chartFilter === 'small') {
        data = data.filter(d => d.dashNumber <= 6);
      } else if (chartFilter === 'medium') {
        data = data.filter(d => d.dashNumber >= 8 && d.dashNumber <= 16);
      } else if (chartFilter === 'large') {
        data = data.filter(d => d.dashNumber >= 20);
      }
    }
    
    // Sort
    if (chartSort === 'diameter') {
      data.sort((a, b) => a.insideDiameterInches - b.insideDiameterInches);
    } else if (chartSort === 'flow') {
      data.sort((a, b) => a.flowRateGpm.max - b.flowRateGpm.max);
    }
    
    return data;
  }, [chartFilter, chartSort]);

  // Schema markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Hydraulic Hose Dash Size Calculator",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free hydraulic hose dash size calculator and conversion tool. Convert dash sizes to inches/mm, calculate flow rates, and find the right hose size.",
    "url": "https://emergencyhydraulics.com/tools/hydraulic-hose-dash-size-calculator",
    "provider": {
      "@type": "Organization",
      "name": "Frontline Hydraulic Services",
      "telephone": "+1-859-462-4673"
    },
    "featureList": [
      "Dash size to inch/mm conversion",
      "PSI to Bar to MPa converter",
      "Hose sizing wizard",
      "Complete reference chart",
      "Flow rate calculator",
      "Mobile-responsive design"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
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
        <title>Hydraulic Hose Dash Size Calculator | Free PSI to Bar Converter</title>
        <meta name="description" content="Free hydraulic hose dash size calculator. Convert dash sizes to inches/mm instantly. Includes PSI to Bar converter and complete reference chart. Mobile-friendly tool." />
        <meta name="keywords" content="hydraulic hose dash size, hydraulic fitting size chart, hydraulic parts, PSI to Bar converter, hose size calculator, dash size chart, hydraulic hose sizing" />
        <link rel="canonical" href="https://emergencyhydraulics.com/tools/hydraulic-hose-dash-size-calculator" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hydraulic Hose Dash Size Calculator | Free Conversion Tool" />
        <meta property="og:description" content="Convert dash sizes to inches/mm instantly. Free PSI to Bar converter and complete hydraulic hose reference chart." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emergencyhydraulics.com/tools/hydraulic-hose-dash-size-calculator" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hydraulic Hose Dash Size Calculator" />
        <meta name="twitter:description" content="Free tool to convert hydraulic hose dash sizes. PSI to Bar converter included." />
        
        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative sm:h-[450px] flex items-center justify-center overflow-hidden bg-brand-navy border-b-8 border-brand-orange pt-12 md:pt-0 pb-8 sm:pb-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp" 
            alt="Hydraulic hoses and fittings" 
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
            <span className="text-white">Hose Dash Size Calculator</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 tracking-wide leading-tight">
            Hydraulic Hose <span className="text-brand-orange">Dash Size</span> Calculator
          </h1>
          <p className="text-normal sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
            Convert dash sizes to inches/mm instantly. Includes PSI to Bar converter, hose sizing wizard, 
            and complete reference chart. Free, fast, and mobile-friendly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+18594624673" 
              onClick={() => handleCtaClick('hero_phone')}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white sm:text-lg font-black px-8 py-4 rounded shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 fill-current" />
              Need Hose? Call 859-462-4673
            </a>
            <button 
              onClick={handlePdfDownload}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy text-lg font-bold px-8 py-4 rounded transition-colors"
            >
              <Download className="w-5 h-5" />
              Download PDF Chart
            </button>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            <button
              onClick={() => { setActiveTab('converter'); trackEvent('tab_switch', { tab: 'converter' }); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === 'converter' ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Calculator className="w-4 h-4" />
              Dash Size Converter
            </button>
            <button
              onClick={() => { setActiveTab('pressure'); trackEvent('tab_switch', { tab: 'pressure' }); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === 'pressure' ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Gauge className="w-4 h-4" />
              PSI / Bar Converter
            </button>
            <button
              onClick={() => { setActiveTab('wizard'); trackEvent('tab_switch', { tab: 'wizard' }); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === 'wizard' ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Settings className="w-4 h-4" />
              Sizing Wizard
            </button>
            <button
              onClick={() => { setActiveTab('chart'); trackEvent('tab_switch', { tab: 'chart' }); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === 'chart' ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Ruler className="w-4 h-4" />
              Reference Chart
            </button>
          </div>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab: Dash Size Converter */}
          {activeTab === 'converter' && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Panel */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-brand-orange" />
                  Dash Size Converter
                </h2>
                
                {/* Converter Mode Toggle */}
                <div className="mb-6 p-1 bg-gray-100 rounded-lg inline-flex w-full">
                  <button
                    onClick={() => { setConverterMode('dash-to-size'); trackEvent('converter_mode', { mode: 'dash-to-size' }); }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-bold transition-all ${
                      converterMode === 'dash-to-size' 
                        ? 'bg-white text-brand-navy shadow-sm' 
                        : 'text-gray-600 hover:text-brand-navy'
                    }`}
                  >
                    <span className="hidden sm:inline">○</span> Dash Size → Inches
                  </button>
                  <button
                    onClick={() => { setConverterMode('size-to-dash'); trackEvent('converter_mode', { mode: 'size-to-dash' }); }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-bold transition-all ${
                      converterMode === 'size-to-dash' 
                        ? 'bg-white text-brand-navy shadow-sm' 
                        : 'text-gray-600 hover:text-brand-navy'
                    }`}
                  >
                    <span className="hidden sm:inline">●</span> Inches → Dash Size
                  </button>
                </div>

                {/* Mode: Dash to Size (Original) */}
                {converterMode === 'dash-to-size' && (
                  <>
                    {/* Quick Select Buttons */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Quick Select Dash Size</label>
                      <div className="flex flex-wrap gap-2">
                        {dashSizeData.map(size => (
                          <button
                            key={size.dashNumber}
                            onClick={() => {
                              setSelectedDashSize(size.dashNumber);
                              setInputInches(size.insideDiameterInches.toString());
                              trackEvent('dash_size_selected', { size: size.dashSize });
                            }}
                            className={`px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                              selectedDashSize === size.dashNumber
                                ? 'bg-brand-navy text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {size.dashSize}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Manual Input */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Inside Diameter (inches)</label>
                        <input
                          type="number"
                          step="0.0625"
                          value={inputInches}
                          onChange={(e) => { setInputInches(e.target.value); setInputMm(''); }}
                          placeholder="e.g., 0.5"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Inside Diameter (mm)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={inputMm}
                          onChange={(e) => { setInputMm(e.target.value); setInputInches(''); }}
                          placeholder="e.g., 12.7"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Mode: Size to Dash (Reverse Lookup) */}
                {converterMode === 'size-to-dash' && (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Enter your hose inside diameter to find the dash size
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.0625"
                        value={reverseLookupInches}
                        onChange={(e) => setReverseLookupInches(e.target.value)}
                        placeholder="e.g., 0.5 or 0.75"
                        className="w-full px-4 py-4 text-xl font-bold border-2 border-brand-orange rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">inches</span>
                    </div>
                    
                    {/* Reverse Lookup Result */}
                    {reverseLookupResult && (
                      <div className="mt-4 space-y-3">
                        {reverseLookupResult.exact ? (
                          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              <span className="font-bold text-green-800">Exact Match Found!</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-3xl font-black text-brand-navy">{reverseLookupResult.exact.dashSize}</p>
                                <p className="text-sm text-gray-600">{reverseLookupResult.exact.insideDiameterFraction} = {reverseLookupResult.exact.insideDiameterMm} mm</p>
                              </div>
                              <button
                                onClick={() => {
                                  setSelectedDashSize(reverseLookupResult.exact!.dashNumber);
                                  setConverterMode('dash-to-size');
                                  setInputInches(reverseLookupResult.exact!.insideDiameterInches.toString());
                                }}
                                className="bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
                              >
                                View Full Details →
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <AlertTriangle className="w-5 h-5 text-yellow-600" />
                              <span className="font-bold text-yellow-800">No exact match - Closest size:</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-3xl font-black text-brand-navy">{reverseLookupResult.closest.dashSize}</p>
                                <p className="text-sm text-gray-600">
                                  {reverseLookupResult.closest.insideDiameterFraction} ({reverseLookupResult.closest.insideDiameterInches}") 
                                  <span className="text-yellow-700 ml-1">
                                    (Δ {Math.abs(parseFloat(reverseLookupInches) - reverseLookupResult.closest.insideDiameterInches).toFixed(4)}")
                                  </span>
                                </p>
                              </div>
                              <button
                                onClick={() => {
                                  setSelectedDashSize(reverseLookupResult.closest.dashNumber);
                                  setConverterMode('dash-to-size');
                                  setInputInches(reverseLookupResult.closest.insideDiameterInches.toString());
                                }}
                                className="bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
                              >
                                View Full Details →
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Contextual CTA for reverse lookup */}
                        <div className="bg-brand-navy rounded-lg p-4 text-center">
                          <p className="text-white text-sm mb-2">Need a <strong>{reverseLookupResult.closest.dashSize}</strong> hose fabricated?</p>
                          <a
                            href="tel:+18594624673"
                            onClick={() => handleCtaClick('reverse_lookup_cta')}
                            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm"
                          >
                            <Phone className="w-4 h-4" />
                            Call 859-462-4673 for Same-Day Service
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Quick common sizes hint */}
                    <div className="mt-4 text-sm text-gray-500">
                      <p className="font-medium mb-2">Common sizes to try:</p>
                      <div className="flex flex-wrap gap-2">
                        {[0.25, 0.375, 0.5, 0.625, 0.75, 1].map(size => (
                          <button
                            key={size}
                            onClick={() => setReverseLookupInches(size.toString())}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-brand-navy font-medium transition-colors"
                          >
                            {size}"
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Formula Display */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-blue-800 text-sm mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Conversion Formulas
                  </h4>
                  <div className="text-xs text-blue-700 space-y-1 font-mono">
                    <p>Dash ÷ 16 = Inside Diameter (inches)</p>
                    <p>Inches × 16 = Dash Size</p>
                    <p>Inches × 25.4 = Millimeters</p>
                  </div>
                </div>

                {/* Inch to MM Converter */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                    <ArrowLeftRight className="w-5 h-5" />
                    Inch ⟷ Millimeter Converter
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Inches</label>
                      <input
                        type="number"
                        step="0.001"
                        value={lengthInches}
                        onChange={(e) => { setLengthInches(e.target.value); setLengthSource('inches'); }}
                        placeholder="Enter inches"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Millimeters</label>
                      <input
                        type="number"
                        step="0.01"
                        value={lengthMm}
                        onChange={(e) => { setLengthMm(e.target.value); setLengthSource('mm'); }}
                        placeholder="Enter mm"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Result Panel */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {selectedHoseData ? (
                  <>
                    <div className="bg-gradient-to-r from-brand-navy to-brand-blue p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-300 text-sm font-medium">Selected Size</p>
                          <h3 className="text-4xl font-black text-white">{selectedHoseData.dashSize}</h3>
                        </div>
                        <button
                          onClick={() => copyToClipboard(selectedHoseData.dashSize, 'dashSize')}
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                          title="Copy dash size"
                        >
                          {copiedField === 'dashSize' ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-white" />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      {/* Diameter Display */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Inside Diameter</p>
                          <p className="text-2xl font-black text-brand-navy">{selectedHoseData.insideDiameterFraction}</p>
                          <p className="text-sm text-gray-600">{selectedHoseData.insideDiameterInches}" / {selectedHoseData.insideDiameterMm} mm</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Outside Diameter</p>
                          <p className="text-lg font-bold text-brand-navy">{selectedHoseData.outsideDiameterInches}"</p>
                          <p className="text-sm text-gray-600">{selectedHoseData.outsideDiameterMm} mm</p>
                        </div>
                      </div>

                      {/* Flow & Pressure */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <p className="text-xs text-blue-600 uppercase font-semibold mb-1">Flow Rate</p>
                          <p className="text-xl font-bold text-blue-800">{selectedHoseData.flowRateGpm.min}-{selectedHoseData.flowRateGpm.max}</p>
                          <p className="text-sm text-blue-600">GPM @ 20 ft/sec</p>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                          <p className="text-xs text-orange-600 uppercase font-semibold mb-1">Max PSI (2-Wire)</p>
                          <p className="text-xl font-bold text-orange-800">{selectedHoseData.maxPsi2Wire.toLocaleString()}</p>
                          <p className="text-sm text-orange-600">{conversions.psiToBar(selectedHoseData.maxPsi2Wire).toFixed(0)} Bar</p>
                        </div>
                      </div>

                      {/* Pressure by Hose Type */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-3">Max Pressure by Hose Type</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                          <div className="bg-white rounded p-2 border border-gray-200">
                            <p className="text-xs text-gray-500">1-Wire</p>
                            <p className="font-bold text-sm">{selectedHoseData.maxPsi1Wire || 'N/A'}</p>
                          </div>
                          <div className="bg-white rounded p-2 border border-gray-200">
                            <p className="text-xs text-gray-500">2-Wire</p>
                            <p className="font-bold text-sm">{selectedHoseData.maxPsi2Wire}</p>
                          </div>
                          <div className="bg-white rounded p-2 border border-gray-200">
                            <p className="text-xs text-gray-500">4-Spiral</p>
                            <p className="font-bold text-sm">{selectedHoseData.maxPsi4Wire || 'N/A'}</p>
                          </div>
                          <div className="bg-white rounded p-2 border border-gray-200">
                            <p className="text-xs text-gray-500">6-Spiral</p>
                            <p className="font-bold text-sm">{selectedHoseData.maxPsiSpiral || 'N/A'}</p>
                          </div>
                        </div>
                      </div>

                      {/* Applications */}
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Common Applications</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedHoseData.commonApplications.map((app, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Contextual CTA */}
                      <div className="bg-gradient-to-r from-brand-navy to-brand-blue rounded-xl p-5 border-2 border-brand-orange/30 shadow-lg">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-white text-lg">Your Result: {selectedHoseData.dashSize} Hose</p>
                            <p className="text-gray-300 text-sm">{selectedHoseData.insideDiameterFraction} ID • {selectedHoseData.insideDiameterMm}mm • {selectedHoseData.maxPsi2Wire.toLocaleString()} PSI max</p>
                          </div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 mb-4">
                          <p className="text-white/90 text-sm">Need this hose fabricated? We offer <strong>same-day mobile service</strong> in Bakersfield, Wichita & Lubbock.</p>
                        </div>
                        <a
                          href="tel:+18594624673"
                          onClick={() => handleCtaClick('result_phone')}
                          className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg"
                        >
                          <Phone className="w-5 h-5 fill-current" />
                          Call 859-462-4673 Now
                        </a>
                        <p className="text-center text-white/60 text-xs mt-2">Average response: Under 60 minutes</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="p-8 text-center">
                    <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Select a dash size or enter a diameter to see details</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab: Pressure Converter */}
          {activeTab === 'pressure' && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                  <Gauge className="w-6 h-6 text-brand-orange" />
                  PSI ⟷ Bar ⟷ MPa Converter
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Enter a value in any field to convert between pressure units instantly.
                </p>

                <div className="space-y-4">
                  {/* PSI Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">PSI (Pounds per Square Inch)</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={psiValue}
                        onChange={(e) => { setPsiValue(e.target.value); setPressureSource('psi'); }}
                        placeholder="Enter PSI"
                        className="w-full px-4 py-4 text-xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">PSI</span>
                    </div>
                  </div>

                  {/* Bar Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Bar</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={barValue}
                        onChange={(e) => { setBarValue(e.target.value); setPressureSource('bar'); }}
                        placeholder="Enter Bar"
                        className="w-full px-4 py-4 text-xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">Bar</span>
                    </div>
                  </div>

                  {/* MPa Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">MPa (Megapascals)</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={mpaValue}
                        onChange={(e) => { setMpaValue(e.target.value); setPressureSource('mpa'); }}
                        placeholder="Enter MPa"
                        className="w-full px-4 py-4 text-xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">MPa</span>
                    </div>
                  </div>
                </div>

                {/* Formula Display */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <h4 className="font-bold text-blue-800 text-sm mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Conversion Formulas
                  </h4>
                  <div className="text-xs text-blue-700 space-y-1 font-mono">
                    <p>PSI ÷ 14.504 = Bar</p>
                    <p>Bar ÷ 10 = MPa</p>
                    <p>PSI ÷ 145.04 = MPa</p>
                  </div>
                </div>

                {/* Quick Reference */}
                <div className="mt-6">
                  <h4 className="font-bold text-brand-navy mb-3">Common Pressure Values</h4>
                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="bg-gray-100 rounded p-2 font-semibold">PSI</div>
                    <div className="bg-gray-100 rounded p-2 font-semibold">Bar</div>
                    <div className="bg-gray-100 rounded p-2 font-semibold">MPa</div>
                    {[1000, 2000, 3000, 4000, 5000, 6000].map(psi => (
                      <React.Fragment key={psi}>
                        <div className="py-2 border-b border-gray-100">{psi.toLocaleString()}</div>
                        <div className="py-2 border-b border-gray-100">{conversions.psiToBar(psi).toFixed(0)}</div>
                        <div className="py-2 border-b border-gray-100">{conversions.psiToMpa(psi).toFixed(1)}</div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab: Sizing Wizard */}
          {activeTab === 'wizard' && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-brand-navy mb-2 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-brand-orange" />
                  Hose Sizing Wizard
                </h2>
                <p className="text-gray-600 mb-6">Answer a few questions to get the recommended hose size for your application.</p>

                {/* Wizard Steps */}
                <div className="space-y-6">
                  {/* Step 1: Equipment Type */}
                  <div className={`border rounded-lg p-4 ${wizardStep >= 1 ? 'border-brand-orange bg-orange-50/50' : 'border-gray-200'}`}>
                    <h3 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-brand-orange text-white rounded-full text-sm flex items-center justify-center">1</span>
                      What type of equipment?
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {equipmentTypes.map(eq => (
                        <button
                          key={eq.id}
                          onClick={() => { 
                            setWizardEquipment(eq.id); 
                            setWizardStep(2);
                            // Pre-fill typical values
                            setWizardGpm(((eq.flowRangeGpm.min + eq.flowRangeGpm.max) / 2).toString());
                            setWizardPsi(eq.typicalPressurePsi.toString());
                          }}
                          className={`text-left p-3 rounded-lg border transition-all ${
                            wizardEquipment === eq.id 
                              ? 'border-brand-orange bg-white shadow-md' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <p className="font-semibold text-brand-navy text-sm">{eq.name}</p>
                          <p className="text-xs text-gray-500">{eq.typicalDashSizes.join(', ')} typical</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Flow Rate */}
                  <div className={`border rounded-lg p-4 ${wizardStep >= 2 ? 'border-brand-orange bg-orange-50/50' : 'border-gray-200 opacity-50'}`}>
                    <h3 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full text-sm flex items-center justify-center ${wizardStep >= 2 ? 'bg-brand-orange text-white' : 'bg-gray-200 text-gray-500'}`}>2</span>
                      What's your flow rate? (GPM)
                    </h3>
                    {wizardStep >= 2 && (
                      <div>
                        <input
                          type="number"
                          value={wizardGpm}
                          onChange={(e) => { setWizardGpm(e.target.value); setWizardStep(3); }}
                          placeholder="Enter GPM (gallons per minute)"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          💡 Tip: Check your pump's flow rating or calculate from cylinder speed and volume.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Step 3: Pressure */}
                  <div className={`border rounded-lg p-4 ${wizardStep >= 3 ? 'border-brand-orange bg-orange-50/50' : 'border-gray-200 opacity-50'}`}>
                    <h3 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full text-sm flex items-center justify-center ${wizardStep >= 3 ? 'bg-brand-orange text-white' : 'bg-gray-200 text-gray-500'}`}>3</span>
                      What's your working pressure? (PSI)
                    </h3>
                    {wizardStep >= 3 && (
                      <div>
                        <input
                          type="number"
                          value={wizardPsi}
                          onChange={(e) => setWizardPsi(e.target.value)}
                          placeholder="Enter PSI"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          💡 Tip: Use your system's relief valve setting or max operating pressure.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Calculate Button */}
                  {wizardStep >= 3 && wizardGpm && wizardPsi && (
                    <button
                      onClick={calculateWizardResult}
                      className="w-full bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Calculator className="w-5 h-5" />
                      Calculate Recommended Hose Size
                    </button>
                  )}

                  {/* Results */}
                  {wizardResult && (
                    <div className="border-2 border-green-500 rounded-xl p-6 bg-green-50">
                      <h3 className="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6" />
                        Recommended Hose Size
                      </h3>
                      
                      {wizardResult.recommended ? (
                        <>
                          <div className="bg-white rounded-lg p-4 mb-4">
                            <p className="text-4xl font-black text-brand-navy mb-2">{wizardResult.recommended.dashSize}</p>
                            <p className="text-gray-600">
                              {wizardResult.recommended.insideDiameterFraction} ({wizardResult.recommended.insideDiameterMm} mm) Inside Diameter
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                              Flow Velocity: <strong>{wizardResult.velocity.toFixed(1)} ft/sec</strong> (recommended: 15-20 ft/sec)
                            </p>
                          </div>

                          {/* Warnings */}
                          {wizardResult.warnings.length > 0 && (
                            <div className="space-y-2 mb-4">
                              {wizardResult.warnings.map((warning, idx) => (
                                <div key={idx} className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 text-sm text-yellow-800">
                                  {warning}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Alternatives */}
                          {wizardResult.alternatives.length > 0 && (
                            <div className="mb-4">
                              <p className="text-sm font-semibold text-gray-700 mb-2">Alternative Sizes:</p>
                              <div className="flex gap-2">
                                {wizardResult.alternatives.map(alt => (
                                  <span key={alt.dashNumber} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                                    {alt.dashSize}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* CTA */}
                          <div className="bg-brand-navy rounded-lg p-4 text-center">
                            <p className="text-white mb-3">Ready to order your {wizardResult.recommended.dashSize} hose assembly?</p>
                            <a
                              href="tel:+18594624673"
                              onClick={() => handleCtaClick('wizard_result_phone')}
                              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-3 px-6 rounded-lg transition-colors"
                            >
                              <Phone className="w-5 h-5" />
                              Call 859-462-4673
                            </a>
                          </div>
                        </>
                      ) : (
                        <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                          {wizardResult.warnings.map((warning, idx) => (
                            <p key={idx} className="text-red-800">{warning}</p>
                          ))}
                        </div>
                      )}

                      <button
                        onClick={() => { setWizardStep(1); setWizardResult(null); setWizardEquipment(''); setWizardGpm(''); setWizardPsi(''); }}
                        className="mt-4 text-gray-600 hover:text-brand-navy flex items-center gap-2 text-sm"
                      >
                        <RefreshCw className="w-4 h-4" />
                        Start Over
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tab: Reference Chart */}
          {activeTab === 'chart' && (
            <div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                    <Ruler className="w-6 h-6 text-brand-orange" />
                    Hydraulic Hose Size Chart: All Common Dash Sizes
                  </h2>
                  
                  {/* Filters */}
                  <div className="flex flex-wrap gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Filter by Size</label>
                      <select
                        value={chartFilter}
                        onChange={(e) => setChartFilter(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange"
                      >
                        <option value="all">All Sizes</option>
                        <option value="small">Small (-2 to -6)</option>
                        <option value="medium">Medium (-8 to -16)</option>
                        <option value="large">Large (-20 to -48)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Sort by</label>
                      <select
                        value={chartSort}
                        onChange={(e) => setChartSort(e.target.value as any)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange"
                      >
                        <option value="dashSize">Dash Size</option>
                        <option value="diameter">Diameter</option>
                        <option value="flow">Flow Rate</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy">Dash Size</th>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy">ID (in)</th>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy">ID (mm)</th>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy">OD Range</th>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy">Flow (GPM)</th>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy">Max PSI (2W)</th>
                        <th className="px-4 py-3 text-left font-bold text-brand-navy hidden lg:table-cell">Common Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredChartData.map((size, idx) => (
                        <tr 
                          key={size.dashNumber} 
                          className={`border-b border-gray-100 hover:bg-orange-50 cursor-pointer transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                          onClick={() => { setSelectedDashSize(size.dashNumber); setActiveTab('converter'); }}
                        >
                          <td className="px-4 py-3 font-bold text-brand-navy">{size.dashSize}</td>
                          <td className="px-4 py-3">{size.insideDiameterFraction}</td>
                          <td className="px-4 py-3">{size.insideDiameterMm}</td>
                          <td className="px-4 py-3 text-gray-600">{size.outsideDiameterInches}"</td>
                          <td className="px-4 py-3">{size.flowRateGpm.min}-{size.flowRateGpm.max}</td>
                          <td className="px-4 py-3 font-semibold">{size.maxPsi2Wire.toLocaleString()}</td>
                          <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{size.commonApplications[0]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Table Note */}
                <div className="p-4 bg-gray-50 text-xs text-gray-500">
                  <p>Click any row to see full details. Max PSI shown for 2-wire braid hose (SAE 100R2). Actual ratings vary by manufacturer and hose type.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Visual Size Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-navy/10 text-brand-navy font-semibold text-sm rounded-full mb-4">VISUAL GUIDE</span>
            <h2 className="text-2xl md:text-4xl font-heading font-black text-brand-navy mb-4">
              Hose Size Visual Comparison
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the relative sizes of common hydraulic hoses at a glance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-end gap-6">
            {[4, 6, 8, 10, 12, 16].map(dashNum => {
              const size = getDashSizeByNumber(dashNum);
              if (!size) return null;
              const visualDiameter = Math.max(size.insideDiameterInches * 80, 20);
              const isSelected = selectedDashSize === dashNum;
              return (
                <button 
                  key={dashNum} 
                  className={`text-center group cursor-pointer transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 rounded-lg p-2 ${
                    isSelected ? 'ring-2 ring-brand-orange ring-offset-2 bg-orange-50' : ''
                  }`}
                  onClick={() => {
                    setSelectedDashSize(dashNum);
                    setInputInches(size.insideDiameterInches.toString());
                    setActiveTab('converter');
                    setConverterMode('dash-to-size');
                    trackEvent('visual_size_click', { size: size.dashSize });
                    // Scroll to calculator
                    document.querySelector('section.py-12')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label={`Select ${size.dashSize} hose - ${size.insideDiameterFraction} inside diameter`}
                >
                  <div 
                    className={`mx-auto rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-4 flex items-center justify-center mb-3 transition-all ${
                      isSelected ? 'border-brand-orange shadow-lg shadow-orange-200' : 'border-gray-600 group-hover:border-brand-orange'
                    }`}
                    style={{ width: visualDiameter, height: visualDiameter }}
                  >
                    <div 
                      className={`rounded-full transition-colors ${
                        isSelected ? 'bg-brand-orange/30' : 'bg-gray-300 group-hover:bg-orange-200'
                      }`}
                      style={{ width: visualDiameter * 0.6, height: visualDiameter * 0.6 }}
                    />
                  </div>
                  <p className={`font-bold text-lg transition-colors ${
                    isSelected ? 'text-brand-orange' : 'text-brand-navy group-hover:text-brand-orange'
                  }`}>{size.dashSize}</p>
                  <p className="text-sm text-gray-500">{size.insideDiameterFraction}</p>
                  <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click for details</p>
                </button>
              );
            })}
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">
            Click any size to see full specifications. Cross-section view showing relative inner diameter sizes.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-orange py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-4">
            Need Custom Hose Assembly?
          </h2>
          <p className="text-white/90 text-lg mb-6">
            Mobile fabrication available in Bakersfield, Wichita, and Lubbock. 
            We come to your job site with fully-equipped service trucks.
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
              to="/services/mobile-fabrication"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Mobile Fabrication Service
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Sections */}
      
      {/* Section 1: What is Dash Size */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 font-semibold text-sm rounded-full mb-4">FUNDAMENTALS</span>
              <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-navy mb-6">
                What Is Hydraulic Hose Dash Size? (Complete Guide)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hydraulic hose "dash size" is the industry-standard naming system that indicates a hose's inside diameter (ID) in sixteenths of an inch. The dash number directly corresponds to this measurement—simply divide by 16 to get the ID in inches.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For example, a <strong>-8 dash hose</strong> has an inside diameter of 8/16 inch, which simplifies to 1/2 inch (12.7mm). A <strong>-16 dash hose</strong> has a 16/16 inch (1 inch or 25.4mm) inside diameter.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                This standardized system, established by the Society of Automotive Engineers (SAE), ensures compatibility between hoses and fittings from different manufacturers. When you know the dash size, you can quickly match hoses, adapters, and couplings across brands.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-bold text-brand-navy mb-2">Quick Formula:</p>
                <p className="font-mono text-lg text-brand-orange">Dash Size ÷ 16 = Inside Diameter (inches)</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="font-bold text-brand-navy mb-4">Common Dash Size Examples</h3>
              <div className="space-y-3">
                {[
                  { dash: '-4', calc: '4 ÷ 16', result: '1/4"', mm: '6.4mm' },
                  { dash: '-6', calc: '6 ÷ 16', result: '3/8"', mm: '9.5mm' },
                  { dash: '-8', calc: '8 ÷ 16', result: '1/2"', mm: '12.7mm' },
                  { dash: '-10', calc: '10 ÷ 16', result: '5/8"', mm: '15.9mm' },
                  { dash: '-12', calc: '12 ÷ 16', result: '3/4"', mm: '19.1mm' },
                  { dash: '-16', calc: '16 ÷ 16', result: '1"', mm: '25.4mm' },
                ].map(item => (
                  <div key={item.dash} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="font-bold text-brand-navy">{item.dash}</span>
                    <span className="text-gray-500 text-sm font-mono">{item.calc}</span>
                    <span className="font-semibold">{item.result}</span>
                    <span className="text-gray-500">{item.mm}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How to Choose */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 font-semibold text-sm rounded-full mb-4">SIZING GUIDE</span>
            <h2 className="text-2xl md:text-4xl font-heading font-black text-brand-navy mb-4">
              How to Choose the Right Hydraulic Hose Size
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Selecting the correct hose size involves balancing flow rate, pressure, and practical considerations. Here's what you need to know.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-brand-navy text-lg mb-3">1. Flow Velocity</h3>
              <p className="text-gray-600 text-sm mb-4">
                The golden rule: keep fluid velocity between <strong>15-20 ft/sec</strong> for pressure lines. Too fast causes heat and turbulence. Too slow wastes money on oversized hose.
              </p>
              <div className="bg-white rounded p-3 text-xs font-mono">
                Velocity = GPM × 0.3208 ÷ ID²
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-brand-navy text-lg mb-3">2. Pressure Rating</h3>
              <p className="text-gray-600 text-sm mb-4">
                Always select hose rated <strong>above</strong> your maximum working pressure. Include a safety factor for pressure spikes. Larger hoses have lower pressure ratings.
              </p>
              <div className="bg-white rounded p-3 text-xs">
                <strong>Rule:</strong> Working pressure should be ≤ 80% of hose rating
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-brand-navy text-lg mb-3">3. Application Fit</h3>
              <p className="text-gray-600 text-sm mb-4">
                Consider routing, bend radius, abrasion, temperature, and connector availability. Sometimes a slightly larger hose fits the space better than the "perfect" size.
              </p>
              <div className="bg-white rounded p-3 text-xs">
                <strong>Tip:</strong> Match OEM sizes when possible
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Hose Types */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-white/20 text-white font-semibold text-sm rounded-full mb-4">HOSE TYPES</span>
            <h2 className="text-2xl md:text-4xl font-heading font-black mb-4">
              Hydraulic Fitting Size Reference Chart
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Different hose constructions handle different pressures. Match hose type to your application requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hoseTypes.map(type => (
              <div key={type.id} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-white text-lg mb-2">{type.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-xs text-gray-400 uppercase mb-1">Max Pressure</p>
                  <p className="text-brand-orange font-bold">{type.maxPressure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: How to Measure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="font-bold text-brand-navy mb-6">Tools You'll Need:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <strong className="text-brand-navy">Digital Calipers</strong>
                      <p className="text-gray-600 text-sm">For accurate ID/OD measurements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <strong className="text-brand-navy">Thread Pitch Gauge</strong>
                      <p className="text-gray-600 text-sm">For identifying fitting thread types</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <strong className="text-brand-navy">Tape Measure</strong>
                      <p className="text-gray-600 text-sm">For hose length (cut end to cut end)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <strong className="text-brand-navy">Dash Size Chart</strong>
                      <p className="text-gray-600 text-sm">This page! Match your measurement</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 font-semibold text-sm rounded-full mb-4">MEASUREMENT</span>
              <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-navy mb-6">
                How to Measure Hydraulic Hose
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Always measure the inside diameter (ID)</strong>—not the outside diameter. The ID is what determines flow capacity and must match fitting sizes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <p className="text-gray-600">Cut hose cleanly to expose a fresh end</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <p className="text-gray-600">Measure across the inner tube opening with calipers</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <p className="text-gray-600">Convert inches to dash size: multiply by 16</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <p className="text-gray-600">Check the hose layline for printed size info</p>
                </div>
              </div>
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                  <span><strong>Common Mistake:</strong> Measuring the outside diameter (OD) gives the wrong size. OD varies by hose construction and manufacturer—only ID is standardized.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-navy mb-10 text-center">
            Hydraulic Hose Sizing FAQs
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:ring-2 focus:ring-brand-orange focus:ring-inset hover:bg-gray-50 transition-colors"
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
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-brand-navy mb-6">
            Mobile Hose Fabrication Service Areas
          </h3>
          <p className="text-gray-600 mb-6">
            We dispatch mobile hydraulic hose technicians throughout these regions for same-day hose assembly:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/locations/bakersfield" className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-brand-navy transition-colors">
              <MapPin className="w-4 h-4" />
              Bakersfield, CA
            </Link>
            <Link to="/locations/wichita" className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-brand-navy transition-colors">
              <MapPin className="w-4 h-4" />
              Wichita, KS
            </Link>
            <Link to="/locations/lubbock" className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-brand-navy transition-colors">
              <MapPin className="w-4 h-4" />
              Lubbock, TX
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            <strong>Disclaimer:</strong> This calculator uses industry-standard SAE J517 and ISO 4397 specifications for reference. Actual hose specifications may vary by manufacturer and hose type. Always verify with manufacturer specifications and consult a hydraulic professional for critical applications. This tool is for estimation purposes only. Frontline Hydraulic Services is not liable for hose selection errors. For critical applications, consult a hydraulic engineer. Reference data compiled from publicly available manufacturer specifications.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HoseCalculator;
