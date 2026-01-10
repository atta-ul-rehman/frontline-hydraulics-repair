import { LocationPageData } from '../types';
import { Droplet, Tractor, HardHat, Truck, Factory, Wrench } from 'lucide-react';

// 1. BAKERSFIELD, CA
export const bakersfieldData: LocationPageData = {
  id: 'location-bakersfield',
  city: "Bakersfield",
  state: "CA",
  county: "Kern County",
  heroImage: "https://images.unsplash.com/photo-1535091703666-4148b52f10d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  intro: {
    heading: "Bakersfield's 24/7 Mobile Hydraulic Repair",
    paragraphs: [
      "In Kern County, if the equipment stops, the money stops. Whether you're drilling in Oildale, harvesting almonds in Lamont, or grading a site in Rosedale, you need a hydraulic shop that comes to you. Frontline is your local expert for **mobile hydraulic hose repair in Bakersfield**.",
      "We know the heat, the dust, and the heavy demands you put on your machines. Our trucks are stocked to handle the oil patch and the ag fields alike. When a hose blows at 2 AM on a rig, we answer the phone.",
      "Stop waiting for a tow. Call Frontline for **hydraulic repair in Bakersfield** and let us fix your yellow iron right where it sits."
    ]
  },
  localDetails: {
    phone: "859 462-4673",
    hours: "24/7 Emergency Dispatch",
    responseTime: "60-Min Avg Response",
    serviceAreaShort: "Bakersfield & Kern Co.",
    coverageAreas: ["Oildale / Oil Patch", "Rosedale / Industrial", "Lamont / Arvin Ag", "Shafter / Wasco"]
  },
  localIndustries: [
    {
      title: "Oil & Gas",
      description: "Rig hydraulics, tongs, and well-servicing units.",
      icon: Droplet
    },
    {
      title: "Agriculture",
      description: "Harvesters, shakers, and tractors during crush season.",
      icon: Tractor
    },
    {
      title: "Construction",
      description: "Excavators and dozers on Hwy 99/58 projects.",
      icon: HardHat
    },
    {
      title: "Logistics",
      description: "Fleet repair for distribution centers.",
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
    mapImage: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1931&q=80"
  },
  faqs: [
    {
      question: "How fast can you get to the oil fields in Oildale?",
      answer: "We are based locally. For Oildale and North Bakersfield, we can usually be on-site in under an hour."
    },
    {
      question: "Do you carry fittings for oil field equipment?",
      answer: "Yes, we stock the heavy-duty pressure fittings, hammer unions, and hoses common on rigs and well-service trucks."
    },
    {
      question: "Are you available weekends during harvest?",
      answer: "Absolutely. We know ag doesn't stop for weekends. We run 24/7 shifts to keep your harvesters running."
    },
    {
      question: "Do you go as far as Tehachapi?",
      answer: "Yes, we service all of Kern County, including the pass."
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
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80",
    intro: {
        heading: "Wichita's Choice for Industrial & Mobile Hydraulics",
        paragraphs: [
            "From the aircraft plants to the wheat fields, Wichita keeps moving. Frontline provides the **mobile hydraulic repair Wichita** businesses trust to keep production lines and farm equipment running. We are your local boots-on-the-ground support.",
            "Our technicians are experts in both industrial plant maintenance and heavy equipment repair. Whether you have a press down in an aerospace shop or a combine stuck in a field in **Sedgwick County**, we have a truck ready to roll.",
            "Don't lose a day of production. Call us for **hydraulic hose repair in Wichita** and get a certified technician to your site fast."
        ]
    },
    localDetails: {
        phone: "859 462-4673",
        hours: "24/7 Emergency Dispatch",
        responseTime: "60-Min Avg Response",
        serviceAreaShort: "Wichita & Sedgwick Co.",
        coverageAreas: ["Downtown / Old Town", "Park City Industrial", "Spirit/Aircraft District", "Surrounding Ag Land"]
    },
    localIndustries: [
        { title: "Aerospace Mfg", description: "Presses, lifts, and GSE maintenance.", icon: Factory },
        { title: "Agriculture", description: "Combines and tractors during harvest.", icon: Tractor },
        { title: "Construction", description: "Site prep and road crews.", icon: HardHat },
        { title: "Industrial", description: "Plant conveyor and power unit repair.", icon: Wrench }
    ],
    serviceArea: {
        cities: ["Wichita", "Derby", "Newton", "El Dorado", "Haysville", "Andover", "Goddard", "Valley Center"],
        mapImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1933&q=80"
    },
    faqs: [
        { question: "Do you have clearance for aircraft plants?", answer: "Yes, we work with major manufacturing facilities in Wichita and carry the necessary insurance and safety credentials." },
        { question: "How far out of Wichita do you travel?", answer: "We cover all of Sedgwick County and neighboring areas like Newton and El Dorado." },
        { question: "Can you fix farm equipment in the field?", answer: "Yes. Our trucks can drive right up to your combine to crimp a hose on the spot." }
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
    heroImage: "https://images.unsplash.com/photo-1588696773516-6c5b9f93922d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    intro: {
        heading: "Hub City's Toughest Hydraulic Repair",
        paragraphs: [
            "It's dusty, it's hot, and the work doesn't stop. Frontline brings rugged **mobile hydraulic repair to Lubbock** and the South Plains. We support the cotton strippers, the oil rigs, and the construction crews that build West Texas.",
            "Our **Lubbock hydraulic service** is built for speed. When a line blows during harvest or drilling operations, you can't afford to wait for parts. Our trucks are stocked to handle the specific needs of **Lubbock County** equipment.",
            "Call us for **hydraulic repair in Lubbock**. We show up, we fix it, and we let you get back to work."
        ]
    },
    localDetails: {
        phone: "859 462-4673",
        hours: "24/7 Emergency Dispatch",
        responseTime: "60-Min Metro Response",
        serviceAreaShort: "Lubbock & South Plains",
        coverageAreas: ["Loop 289 Corridor", "Slaton Hwy Industrial", "Cotton Ag Belt", "Oilfield Sites"]
    },
    localIndustries: [
        { title: "Cotton Ag", description: "Strippers, module builders, and gins.", icon: Tractor },
        { title: "Oil & Gas", description: "Support for drilling and well service.", icon: Droplet },
        { title: "Construction", description: "Heavy iron repair on site.", icon: HardHat },
        { title: "Trucking", description: "Fleet repair for hauling operations.", icon: Truck }
    ],
    serviceArea: {
        cities: ["Lubbock", "Levelland", "Slaton", "Plainview", "Brownfield", "Tahoka", "Post", "Idalou"],
        mapImage: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1931&q=80"
    },
    faqs: [
        { question: "Are you open during cotton harvest?", answer: "We never close. We know that's your money-making season, so we run 24/7 support for farmers." },
        { question: "Do you have fittings for John Deere cotton strippers?", answer: "Yes, we stock the metric and standard fittings common on JD and Case equipment." },
        { question: "Do you go out to Levelland or Post?", answer: "Yes, we service the entire South Plains region." }
    ],
    nearbyLocations: [
        { name: "Amarillo, TX", id: "location-amarillo" },
        { name: "Midland/Odessa, TX", id: "location-midland" }
    ]
};