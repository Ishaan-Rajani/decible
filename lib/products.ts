export type Condition = "Ex-demo" | "Ex-rental" | "Open box" | "Refurbished";

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: string;
  retailPrice: number; // INR
  price: number; // INR
  condition: Condition;
  stock: "In stock" | "Reserved" | "Sold";
  image: string;
  gallery: string[];
  blurb: string;
  specs: [string, string][];
  featured?: boolean;
}

export const CATEGORIES = [
  "Featured",
  "Line Arrays",
  "Subwoofers",
  "Powered Speakers",
  "Amplifiers",
  "Mixers",
  "DJ Controllers",
  "Lighting",
  "Microphones",
  "Monitors",
  "Trussing",
  "Full Rigs",
] as const;

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

// Pro-audio photography — each ID visually verified to match the gear it represents
const PHOTOS = {
  lineArray: img("photo-1763420953483-86239ad9c206"), // flown line array, hung from ceiling
  lineArray2: img("photo-1563680401337-b77b5e0be9f7"), // line array boxes rigged over a stage
  speakerStack: img("photo-1561314105-e6ac04c2984a"), // PA cabinets stacked stage-side
  speakerClose: img("photo-1643067215158-debf59cb504c"), // single subwoofer cabinet, bright room
  subwoofer: img("photo-1762941742966-bf391d0ccd03"), // twin-driver bass cabinet, close
  concert: img("photo-1599474857723-b166d634dcb3"), // tower speakers on white
  concert2: img("photo-1599474857723-b166d634dcb3"), // tower speakers on white
  djBooth: img("photo-1572327918400-f1932eded229"), // CDJ media players + mixer
  djMixer: img("photo-1466428996289-fb355538da1b"), // analogue mixer faders, close
  turntable: img("photo-1541296481353-b1eb3a4e0309"), // hands cueing vinyl on a deck
  controller: img("photo-1618107095181-e3ba0f53ee59"), // 4-deck DJ controller on a stand
  mixerDesk: img("photo-1509310202330-aec5af561c6b"), // digital console, channel meters lit
  console: img("photo-1642607003347-7b42fb85b2d5"), // amp rack in a flight case, patched
  amps: img("photo-1573339887874-de759041d685"), // touring amp racks backstage
  lighting: img("photo-1690074430713-8d2516e65a63"), // fixtures hung on a lighting bar
  lighting2: img("photo-1677497533660-adca109c2f71"), // moving heads on truss, beams out
  mic: img("photo-1527261834078-9b37d35a4a32"), // single handheld mic on a stand
  mic2: img("photo-1563726351554-179049599895"), // multiple mic stands rigged
  monitor: img("photo-1596457941236-c0611cc87551"), // two-way monitor on white
  truss: img("photo-1781459359076-a1e563cbc7b2"), // box truss sticks with rigging chain
  stage: img("photo-1742473533398-9aa25d09f327"), // full speaker stack outdoors
  festival: img("photo-1561314105-e6ac04c2984a"), // PA cabinets stacked stage-side
  crowd: img("photo-1742473533398-9aa25d09f327"), // full speaker stack outdoors
  // Bright, minimal, achromatic product still — harmonises with the cream canvas
  hero: img("photo-1546435770-a3e426bf472b", 1800),
} as const;

const L = (n: number) => n * 100000; // lakh to INR

export const PRODUCTS: Product[] = [
  {
    slug: "vertec-12-line-array",
    name: 'VerTec 12" Line Array System (8-box)',
    brand: "JBL Professional",
    category: "Line Arrays",
    retailPrice: L(14),
    price: L(4.5),
    condition: "Ex-rental",
    stock: "In stock",
    image: PHOTOS.lineArray,
    gallery: [PHOTOS.lineArray, PHOTOS.concert, PHOTOS.stage],
    blurb:
      'Eight-box dual 12" line array with flybars and transport dollies. One owner, tour-used for two seasons, fully serviced with drivers tested and matched.',
    specs: [
      ["Configuration", '8 × dual-12" three-way boxes'],
      ["Coverage", "110° horizontal"],
      ["Peak SPL", "141 dB per box"],
      ["Includes", "2 flybars, 2 dollies, rigging pins"],
      ["Serviced", "Full driver test, June 2026"],
    ],
    featured: true,
  },
  {
    slug: "kva-active-line-array-6",
    name: "KVA Active Line Array (6-box) with Flight Cases",
    brand: "RCF",
    category: "Line Arrays",
    retailPrice: L(9),
    price: L(3.2),
    condition: "Ex-demo",
    stock: "In stock",
    image: PHOTOS.lineArray2,
    gallery: [PHOTOS.lineArray2, PHOTOS.festival, PHOTOS.stage],
    blurb:
      "Six active two-way array modules used only for showroom demos. Onboard DSP, presets intact, under 120 hours logged. Flight cases included.",
    specs: [
      ["Configuration", "6 × active two-way modules"],
      ["Amplification", "Onboard Class-D, 1400 W each"],
      ["DSP", "Factory presets + custom bank"],
      ["Hours logged", "~120"],
      ["Includes", "3 flight cases, power distro"],
    ],
    featured: true,
  },
  {
    slug: "dual-18-bandpass-sub-pair",
    name: 'Dual 18" Bandpass Subwoofer (Pair)',
    brand: "Electro-Voice",
    category: "Subwoofers",
    retailPrice: L(5.5),
    price: L(1.9),
    condition: "Ex-rental",
    stock: "In stock",
    image: PHOTOS.subwoofer,
    gallery: [PHOTOS.subwoofer, PHOTOS.speakerStack, PHOTOS.concert2],
    blurb:
      "Pair of dual-18 bandpass subs with fresh recone on all four drivers. Cabinets scuffed from road use, acoustically perfect.",
    specs: [
      ["Drivers", '2 × 18" per cabinet, reconed'],
      ["Power handling", "2000 W RMS per cabinet"],
      ["Frequency response", "32–120 Hz"],
      ["Enclosure", "Bandpass, ply, tour paint"],
      ["Includes", "Casters, speakon leads"],
    ],
    featured: true,
  },
  {
    slug: "21-inch-infra-sub",
    name: '21" Infra Subwoofer',
    brand: "Funktion-One",
    category: "Subwoofers",
    retailPrice: L(4),
    price: L(1.5),
    condition: "Open box",
    stock: "Reserved",
    image: PHOTOS.speakerClose,
    gallery: [PHOTOS.speakerClose, PHOTOS.subwoofer],
    blurb:
      "Single 21-inch infra sub, carton opened for inspection only. Never installed, never gigged. Full paperwork.",
    specs: [
      ["Driver", '1 × 21" long-excursion'],
      ["Power handling", "1600 W RMS"],
      ["Frequency response", "25–90 Hz"],
      ["Condition", "Unused, opened carton"],
    ],
  },
  {
    slug: "15-powered-tops-pair",
    name: '15" Powered Tops (Pair)',
    brand: "QSC",
    category: "Powered Speakers",
    retailPrice: L(2.6),
    price: L(1.1),
    condition: "Ex-demo",
    stock: "In stock",
    image: PHOTOS.speakerStack,
    gallery: [PHOTOS.speakerStack, PHOTOS.concert],
    blurb:
      "Pair of 15-inch two-way powered tops from our demo floor. Light rack rash on grilles, drivers flawless. Covers and pole mounts included.",
    specs: [
      ["Configuration", '15" LF + 1.4" HF'],
      ["Amplification", "2000 W peak Class-D"],
      ["Max SPL", "132 dB"],
      ["Includes", "Padded covers, pole mounts"],
    ],
    featured: true,
  },
  {
    slug: "12-coaxial-stage-monitors",
    name: '12" Coaxial Stage Monitors (Set of 4)',
    brand: "L-Acoustics",
    category: "Monitors",
    retailPrice: L(6),
    price: L(2.2),
    condition: "Ex-rental",
    stock: "In stock",
    image: PHOTOS.monitor,
    gallery: [PHOTOS.monitor, PHOTOS.stage],
    blurb:
      "Four coaxial wedges from a disbanded rental inventory. Uniform serials, matched output, new grille foam throughout.",
    specs: [
      ["Configuration", '12" coaxial wedge'],
      ["Power handling", "500 W RMS"],
      ["Dispersion", "90° conical"],
      ["Quantity", "4, sequential serials"],
    ],
  },
  {
    slug: "4ch-touring-amplifier",
    name: "4-Channel Touring Amplifier, 20 kW",
    brand: "Lab.gruppen",
    category: "Amplifiers",
    retailPrice: L(4.8),
    price: L(1.8),
    condition: "Refurbished",
    stock: "In stock",
    image: PHOTOS.amps,
    gallery: [PHOTOS.amps, PHOTOS.console],
    blurb:
      "Factory-pattern refurb: new fans, new PSU capacitors, burn-in tested for 72 hours at full load. Rack ears included.",
    specs: [
      ["Channels", "4 × 5000 W @ 2 Ω"],
      ["DSP", "Onboard, ethernet control"],
      ["Refurb", "Fans + PSU caps replaced"],
      ["Burn-in", "72 h full-load test"],
    ],
  },
  {
    slug: "install-amp-rack-8ch",
    name: "8-Channel Install Amp Rack with DSP",
    brand: "Powersoft",
    category: "Amplifiers",
    retailPrice: L(3.5),
    price: L(1.3),
    condition: "Ex-demo",
    stock: "In stock",
    image: PHOTOS.console,
    gallery: [PHOTOS.console, PHOTOS.amps],
    blurb:
      "Two 4-channel install amps pre-wired in a 12U rack with DSP, mains distro, and patch panel. Lift out of the van and plug in.",
    specs: [
      ["Channels", "8 × 3000 W @ 4 Ω"],
      ["Rack", "12U shock-mount flight rack"],
      ["Extras", "Patch panel, mains distro"],
    ],
  },
  {
    slug: "32ch-digital-console",
    name: "32-Channel Digital Mixing Console",
    brand: "Midas",
    category: "Mixers",
    retailPrice: L(7),
    price: L(2.8),
    condition: "Ex-rental",
    stock: "In stock",
    image: PHOTOS.mixerDesk,
    gallery: [PHOTOS.mixerDesk, PHOTOS.console],
    blurb:
      "32-channel digital desk with stage box and 100 m cat-snake. Faders recalibrated, screen flawless, firmware current.",
    specs: [
      ["Inputs", "32 mic pre, 16 out"],
      ["Stage box", "Included, 32×16"],
      ["Faders", "Motorised, recalibrated"],
      ["Includes", "Dust cover, flight case"],
    ],
    featured: true,
  },
  {
    slug: "4ch-club-mixer",
    name: "4-Channel Club Mixer",
    brand: "Allen & Heath",
    category: "Mixers",
    retailPrice: L(1.9),
    price: L(0.75),
    condition: "Open box",
    stock: "In stock",
    image: PHOTOS.djMixer,
    gallery: [PHOTOS.djMixer, PHOTOS.djBooth],
    blurb:
      "Flagship 4-channel club mixer, opened for a product video and returned to the box the same day.",
    specs: [
      ["Channels", "4 + 2 FX sends"],
      ["Filters", "Per-channel, dual mode"],
      ["Condition", "As new, full warranty card"],
    ],
  },
  {
    slug: "pro-dj-controller-flagship",
    name: "Flagship 4-Deck DJ Controller",
    brand: "Pioneer DJ",
    category: "DJ Controllers",
    retailPrice: L(2.4),
    price: L(0.95),
    condition: "Ex-demo",
    stock: "In stock",
    image: PHOTOS.controller,
    gallery: [PHOTOS.controller, PHOTOS.djBooth, PHOTOS.turntable],
    blurb:
      "Four-deck flagship controller from the demo counter. Jogs tight, pads responsive, under 60 hours of use. Decksaver included.",
    specs: [
      ["Decks", "4, standalone + laptop"],
      ["Screens", "Dual touch"],
      ["Hours", "~60, demo counter only"],
      ["Includes", "Decksaver, original box"],
    ],
    featured: true,
  },
  {
    slug: "media-player-pair-flagship",
    name: "Flagship Media Player Pair",
    brand: "Pioneer DJ",
    category: "DJ Controllers",
    retailPrice: L(4.4),
    price: L(1.7),
    condition: "Ex-rental",
    stock: "In stock",
    image: PHOTOS.djBooth,
    gallery: [PHOTOS.djBooth, PHOTOS.turntable, PHOTOS.controller],
    blurb:
      "Matched pair of flagship media players from club installs. New jog bearings, screens without burn-in, latest firmware.",
    specs: [
      ["Format", "USB, link, streaming"],
      ["Jogs", "New bearings fitted"],
      ["Firmware", "Current"],
      ["Includes", "Link cables, covers"],
    ],
  },
  {
    slug: "moving-head-wash-8",
    name: "LED Moving Head Wash (Set of 8)",
    brand: "Chauvet Professional",
    category: "Lighting",
    retailPrice: L(3.2),
    price: L(1.2),
    condition: "Ex-rental",
    stock: "In stock",
    image: PHOTOS.lighting,
    gallery: [PHOTOS.lighting, PHOTOS.lighting2, PHOTOS.stage],
    blurb:
      "Eight LED wash moving heads with dual flight cases and clamps. All units under 800 hours, zoom and pan/tilt serviced.",
    specs: [
      ["Source", "19 × 15 W RGBW LED"],
      ["Zoom", "7°–50° motorised"],
      ["Hours", "Under 800 per unit"],
      ["Includes", "2 cases, 16 clamps, safeties"],
    ],
  },
  {
    slug: "beam-spot-hybrid-4",
    name: "Beam/Spot Hybrid Moving Heads (Set of 4)",
    brand: "Robe",
    category: "Lighting",
    retailPrice: L(4.6),
    price: L(1.8),
    condition: "Ex-rental",
    stock: "Reserved",
    image: PHOTOS.lighting2,
    gallery: [PHOTOS.lighting2, PHOTOS.lighting],
    blurb:
      "Four hybrid beam/spot fixtures with fresh lamps (under 50 hours) and one spare lamp per fixture.",
    specs: [
      ["Lamp", "470 W discharge, fresh"],
      ["Modes", "Beam / spot / wash hybrid"],
      ["Spares", "4 lamps included"],
    ],
  },
  {
    slug: "vocal-mic-wireless-quad",
    name: "Wireless Vocal Mic System (4 Channels)",
    brand: "Shure",
    category: "Microphones",
    retailPrice: L(2.8),
    price: L(1.05),
    condition: "Ex-demo",
    stock: "In stock",
    image: PHOTOS.mic,
    gallery: [PHOTOS.mic, PHOTOS.mic2],
    blurb:
      "Four-channel digital wireless rack with four handhelds. Frequencies scanned and set for the Indian band plan.",
    specs: [
      ["Channels", "4 digital, true diversity"],
      ["Handhelds", "4, capsules serviced"],
      ["Band", "Legal Indian spectrum"],
      ["Includes", "Rack, antennas, PSU"],
    ],
  },
  {
    slug: "drum-mic-kit",
    name: "Complete Drum Mic Kit with Case",
    brand: "Sennheiser",
    category: "Microphones",
    retailPrice: L(1.4),
    price: L(0.55),
    condition: "Open box",
    stock: "In stock",
    image: PHOTOS.mic2,
    gallery: [PHOTOS.mic2, PHOTOS.mic],
    blurb:
      "Seven-piece drum mic kit, opened once for inspection. Clips, case and windshields all sealed.",
    specs: [
      ["Pieces", "Kick, snare, 3 toms, 2 OH"],
      ["Condition", "Opened carton, unused"],
      ["Includes", "Rim clips, flight case"],
    ],
  },
  {
    slug: "global-truss-package",
    name: "Box Truss Package, 40 ft with Bases",
    brand: "Global Truss",
    category: "Trussing",
    retailPrice: L(2.2),
    price: L(0.9),
    condition: "Ex-rental",
    stock: "In stock",
    image: PHOTOS.truss,
    gallery: [PHOTOS.truss, PHOTOS.stage],
    blurb:
      "40 feet of 12-inch box truss in 10-ft sticks with base plates, corner blocks, and pins. Load-tested and certified this year.",
    specs: [
      ["Length", '4 × 10 ft sticks, 12" box'],
      ["Hardware", "Bases, corners, pins"],
      ["Certification", "Load-tested 2026"],
    ],
  },
  {
    slug: "club-rig-complete",
    name: "Complete Club Rig — Sound, Light, Booth",
    brand: "Multi-brand",
    category: "Full Rigs",
    retailPrice: L(18),
    price: L(6.5),
    condition: "Ex-rental",
    stock: "In stock",
    image: PHOTOS.crowd,
    gallery: [PHOTOS.crowd, PHOTOS.djBooth, PHOTOS.lighting, PHOTOS.speakerStack],
    blurb:
      "Everything from a closed venue: tops, subs, amps, booth with players and mixer, eight movers, and all cabling. Sold as one lot, demo strongly recommended.",
    specs: [
      ["Sound", "4 tops, 4 subs, amp racks"],
      ["Booth", "2 players, club mixer, booth monitors"],
      ["Light", "8 movers, controller, DMX runs"],
      ["Cabling", "Complete looms included"],
    ],
    featured: true,
  },
  {
    slug: "wedding-roadshow-rig",
    name: "Wedding / Roadshow Rig, Van-Ready",
    brand: "Multi-brand",
    category: "Full Rigs",
    retailPrice: L(8),
    price: L(3),
    condition: "Ex-rental",
    stock: "In stock",
    image: PHOTOS.festival,
    gallery: [PHOTOS.festival, PHOTOS.truss, PHOTOS.lighting2],
    blurb:
      "Turn-key events rig: powered tops and subs, wireless mics, four movers on stands, cabling, and covers. Loads in one Tempo Traveller.",
    specs: [
      ["Sound", "2 powered tops, 2 powered subs"],
      ["Mics", "2-ch wireless handheld"],
      ["Light", "4 movers, 2 T-stands"],
      ["Transport", "Fits one van"],
    ],
  },
  {
    slug: "dual-15-passive-tops",
    name: 'Dual 15" Passive Tops (Pair)',
    brand: "Yamaha",
    category: "Powered Speakers",
    retailPrice: L(1.8),
    price: L(0.7),
    condition: "Refurbished",
    stock: "In stock",
    image: PHOTOS.concert2,
    gallery: [PHOTOS.concert2, PHOTOS.speakerStack],
    blurb:
      "Pair of dual-15 passive tops with re-doped surrounds and new crossover capacitors. Bench-tested and matched.",
    specs: [
      ["Configuration", '2 × 15" + horn'],
      ["Power handling", "1000 W RMS"],
      ["Refurb", "Surrounds + crossover caps"],
    ],
  },
  {
    slug: "battle-turntable-pair",
    name: "Direct-Drive Turntables (Pair)",
    brand: "Technics",
    category: "DJ Controllers",
    retailPrice: L(2.2),
    price: L(0.9),
    condition: "Refurbished",
    stock: "In stock",
    image: PHOTOS.turntable,
    gallery: [PHOTOS.turntable, PHOTOS.djBooth],
    blurb:
      "Pair of direct-drive decks with new RCA looms, recalibrated pitch, and fresh slipmats. Tonearms aligned and balanced.",
    specs: [
      ["Drive", "Direct, quartz lock"],
      ["Pitch", "Recalibrated ±8%"],
      ["Includes", "Cartridges, slipmats, lids"],
    ],
  },
];

export const formatINR = (n: number) => {
  // Indian grouping: 3,50,000
  const s = Math.round(n).toString();
  if (s.length <= 3) return "₹" + s;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return "₹" + rest + "," + last3;
};

export const savingsPct = (p: Product) =>
  Math.round((1 - p.price / p.retailPrice) * 100);

export const bySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const HERO_IMAGE = PHOTOS.hero;
