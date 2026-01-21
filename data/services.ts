import { Timer, Zap, Wrench, Truck, ShieldCheck, ClipboardCheck, Droplet, Activity, Settings, AlertTriangle, Filter, Gauge, Phone, CheckCircle2, Factory, Tractor, HardHat, Cog, Calendar, Ruler, Sparkles, Clock } from 'lucide-react';
import { ServicePageData } from '../types';

// 1. EMERGENCY HYDRAULIC HOSE REPAIR (Money Page)
export const emergencyRepairData: ServicePageData = {
  id: 'service-emergency-repair',   // matches /services/emergency-repair
  title: "Emergency Hydraulic Hose Repair",
  seoTitle: "24/7 Emergency Hydraulic Hose Repair Near You | Mobile Service",
  seoDesc: "Fast emergency hydraulic hose repair in Bakersfield, Wichita, and Lubbock. Mobile techs dispatched in 60 minutes. On-site hose fixes for all equipment.",
  heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80&fm=webp",
  subheading: "When a hydraulic hose fails, every minute costs thousands. We dispatch certified mobile technicians within 60 minutes for 24/7 emergency hose repair and on-site fabrication in Bakersfield, Wichita, and Lubbock.",
  description: {
    heading: "24/7 Emergency Hydraulic Hose Repair Service",
    paragraphs: [
      "A main boom hose bursts mid-project, hydraulic fluid sprays everywhere, and your entire crew stops working. Every minute costs money. You don't need a call center—you need a certified mobile hydraulic repair truck on-site, right now, with equipment ready.",
      "Frontline Hydraulic Services provides true 24/7 emergency mobile hydraulic hose repair with certified technicians across Bakersfield, CA, Wichita, KS, and Lubbock, TX. We don't work banking hours—we work your hours. Nights, weekends, holidays—if your equipment is running, we're dispatched and rolling. Our technicians are factory-trained in high-pressure system safety and efficient emergency repair.",
      "Our mobile hydraulic repair trucks are fully equipped workshops carrying thousands of certified fittings, adapters, and high-pressure hoses (2-wire, 4-wire, 6-wire assemblies). Whether you're stuck on a roadside in Kern County, harvest field in Sedgwick County, or drilling rig in Lubbock, we arrive ready to fabricate and install on-site. No towing required, no waiting for parts.",
      "We handle emergency hose failures for all equipment types—excavators, dump trucks, agricultural harvesters, presses. We carry Code 61/62 flanges, JIC, ORFS, BSP, and metric fittings for Caterpillar, John Deere, Komatsu, Volvo equipment. Make the call, we fix the leak, your yellow iron gets back to work."
    ]
  },
  features: [
    "Dispatched 24/7/365",
    "On-Site Within 60 Mins (Avg)",
    "No Towing Required",
    "Trucks Stocked for All Brands",
    "Crimping Up to 2 Inch 6-Wire",
    "Experienced Field Techs",
    "We Handle The Cleanup",
    "Immediate Billing/PO Support"
  ],
  whatsIncluded: [
    {
      title: "Rapid Dispatch",
      description: "We route the closest tech to your GPS location immediately.",
      icon: Truck
    },
    {
      title: "Diagnostic Check",
      description: "We identify why it failed so it doesn't happen again tomorrow.",
      icon: Activity
    },
    {
      title: "Custom Fabrication",
      description: "We build the new hose assembly right on our bumper.",
      icon: Settings
    },
    {
      title: "System Testing",
      description: "We pressure up and cycle the machine to verify the fix.",
      icon: Gauge
    },
    {
      title: "Fluid Top-Off",
      description: "We replace the oil you lost during the blowout.",
      icon: Droplet
    },
    {
      title: "Site Cleanup",
      description: "We help mitigate the spill so you stay compliant.",
      icon: Sparkles
    }
  ],
  process: [
    {
      title: "Call Dispatch",
      description: "Call (XXX) XXX-XXXX. Tell us the machine type and location.",
      icon: Phone
    },
    {
      title: "We Roll Out",
      description: "A fully stocked service truck heads your way immediately.",
      icon: Truck
    },
    {
      title: "We Fix It",
      description: "We remove, fabricate, and install the new hose on-site.",
      icon: Wrench
    },
    {
      title: "Back to Work",
      description: "We test it, sign the ticket, and you get back to digging.",
      icon: CheckCircle2
    }
  ],
  industries: {
    left: [
      "Construction & Excavation",
      "Oil & Gas Drilling",
      "Agriculture & Harvest",
      "Heavy Haul Trucking"
    ],
    right: [
      "Industrial Manufacturing",
      "Waste Management",
      "Material Handling",
      "Utility & Power"
    ]
  },
  benefits: [
    {
      title: "We Come To You",
      description: "Forget the trailer. We bring the hose shop to the breakdown site, saving you hours of logistics.",
      icon: Truck
    },
    {
      title: "Real 24/7 Service",
      description: "We actually answer the phone at 2 AM on a Sunday. No voicemail loops.",
      icon: Clock
    },
    {
      title: "One-Trip Repairs",
      description: "Our inventory depth means we rarely have to leave the site to find a fitting.",
      icon: Zap
    }
  ],
  commonIssues: [
    "Blown boom or stick hoses",
    "Rubbed-through lines",
    "Failed crimps/fittings",
    "Leaking O-rings",
    "Sun-rotted outer sheaths",
    "Twisted or kinked assemblies",
    "Impact damage",
    "Steering/brake line failures"
  ],
  relatedServices: [
    {
      title: "Mobile Fabrication",
      description: "Custom builds on-site.",
      icon: Settings,
      id: "service-fabrication"
    },
    {
      title: "System Diagnostics",
      description: "Find the root cause.",
      icon: Activity,
      id: "service-diagnostics"
    },
    {
      title: "Fleet Maintenance",
      description: "Prevent breakdowns.",
      icon: ClipboardCheck,
      id: "service-fleet"
    }
  ],
  faqs: [
    {
      question: "How fast can you get here?",
      answer: "If you're in the metro areas of Bakersfield, Wichita, or Lubbock, we aim for a 60-minute ETA. Traffic and distance obviously play a role, but we hustle."
    },
    {
      question: "Do you have fittings for Cat/Deere/Komatsu?",
      answer: "Yes. We stock Code 61/62 flanges, ORFS, JIC, BSP, and DIN fittings. We cover 95% of foreign and domestic equipment."
    },
    {
      question: "Can you fix a hose in the middle of a field?",
      answer: "Absolutely. As long as our service truck can drive to it, we can fix it. We do this daily in oil patches and farm fields."
    },
    {
      question: "Do you offer net-30 billing?",
      answer: "For established fleet accounts, yes. Call our office to get your credit application started."
    }
  ]
};

// 2. MOBILE HYDRAULIC HOSE FABRICATION
export const mobileFabricationData: ServicePageData = {
  id: 'service-mobile-fabrication',  // matches /services/mobile-fabrication
  title: "Mobile Hydraulic Hose Fabrication",
  seoTitle: "Mobile Hydraulic Hose Fabrication | On-Site Service",
  seoDesc: "On-site hydraulic hose fabrication in Bakersfield, Wichita, and Lubbock. OEM-quality assemblies built at your job site. No shop visits needed.",
  heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
  subheading: "Custom OEM-quality hydraulic hose fabrication at your job site. No more trips to parts stores. Certified on-site assembly with pressure testing in Bakersfield, Wichita, and Lubbock.",
  description: {
    heading: "Mobile Hose Fabrication Lab On Your Truck",
    paragraphs: [
      "Why pull a technician off the job to drive 45 minutes to a parts counter, then wait while they search the shelves? Our mobile hydraulic hose fabrication service eliminates wasted time. We bring a fully equipped, certified hose fabrication shop directly to your location in Bakersfield, Wichita, or Lubbock.",
      "We specialize in custom hydraulic hose assembly and high-pressure fabrication on-site. Whether retrofitting old equipment or building custom high-pressure assemblies for industrial presses, our certified technicians cut, clean, test, and crimp right on our mobile workshop. We stock Parker, Eaton, and OEM-equivalent fittings compatible with all major equipment brands.",
      "Our mobile fabrication technicians match original assemblies exactly—checking pressure ratings, bend radius, routing specifications, and hose diameter. Get factory-quality on-site hose fabrication without leaving the job. We fabricate 1/4\" to 2\" assemblies with pressure ratings up to 10,000+ PSI, all pressure-tested and capped."
    ]
  },
  features: [
    "On-Site Crimping (Up to 2\")",
    "Huge Fitting Inventory",
    "Metric, BSP, & SAE Support",
    "4-Wire & 6-Wire Capability",
    "Abrasion Sleeves Available",
    "Projectile Cleaning",
    "Capped & Plugged",
    "Pressure Rated to Spec"
  ],
  whatsIncluded: [
    {
      title: "Pattern Matching",
      description: "We measure your old hose to ensure the new one fits perfectly.",
      icon: Ruler
    },
    {
      title: "Spec Selection",
      description: "We match the hose pressure rating to your machine's requirements.",
      icon: ShieldCheck
    },
    {
      title: "Precision Crimping",
      description: "Calibrated crimpers ensure a safe, leak-free connection.",
      icon: Settings
    },
    {
      title: "Debris Cleaning",
      description: "We shoot projectiles through the hose to remove cutting dust.",
      icon: Sparkles
    },
    {
      title: "Protection",
      description: "We cap the ends so dirt doesn't get in before installation.",
      icon: ShieldCheck
    },
    {
      title: "Installation",
      description: "We route it, torque it, and clamp it down correctly.",
      icon: Wrench
    }
  ],
  process: [
    {
      title: "We Arrive",
      description: "Our mobile workshop pulls up to your machine.",
      icon: Truck
    },
    {
      title: "Match It",
      description: "We identify the threads and hose specs immediately.",
      icon: Filter
    },
    {
      title: "Build It",
      description: "We fabricate the assembly in minutes on the truck.",
      icon: Settings
    },
    {
      title: "Install It",
      description: "We put it on and verify it holds pressure.",
      icon: Wrench
    }
  ],
  industries: {
    left: [
      "Manufacturing Plants",
      "Injection Molding",
      "Heavy Construction",
      "Food Processing"
    ],
    right: [
      "Mining & Aggregate",
      "Offshore/Marine",
      "Forestry & Logging",
      "Rail Maintenance"
    ]
  },
  benefits: [
    {
      title: "Zero Travel Time",
      description: "Your crew keeps working while we build the hose. No trips to town.",
      icon: Timer
    },
    {
      title: "Perfect Fitment",
      description: "We route and install it for you, ensuring it doesn't rub or kink.",
      icon: CheckCircle2
    },
    {
      title: "OEM Standards",
      description: "We use high-quality Parker/Eaton style components that last.",
      icon: ShieldCheck
    }
  ],
  commonIssues: [
    "Hard-to-find metric threads",
    "Obsolete part numbers",
    "Incorrect lengths from factory",
    "Rubbing against frame rails",
    "Complex bent tube ends",
    "High-pressure spiral wire",
    "Tight bend radius needs",
    "Conversion adapters needed"
  ],
  relatedServices: [
    {
      title: "Emergency Repair",
      description: "Fix broken lines fast.",
      icon: AlertTriangle,
      id: "service-emergency"
    },
    {
      title: "Fleet Maintenance",
      description: "Batch hose replacement.",
      icon: ClipboardCheck,
      id: "service-fleet"
    },
    {
      title: "Diagnostics",
      description: "Why did it fail?",
      icon: Activity,
      id: "service-diagnostics"
    }
  ],
  faqs: [
    {
      question: "Can you make hoses for my German/Japanese machine?",
      answer: "Yes. We carry DIN (German), JIS (Japanese), and BSP (British) fittings. We see a lot of Volvo, Komatsu, and Kubota equipment."
    },
    {
      question: "How big of a hose can you make on site?",
      answer: "We can crimp up to 2-inch ID hoses with 6-wire reinforcement on our trucks."
    },
    {
      question: "Is mobile fabrication more expensive than a shop?",
      answer: "There is a service call fee, but when you factor in the cost of your machine downtime and paying an employee to drive to town, we usually save you money."
    },
    {
      question: "Do you clean the hoses?",
      answer: "Always. We projectile clean every hose to ensure no rubber dust enters your hydraulic system."
    }
  ]
};

// 3. HYDRAULIC SYSTEM DIAGNOSTICS
export const diagnosticsData: ServicePageData = {
    id: 'service-diagnostics',
    title: "Hydraulic System Diagnostics",    
    seoTitle: "Hydraulic System Diagnostics & Pressure Testing Service",
    seoDesc: "Hydraulic diagnostics with flow meters and pressure testing. Find root causes of leaks and slow cycles in Bakersfield, Wichita, and Lubbock.",
    heroImage: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
    subheading: "Advanced hydraulic system diagnostics with pressure testing and flow analysis. Stop guessing at repairs. Certified technicians find root causes of performance issues in Bakersfield, Wichita & Lubbock.",
    description: {
        heading: "Professional Hydraulic System Diagnostics & Troubleshooting",
        paragraphs: [
            "Is your excavator moving slowly? Is your industrial press losing tonnage? Don't throw replacement parts at the problem—that gets expensive fast and rarely fixes the real issue. You need advanced hydraulic system diagnostics to identify root causes. Our certified technicians use professional flow meters, pressure transducers, and thermal imaging to diagnose complex hydraulic failures.",
            "Our expert technicians provide OEM-level hydraulic diagnostics using advanced flow meters, digital pressure gauges, and thermal imaging technology. We serve Bakersfield, Wichita, and Lubbock, troubleshooting everything from cavitation issues to overheating valves on construction, industrial, and agricultural equipment. We isolate exact component failures—whether it's a bypassing cylinder piston seal, stuck relief valve, or worn hydraulic pump.",
            "Get a clear hydraulic repair diagnosis before spending thousands on guesswork. Our certified technicians benchmark your system against OEM specifications, test pressure relief settings, measure pump flow rates, and identify internal leaks. We deliver actionable repair recommendations so you fix only what's actually broken."
        ]
    },
    features: [
        "On-Site Pressure Testing",
        "Digital Flow Meter Analysis",
        "Leak Detection & Tracing",
        "Thermal Heat Imaging",
        "Cycle Time Benchmarking",
        "Valve Logic Troubleshooting",
        "Contamination Checks",
        "Pump Performance Tests"
    ],
    whatsIncluded: [
        {
            title: "Pressure Checks",
            description: "We verify if your pump and relief valves are hitting spec.",
            icon: Gauge
        },
        {
            title: "Flow Testing",
            description: "We measure GPM to see if your pump is worn out.",
            icon: Activity
        },
        {
            title: "Leak Detection",
            description: "We find internal bypasses in cylinders and valves.",
            icon: Droplet
        },
        {
            title: "Thermal Scan",
            description: "We find hot spots that indicate friction or bypass.",
            icon: Zap
        },
        {
            title: "Cycle Timing",
            description: "We clock your machine speeds against OEM standards.",
            icon: Timer
        },
        {
            title: "Repair Plan",
            description: "We give you a clear report on what needs fixing.",
            icon: ClipboardCheck
        }
    ],
    process: [
        { title: "Consult", description: "Tell us the symptoms. When did it start?", icon: Phone },
        { title: "Instrument", description: "We hook up gauges and flow meters.", icon: Settings },
        { title: "Load Test", description: "We run the machine hot to reproduce the issue.", icon: Activity },
        { title: "Report", description: "We tell you exactly which component failed.", icon: CheckCircle2 }
    ],
    industries: {
        left: ["Construction Equipment", "Industrial Presses", "Injection Molding", "Mobile Cranes"],
        right: ["Waste Trucks", "Agricultural Harvesters", "Mining Machinery", "Marine Systems"]
    },
    benefits: [
        { title: "Stop Guessing", description: "Parts swapping is expensive. Diagnostics finds the real problem.", icon: ShieldCheck },
        { title: "Faster Fixes", description: "Knowing the root cause means we can fix it right the first time.", icon: Timer },
        { title: "Verify Performance", description: "We prove the machine is back to spec before we leave.", icon: CheckCircle2 }
    ],
    commonIssues: ["Low system pressure", "Slow hydraulic operation", "Overheating hydraulic fluid", "Cavitation noise", "Drifting cylinders", "Internal bypass leaks", "Valve spool sticking"],
    relatedServices: [
        { title: "Pump Repair", description: "Fix the bad pump.", icon: Wrench, id: "service-cylinders" },
        { title: "Fluid Service", description: "Clean dirty oil.", icon: Droplet, id: "service-fluid" },
        { title: "Emergency Repair", description: "Fix leaks fast.", icon: Timer, id: "service-emergency" }
    ],
    faqs: [
        { question: "Is diagnostic time charged hourly?", answer: "Yes. Diagnostics requires specialized tools and expertise. It usually saves you thousands in unnecessary parts." },
        { question: "Can you test pressure on my job site?", answer: "Yes, our trucks carry digital gauges and test points to check pressures right where the machine sits." },
        { question: "My machine is overheating. Can you find out why?", answer: "Absolutely. Overheating is usually a sign of a restriction or high-pressure bypass. We can track it down." },
        { question: "Do you troubleshoot electrical/hydraulic controls?", answer: "Yes, we handle pilot controls, solenoid valves, and the electrical side of hydraulic systems." }
    ]
};

// 4. HYDRAULIC PUMP & CYLINDER REPAIR
export const cylinderRepairData: ServicePageData = {
    id: 'service-cylinder-repair',    // matches /services/cylinder-repair
    title: "Hydraulic Pump & Cylinder Repair",
    seoTitle: "Hydraulic Pump & Cylinder Repair | Mobile Rebuilds",
    seoDesc: "Mobile hydraulic pump and cylinder repair in Bakersfield, Wichita, and Lubbock. On-site rebuilds and seal replacement. Save on OEM costs.",
    heroImage: "https://images.unsplash.com/photo-1690356107685-3725367f6f3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
    subheading: "Hydraulic cylinder rebuild and seal repair at your site or in our facility. We stock OEM-equivalent rods, seals, and buckets for fast same-day restoration.",
    description: {
        heading: "Mobile & Shop Hydraulic Cylinder Repair Service",
        paragraphs: [
            "A leaking cylinder costs you production time and hydraulic fluid by the gallon. Whether it's a bucket cylinder on your excavator, boom cylinder on a loader, or ram cylinder on agricultural equipment, we repair them on-site or swap with rebuilt units in Bakersfield, Wichita & Lubbock. Our certified technicians pull rods, replace seals, hone internal surfaces, and rebuild cylinders to OEM specifications.",
            "We handle complete hydraulic cylinder rebuilds using OEM-equivalent seals (all brands), replacement rods, and precision honing equipment. Our repair shop maintains inventory of high-grade piston seals, rod wiper seals, cap end seals, and rod buckets for Caterpillar, John Deere, Komatsu, and Volvo equipment. We pressure-test every rebuild to verify leak-free performance before reinstallation.",
            "Choose mobile on-site repair to avoid equipment downtime, or bring cylinders to our facility for complete rebuild with pressure testing. Either way, you get certified seal replacement and factory-quality hydraulic cylinder restoration at a fraction of OEM prices—typically 40-60% less than manufacturer parts."
        ]
    },
    features: [
        "Mobile Cylinder Resealing",
        "Shop Pump Rebuilding",
        "Chrome Rod Polishing",
        "Barrel Honing",
        "Custom Seal Kits",
        "Motor Repair",
        "Bench Testing",
        "Warranty on Rebuilds"
    ],
    whatsIncluded: [
        { title: "Teardown", description: "We inspect internals for scoring and wear.", icon: Settings },
        { title: "Honing", description: "We smooth out the barrel to prevent seal failure.", icon: Zap },
        { title: "Resealing", description: "We install high-performance seals that outlast stock.", icon: ShieldCheck },
        { title: "Fabrication", description: "We can make new rods or tubes if needed.", icon: Sparkles },
        { title: "Bench Test", description: "We verify the pump holds pressure before install.", icon: Gauge },
        { title: "Install", description: "We put it back on your machine and bleed the system.", icon: Wrench }
    ],
    process: [
        { title: "Remove", description: "We pull the component off your machine.", icon: Wrench },
        { title: "Evaluate", description: "We check if it's cheaper to fix or replace.", icon: Activity },
        { title: "Rebuild", description: "We replace seals, bearings, and worn parts.", icon: Factory },
        { title: "Test", description: "We verify it works under load.", icon: CheckCircle2 }
    ],
    industries: {
        left: ["Waste Management", "Construction", "Mining", "Agriculture"],
        right: ["Manufacturing", "Automotive Lifts", "Material Handling", "Aerospace GSE"]
    },
    benefits: [
        { title: "Save Cash", description: "Rebuilding is often half the price of a new OEM component.", icon: ClipboardCheck },
        { title: "Fast Turnaround", description: "We stock common seal kits to get you running faster.", icon: Timer },
        { title: "Reliability", description: "We bench test our work. No 'fingers crossed' installs.", icon: ShieldCheck }
    ],
    commonIssues: ["Leaking gland seals", "Scored chrome rods", "Pump cavitation", "Worn wear plates", "Internal bypassing", "Bent rods", "Case drain leaks"],
    relatedServices: [
        { title: "Diagnostics", description: "Is the pump actually bad?", icon: Activity, id: "service-diagnostics" },
        { title: "Hose Repair", description: "New lines for the new pump.", icon: Wrench, id: "service-emergency" },
        { title: "Fluid Service", description: "Clean oil protects the repair.", icon: Droplet, id: "service-fluid" }
    ],
    faqs: [
        { question: "Can you reseal a cylinder on the machine?", answer: "Yes! If the rod and barrel aren't damaged, we can often pull the gland and reseal it on-site to save time." },
        { question: "Is it worth rebuilding a gear pump?", answer: "Usually not. Small aluminum gear pumps are cheaper to replace. Large piston pumps are definitely worth rebuilding." },
        { question: "How long does a rebuild take?", answer: "Simple reseals take 1-2 days. If we need to re-chrome a rod, it might take a week." },
        { question: "Do you warranty your work?", answer: "Yes, all rebuilds come with a warranty against defects in parts and workmanship." }
    ]
};

// 5. HYDRAULIC OIL & FLUID SERVICES
export const fluidServicesData: ServicePageData = {
    id: 'service-fluid-services',     // matches /services/fluid-services
    title: "Hydraulic Oil & Fluid Services",
    seoTitle: "Hydraulic Oil & Fluid Services | Mobile Filtration",
    seoDesc: "Mobile hydraulic fluid flushing, filtration, and oil changes in Bakersfield, Wichita, and Lubbock. Clean systems to ISO standards. Water removal and more.",
    heroImage: "https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
    subheading: "Mobile hydraulic fluid flushing and filtration to ISO 4406 standards. Clean contaminated systems without downtime. Water removal and sludge elimination in Bakersfield, Wichita, and Lubbock.",
    description: {
        heading: "Professional Hydraulic Fluid Flushing & Mobile Filtration Service",
        paragraphs: [
            "Dirty oil is a hydraulic killer. 70% of premature component failures—pumps, valves, cylinders—trace back to contaminated fluid. When you're running above ISO 4406 code 18/16/13, you're essentially sandblasting internals with microscopic particles. Our certified technicians provide mobile hydraulic fluid services and system flushing in Bakersfield, Wichita, and Lubbock.",
            "We specialize in kidney-loop filtration (cleaning oil while machines run), catastrophic flushing (after pump failure), water removal (milky oil recovery), and fluid sampling (particle analysis). Our mobile filtration trucks pull contaminated oil, run it through high-efficiency filter carts, and return clean ISO 4406 17/15/12 or better fluid to your reservoir—no shutdown required.",
            "Target ISO cleanliness standards with our professional fluid recovery programs. We remove metal particles from pump failure, eliminate varnish buildup, absorb water ingestion, and dispose of waste oil responsibly. Clean hydraulic fluid doubles component lifespan and prevents expensive emergency repairs."
        ]
    },
    features: [
        "Bulk Oil Delivery",
        "System Flushing",
        "Kidney-Loop Filtration",
        "Water Removal",
        "Particle Counting (ISO Code)",
        "Tank Cleaning",
        "Filter Cart Service",
        "Waste Oil Disposal"
    ],
    whatsIncluded: [
        { title: "Sampling", description: "We analyze your oil to see what's in it.", icon: Activity },
        { title: "Draining", description: "We pump out the old sludge responsibly.", icon: Droplet },
        { title: "Flushing", description: "High-velocity flush to knock debris loose.", icon: Zap },
        { title: "Filtering", description: "We polish the oil to remove microscopic grit.", icon: Filter },
        { title: "Refilling", description: "We fill you up with fresh, clean spec fluid.", icon: CheckCircle2 },
        { title: "Disposal", description: "We haul away the waste oil EPA-style.", icon: Sparkles }
    ],
    process: [
        { title: "Test", description: "Is the oil actually bad? We check.", icon: Activity },
        { title: "Clean", description: "We filter or flush the system.", icon: Zap },
        { title: "Fill", description: "Top off with the right viscosity oil.", icon: Droplet },
        { title: "Verify", description: "Final particle count to prove it's clean.", icon: CheckCircle2 }
    ],
    industries: {
        left: ["Plastic Injection Molding", "Industrial Manufacturing", "Construction Fleets", "Waste Management"],
        right: ["Power Generation", "Marine Hydraulics", "Mining", "Agriculture"]
    },
    benefits: [
        { title: "Double Component Life", description: "Clean oil drastically reduces wear on pumps and seals.", icon: Timer },
        { title: "We Come to You", description: "Our trucks carry filter carts and transfer pumps to your site.", icon: Truck },
        { title: "Stop Sticking Valves", description: "Varnish removal helps your machine cycle smoothly again.", icon: Zap }
    ],
    commonIssues: ["Milky oil (water)", "High particle counts", "Varnish/sludge", "Metal flakes from pump failure", "Acidic smell", "Overheating", "Clogged filters"],
    relatedServices: [
        { title: "Maintenance", description: "Filter change programs.", icon: ClipboardCheck, id: "service-fleet" },
        { title: "Pump Repair", description: "Fix contamination damage.", icon: Wrench, id: "service-cylinders" },
        { title: "Diagnostics", description: "Check system health.", icon: Activity, id: "service-diagnostics" }
    ],
    faqs: [
        { question: "How often should I change hydraulic oil?", answer: "It depends on the machine and environment. Oil analysis is the best way to know. Don't guess—test." },
        { question: "What is kidney loop filtration?", answer: "It's running your oil through a high-efficiency filter cart while the machine is running (or off) to clean it better than the onboard filters can." },
        { question: "My oil looks milky. Can you save it?", answer: "Maybe. If it's just water, our water-absorbing filters can often dry it out. If it's coolant, you have a bigger problem." },
        { question: "Do you take the old oil?", answer: "Yes, we handle the recovery and recycling of waste oil." }
    ]
};

// 6. HYDRAULIC SYSTEM MAINTENANCE
export const maintenanceData: ServicePageData = {
    id: 'service-fleet-maintenance',  // matches /services/fleet-maintenance
    title: "Hydraulic Fleet Maintenance",
    seoTitle: "Hydraulic Fleet Maintenance | Preventive Service Plans",
    seoDesc: "Preventive hydraulic maintenance for fleets in Bakersfield, Wichita, and Lubbock. Scheduled inspections, filter changes, and hose tagging. Reduce breakdowns.",
    heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
    subheading: "Preventive hydraulic maintenance stops costly emergency repairs. Scheduled inspections, filter changes, fluid analysis & hose tagging for fleets in Bakersfield, Wichita, and Lubbock.",
    description: {
        heading: "Professional Preventive Hydraulic Maintenance Programs",
        paragraphs: [
            "Emergency repairs cost 4x more than planned maintenance. Don't run your fleet to failure—that strategy bleeds profit. Frontline offers preventive hydraulic maintenance programs that catch component issues while they're small, inexpensive fixes. We provide scheduled fleet hose audits, filter change programs, and fluid analysis to extend equipment lifespan.",
            "Our certified technicians visit your yard during downtime to inspect hoses for rubs and cracks, change pressure and return filters on schedule, sample hydraulic fluid for wear metals, and tag every hose with ID numbers. We serve Bakersfield, Wichita, and Lubbock fleets—from construction companies with 50+ pieces to agricultural operations with seasonal harvest equipment.",
            "Get detailed fleet health reports, establish preventive maintenance contracts, and transform reactive emergency calls into scheduled service events. Our fleet maintenance programs reduce unplanned downtime by 60-70%, keeping your equipment ready to work when you need it."
        ]
    },
    features: [
        "Fleet Hose Audits",
        "Filter Change Schedules",
        "Fluid Analysis Program",
        "Hose Tagging & ID",
        "Accumulator Nitrogen Checks",
        "Breather Replacement",
        "Detailed Health Reports",
        "Scheduled Downtime Service"
    ],
    whatsIncluded: [
        { title: "Inspections", description: "We look for rubs, cracks, and weeping fittings.", icon: Activity },
        { title: "Tagging", description: "We label hoses so ordering replacements is instant.", icon: ClipboardCheck },
        { title: "Filters", description: "We swap return and pressure filters on time.", icon: Settings },
        { title: "Sampling", description: "We track wear metals in your oil.", icon: Droplet },
        { title: "Reporting", description: "You get a report of what's good and what needs fixing.", icon: ClipboardCheck },
        { title: "Scheduling", description: "We work when your machines are parked.", icon: Calendar }
    ],
    process: [
        { title: "Audit", description: "We inventory every hydraulic asset you own.", icon: ClipboardCheck },
        { title: "Plan", description: "We set a service schedule based on hours.", icon: Calendar },
        { title: "Execute", description: "We show up and do the maintenance.", icon: Wrench },
        { title: "Track", description: "We keep history logs for resale value.", icon: Activity }
    ],
    industries: {
        left: ["Trucking Fleets", "Waste Haulers", "Rental Yards", "Construction"],
        right: ["Manufacturing Plants", "Food Processing", "Warehousing", "Airports"]
    },
    benefits: [
        { title: "Lower Costs", description: "Preventive maintenance is cheaper than emergency calls and expedited shipping.", icon: ShieldCheck },
        { title: "More Uptime", description: "Fix things on Saturday so they don't break on Monday morning.", icon: Timer },
        { title: "Safety", description: "Catching a frayed high-pressure line before it bursts saves injuries.", icon: AlertTriangle }
    ],
    commonIssues: ["Rubbing hoses", "Loose clamps", "Missing safety guards", "Saturated breathers", "Weeping fittings", "Low oil levels", "Expired accumulators"],
    relatedServices: [
        { title: "Fluid Service", description: "Oil changes.", icon: Droplet, id: "service-fluid" },
        { title: "Fabrication", description: "Replace worn hoses.", icon: Settings, id: "service-fabrication" },
        { title: "Industrial", description: "Plant maintenance.", icon: Factory, id: "service-industrial" }
    ],
    faqs: [
        { question: "What is hose tagging?", answer: "We put a metal ID tag on your hoses. If it breaks, you call us with the code, and we bring the exact duplicate without measuring." },
        { question: "How often should you inspect hoses?", answer: "Visual inspections should happen daily by operators, but a pro check should happen every 500 hours or 6 months." },
        { question: "Do you offer contracts?", answer: "Yes, we can set up monthly or quarterly fleet agreements to lock in rates and schedule." },
        { question: "Can you work on weekends?", answer: "Yes. The best time to maintain a fleet is when it's not working." }
    ]
};

// 7. INDUSTRIAL HYDRAULIC SERVICES
export const industrialData: ServicePageData = {
    id: 'industrial-plant-service',   // matches /services/industrial-plant-service
    title: "Industrial Hydraulic Services",
    seoTitle: "Industrial Hydraulic Services | Plant Maintenance",
    seoDesc: "Hydraulic repair for factories and plants in Bakersfield, Wichita, and Lubbock. Press cylinders, HPUs, and conveyor systems. OSHA-compliant service.",
    heroImage: "https://images.unsplash.com/photo-1697281679290-ad7be1b10682?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
    subheading: "Specialized hydraulic repair for injection presses, HPUs, and conveyor systems. OSHA-compliant service with on-site troubleshooting in Bakersfield, Wichita, and Lubbock.",
    description: {
        heading: "Industrial Plant Hydraulic Repair & Maintenance",
        paragraphs: [
            "In a factory or production facility, when hydraulic systems stop—the entire production line stops. Frontline specializes in industrial hydraulic repair for manufacturing plants, injection molding operations, metal stamping, and automation equipment. We understand that downtime directly impacts profit margins.",
            "Our certified technicians are trained on high-pressure press circuits, proportional and servo valves, HPU (hydraulic power unit) troubleshooting, and plant-specific system diagnostics. Whether you have a 500-ton injection press leak in Bakersfield, a conveyor motor failure in Wichita, or HPU pressure issues in Lubbock, we provide on-site industrial system diagnostics and emergency repair.",
            "We respect plant protocols—LOTO procedures, PPE requirements, OSHA compliance, and production schedules. We work alongside your maintenance team for planned shutdowns or respond immediately to emergency failures. Get industrial hydraulic maintenance contracts to prevent breakdowns before they happen."
        ]
    },
    features: [
        "Press Cylinder Repair",
        "HPU Troubleshooting",
        "Tube Bending & Plumbing",
        "Servo & Proportional Valves",
        "Accumulator Charging",
        "Filtration Upgrades",
        "Shutdown Support",
        "Preventive Maintenance"
    ],
    whatsIncluded: [
        { title: "Diagnostics", description: "We trace electrical and hydraulic faults.", icon: Activity },
        { title: "Tubing", description: "We bend and install stainless hard lines.", icon: Wrench },
        { title: "Power Units", description: "We service pumps, motors, and reservoirs.", icon: Settings },
        { title: "Cylinders", description: "Resealing large press cylinders safely.", icon: Truck },
        { title: "Valves", description: "Repairing direction and flow controls.", icon: Cog },
        { title: "Accumulators", description: "Nitrogen charging and bladder replacement.", icon: Gauge }
    ],
    process: [
        { title: "Check In", description: "We meet your plant manager and follow safety entry.", icon: Phone },
        { title: "LOTO", description: "We lock out energy sources before touching a bolt.", icon: ShieldCheck },
        { title: "Repair", description: "We fix the issue efficiently on the plant floor.", icon: Wrench },
        { title: "Startup", description: "We stand by while you restart the line.", icon: Factory }
    ],
    industries: {
        left: ["Automotive Manufacturing", "Metal Stamping", "Plastic Injection", "Paper Mills"],
        right: ["Food & Beverage", "Recycling Centers", "Aerospace", "Packaging"]
    },
    benefits: [
        { title: "Specialized Techs", description: "We know industrial HPUs and logic valves, not just mobile equipment.", icon: Factory },
        { title: "Safety First", description: "We carry full insurance and adhere to strict OSHA/plant safety rules.", icon: ShieldCheck },
        { title: "Fast Response", description: "We treat line-down situations like emergencies.", icon: Timer }
    ],
    commonIssues: ["Overheating HPUs", "Press tonnage loss", "Conveyor surging", "Hard line leaks", "Servo valve failure", "Pump noise", "Filter clogging"],
    relatedServices: [
        { title: "Fluid Service", description: "Clean reservoirs.", icon: Droplet, id: "service-fluid" },
        { title: "Diagnostics", description: "Trace pressure issues.", icon: Activity, id: "service-diagnostics" },
        { title: "Cylinders", description: "Press cylinder repair.", icon: Wrench, id: "service-cylinders" }
    ],
    faqs: [
        { question: "Do you work on injection molding machines?", answer: "Yes. We handle core pull hoses, clamp cylinders, and ejector hydraulics." },
        { question: "Can you bend stainless tubing on site?", answer: "Yes, we can fabricate and install hard lines for permanent plumbing." },
        { question: "Do you support scheduled shutdowns?", answer: "Yes. Book us in advance to knock out your hydraulic punch list during your holiday or maintenance shutdown." },
        { question: "Are you insured for industrial sites?", answer: "Yes, we carry the liability insurance required to work in major aerospace and manufacturing facilities." }
    ]
};

// 8. HEAVY EQUIPMENT HYDRAULIC REPAIR
export const equipmentRepairData: ServicePageData = {
    id: 'heavy-equipment-repair',    // matches /services/heavy-equipment-repair
    title: "Heavy Equipment Hydraulic Repair",
    seoTitle: "Heavy Equipment Hydraulic Repair | Excavator Service",
    seoDesc: "Mobile hydraulic repair for excavators, dozers, and loaders in Bakersfield, Wichita, and Lubbock. On-site boom cylinders, travel motors, and pumps fixed.",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
    subheading: "Heavy equipment hydraulic repair on-site without trailer fees or dealer delays. Boom cylinders, travel motors, and main pump diagnostics in Bakersfield, Wichita, and Lubbock.",
    description: {
        heading: "Mobile Heavy Equipment Hydraulic Repair Service",
        paragraphs: [
            "Your excavator doesn't make money sitting on a trailer at the dealer. When a Caterpillar boom loses power or a John Deere loader bucket drifts, you need it fixed right there on the jobsite. Frontline provides on-site heavy equipment hydraulic repair for excavators, dozers, loaders, and material handlers—no downtime for hauling.",
            "We specialize in excavator boom cylinder repair, travel motor diagnostics, final drive troubleshooting, and main pump pressure testing for Caterpillar, John Deere, Komatsu, Volvo, and Case equipment. Our certified technicians serve Bakersfield, Wichita, and Lubbock construction and mining industries with same-day heavy equipment hydraulic diagnostics and mobile repair.",
            "Skip the trailer rental and dealer waiting lists. Our fully stocked repair trucks provide on-site hydraulic repair for boom systems, swing motors, track tensioners, steering cylinders, and attachment plumbing. Get your yellow iron back to work in hours, not weeks—and save thousands in transportation and downtime costs."
        ]
    },
    features: [
        "Excavator Boom/Stick Repair",
        "Travel Motor Diagnostics",
        "Final Drive Repair",
        "Main Pump Troubleshooting",
        "Hydrostatic Drive Repair",
        "Hammer/Attachment Plumbing",
        "Steering & Brake Hydraulics",
        "Cylinder Packing"
    ],
    whatsIncluded: [
        { title: "Hoses", description: "Replacing blown high-pressure lines.", icon: Wrench },
        { title: "Motors", description: "Diagnosing weak travel or swing motors.", icon: Truck },
        { title: "Cylinders", description: "Resealing leaking cylinders on the machine.", icon: Settings },
        { title: "Controls", description: "Fixing drift and pilot control issues.", icon: Activity },
        { title: "Auxiliary", description: "Plumbing kits for hammers and shears.", icon: Wrench },
        { title: "Undercarriage", description: "Track tensioner repair.", icon: Zap }
    ],
    process: [
        { title: "Dispatch", description: "Tell us where the machine is parked.", icon: Truck },
        { title: "Diagnose", description: "We test pressures to find the failure.", icon: Activity },
        { title: "Repair", description: "We fix it on the spot.", icon: Wrench },
        { title: "Dig", description: "You verify it works before we leave.", icon: CheckCircle2 }
    ],
    industries: {
        left: ["Highway Construction", "Site Prep / Grading", "Quarry & Aggregates", "Demolition"],
        right: ["Utility Installation", "Forestry / Logging", "Crane Rental", "Landfill Operations"]
    },
    benefits: [
        { title: "No Hauling", description: "Save the $500+ cost of moving your dead machine to a shop.", icon: Truck },
        { title: "Dealer Alternative", description: "Faster than the dealer and we come to you.", icon: CheckCircle2 },
        { title: "Get Digging", description: "Our goal is uptime. We fix it fast.", icon: Timer }
    ],
    commonIssues: ["Blown boom hoses", "Leaking track adjusters", "Weak swing motors", "Overheating hydraulics", "Drifting buckets", "Hammer line failure", "Swivel joint leaks"],
    relatedServices: [
        { title: "Emergency Hose", description: "Hose replacement.", icon: Timer, id: "service-emergency" },
        { title: "Diagnostics", description: "Why is it slow?", icon: Activity, id: "service-diagnostics" },
        { title: "Fabrication", description: "Hard lines.", icon: Settings, id: "service-fabrication" }
    ],
    faqs: [
        { question: "Can you repack an excavator cylinder on site?", answer: "Usually, yes. As long as our can get the nut loose and the rod isn't bent, we can seal it there." },
        { question: "Do you work on all brands?", answer: "Yes. Cat, Deere, Komatsu, Volvo, Case, Hitachi, Bobcat—we fix them all." },
        { question: "My loader steers hard. Can you fix it?", answer: "Yes, that's often a priority valve or pump issue. We can troubleshoot it." },
        { question: "Do you install hammer kits?", answer: "Yes, we can plumb auxiliary hydraulics for attachments." }
    ]
};

// Updated list for the Services Listing Page
export const servicesList = [
    {
        id: 'service-emergency-repair',   // matches /services/emergency-repair
        title: "Emergency Hose Repair",
        description: "24/7 on-site replacement. We come to you.",
        icon: Timer
    },
    {
        id: 'service-mobile-fabrication',  // matches /services/mobile-fabrication
        title: "Mobile Hose Fabrication",
        description: "Custom assemblies built on our truck.",
        icon: Settings
    },
    {
        id: 'service-diagnostics',        // matches /services/diagnostics
        title: "Hydraulic Diagnostics",
        description: "Find the root cause of pressure loss.",
        icon: Zap
    },
    {
        id: 'service-fleet-maintenance',  // matches /services/fleet-maintenance
        title: "Fleet Maintenance",
        description: "Prevent failures with scheduled service.",
        icon: ClipboardCheck
    },
    {
        id: 'service-cylinder-repair',    // matches /services/cylinder-repair
        title: "Pump & Cylinder Repair",
        description: "Rebuilds and resealing to save money.",
        icon: Wrench
    },
    {
        id: 'service-fluid-services',     // matches /services/fluid-services
        title: "Fluid Services",
        description: "Flushing, filtering, and cleaning oil.",
        icon: Droplet
    },
    {
        id: 'service-industrial-plant',   // matches /services/industrial-plant-service
        title: "Industrial Plant Service",
        description: "Press and conveyor hydraulic repair.",
        icon: Factory
    },
    {
        id: 'service-heavy-equipment',    // matches /services/heavy-equipment-repair
        title: "Heavy Equipment Repair",
        description: "Excavator and loader hydraulics.",
        icon: Tractor
    }
];
