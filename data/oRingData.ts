// O-Ring Dash Size Data - AS568 Standard (Aerospace Standard 568)
// Reference: Parker O-Ring Handbook, SAE AS568, ISO 3601
// IMPORTANT: O-ring dash numbers follow AS568 standard and are NOT the same as hose dash sizing.

export interface ORingSize {
  dashNumber: string;
  series: '0XX' | '1XX' | '2XX' | '3XX' | '4XX';
  insideDiameterInches: number;
  insideDiameterMm: number;
  crossSectionInches: number;
  crossSectionMm: number;
  outsideDiameterInches: number;
  outsideDiameterMm: number;
  commonApplications: string[];
}

export interface ORingSeries {
  series: string;
  crossSectionInches: number;
  crossSectionMm: number;
  dashRange: string;
  description: string;
  applications: string[];
}

// AS568 Series Information
export const oRingSeries: ORingSeries[] = [
  {
    series: '0XX',
    crossSectionInches: 0.070,
    crossSectionMm: 1.78,
    dashRange: '001-050',
    description: 'Small cross-section O-rings for light-duty static sealing',
    applications: ['Instrumentation', 'Small fittings', 'Pilot circuits', 'Electronics']
  },
  {
    series: '1XX',
    crossSectionInches: 0.103,
    crossSectionMm: 2.62,
    dashRange: '102-178',
    description: 'Medium cross-section O-rings for general industrial applications',
    applications: ['Hydraulic fittings', 'Pneumatic systems', 'Fluid connectors', 'Valve stems']
  },
  {
    series: '2XX',
    crossSectionInches: 0.139,
    crossSectionMm: 3.53,
    dashRange: '201-284',
    description: 'Standard cross-section O-rings for medium-duty sealing',
    applications: ['Cylinder pistons', 'Hydraulic pumps', 'Flanges', 'Face seals']
  },
  {
    series: '3XX',
    crossSectionInches: 0.210,
    crossSectionMm: 5.33,
    dashRange: '309-395',
    description: 'Large cross-section O-rings for heavy-duty applications',
    applications: ['Large cylinders', 'Heavy equipment', 'Industrial valves', 'Pipe flanges']
  },
  {
    series: '4XX',
    crossSectionInches: 0.275,
    crossSectionMm: 6.99,
    dashRange: '425-475',
    description: 'Extra-large cross-section O-rings for severe duty sealing',
    applications: ['Mining equipment', 'Large hydraulic systems', 'Industrial presses', 'Marine']
  }
];

// AS568 O-Ring Data - Standard Sizes
// Data based on AS568B standard dimensions
// Note: Tolerances vary by application class - always verify with manufacturer specifications
export const oRingData: ORingSize[] = [
  // 0XX Series - 0.070" (1.78mm) Cross Section
  { dashNumber: '001', series: '0XX', insideDiameterInches: 0.029, insideDiameterMm: 0.74, crossSectionInches: 0.040, crossSectionMm: 1.02, outsideDiameterInches: 0.109, outsideDiameterMm: 2.77, commonApplications: ['Micro seals'] },
  { dashNumber: '002', series: '0XX', insideDiameterInches: 0.042, insideDiameterMm: 1.07, crossSectionInches: 0.050, crossSectionMm: 1.27, outsideDiameterInches: 0.142, outsideDiameterMm: 3.61, commonApplications: ['Instrumentation'] },
  { dashNumber: '003', series: '0XX', insideDiameterInches: 0.056, insideDiameterMm: 1.42, crossSectionInches: 0.060, crossSectionMm: 1.52, outsideDiameterInches: 0.176, outsideDiameterMm: 4.47, commonApplications: ['Small fittings'] },
  { dashNumber: '004', series: '0XX', insideDiameterInches: 0.070, insideDiameterMm: 1.78, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.210, outsideDiameterMm: 5.33, commonApplications: ['Pilot circuits'] },
  { dashNumber: '005', series: '0XX', insideDiameterInches: 0.101, insideDiameterMm: 2.57, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.241, outsideDiameterMm: 6.12, commonApplications: ['Small actuators'] },
  { dashNumber: '006', series: '0XX', insideDiameterInches: 0.114, insideDiameterMm: 2.90, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.254, outsideDiameterMm: 6.45, commonApplications: ['Fittings'] },
  { dashNumber: '007', series: '0XX', insideDiameterInches: 0.145, insideDiameterMm: 3.68, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.285, outsideDiameterMm: 7.24, commonApplications: ['Connectors'] },
  { dashNumber: '008', series: '0XX', insideDiameterInches: 0.176, insideDiameterMm: 4.47, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.316, outsideDiameterMm: 8.03, commonApplications: ['Small valves'] },
  { dashNumber: '009', series: '0XX', insideDiameterInches: 0.208, insideDiameterMm: 5.28, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.348, outsideDiameterMm: 8.84, commonApplications: ['Gauge ports'] },
  { dashNumber: '010', series: '0XX', insideDiameterInches: 0.239, insideDiameterMm: 6.07, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.379, outsideDiameterMm: 9.63, commonApplications: ['Instrumentation'] },
  { dashNumber: '011', series: '0XX', insideDiameterInches: 0.301, insideDiameterMm: 7.65, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.441, outsideDiameterMm: 11.20, commonApplications: ['Pilot lines'] },
  { dashNumber: '012', series: '0XX', insideDiameterInches: 0.364, insideDiameterMm: 9.25, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.504, outsideDiameterMm: 12.80, commonApplications: ['Static seals'] },
  { dashNumber: '013', series: '0XX', insideDiameterInches: 0.426, insideDiameterMm: 10.82, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.566, outsideDiameterMm: 14.38, commonApplications: ['Face seals'] },
  { dashNumber: '014', series: '0XX', insideDiameterInches: 0.489, insideDiameterMm: 12.42, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.629, outsideDiameterMm: 15.98, commonApplications: ['Covers'] },
  { dashNumber: '015', series: '0XX', insideDiameterInches: 0.551, insideDiameterMm: 14.00, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.691, outsideDiameterMm: 17.55, commonApplications: ['Housings'] },
  { dashNumber: '016', series: '0XX', insideDiameterInches: 0.614, insideDiameterMm: 15.60, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.754, outsideDiameterMm: 19.15, commonApplications: ['Covers'] },
  { dashNumber: '017', series: '0XX', insideDiameterInches: 0.676, insideDiameterMm: 17.17, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.816, outsideDiameterMm: 20.73, commonApplications: ['Small flanges'] },
  { dashNumber: '018', series: '0XX', insideDiameterInches: 0.739, insideDiameterMm: 18.77, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.879, outsideDiameterMm: 22.33, commonApplications: ['Caps'] },
  { dashNumber: '019', series: '0XX', insideDiameterInches: 0.801, insideDiameterMm: 20.35, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 0.941, outsideDiameterMm: 23.90, commonApplications: ['Covers'] },
  { dashNumber: '020', series: '0XX', insideDiameterInches: 0.864, insideDiameterMm: 21.95, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 1.004, outsideDiameterMm: 25.50, commonApplications: ['Static seals'] },
  { dashNumber: '021', series: '0XX', insideDiameterInches: 0.926, insideDiameterMm: 23.52, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 1.066, outsideDiameterMm: 27.08, commonApplications: ['Housings'] },
  { dashNumber: '022', series: '0XX', insideDiameterInches: 0.989, insideDiameterMm: 25.12, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 1.129, outsideDiameterMm: 28.68, commonApplications: ['Covers'] },
  { dashNumber: '023', series: '0XX', insideDiameterInches: 1.051, insideDiameterMm: 26.70, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 1.191, outsideDiameterMm: 30.25, commonApplications: ['Flanges'] },
  { dashNumber: '024', series: '0XX', insideDiameterInches: 1.114, insideDiameterMm: 28.30, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 1.254, outsideDiameterMm: 31.85, commonApplications: ['Static seals'] },
  { dashNumber: '025', series: '0XX', insideDiameterInches: 1.176, insideDiameterMm: 29.87, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 1.316, outsideDiameterMm: 33.43, commonApplications: ['Covers'] },
  { dashNumber: '026', series: '0XX', insideDiameterInches: 1.239, insideDiameterMm: 31.47, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 1.379, outsideDiameterMm: 35.03, commonApplications: ['Housings'] },
  { dashNumber: '027', series: '0XX', insideDiameterInches: 1.301, insideDiameterMm: 33.05, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 1.441, outsideDiameterMm: 36.60, commonApplications: ['Flanges'] },
  { dashNumber: '028', series: '0XX', insideDiameterInches: 1.364, insideDiameterMm: 34.65, crossSectionInches: 0.070, crossSectionMm: 1.78, outsideDiameterInches: 1.504, outsideDiameterMm: 38.20, commonApplications: ['Static seals'] },

  // 1XX Series - 0.103" (2.62mm) Cross Section
  { dashNumber: '102', series: '1XX', insideDiameterInches: 0.049, insideDiameterMm: 1.24, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.255, outsideDiameterMm: 6.48, commonApplications: ['Small fittings'] },
  { dashNumber: '103', series: '1XX', insideDiameterInches: 0.081, insideDiameterMm: 2.06, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.287, outsideDiameterMm: 7.29, commonApplications: ['Fittings'] },
  { dashNumber: '104', series: '1XX', insideDiameterInches: 0.112, insideDiameterMm: 2.84, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.318, outsideDiameterMm: 8.08, commonApplications: ['Ports'] },
  { dashNumber: '105', series: '1XX', insideDiameterInches: 0.143, insideDiameterMm: 3.63, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.349, outsideDiameterMm: 8.87, commonApplications: ['Connectors'] },
  { dashNumber: '106', series: '1XX', insideDiameterInches: 0.174, insideDiameterMm: 4.42, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.380, outsideDiameterMm: 9.65, commonApplications: ['Fittings'] },
  { dashNumber: '107', series: '1XX', insideDiameterInches: 0.206, insideDiameterMm: 5.23, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.412, outsideDiameterMm: 10.46, commonApplications: ['Valve stems'] },
  { dashNumber: '108', series: '1XX', insideDiameterInches: 0.237, insideDiameterMm: 6.02, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.443, outsideDiameterMm: 11.25, commonApplications: ['Ports'] },
  { dashNumber: '109', series: '1XX', insideDiameterInches: 0.299, insideDiameterMm: 7.59, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.505, outsideDiameterMm: 12.83, commonApplications: ['Cylinders'] },
  { dashNumber: '110', series: '1XX', insideDiameterInches: 0.362, insideDiameterMm: 9.19, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.568, outsideDiameterMm: 14.43, commonApplications: ['Hydraulic fittings'] },
  { dashNumber: '111', series: '1XX', insideDiameterInches: 0.424, insideDiameterMm: 10.77, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.630, outsideDiameterMm: 16.00, commonApplications: ['Pumps'] },
  { dashNumber: '112', series: '1XX', insideDiameterInches: 0.487, insideDiameterMm: 12.37, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.693, outsideDiameterMm: 17.60, commonApplications: ['Valves'] },
  { dashNumber: '113', series: '1XX', insideDiameterInches: 0.549, insideDiameterMm: 13.94, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.755, outsideDiameterMm: 19.18, commonApplications: ['Cylinders'] },
  { dashNumber: '114', series: '1XX', insideDiameterInches: 0.612, insideDiameterMm: 15.54, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.818, outsideDiameterMm: 20.78, commonApplications: ['Motors'] },
  { dashNumber: '115', series: '1XX', insideDiameterInches: 0.674, insideDiameterMm: 17.12, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.880, outsideDiameterMm: 22.35, commonApplications: ['Pumps'] },
  { dashNumber: '116', series: '1XX', insideDiameterInches: 0.737, insideDiameterMm: 18.72, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 0.943, outsideDiameterMm: 23.95, commonApplications: ['Flanges'] },
  { dashNumber: '117', series: '1XX', insideDiameterInches: 0.799, insideDiameterMm: 20.29, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.005, outsideDiameterMm: 25.53, commonApplications: ['Covers'] },
  { dashNumber: '118', series: '1XX', insideDiameterInches: 0.862, insideDiameterMm: 21.89, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.068, outsideDiameterMm: 27.13, commonApplications: ['Housings'] },
  { dashNumber: '119', series: '1XX', insideDiameterInches: 0.924, insideDiameterMm: 23.47, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.130, outsideDiameterMm: 28.70, commonApplications: ['Static seals'] },
  { dashNumber: '120', series: '1XX', insideDiameterInches: 0.987, insideDiameterMm: 25.07, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.193, outsideDiameterMm: 30.30, commonApplications: ['Cylinders'] },
  { dashNumber: '121', series: '1XX', insideDiameterInches: 1.049, insideDiameterMm: 26.64, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.255, outsideDiameterMm: 31.88, commonApplications: ['Pumps'] },
  { dashNumber: '122', series: '1XX', insideDiameterInches: 1.112, insideDiameterMm: 28.24, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.318, outsideDiameterMm: 33.48, commonApplications: ['Motors'] },
  { dashNumber: '123', series: '1XX', insideDiameterInches: 1.174, insideDiameterMm: 29.82, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.380, outsideDiameterMm: 35.05, commonApplications: ['Flanges'] },
  { dashNumber: '124', series: '1XX', insideDiameterInches: 1.237, insideDiameterMm: 31.42, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.443, outsideDiameterMm: 36.65, commonApplications: ['Valves'] },
  { dashNumber: '125', series: '1XX', insideDiameterInches: 1.299, insideDiameterMm: 32.99, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.505, outsideDiameterMm: 38.23, commonApplications: ['Covers'] },
  { dashNumber: '126', series: '1XX', insideDiameterInches: 1.362, insideDiameterMm: 34.59, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.568, outsideDiameterMm: 39.83, commonApplications: ['Housings'] },
  { dashNumber: '127', series: '1XX', insideDiameterInches: 1.424, insideDiameterMm: 36.17, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.630, outsideDiameterMm: 41.40, commonApplications: ['Flanges'] },
  { dashNumber: '128', series: '1XX', insideDiameterInches: 1.487, insideDiameterMm: 37.77, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.693, outsideDiameterMm: 43.00, commonApplications: ['Cylinders'] },
  { dashNumber: '129', series: '1XX', insideDiameterInches: 1.549, insideDiameterMm: 39.34, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.755, outsideDiameterMm: 44.58, commonApplications: ['Motors'] },
  { dashNumber: '130', series: '1XX', insideDiameterInches: 1.612, insideDiameterMm: 40.94, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.818, outsideDiameterMm: 46.18, commonApplications: ['Pumps'] },
  { dashNumber: '131', series: '1XX', insideDiameterInches: 1.674, insideDiameterMm: 42.52, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.880, outsideDiameterMm: 47.75, commonApplications: ['Flanges'] },
  { dashNumber: '132', series: '1XX', insideDiameterInches: 1.737, insideDiameterMm: 44.12, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 1.943, outsideDiameterMm: 49.35, commonApplications: ['Valves'] },
  { dashNumber: '133', series: '1XX', insideDiameterInches: 1.799, insideDiameterMm: 45.69, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.005, outsideDiameterMm: 50.93, commonApplications: ['Housings'] },
  { dashNumber: '134', series: '1XX', insideDiameterInches: 1.862, insideDiameterMm: 47.29, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.068, outsideDiameterMm: 52.53, commonApplications: ['Covers'] },
  { dashNumber: '135', series: '1XX', insideDiameterInches: 1.924, insideDiameterMm: 48.87, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.130, outsideDiameterMm: 54.10, commonApplications: ['Motors'] },
  { dashNumber: '136', series: '1XX', insideDiameterInches: 1.987, insideDiameterMm: 50.47, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.193, outsideDiameterMm: 55.70, commonApplications: ['Cylinders'] },
  { dashNumber: '137', series: '1XX', insideDiameterInches: 2.050, insideDiameterMm: 52.07, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.256, outsideDiameterMm: 57.30, commonApplications: ['Pumps'] },
  { dashNumber: '138', series: '1XX', insideDiameterInches: 2.112, insideDiameterMm: 53.64, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.318, outsideDiameterMm: 58.88, commonApplications: ['Flanges'] },
  { dashNumber: '139', series: '1XX', insideDiameterInches: 2.175, insideDiameterMm: 55.25, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.381, outsideDiameterMm: 60.48, commonApplications: ['Housings'] },
  { dashNumber: '140', series: '1XX', insideDiameterInches: 2.237, insideDiameterMm: 56.82, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.443, outsideDiameterMm: 62.05, commonApplications: ['Valves'] },
  { dashNumber: '141', series: '1XX', insideDiameterInches: 2.300, insideDiameterMm: 58.42, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.506, outsideDiameterMm: 63.65, commonApplications: ['Covers'] },
  { dashNumber: '142', series: '1XX', insideDiameterInches: 2.362, insideDiameterMm: 60.00, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.568, outsideDiameterMm: 65.23, commonApplications: ['Motors'] },
  { dashNumber: '143', series: '1XX', insideDiameterInches: 2.425, insideDiameterMm: 61.60, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.631, outsideDiameterMm: 66.83, commonApplications: ['Cylinders'] },
  { dashNumber: '144', series: '1XX', insideDiameterInches: 2.487, insideDiameterMm: 63.17, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.693, outsideDiameterMm: 68.40, commonApplications: ['Pumps'] },
  { dashNumber: '145', series: '1XX', insideDiameterInches: 2.550, insideDiameterMm: 64.77, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.756, outsideDiameterMm: 70.00, commonApplications: ['Flanges'] },
  { dashNumber: '146', series: '1XX', insideDiameterInches: 2.612, insideDiameterMm: 66.35, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.818, outsideDiameterMm: 71.58, commonApplications: ['Housings'] },
  { dashNumber: '147', series: '1XX', insideDiameterInches: 2.675, insideDiameterMm: 67.95, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.881, outsideDiameterMm: 73.18, commonApplications: ['Valves'] },
  { dashNumber: '148', series: '1XX', insideDiameterInches: 2.737, insideDiameterMm: 69.52, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 2.943, outsideDiameterMm: 74.75, commonApplications: ['Covers'] },
  { dashNumber: '149', series: '1XX', insideDiameterInches: 2.800, insideDiameterMm: 71.12, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 3.006, outsideDiameterMm: 76.35, commonApplications: ['Motors'] },
  { dashNumber: '150', series: '1XX', insideDiameterInches: 2.862, insideDiameterMm: 72.70, crossSectionInches: 0.103, crossSectionMm: 2.62, outsideDiameterInches: 3.068, outsideDiameterMm: 77.93, commonApplications: ['Cylinders'] },

  // 2XX Series - 0.139" (3.53mm) Cross Section
  { dashNumber: '201', series: '2XX', insideDiameterInches: 0.171, insideDiameterMm: 4.34, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 0.449, outsideDiameterMm: 11.40, commonApplications: ['Hydraulic ports'] },
  { dashNumber: '202', series: '2XX', insideDiameterInches: 0.234, insideDiameterMm: 5.94, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 0.512, outsideDiameterMm: 13.00, commonApplications: ['Fittings'] },
  { dashNumber: '203', series: '2XX', insideDiameterInches: 0.296, insideDiameterMm: 7.52, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 0.574, outsideDiameterMm: 14.58, commonApplications: ['Cylinders'] },
  { dashNumber: '204', series: '2XX', insideDiameterInches: 0.359, insideDiameterMm: 9.12, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 0.637, outsideDiameterMm: 18.18, commonApplications: ['Pumps'] },
  { dashNumber: '205', series: '2XX', insideDiameterInches: 0.421, insideDiameterMm: 10.69, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 0.699, outsideDiameterMm: 17.75, commonApplications: ['Valves'] },
  { dashNumber: '206', series: '2XX', insideDiameterInches: 0.484, insideDiameterMm: 12.29, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 0.762, outsideDiameterMm: 19.35, commonApplications: ['Motors'] },
  { dashNumber: '207', series: '2XX', insideDiameterInches: 0.546, insideDiameterMm: 13.87, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 0.824, outsideDiameterMm: 20.93, commonApplications: ['Hydraulic systems'] },
  { dashNumber: '208', series: '2XX', insideDiameterInches: 0.609, insideDiameterMm: 15.47, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 0.887, outsideDiameterMm: 22.53, commonApplications: ['Flanges'] },
  { dashNumber: '209', series: '2XX', insideDiameterInches: 0.671, insideDiameterMm: 17.04, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 0.949, outsideDiameterMm: 24.10, commonApplications: ['Cylinders'] },
  { dashNumber: '210', series: '2XX', insideDiameterInches: 0.734, insideDiameterMm: 18.64, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.012, outsideDiameterMm: 25.70, commonApplications: ['Pumps'] },
  { dashNumber: '211', series: '2XX', insideDiameterInches: 0.796, insideDiameterMm: 20.22, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.074, outsideDiameterMm: 27.28, commonApplications: ['Motors'] },
  { dashNumber: '212', series: '2XX', insideDiameterInches: 0.859, insideDiameterMm: 21.82, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.137, outsideDiameterMm: 28.88, commonApplications: ['Valves'] },
  { dashNumber: '213', series: '2XX', insideDiameterInches: 0.921, insideDiameterMm: 23.39, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.199, outsideDiameterMm: 30.45, commonApplications: ['Hydraulics'] },
  { dashNumber: '214', series: '2XX', insideDiameterInches: 0.984, insideDiameterMm: 24.99, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.262, outsideDiameterMm: 32.05, commonApplications: ['Flanges'] },
  { dashNumber: '215', series: '2XX', insideDiameterInches: 1.046, insideDiameterMm: 26.57, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.324, outsideDiameterMm: 33.63, commonApplications: ['Cylinders'] },
  { dashNumber: '216', series: '2XX', insideDiameterInches: 1.109, insideDiameterMm: 28.17, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.387, outsideDiameterMm: 35.23, commonApplications: ['Pumps'] },
  { dashNumber: '217', series: '2XX', insideDiameterInches: 1.171, insideDiameterMm: 29.74, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.449, outsideDiameterMm: 36.80, commonApplications: ['Motors'] },
  { dashNumber: '218', series: '2XX', insideDiameterInches: 1.234, insideDiameterMm: 31.34, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.512, outsideDiameterMm: 38.40, commonApplications: ['Valves'] },
  { dashNumber: '219', series: '2XX', insideDiameterInches: 1.296, insideDiameterMm: 32.92, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.574, outsideDiameterMm: 39.98, commonApplications: ['Hydraulics'] },
  { dashNumber: '220', series: '2XX', insideDiameterInches: 1.359, insideDiameterMm: 34.52, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.637, outsideDiameterMm: 41.58, commonApplications: ['Flanges'] },
  { dashNumber: '221', series: '2XX', insideDiameterInches: 1.421, insideDiameterMm: 36.09, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.699, outsideDiameterMm: 43.15, commonApplications: ['Cylinders'] },
  { dashNumber: '222', series: '2XX', insideDiameterInches: 1.484, insideDiameterMm: 37.69, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.762, outsideDiameterMm: 44.75, commonApplications: ['Pumps'] },
  { dashNumber: '223', series: '2XX', insideDiameterInches: 1.546, insideDiameterMm: 39.27, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.824, outsideDiameterMm: 46.33, commonApplications: ['Motors'] },
  { dashNumber: '224', series: '2XX', insideDiameterInches: 1.609, insideDiameterMm: 40.87, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.887, outsideDiameterMm: 47.93, commonApplications: ['Valves'] },
  { dashNumber: '225', series: '2XX', insideDiameterInches: 1.671, insideDiameterMm: 42.44, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 1.949, outsideDiameterMm: 49.50, commonApplications: ['Hydraulics'] },
  { dashNumber: '226', series: '2XX', insideDiameterInches: 1.734, insideDiameterMm: 44.04, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.012, outsideDiameterMm: 51.10, commonApplications: ['Flanges'] },
  { dashNumber: '227', series: '2XX', insideDiameterInches: 1.796, insideDiameterMm: 45.62, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.074, outsideDiameterMm: 52.68, commonApplications: ['Cylinders'] },
  { dashNumber: '228', series: '2XX', insideDiameterInches: 1.859, insideDiameterMm: 47.22, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.137, outsideDiameterMm: 54.28, commonApplications: ['Pumps'] },
  { dashNumber: '229', series: '2XX', insideDiameterInches: 1.921, insideDiameterMm: 48.79, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.199, outsideDiameterMm: 55.85, commonApplications: ['Motors'] },
  { dashNumber: '230', series: '2XX', insideDiameterInches: 1.984, insideDiameterMm: 50.39, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.262, outsideDiameterMm: 57.45, commonApplications: ['Valves'] },
  { dashNumber: '231', series: '2XX', insideDiameterInches: 2.046, insideDiameterMm: 51.97, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.324, outsideDiameterMm: 59.03, commonApplications: ['Hydraulics'] },
  { dashNumber: '232', series: '2XX', insideDiameterInches: 2.109, insideDiameterMm: 53.57, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.387, outsideDiameterMm: 60.63, commonApplications: ['Flanges'] },
  { dashNumber: '233', series: '2XX', insideDiameterInches: 2.171, insideDiameterMm: 55.14, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.449, outsideDiameterMm: 62.20, commonApplications: ['Cylinders'] },
  { dashNumber: '234', series: '2XX', insideDiameterInches: 2.234, insideDiameterMm: 56.74, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.512, outsideDiameterMm: 63.80, commonApplications: ['Pumps'] },
  { dashNumber: '235', series: '2XX', insideDiameterInches: 2.296, insideDiameterMm: 58.32, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.574, outsideDiameterMm: 65.38, commonApplications: ['Motors'] },
  { dashNumber: '236', series: '2XX', insideDiameterInches: 2.359, insideDiameterMm: 59.92, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.637, outsideDiameterMm: 66.98, commonApplications: ['Valves'] },
  { dashNumber: '237', series: '2XX', insideDiameterInches: 2.421, insideDiameterMm: 61.49, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.699, outsideDiameterMm: 68.55, commonApplications: ['Hydraulics'] },
  { dashNumber: '238', series: '2XX', insideDiameterInches: 2.484, insideDiameterMm: 63.09, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.762, outsideDiameterMm: 70.15, commonApplications: ['Flanges'] },
  { dashNumber: '239', series: '2XX', insideDiameterInches: 2.546, insideDiameterMm: 64.67, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.824, outsideDiameterMm: 71.73, commonApplications: ['Cylinders'] },
  { dashNumber: '240', series: '2XX', insideDiameterInches: 2.609, insideDiameterMm: 66.27, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.887, outsideDiameterMm: 73.33, commonApplications: ['Pumps'] },
  { dashNumber: '241', series: '2XX', insideDiameterInches: 2.671, insideDiameterMm: 67.84, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 2.949, outsideDiameterMm: 74.90, commonApplications: ['Motors'] },
  { dashNumber: '242', series: '2XX', insideDiameterInches: 2.734, insideDiameterMm: 69.44, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 3.012, outsideDiameterMm: 76.50, commonApplications: ['Valves'] },
  { dashNumber: '243', series: '2XX', insideDiameterInches: 2.796, insideDiameterMm: 71.02, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 3.074, outsideDiameterMm: 78.08, commonApplications: ['Hydraulics'] },
  { dashNumber: '244', series: '2XX', insideDiameterInches: 2.859, insideDiameterMm: 72.62, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 3.137, outsideDiameterMm: 79.68, commonApplications: ['Flanges'] },
  { dashNumber: '245', series: '2XX', insideDiameterInches: 2.921, insideDiameterMm: 74.19, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 3.199, outsideDiameterMm: 81.25, commonApplications: ['Cylinders'] },
  { dashNumber: '246', series: '2XX', insideDiameterInches: 2.984, insideDiameterMm: 75.79, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 3.262, outsideDiameterMm: 82.85, commonApplications: ['Pumps'] },
  { dashNumber: '247', series: '2XX', insideDiameterInches: 3.046, insideDiameterMm: 77.37, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 3.324, outsideDiameterMm: 84.43, commonApplications: ['Motors'] },
  { dashNumber: '248', series: '2XX', insideDiameterInches: 3.109, insideDiameterMm: 78.97, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 3.387, outsideDiameterMm: 86.03, commonApplications: ['Valves'] },
  { dashNumber: '249', series: '2XX', insideDiameterInches: 3.171, insideDiameterMm: 80.54, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 3.449, outsideDiameterMm: 87.60, commonApplications: ['Hydraulics'] },
  { dashNumber: '250', series: '2XX', insideDiameterInches: 3.234, insideDiameterMm: 82.14, crossSectionInches: 0.139, crossSectionMm: 3.53, outsideDiameterInches: 3.512, outsideDiameterMm: 89.20, commonApplications: ['Flanges'] },

  // 3XX Series - 0.210" (5.33mm) Cross Section
  { dashNumber: '309', series: '3XX', insideDiameterInches: 0.412, insideDiameterMm: 10.46, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 0.832, outsideDiameterMm: 21.13, commonApplications: ['Hydraulic cylinders'] },
  { dashNumber: '310', series: '3XX', insideDiameterInches: 0.475, insideDiameterMm: 12.07, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 0.895, outsideDiameterMm: 22.73, commonApplications: ['Pumps'] },
  { dashNumber: '311', series: '3XX', insideDiameterInches: 0.537, insideDiameterMm: 13.64, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 0.957, outsideDiameterMm: 24.31, commonApplications: ['Motors'] },
  { dashNumber: '312', series: '3XX', insideDiameterInches: 0.600, insideDiameterMm: 15.24, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.020, outsideDiameterMm: 25.91, commonApplications: ['Valves'] },
  { dashNumber: '313', series: '3XX', insideDiameterInches: 0.662, insideDiameterMm: 16.81, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.082, outsideDiameterMm: 27.48, commonApplications: ['Flanges'] },
  { dashNumber: '314', series: '3XX', insideDiameterInches: 0.725, insideDiameterMm: 18.42, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.145, outsideDiameterMm: 29.08, commonApplications: ['Cylinders'] },
  { dashNumber: '315', series: '3XX', insideDiameterInches: 0.787, insideDiameterMm: 19.99, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.207, outsideDiameterMm: 30.66, commonApplications: ['Pumps'] },
  { dashNumber: '316', series: '3XX', insideDiameterInches: 0.850, insideDiameterMm: 21.59, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.270, outsideDiameterMm: 32.26, commonApplications: ['Motors'] },
  { dashNumber: '317', series: '3XX', insideDiameterInches: 0.912, insideDiameterMm: 23.16, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.332, outsideDiameterMm: 33.83, commonApplications: ['Valves'] },
  { dashNumber: '318', series: '3XX', insideDiameterInches: 0.975, insideDiameterMm: 24.77, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.395, outsideDiameterMm: 35.43, commonApplications: ['Flanges'] },
  { dashNumber: '319', series: '3XX', insideDiameterInches: 1.037, insideDiameterMm: 26.34, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.457, outsideDiameterMm: 37.01, commonApplications: ['Cylinders'] },
  { dashNumber: '320', series: '3XX', insideDiameterInches: 1.100, insideDiameterMm: 27.94, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.520, outsideDiameterMm: 38.61, commonApplications: ['Heavy equipment'] },
  { dashNumber: '321', series: '3XX', insideDiameterInches: 1.162, insideDiameterMm: 29.51, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.582, outsideDiameterMm: 40.18, commonApplications: ['Pumps'] },
  { dashNumber: '322', series: '3XX', insideDiameterInches: 1.225, insideDiameterMm: 31.12, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.645, outsideDiameterMm: 41.78, commonApplications: ['Motors'] },
  { dashNumber: '323', series: '3XX', insideDiameterInches: 1.287, insideDiameterMm: 32.69, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.707, outsideDiameterMm: 43.36, commonApplications: ['Valves'] },
  { dashNumber: '324', series: '3XX', insideDiameterInches: 1.350, insideDiameterMm: 34.29, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.770, outsideDiameterMm: 44.96, commonApplications: ['Flanges'] },
  { dashNumber: '325', series: '3XX', insideDiameterInches: 1.412, insideDiameterMm: 35.86, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.832, outsideDiameterMm: 46.53, commonApplications: ['Cylinders'] },
  { dashNumber: '326', series: '3XX', insideDiameterInches: 1.475, insideDiameterMm: 37.47, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.895, outsideDiameterMm: 48.13, commonApplications: ['Pumps'] },
  { dashNumber: '327', series: '3XX', insideDiameterInches: 1.537, insideDiameterMm: 39.04, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 1.957, outsideDiameterMm: 49.71, commonApplications: ['Motors'] },
  { dashNumber: '328', series: '3XX', insideDiameterInches: 1.600, insideDiameterMm: 40.64, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.020, outsideDiameterMm: 51.31, commonApplications: ['Valves'] },
  { dashNumber: '329', series: '3XX', insideDiameterInches: 1.662, insideDiameterMm: 42.21, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.082, outsideDiameterMm: 52.88, commonApplications: ['Flanges'] },
  { dashNumber: '330', series: '3XX', insideDiameterInches: 1.725, insideDiameterMm: 43.82, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.145, outsideDiameterMm: 54.48, commonApplications: ['Cylinders'] },
  { dashNumber: '331', series: '3XX', insideDiameterInches: 1.787, insideDiameterMm: 45.39, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.207, outsideDiameterMm: 56.06, commonApplications: ['Heavy equipment'] },
  { dashNumber: '332', series: '3XX', insideDiameterInches: 1.850, insideDiameterMm: 46.99, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.270, outsideDiameterMm: 57.66, commonApplications: ['Pumps'] },
  { dashNumber: '333', series: '3XX', insideDiameterInches: 1.912, insideDiameterMm: 48.56, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.332, outsideDiameterMm: 59.23, commonApplications: ['Motors'] },
  { dashNumber: '334', series: '3XX', insideDiameterInches: 1.975, insideDiameterMm: 50.17, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.395, outsideDiameterMm: 60.83, commonApplications: ['Valves'] },
  { dashNumber: '335', series: '3XX', insideDiameterInches: 2.037, insideDiameterMm: 51.74, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.457, outsideDiameterMm: 62.41, commonApplications: ['Flanges'] },
  { dashNumber: '336', series: '3XX', insideDiameterInches: 2.100, insideDiameterMm: 53.34, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.520, outsideDiameterMm: 64.01, commonApplications: ['Cylinders'] },
  { dashNumber: '337', series: '3XX', insideDiameterInches: 2.162, insideDiameterMm: 54.91, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.582, outsideDiameterMm: 65.58, commonApplications: ['Pumps'] },
  { dashNumber: '338', series: '3XX', insideDiameterInches: 2.225, insideDiameterMm: 56.52, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.645, outsideDiameterMm: 67.18, commonApplications: ['Motors'] },
  { dashNumber: '339', series: '3XX', insideDiameterInches: 2.287, insideDiameterMm: 58.09, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.707, outsideDiameterMm: 68.76, commonApplications: ['Valves'] },
  { dashNumber: '340', series: '3XX', insideDiameterInches: 2.350, insideDiameterMm: 59.69, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.770, outsideDiameterMm: 70.36, commonApplications: ['Flanges'] },
  { dashNumber: '341', series: '3XX', insideDiameterInches: 2.412, insideDiameterMm: 61.26, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.832, outsideDiameterMm: 71.93, commonApplications: ['Cylinders'] },
  { dashNumber: '342', series: '3XX', insideDiameterInches: 2.475, insideDiameterMm: 62.87, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.895, outsideDiameterMm: 73.53, commonApplications: ['Heavy equipment'] },
  { dashNumber: '343', series: '3XX', insideDiameterInches: 2.537, insideDiameterMm: 64.44, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 2.957, outsideDiameterMm: 75.11, commonApplications: ['Pumps'] },
  { dashNumber: '344', series: '3XX', insideDiameterInches: 2.600, insideDiameterMm: 66.04, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.020, outsideDiameterMm: 76.71, commonApplications: ['Motors'] },
  { dashNumber: '345', series: '3XX', insideDiameterInches: 2.662, insideDiameterMm: 67.61, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.082, outsideDiameterMm: 78.28, commonApplications: ['Valves'] },
  { dashNumber: '346', series: '3XX', insideDiameterInches: 2.725, insideDiameterMm: 69.22, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.145, outsideDiameterMm: 79.88, commonApplications: ['Flanges'] },
  { dashNumber: '347', series: '3XX', insideDiameterInches: 2.787, insideDiameterMm: 70.79, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.207, outsideDiameterMm: 81.46, commonApplications: ['Cylinders'] },
  { dashNumber: '348', series: '3XX', insideDiameterInches: 2.850, insideDiameterMm: 72.39, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.270, outsideDiameterMm: 83.06, commonApplications: ['Pumps'] },
  { dashNumber: '349', series: '3XX', insideDiameterInches: 2.912, insideDiameterMm: 73.96, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.332, outsideDiameterMm: 84.63, commonApplications: ['Motors'] },
  { dashNumber: '350', series: '3XX', insideDiameterInches: 2.975, insideDiameterMm: 75.57, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.395, outsideDiameterMm: 86.23, commonApplications: ['Valves'] },
  { dashNumber: '351', series: '3XX', insideDiameterInches: 3.037, insideDiameterMm: 77.14, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.457, outsideDiameterMm: 87.81, commonApplications: ['Heavy equipment'] },
  { dashNumber: '352', series: '3XX', insideDiameterInches: 3.100, insideDiameterMm: 78.74, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.520, outsideDiameterMm: 89.41, commonApplications: ['Flanges'] },
  { dashNumber: '353', series: '3XX', insideDiameterInches: 3.162, insideDiameterMm: 80.31, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.582, outsideDiameterMm: 90.98, commonApplications: ['Cylinders'] },
  { dashNumber: '354', series: '3XX', insideDiameterInches: 3.225, insideDiameterMm: 81.92, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.645, outsideDiameterMm: 92.58, commonApplications: ['Pumps'] },
  { dashNumber: '355', series: '3XX', insideDiameterInches: 3.287, insideDiameterMm: 83.49, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.707, outsideDiameterMm: 94.16, commonApplications: ['Motors'] },
  { dashNumber: '356', series: '3XX', insideDiameterInches: 3.350, insideDiameterMm: 85.09, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.770, outsideDiameterMm: 95.76, commonApplications: ['Valves'] },
  { dashNumber: '357', series: '3XX', insideDiameterInches: 3.412, insideDiameterMm: 86.66, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.832, outsideDiameterMm: 97.33, commonApplications: ['Flanges'] },
  { dashNumber: '358', series: '3XX', insideDiameterInches: 3.475, insideDiameterMm: 88.27, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.895, outsideDiameterMm: 98.93, commonApplications: ['Heavy equipment'] },
  { dashNumber: '359', series: '3XX', insideDiameterInches: 3.537, insideDiameterMm: 89.84, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 3.957, outsideDiameterMm: 100.51, commonApplications: ['Cylinders'] },
  { dashNumber: '360', series: '3XX', insideDiameterInches: 3.600, insideDiameterMm: 91.44, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.020, outsideDiameterMm: 102.11, commonApplications: ['Large flanges'] },
  { dashNumber: '361', series: '3XX', insideDiameterInches: 3.662, insideDiameterMm: 93.01, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.082, outsideDiameterMm: 103.68, commonApplications: ['Pumps'] },
  { dashNumber: '362', series: '3XX', insideDiameterInches: 3.725, insideDiameterMm: 94.62, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.145, outsideDiameterMm: 105.28, commonApplications: ['Motors'] },
  { dashNumber: '363', series: '3XX', insideDiameterInches: 3.787, insideDiameterMm: 96.19, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.207, outsideDiameterMm: 106.86, commonApplications: ['Valves'] },
  { dashNumber: '364', series: '3XX', insideDiameterInches: 3.850, insideDiameterMm: 97.79, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.270, outsideDiameterMm: 108.46, commonApplications: ['Flanges'] },
  { dashNumber: '365', series: '3XX', insideDiameterInches: 3.912, insideDiameterMm: 99.36, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.332, outsideDiameterMm: 110.03, commonApplications: ['Cylinders'] },
  { dashNumber: '366', series: '3XX', insideDiameterInches: 3.975, insideDiameterMm: 100.97, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.395, outsideDiameterMm: 111.63, commonApplications: ['Heavy equipment'] },
  { dashNumber: '367', series: '3XX', insideDiameterInches: 4.037, insideDiameterMm: 102.54, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.457, outsideDiameterMm: 113.21, commonApplications: ['Pumps'] },
  { dashNumber: '368', series: '3XX', insideDiameterInches: 4.100, insideDiameterMm: 104.14, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.520, outsideDiameterMm: 114.81, commonApplications: ['Motors'] },
  { dashNumber: '369', series: '3XX', insideDiameterInches: 4.162, insideDiameterMm: 105.71, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.582, outsideDiameterMm: 116.38, commonApplications: ['Valves'] },
  { dashNumber: '370', series: '3XX', insideDiameterInches: 4.225, insideDiameterMm: 107.32, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.645, outsideDiameterMm: 117.98, commonApplications: ['Flanges'] },
  { dashNumber: '371', series: '3XX', insideDiameterInches: 4.287, insideDiameterMm: 108.89, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.707, outsideDiameterMm: 119.56, commonApplications: ['Cylinders'] },
  { dashNumber: '372', series: '3XX', insideDiameterInches: 4.350, insideDiameterMm: 110.49, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.770, outsideDiameterMm: 121.16, commonApplications: ['Heavy equipment'] },
  { dashNumber: '373', series: '3XX', insideDiameterInches: 4.412, insideDiameterMm: 112.06, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.832, outsideDiameterMm: 122.73, commonApplications: ['Pumps'] },
  { dashNumber: '374', series: '3XX', insideDiameterInches: 4.475, insideDiameterMm: 113.67, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 4.895, outsideDiameterMm: 124.33, commonApplications: ['Motors'] },
  { dashNumber: '375', series: '3XX', insideDiameterInches: 4.600, insideDiameterMm: 116.84, crossSectionInches: 0.210, crossSectionMm: 5.33, outsideDiameterInches: 5.020, outsideDiameterMm: 127.51, commonApplications: ['Valves'] },

  // 4XX Series - 0.275" (6.99mm) Cross Section
  { dashNumber: '425', series: '4XX', insideDiameterInches: 4.475, insideDiameterMm: 113.67, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 5.025, outsideDiameterMm: 127.64, commonApplications: ['Large cylinders'] },
  { dashNumber: '426', series: '4XX', insideDiameterInches: 4.600, insideDiameterMm: 116.84, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 5.150, outsideDiameterMm: 130.81, commonApplications: ['Mining equipment'] },
  { dashNumber: '427', series: '4XX', insideDiameterInches: 4.725, insideDiameterMm: 120.02, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 5.275, outsideDiameterMm: 133.99, commonApplications: ['Heavy equipment'] },
  { dashNumber: '428', series: '4XX', insideDiameterInches: 4.850, insideDiameterMm: 123.19, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 5.400, outsideDiameterMm: 137.16, commonApplications: ['Industrial'] },
  { dashNumber: '429', series: '4XX', insideDiameterInches: 4.975, insideDiameterMm: 126.37, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 5.525, outsideDiameterMm: 140.34, commonApplications: ['Marine'] },
  { dashNumber: '430', series: '4XX', insideDiameterInches: 5.100, insideDiameterMm: 129.54, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 5.650, outsideDiameterMm: 143.51, commonApplications: ['Large flanges'] },
  { dashNumber: '431', series: '4XX', insideDiameterInches: 5.225, insideDiameterMm: 132.72, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 5.775, outsideDiameterMm: 146.69, commonApplications: ['Mining'] },
  { dashNumber: '432', series: '4XX', insideDiameterInches: 5.350, insideDiameterMm: 135.89, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 5.900, outsideDiameterMm: 149.86, commonApplications: ['Heavy equipment'] },
  { dashNumber: '433', series: '4XX', insideDiameterInches: 5.475, insideDiameterMm: 139.07, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 6.025, outsideDiameterMm: 153.04, commonApplications: ['Industrial'] },
  { dashNumber: '434', series: '4XX', insideDiameterInches: 5.600, insideDiameterMm: 142.24, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 6.150, outsideDiameterMm: 156.21, commonApplications: ['Marine'] },
  { dashNumber: '435', series: '4XX', insideDiameterInches: 5.725, insideDiameterMm: 145.42, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 6.275, outsideDiameterMm: 159.39, commonApplications: ['Large cylinders'] },
  { dashNumber: '436', series: '4XX', insideDiameterInches: 5.850, insideDiameterMm: 148.59, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 6.400, outsideDiameterMm: 162.56, commonApplications: ['Mining'] },
  { dashNumber: '437', series: '4XX', insideDiameterInches: 5.975, insideDiameterMm: 151.77, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 6.525, outsideDiameterMm: 165.74, commonApplications: ['Heavy equipment'] },
  { dashNumber: '438', series: '4XX', insideDiameterInches: 6.225, insideDiameterMm: 158.12, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 6.775, outsideDiameterMm: 172.09, commonApplications: ['Industrial'] },
  { dashNumber: '439', series: '4XX', insideDiameterInches: 6.475, insideDiameterMm: 164.47, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 7.025, outsideDiameterMm: 178.44, commonApplications: ['Marine'] },
  { dashNumber: '440', series: '4XX', insideDiameterInches: 6.725, insideDiameterMm: 170.82, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 7.275, outsideDiameterMm: 184.79, commonApplications: ['Large flanges'] },
  { dashNumber: '441', series: '4XX', insideDiameterInches: 6.975, insideDiameterMm: 177.17, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 7.525, outsideDiameterMm: 191.14, commonApplications: ['Mining'] },
  { dashNumber: '442', series: '4XX', insideDiameterInches: 7.225, insideDiameterMm: 183.52, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 7.775, outsideDiameterMm: 197.49, commonApplications: ['Heavy equipment'] },
  { dashNumber: '443', series: '4XX', insideDiameterInches: 7.475, insideDiameterMm: 189.87, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 8.025, outsideDiameterMm: 203.84, commonApplications: ['Industrial'] },
  { dashNumber: '444', series: '4XX', insideDiameterInches: 7.725, insideDiameterMm: 196.22, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 8.275, outsideDiameterMm: 210.19, commonApplications: ['Marine'] },
  { dashNumber: '445', series: '4XX', insideDiameterInches: 7.975, insideDiameterMm: 202.57, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 8.525, outsideDiameterMm: 216.54, commonApplications: ['Large cylinders'] },
  { dashNumber: '446', series: '4XX', insideDiameterInches: 8.225, insideDiameterMm: 208.92, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 8.775, outsideDiameterMm: 222.89, commonApplications: ['Mining'] },
  { dashNumber: '447', series: '4XX', insideDiameterInches: 8.475, insideDiameterMm: 215.27, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 9.025, outsideDiameterMm: 229.24, commonApplications: ['Heavy equipment'] },
  { dashNumber: '448', series: '4XX', insideDiameterInches: 8.725, insideDiameterMm: 221.62, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 9.275, outsideDiameterMm: 235.59, commonApplications: ['Industrial'] },
  { dashNumber: '449', series: '4XX', insideDiameterInches: 8.975, insideDiameterMm: 227.97, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 9.525, outsideDiameterMm: 241.94, commonApplications: ['Marine'] },
  { dashNumber: '450', series: '4XX', insideDiameterInches: 9.225, insideDiameterMm: 234.32, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 9.775, outsideDiameterMm: 248.29, commonApplications: ['Large flanges'] },
  { dashNumber: '451', series: '4XX', insideDiameterInches: 9.475, insideDiameterMm: 240.67, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 10.025, outsideDiameterMm: 254.64, commonApplications: ['Mining'] },
  { dashNumber: '452', series: '4XX', insideDiameterInches: 9.725, insideDiameterMm: 247.02, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 10.275, outsideDiameterMm: 260.99, commonApplications: ['Heavy equipment'] },
  { dashNumber: '453', series: '4XX', insideDiameterInches: 9.975, insideDiameterMm: 253.37, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 10.525, outsideDiameterMm: 267.34, commonApplications: ['Industrial'] },
  { dashNumber: '454', series: '4XX', insideDiameterInches: 10.475, insideDiameterMm: 266.07, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 11.025, outsideDiameterMm: 280.04, commonApplications: ['Marine'] },
  { dashNumber: '455', series: '4XX', insideDiameterInches: 10.975, insideDiameterMm: 278.77, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 11.525, outsideDiameterMm: 292.74, commonApplications: ['Large cylinders'] },
  { dashNumber: '456', series: '4XX', insideDiameterInches: 11.475, insideDiameterMm: 291.47, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 12.025, outsideDiameterMm: 305.44, commonApplications: ['Mining'] },
  { dashNumber: '457', series: '4XX', insideDiameterInches: 11.975, insideDiameterMm: 304.17, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 12.525, outsideDiameterMm: 318.14, commonApplications: ['Heavy equipment'] },
  { dashNumber: '458', series: '4XX', insideDiameterInches: 12.975, insideDiameterMm: 329.57, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 13.525, outsideDiameterMm: 343.54, commonApplications: ['Industrial'] },
  { dashNumber: '459', series: '4XX', insideDiameterInches: 13.975, insideDiameterMm: 354.97, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 14.525, outsideDiameterMm: 368.94, commonApplications: ['Marine'] },
  { dashNumber: '460', series: '4XX', insideDiameterInches: 14.975, insideDiameterMm: 380.37, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 15.525, outsideDiameterMm: 394.34, commonApplications: ['Large flanges'] },
  { dashNumber: '461', series: '4XX', insideDiameterInches: 15.955, insideDiameterMm: 405.26, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 16.505, outsideDiameterMm: 419.23, commonApplications: ['Mining'] },
  { dashNumber: '462', series: '4XX', insideDiameterInches: 16.955, insideDiameterMm: 430.66, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 17.505, outsideDiameterMm: 444.63, commonApplications: ['Heavy equipment'] },
  { dashNumber: '463', series: '4XX', insideDiameterInches: 17.955, insideDiameterMm: 456.06, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 18.505, outsideDiameterMm: 470.03, commonApplications: ['Industrial'] },
  { dashNumber: '464', series: '4XX', insideDiameterInches: 18.955, insideDiameterMm: 481.46, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 19.505, outsideDiameterMm: 495.43, commonApplications: ['Marine'] },
  { dashNumber: '465', series: '4XX', insideDiameterInches: 19.955, insideDiameterMm: 506.86, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 20.505, outsideDiameterMm: 520.83, commonApplications: ['Large cylinders'] },
  { dashNumber: '470', series: '4XX', insideDiameterInches: 24.940, insideDiameterMm: 633.48, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 25.490, outsideDiameterMm: 647.45, commonApplications: ['Mining equipment'] },
  { dashNumber: '475', series: '4XX', insideDiameterInches: 25.940, insideDiameterMm: 658.88, crossSectionInches: 0.275, crossSectionMm: 6.99, outsideDiameterInches: 26.490, outsideDiameterMm: 672.85, commonApplications: ['Large industrial'] }
];

// O-Ring FAQ Data
export const oRingFaqData = [
  {
    question: "Are O-ring dash sizes the same as hose dash sizes?",
    answer: "No. O-ring dash numbers follow the AS568 (Aerospace Standard 568) sizing system and are NOT the same as hydraulic hose dash sizes. Hose dash sizes represent inside diameter in sixteenths of an inch (e.g., -8 = 1/2\"), while O-ring dash numbers are arbitrary reference numbers from the AS568 chart that identify specific inside diameter and cross-section combinations. For example, dash 214 is an O-ring with 0.984\" ID and 0.139\" cross-section—completely unrelated to -14 hose."
  },
  {
    question: "What does dash 214 mean for an O-ring?",
    answer: "Dash 214 is an AS568 standard O-ring size with 0.984\" (24.99mm) inside diameter and 0.139\" (3.53mm) cross-section, yielding 1.262\" (32.05mm) outside diameter. The 2XX series always has 0.139\" cross-section. The number 214 is a reference designation, not a calculated value like hose dash sizes. Per AS568B, this size is commonly used in hydraulic pumps, flanges, and cylinder applications."
  },
  {
    question: "How do I measure O-ring size?",
    answer: "To measure an O-ring: 1) Lay the O-ring flat without stretching it. 2) Measure the inside diameter (ID) across the inner opening. 3) Measure the cross-section (CS) by compressing lightly with calipers to get the cord thickness. 4) Compare both measurements to the AS568 chart. For best results, use digital calipers. Note that worn O-rings may measure differently than new—always verify against AS568 nominal dimensions when ordering replacements."
  },
  {
    question: "What is AS568?",
    answer: "AS568 (Aerospace Standard 568) is the American standard for O-ring sizes, maintained by SAE International. It defines standard inside diameters and cross-sections for elastomeric O-rings. The standard uses dash numbers organized by series: 0XX series (0.070\" CS), 1XX series (0.103\" CS), 2XX series (0.139\" CS), 3XX series (0.210\" CS), and 4XX series (0.275\" CS). AS568 is the most widely used O-ring sizing system in North America, compatible with ISO 3601 metric equivalents."
  },
  {
    question: "How do I convert O-ring inches to mm?",
    answer: "Multiply the inch dimension by 25.4 to convert to millimeters. For example: 0.984\" × 25.4 = 24.99mm (dash 214 ID). Most AS568 charts already provide both inch and metric values. When ordering internationally or for ISO 3601 compatibility, use metric dimensions. Cross-sections convert as: 0.070\" = 1.78mm, 0.103\" = 2.62mm, 0.139\" = 3.53mm, 0.210\" = 5.33mm, 0.275\" = 6.99mm."
  },
  {
    question: "What's the difference between AS568 and ISO 3601 O-ring sizes?",
    answer: "AS568 is the American inch-based standard while ISO 3601 is the international metric-based standard. Many sizes are equivalent or very close—for example, AS568 dash 214 (ID 24.99mm × CS 3.53mm) closely matches ISO 3601 sizes. However, tolerances and some nominal dimensions differ between standards. When specifying O-rings internationally, reference both AS568 dash number and metric dimensions to ensure correct sizing."
  },
  {
    question: "Which O-ring cross-section should I use?",
    answer: "Cross-section selection depends on groove depth, pressure, and application. General guidelines: 0XX series (1.78mm) for low-pressure static seals and limited space. 1XX series (2.62mm) for general hydraulic fittings under 3,000 PSI. 2XX series (3.53mm) is the most common for hydraulic cylinders and pumps. 3XX series (5.33mm) for high-pressure and dynamic applications. 4XX series (6.99mm) for severe duty and large bore equipment. Always match cross-section to groove dimensions per manufacturer specifications."
  },
  {
    question: "Why are some O-ring dash numbers missing from the chart?",
    answer: "AS568 dash numbers are not sequential—gaps exist in the numbering system. For example, there are no dash 029-101, or dash 151-200 in standard AS568. The dash number is an arbitrary reference, not a calculated value. The standard only defines specific combinations of ID and cross-section that are commonly manufactured. If you need a size between standard dash numbers, consult your O-ring supplier for custom or metric equivalent options."
  }
];

// Conversion helpers
export const oRingConversions = {
  inchesToMm: (inches: number): number => inches * 25.4,
  mmToInches: (mm: number): number => mm / 25.4
};

// Find O-ring by dash number
export const getORingByDashNumber = (dashNumber: string): ORingSize | undefined => {
  return oRingData.find(o => o.dashNumber === dashNumber);
};

// Find O-rings by inside diameter (with tolerance)
export const findORingsByID = (idInches: number, tolerance: number = 0.02): ORingSize[] => {
  return oRingData.filter(o => Math.abs(o.insideDiameterInches - idInches) <= tolerance);
};

// Find O-rings by cross-section
export const findORingsByCrossSection = (csInches: number, tolerance: number = 0.01): ORingSize[] => {
  return oRingData.filter(o => Math.abs(o.crossSectionInches - csInches) <= tolerance);
};

// Get all O-rings in a series
export const getORingsBySeries = (series: '0XX' | '1XX' | '2XX' | '3XX' | '4XX'): ORingSize[] => {
  return oRingData.filter(o => o.series === series);
};
