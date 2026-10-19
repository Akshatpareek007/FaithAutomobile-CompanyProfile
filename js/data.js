/**
 * Faith Automation Works - Official Data Model
 * Extracted & Synthesized from Company Profile & Engineering Documentation
 */

const COMPANY_INFO = {
  name: "Faith Automation Works",
  shortName: "Faith Automation",
  tagline: "Precision Turnkey Automation, SPMs & Smart Tool Room Engineering",
  established: "June 2015",
  yearsExperience: "10+",
  spmDelivered: "85+",
  tier1Clients: "30+",
  satisfactionRate: "100%",
  director: {
    name: "Mr. Kaushal K. Khandelwal",
    title: "Managing Director",
    experience: "10+ Years in Automotive Components Engineering & Mechanical Designing",
    message: "Our foundational commitment is prioritizing customer needs with unmatched engineering precision and delivering 100% satisfaction through robust, zero-defect automation solutions."
  },
  qualityPolicy: "To achieve customer delight through continuous involvement in quality management systems, innovative value addition in product quality, in-time delivery, and rapid response to engineering queries.",
  strengths: [
    { title: "Young & Dynamic Leadership", desc: "Visionary engineering guidance backed by deep Tier-1 automotive tooling domain knowledge." },
    { title: "Clarity of Vision", desc: "Focused on zero-defect manufacturing, poka-yoke error proofing, and smart Industry 4.0 automation." },
    { title: "Quality Consciousness", desc: "Rigorous ISO-standard quality assurance protocols at every stage from CAD design to floor trials." },
    { title: "Trained & Experienced Workforce", desc: "Multidisciplinary squad of design engineers, electrical/PLC programmers, and skilled toolmakers." }
  ],
  teamStats: [
    { role: "Design Engineers", count: 4, detail: "SolidWorks, NX CAD, FEA Simulation" },
    { role: "Electrical & PLC Engineers", count: 3, detail: "Siemens, Mitsubishi, Omron, Delta" },
    { role: "Workshop Supervisors", count: 1, detail: "Shop floor management & execution" },
    { role: "Skilled Toolroom Specialists", count: 10, detail: "Precision machining, assembly & fitting" },
    { role: "Marketing & Project Managers", count: 2, detail: "Client coordination & turnkey delivery" },
    { role: "Administrative & Support", count: 2, detail: "Accounts, QA documentation & logistics" }
  ],
  contact: {
    address: "Plot no. 711B, Ground Floor, Pace City II, Sector-37, Gurgaon – 122001 (HR), India",
    phones: ["+91 9990813151", "+91 9456258802", "+91 9012248578"],
    primaryPhone: "+91 9990813151",
    whatsappNumber: "919990813151",
    emails: ["kaushalkhandelwal@faithautomation.co.in", "info@faithautomation.co.in"],
    primaryEmail: "kaushalkhandelwal@faithautomation.co.in",
    website: "www.faithautomation.co.in",
    workingHours: "Monday - Saturday: 8:30 AM – 7:30 PM (IST)"
  }
};

const CORE_SERVICES = [
  {
    id: "spm-assembly",
    number: "01",
    title: "Turnkey Assembly Lines & SPMs",
    category: "Assembly & Special Purpose",
    icon: "layers",
    summary: "High-throughput semi and fully-automatic assembly lines equipped with pneumatic indexing, rotary tables, and poka-yoke sensors.",
    features: [
      "Custom multi-station carousel & inline conveyors",
      "Auto-screwdriving, riveting & press-fitting integration",
      "Poka-yoke interlocks for zero-defect part validation",
      "Automated part feeder bowls and escapements"
    ],
    applications: "Automotive louvers, fuel fillers, shark-fin antennas, shift levers, bumper sub-assemblies"
  },
  {
    id: "robotic-automation",
    number: "02",
    title: "Robotic Automation & Welding Cells",
    category: "Robotics",
    icon: "cpu",
    summary: "Integrated 6-axis articulated industrial robotic cells, automated spot/MIG welding fixtures, and high-speed robotic gantries.",
    features: [
      "Heavy-duty robotic welding fixtures with pneumatic clamping",
      "Turnkey robotic cells with safety light curtains & interlocks",
      "Robotic pick-and-place & automated machine tending",
      "ABB, Fanuc, Kuka & Yaskawa robot integration"
    ],
    applications: "Chassis cross members, exhaust components, BIW structures, stamped sheet metal assemblies"
  },
  {
    id: "vision-systems",
    number: "03",
    title: "Vision & AI Optical Inspection",
    category: "Inspection",
    icon: "eye",
    summary: "High-speed camera vision inspection stations for 100% in-line error detection, child parts presence, and angular alignment.",
    features: [
      "High-resolution smart industrial vision cameras & telecentric optics",
      "Real-time color hue, surface defect & orientation verification",
      "Child part presence/absence detection before assembly indexing",
      "Pass/Fail automated reject bin sorting with alarm logs"
    ],
    applications: "Garnish panels, instrument cluster switches, connector pin alignments, electronic keyfobs"
  },
  {
    id: "leak-testing",
    number: "04",
    title: "EOL Testing & Leak Detection Rigs",
    category: "Quality Assurance",
    icon: "activity",
    summary: "Precision air, water, and hydrostatic differential pressure leak testing machines with micron-sensitive transducers.",
    features: [
      "ALT (Air Leakage Test) with high-precision flow sensors",
      "WLT (Water Leakage Test) & HLT (Hydrostatic Leak Test)",
      "Lock-to-lock dynamic torque testing rigs with angle encoders",
      "Multi-port injector cap blockage detection SPMs"
    ],
    applications: "Radiator tanks, CAC deflectors, fuel lines, coolant pipes, brake fluid reservoirs"
  },
  {
    id: "fixtures-gauges",
    number: "05",
    title: "Precision Checking Fixtures & Gauges",
    category: "Metrology & Tooling",
    icon: "crosshair",
    summary: "High-tolerance checking fixtures, receiving gauges, panel checkers, and wire-frame gauges built from hardened tool steel.",
    features: [
      "Mahindra W501 & tier-1 platform checking fixtures",
      "Dial indicator & digital probe gauge integration",
      "Hardened steel locator pins and toggle clamps",
      "CMM inspection reports and gauge repeatability & reproducibility (GR&R)"
    ],
    applications: "Car bumper panels, HVAC ducting, cross members, radiator tanks, wire frames"
  },
  {
    id: "marking-traceability",
    number: "06",
    title: "Marking, 2D QR & Traceability",
    category: "Traceability",
    icon: "qr-code",
    summary: "Automated direct part marking systems ensuring seamless end-to-end component traceability across tier-1 supply chains.",
    features: [
      "Fiber laser engraving & pneumatic dot peen marking",
      "Automatic 2D DataMatrix & QR code verification",
      "Industrial barcode scanner handshakes with ERP systems",
      "Tamper-proof serial numbering and date-time stamping"
    ],
    applications: "Engine caps, transmission gears, steering components, electronic housings"
  },
  {
    id: "special-spms",
    number: "07",
    title: "Hydro-Pneumatic Presses & Ultrasonic SPMs",
    category: "Machining & Forming",
    icon: "settings",
    summary: "Custom engineered heavy-duty hydraulic and pneumatic cutting, punching, degating, and ultrasonic welding machines.",
    features: [
      "Hydro-pneumatic cutting and trimming stations",
      "Ultrasonic plastic welding SPMs with acoustic tooling",
      "Semi-automatic degating machines for injection-molded parts",
      "Automatic bearing ID measuring and bush pressing rigs"
    ],
    applications: "Lock nuts, plastic mold degating, automotive interior trim panels, center pillars"
  },
  {
    id: "safety-enclosures",
    number: "08",
    title: "Safety Guarding & Ergonomic Structures",
    category: "Plant Safety",
    icon: "shield",
    summary: "Modular industrial aluminum profile and steel safety enclosures engineered for CE/OSHA compliant plant environments.",
    features: [
      "Heavy-duty modular safety perimeter guarding with yellow mesh",
      "Pneumatically interlocked safety access doors",
      "Integrated emergency stop lines & optical light barriers",
      "Custom industrial trolleys, transport racks & workstations"
    ],
    applications: "Pallet wrapping machines, robotic welding perimeters, high-speed press cells"
  },
  {
    id: "industry-40",
    number: "09",
    title: "Industry 4.0, LabVIEW & SCADA Integration",
    category: "Software & Controls",
    icon: "server",
    summary: "Custom software architectures bridging shop-floor automation with enterprise MES (iTAC), LabVIEW DAQ, and SCADA telemetry.",
    features: [
      "Custom LabVIEW test bench data acquisition and reporting",
      "Seamless MES integration via iTAC / SAP / REST APIs",
      "Real-time SCADA production dashboards and OEE calculation",
      ".NET / C# custom HMI operator interfaces with cloud logging"
    ],
    applications: "Centralized plant reporting, batch genealogy records, predictive maintenance tracking"
  }
];

const TOOLROOM_MACHINERY = [
  {
    id: "vmc-manford",
    name: "VMC - Manford Make",
    type: "Vertical Machining Center",
    spec: "700 mm x 500 mm Travel",
    qty: 1,
    image: "assets/images/vmc-manford-machine.jpg",
    features: "High-precision 3-axis CNC milling for complex 3D fixture cavities, hardened steel tooling, and micron-level tolerances.",
    status: "Operational • Production Ready"
  },
  {
    id: "m1tr-milling",
    name: "M1TR Milling Machine with DRO",
    type: "Precision Turret Milling",
    spec: "450 mm x 1050 mm Bed Size",
    qty: 2,
    image: "assets/images/m1tr-milling-machine.jpg",
    features: "Equipped with digital readout (DRO) for rapid facing, slotting, pocketing, and fixture base machining.",
    status: "Operational • Dual Units"
  },
  {
    id: "surface-grinder",
    name: "Surface Grinder",
    type: "High-Precision Grinding",
    spec: "12\" x 24\" Magnetic Chuck",
    qty: 2,
    image: "assets/images/surface-grinder-machine.jpg",
    features: "Mirrored surface finish down to Ra 0.2 µm, ensuring flatness on datum blocks, locator pins, and slide ways.",
    status: "Operational • Dual Units"
  },
  {
    id: "heavy-lathe",
    name: "Heavy Duty Precision Lathe",
    type: "Turning & Boring Lathe",
    spec: "6 Feet Bed Length",
    qty: 1,
    image: "assets/images/heavy-lathe-machine.jpg",
    features: "Heavy-duty cylindrical turning, threading, facing, and shaft manufacturing for machine spindles and mandrels.",
    status: "Operational"
  },
  {
    id: "radial-drill",
    name: "Radial / Pillar Drill Machines",
    type: "Heavy Boring & Tapping",
    spec: "5 mm to 30 mm Capacity",
    qty: 3,
    image: "assets/images/heavy-lathe-machine.jpg",
    features: "High torque tapping and multi-step drilling across thick steel baseplates and structural machine bolsters.",
    status: "Operational • 3 Workstations"
  },
  {
    id: "cg-machine",
    name: "Cylindrical Grinding (CG) Machine",
    type: "External / Internal Grinding",
    spec: "1000 mm x 300 mm Swing",
    qty: 1,
    image: "assets/images/surface-grinder-machine.jpg",
    features: "Precision shaft and bearing journal grinding maintaining sub-5 micron concentricity tolerances.",
    status: "Operational"
  },
  {
    id: "power-backup",
    name: "DG Power Backup - Kirloskar",
    type: "Uninterrupted Industrial Power",
    spec: "20 KVA Continuous Backup",
    qty: 1,
    image: "assets/images/safety-guards-structure.jpg",
    features: "Ensures 24/7 continuous uninterrupted CNC machining and precision grinding during fabrication cycles.",
    status: "Active 24/7"
  }
];

const CLIENTS = [
  { name: "Hero Motors (HMC)", sector: "2-Wheeler OEM", highlight: "Turnkey SPM tooling & assembly solutions" },
  { name: "Hanon Automotive Systems (Gujarat)", sector: "Automotive Climate & HVAC", highlight: "Pipe ALT testing rigs & receiving gauges" },
  { name: "Hanon Climate Systems (Bhiwadi)", sector: "Thermal Management", highlight: "Outlet pipe gauges & leak test stations" },
  { name: "Lumax Auto Technologies Ltd.", sector: "Automotive Lighting & Electronics", highlight: "Integrated lever & sensor assembly lines" },
  { name: "Lumax Mannoh Allied Tech", sector: "Gear Shift Systems", highlight: "Case gear auto checking & assembly SPM" },
  { name: "Lumax FAE Technologies", sector: "Automotive Sensors", highlight: "Electronic component testing fixtures" },
  { name: "Lumax Yokowo Technologies", sector: "Antennas & Telematics", highlight: "Shark-fin antenna assembly automation" },
  { name: "BorgWarner Emissions Systems", sector: "Engine & Powertrain", highlight: "Emissions component inspection & tooling" },
  { name: "JRG Automotive Industries", sector: "Tier-1 Auto Systems", highlight: "Vision inspection machines & checking fixtures" },
  { name: "Kumi Supreme India", sector: "Automotive Plastic Injection", highlight: "Ultrasonic SPM 2TG CTR PLR & degating" },
  { name: "Munjal Showa Limited", sector: "Shock Absorbers & Struts", highlight: "Precision suspension tooling & fixtures" },
  { name: "PPAP Automotive Ltd.", sector: "Automotive Sealing Systems", highlight: "Extrusion profile checking gauges" },
  { name: "NTN NEI Manufacturing", sector: "Precision Bearings", highlight: "Bearing ID measuring & pressing SPMs" },
  { name: "Reckitt Benckiser India", sector: "FMCG Global Leader", highlight: "High-speed packaging SPM automation" },
  { name: "Takahata Precision India", sector: "Micro-Precision Molded Parts", highlight: "Special purpose inspection gauges" },
  { name: "Sogefi Engine Systems", sector: "Filtration & Engine Systems", highlight: "Air intake & filtration testing fixtures" },
  { name: "Radiant Polymers (All Plants)", sector: "Precision Technical Plastics", highlight: "Multi-plant checking fixtures & SPMs" },
  { name: "Alpha Maier Manesar", sector: "Rear View Mirrors", highlight: "Mirror assembly & torque testing stations" },
  { name: "Otsuka Venus Automotive", sector: "Automotive Fasteners", highlight: "Checking fixtures & automated gauges" },
  { name: "Delseal India Pvt. Ltd.", sector: "Fluid Sealing", highlight: "Gasket & seal testing equipment" },
  { name: "HSIL Limited (Bhiwadi)", sector: "Ceramics & Building Products", highlight: "Special purpose tooling" },
  { name: "Sellowrap Industries", sector: "Protective Packaging", highlight: "Safety structures & wrapping machine guards" },
  { name: "Gandhi Springs Pvt. Ltd.", sector: "Automotive Springs", highlight: "Spring load & dimension testing fixtures" },
  { name: "Akul Industries Kolkata", sector: "Industrial Components", highlight: "Tool room spares & checking gauges" }
];

const MACHINE_PROJECTS = [
  {
    id: "proj-robotic-cell-yhb",
    title: "Robotic Automation Cell (YHB Model)",
    category: "robotic",
    categoryLabel: "Robotic Automation",
    client: "Tier-1 Automotive OEM",
    application: "Automotive Sheet Metal Body & Chassis",
    image: "assets/images/robotic-cell-yhb.jpg",
    specs: [
      { label: "Cycle Time", value: "28 sec / part" },
      { label: "Payload", value: "16 kg 6-Axis Robot" },
      { label: "Safety System", value: "Optical Light Curtain & Interlocked Enclosure" },
      { label: "Control System", value: "Siemens S7-1200 PLC + Comfort HMI" }
    ],
    features: [
      "Full turnkey robotic cell equipped with pneumatic indexing table",
      "Poka-yoke part seating sensors preventing misloaded components",
      "Safety guarding with dual interlocked maintenance doors",
      "Custom pneumatic clamping fixture with hardened tool-steel wear pads"
    ],
    description: "Heavy-duty industrial robotic cell engineered for automated handling and welding on the YHB vehicle model. Features synchronized pneumatic fixtures and full operator safety enclosure."
  },
  {
    id: "proj-robotic-welding-fixture",
    title: "Robotic Welding Fixture with Quick-Clamp",
    category: "robotic",
    categoryLabel: "Robotic Automation",
    client: "Tier-1 Exhaust & Structural Manufacturer",
    application: "MIG / Spot Welding of Structural Members",
    image: "assets/images/robotic-welding-fixture.jpg",
    specs: [
      { label: "Clamping", value: "Pneumatic Swing Clamps" },
      { label: "Repeatability", value: "±0.03 mm" },
      { label: "Material", value: "Hardened Tool Steel (WPS / EN31)" },
      { label: "Sensors", value: "Magnetic Reed & Inductive Proximity" }
    ],
    features: [
      "Rigid ground baseplate engineered to withstand high thermal welding stresses",
      "Integrated copper shunts and spatter-resistant ceramic location pins",
      "Ergonomic dual push-button operator cycle initiate station",
      "Quick-change tooling modules for multi-variant welding flexibility"
    ],
    description: "High-precision robotic welding station with pneumatic toggle clamps and part-detection sensors, ensuring micron-level repeatability across high-volume automotive production runs."
  },
  {
    id: "proj-shark-fin-assembly",
    title: "Shark Fin Antenna Assembly Line",
    category: "assembly",
    categoryLabel: "Assembly Lines & SPMs",
    client: "Lumax Yokowo Technologies",
    application: "Automotive Connected Telematics & GPS Antennas",
    image: "assets/images/shark-fin-assembly-line.jpg",
    specs: [
      { label: "Stations", value: "4-Stage Semi-Automatic Conveyor" },
      { label: "Cycle Time", value: "18 sec / unit" },
      { label: "Vision Check", value: "PCB Seating & Gasket Inspection" },
      { label: "Traceability", value: "2D Barcode Auto Laser Scanner" }
    ],
    features: [
      "Multi-stage automated flow line for shark fin antenna electronics and covers",
      "Controlled electric torque screwdrivers with digital torque & angle monitoring",
      "Automated gasket presence check with high-resolution telecentric optical sensors",
      "Integrated pass/fail reject chute with automated locking mechanism"
    ],
    description: "Sophisticated 4-station assembly line for premium automotive shark fin telematics antennas. Guarantees 100% moisture-seal integrity and calibrated screw tightening torque."
  },
  {
    id: "proj-bumper-assembly-line",
    title: "Automotive Bumper Assembly & Punching Line",
    category: "assembly",
    categoryLabel: "Assembly Lines & SPMs",
    client: "Tier-1 Bumper Systems",
    application: "Front & Rear Bumper Fascia & Sensor Brackets",
    image: "assets/images/bumper-assembly-line.jpg",
    specs: [
      { label: "Component Size", value: "Up to 2,100 mm Bumper Width" },
      { label: "Actuation", value: "Hydro-Pneumatic Ultrasonic Punching" },
      { label: "Cycle Time", value: "35 sec complete cycle" },
      { label: "Poka-Yoke", value: "Color Sensor & Clip Presence Check" }
    ],
    features: [
      "Full-length contoured urethane nests preventing any surface scratching on painted bumpers",
      "Simultaneous ultrasonic punching of parking sensor apertures",
      "Automatic bracket clip installation with linear slide verification",
      "Safety light curtains spanning entire operator working envelope"
    ],
    description: "Turnkey automotive bumper assembly line designed for handling Class-A painted surfaces. Incorporates ultrasonic punching for radar/sonar sensor mounts and clip assembly."
  },
  {
    id: "proj-vision-garnish",
    title: "Garnish Vision Inspection Machine",
    category: "testing",
    categoryLabel: "Vision & Testing",
    client: "JRG Automotive Industries (Bawal)",
    application: "Exterior Trim & Garnish Appearance Inspection",
    image: "assets/images/vision-inspection-garnish.jpg",
    specs: [
      { label: "Camera Specs", value: "5.0 MP Industrial Smart Cameras" },
      { label: "Inspection Parameters", value: "Clip Presence, Color Shade, Warpage" },
      { label: "Cycle Time", value: "12 sec / part" },
      { label: "Interface", value: "Custom Industrial PC + Touch Display" }
    ],
    features: [
      "Multi-camera polarized dome lighting eliminating glare on glossy automotive trim",
      "Simultaneous checking of 14 child clips and adhesive backing tapes",
      "Immediate visual Pass (Green) / Fail (Red) overlay on touchscreen HMI",
      "Barcode linking: Serial number tagged with high-res photo in audit database"
    ],
    description: "In-line high-speed automated vision inspection station designed specifically for JRG Automotive to verify exterior garnish clips, color harmony, and child part orientation."
  },
  {
    id: "proj-t6-pipe-alt",
    title: "T-6 Pipe Air Leakage Test (ALT) Machine",
    category: "testing",
    categoryLabel: "Vision & Testing",
    client: "Hanon Automotive Systems (Gujarat)",
    application: "Automotive Air-Conditioning & Coolant Pipes",
    image: "assets/images/t6-pipe-alt-leak-machine.jpg",
    specs: [
      { label: "Test Medium", value: "Dry Compressed Air (6 - 10 Bar)" },
      { label: "Leak Sensitivity", value: "0.1 sccm (standard cubic cm/min)" },
      { label: "Seal Clamping", value: "Automatic Pneumatic Collet Expanding Plugs" },
      { label: "Transducer", value: "Furness Controls / ATEQ Leak Instrument" }
    ],
    features: [
      "Automated dual-port expanding sealing heads with polyurethane seals",
      "High-precision differential pressure decay testing methodology",
      "Digital graph display of stabilization, fill, and test decay curves",
      "Auto-dot punch marking on PASS parts; pneumatic lock on FAIL parts"
    ],
    description: "Engineered for Hanon Automotive Systems Gujarat, this specialized Air Leakage Testing (ALT) rig performs micro-leak detection on aluminum AC and engine cooling pipes."
  },
  {
    id: "proj-mahindra-w501-fixture",
    title: "Mahindra W501 Checking Fixture",
    category: "fixtures",
    categoryLabel: "Checking Fixtures & Gauges",
    client: "JRG Automotive / Mahindra Platform",
    application: "W501 Side Cover & Exterior Panels",
    image: "assets/images/mahindra-w501-checking-fixture.jpg",
    specs: [
      { label: "Material", value: "Aviation-grade Al-6061 Base + Tool Steel Wear Blocks" },
      { label: "Accuracy", value: "Datum blocks ±0.015 mm, Profile flush ±0.05 mm" },
      { label: "Inspection Type", value: "Flush & Gap Feeler Gauge + Dial Indicators" },
      { label: "Certification", value: "Full CMM Inspection Matrix Supplied" }
    ],
    features: [
      "Contoured NC-machined checking blocks replicating exact vehicle CAD geometry",
      "Quick-acting toggle clamps with rubberized contact cushions",
      "Hardened steel bushing inserts for slip gauge and pin gauge inspections",
      "Sturdy tubular steel base frame with vibration-damped leveling feet"
    ],
    description: "High-precision metrology checking fixture engineered for Mahindra's W501 platform side cover components. Validates dimensional tolerances, gap, and flushness before paint."
  },
  {
    id: "proj-y0m-louver-line",
    title: "Y0M Louver Side Vent Assembly Line & EOL",
    category: "assembly",
    categoryLabel: "Assembly Lines & SPMs",
    client: "Automotive Tier-1 Interior Systems",
    application: "Dashboard Air Vent & Louver Assemblies",
    image: "assets/images/y0m-louver-vent-line.jpg",
    specs: [
      { label: "Operations", value: "Vane Insertion, Link Rod Assembly, Haptic Torque Test" },
      { label: "Stations", value: "6 Progressive Automated Stations" },
      { label: "Cycle Time", value: "20 sec / finished assembly" },
      { label: "Quality Audit", value: "100% End-of-Line Haptic Flap Resistance" }
    ],
    features: [
      "Synchronous multi-station rotary indexing workstation",
      "Automated link-rod snap-fitting with acoustic insertion confirmation",
      "Smooth damping grease dispensing with micro-syringe volumetric pump",
      "Integrated End-of-Line (EOL) torque sensor measuring smooth vane rotation"
    ],
    description: "Complete turnkey assembly and end-of-line testing station for vehicle dashboard air vent louvers. Balances high production rates with tactile feel quality verification."
  },
  {
    id: "proj-panel-checker-w601",
    title: "W601 ACAC Tank Panel Checker Fixture",
    category: "fixtures",
    categoryLabel: "Checking Fixtures & Gauges",
    client: "Tier-1 Radiator & Cooler Manufacturer",
    application: "ACAC Radiator Tank & Core Panels",
    image: "assets/images/panel-checker-fixture.jpg",
    specs: [
      { label: "Profile Tolerance", value: "±0.02 mm Profile Tolerance" },
      { label: "Holding Method", value: "Pneumatic & Mechanical Hybrid Clamps" },
      { label: "Port Checks", value: "Go / No-Go Pin Inspection on all Hose Nozzles" },
      { label: "Anodizing", value: "Hard Anodized Black / Red Surface Finish" }
    ],
    features: [
      "High-precision 3D contoured CNC blocks matching injection-molded tank walls",
      "Direct measurement stations for hose coupling roundness and center-distance",
      "Integrated dial indicator brackets for quick deviation logging",
      "Robust protective aluminum transport handles and engraved datum labels"
    ],
    description: "Custom inspection gauge for the W601 automotive ACAC radiator header tank. Inspects plastic shrinkage, warpage, and port alignments directly on the molding line."
  },
  {
    id: "proj-dot-marking-machine",
    title: "Automated 2D Dot Peen Pin Marking Station",
    category: "marking",
    categoryLabel: "Marking & Safety",
    client: "Tier-1 Powertrain & Electrical Component Maker",
    application: "Direct Part Marking (DPM) & 2D DataMatrix Codes",
    image: "assets/images/dot-pin-marking-machine.jpg",
    specs: [
      { label: "Marking Area", value: "100 mm x 100 mm" },
      { label: "Pin Material", value: "Tungsten Carbide Stylus (HRC 92)" },
      { label: "Marking Depth", value: "0.1 mm - 0.8 mm Adjustable" },
      { label: "Connectivity", value: "Ethernet TCP/IP, RS232, PLC I/O" }
    ],
    features: [
      "High-speed pneumatic pin marking capable of 5 characters/second",
      "Integrated 2D DataMatrix code verifier checking ISO 15415 grade compliance",
      "Automatic serial number incrementing and Julian date coding",
      "Heavy cast iron column with motorized Z-axis height adjustment"
    ],
    description: "Robust industrial dot peen marking system engineered for rugged shop-floor component traceability. Capable of marking hardened metals, alloys, and dense engineering plastics."
  },
  {
    id: "proj-lock-torque-tester",
    title: "Lock-to-Lock Dynamic Torque Testing Rig",
    category: "testing",
    categoryLabel: "Vision & Testing",
    client: "Tier-1 Steering & Control Column Manufacturer",
    application: "Steering Lock & Rotary Switches",
    image: "assets/images/lock-to-lock-torque-tester.jpg",
    specs: [
      { label: "Torque Range", value: "0.01 Nm – 25.0 Nm" },
      { label: "Angle Encoder", value: "0.05° Resolution Rotary Optical Encoder" },
      { label: "Motor Drive", value: "Precision Servo Drive with Gearbox" },
      { label: "Software", value: "LabVIEW Real-Time Curve Analyzer" }
    ],
    features: [
      "Continuous rotational torque curve profiling across 360° travel",
      "Detection of detent peaks, valley transitions, and sudden mechanical binding",
      "Automatic pass/fail calculation against upper and lower envelope limits",
      "Comprehensive PDF test certificates automatically archived for every serialized part"
    ],
    description: "Automated precision torque testing machine designed to measure switch rotational resistance and detent tactile response for steering locks and console dials."
  },
  {
    id: "proj-cac-deflector-line",
    title: "CAC Deflector Assembly & Riveting Line",
    category: "assembly",
    categoryLabel: "Assembly Lines & SPMs",
    client: "Automotive Thermal & Under-Hood Systems",
    application: "Charge Air Cooler (CAC) Air Deflectors",
    image: "assets/images/cac-deflector-assembly.jpg",
    specs: [
      { label: "Process", value: "Bracket Riveting, Ultrasonic Weld & Clip Insertion" },
      { label: "Cycle Time", value: "24 sec" },
      { label: "Clamping", value: "Sequential Multi-Point Pneumatic Cylinders" },
      { label: "Sensors", value: "Part Presence Fiber-Optic Array" }
    ],
    features: [
      "Automatic rivet feed and pneumatic orbital riveting head",
      "Integrated hot-insert thermal rivet stake fixture with PID temperature control",
      "100% poke-yoke child bracket orientation verification",
      "Heavy welded steel structure with vibration isolation pads"
    ],
    description: "Turnkey automated assembly cell designed for assembling charge air cooler deflectors. Combines orbital riveting, thermal staking, and clip seating in one streamlined station."
  },
  {
    id: "proj-fuel-filler-line",
    title: "Fuel Filler Neck Assembly Line",
    category: "assembly",
    categoryLabel: "Assembly Lines & SPMs",
    client: "Automotive Fuel & Fluid Systems",
    application: "Fuel Filler Pipe Flange & Cap Sub-Assemblies",
    image: "assets/images/fuel-filler-assembly-line.jpg",
    specs: [
      { label: "Operations", value: "O-Ring Insertion, Cap Torque Tightening, ALT Test" },
      { label: "Stations", value: "5 Station Rotary Dial Machine" },
      { label: "Seal Inspection", value: "Laser Displacement Sensor for O-Ring Position" },
      { label: "Output", value: "140 parts / hour" }
    ],
    features: [
      "Automatic O-ring stretch and seating mechanism with zero twist guarantee",
      "Servo-driven cap tightening with programmable angle and torque cutoff",
      "Integrated leak testing station testing seal integrity before ejection",
      "Laser engraved QR code linking test parameters with VIN records"
    ],
    description: "High-speed multi-station rotary dial assembly system for fuel filler assemblies, meeting stringent emission regulations and zero-leakage automotive standards."
  },
  {
    id: "proj-safety-guards",
    title: "Industrial Safety Guards & Machine Enclosures",
    category: "marking",
    categoryLabel: "Marking & Safety",
    client: "Packaging & Automotive OEMs",
    application: "Wrapping Machines, Presses & Robotic Enclosures",
    image: "assets/images/safety-guards-structure.jpg",
    specs: [
      { label: "Structure", value: "Extruded Anodized Aluminum 40x40 / 80x80 Profiles" },
      { label: "Infill", value: "Safety Yellow Powder-Coated Steel Wire Mesh / Polycarbonate" },
      { label: "Interlocks", value: "Euchner / Schmersal RFID Safety Switches" },
      { label: "Standards", value: "ISO 14120 / OSHA Compliant Design" }
    ],
    features: [
      "Modular quick-assembly frame architecture allowing easy plant relocation",
      "Ergonomic sliding and hinged service doors with fail-safe interlocks",
      "Integrated cable management conduits and maintenance service lockouts",
      "Clear impact-resistant polycarbonate vision panels for operational monitoring"
    ],
    description: "Custom engineered plant safety enclosures and structural perimeters for packaging machines, robotic islands, and heavy stamping equipment."
  },
  {
    id: "proj-yp8-cross-member",
    title: "YP8 Cross Member Assembly Inspection Gauge",
    category: "fixtures",
    categoryLabel: "Checking Fixtures & Gauges",
    client: "Chassis & Suspension Tier-1",
    application: "YP8 Vehicle Chassis Structural Member",
    image: "assets/images/yp8-cross-member-gauge.jpg",
    specs: [
      { label: "Base Size", value: "1,800 mm x 900 mm Surface Plate" },
      { label: "Hole Center Check", value: "±0.05 mm True Position Gauging" },
      { label: "Clamping", value: "Air-assisted toggle clamps" },
      { label: "Certification", value: "Third-party NABL accredited CMM audit" }
    ],
    features: [
      "Simultaneous inspection of 18 hole positions and mounting weld nuts",
      "Spring-loaded checking pins with color-coded Go / No-Go collars",
      "Heavy cast-iron ribbed base eliminating deflection during loading",
      "Four heavy-duty swivel casters with foot-operated leveling jacks"
    ],
    description: "Rigid shop-floor checking gauge designed for chassis cross members, verifying weld integrity, hole true position, and planar flatness."
  },
  {
    id: "proj-lever-assembly",
    title: "YG8 & Y9T Gear Shift Lever Assembly Line",
    category: "assembly",
    categoryLabel: "Assembly Lines & SPMs",
    client: "Lumax Mannoh Allied Technologies",
    application: "Manual & Automatic Gear Shift Levers",
    image: "assets/images/lever-assembly-line.jpg",
    specs: [
      { label: "Operations", value: "Bushing Press, Pin Insertion, Grease Dosing, Shift Feel" },
      { label: "Cycle Time", value: "22 sec" },
      { label: "Press Force", value: "2.5 Ton Servo-Electric Press with Load Cell" },
      { label: "Sensors", value: "LVDT Stroke Verification & Load Monitoring" }
    ],
    features: [
      "Servo press with force-vs-displacement signature analysis for every bushing press",
      "Automated grease dosing nozzle with positive displacement piston pump",
      "Shift gate profile check testing engagement forces in all gears",
      "Automatic reject segregation with locked scrap storage box"
    ],
    description: "Turnkey multi-station assembly line built for Lumax Mannoh, dedicated to assembling gear shift lever mechanisms with real-time force-distance curve monitoring."
  },
  {
    id: "proj-robotic-fixture-dual",
    title: "Dual Station Robotic MIG Welding Station",
    category: "robotic",
    categoryLabel: "Robotic Automation",
    client: "Tier-1 Exhaust & Structural Systems",
    application: "Automotive Suspension Arms & Subframes",
    image: "assets/images/robotic-fixture-dual.jpg",
    specs: [
      { label: "Configuration", value: "Dual Turntable 180° Indexer" },
      { label: "Clamp Method", value: "Pneumatic Swing & Link Clamps" },
      { label: "Welding Process", value: "Robotic Tandem MIG/MAG" },
      { label: "Safety System", value: "Zone Light Curtains + Arc Flash Shield" }
    ],
    features: [
      "180-degree pneumatic indexer allowing simultaneous operator loading and robot welding",
      "Heavy-duty copper backing blocks providing maximum heat dissipation",
      "Quick-change locator nests facilitating multi-model chassis variant runs",
      "Integrated pneumatic torch cleaner and wire cutter station"
    ],
    description: "Dual-station robotic welding turntable fixture engineered for high-volume automotive subframe fabrication with zero downtime during operator loading cycles."
  },
  {
    id: "proj-robotic-cell-line",
    title: "Synchronized Multi-Robot Assembly Cell",
    category: "robotic",
    categoryLabel: "Robotic Automation",
    client: "Tier-1 Auto Body Systems",
    application: "Sheet Metal BIW Component Hemming & Spot Welding",
    image: "assets/images/robotic-cell-line.jpg",
    specs: [
      { label: "Robots", value: "Dual Fanuc / ABB 6-Axis Articulated" },
      { label: "Cycle Time", value: "32 sec complete cycle" },
      { label: "Interlocks", value: "Euchner RFID Safety Door Switches" },
      { label: "PLC Network", value: "Profinet / Ethernet IP Industrial Bus" }
    ],
    features: [
      "Fully interlocked cell with perimeter safety fence and anti-glare viewing windows",
      "Integrated pneumatic part ejector with motorized takeaway conveyor",
      "Automatic tooling identification via RFID tags preventing wrong recipe execution",
      "Touchscreen HMI with complete diagnostic alarm telemetry and cycle logging"
    ],
    description: "Multi-robot turnkey production cell engineered for synchronized spot welding and material handling, adhering strictly to global automotive safety and OEE metrics."
  },
  {
    id: "proj-plasma-automation",
    title: "Atmospheric Plasma Surface Activation System",
    category: "assembly",
    categoryLabel: "Assembly Lines & SPMs",
    client: "Automotive Lighting & Glazing Tier-1",
    application: "Headlamp Lens & Polypropylene Bonding Channels",
    image: "assets/images/plasma-automation-system.jpg",
    specs: [
      { label: "Surface Energy", value: "Up to >72 dynes/cm activation" },
      { label: "Nozzle Axis", value: "3-Axis CNC Controlled Cartesian Gantry" },
      { label: "Speed", value: "Programmable up to 250 mm/sec" },
      { label: "Gas Feed", value: "Clean Dry Compressed Air @ 6 Bar" }
    ],
    features: [
      "Precision 3-axis motion path tracking complex 3D contour bonding grooves",
      "Arc-loss sensor instantly flagging any plasma flame failure",
      "Integrated fume extraction cowl ensuring a healthy operator working environment",
      "Poka-yoke barcode verification confirming correct lens variant before firing"
    ],
    description: "Automated atmospheric plasma jet treatment machine engineered to activate polymer surfaces, ensuring flawless adhesive bonding for automotive headlamps and exterior trim."
  },
  {
    id: "proj-yfg-assembly",
    title: "YFG Multi-Station Automated Assembly Line",
    category: "assembly",
    categoryLabel: "Assembly Lines & SPMs",
    client: "Lumax Auto Technologies",
    application: "Automotive Interior Console Assemblies",
    image: "assets/images/yfg-assembly-line.jpg",
    specs: [
      { label: "Stations", value: "5 Inline Conveyor Workstations" },
      { label: "Cycle Time", value: "22 sec / part" },
      { label: "Screwdriving", value: "Automatic Screwfeeder + Torque Transducer" },
      { label: "Traceability", value: "Laser QR Marking Station" }
    ],
    features: [
      "Palletized conveyor loop with pneumatic stop-and-lift workstation locating",
      "High-speed automatic screw feed with torque and angle monitoring",
      "Optical color sensor confirming correct wiring harness clip placement",
      "Automated reject segregation gate preventing non-conforming parts from exiting"
    ],
    description: "Comprehensive 5-station palletized flow line manufactured for Lumax Auto Technologies, handling multi-component console assembly with 100% torque audit."
  },
  {
    id: "proj-hair-dryer-tester",
    title: "Endurance & Electrical Safety Testing Rig",
    category: "testing",
    categoryLabel: "Vision & Testing",
    client: "Consumer Electronics & Appliance Leader",
    application: "Handle Switch & Heating Element Testing",
    image: "assets/images/hair-dryer-testing-machine.jpg",
    specs: [
      { label: "Voltage Test", value: "High Voltage (Flash) Test up to 3.0 kV" },
      { label: "Current Range", value: "0 - 16A Real-Time Amperage Sensing" },
      { label: "Mechanical Cycle", value: "10,000 Switch Cycles Automated Actuator" },
      { label: "Data Logging", value: "LabVIEW Database Auto-CSV Export" }
    ],
    features: [
      "Multi-station pneumatic finger actuators simulating human switch toggling",
      "Simultaneous electrical continuity, insulation resistance, and power draw verification",
      "Infrared thermal sensor measuring maximum handle surface temperature rise",
      "Digital batch pass/fail counter with audible buzzer and strobe light"
    ],
    description: "Rigorous electrical and mechanical durability test bench designed to validate ergonomic switch endurance, high voltage isolation, and thermal safety."
  },
  {
    id: "proj-oil-pan-leak",
    title: "Oil Pan Casting Differential Pressure Leak Tester",
    category: "testing",
    categoryLabel: "Vision & Testing",
    client: "Powertrain Engine Systems Tier-1",
    application: "Cast Aluminum Engine Oil Sump & Pans",
    image: "assets/images/oil-pen-leak-test-machine.jpg",
    specs: [
      { label: "Test Pressure", value: "0.5 – 3.0 Bar Clean Regulated Air" },
      { label: "Leak Resolution", value: "1 Pa (Pascal) Differential Decay" },
      { label: "Seal Head", value: "Custom Molded Nitrile Perimeter Gasket" },
      { label: "Test Time", value: "18 sec (Fill, Stabilize, Measure, Vent)" }
    ],
    features: [
      "Hydraulic downward clamping ram ensuring uniform seal compression across casting flange",
      "High-accuracy differential pressure decay sensor detecting sub-millimeter porosity voids",
      "Laser displacement sensor measuring mounting flange flatness under test",
      "Pass part automated micro-dot impact punch engraving verification"
    ],
    description: "Heavy-duty differential air leakage test machine tailored for aluminum engine oil pan castings, ensuring 100% porosity-free seal verification prior to engine assembly."
  },
  {
    id: "proj-bearing-press",
    title: "Automatic Bearing ID Gauge & Bush Press SPM",
    category: "testing",
    categoryLabel: "Vision & Testing",
    client: "NTN NEI Manufacturing India",
    application: "Transmission Bearings & Suspension Bushes",
    image: "assets/images/bearing-id-measuring-machine.jpg",
    specs: [
      { label: "Measurement", value: "Air-Electronic Bore Gauge (±0.001 mm)" },
      { label: "Press Capacity", value: "5.0 Ton Hydraulic Precision Cylinder" },
      { label: "Depth Control", value: "Digital Linear Optical Scale (0.005 mm)" },
      { label: "Output", value: "120 units / hour" }
    ],
    features: [
      "Integrated pneumatic bore gauge inspecting inner diameter before pressing",
      "Force-distance monitoring preventing damaged bearing races during insertion",
      "Automatic sorting chute: segregates undersized, conforming, and oversized rings",
      "Hardened steel guide columns and replaceable wear bushings"
    ],
    description: "High-precision automated workstation engineered for NTN NEI Manufacturing. Gauges inner diameters down to 1 micron and presses bushes with real-time force curve monitoring."
  },
  {
    id: "proj-axel-od-gauge",
    title: "Axle Shaft OD Precision Measuring Gauge",
    category: "fixtures",
    categoryLabel: "Checking Fixtures & Gauges",
    client: "Driveline & Axle OEM Supplier",
    application: "Automotive Drive Axles & Propeller Shafts",
    image: "assets/images/axel-od-measuring-gauge.jpg",
    specs: [
      { label: "Gauge Type", value: "Multi-Point Digital Dial Indicator Bench" },
      { label: "Accuracy", value: "±0.002 mm Repeatability" },
      { label: "Shaft Length", value: "Accommodates up to 1,200 mm Axles" },
      { label: "V-Blocks", value: "Carbide Tipped Precision 90° Centers" }
    ],
    features: [
      "Carbide-tipped V-blocks and spring-loaded dead centers supporting heavy shafts",
      "Simultaneous measurement of 6 critical bearing journal diameters and runout",
      "Digital electronic indicators connected to multiplexer for instant PC SPC logging",
      "Quick lever lift mechanism for rapid, effortless part loading"
    ],
    description: "Multi-channel shop-floor inspection bench for automotive drive axles. Measures outer diameters, ovality, and total indicated runout (TIR) in seconds."
  },
  {
    id: "proj-hanon-receiving-gauge",
    title: "Hanon Outlet Pipe Receiving Gauge",
    category: "fixtures",
    categoryLabel: "Checking Fixtures & Gauges",
    client: "Hanon Climate Systems (Bhiwadi)",
    application: "Automotive HVAC Aluminum Coolant Outlet Pipes",
    image: "assets/images/hanon-receiving-gauge.jpg",
    specs: [
      { label: "Profile Clearance", value: "3.0 mm Nominal Envelope Feeler Check" },
      { label: "End Forms", value: "Go / No-Go Bead Diameter Collars" },
      { label: "Bracket Check", value: "Flushness & Hole Pitch Tolerance ±0.1 mm" },
      { label: "Baseplate", value: "Anodized Tooling Aluminum with Steel Dowels" }
    ],
    features: [
      "CNC precision-milled contour blocks following multi-bend 3D aluminum pipe routing",
      "Hardened steel locator pins for mounting bracket hole centers and orientations",
      "Quick-clamp toggle clamps maintaining pipe datum points during inspection",
      "Color-coded tolerance rails for rapid operator visual pass/fail validation"
    ],
    description: "Specialized dimensional receiving inspection gauge engineered for Hanon Climate Systems. Verifies intricate multi-bend AC outlet pipes and welded mounting brackets."
  },
  {
    id: "proj-inlet-radiator-fixture",
    title: "Inlet Radiator Tank Checking Fixture",
    category: "fixtures",
    categoryLabel: "Checking Fixtures & Gauges",
    client: "Engine Cooling Systems Tier-1",
    application: "Automotive Plastic Radiator End Tanks",
    image: "assets/images/inlet-radiator-tank-fixture.jpg",
    specs: [
      { label: "Material", value: "Aviation 7075-T6 Aluminum + C1213 Steel Pins" },
      { label: "Tolerances", value: "Profile ±0.03 mm, Hose Port True Position ±0.05 mm" },
      { label: "Clamping", value: "Manual Destaco Toggle Clamps with Rubber Tips" },
      { label: "Certification", value: "NABL Accredited CMM Calibration Certificate" }
    ],
    features: [
      "Full 3D profile matching complex molded polymer radiator header tanks",
      "Inspects core crimp rail width, flatness, and hose connector roundness",
      "Integrated dial indicator slide rests for checking critical seal bead height",
      "Lightweight ergonomic construction with durable lifting handles"
    ],
    description: "Micron-accurate checking fixture for injection-molded automotive radiator header tanks, catching molding shrinkage and warping before crimping onto aluminum cores."
  },
  {
    id: "proj-wire-frame-gauge",
    title: "Y0M & YXA Wire Frame Inspection Gauge",
    category: "fixtures",
    categoryLabel: "Checking Fixtures & Gauges",
    client: "Automotive Seating & Wire Harness Tier-1",
    application: "Seat Cushion Frames & Structural Wire Forms",
    image: "assets/images/wire-frame-gauge.jpg",
    specs: [
      { label: "Gauge Style", value: "Profile Nest with Spring-Loaded Snap Blocks" },
      { label: "Wire Diameter", value: "Ø 2.5 mm – Ø 8.0 mm High-Tensile Steel Wire" },
      { label: "Profile Gap", value: "1.5 mm Step Block Feeler Gap" },
      { label: "Datum Scheme", value: "3-2-1 Hardened Datum Pins" }
    ],
    features: [
      "CNC milled continuous contour groove replicating exact formed wire 3D path",
      "Drop-in checking bars verifying overall frame symmetry and bracket angles",
      "Hardened datum rest buttons resisting abrasive wear from formed spring steel",
      "Engraved CAD coordinate datum points for effortless periodic CMM re-qualification"
    ],
    description: "High-precision form and contour checking fixture for automotive seat wire frames and structural rod sub-assemblies, ensuring zero distortion during seat foam molding."
  }
];

// Helper functions for data queries
const DataService = {
  getAllProjects: () => MACHINE_PROJECTS,
  getProjectsByCategory: (cat) => cat === 'all' ? MACHINE_PROJECTS : MACHINE_PROJECTS.filter(p => p.category === cat),
  getProjectById: (id) => MACHINE_PROJECTS.find(p => p.id === id),
  getServices: () => CORE_SERVICES,
  getMachinery: () => TOOLROOM_MACHINERY,
  getClients: () => CLIENTS,
  getCompanyInfo: () => COMPANY_INFO
};
