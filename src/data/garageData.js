/**
 * Centralized business configuration for Armand’s Garage.
 * All business details, service categories, and unverified directory disclosures
 * are managed here for simple single-source updating.
 */

export const businessInfo = {
  name: "Armand’s Garage",
  legalName: "Armand’s Garage",
  tagline: "Honest Auto Care. Dependable Service.",
  subTagline: "Keeping Yuma drivers safely on the road with straightforward, honest automotive repair and preventative maintenance.",
  locationBadge: "Serving Yuma, Arizona",
  establishedYear: 1956,
  isEstablishedUnverified: true, // Note: directory-sourced, pending owner verification
  
  contact: {
    phone: "(928) 782-1211",
    phoneTel: "tel:+19287821211",
    phoneNumeric: "9287821211",
    email: "info@armandsgarageyuma.com", // placeholder if needed
    address: {
      street: "310 W 17th Pl",
      city: "Yuma",
      state: "AZ",
      zip: "85364",
      country: "USA",
      formatted: "310 W 17th Pl, Yuma, AZ 85364",
      mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=310+W+17th+Pl,+Yuma,+AZ+85364",
      appleMapsUrl: "https://maps.apple.com/?address=310+W+17th+Pl,Yuma,AZ+85364",
    },
  },

  schedule: {
    hoursList: [
      { days: "Monday – Friday", hours: "9:00 AM – 5:00 PM", isOpenDays: true },
      { days: "Saturday – Sunday", hours: "Closed", isOpenDays: false },
    ],
    note: "Business hours sourced from public directories. Subject to owner confirmation.",
    timezone: "America/Phoenix (MST)", // Arizona does not observe Daylight Saving Time
  },

  notices: {
    portfolioProposal: "Freelance Developer Portfolio Concept — Designed specifically for Armand’s Garage (Yuma, AZ). Not an official live business site.",
    serviceDisclaimer: "These service categories represent typical independent auto repair offerings and have not been independently confirmed by Armand’s Garage. Content can be tailored to exact shop specializations.",
    aboutDisclaimer: "Historical reference: Third-party directories list Armand’s Garage as founded in 1956. This milestone is presented for concept layout and awaits verification by the shop owner.",
    contactDemoNotice: "Notice: This interactive form is part of a portfolio demo. To schedule actual service or inquire about vehicle drop-offs, please call Armand’s Garage directly at (928) 782-1211.",
  },

  images: {
    hero: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1920&q=80",
    aboutWorkshop: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    mechanicWork: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
    desertRoad: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    tools: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    brakes: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=800&q=80",
  }
};

export const serviceCategories = [
  {
    id: "general-repair",
    title: "General Auto Repair",
    category: "Mechanical & Systems",
    iconName: "Wrench",
    shortDesc: "Comprehensive diagnosis and repairs for common mechanical issues, drivability problems, and unexpected vehicle breakdowns.",
    details: [
      "Engine belt & hose inspection / replacement",
      "Radiator & cooling system repairs for desert heat",
      "Starter, alternator & battery charging diagnosis",
      "Exhaust, fuel delivery & emission troubleshooting"
    ],
    bestFor: "Odd noises, warning lights, fluid leaks, or sudden loss of vehicle power."
  },
  {
    id: "scheduled-maintenance",
    title: "Vehicle Maintenance",
    category: "Preventative Care",
    iconName: "ShieldCheck",
    shortDesc: "Routine inspections and factory-recommended mileage services to prolong engine life and prevent costly breakdowns.",
    details: [
      "Multi-point safety & fluid condition inspection",
      "Engine air & cabin air filter replacement",
      "Coolant, transmission, power steering & brake fluid checks",
      "Wiper blades, tire pressure & lighting verification"
    ],
    bestFor: "Preparing for seasonal heat, road trips, or 30k/60k/90k service intervals."
  },
  {
    id: "brake-service",
    title: "Brake Service & Inspection",
    category: "Safety Critical",
    iconName: "Disc",
    shortDesc: "Reliable stopping performance through precision brake pad replacements, rotor resurfacing/replacement, and hydraulic checks.",
    details: [
      "Front and rear brake pad & shoe thickness measurement",
      "Rotor and drum surface & runout evaluation",
      "Brake fluid moisture testing & hydraulic line inspection",
      "Caliper, hardware lubrication & ABS sensor verification"
    ],
    bestFor: "Squeaking, grinding, pulsating pedal, or soft brake response."
  },
  {
    id: "engine-diagnostics",
    title: "Engine Diagnostics",
    category: "Troubleshooting",
    iconName: "Cpu",
    shortDesc: "Pinpoint trouble codes and underlying engine faults using modern diagnostic scan tools and practical mechanical expertise.",
    details: [
      "OBD-II trouble code readout & live sensor data analysis",
      "Ignition system, spark plugs & coil pack testing",
      "Misfire, rough idle, and stalling investigations",
      "Fuel trim, oxygen sensor & catalytic converter checks"
    ],
    bestFor: "Check engine light illuminated or flashing, engine hesitation, or poor fuel economy."
  },
  {
    id: "oil-changes",
    title: "Oil & Filter Service",
    category: "Essential Lubrication",
    iconName: "Droplets",
    shortDesc: "Full-service oil and premium filter changes essential for protecting engines against high Arizona operating temperatures.",
    details: [
      "Conventional, semi-synthetic, and full-synthetic oil options",
      "High-efficiency spin-on or cartridge oil filter replacement",
      "Chassis lube and undercarriage visual safety check",
      "Top-off of vital under-hood fluids"
    ],
    bestFor: "Regular intervals every 3,000 to 7,500 miles based on driving habits."
  },
  {
    id: "suspension-steering",
    title: "Suspension & Steering",
    category: "Handling & Ride",
    iconName: "Compass",
    shortDesc: "Restore smooth handling, road stability, and tire longevity with suspension and steering component repairs.",
    details: [
      "Shock absorber & strut health inspection",
      "Tie rod ends, ball joints & sway bar links",
      "Power steering pump, rack & pinion examination",
      "Bushings, control arms & wheel bearing inspection"
    ],
    bestFor: "Vehicle wandering, excessive bouncing, uneven tire wear, or clunking over bumps."
  }
];

export const valueProps = [
  {
    id: "communication",
    title: "Straightforward Communication",
    description: "We explain what your car needs in plain English before starting any work—no confusing jargon or surprise line items.",
    iconName: "MessageSquareCheck",
    badge: "No Pressure"
  },
  {
    id: "workmanship",
    title: "Dependable Workmanship",
    description: "Every repair is completed with careful attention to detail and honest mechanical standards built for everyday driving.",
    iconName: "Hammer",
    badge: "Quality Focus"
  },
  {
    id: "local",
    title: "Local Yuma Roots",
    description: "Centrally located on 17th Place, we take pride in serving our Yuma neighbors with accessible, respectful auto care.",
    iconName: "MapPin",
    badge: "310 W 17th Pl"
  },
  {
    id: "practicality",
    title: "Honest Recommendations",
    description: "We help prioritize what is safety-critical today versus what can wait, respecting your schedule and budget.",
    iconName: "CheckCircle2",
    badge: "Practical Advice"
  }
];

export const faqItems = [
  {
    q: "Do I need to schedule an appointment before bringing my vehicle in?",
    a: "While walk-ins and phone calls are welcome, we recommend calling ahead at (928) 782-1211 so we can discuss your vehicle's symptoms and advise the best time to drop it off."
  },
  {
    q: "How does the desert climate in Yuma affect my vehicle's maintenance?",
    a: "Extreme Arizona heat significantly shortens battery life, accelerates coolant degradation, causes rubber belts and hoses to dry out, and breaks down engine oil faster. Regular fluid checks are especially critical here."
  },
  {
    q: "Will you provide an explanation before doing any repairs?",
    a: "Yes. Our approach is to clearly explain what needs repair, why it is necessary, and answer any questions you have before any wrenches turn."
  },
  {
    q: "Where is Armand’s Garage located?",
    a: "We are located at 310 W 17th Pl in Yuma, AZ 85364. Turn into 17th Place off 4th Avenue or 1st Avenue for easy access."
  }
];
