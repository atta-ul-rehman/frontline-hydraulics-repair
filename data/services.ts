import { Timer, Zap, Wrench, Truck, ShieldCheck, ClipboardCheck, Droplet, Activity, Settings, AlertTriangle, Filter, Gauge, Phone, CheckCircle2, Factory, Tractor, HardHat, Cog, Calendar, Ruler, Sparkles, Clock } from 'lucide-react';
import { ServicePageData } from '../types';

// 1. EMERGENCY HYDRAULIC HOSE REPAIR (Money Page)
export const emergencyRepairData: ServicePageData = {
  id: 'service-emergency',
  title: "Emergency Hydraulic Hose Repair",
  heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80&fm=webp",
  subheading: "When a hose blows, your project stops. We get you back to work fast in Bakersfield, Wichita, and Lubbock with 24/7 on-site repair.",
  description: {
    heading: "We Don't Let Downtime Kill Your Profit",
    paragraphs: [
      "You know the drill: a main boom hose bursts, hydraulic fluid sprays everywhere, and your entire crew is standing around waiting. Every minute that machine sits idle costs you money. You don't need a call center; you need a **mobile hydraulic repair truck** on-site, right now.",
      "Frontline Hydraulic Services provides 24/7 **emergency mobile hydraulic hose repair** across **Bakersfield, CA**, **Wichita, KS**, and **Lubbock, TX**. We don't work 'banking hours'—we work your hours. Nights, weekends, holidays—if you're working, we're ready to dispatch. Our technicians are trained to handle high-pressure systems safely and efficiently.",
      "Our trucks are mobile workshops stocked with thousands of fittings, adapters, and high-pressure hoses (2-wire, 4-wire, and 6-wire). Whether you're stuck on a roadside in **Kern County**, a harvest field in **Sedgwick County**, or a drilling rig in **Lubbock**, we show up ready to crimp and install. No towing, no waiting for parts runs.",
      "We handle everything from blown excavator lines to steering hoses on dump trucks. We carry Code 61/62 flanges, JIC, ORFS, and BSP fittings to match Cat, Deere, Komatsu, and Volvo equipment. You make the call, we fix the leak, and your yellow iron gets back to moving dirt."
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
  id: 'service-fabrication',
  title: "Mobile Hydraulic Hose Fabrication",
  heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
  subheading: "Don't drive to the parts store. We build OEM-quality hydraulic hose assemblies right at your job site in Bakersfield, Wichita, and Lubbock.",
  description: {
    heading: "The Hose Shop That Comes to You",
    paragraphs: [
      "Why pull a mechanic off the job to drive 45 minutes to a parts counter, only to find out they don't have the fitting? Our **mobile hose fabrication** service kills that wasted time. We bring a fully capable hose shop directly to your location in **Bakersfield, Wichita, or Lubbock**.",
      "We specialize in **custom hydraulic hose assembly** on the fly. Whether you're re-hosing an old tractor or need a specific high-pressure line for a press, we cut, clean, and crimp it right on our truck tailgate. We stock Parker and Eaton style fittings to ensure compatibility.",
      "Frontline technicians match your old assembly exactly—checking pressure ratings, bend radius, and routing. You get a factory-quality hose installed without the headache of leaving the site. We fabricate 1/4\" to 2\" assemblies with pressure ratings up to 6,000 PSI."
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
    heroImage: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
    subheading: "Stop throwing parts at the problem. We pinpoint the root cause of pressure loss and slow cycle times with advanced flow testing.",
    description: {
        heading: "Expert Troubleshooting for Complex Systems",
        paragraphs: [
            "Is your excavator moving slow? Is your press losing tonnage? Don't just swap the pump and hope for the best—that gets expensive fast. You need **hydraulic system diagnostics** to find out what's actually wrong. Our experts use digital flow meters and pressure transducers to look inside the circuit.",
            "Our technicians use advanced flow meters, pressure gauges, and thermal imaging to see what's happening inside your system. We serve **Bakersfield, Wichita, and Lubbock**, troubleshooting everything from cavitation issues to overheating valves on construction and industrial equipment.",
            "We isolate the problem—whether it's a bypassing cylinder piston seal, a stuck relief valve, or a worn pump rotating group—so you fix only what's broken. Save your budget for the repairs that matter."
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
    id: 'service-cylinders',
    title: "Hydraulic Pump & Cylinder Repair",
    heroImage: "https://images.unsplash.com/photo-1581093583449-ed2521344530?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
    subheading: "Don't replace it if you can rebuild it. Expert repair for cylinders, pumps, and motors in Bakersfield, Wichita, and Lubbock.",
    description: {
        heading: "Restore Power to Your Hydraulics",
        paragraphs: [
            "When a cylinder starts drifting or a pump starts whining, you're losing money. Frontline offers **hydraulic pump and cylinder repair** services that bring your components back to OEM specs. We serve the heavy equipment markets in **Bakersfield, Wichita, and Lubbock**.",
            "For leaking cylinders, we can often perform **mobile resealing** right on the machine, saving you the hassle of removal. For major damage—scored rods, worn barrels, or blown pumps—we take them to our shop for a full rebuild, honing, and bench test.",
            "We handle gear, vane, and piston pumps (Rexroth, Parker, Vickers), as well as cylinders of all sizes. Don't buy new until you let us check if a rebuild can save you 50% of the cost."
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
    id: 'service-fluid',
    title: "Hydraulic Oil & Fluid Services",
    heroImage: "https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
    subheading: "Dirty oil destroys hydraulic systems. We flush, filter, and refill to keep your machines running cool in Bakersfield, Wichita, and Lubbock.",
    description: {
        heading: "Clean Oil Means Long Life",
        paragraphs: [
            "70% of hydraulic failures are caused by contaminated fluid. If you're running dirty oil, you're sandblasting your pumps and valves from the inside out. Frontline provides **mobile hydraulic fluid services** in **Bakersfield, Wichita, and Lubbock**.",
            "We offer on-site **kidney loop filtration** to clean your oil without shutting you down, water removal for systems that have been sitting, and complete **system flushing** after a catastrophic pump failure. We target ISO 4406 cleanliness standards.",
            "Don't wait for a valve to stick or a pump to grenade. Let us sample your fluid and get it back to spec."
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
    id: 'service-fleet',
    title: "Hydraulic Fleet Maintenance",
    heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
    subheading: "Fix it before it breaks. Preventive maintenance programs for fleets in Bakersfield, Wichita, and Lubbock.",
    description: {
        heading: "Stop Chasing Breakdowns",
        paragraphs: [
            "Emergency repairs cost 4x more than planned maintenance. If you're running a fleet to failure, you're bleeding profit. Frontline offers **preventive hydraulic maintenance** to catch issues while they are small, cheap fixes.",
            "Our team comes to your yard during downtime to inspect hoses, change filters, and sample fluids. We tag your hoses so when one finally does blow, you can just call in the number on the tag.",
            "Serving **Bakersfield, Wichita, and Lubbock**, we help fleet managers sleep better at night knowing their yellow iron is ready to work in the morning."
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
    id: 'service-industrial',
    title: "Industrial Hydraulic Services",
    heroImage: "https://images.unsplash.com/photo-1565435967962-d2279c6b5420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
    subheading: "Keep the line moving. Specialized hydraulic repair for factories, presses, and plants in Bakersfield, Wichita, and Lubbock.",
    description: {
        heading: "Plant Maintenance & Repair",
        paragraphs: [
            "In a factory, if the hydraulics stop, the money stops. Frontline understands the pressure of production targets. We provide **industrial hydraulic repair** for injection molding, metal stamping, and automation equipment.",
            "Our techs are trained on power units, servo valves, and high-pressure press circuits. Whether you have a conveyor motor down in **Wichita** or a 500-ton press leak in **Bakersfield**, we have the expertise to fix it.",
            "We respect your safety protocols—LOTO, PPE, and site rules. We work with your maintenance team to get the line back up or perform scheduled shutdowns."
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
    id: 'service-equipment',
    title: "Heavy Equipment Hydraulic Repair",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80&fm=webp",
    subheading: "If it's yellow and leaks, we fix it. Excavators, dozers, and loaders repaired on-site in Bakersfield, Wichita, and Lubbock.",
    description: {
        heading: "Heavy Equipment Repair That Comes to the Dirt",
        paragraphs: [
            "Your machine doesn't make money sitting on a trailer. When an excavator loses swing power or a loader bucket drifts, you need it fixed right there in the dirt. Frontline specializes in **heavy equipment hydraulic repair** for Cat, Deere, Komatsu, and Volvo.",
            "We serve the construction and mining industries in **Bakersfield, Wichita, and Lubbock**. Our trucks are rigged to handle the big stuff—boom cylinders, travel motors, and main pumps.",
            "Forget the hauling fees and the weeks of waiting at the dealer. We diagnose and repair your heavy iron on the job site so you can get back to grade."
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
        id: 'service-emergency',
        title: "Emergency Hose Repair",
        description: "24/7 on-site replacement. We come to you.",
        icon: Timer
    },
    {
        id: 'service-fabrication',
        title: "Mobile Hose Fabrication",
        description: "Custom assemblies built on our truck.",
        icon: Settings
    },
    {
        id: 'service-diagnostics',
        title: "Hydraulic Diagnostics",
        description: "Find the root cause of pressure loss.",
        icon: Zap
    },
    {
        id: 'service-fleet',
        title: "Fleet Maintenance",
        description: "Prevent failures with scheduled service.",
        icon: ClipboardCheck
    },
    {
        id: 'service-cylinders',
        title: "Pump & Cylinder Repair",
        description: "Rebuilds and resealing to save money.",
        icon: Wrench
    },
    {
        id: 'service-fluid',
        title: "Fluid Services",
        description: "Flushing, filtering, and cleaning oil.",
        icon: Droplet
    },
    {
        id: 'service-industrial',
        title: "Industrial Plant Service",
        description: "Press and conveyor hydraulic repair.",
        icon: Factory
    },
    {
        id: 'service-equipment',
        title: "Heavy Equipment Repair",
        description: "Excavator and loader hydraulics.",
        icon: Tractor
    }
];