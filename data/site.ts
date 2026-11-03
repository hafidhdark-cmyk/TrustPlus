export interface Branch {
  id: string;
  name: string;
  shortName: string;
  address: string;
  area: string;
  tag?: "Main branch" | "Newly opened";
  phone: string;
  phoneRaw: string;
  hours: {
    monSat: string;
    sun: string;
    openMonSat: number; // 8 = 8:00 AM
    closeMonSat: number; // 21 = 9:00 PM
    openSun: number; // 12 = 12:00 PM
    closeSun: number; // 21 = 9:00 PM
  };
  directionsUrl: string;
  // Stylized map coordinates (percentage within Abeokuta illustrative SVG map container)
  mapCoordinates: {
    x: number; // 0-100%
    y: number; // 0-100%
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "Pill" | "Stethoscope" | "Sparkles" | "ShoppingBasket" | "Truck" | "Store";
  tests?: string[];
}

export interface HealthGuide {
  id: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  featured?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export const siteData = {
  brand: {
    name: "TrustPlus Pharmacy & Stores",
    shortName: "TrustPlus",
    subName: "Pharmacy & Stores",
    legalName: "Golden TrustPlus Pharmacy Limited",
    rcNumber: "RC-1645272",
    copyrightYear: "2026",
    tagline: "Quality drugs and everyday needs, close to you.",
    positioning:
      "A retail pharmacy and chain of superstores, bringing quality drugs and everyday groceries closer to customers across Abeokuta.",
    disclaimer:
      "This health information provides general guidance only and is not a substitute for professional clinical advice. Always consult a qualified pharmacist or doctor for personal diagnosis and treatment.",
  },

  contact: {
    whatsapp: {
      number: "+234 803 585 4542",
      cleanNumber: "2348035854542",
      link: "https://wa.me/2348035854542",
      displayText: "+234 803 585 4542",
    },
    primaryCall: {
      number: "+234 803 585 4542",
      link: "tel:+2348035854542",
    },
    secondaryCall: {
      number: "+234 708 321 4377",
      link: "tel:+2347083214377",
    },
    email: {
      address: "trustpluspharmacy@gmail.com",
      link: "mailto:trustpluspharmacy@gmail.com",
    },
    instagram: {
      handle: "@trustpluspharm",
      url: "https://www.instagram.com/trustpluspharm/",
    },
  },

  navigation: [
    { label: "Branches", href: "#branches" },
    { label: "Services", href: "#services" },
    { label: "Health tips", href: "#health-tips" },
    { label: "Contact", href: "#contact" },
  ] as NavLink[],

  trustHighlights: [
    {
      title: "3 branches across Abeokuta",
      description: "Conveniently located in Ibara and Oke-Ata neighborhoods.",
      icon: "Store" as const,
    },
    {
      title: "Open 7 days",
      description: "Mon - Sat: 8:00 AM - 9:00 PM | Sun: 12:00 PM - 9:00 PM.",
      icon: "Clock" as const,
    },
    {
      title: "WhatsApp delivery",
      description: "Direct prescription orders and home drop-offs via chat.",
      icon: "Truck" as const,
    },
  ],

  hoursSummary: {
    monSat: "Monday to Saturday 8:00 AM - 9:00 PM",
    sun: "Sunday 12:00 PM - 9:00 PM",
  },

  branches: [
    {
      id: "ibara",
      name: "Ibara (Main Branch)",
      shortName: "Ibara",
      address: "Quarry Road, Ibara, Abeokuta, Ogun State",
      area: "Ibara, Quarry Road",
      tag: "Main branch",
      phone: "+234 803 585 4542",
      phoneRaw: "+2348035854542",
      hours: {
        monSat: "Mon - Sat: 8:00 AM - 9:00 PM",
        sun: "Sun: 12:00 PM - 9:00 PM",
        openMonSat: 8,
        closeMonSat: 21,
        openSun: 12,
        closeSun: 21,
      },
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=TrustPlus+Pharmacy+Quarry+Road+Ibara+Abeokuta+Ogun+State",
      mapCoordinates: {
        x: 48,
        y: 68,
      },
    },
    {
      id: "oke-ata",
      name: "Oke-Ata",
      shortName: "Oke-Ata",
      address: "Adj Federal Housing Estate, Oke-Ata, Ita-Oshin, Abeokuta",
      area: "Oke-Ata, Ita-Oshin",
      phone: "+234 803 585 4542",
      phoneRaw: "+2348035854542",
      hours: {
        monSat: "Mon - Sat: 8:00 AM - 9:00 PM",
        sun: "Sun: 12:00 PM - 9:00 PM",
        openMonSat: 8,
        closeMonSat: 21,
        openSun: 12,
        closeSun: 21,
      },
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=TrustPlus+Pharmacy+Adj+Federal+Housing+Estate+Oke-Ata+Ita-Oshin+Abeokuta",
      mapCoordinates: {
        x: 32,
        y: 35,
      },
    },
    {
      id: "oke-ata-mango",
      name: "Oke-Ata (Mango)",
      shortName: "Oke-Ata Mango",
      address: "Oke-Ata (Mango), Abeokuta",
      area: "Oke-Ata Mango",
      tag: "Newly opened",
      phone: "+234 803 585 4542",
      phoneRaw: "+2348035854542",
      hours: {
        monSat: "Mon - Sat: 8:00 AM - 9:00 PM",
        sun: "Sun: 12:00 PM - 9:00 PM",
        openMonSat: 8,
        closeMonSat: 21,
        openSun: 12,
        closeSun: 21,
      },
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=TrustPlus+Pharmacy+Oke-Ata+Mango+Abeokuta",
      mapCoordinates: {
        x: 62,
        y: 28,
      },
    },
  ] as Branch[],

  services: [
    {
      id: "prescriptions",
      title: "Prescriptions & Medical Supplies",
      description:
        "Authentic prescription medications, regular over-the-counter drugs, essential medical devices, and certified pharmaceutical supplies dispensed with care.",
      iconName: "Pill",
    },
    {
      id: "health-tests",
      title: "Health Checks & Point-of-Care Tests",
      description:
        "Quick and reliable on-site screening tests administered by experienced pharmacy personnel for immediate clinical guidance.",
      iconName: "Stethoscope",
      tests: [
        "Malaria",
        "Typhoid",
        "Random Blood Sugar",
        "Blood Pressure",
        "Packed Cell Volume (PCV)",
        "Lipid Profile",
      ],
    },
    {
      id: "cosmetics",
      title: "Cosmetics & Skincare",
      description:
        "Dermatologist-recommended skincare essentials, personal grooming ranges, therapeutic hair care, and baby toiletries for daily well-being.",
      iconName: "Sparkles",
    },
    {
      id: "groceries",
      title: "Groceries & Provisions",
      description:
        "A full superstore experience stocking household provisions, wholesome food staples, nutritional drinks, and everyday family essentials under one roof.",
      iconName: "ShoppingBasket",
    },
    {
      id: "delivery",
      title: "WhatsApp Delivery",
      description:
        "Send your doctor's prescription or shopping list directly to our official WhatsApp line for swift door-to-door delivery anywhere in Abeokuta.",
      iconName: "Truck",
    },
    {
      id: "in-store",
      title: "In-Store Shopping",
      description:
        "Spacious, air-conditioned aisles with well-organized shelves, professional pharmacist consultation counters, and prompt checkout services across all branches.",
      iconName: "Store",
    },
  ] as ServiceItem[],

  healthGuides: [
    {
      id: "blood-pressure",
      category: "Cardiovascular Health",
      title: "Knowing Your Blood Pressure: Numbers, Risks & Daily Habits",
      summary:
        "High blood pressure often exhibits no obvious warning symptoms yet places steady strain on your heart and circulation. Routine monthly checks, reduced dietary sodium, balanced hydration, and regular movement help you maintain optimal cardiovascular balance.",
      readTime: "3 min read",
      featured: true,
    },
    {
      id: "malaria-typhoid",
      category: "Infectious Care & Screening",
      title: "Why Malaria & Typhoid Tests Matter Before Treatment",
      summary:
        "Fever, fatigue, and body weakness can indicate either malaria, enteric fever, or other viral causes. Accurate point-of-care rapid testing prevents inappropriate drug use and ensures targeted, effective treatment without delay.",
      readTime: "2 min read",
      featured: false,
    },
    {
      id: "blood-sugar",
      category: "Metabolic Wellness",
      title: "Keeping Blood Sugar in Check: Practical Tips for Daily Life",
      summary:
        "Understanding your fasting and random blood glucose levels empowers proactive metabolic care. Mindful carbohydrate portions, regular meal timings, and periodic finger-prick checks keep your energy consistent throughout the day.",
      readTime: "2 min read",
      featured: false,
    },
  ] as HealthGuide[],
};
