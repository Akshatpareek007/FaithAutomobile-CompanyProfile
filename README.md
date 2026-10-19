# Faith Automation Works - Official MVP Static Website

An enterprise-grade, high-performance static website MVP for **Faith Automation Works** (Gurgaon, Haryana), engineered directly from the company's 58-page official engineering profile.

Built with **HTML5**, **Vanilla CSS3**, and **Modern JavaScript (ES6+)** with zero external runtime frameworks, delivering blazing-fast page loads and a sleek industrial cyber-precision aesthetic.

---

## 🏭 Company Overview

* **Company Name:** Faith Automation Works
* **Established:** June 2015
* **Managing Director:** Mr. Kaushal K. Khandelwal (10+ Years in Automotive Components Engineering & Mechanical Design)
* **Plant & Tool Room Location:** Plot no. 711B, Ground Floor, Pace City II, Sector-37, Gurgaon – 122001 (Haryana), India
* **Contact Phones:** +91 9990813151, +91 9456258802, +91 9012248578
* **Email:** kaushalkhandelwal@faithautomation.co.in | info@faithautomation.co.in
* **Core Focus:** Turnkey Special Purpose Machines (SPMs), 6-Axis Robotic Welding Cells, Air & Hydro Leak Testing Machines (ALT/WLT), Vision Inspection Rigs, and Precision Automotive Checking Fixtures.

---

## 🌟 Key Features of the Website

### 1. Authentic Branding & Visual Design System
* **Deep Obsidian & Slate Background** with custom technical CAD blueprint grid patterns.
* **Electric Cyan (`#00E5FF`) & Brand Crimson (`#E11D48`) Accent Palette**, extracted directly from Faith Automation’s official logo badge.
* **Modern Engineered Typography** using Google Fonts (`Outfit`, `Inter`, `JetBrains Mono`).
* **Dark / Light Mode Toggle** with persistence via `localStorage`.

### 2. High-Resolution Machine & Project Showcase
* **Real Production Assets:** 30+ actual machine photographs extracted from the 58-page company presentation, depicting working installations at automotive OEM facilities.
* **Live Interactive Filter Tabs** with real-time project count badges:
  * Robotic Automation & Welding Cells
  * High-Speed Assembly Lines & SPMs
  * Vision & Differential Leak Testing Rigs
  * Micron-Tolerance Checking Fixtures & Gauges
  * Marking, Traceability & Plant Safety Guarding
* **Instant Client & Machine Search Bar:** Filter projects by vehicle model (e.g. *W501*, *YHB*, *Y0M*), client (*Hanon*, *Lumax*, *JRG*), or process (*Torque*, *Leak Test*, *Plasma*).
* **Technical Specification Modal:** Click any machine card to open a full modal containing CAD tolerances, cycle time metrics, poka-yoke error-proofing details, and an instant RFQ prefill trigger.

### 3. Comprehensive 9-Division Engineering Capabilities
Covers all core capabilities specified in the company profile (Page 5):
1. **Turnkey Assembly Lines & SPMs** (Carousel conveyors, rotary indexers, screwfeeders)
2. **Robotic Automation** (6-Axis robotic cells, MIG/Spot welding fixtures, gantry units)
3. **Vision & AI Optical Inspection** (Color detection, child parts presence, 360° angle checking)
4. **EOL Testing & Leak Rigs** (ALT differential decay, WLT water test, HLT hydro test, torque testers)
5. **Precision Checking Fixtures & Gauges** (Mahindra W501, panel checkers, wire frame gauges)
6. **Marking & Traceability** (Laser engraving, 2D QR DataMatrix, pneumatic dot peen)
7. **Special Purpose Presses & Forming** (Hydro-pneumatic cutting, ultrasonic plastic welding, bush pressing)
8. **Plant Safety Guarding** (Modular aluminum fencing, light barriers, RFID interlocks)
9. **Industry 4.0 & Traceability** (MES iTAC, LabVIEW DAQ, SCADA telemetry, .NET HMI)

### 4. Interactive Turnkey Solution RFQ & Lead-Time Calculator
Prospective Tier-1 clients can dynamically configure their project scope:
* Select automation type (Assembly, Robotics, Vision/Leak Testing, Checking Fixture)
* Adjust number of workstations/cavities via interactive slider
* Choose control level (Semi-Automatic, Rotary Indexing, Fully Robotic)
* Choose traceability requirements (Barcode, 2D Laser, MES iTAC)
* Instantly calculates **Estimated Lead Time**, **Complexity Index**, and **Budgetary Tier**, with a single-click button to apply the configuration into the official contact form.

### 5. In-House Tool Room Infrastructure
Detailed inventory of plant machinery (Page 53):
* **VMC (Vertical Machining Center):** Manford Make (700 mm x 500 mm travel)
* **M1TR with DRO:** 450 mm x 1050 mm Bed (2 Units)
* **Surface Grinders:** 12" x 24" Magnetic Chuck (2 Units)
* **Heavy Lathe:** 6 Feet Bed Length
* **Radial / Pillar Drills:** 5 mm to 30 mm Capacity (3 Units)
* **Cylindrical Grinder (CG):** 1000 mm x 300 mm Swing
* **Uninterrupted Power Backup:** 20 KVA Kirloskar Diesel Generator (24/7 continuous operation)

### 6. Tier-1 Esteemed Clients & Marquee
Showcases partnerships with 25+ industry giants (Pages 55-56):
* *Hero Motors (HMC)*
* *Hanon Automotive Systems (Gujarat & Bhiwadi)*
* *Lumax Group (Lumax Auto Technologies, Lumax Mannoh, Lumax FAE, Lumax Yokowo)*
* *BorgWarner Emissions Systems*
* *JRG Automotive Industries (All Plants)*
* *Kumi Supreme India*
* *Munjal Showa Limited*
* *PPAP Automotive Ltd.*
* *NTN NEI Manufacturing India*
* *Reckitt Benckiser India*
* *Radiant Polymers, Takahata Precision, Sogefi Engine Systems, and more.*

### 7. Direct Factory Communication Channels
* Direct telephone dial links to Director & Works
* Direct official email links
* Google Maps route integration for Pace City II, Sector-37, Gurgaon
* **Direct WhatsApp Integration:** Generates pre-populated technical inquiry text directly to the Director's WhatsApp (+91 9990813151).

---

## 📁 Repository Structure

```
d:/PROJECTS/Faith Automobile/
│
├── index.html                          # Semantic HTML5 single-page application
├── css/
│   └── styles.css                      # Custom Vanilla CSS design system
├── js/
│   ├── data.js                         # Synthesized data model (projects, specs, clients)
│   └── app.js                          # Interactive logic (filtering, modal, calculator, theme)
├── assets/
│   ├── images/                         # 31 curated high-resolution production photos & logo
│   └── extracted/                      # Raw image extractions from company profile PDF
├── FAITH AUTOMATION - Company Profile.pdf # Source company documentation (58 pages)
└── README.md                           # Documentation & architecture overview
```

---

## 🚀 How to Run Locally

Because the project uses standard Vanilla Web technologies, you can preview it immediately using any local web server:

### Option 1: Python HTTP Server (Recommended)
```bash
# Navigate to the workspace directory
cd "d:/PROJECTS/Faith Automobile"

# Start the local server
python -m http.server 8080
```
Then open your browser at:
`http://localhost:8080/index.html`

### Option 2: Node.js (npx serve or live-server)
```bash
npx serve .
```

### Option 3: Direct File
You can also open `index.html` directly in any modern web browser (Chrome, Edge, Firefox, Safari).

---

## 🔒 SEO & Performance
* Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* Single `<h1>` per page with hierarchical heading structure.
* Meta tags for search engines, OpenGraph previews, and responsive viewport.
* Pure Vanilla CSS with hardware-accelerated animations and zero heavy third-party runtime bundles.
