// Excavator Parts Database - 35 Components
// For Interactive Excavator Parts Diagram Tool

export interface ExcavatorPart {
  part_id: string;
  part_name: string;
  alternate_names: string[];
  category: 'upper_structure' | 'arm_assembly' | 'undercarriage' | 'hydraulic_system';
  category_label: string;
  function: string;
  common_issues: string[];
  maintenance_tips: string[];
  related_parts: string[];
  hydraulic_related: boolean;
  repair_urgency: 'critical' | 'high' | 'medium' | 'low';
  svgPath: string; // SVG path data for the part outline
  labelPosition: { x: number; y: number }; // Position for label
}

export const excavatorParts: ExcavatorPart[] = [
  // ==========================================
  // UPPER STRUCTURE (6 parts)
  // ==========================================
  {
    part_id: "cab",
    part_name: "Cab / Operator Station",
    alternate_names: ["Operator Cab", "Cabin", "ROPS Cab", "Control Cab"],
    category: "upper_structure",
    category_label: "Upper Structure",
    function: "Enclosed compartment housing the operator seat, control levers, pedals, and monitoring displays. Provides weather protection, noise reduction, and safety (ROPS/FOPS) for the operator during machine operation.",
    common_issues: [
      "HVAC system failures in extreme temperatures",
      "Door seal leaks allowing dust/water entry",
      "Cracked or damaged safety glass",
      "Worn joystick controls causing imprecise operation"
    ],
    maintenance_tips: [
      "Regularly clean air filters for HVAC system",
      "Inspect door seals annually and replace if cracked",
      "Check all safety glass for chips or cracks"
    ],
    related_parts: ["slew_ring", "house", "engine_compartment"],
    hydraulic_related: false,
    repair_urgency: "medium",
    svgPath: "M280,180 L340,180 L340,240 L280,240 Z",
    labelPosition: { x: 310, y: 210 }
  },
  {
    part_id: "engine_compartment",
    part_name: "Engine Compartment",
    alternate_names: ["Engine Bay", "Power Unit", "Engine Hood", "Engine Cover"],
    category: "upper_structure",
    category_label: "Upper Structure",
    function: "Houses the diesel engine, cooling system (radiator, fan), air intake, and exhaust system. The engine provides power to drive all hydraulic pumps that operate the excavator's movements.",
    common_issues: [
      "Overheating due to clogged radiator fins",
      "Fuel system contamination",
      "Exhaust leaks and DPF issues",
      "Belt wear and tensioner failures"
    ],
    maintenance_tips: [
      "Check coolant levels daily before operation",
      "Clean radiator fins weekly in dusty conditions",
      "Replace fuel filters at manufacturer intervals"
    ],
    related_parts: ["hydraulic_pump", "hydraulic_tank", "cab"],
    hydraulic_related: true,
    repair_urgency: "critical",
    svgPath: "M340,190 L420,190 L420,250 L340,250 Z",
    labelPosition: { x: 380, y: 220 }
  },
  {
    part_id: "counterweight",
    part_name: "Counterweight",
    alternate_names: ["Counter Weight", "Rear Weight", "Balance Weight"],
    category: "upper_structure",
    category_label: "Upper Structure",
    function: "Heavy cast iron or steel weight mounted at rear of upper structure to balance the excavator during lifting and digging operations. Prevents tipping when the boom and arm are extended with heavy loads.",
    common_issues: [
      "Mounting bolt loosening from vibration",
      "Corrosion in coastal or humid environments",
      "Damage from backing into obstacles",
      "Cracking from structural fatigue"
    ],
    maintenance_tips: [
      "Torque check mounting bolts every 500 hours",
      "Inspect for cracks during annual service",
      "Touch up paint to prevent rust"
    ],
    related_parts: ["house", "slew_ring"],
    hydraulic_related: false,
    repair_urgency: "low",
    svgPath: "M420,195 L490,195 L490,265 L420,265 Z",
    labelPosition: { x: 455, y: 230 }
  },
  {
    part_id: "house",
    part_name: "House / Rotating Platform",
    alternate_names: ["Upper Frame", "Superstructure", "Rotating Frame", "Turret"],
    category: "upper_structure",
    category_label: "Upper Structure",
    function: "Main structural frame of the upper structure that supports the cab, engine, counterweight, and boom. Rotates 360° on the slew ring, allowing the excavator to dig and dump in any direction.",
    common_issues: [
      "Frame cracks at boom mounting points",
      "Corrosion on floor plates",
      "Worn mounting points for components",
      "Fluid leaks pooling on floor"
    ],
    maintenance_tips: [
      "Inspect boom mounting welds annually",
      "Keep floor drains clear of debris",
      "Check for unusual vibrations indicating frame issues"
    ],
    related_parts: ["cab", "engine_compartment", "counterweight", "slew_ring", "boom"],
    hydraulic_related: false,
    repair_urgency: "high",
    svgPath: "M260,240 L500,240 L500,280 L260,280 Z",
    labelPosition: { x: 380, y: 260 }
  },
  {
    part_id: "slew_ring",
    part_name: "Slew Ring / Swing Bearing",
    alternate_names: ["Swing Bearing", "Turntable Bearing", "Slew Bearing", "Rotation Bearing"],
    category: "upper_structure",
    category_label: "Upper Structure",
    function: "Large bearing assembly that connects the upper structure to the undercarriage, allowing 360° rotation. Contains internal gear teeth that mesh with the swing motor pinion to enable controlled rotation.",
    common_issues: [
      "Bearing wear causing play or wobble",
      "Gear tooth damage from impact or debris",
      "Seal failure allowing grease contamination",
      "Bolt loosening requiring re-torque"
    ],
    maintenance_tips: [
      "Grease daily following manufacturer specifications",
      "Check bolt torque every 250 hours",
      "Inspect gear teeth during major service"
    ],
    related_parts: ["house", "swing_motor", "track_frame"],
    hydraulic_related: true,
    repair_urgency: "critical",
    svgPath: "M300,275 L460,275 L460,295 L300,295 Z",
    labelPosition: { x: 380, y: 285 }
  },
  {
    part_id: "swing_motor",
    part_name: "Swing Motor",
    alternate_names: ["Slew Motor", "Rotation Motor", "Swing Drive"],
    category: "upper_structure",
    category_label: "Upper Structure",
    function: "Hydraulic motor that provides rotational power to the slew ring. Works through a planetary gear reduction to generate high torque for smooth, controlled rotation of the upper structure.",
    common_issues: [
      "Internal seal wear causing slow rotation",
      "Gear reduction bearing failure",
      "Hydraulic line leaks at connections",
      "Brake not holding causing drift"
    ],
    maintenance_tips: [
      "Check swing brake function weekly",
      "Monitor for unusual noise during rotation",
      "Inspect hydraulic lines for wear"
    ],
    related_parts: ["slew_ring", "main_control_valve", "hydraulic_pump"],
    hydraulic_related: true,
    repair_urgency: "high",
    svgPath: "M440,270 L470,270 L470,290 L440,290 Z",
    labelPosition: { x: 455, y: 280 }
  },

  // ==========================================
  // ARM ASSEMBLY (11 parts)
  // ==========================================
  {
    part_id: "boom",
    part_name: "Boom (Main Arm)",
    alternate_names: ["Main Boom", "Primary Arm", "Boom Arm", "Lift Arm"],
    category: "arm_assembly",
    category_label: "Arm Assembly",
    function: "Primary lifting arm extending from the excavator body. Provides vertical reach and digging depth control. Articulates at the house connection and at the stick connection point.",
    common_issues: [
      "Hydraulic cylinder seal leaks at boom cylinder",
      "Pivot pin and bushing wear at connections",
      "Structural cracks from overloading",
      "Grease fitting blockage"
    ],
    maintenance_tips: [
      "Grease all pivot points daily",
      "Inspect welds around cylinder mounts",
      "Check for cracks at high-stress areas",
      "Monitor pin and bushing play"
    ],
    related_parts: ["boom_cylinder", "stick", "house", "pivot_pins"],
    hydraulic_related: true,
    repair_urgency: "high",
    svgPath: "M180,150 L280,150 L290,200 L260,240 L200,200 Z",
    labelPosition: { x: 235, y: 185 }
  },
  {
    part_id: "stick",
    part_name: "Stick (Dipper Arm)",
    alternate_names: ["Dipper Arm", "Arm", "Dipper Stick", "Secondary Arm"],
    category: "arm_assembly",
    category_label: "Arm Assembly",
    function: "Secondary arm connected to the boom that extends the reach of the excavator. Provides horizontal reach and fine control of the bucket position during digging and loading operations.",
    common_issues: [
      "Stick cylinder seal failures",
      "Pivot bushing wear causing slop",
      "Bent or damaged from striking objects",
      "Cracking at bucket connection point"
    ],
    maintenance_tips: [
      "Grease pivot points and cylinder ends daily",
      "Inspect for straightness and cracks",
      "Check bushing wear at each service"
    ],
    related_parts: ["boom", "stick_cylinder", "bucket", "h_link"],
    hydraulic_related: true,
    repair_urgency: "high",
    svgPath: "M80,100 L180,150 L170,180 L60,140 Z",
    labelPosition: { x: 120, y: 140 }
  },
  {
    part_id: "bucket",
    part_name: "Bucket",
    alternate_names: ["Digging Bucket", "Excavator Bucket", "Ditching Bucket"],
    category: "arm_assembly",
    category_label: "Arm Assembly",
    function: "Attachment at the end of the stick used for digging, scooping, and moving material. Available in various widths and styles (GP, heavy-duty, rock, ditching) for different applications.",
    common_issues: [
      "Tooth wear reducing digging efficiency",
      "Side cutter wear",
      "Cracking at tooth adapter welds",
      "Pin and bushing wear at stick connection"
    ],
    maintenance_tips: [
      "Rotate or replace teeth before complete wear",
      "Inspect cutting edge thickness weekly",
      "Grease bucket pins daily"
    ],
    related_parts: ["bucket_teeth", "bucket_cylinder", "h_link", "quick_coupler"],
    hydraulic_related: false,
    repair_urgency: "medium",
    svgPath: "M20,100 L80,100 L90,150 L10,150 Z",
    labelPosition: { x: 50, y: 125 }
  },
  {
    part_id: "boom_cylinder",
    part_name: "Boom Cylinder",
    alternate_names: ["Boom Ram", "Lift Cylinder", "Boom Hydraulic Cylinder"],
    category: "arm_assembly",
    category_label: "Arm Assembly",
    function: "Large hydraulic cylinder that raises and lowers the boom. Typically mounted between the house and boom, providing the primary lifting force for the entire front attachment.",
    common_issues: [
      "Piston seal leaks causing slow drift",
      "Rod seal leaks (external oil)",
      "Scored or pitted cylinder rod",
      "Cylinder barrel scoring"
    ],
    maintenance_tips: [
      "Keep rod clean and free of debris",
      "Inspect rod chrome for damage",
      "Check for external leaks daily"
    ],
    related_parts: ["boom", "house", "main_control_valve", "hydraulic_lines"],
    hydraulic_related: true,
    repair_urgency: "critical",
    svgPath: "M240,200 L270,190 L285,210 L255,220 Z",
    labelPosition: { x: 260, y: 205 }
  },
  {
    part_id: "stick_cylinder",
    part_name: "Stick Cylinder (Arm Cylinder)",
    alternate_names: ["Arm Cylinder", "Dipper Cylinder", "Stick Ram"],
    category: "arm_assembly",
    category_label: "Arm Assembly",
    function: "Hydraulic cylinder that extends and retracts the stick relative to the boom. Provides the digging crowd force and controls the horizontal reach of the bucket.",
    common_issues: [
      "Internal bypass causing weak digging force",
      "Rod end bearing wear",
      "Hose connection leaks",
      "Cylinder drift under load"
    ],
    maintenance_tips: [
      "Grease rod end bearings daily",
      "Monitor cycle times for internal wear",
      "Inspect hose connections for leaks"
    ],
    related_parts: ["stick", "boom", "main_control_valve", "hydraulic_lines"],
    hydraulic_related: true,
    repair_urgency: "critical",
    svgPath: "M140,130 L180,140 L175,160 L135,150 Z",
    labelPosition: { x: 157, y: 145 }
  },
  {
    part_id: "bucket_cylinder",
    part_name: "Bucket Cylinder",
    alternate_names: ["Bucket Ram", "Curl Cylinder", "Bucket Hydraulic Cylinder"],
    category: "arm_assembly",
    category_label: "Arm Assembly",
    function: "Hydraulic cylinder that curls and uncurls the bucket through the linkage mechanism. Provides the breakout force for digging and controls the dump angle during material release.",
    common_issues: [
      "Seal wear from constant cycling",
      "Pin eye bushing wear",
      "Bent rod from impact",
      "Linkage interference damage"
    ],
    maintenance_tips: [
      "Grease pin eyes daily",
      "Check for rod straightness",
      "Inspect cylinder body for dents"
    ],
    related_parts: ["bucket", "h_link", "stick", "hydraulic_lines"],
    hydraulic_related: true,
    repair_urgency: "high",
    svgPath: "M75,115 L100,105 L105,125 L80,135 Z",
    labelPosition: { x: 90, y: 120 }
  },
  {
    part_id: "h_link",
    part_name: "H-Link / Linkage",
    alternate_names: ["Bucket Link", "Bell Crank", "Linkage Assembly", "Bucket Linkage"],
    category: "arm_assembly",
    category_label: "Arm Assembly",
    function: "Mechanical linkage connecting the bucket cylinder to the bucket. Multiplies the cylinder force and converts linear motion to rotational motion for bucket curling action.",
    common_issues: [
      "Pin and bushing wear causing bucket shake",
      "Cracking at pin holes from fatigue",
      "Bent from side loading",
      "Missing grease causing accelerated wear"
    ],
    maintenance_tips: [
      "Grease all linkage pins daily",
      "Check for visible play in connections",
      "Inspect for cracks during service"
    ],
    related_parts: ["bucket_cylinder", "bucket", "stick"],
    hydraulic_related: false,
    repair_urgency: "medium",
    svgPath: "M65,100 L85,95 L90,110 L70,115 Z",
    labelPosition: { x: 77, y: 105 }
  },
  {
    part_id: "bucket_teeth",
    part_name: "Bucket Teeth",
    alternate_names: ["Teeth", "Digging Teeth", "Bucket Points", "Ground Engaging Tools (GET)"],
    category: "arm_assembly",
    category_label: "Arm Assembly",
    function: "Replaceable wear items that provide the primary cutting and penetrating force during digging. Protect the bucket lip from wear and can be changed for different soil conditions.",
    common_issues: [
      "Wear requiring frequent replacement",
      "Teeth breaking in rocky conditions",
      "Adapter wear preventing secure fit",
      "Incorrect tooth style for application"
    ],
    maintenance_tips: [
      "Rotate teeth positions to equalize wear",
      "Replace before wear reaches adapter",
      "Match tooth style to material being dug"
    ],
    related_parts: ["bucket"],
    hydraulic_related: false,
    repair_urgency: "medium",
    svgPath: "M15,145 L85,145 L85,155 L15,155 Z",
    labelPosition: { x: 50, y: 150 }
  },
  {
    part_id: "quick_coupler",
    part_name: "Quick Coupler",
    alternate_names: ["Quick Hitch", "Attachment Coupler", "Quick Connect", "Pin Grabber"],
    category: "arm_assembly",
    category_label: "Arm Assembly",
    function: "Allows rapid attachment changes without leaving the cab. Hydraulically or manually operated mechanism that securely locks various attachments (buckets, hammers, grapples) to the stick.",
    common_issues: [
      "Locking mechanism wear or failure",
      "Hydraulic cylinder leaks (if equipped)",
      "Pin wear causing loose attachments",
      "Safety lock malfunction"
    ],
    maintenance_tips: [
      "Test locking mechanism before each attachment change",
      "Grease coupler pins regularly",
      "Inspect wear pads and replace as needed"
    ],
    related_parts: ["stick", "bucket"],
    hydraulic_related: true,
    repair_urgency: "critical",
    svgPath: "M58,95 L78,95 L78,105 L58,105 Z",
    labelPosition: { x: 68, y: 100 }
  },
  {
    part_id: "pivot_pins",
    part_name: "Pivot Pins & Bushings",
    alternate_names: ["Arm Pins", "Boom Pins", "Joint Bushings", "Wear Bushings"],
    category: "arm_assembly",
    category_label: "Arm Assembly",
    function: "Steel pins and bronze/composite bushings at all arm joint connections. Allow smooth articulation while supporting massive loads and transferring forces between components.",
    common_issues: [
      "Bushing wear causing excessive play",
      "Pin scoring from lack of lubrication",
      "Seized pins from corrosion",
      "Grease seal failure"
    ],
    maintenance_tips: [
      "Grease all pivot points daily without fail",
      "Monitor for increasing play",
      "Replace bushings before pins are damaged"
    ],
    related_parts: ["boom", "stick", "bucket", "h_link"],
    hydraulic_related: false,
    repair_urgency: "high",
    svgPath: "M170,155 L185,155 L185,165 L170,165 Z",
    labelPosition: { x: 177, y: 160 }
  },
  {
    part_id: "thumb",
    part_name: "Hydraulic Thumb",
    alternate_names: ["Thumb Attachment", "Excavator Thumb", "Grapple Thumb"],
    category: "arm_assembly",
    category_label: "Arm Assembly",
    function: "Optional attachment that works opposite the bucket to grip, lift, and move irregularly shaped objects like logs, pipes, rocks, and debris. Hydraulically controlled from the cab.",
    common_issues: [
      "Cylinder seal leaks",
      "Pivot pin wear",
      "Tooth/pad wear",
      "Control valve sticking"
    ],
    maintenance_tips: [
      "Grease pivot points daily when installed",
      "Inspect cylinder rod for damage",
      "Check tines for cracks or wear"
    ],
    related_parts: ["bucket", "stick", "main_control_valve"],
    hydraulic_related: true,
    repair_urgency: "medium",
    svgPath: "M30,80 L55,85 L50,100 L25,95 Z",
    labelPosition: { x: 40, y: 90 }
  },

  // ==========================================
  // UNDERCARRIAGE (12 parts)
  // ==========================================
  {
    part_id: "track_frame",
    part_name: "Track Frame",
    alternate_names: ["Undercarriage Frame", "Crawler Frame", "Main Frame", "Side Frame"],
    category: "undercarriage",
    category_label: "Undercarriage",
    function: "Main structural member of the undercarriage that supports the track assembly, final drive, idler, and rollers. Connects to the center section and provides the foundation for ground contact.",
    common_issues: [
      "Cracking from impact or overloading",
      "Corrosion in coastal environments",
      "Bent from working on uneven terrain",
      "Worn roller mounting points"
    ],
    maintenance_tips: [
      "Inspect for cracks during service",
      "Keep undercarriage clean of debris buildup",
      "Check for proper track tension"
    ],
    related_parts: ["track_shoes", "track_rollers_bottom", "idler", "sprocket"],
    hydraulic_related: false,
    repair_urgency: "high",
    svgPath: "M100,295 L500,295 L500,340 L100,340 Z",
    labelPosition: { x: 300, y: 317 }
  },
  {
    part_id: "track_shoes",
    part_name: "Track Shoes / Track Pads",
    alternate_names: ["Track Pads", "Grouser Shoes", "Track Plates", "Ground Plates"],
    category: "undercarriage",
    category_label: "Undercarriage",
    function: "Metal or rubber plates attached to the track chain that make contact with the ground. Provide traction, flotation, and distribute the machine weight. Available in different widths and styles.",
    common_issues: [
      "Grouser wear reducing traction",
      "Bolt loosening or shearing",
      "Cracking in rocky terrain",
      "Rubber pad separation (rubber tracks)"
    ],
    maintenance_tips: [
      "Check bolt torque regularly",
      "Match shoe width to ground conditions",
      "Rotate shoes if wear is uneven"
    ],
    related_parts: ["track_chain", "track_frame"],
    hydraulic_related: false,
    repair_urgency: "medium",
    svgPath: "M100,335 L500,335 L500,355 L100,355 Z",
    labelPosition: { x: 300, y: 345 }
  },
  {
    part_id: "track_chain",
    part_name: "Track Chain / Track Links",
    alternate_names: ["Track Links", "Chain Assembly", "Track Assembly", "Crawler Chain"],
    category: "undercarriage",
    category_label: "Undercarriage",
    function: "Series of connected links forming the continuous track loop. Engages with sprocket teeth for propulsion and wraps around the idler. Supports the machine weight through the rollers.",
    common_issues: [
      "Pin and bushing wear causing stretch",
      "Link cracking from impact",
      "Dry joints from lack of lubrication",
      "Debris packing causing derailment"
    ],
    maintenance_tips: [
      "Maintain proper track tension",
      "Keep tracks clean of mud and debris",
      "Measure chain stretch at each service"
    ],
    related_parts: ["track_shoes", "sprocket", "idler", "track_rollers_bottom"],
    hydraulic_related: false,
    repair_urgency: "high",
    svgPath: "M110,310 L490,310 L490,330 L110,330 Z",
    labelPosition: { x: 300, y: 320 }
  },
  {
    part_id: "sprocket",
    part_name: "Sprocket / Drive Sprocket",
    alternate_names: ["Drive Sprocket", "Sprocket Wheel", "Drive Wheel", "Sprocket Segments"],
    category: "undercarriage",
    category_label: "Undercarriage",
    function: "Toothed wheel connected to the final drive that engages the track chain to propel the excavator. Transfers rotational power from the travel motor through the final drive to the track.",
    common_issues: [
      "Tooth wear affecting engagement",
      "Cracking or chipping of teeth",
      "Bore wear at final drive connection",
      "Uneven wear from track misalignment"
    ],
    maintenance_tips: [
      "Inspect teeth for wear pattern",
      "Ensure proper track tension",
      "Replace in pairs for even wear"
    ],
    related_parts: ["final_drive", "track_chain", "travel_motor"],
    hydraulic_related: false,
    repair_urgency: "high",
    svgPath: "M450,305 L490,305 L490,345 L450,345 Z",
    labelPosition: { x: 470, y: 325 }
  },
  {
    part_id: "idler",
    part_name: "Front Idler / Track Idler",
    alternate_names: ["Idler Wheel", "Front Idler", "Track Tensioner Idler"],
    category: "undercarriage",
    category_label: "Undercarriage",
    function: "Large wheel at the front of the track frame that guides the track chain and maintains proper tension. Slides in the track frame to allow tension adjustment via the track adjuster.",
    common_issues: [
      "Bearing failure causing seizure",
      "Rim wear from chain contact",
      "Hub seal leaks",
      "Shaft wear in frame guides"
    ],
    maintenance_tips: [
      "Check for smooth rotation regularly",
      "Inspect seals for leaks",
      "Ensure track tension is correct"
    ],
    related_parts: ["track_chain", "track_adjuster", "track_frame"],
    hydraulic_related: false,
    repair_urgency: "high",
    svgPath: "M110,305 L150,305 L150,345 L110,345 Z",
    labelPosition: { x: 130, y: 325 }
  },
  {
    part_id: "track_rollers_bottom",
    part_name: "Bottom Track Rollers (Carrier Rollers)",
    alternate_names: ["Lower Rollers", "Track Rollers", "Support Rollers", "Bottom Rollers"],
    category: "undercarriage",
    category_label: "Undercarriage",
    function: "Heavy-duty rollers mounted under the track frame that support the excavator's weight and guide the track chain. Distribute load across the track for stability and smooth travel.",
    common_issues: [
      "Seal failure causing oil leaks",
      "Bearing wear causing rough operation",
      "Flange wear from misalignment",
      "Collar wear from track contact"
    ],
    maintenance_tips: [
      "Check for oil leaks indicating seal failure",
      "Listen for bearing noise during travel",
      "Inspect roller faces for wear pattern"
    ],
    related_parts: ["track_frame", "track_chain"],
    hydraulic_related: false,
    repair_urgency: "medium",
    svgPath: "M160,325 L200,325 L200,340 L160,340 Z",
    labelPosition: { x: 180, y: 332 }
  },
  {
    part_id: "track_rollers_top",
    part_name: "Top Track Rollers (Carrier Rollers)",
    alternate_names: ["Upper Rollers", "Carrier Rollers", "Top Rollers", "Return Rollers"],
    category: "undercarriage",
    category_label: "Undercarriage",
    function: "Smaller rollers mounted on top of the track frame that support and guide the returning (top) section of the track chain. Prevent track sag and maintain proper chain tension.",
    common_issues: [
      "Bearing failure from contamination",
      "Seal leaks",
      "Flange wear",
      "Mounting bracket cracks"
    ],
    maintenance_tips: [
      "Visually inspect for oil leaks",
      "Check for free rotation",
      "Replace if track sag is excessive"
    ],
    related_parts: ["track_frame", "track_chain"],
    hydraulic_related: false,
    repair_urgency: "low",
    svgPath: "M250,295 L280,295 L280,310 L250,310 Z",
    labelPosition: { x: 265, y: 302 }
  },
  {
    part_id: "final_drive",
    part_name: "Final Drive",
    alternate_names: ["Travel Reduction", "Final Drive Gearbox", "Planetary Drive", "Track Drive"],
    category: "undercarriage",
    category_label: "Undercarriage",
    function: "Planetary gear reduction unit that converts high-speed, low-torque output from the travel motor into low-speed, high-torque rotation of the sprocket for powerful track propulsion.",
    common_issues: [
      "Gear wear causing noise and vibration",
      "Seal failure leading to oil contamination",
      "Bearing failure",
      "Planet gear carrier damage"
    ],
    maintenance_tips: [
      "Check oil level and condition regularly",
      "Change oil at manufacturer intervals",
      "Listen for unusual gear noise"
    ],
    related_parts: ["travel_motor", "sprocket", "track_frame"],
    hydraulic_related: true,
    repair_urgency: "critical",
    svgPath: "M470,310 L500,310 L500,340 L470,340 Z",
    labelPosition: { x: 485, y: 325 }
  },
  {
    part_id: "travel_motor",
    part_name: "Travel Motor",
    alternate_names: ["Track Motor", "Drive Motor", "Propel Motor", "Travel Drive Motor"],
    category: "undercarriage",
    category_label: "Undercarriage",
    function: "Hydraulic motor that provides rotational power to the final drive for track propulsion. Each track has its own travel motor for independent speed control and counter-rotation steering.",
    common_issues: [
      "Internal seal wear causing weak travel",
      "Brake not releasing or not holding",
      "Shaft seal leaks",
      "Contamination from final drive failure"
    ],
    maintenance_tips: [
      "Check hydraulic oil cleanliness",
      "Test travel brake function",
      "Monitor for unusual noise or heat"
    ],
    related_parts: ["final_drive", "main_control_valve", "hydraulic_pump"],
    hydraulic_related: true,
    repair_urgency: "critical",
    svgPath: "M480,295 L510,295 L510,320 L480,320 Z",
    labelPosition: { x: 495, y: 307 }
  },
  {
    part_id: "track_adjuster",
    part_name: "Track Adjuster / Track Tensioner",
    alternate_names: ["Track Tensioner", "Idler Adjuster", "Recoil Spring", "Track Spring"],
    category: "undercarriage",
    category_label: "Undercarriage",
    function: "Grease-filled hydraulic cylinder and spring assembly that maintains proper track tension. Allows the idler to move in the frame to absorb shock and accommodate track stretch.",
    common_issues: [
      "Grease leaks causing loss of tension",
      "Seized cylinder preventing adjustment",
      "Spring fatigue or breakage",
      "Contamination from seal failure"
    ],
    maintenance_tips: [
      "Check track tension weekly",
      "Add grease to maintain proper tension",
      "Never over-tighten tracks"
    ],
    related_parts: ["idler", "track_frame", "track_chain"],
    hydraulic_related: false,
    repair_urgency: "medium",
    svgPath: "M120,310 L140,310 L140,325 L120,325 Z",
    labelPosition: { x: 130, y: 317 }
  },
  {
    part_id: "blade",
    part_name: "Dozer Blade",
    alternate_names: ["Backfill Blade", "Grading Blade", "Front Blade", "Push Blade"],
    category: "undercarriage",
    category_label: "Undercarriage",
    function: "Optional front-mounted blade for backfilling, grading, and leveling. Also used to stabilize the machine during digging operations. Hydraulically raised and lowered from the cab.",
    common_issues: [
      "Cutting edge wear",
      "Cylinder seal leaks",
      "Pivot pin wear",
      "Frame cracks from impact"
    ],
    maintenance_tips: [
      "Reverse or replace cutting edge when worn",
      "Grease pivot points daily",
      "Check cylinder for leaks"
    ],
    related_parts: ["track_frame", "hydraulic_lines"],
    hydraulic_related: true,
    repair_urgency: "low",
    svgPath: "M95,340 L115,340 L115,360 L95,360 Z",
    labelPosition: { x: 105, y: 350 }
  },
  {
    part_id: "center_frame",
    part_name: "Center Frame / Carbody",
    alternate_names: ["Carbody", "Main Frame", "Center Section", "X-Frame"],
    category: "undercarriage",
    category_label: "Undercarriage",
    function: "Central structural component connecting the two track frames. Supports the slew ring and upper structure, and houses the swing motor and center swivel for hydraulic flow to travel motors.",
    common_issues: [
      "Cracking at track frame connections",
      "Corrosion in frame members",
      "Wear at slew ring mounting surface",
      "Damage from working in water"
    ],
    maintenance_tips: [
      "Inspect welds at track frame junctions",
      "Keep drain holes clear",
      "Check slew ring mounting bolts"
    ],
    related_parts: ["track_frame", "slew_ring", "swing_motor"],
    hydraulic_related: false,
    repair_urgency: "high",
    svgPath: "M280,290 L480,290 L480,310 L280,310 Z",
    labelPosition: { x: 380, y: 300 }
  },

  // ==========================================
  // HYDRAULIC SYSTEM (6 parts)
  // ==========================================
  {
    part_id: "hydraulic_pump",
    part_name: "Hydraulic Pump",
    alternate_names: ["Main Pump", "Piston Pump", "Variable Displacement Pump", "Hydrostatic Pump"],
    category: "hydraulic_system",
    category_label: "Hydraulic System",
    function: "Engine-driven pump that converts mechanical power to hydraulic flow and pressure. Most excavators use variable displacement piston pumps that adjust output based on demand for efficiency.",
    common_issues: [
      "Internal wear causing reduced flow",
      "Cavitation from restricted intake",
      "Seal leaks at shaft or case drain",
      "Swashplate wear affecting displacement"
    ],
    maintenance_tips: [
      "Maintain clean hydraulic oil",
      "Check suction line for restrictions",
      "Monitor pump noise for early warning"
    ],
    related_parts: ["engine_compartment", "hydraulic_tank", "main_control_valve", "hydraulic_filters"],
    hydraulic_related: true,
    repair_urgency: "critical",
    svgPath: "M350,230 L380,230 L380,260 L350,260 Z",
    labelPosition: { x: 365, y: 245 }
  },
  {
    part_id: "main_control_valve",
    part_name: "Main Control Valve",
    alternate_names: ["Control Valve", "Directional Valve", "MCV", "Valve Stack"],
    category: "hydraulic_system",
    category_label: "Hydraulic System",
    function: "Multi-spool directional control valve that routes hydraulic flow to cylinders and motors based on operator input. Controls speed and direction of all excavator functions.",
    common_issues: [
      "Spool wear causing internal leakage",
      "O-ring failures at spool ends",
      "Contamination causing sticking spools",
      "Relief valve malfunction"
    ],
    maintenance_tips: [
      "Keep hydraulic oil clean",
      "Check for external leaks at connections",
      "Verify relief pressure settings annually"
    ],
    related_parts: ["hydraulic_pump", "boom_cylinder", "stick_cylinder", "bucket_cylinder", "travel_motor", "swing_motor"],
    hydraulic_related: true,
    repair_urgency: "critical",
    svgPath: "M385,235 L420,235 L420,265 L385,265 Z",
    labelPosition: { x: 402, y: 250 }
  },
  {
    part_id: "hydraulic_tank",
    part_name: "Hydraulic Tank / Reservoir",
    alternate_names: ["Oil Tank", "Hydraulic Reservoir", "Oil Reservoir", "Fluid Tank"],
    category: "hydraulic_system",
    category_label: "Hydraulic System",
    function: "Storage tank for hydraulic oil that also allows air separation, heat dissipation, and contamination settling. Contains suction screens and typically the return filter.",
    common_issues: [
      "Internal baffle damage affecting air separation",
      "Contamination from failed seals",
      "Low oil level from leaks",
      "Overheating from insufficient cooling"
    ],
    maintenance_tips: [
      "Check oil level daily",
      "Sample oil for analysis regularly",
      "Clean breather cap to allow proper venting"
    ],
    related_parts: ["hydraulic_pump", "hydraulic_filters", "hydraulic_lines"],
    hydraulic_related: true,
    repair_urgency: "high",
    svgPath: "M390,195 L420,195 L420,230 L390,230 Z",
    labelPosition: { x: 405, y: 212 }
  },
  {
    part_id: "hydraulic_lines",
    part_name: "Hydraulic Hoses & Lines",
    alternate_names: ["Hydraulic Hoses", "High Pressure Lines", "Hose Assemblies", "Hydraulic Piping"],
    category: "hydraulic_system",
    category_label: "Hydraulic System",
    function: "Flexible hoses and rigid steel lines that transport pressurized hydraulic oil between components. Must withstand high pressures (3,000-5,000 PSI) and constant flexing at articulation points.",
    common_issues: [
      "External abrasion causing failure",
      "Fitting leaks from vibration loosening",
      "Internal degradation from heat/age",
      "Pinched or kinked hoses restricting flow"
    ],
    maintenance_tips: [
      "Inspect hoses daily for wear, bulges, or leaks",
      "Ensure proper routing without sharp bends",
      "Replace hoses at manufacturer intervals"
    ],
    related_parts: ["hydraulic_pump", "main_control_valve", "boom_cylinder", "stick_cylinder", "bucket_cylinder"],
    hydraulic_related: true,
    repair_urgency: "critical",
    svgPath: "M200,170 L230,170 L235,195 L205,195 Z",
    labelPosition: { x: 217, y: 182 }
  },
  {
    part_id: "hydraulic_filters",
    part_name: "Hydraulic Filters",
    alternate_names: ["Oil Filters", "Return Filter", "Suction Strainer", "Pressure Filter"],
    category: "hydraulic_system",
    category_label: "Hydraulic System",
    function: "Filtration elements that remove contamination from hydraulic oil. Typically includes suction strainer, return line filter, and sometimes high-pressure filter. Critical for component longevity.",
    common_issues: [
      "Clogged filter causing bypass",
      "Filter collapse from high differential pressure",
      "Wrong micron rating installed",
      "O-ring leaks at filter housing"
    ],
    maintenance_tips: [
      "Change filters at recommended intervals",
      "Never operate with bypass indicator triggered",
      "Use only OEM-spec replacement filters"
    ],
    related_parts: ["hydraulic_tank", "hydraulic_pump"],
    hydraulic_related: true,
    repair_urgency: "high",
    svgPath: "M360,195 L385,195 L385,225 L360,225 Z",
    labelPosition: { x: 372, y: 210 }
  },
  {
    part_id: "center_swivel",
    part_name: "Center Swivel / Rotary Joint",
    alternate_names: ["Rotary Manifold", "Swivel Joint", "Center Joint", "Hydraulic Swivel"],
    category: "hydraulic_system",
    category_label: "Hydraulic System",
    function: "Allows hydraulic oil to flow from the rotating upper structure to the non-rotating undercarriage. Essential for supplying the travel motors while the house rotates continuously.",
    common_issues: [
      "Internal seal wear causing cross-port leakage",
      "External seal leaks",
      "Contamination scoring seal surfaces",
      "Bearing wear affecting alignment"
    ],
    maintenance_tips: [
      "Monitor for oil leaks around center section",
      "Keep hydraulic oil clean",
      "Check for heat indicating internal leakage"
    ],
    related_parts: ["travel_motor", "main_control_valve", "slew_ring"],
    hydraulic_related: true,
    repair_urgency: "high",
    svgPath: "M370,270 L400,270 L400,295 L370,295 Z",
    labelPosition: { x: 385, y: 282 }
  }
];

// Category data for filtering
export const partCategories = [
  { id: 'all', label: 'All Parts', count: excavatorParts.length },
  { id: 'upper_structure', label: 'Upper Structure', count: excavatorParts.filter(p => p.category === 'upper_structure').length },
  { id: 'arm_assembly', label: 'Arm Assembly', count: excavatorParts.filter(p => p.category === 'arm_assembly').length },
  { id: 'undercarriage', label: 'Undercarriage', count: excavatorParts.filter(p => p.category === 'undercarriage').length },
  { id: 'hydraulic_system', label: 'Hydraulic System', count: excavatorParts.filter(p => p.category === 'hydraulic_system').length }
];

// Get part by ID
export const getPartById = (id: string): ExcavatorPart | undefined => {
  return excavatorParts.find(part => part.part_id === id);
};

// Search parts by name or alternate names
export const searchParts = (query: string): ExcavatorPart[] => {
  const lowerQuery = query.toLowerCase();
  return excavatorParts.filter(part => 
    part.part_name.toLowerCase().includes(lowerQuery) ||
    part.alternate_names.some(name => name.toLowerCase().includes(lowerQuery)) ||
    part.function.toLowerCase().includes(lowerQuery)
  );
};

// Get parts by category
export const getPartsByCategory = (category: string): ExcavatorPart[] => {
  if (category === 'all') return excavatorParts;
  return excavatorParts.filter(part => part.category === category);
};

// Get hydraulic-related parts
export const getHydraulicParts = (): ExcavatorPart[] => {
  return excavatorParts.filter(part => part.hydraulic_related);
};
