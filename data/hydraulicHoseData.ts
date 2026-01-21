// Hydraulic Hose Dash Size Data
// Based on SAE J517 and ISO 4397 industry standards
// Reference data compiled from publicly available manufacturer specifications

export interface HoseDashSize {
  dashSize: string;
  dashNumber: number;
  insideDiameterInches: number;
  insideDiameterFraction: string;
  insideDiameterMm: number;
  outsideDiameterInches: string;
  outsideDiameterMm: string;
  flowRateGpm: { min: number; max: number };
  maxPsi1Wire: number;
  maxPsi2Wire: number;
  maxPsi4Wire: number;
  maxPsiSpiral: number;
  bendRadiusInches: number;
  weightPerFoot: number; // lbs
  commonApplications: string[];
  saeEquivalent: string;
  notes: string;
}

export interface HoseType {
  id: string;
  name: string;
  description: string;
  maxPressure: string;
  applications: string[];
  construction: string;
}

export const hoseTypes: HoseType[] = [
  {
    id: '1wire',
    name: '1-Wire Braid (SAE 100R1)',
    description: 'Single wire braid reinforcement with synthetic rubber tube and cover',
    maxPressure: '2,250 - 5,800 PSI depending on size',
    applications: ['Low to medium pressure hydraulic lines', 'Return lines', 'Drain lines'],
    construction: 'Synthetic rubber tube, one braid of high-tensile steel wire, synthetic rubber cover'
  },
  {
    id: '2wire',
    name: '2-Wire Braid (SAE 100R2)',
    description: 'Double wire braid reinforcement for higher pressure applications',
    maxPressure: '3,000 - 5,800 PSI depending on size',
    applications: ['Medium to high pressure hydraulic lines', 'Main pressure lines', 'Cylinder circuits'],
    construction: 'Synthetic rubber tube, two braids of high-tensile steel wire, synthetic rubber cover'
  },
  {
    id: '4wire',
    name: '4-Wire Spiral (SAE 100R9/R10)',
    description: 'Four-wire spiral reinforcement for extreme pressure applications',
    maxPressure: '4,000 - 6,000 PSI depending on size',
    applications: ['High pressure hydraulic systems', 'Heavy equipment', 'Impact applications'],
    construction: 'Synthetic rubber tube, four spirals of high-tensile steel wire, synthetic rubber cover'
  },
  {
    id: '6wire',
    name: '6-Wire Spiral (SAE 100R15)',
    description: 'Six-wire spiral reinforcement for ultra-high pressure applications',
    maxPressure: '5,000 - 6,000 PSI',
    applications: ['Ultra-high pressure systems', 'Mining equipment', 'Large excavators'],
    construction: 'Synthetic rubber tube, six spirals of high-tensile steel wire, synthetic rubber cover'
  }
];

export const dashSizeData: HoseDashSize[] = [
  {
    dashSize: '-2',
    dashNumber: 2,
    insideDiameterInches: 0.125,
    insideDiameterFraction: '1/8"',
    insideDiameterMm: 3.2,
    outsideDiameterInches: '0.38 - 0.44',
    outsideDiameterMm: '9.7 - 11.2',
    flowRateGpm: { min: 0.5, max: 1 },
    maxPsi1Wire: 5800,
    maxPsi2Wire: 5800,
    maxPsi4Wire: 0, // Not available in this size
    maxPsiSpiral: 0,
    bendRadiusInches: 1.5,
    weightPerFoot: 0.06,
    commonApplications: ['Gauge lines', 'Pilot lines', 'Instrumentation'],
    saeEquivalent: 'SAE 100R1AT/100R2AT',
    notes: 'Smallest common size, limited flow capacity'
  },
  {
    dashSize: '-3',
    dashNumber: 3,
    insideDiameterInches: 0.1875,
    insideDiameterFraction: '3/16"',
    insideDiameterMm: 4.8,
    outsideDiameterInches: '0.44 - 0.50',
    outsideDiameterMm: '11.2 - 12.7',
    flowRateGpm: { min: 1, max: 2 },
    maxPsi1Wire: 5000,
    maxPsi2Wire: 5000,
    maxPsi4Wire: 0,
    maxPsiSpiral: 0,
    bendRadiusInches: 2.0,
    weightPerFoot: 0.08,
    commonApplications: ['Pilot circuits', 'Control lines', 'Small actuators'],
    saeEquivalent: 'SAE 100R1AT/100R2AT',
    notes: 'Used in compact hydraulic systems'
  },
  {
    dashSize: '-4',
    dashNumber: 4,
    insideDiameterInches: 0.25,
    insideDiameterFraction: '1/4"',
    insideDiameterMm: 6.4,
    outsideDiameterInches: '0.50 - 0.58',
    outsideDiameterMm: '12.7 - 14.7',
    flowRateGpm: { min: 2, max: 4 },
    maxPsi1Wire: 5000,
    maxPsi2Wire: 5800,
    maxPsi4Wire: 6000,
    maxPsiSpiral: 6000,
    bendRadiusInches: 2.5,
    weightPerFoot: 0.11,
    commonApplications: ['Small cylinders', 'Pilot lines', 'Brake systems', 'Power steering'],
    saeEquivalent: 'SAE 100R1AT/100R2AT',
    notes: 'Very common size for auxiliary hydraulic circuits'
  },
  {
    dashSize: '-5',
    dashNumber: 5,
    insideDiameterInches: 0.3125,
    insideDiameterFraction: '5/16"',
    insideDiameterMm: 7.9,
    outsideDiameterInches: '0.58 - 0.67',
    outsideDiameterMm: '14.7 - 17.0',
    flowRateGpm: { min: 3, max: 6 },
    maxPsi1Wire: 4250,
    maxPsi2Wire: 5000,
    maxPsi4Wire: 5500,
    maxPsiSpiral: 5500,
    bendRadiusInches: 3.0,
    weightPerFoot: 0.14,
    commonApplications: ['Medium cylinders', 'Control valves', 'Power units'],
    saeEquivalent: 'SAE 100R1AT/100R2AT',
    notes: 'Less common intermediate size'
  },
  {
    dashSize: '-6',
    dashNumber: 6,
    insideDiameterInches: 0.375,
    insideDiameterFraction: '3/8"',
    insideDiameterMm: 9.5,
    outsideDiameterInches: '0.67 - 0.75',
    outsideDiameterMm: '17.0 - 19.1',
    flowRateGpm: { min: 5, max: 8 },
    maxPsi1Wire: 3500,
    maxPsi2Wire: 4500,
    maxPsi4Wire: 5000,
    maxPsiSpiral: 5000,
    bendRadiusInches: 3.5,
    weightPerFoot: 0.18,
    commonApplications: ['Auxiliary circuits', 'Loader hydraulics', 'Small excavators', 'Power steering pumps'],
    saeEquivalent: 'SAE 100R1AT/100R2AT',
    notes: 'Popular size for compact equipment'
  },
  {
    dashSize: '-8',
    dashNumber: 8,
    insideDiameterInches: 0.5,
    insideDiameterFraction: '1/2"',
    insideDiameterMm: 12.7,
    outsideDiameterInches: '0.83 - 0.92',
    outsideDiameterMm: '21.1 - 23.4',
    flowRateGpm: { min: 10, max: 15 },
    maxPsi1Wire: 2750,
    maxPsi2Wire: 4000,
    maxPsi4Wire: 4500,
    maxPsiSpiral: 5000,
    bendRadiusInches: 4.5,
    weightPerFoot: 0.27,
    commonApplications: ['Main hydraulic circuits', 'Loader lift cylinders', 'Medium excavators', 'Skid steers'],
    saeEquivalent: 'SAE 100R1AT/100R2AT',
    notes: 'Most common size in construction equipment'
  },
  {
    dashSize: '-10',
    dashNumber: 10,
    insideDiameterInches: 0.625,
    insideDiameterFraction: '5/8"',
    insideDiameterMm: 15.9,
    outsideDiameterInches: '1.00 - 1.08',
    outsideDiameterMm: '25.4 - 27.4',
    flowRateGpm: { min: 15, max: 23 },
    maxPsi1Wire: 2250,
    maxPsi2Wire: 3500,
    maxPsi4Wire: 4000,
    maxPsiSpiral: 4500,
    bendRadiusInches: 5.5,
    weightPerFoot: 0.38,
    commonApplications: ['Pump pressure lines', 'Large cylinders', 'Main circuits', 'Excavator boom'],
    saeEquivalent: 'SAE 100R1AT/100R2AT',
    notes: 'Common for medium to large equipment'
  },
  {
    dashSize: '-12',
    dashNumber: 12,
    insideDiameterInches: 0.75,
    insideDiameterFraction: '3/4"',
    insideDiameterMm: 19.1,
    outsideDiameterInches: '1.17 - 1.25',
    outsideDiameterMm: '29.7 - 31.8',
    flowRateGpm: { min: 22, max: 33 },
    maxPsi1Wire: 1875,
    maxPsi2Wire: 3000,
    maxPsi4Wire: 4000,
    maxPsiSpiral: 4000,
    bendRadiusInches: 7.0,
    weightPerFoot: 0.52,
    commonApplications: ['Tank return lines', 'Large pump outlets', 'High-flow circuits', 'Excavator arm'],
    saeEquivalent: 'SAE 100R1AT/100R2AT',
    notes: 'Standard size for main pressure and return lines'
  },
  {
    dashSize: '-16',
    dashNumber: 16,
    insideDiameterInches: 1.0,
    insideDiameterFraction: '1"',
    insideDiameterMm: 25.4,
    outsideDiameterInches: '1.42 - 1.52',
    outsideDiameterMm: '36.1 - 38.6',
    flowRateGpm: { min: 40, max: 60 },
    maxPsi1Wire: 1250,
    maxPsi2Wire: 2500,
    maxPsi4Wire: 3500,
    maxPsiSpiral: 4000,
    bendRadiusInches: 9.0,
    weightPerFoot: 0.82,
    commonApplications: ['Main pump suction', 'High-volume return', 'Large excavators', 'Mining equipment'],
    saeEquivalent: 'SAE 100R1AT/100R2AT',
    notes: 'Large diameter for high-flow applications'
  },
  {
    dashSize: '-20',
    dashNumber: 20,
    insideDiameterInches: 1.25,
    insideDiameterFraction: '1-1/4"',
    insideDiameterMm: 31.8,
    outsideDiameterInches: '1.73 - 1.85',
    outsideDiameterMm: '43.9 - 47.0',
    flowRateGpm: { min: 62, max: 93 },
    maxPsi1Wire: 1000,
    maxPsi2Wire: 2000,
    maxPsi4Wire: 3000,
    maxPsiSpiral: 3500,
    bendRadiusInches: 11.5,
    weightPerFoot: 1.15,
    commonApplications: ['Pump suction lines', 'Tank connections', 'High-volume systems', 'Large cranes'],
    saeEquivalent: 'SAE 100R4',
    notes: 'Typically used for suction and low-pressure return'
  },
  {
    dashSize: '-24',
    dashNumber: 24,
    insideDiameterInches: 1.5,
    insideDiameterFraction: '1-1/2"',
    insideDiameterMm: 38.1,
    outsideDiameterInches: '2.02 - 2.14',
    outsideDiameterMm: '51.3 - 54.4',
    flowRateGpm: { min: 90, max: 134 },
    maxPsi1Wire: 875,
    maxPsi2Wire: 1625,
    maxPsi4Wire: 2500,
    maxPsiSpiral: 3000,
    bendRadiusInches: 14.0,
    weightPerFoot: 1.55,
    commonApplications: ['Large pump suction', 'Reservoir connections', 'Heavy mining equipment'],
    saeEquivalent: 'SAE 100R4',
    notes: 'Large bore for maximum flow capacity'
  },
  {
    dashSize: '-32',
    dashNumber: 32,
    insideDiameterInches: 2.0,
    insideDiameterFraction: '2"',
    insideDiameterMm: 50.8,
    outsideDiameterInches: '2.56 - 2.70',
    outsideDiameterMm: '65.0 - 68.6',
    flowRateGpm: { min: 160, max: 240 },
    maxPsi1Wire: 625,
    maxPsi2Wire: 1250,
    maxPsi4Wire: 2000,
    maxPsiSpiral: 2500,
    bendRadiusInches: 18.0,
    weightPerFoot: 2.25,
    commonApplications: ['Large pump suction', 'Main reservoir connections', 'Industrial presses', 'Mining draglines'],
    saeEquivalent: 'SAE 100R4',
    notes: 'Industrial heavy-duty applications'
  },
  {
    dashSize: '-40',
    dashNumber: 40,
    insideDiameterInches: 2.5,
    insideDiameterFraction: '2-1/2"',
    insideDiameterMm: 63.5,
    outsideDiameterInches: '3.12 - 3.28',
    outsideDiameterMm: '79.2 - 83.3',
    flowRateGpm: { min: 250, max: 375 },
    maxPsi1Wire: 500,
    maxPsi2Wire: 1000,
    maxPsi4Wire: 1600,
    maxPsiSpiral: 2000,
    bendRadiusInches: 23.0,
    weightPerFoot: 3.35,
    commonApplications: ['Industrial plant systems', 'Mining equipment', 'Large presses', 'Ship hydraulics'],
    saeEquivalent: 'SAE 100R4',
    notes: 'Extra-large bore for industrial applications'
  },
  {
    dashSize: '-48',
    dashNumber: 48,
    insideDiameterInches: 3.0,
    insideDiameterFraction: '3"',
    insideDiameterMm: 76.2,
    outsideDiameterInches: '3.67 - 3.85',
    outsideDiameterMm: '93.2 - 97.8',
    flowRateGpm: { min: 360, max: 540 },
    maxPsi1Wire: 375,
    maxPsi2Wire: 750,
    maxPsi4Wire: 1200,
    maxPsiSpiral: 1500,
    bendRadiusInches: 28.0,
    weightPerFoot: 4.75,
    commonApplications: ['Industrial suction', 'Large reservoir lines', 'Mining operations', 'Marine applications'],
    saeEquivalent: 'SAE 100R4',
    notes: 'Maximum common size for industrial applications'
  }
];

// Equipment type recommendations
export interface EquipmentType {
  id: string;
  name: string;
  typicalDashSizes: string[];
  flowRangeGpm: { min: number; max: number };
  typicalPressurePsi: number;
  description: string;
}

export const equipmentTypes: EquipmentType[] = [
  {
    id: 'mini-excavator',
    name: 'Mini Excavator (< 6 ton)',
    typicalDashSizes: ['-4', '-6', '-8'],
    flowRangeGpm: { min: 5, max: 20 },
    typicalPressurePsi: 3000,
    description: 'Compact excavators, small cylinders, limited space'
  },
  {
    id: 'mid-excavator',
    name: 'Medium Excavator (6-20 ton)',
    typicalDashSizes: ['-6', '-8', '-10', '-12'],
    flowRangeGpm: { min: 15, max: 50 },
    typicalPressurePsi: 4000,
    description: 'Standard construction excavators'
  },
  {
    id: 'large-excavator',
    name: 'Large Excavator (20+ ton)',
    typicalDashSizes: ['-10', '-12', '-16', '-20'],
    flowRangeGpm: { min: 40, max: 120 },
    typicalPressurePsi: 5000,
    description: 'Heavy excavators, mining equipment'
  },
  {
    id: 'skid-steer',
    name: 'Skid Steer / Compact Loader',
    typicalDashSizes: ['-6', '-8', '-10'],
    flowRangeGpm: { min: 10, max: 35 },
    typicalPressurePsi: 3000,
    description: 'Compact loaders, auxiliary attachments'
  },
  {
    id: 'wheel-loader',
    name: 'Wheel Loader',
    typicalDashSizes: ['-8', '-10', '-12', '-16'],
    flowRangeGpm: { min: 20, max: 80 },
    typicalPressurePsi: 3500,
    description: 'Front-end loaders, bucket cylinders'
  },
  {
    id: 'tractor',
    name: 'Agricultural Tractor',
    typicalDashSizes: ['-4', '-6', '-8'],
    flowRangeGpm: { min: 5, max: 25 },
    typicalPressurePsi: 2500,
    description: 'Farm equipment, 3-point hitch, loader'
  },
  {
    id: 'forklift',
    name: 'Forklift / Material Handler',
    typicalDashSizes: ['-6', '-8', '-10'],
    flowRangeGpm: { min: 8, max: 30 },
    typicalPressurePsi: 2500,
    description: 'Lift cylinders, tilt cylinders'
  },
  {
    id: 'crane',
    name: 'Mobile Crane',
    typicalDashSizes: ['-10', '-12', '-16', '-20'],
    flowRangeGpm: { min: 25, max: 100 },
    typicalPressurePsi: 4500,
    description: 'Outriggers, boom, winch circuits'
  },
  {
    id: 'dozer',
    name: 'Bulldozer / Crawler',
    typicalDashSizes: ['-8', '-10', '-12', '-16'],
    flowRangeGpm: { min: 20, max: 70 },
    typicalPressurePsi: 4000,
    description: 'Blade, ripper, track drive'
  },
  {
    id: 'industrial',
    name: 'Industrial Press / Plant Equipment',
    typicalDashSizes: ['-16', '-20', '-24', '-32'],
    flowRangeGpm: { min: 50, max: 300 },
    typicalPressurePsi: 3000,
    description: 'High-volume industrial applications'
  }
];

// Helper functions
export const getDashSizeByNumber = (dashNumber: number): HoseDashSize | undefined => {
  return dashSizeData.find(d => d.dashNumber === dashNumber);
};

export const getDashSizeByDiameter = (diameterInches: number, tolerance: number = 0.05): HoseDashSize | undefined => {
  return dashSizeData.find(d => 
    Math.abs(d.insideDiameterInches - diameterInches) <= tolerance
  );
};

export const getAllDashSizes = (): HoseDashSize[] => {
  return dashSizeData;
};

// Conversion formulas
export const conversions = {
  // Dash size to inches: Dash ÷ 16 = Inches ID
  dashToInches: (dashNumber: number): number => dashNumber / 16,
  
  // Inches to millimeters
  inchesToMm: (inches: number): number => inches * 25.4,
  
  // Millimeters to inches
  mmToInches: (mm: number): number => mm / 25.4,
  
  // PSI to Bar
  psiToBar: (psi: number): number => psi / 14.504,
  
  // Bar to PSI
  barToPsi: (bar: number): number => bar * 14.504,
  
  // Bar to MPa
  barToMpa: (bar: number): number => bar / 10,
  
  // MPa to Bar
  mpaToBar: (mpa: number): number => mpa * 10,
  
  // PSI to MPa
  psiToMpa: (psi: number): number => psi / 145.04,
  
  // MPa to PSI
  mpaToPsi: (mpa: number): number => mpa * 145.04,
  
  // Calculate flow velocity (ft/sec)
  // Formula: GPM × 0.3208 ÷ ID² = ft/sec
  calculateVelocity: (gpm: number, insideDiameterInches: number): number => {
    return (gpm * 0.3208) / (insideDiameterInches * insideDiameterInches);
  },
  
  // Calculate required ID for target velocity
  // Rearranged: ID = √(GPM × 0.3208 ÷ velocity)
  calculateRequiredId: (gpm: number, targetVelocity: number): number => {
    return Math.sqrt((gpm * 0.3208) / targetVelocity);
  },
  
  // Calculate GPM from velocity and ID
  calculateGpm: (velocity: number, insideDiameterInches: number): number => {
    return (velocity * insideDiameterInches * insideDiameterInches) / 0.3208;
  },
  
  // Pressure drop estimation (simplified Darcy-Weisbach approximation)
  // Returns PSI per 100 feet
  estimatePressureDrop: (gpm: number, insideDiameterInches: number): number => {
    const velocity = (gpm * 0.3208) / (insideDiameterInches * insideDiameterInches);
    // Simplified formula for hydraulic fluid
    return (0.02 * velocity * velocity * 100) / insideDiameterInches;
  }
};

// Recommend dash size based on flow and pressure
export const recommendDashSize = (
  gpm: number, 
  workingPressurePsi: number,
  targetVelocityFtSec: number = 15 // Recommended: 15-20 ft/sec for pressure lines
): {
  recommended: HoseDashSize | null;
  alternatives: HoseDashSize[];
  velocity: number;
  warnings: string[];
} => {
  const requiredId = conversions.calculateRequiredId(gpm, targetVelocityFtSec);
  
  // Find the smallest dash size that meets requirements
  const sortedSizes = [...dashSizeData].sort((a, b) => a.insideDiameterInches - b.insideDiameterInches);
  
  let recommended: HoseDashSize | null = null;
  const alternatives: HoseDashSize[] = [];
  const warnings: string[] = [];
  
  for (const size of sortedSizes) {
    if (size.insideDiameterInches >= requiredId && size.maxPsi2Wire >= workingPressurePsi) {
      if (!recommended) {
        recommended = size;
      } else if (alternatives.length < 2) {
        alternatives.push(size);
      }
    }
  }
  
  if (recommended) {
    const actualVelocity = conversions.calculateVelocity(gpm, recommended.insideDiameterInches);
    
    if (actualVelocity > 25) {
      warnings.push('⚠️ Flow velocity exceeds recommended maximum of 25 ft/sec. Consider larger hose size.');
    }
    if (actualVelocity < 8) {
      warnings.push('💡 Flow velocity is low. Smaller hose size may be acceptable for this application.');
    }
    if (workingPressurePsi > recommended.maxPsi2Wire * 0.8) {
      warnings.push('⚠️ Working pressure is close to hose rating. Consider higher pressure hose or larger size.');
    }
    
    return {
      recommended,
      alternatives,
      velocity: actualVelocity,
      warnings
    };
  }
  
  return {
    recommended: null,
    alternatives: [],
    velocity: 0,
    warnings: ['❌ No suitable hose size found for these specifications. Consult a hydraulic engineer.']
  };
};

// FAQ Data
export const faqData = [
  {
    question: "What does the dash number mean on hydraulic hose?",
    answer: "The dash number represents the hose's inside diameter in sixteenths of an inch. For example, -8 dash hose has an 8/16\" (or 1/2\") inside diameter. This standardized sizing system makes it easy to select compatible hoses and fittings across different manufacturers."
  },
  {
    question: "How do I convert dash size to inches?",
    answer: "Divide the dash number by 16 to get the inside diameter in inches. For example: -4 ÷ 16 = 0.25\" (1/4\"), -8 ÷ 16 = 0.50\" (1/2\"), -16 ÷ 16 = 1.00\" (1\"). This simple formula works for all standard dash sizes."
  },
  {
    question: "What is the recommended flow velocity for hydraulic hose?",
    answer: "For pressure lines, the recommended flow velocity is 15-20 feet per second (ft/sec). Return lines can safely handle 10-15 ft/sec, while suction lines should stay below 4 ft/sec to prevent cavitation. Higher velocities increase heat generation and pressure drop."
  },
  {
    question: "How do I measure hydraulic hose size?",
    answer: "Measure the inside diameter (ID) of the hose opening, not the outside diameter. Use calipers for accuracy. Match the measurement to the nearest dash size: 1/4\" = -4, 3/8\" = -6, 1/2\" = -8, etc. For used hoses, the size is often printed on the layline."
  },
  {
    question: "What's the difference between 1-wire and 2-wire hydraulic hose?",
    answer: "1-wire hose (SAE 100R1) has one layer of braided steel reinforcement and is rated for lower pressures. 2-wire hose (SAE 100R2) has two braided layers and handles higher pressures. 2-wire is more common in construction equipment where pressures often exceed 3,000 PSI."
  },
  {
    question: "Can I use a larger dash size than recommended?",
    answer: "Yes, but it's not always ideal. Larger hoses reduce velocity and pressure drop, which sounds good, but they're heavier, cost more, and take more space. Low velocity can also cause sluggish response and poor heat dissipation. Match hose size to your flow requirements."
  },
  {
    question: "How do I convert PSI to Bar?",
    answer: "Divide PSI by 14.504 to get Bar. For example: 3000 PSI ÷ 14.504 = 206.8 Bar. Conversely, multiply Bar by 14.504 to get PSI. Many international specifications use Bar or MPa (1 Bar = 0.1 MPa), so these conversions are important for imported equipment."
  },
  {
    question: "What dash size do I need for my excavator?",
    answer: "Mini excavators typically use -4 to -8 dash hoses. Medium excavators (6-20 ton) commonly use -8 to -12. Large excavators (20+ ton) often require -12 to -20 for main circuits. Check your equipment manual for exact specifications, as sizing varies by manufacturer and model."
  },
  {
    question: "Why is my hydraulic hose getting hot?",
    answer: "Excessive heat usually indicates flow velocity is too high (undersized hose), restricted flow, or contaminated fluid. If velocity exceeds 20-25 ft/sec, the hose works harder and generates friction heat. Consider upsizing the hose or checking for restrictions in the system."
  },
  {
    question: "What's the maximum working pressure for hydraulic hose?",
    answer: "It depends on hose size and construction type. Smaller hoses generally handle higher pressures: -4 dash 2-wire is rated to 5,800 PSI, while -16 dash 2-wire is rated to 2,500 PSI. Always select hose rated above your maximum working pressure, including pressure spikes."
  }
];
