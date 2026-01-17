import { LocationPageData } from '../types';
import { Droplet, Tractor, HardHat, Truck, Factory, Wrench, Zap } from 'lucide-react';

// 1. BAKERSFIELD, CA
export const bakersfieldData: LocationPageData = {
  id: 'location-bakersfield',
  city: "Bakersfield",
  state: "CA",    
  county: "Kern County",
  coords: [35.3733, -119.0187],
heroImage: "https://images.unsplash.com/photo-1700126830092-9e7c2fffee46?auto=format&fit=crop&w=2000&q=80&fm=webp",
  seoTitle: "24/7 Mobile Hydraulic Repair in Bakersfield, CA",
  seoDesc: "Emergency hydraulic hose repair in Bakersfield and Kern County. 24/7 mobile service for oilfield, agriculture, and construction equipment.",
  intro: {
    heading: "Bakersfield's Mobile Hydraulic Repair Leader",
    paragraphs: [
      "From the pump jacks in **Oildale** to the almond orchards in **Lamont**, Bakersfield runs on hydraulics. When a hose fails on Hwy 99 or a rig goes down in the **Kern River Oil Field**, you need immediate emergency hydraulic repair. Frontline delivers 24/7 **mobile hydraulic hose repair in Bakersfield** with certified technicians and on-site fabrication capability throughout Kern County.",
      "We specialize in the unique hydraulic challenges of the San Joaquin Valley. Our certified mobile trucks carry heavy-duty 4-wire and 6-wire hoses for oilfield applications, metric fittings for agricultural harvesters, and complete diagnostic equipment for OEM troubleshooting. Whether you're stranded on the Grapevine or in a field near Shafter, we dispatch to you with high-pressure hose assembly capability.",
      "Don't lose a production day. Call Frontline for fast **Bakersfield emergency hydraulic repair and on-site hose fabrication**. Our locally dispatched, certified technicians know the area and deliver 60-minute average emergency response to get your equipment back to work."
    ]
  },
  localDetails: {
    phone: "859 462-4673",
    hours: "24/7 Emergency Dispatch",
    responseTime: "60-Min Avg Response",
    serviceAreaShort: "Bakersfield & Kern Co.",
    coverageAreas: ["Oildale", "Rosedale", "Lamont", "Shafter", "Wasco", "Arvin", "Tehachapi"]
  },
  localIndustries: [
    {
      title: "Oil & Gas Operations",
      description: "Emergency hydraulic repair for drilling rigs, workover units, and well-service equipment in Oildale, Belridge, and Elk Hills oilfield operations.",
      icon: Droplet
    },
    {
      title: "Agricultural Equipment",
      description: "Fast on-site hose fabrication and emergency repair for almond shakers, pistachio sweepers, and cotton harvesters requiring high-pressure hydraulic service.",
      icon: Tractor
    },
    {
      title: "Heavy Construction",
      description: "Mobile hydraulic repair for excavators, dozers, and heavy equipment on Hwy 58 and the 99 corridor construction projects.",
      icon: HardHat
    },
    {
      title: "Trucking & Fleet",
      description: "Hydraulic maintenance programs for distribution fleets and dump trucks in the Rosedale and 7th Standard industrial areas.",
      icon: Truck
    }
  ],
  serviceArea: {
    cities: [
      "Bakersfield",
      "Oildale",
      "Rosedale",
      "Lamont",
      "Shafter",
      "Wasco",
      "Arvin",
      "Tehachapi"
    ],
    mapImage: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1931&q=80&fm=webp"
  },
  faqs: [
    {
      question: "Do you service the Kern River Oil Field?",
      answer: "Yes, our technicians are trained and equipped for oilfield environments. We carry the high-pressure hoses and safety gear required for rig sites."
    },
    {
      question: "Can you fix a harvester in the field?",
      answer: "Absolutely. During harvest season, we know every minute counts. We drive our mobile workshop directly to your row in Shafter, Arvin, or Lamont."
    },
    {
      question: "How fast can you get to the Grapevine?",
      answer: "We treat roadside breakdowns on I-5 and Hwy 99 as priorities. Depending on traffic, we can usually reach the Tejon Pass area quickly."
    },
    {
      question: "Do you stock metric fittings for John Deere/Kubota?",
      answer: "Yes, we carry a full line of metric, BSP, and ORFS fittings common on modern agricultural equipment found in Kern County."
    }
  ],
  nearbyLocations: [
    { name: "Visalia, CA", id: "location-visalia" },
    { name: "Santa Clarita, CA", id: "location-santa-clarita" }
  ]
};

// 2. WICHITA, KS
export const wichitaData: LocationPageData = {
    id: 'location-wichita',
    city: "Wichita",
    state: "KS",
    county: "Sedgwick County",
    coords: [37.6872, -97.3301],
    heroImage: "https://images.unsplash.com/photo-1760011604179-b75b048fd19f?auto=format&fit=crop&w=2000&q=80&fm=webp",
    seoTitle: "24/7 Mobile Hydraulic Repair in Wichita, KS",
    seoDesc: "Emergency hydraulic hose repair in Wichita and Sedgwick County. 24/7 mobile service for aerospace, construction, and industrial equipment.",
    intro: {
        heading: "Wichita's Industrial & Mobile Hydraulic Repair Experts",
        paragraphs: [
            "As the Air Capital of the World, Wichita demands precision in emergency hydraulic repair. Frontline provides expert **mobile hydraulic repair and on-site fabrication in Wichita** and Sedgwick County, serving aerospace manufacturing support, heavy construction, and regional industrial facilities with certified technicians.",
            "From manufacturing plants along **Kellogg Avenue** to wheat fields near **Goddard** and **Derby**, our certified mobile hydraulic trucks are positioned for rapid emergency response. We specialize in industrial hydraulic systems (presses, injection molding) and OEM diagnostics for mobile heavy equipment repair.",
            "Whether you have a forklift hydraulic failure at a warehouse near **I-135** or a combine stuck in a field near **Valley Center**, call Frontline. We deliver OEM-quality hose fabrication, high-pressure assembly, and hydraulic system diagnostics directly on-site."
        ]
    },
    localDetails: {
        phone: "859 462-4673",
        hours: "24/7 Emergency Dispatch",
        responseTime: "60-Min Avg Response",
        serviceAreaShort: "Wichita & Sedgwick Co.",
        coverageAreas: ["Downtown", "Old Town", "Park City", "Derby", "Goddard", "Haysville"]
    },
    localIndustries: [
        { title: "Aerospace Manufacturing", description: "Emergency hydraulic maintenance for industrial presses, ground support equipment, and GSE at major aviation facilities with OEM diagnostics.", icon: Factory },
        { title: "Agricultural Equipment", description: "Fast mobile hydraulic repair and emergency hose fabrication for combine equipment and tractors during wheat harvest season.", icon: Tractor },
        { title: "Heavy Construction", description: "On-site hydraulic repair for excavators and road equipment on I-35 and Kellogg expansion construction projects.", icon: HardHat },
        { title: "Industrial & Manufacturing", description: "Plant conveyor and hydraulic power unit repair with certified technicians in industrial districts.", icon: Wrench }
    ],
    serviceArea: {
        cities: ["Wichita", "Derby", "Newton", "El Dorado", "Haysville", "Andover", "Goddard", "Valley Center"],
        mapImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1933&q=80&fm=webp"
    },
    faqs: [
        { question: "Do you serve the aircraft plants?", answer: "Yes, we work with facilities across Wichita. We carry the necessary insurance and follow strict safety protocols for industrial sites." },
        { question: "How far out of Wichita do you travel?", answer: "We cover all of Sedgwick County and frequently dispatch to Newton, El Dorado, and Wellington." },
        { question: "Can you fix a forklift on site?", answer: "Yes, we repair mast hoses, tilt cylinders, and steering hydraulics for forklifts in warehouses and distribution centers." },
        { question: "Do you offer 24/7 service?", answer: "Yes. Manufacturing lines and harvest crews don't stop at 5 PM, and neither do we." }
    ],
    nearbyLocations: [
        { name: "Topeka, KS", id: "location-topeka" },
        { name: "Oklahoma City, OK", id: "location-okc" }
    ]
};

// 3. LUBBOCK, TX
export const lubbockData: LocationPageData = {
    id: 'location-lubbock',
    city: "Lubbock",
    state: "TX",
    county: "Lubbock County",
    coords: [33.5779, -101.8552],
    heroImage: "https://images.unsplash.com/photo-1760181925370-21ecb4560bee?auto=format&fit=crop&w=2000&q=80&fm=webp",
    seoTitle: "24/7 Mobile Hydraulic Repair in Lubbock, TX",
    seoDesc: "Emergency hydraulic hose repair in Lubbock and South Plains. 24/7 mobile service for oilfield, cotton, and construction equipment.",
    intro: {
        heading: "Hub City's Most Trusted Emergency Hydraulic Repair Service",
        paragraphs: [
            "The South Plains demand tough, dependable **emergency mobile hydraulic repair in Lubbock**. Frontline delivers 24/7 certified technicians with complete mobile fabrication labs, supporting West Texas oilfield equipment and cotton/ag machinery that power the region's economy.",
            "Our certified mobile hydraulic repair trucks are a familiar sight on **Loop 289** and farm roads to **Idalou** and **Slaton**. During cotton harvest season, a blown stripper hose is a disaster. That's why we provide 24/7 emergency dispatch with on-site hose fabrication to get you back in the row fast with high-pressure assemblies.",
            "We also support **Permian Basin overflow**, providing industrial hydraulic repair for drilling rigs and well-service fleets in the region. From **Texas Tech** campus construction to the oil patch, Frontline is Lubbock's certified partner for emergency hydraulic service and OEM diagnostics."
        ]
    },
    localDetails: {
        phone: "859 462-4673",
        hours: "24/7 Emergency Dispatch",
        responseTime: "60-Min Metro Response",
        serviceAreaShort: "Lubbock & South Plains",
        coverageAreas: ["Loop 289", "Slaton", "Levelland", "Wolfforth", "Shallowater"]
    },
    localIndustries: [
        { title: "Cotton Ag Equipment", description: "Expert emergency repair and on-site fabrication for cotton strippers, module builders, and gin hydraulic systems requiring certified technicians.", icon: Tractor },
        { title: "Oil & Gas Operations", description: "Emergency mobile hydraulic repair and diagnostics for drilling equipment and well-service trucks on the South Plains.", icon: Droplet },
        { title: "Heavy Construction", description: "Mobile hydraulic repair for excavators and heavy equipment on road and infrastructure projects.", icon: HardHat },
        { title: "Wind Energy", description: "Emergency hydraulic crane and torque wrench support for wind turbine installation and maintenance.", icon: Zap }
    ],
    serviceArea: {
        cities: ["Lubbock", "Levelland", "Slaton", "Plainview", "Brownfield", "Tahoka", "Post", "Idalou"],
        mapImage: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1931&q=80&fm=webp"
    },
    faqs: [
        { question: "Are you open during cotton harvest?", answer: "We never close. We know harvest is 'go time' for Lubbock. We run 24/7 shifts to keep strippers and boll buggies running." },
        { question: "Do you have John Deere stripper fittings?", answer: "Yes, we stock the specific metric and standard fittings common on JD and Case cotton equipment." },
        { question: "Do you go out to the oilfields?", answer: "Yes, we service equipment in Levelland, Brownfield, and Post. We are equipped for the oil patch." },
        { question: "Can you build hoses for wind turbine cranes?", answer: "Yes, we can fabricate high-pressure assemblies for mobile cranes and support equipment used in wind energy." }
    ],
    nearbyLocations: [
        { name: "Amarillo, TX", id: "location-amarillo" },
        { name: "Midland/Odessa, TX", id: "location-midland" }
    ]
};
