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
  intro: {
    heading: "Bakersfield's Premier Mobile Hydraulic Repair Service",
    paragraphs: [
      "From the pump jacks in **Oildale** to the almond orchards in **Lamont**, Bakersfield runs on hydraulics. When a hose blows on Hwy 99 or a rig goes down in the **Kern River Oil Field**, you can't wait for a shop to open. Frontline provides 24/7 **mobile hydraulic hose repair in Bakersfield** and throughout Kern County.",
      "We understand the unique demands of the San Joaquin Valley. Our trucks are stocked with the heavy-duty 4-wire and 6-wire hoses needed for oilfield applications, as well as the metric fittings common on agricultural harvesters. Whether you're stuck on the Grapevine or in a field in Shafter, we come to you.",
      "Don't lose a day of production. Call Frontline for **Bakersfield hydraulic repair**. We are locally dispatched and know the area, ensuring the fastest response times to get your yellow iron back to work."
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
      title: "Oil & Gas",
      description: "Supporting drilling rigs and workover units in Oildale, Belridge, and Elk Hills.",
      icon: Droplet
    },
    {
      title: "Agriculture",
      description: " rapid repair for almond shakers, pistachio sweepers, and tomato harvesters.",
      icon: Tractor
    },
    {
      title: "Construction",
      description: "Excavator and dozer repair for projects along Hwy 58 and the 99 corridor.",
      icon: HardHat
    },
    {
      title: "Logistics",
      description: "Fleet maintenance for distribution centers in the Rosedale/7th Standard area.",
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
    intro: {
        heading: "Wichita's Choice for Industrial & Mobile Hydraulics",
        paragraphs: [
            "Known as the Air Capital of the World, Wichita demands precision and reliability. Frontline provides expert **mobile hydraulic repair in Wichita** and Sedgwick County, serving aviation manufacturing support, heavy construction, and regional industrial plants.",
            "From the manufacturing plants along **Kellogg Avenue** to the wheat fields surrounding **Goddard** and **Derby**, our technicians are ready. We specialize in both industrial hydraulic systems (presses, injection molding) and mobile heavy equipment repair.",
            "Whether you have a forklift down at a warehouse near **I-135** or a combine stuck in a field near **Valley Center**, call Frontline. We bring OEM-quality hose fabrication and system diagnostics directly to your location."
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
        { title: "Aerospace Mfg", description: "Maintenance for presses and GSE at major aviation facilities.", icon: Factory },
        { title: "Agriculture", description: "Combine and tractor repair during wheat harvest season.", icon: Tractor },
        { title: "Construction", description: "Supporting road crews on I-35 and Kellogg expansion projects.", icon: HardHat },
        { title: "Industrial", description: "Plant conveyor and power unit repair in the industrial districts.", icon: Wrench }
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
    intro: {
        heading: "Hub City's Toughest Hydraulic Repair Service",
        paragraphs: [
            "It's dusty, it's hot, and the work never stops on the South Plains. Frontline brings rugged **mobile hydraulic repair to Lubbock**, supporting West Texas oilfield equipment and cotton/ag machinery that build the region.",
            "Our service trucks are a common sight on **Loop 289** and the farm roads out to **Idalou** and **Slaton**. We understand that during cotton harvest, a blown stripper hose is a disaster. That's why we offer 24/7 emergency dispatch to get you back in the row fast.",
            "We also support the **Permian Basin** overflow, providing hydraulic service for drilling rigs and well-service fleets operating in the region. From **Texas Tech** campus construction to the oil patch, Frontline is Lubbock's reliable partner."
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
        { title: "Cotton Ag", description: "Expert repair for cotton strippers, module builders, and gin hydraulics.", icon: Tractor },
        { title: "Oil & Gas", description: "Supporting drilling and well service trucks on the South Plains.", icon: Droplet },
        { title: "Construction", description: "Heavy iron repair for road and infrastructure projects.", icon: HardHat },
        { title: "Wind Energy", description: "Crane and hydraulic torque wrench support for wind farms.", icon: Zap }
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
