export const business = {
  description:
    "Innenarchitektur und Raumplanung für kleine Wohnungen in Berlin. Spezialisiert auf intelligente Raumkonzepte, Zonierung, Stauraumlösungen und individuelle Möbelplanung.",
  logo: "/logo.svg",
  image: { src: "/website.webp", width: 1200, height: 630 },
  areaServed: "Berlin",
  priceRange: "€€",
  currency: "EUR",
  knowsAbout: [
    "Innenarchitektur für kleine Wohnungen",
    "Raumplanung",
    "Einbaumöbel nach Maß",
    "Podestbett mit Stauraum",
    "Hochbett und Hochebene",
    "Einbauschrank",
    "Raumteiler",
    "Stauraumlösungen",
    "Zonierung von Wohn- und Schlafbereich",
  ],
};

export const person = {
  jobTitle: "Architekt & Interior Designer",
  description:
    "Architekt und Gründer von raumideenwerk mit Schwerpunkt auf Raumplanung, Wohnungsoptimierung und individuellen Lösungen für kleine Wohnungen.",
  image: "/image_daniel.jpeg",
  knowsAbout: [
    "Innenarchitektur",
    "Raumplanung",
    "Raumkonzepte",
    "Wohnungsoptimierung",
    "kleine Wohnungen",
    "Stauraumplanung",
    "Möbelplanung",
    "Grundrissoptimierung",
  ],
};

export interface ServiceOffer {
  id: string;
  name: string;
  serviceType: string;
  description: string;
  price?: string;
  priceRange?: { min: string; max: string };
  areaServed: { type: "City" | "Country"; name: string };
}

export const offerCatalog: { name: string; offers: ServiceOffer[] } = {
  name: "Innenarchitektur und Raumplanung",
  offers: [
    {
      id: "service-impuls",
      name: "Impuls",
      serviceType: "Online-Raumberatung und Einrichtungsberatung",
      description:
        "Online-Beratung für Räume bis 20 m² mit Designberatung, Stilberatung, Materialvorschlägen und Grundrissoptimierung.",
      price: "590",
      areaServed: { type: "Country", name: "Deutschland" },
    },
    {
      id: "service-konzept",
      name: "Konzept",
      serviceType: "Innenarchitektur und Raumplanung",
      description:
        "Raumkonzept mit Stilkonzept, Moodboard, Grundrissplanung, Einrichtungsvorschlägen und Beratung vor Ort in Berlin.",
      price: "890",
      areaServed: { type: "City", name: "Berlin" },
    },
    {
      id: "service-transformation",
      name: "Transformation",
      serviceType: "Innenarchitektur, Raumplanung und Möbelplanung",
      description:
        "Umfassendes Raumkonzept mit individueller Möbelplanung, fotorealistischer 3D-Visualisierung, technischen Zeichnungen und Unterstützung bei der Umsetzung.",
      price: "1490",
      areaServed: { type: "City", name: "Berlin" },
    },
    {
      id: "service-moebelplanung",
      name: "Individuelle Möbelplanung",
      serviceType: "Planung von Einbaumöbeln nach Maß",
      description:
        "Planung individueller Einbaumöbel für kleine Wohnungen: Podestbetten mit Stauraum, Hochbetten, Einbauschränke und Raumteiler – mit technischen Zeichnungen für den Selbstbau oder die Partnertischlerei.",
      priceRange: { min: "500", max: "700" },
      areaServed: { type: "City", name: "Berlin" },
    },
  ],
};
