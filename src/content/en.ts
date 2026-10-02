import type { Project, SiteContent } from "./types";

const projects: Project[] = [
  {
    slug: "room-transformation-with-storage",
    number: "01",
    year: "2025",
    color: "gelb",
    title: "room transformation with storage",
    subtitle: "a built-in element with an extra level and a small walk-in wardrobe",
    metaTitle: "Room Transformation with Storage",
    description:
      "A built-in element with an extra level and a small walk-in wardrobe for a one-room flat.",
    story:
      "This project was designed for a one-room flat and had several goals. To find a visually appealing solution for the sleeping area without the bed being the first thing you see on entering. And to create additional storage, because space in a one-room flat is tight. The bed was raised above head height, which lets the resident store plenty of belongings and clothes underneath. The side facing the room was clad with a large shelf that shapes the space and provides storage at the same time. The piece conceals the alcove and creates clean edges, while solving every problem the room had.",
    goal: "Find a solution for living and sleeping in one small space.",
    materials: "Beech, natural oil finish",
    dimensions: "Shelf: 200 × 200 × 40 cm, second level: 240 × 200 cm",
    cover: {
      src: "/room/room1/nische_berliner-zimmer_hochbett_stauraum.webp",
      alt: "Alcove in a Berlin room with a loft bed, shelving and storage",
      position: "50% 45%",
    },
    detail: {
      src: "/room/room1/problem_nische_berliner_zimmer.webp",
      alt: "The alcove before the conversion",
      position: "50% 55%",
    },
    gallery: [
      {
        src: "/room/room1/problem_nische_berliner_zimmer.webp",
        alt: "The alcove before the conversion",
      },
      {
        src: "/room/room1/entwurf_nische_bett.webp",
        alt: "Design for the loft bed in the alcove",
      },
      {
        src: "/room/room1/nische_berliner-zimmer_hochbett_stauraum.webp",
        alt: "The alcove with loft bed, shelving and storage after the conversion",
      },
    ],
  },
  {
    slug: "minimalist-sideboard",
    number: "02",
    year: "2024",
    color: "tinte",
    title: "minimalist sideboard",
    subtitle: "elegant, functional storage for modern living spaces",
    metaTitle: "Minimalist Acacia Sideboard",
    description:
      "A mid-century sideboard in acacia with hairpin steel legs: storage for books, electronics and personal belongings.",
    story:
      "Designed as a sideboard for the living room. A slim mid-century modern design that brings together function and aesthetics. The sideboard offers generous storage for books, electronics and personal belongings. The combination of warm acacia and steel legs creates an elegant contrast that fits seamlessly into modern interiors. The piece is not only practical but also a stylish statement in any room.",
    goal: "Create an elegant piece of furniture for a living area.",
    materials: "Acacia walnut, hairpin steel legs",
    dimensions: "135 × 40 × 80 cm",
    cover: {
      src: "/furniture/quadra/moebeldesign_akazienholz_sideboard_wide.webp",
      alt: "Acacia sideboard with hairpin steel legs",
    },
    detail: {
      src: "/furniture/quadra/massgeschneiderte_moebel_detail_altbau.webp",
      alt: "Detail of the sideboard in a period flat",
      position: "50% 60%",
    },
    gallery: [
      {
        src: "/furniture/quadra/moebelbau_akazien_sideboard_schrank.webp",
        alt: "Acacia sideboard in the living room",
      },
      {
        src: "/furniture/quadra/massgeschneiderte_moebel_detail_altbau.webp",
        alt: "Detail of the craftsmanship",
      },
      {
        src: "/furniture/quadra/sideboard_hochwertig_altbau_mid-century.webp",
        alt: "Mid-century sideboard in a period flat",
      },
    ],
  },
  {
    slug: "room-divider-with-bed-platform",
    number: "03",
    year: "2025",
    color: "petrol",
    title: "room divider with bed platform",
    subtitle: "a built-in solution that zones living and sleeping areas",
    metaTitle: "Room Divider with a Platform for the Bed",
    description:
      "A built-in solution that zones a combined living and sleeping room: a room divider with storage and a raised platform for the bed.",
    story:
      "This piece was designed for a compact flat where the living and sleeping areas needed to be clearly separated. The divider provides not only privacy but also extra storage. The integrated platform creates a snug sleeping nook and makes the most of the vertical space. The design combines function with a modern look that zones the room and gives it a clear structure. Underneath the new level, a space emerged that works as a home office corner or a comfortable reading spot.",
    goal: "Separate the living and sleeping areas and integrate them elegantly into the room.",
    materials: "Spruce, painted black",
    dimensions: "Bed: 140 × 200 cm, shelf: 140 × 40 × 200 cm",
    cover: {
      src: "/room/room2/raumteiler_homeoffice_studio_kleine_wohnung_raumkonzept.webp",
      alt: "Room divider with a home office corner beneath the platform",
      position: "50% 40%",
    },
    detail: {
      src: "/room/room2/wgzimmer_entwurf_altbauwohnung_raumkonzept.webp",
      alt: "Design drawing of the spatial concept",
      position: "50% 50%",
    },
    gallery: [
      {
        src: "/room/room2/wgzimmer_berlin_kleiderschrank.webp",
        alt: "The room before the conversion",
      },
      {
        src: "/room/room2/wgzimmer_entwurf_altbauwohnung_raumkonzept.webp",
        alt: "Design drawing of the spatial concept",
      },
      {
        src: "/room/room2/raumteiler_homeoffice_studio_kleine_wohnung_raumkonzept.webp",
        alt: "Room divider with platform and home office corner after the conversion",
      },
    ],
  },
  {
    slug: "loft-bed-with-wardrobe-and-media-wall",
    number: "04",
    year: "2025",
    color: "gelb",
    title: "built-in furniture for small flats",
    subtitle: "walk-in wardrobe, media wall and loft bed in one",
    metaTitle: "Loft Bed with Walk-in Wardrobe and Media Wall",
    description:
      "A multifunctional built-in solution for a combined living and sleeping area: loft bed, walk-in wardrobe and media wall.",
    story:
      "This piece was designed for a compact flat where additional storage was to be created beneath a loft bed. The design combines function with a modern look that zones the room and gives it a clear structure. Underneath the new level, a space emerged that works both as a walk-in wardrobe and as a media wall. The room now reads as structured and far tidier than before.",
    materials: "Melamine-faced plywood",
    dimensions: "Bed: 160 × 200 cm, height: 200 cm",
    cover: {
      src: "/room/room4/einbauschrank_stauraum_bettschrank_kleine_wohnung_berlin.webp",
      alt: "Built-in wardrobe with storage and loft bed in a small Berlin flat",
    },
    detail: {
      src: "/room/room4/zimmer_unordnung_schraenke_stauraum.webp",
      alt: "The room before the conversion with freestanding wardrobes",
    },
    gallery: [
      {
        src: "/room/room4/zimmer_unordnung_schraenke_stauraum.webp",
        alt: "The room before the conversion with freestanding wardrobes",
      },
      {
        src: "/room/room4/studio_designloesung_raumbildend_einbauschrank.webp",
        alt: "Design for the space-defining built-in wardrobe",
      },
      {
        src: "/room/room4/einbauschrank_stauraum_bettschrank_kleine_wohnung_berlin.webp",
        alt: "Built-in wardrobe with loft bed after the conversion",
      },
    ],
  },
  {
    slug: "new-use-for-a-10-sqm-room",
    number: "05",
    year: "2026",
    color: "tinte",
    title: "a new use for 10 m²",
    subtitle: "study, guest room and storage in a single room",
    metaTitle: "A New Use for a 10 m² Room",
    description:
      "A spatial concept for a 10 m² room that now works as a study, a guest room and storage.",
    story:
      "Although the room measures only 10 m², it was reworked so that it serves as a study, a guest room and storage. A clever furniture layout and the use of the vertical space above the door made a functional solution possible. It meets the residents' needs, creates room to work, to host guests, to read and to store things, and takes the pressure off the other rooms in the flat.",
    goal: "Create storage, define zones and make the room usable for several purposes.",
    materials: "Custom timber panel as desk, shelving and storage from a furniture retailer",
    dimensions: "Desk: approx. 170 × 65 cm",
    cover: {
      src: "/room/room13/kleines_arbeitszimmer_nachher_1.webp",
      alt: "Small study with desk and storage after the conversion",
    },
    detail: {
      src: "/room/room13/kleines_arbeitszimmer_vorher_1.webp",
      alt: "The room before the conversion",
    },
    gallery: [
      {
        src: "/room/room13/kleines_arbeitszimmer_vorher_1.webp",
        alt: "The work area before the conversion",
      },
      {
        src: "/room/room13/kleines_arbeitszimmer_nachher_1.webp",
        alt: "The work area after the conversion",
      },
      {
        src: "/room/room13/gaestezimmer_stauraum_vorher_2.webp",
        alt: "The guest and storage area before the conversion",
      },
      {
        src: "/room/room13/gaestezimmer_stauraum_nachher_2.webp",
        alt: "The guest and storage area after the conversion",
      },
    ],
  },
  {
    slug: "platform-bed-for-small-flats",
    number: "06",
    year: "2025",
    color: "petrol",
    title: "platform bed for small flats",
    subtitle: "wardrobe and bed combined in one piece",
    metaTitle: "Platform Bed with Wardrobe for Small Flats",
    description:
      "A platform bed with integrated storage that replaces a wardrobe and separates the living and sleeping areas.",
    story:
      "This piece was designed for a compact flat in order to draw attention away from the bed. The platform offers a great deal of extra storage and replaces a wardrobe. The design resembles a long sideboard and makes room for a mattress without immediately reading as a bed. The room now feels considerably tidier than before.",
    goal: "Separate the living and sleeping areas and integrate them elegantly into the room.",
    materials: "Melamine-faced plywood",
    dimensions: "Bed: 140 × 200 cm",
    cover: {
      src: "/room/room11/podestbett_arbeitsplatz_altbauwohnung_studio_stauraum.webp",
      alt: "Platform bed with a workspace in a period flat",
    },
    detail: {
      src: "/room/room11/studio_bett_stauraumproblem_kleine_wohnung.webp",
      alt: "The room before the conversion, short on storage",
    },
    gallery: [
      {
        src: "/room/room11/studio_bett_stauraumproblem_kleine_wohnung.webp",
        alt: "The room before the conversion, short on storage",
      },
      {
        src: "/room/room11/wgzimmer_dunkel_schreibtisch_wohnbereich.webp",
        alt: "The living and working area before the conversion",
      },
      {
        src: "/room/room11/kleine-wohnung_design_entwurf_podestbett.webp",
        alt: "Design for the platform bed",
      },
      {
        src: "/room/room11/zimmer_design_podestbett.webp",
        alt: "Visualisation of the room with the platform bed",
      },
      {
        src: "/room/room11/podestbett_arbeitsplatz_altbauwohnung_studio_stauraum.webp",
        alt: "Platform bed with workspace after the conversion",
      },
      {
        src: "/room/room11/podestbett_stauraum_homeoffice_raumkonzept_farbkonzept.webp",
        alt: "Platform bed with storage and home office in the colour scheme",
      },
    ],
  },
];

export const en: SiteContent = {
  skipLink: "skip to content",
  nav: [
    { href: "/en/#projekte", label: "projects" },
    { href: "/en/#leistungen", label: "services" },
    { href: "/en/#ablauf", label: "process" },
    { href: "/en/#pakete", label: "packages" },
    { href: "/en/#ueber-mich", label: "about" },
    { href: "/en/#kontakt", label: "contact" },
  ],
  headerCta: { href: "/en/#kontakt", label: "book a first call" },
  menu: { open: "Open menu", close: "Close menu" },

  hero: {
    spine: ["raumideenwerk", "berlin"],
    claim: "more room, no move.",
    keywords: "interior architecture and space planning for small flats in berlin",
    primaryCta: { href: "/en/#kontakt", label: "book a first call" },
    secondaryCta: { href: "/en/#projekte", label: "see the projects" },
    imageTop: {
      src: "/room/room11/podestbett_stauraum_homeoffice_raumkonzept_farbkonzept.webp",
      alt: "Room with a platform bed, storage and a workspace",
      position: "50% 55%",
    },
    imageBottom: {
      src: "/room/room13/kleines_arbeitszimmer_nachher_1.webp",
      alt: "Small study with shelving and a desk",
      position: "50% 60%",
    },
  },

  projects: {
    title: "projects",
    subtitle: "selected spatial concepts and bespoke built-in solutions",
    prevLabel: "Previous projects",
    nextLabel: "Next projects",
    ctaCard: {
      number: "07",
      title: "your flat",
      subtitle: "book a first call",
      href: "/en/#kontakt",
    },
    items: projects,
  },

  services: {
    title: "what i do",
    subtitle: "smart space. better living.",
    items: [
      {
        title: "interior design & spatial concepts",
        text: "I specialise in turning existing rooms into functional, beautiful and personal living spaces.",
      },
      {
        title: "more space without moving",
        text: "Instead of moving house, I help people get the most out of the home they already have — through clever reorganisation, considered zoning and bespoke furniture solutions.",
      },
      {
        title: "spatial concepts and built-in solutions",
        text: "Every concept is tailored to how the client actually lives, combining practicality with timeless design.",
      },
      {
        title: "better use, better feel",
        text: "The result: homes that feel larger, work better and genuinely reflect the people living in them.",
      },
    ],
  },

  painPoints: {
    title: "sound familiar?",
    items: [
      {
        title: "a small flat in berlin",
        text: "Few square metres but plenty of needs? I'll show you how to get more out of your flat without moving.",
      },
      {
        title: "no room, no storage",
        text: "Nowhere to put anything? Clever built-in solutions create storage where you wouldn't expect it.",
      },
      {
        title: "the children's room is too small",
        text: "Two children, one room — it works. With the right planning, chaos turns into a space that functions.",
      },
      {
        title: "your dream home, where you are",
        text: "A bigger flat costs a fortune in Berlin. I help you stay in the one you have — and love it.",
      },
    ],
  },

  process: {
    title: "how it works",
    subtitle: "the way we work together",
    steps: [
      {
        title: "first call",
        text: "We talk about your daily life and about what isn't working in your flat right now.",
      },
      {
        title: "measuring up",
        text: "You measure up following my instructions, or I come by and survey the space myself.",
      },
      {
        title: "concept",
        text: "Zones, storage and built-in elements, as a floor plan, a sketch or a visualisation.",
      },
      {
        title: "building it",
        text: "You carry out the work yourself, or I put you in touch with my partner joinery.",
      },
    ],
  },

  packages: {
    title: "packages",
    subtitle: "base prices for rooms up to 20 m²",
    popularLabel: "most popular",
    addOnsLabel: "available as add-ons",
    items: [
      {
        name: "room impulses",
        kind: "online package",
        price: "€590",
        surcharge: "above 20 m²: +€30 per additional m²",
        description:
          "The package for inspiration and ideas for your rooms. For rooms up to 20 m². Online consultation.",
        features: [
          "Design consultation",
          "Style advice",
          "Spatial advice",
          "Material suggestions",
          "Rough floor plan",
          "You measure up",
        ],
        cta: "get started",
        color: "petrol",
      },
      {
        name: "room concepts",
        kind: "full package",
        price: "€890",
        surcharge: "above 20 m²: +€45 per additional m²",
        description:
          "The all-round package for rooms between 15 and 20 m². The concept for converting your home yourself, with a consultation on site in Berlin.",
        features: [
          "Design consultation",
          "Style concept",
          "Spatial concept",
          "Material advice",
          "Moodboard",
          "Shopping list",
          "Perspective sketch",
        ],
        addOns: [
          { name: "Bespoke furniture planning", price: "€500–700" },
          { name: "Photorealistic visualisation", price: "€150" },
        ],
        cta: "choose concepts",
        color: "gelb",
        popular: true,
      },
      {
        name: "room transformation",
        kind: "complete solution",
        price: "€1,490",
        surcharge: "above 20 m²: +€75 per additional m²",
        description:
          "The worry-free package for transforming your home, with 3D visualisation and an on-site survey in Berlin. For rooms up to 20 m².",
        features: [
          "Everything in Room Concepts",
          "Bespoke furniture planning, included",
          "Photorealistic visualisation, included",
          "On-site survey",
          "Technical drawings",
          "Introduction to my partner joinery",
        ],
        cta: "transform the room",
        color: "tinte",
      },
    ],
    notes: [
      "If the scope of an enquiry isn't clear yet, or you'd rather not book a package, I bill by the hour. My rate is €160.",
      "All prices are base prices and may vary with the complexity and specific requirements of a project.",
    ],
  },

  about: {
    title: "about me",
    subtitle: "architect and interior designer with a passion for exceptional spaces",
    spine: "daniel von boros",
    text: "I am an architect with more than five years of experience converting and extending houses and flats, and designing interior and exterior spaces. My focus is on bringing function and beauty together — because rooms should not only look good, they should make daily life better for the people in them. My path began with studying architecture, where I developed a deep understanding of spatial relationships, structural integrity and the effect an environment has on our wellbeing.",
    portrait: {
      src: "/image_daniel.jpeg",
      alt: "Daniel von Boros",
      position: "50% 30%",
    },
  },

  testimonials: {
    title: "what clients say",
    items: [
      {
        text: "I had been unhappy with the layout of our living room for a long time. Daniel had the right ideas for what we needed and helped us rearrange the room using the furniture we already had, so that we enjoy being in it again. With the new layout the room feels far more open and welcoming, and you no longer look straight at the back of the sofa when you walk in.",
        author: "Lisa V.",
      },
      {
        text: "I had been looking for a bespoke solution for my desk for a long time. At first I only wanted a way to raise the speakers a little, but I came away with valuable ideas. Together we worked out a solution based on what I needed: extra storage, the speakers and monitor raised to the right height, and more surface area for all my audio equipment. I'm very happy with it.",
        author: "Nadia P.",
      },
      {
        text: "Daniel advised us thoroughly on many small problem areas in our holiday home and came up with a great many ideas that are both visually appealing and technically well thought through. What used to be awkward corners now look inviting, offer storage and are lovely to look at. I can only recommend working with him.",
        author: "Christina K.",
      },
    ],
  },

  contact: {
    title: "contact",
    subtitle: "ready to transform your home?",
    details: [
      { label: "email", value: "hallo@raumideenwerk.com", href: "mailto:hallo@raumideenwerk.com" },
      { label: "phone", value: "+49 160 495 81 48", href: "tel:+491604958148" },
      {
        label: "instagram",
        value: "@raum.ideen.werk.berlin",
        href: "https://www.instagram.com/raum.ideen.werk.berlin",
      },
      { label: "address", value: "Kolonnenstraße 8, 10827 Berlin" },
    ],
    form: {
      name: "name",
      email: "email",
      subject: "subject",
      message: "message",
      submit: "send message",
      sending: "sending …",
      success:
        "Thank you, your message has arrived. I usually reply within 24 to 48 hours on working days.",
      error:
        "That didn't work. Please try again later or write directly to hallo@raumideenwerk.com.",
      captchaLabel: "security question",
      captchaNew: "new question",
      captchaLoading: "loading …",
      captchaRequired: "Please solve the small sum first.",
      rateLimited:
        "A lot of messages have come from your connection just now. Please try again in an hour, or write directly to hallo@raumideenwerk.com.",
    },
  },

  footer: {
    contact: [
      { href: "mailto:hallo@raumideenwerk.com", label: "hallo@raumideenwerk.com" },
      { href: "tel:+491604958148", label: "+49 160 495 81 48" },
    ],
    social: [
      { href: "https://www.instagram.com/raum.ideen.werk.berlin", label: "@raum.ideen.werk.berlin" },
    ],
    address: "Kolonnenstraße 8, 10827 Berlin",
    legal: [
      { href: "/en/imprint/", label: "legal notice" },
      { href: "/en/privacy/", label: "privacy" },
    ],
    homeLabel: "raumideenwerk, back to the homepage",
  },

  projectPage: {
    back: "all projects",
    goal: "project goal",
    story: "about this project",
    materials: "materials",
    dimensions: "dimensions",
    year: "year",
    gallery: "images",
    ctaTitle: "interested in something similar?",
    ctaText: "Let's talk about your home. The first call is where it starts.",
    ctaButton: { href: "/en/#kontakt", label: "book a first call" },
    prev: "previous project",
    next: "next project",
  },
};
