import type { Project, SiteContent } from "./types";

const projects: Project[] = [
  {
    slug: "room-transformation-with-storage",
    number: "01",
    year: "2025",
    color: "yellow",
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
    color: "ink",
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
    color: "yellow",
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
    color: "ink",
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

  servicePages: {
    title: "services in detail",
    items: [
      {
        slug: "built-in-furniture-storage",
        color: "yellow",
        label: "built-in furniture & storage",
        title: "bespoke built-in furniture in berlin",
        subtitle: "more storage for small flats, without moving",
        metaTitle: "Bespoke Built-in Furniture & Storage for Small Flats in Berlin",
        description:
          "Made-to-measure built-in furniture for small flats in Berlin: built-in wardrobes, platform beds, raised levels and shelving walls that create storage – designed by an architect.",
        image: {
          src: "/room/room4/einbauschrank_stauraum_bettschrank_kleine_wohnung_berlin.webp",
          alt: "Built-in wardrobe with storage and a loft bed in a small flat in Berlin",
        },
        intro:
          "When the cupboards are full and every corner is cluttered, it's rarely because there aren't enough square metres. Usually alcoves, wall space and ceiling height go unused. Made-to-measure built-in furniture wins that space back: it adapts to the room instead of filling it with standard furniture.",
        fit: {
          title: "when built-in furniture makes sense",
          items: [
            "Your cupboards are full, and there's no room for another one.",
            "Your flat has alcoves, recesses or corners that no standard furniture fits.",
            "The ceiling is high, but the space up there goes unused.",
            "One room has to do several jobs, such as working, sleeping and hosting guests.",
          ],
        },
        planning: [
          {
            title: "understanding your routine",
            text: "I look at what you need to store and how you use your flat day to day. That shows where storage belongs – and where it would get in the way.",
          },
          {
            title: "using lost space",
            text: "Alcoves, the space above doors, under the bed and up to the ceiling: that's where I plan built-in wardrobes, platforms, raised levels or shelving walls.",
          },
          {
            title: "keeping it calm",
            text: "Built-in furniture should organise a room, not fill it. Continuous fronts and clean edges make a room look tidier and larger.",
          },
          {
            title: "designed to be built",
            text: "You get technical drawings to build from yourself, or for my partner joinery to quote on.",
          },
        ],
        costs:
          "What the build costs depends heavily on size, materials and finish. That's why I don't give a flat price for it: once the concept is finished, you get a concrete quote from the joinery – or you build it yourself.",
        projects: [3, 0, 4, 5],
        faq: [
          {
            question: "What's the difference between built-in and regular furniture?",
            answer:
              "Built-in furniture is designed for one specific room and uses it right into the corners and up to the ceiling. Standard furniture leaves gaps that are lost. In small flats especially, that makes a big difference to storage.",
          },
          {
            question: "Can I include furniture I already have?",
            answer:
              "Yes. Part of the storage can often be solved with furniture you already own or pieces from a furniture store, as in the project “a new use for 10 m²”. I plan made-to-measure pieces where standard furniture doesn't fit.",
          },
          {
            question: "Do you build the furniture yourself?",
            answer:
              "No, I design it. It's built by you or by my partner joinery, which I put you in touch with.",
          },
        ],
      },
      {
        slug: "platform-bed",
        color: "petrol",
        label: "platform bed",
        title: "bespoke platform beds in berlin",
        subtitle: "sleep, store and zone the room",
        metaTitle: "Platform Bed with Storage, Designed in Berlin",
        description:
          "Made-to-measure platform beds for small flats in Berlin: with storage that can replace a wardrobe, and a clear separation of living and sleeping areas.",
        image: {
          src: "/room/room11/podestbett_arbeitsplatz_altbauwohnung_studio_stauraum.webp",
          alt: "Platform bed with storage and a workspace in a period flat",
        },
        intro:
          "A platform bed raises the mattress onto a level with plenty of storage underneath – often enough to replace a wardrobe. At the same time it structures the room: the bed becomes part of a piece of furniture and no longer dominates the whole space.",
        fit: {
          title: "when a platform bed makes sense",
          items: [
            "You live in a studio or one-room flat where living and sleeping happen in the same room.",
            "A wardrobe takes up too much space or doesn't fit at all.",
            "You don't want the bed to be the first thing you see when you walk in.",
            "You want to divide the room into zones without putting up walls.",
          ],
        },
        planning: [
          {
            title: "height and access",
            text: "How high the platform is depends on how much storage you need and how easy it should be to get in and out of bed.",
          },
          {
            title: "storage you can reach",
            text: "Drawers, flaps or open compartments – depending on what you store and how often you need it.",
          },
          {
            title: "furniture, not a bed",
            text: "In the project “platform bed for small flats”, the platform looks like a long sideboard. The result is a place to sleep that doesn't read as a bed.",
          },
          {
            title: "planned with the room",
            text: "I plan the platform together with the workspace, shelving and colour scheme, so the whole room works.",
          },
        ],
        costs:
          "The cost of building it depends on size, the storage layout and materials. A reliable price is only possible once the concept is finished – then you get a quote from the joinery, or you build it yourself.",
        projects: [5, 2],
        faq: [
          {
            question: "How much storage does a platform bed give me?",
            answer:
              "Under a 140 × 200 cm mattress alone there are almost three square metres you can use for storage. In the project “platform bed for small flats”, that was enough to replace the wardrobe.",
          },
          {
            question: "What's the difference between a platform bed and a loft bed?",
            answer:
              "A platform bed is low, with storage underneath in drawers or compartments. A loft bed or raised level lifts the bed high enough to create a usable area below, for a walk-in wardrobe or a workspace, for example. Which one fits depends mainly on the ceiling height.",
          },
          {
            question: "Can I build a platform bed myself?",
            answer:
              "Yes. The “transformation” package includes technical drawings you can build from yourself. If you'd rather not, I'll put you in touch with my partner joinery.",
          },
        ],
      },
      {
        slug: "raised-level-loft-bed",
        color: "ink",
        label: "raised level & loft bed",
        title: "raised levels and loft beds in berlin",
        subtitle: "turning ceiling height into extra floor space",
        metaTitle: "Bespoke Raised Levels & Loft Beds, Designed in Berlin",
        description:
          "Made-to-measure raised levels and loft beds for small flats in Berlin: ceiling height becomes extra space for sleeping, a wardrobe or a workspace.",
        image: {
          src: "/room/room1/nische_berliner-zimmer_hochbett_stauraum.webp",
          alt: "Loft bed with shelving and storage in the alcove of a Berlin room",
          position: "50% 45%",
        },
        intro:
          "Many Berlin flats, especially in period buildings, have high ceilings. A raised level or loft bed turns that height into extra space: sleep up top, and store things, work or get dressed below. A small room gains a second level without feeling more cramped.",
        fit: {
          title: "when a raised level makes sense",
          items: [
            "Your room has high ceilings, as in many Berlin period flats.",
            "You need room for sleeping and storage, but the floor area isn't enough for both.",
            "An alcove or part of the room is barely used.",
            "You want a walk-in wardrobe, a workspace or a reading corner under the bed.",
          ],
        },
        planning: [
          {
            title: "checking the ceiling height",
            text: "Whether a raised level makes sense depends on the ceiling height: there has to be enough headroom above and below for both levels to be comfortable. That's the first thing I check.",
          },
          {
            title: "built to be safe",
            text: "Structure, access and fall protection are part of the design. You get drawings that the joinery – or you – can build from.",
          },
          {
            title: "using the lower level",
            text: "Underneath, a space of its own appears: a walk-in wardrobe as in the project “built-in furniture for small flats”, or a home office corner as in “room divider with bed platform”.",
          },
          {
            title: "furniture, not scaffolding",
            text: "Facing the room, the raised level can be clad with shelving. That turns it into furniture that organises the room instead of looking like scaffolding.",
          },
        ],
        costs:
          "Build costs vary widely: simple raised levels are offered from around €2,000. Depending on size, materials, built-in elements and finish – a lacquered finish, for example – the price can be several times that. That's why you only get a concrete quote once the concept is finished.",
        projects: [0, 3, 2],
        faq: [
          {
            question: "How much does a raised level cost in Berlin?",
            answer:
              "Simple raised levels start at around €2,000. Depending on size, materials, built-in elements and finish, the price can be several times that. Planning comes on top: bespoke furniture planning is included in the “transformation” package for €1,490, for example.",
          },
          {
            question: "How high does a room need to be for a raised level?",
            answer:
              "That depends on how you want to use the two levels. Sleeping up top needs less headroom than a workspace below where you want to sit or stand upright. High period ceilings are ideal – whether it works in your flat is something I check when measuring up.",
          },
          {
            question: "Is a raised level possible in a rented flat?",
            answer:
              "Often, yes, if it's freestanding and can be taken down when you move out. Still, check with your landlord or property management first – we can talk it through in the first call.",
          },
        ],
      },
      {
        slug: "separate-living-and-sleeping-areas",
        color: "yellow",
        label: "separating living and sleeping",
        title: "separating living and sleeping areas",
        subtitle: "zoning for studios and one-room flats in berlin",
        metaTitle: "Separating Living and Sleeping Areas in One Room – Space Planning in Berlin",
        description:
          "Separate the living and sleeping area in one room: with a room divider, platform bed or raised bed platform. Zoning for studios and one-room flats in Berlin.",
        image: {
          src: "/room/room2/raumteiler_homeoffice_studio_kleine_wohnung_raumkonzept.webp",
          alt: "Room divider with a raised bed platform and a home office corner underneath",
          position: "50% 40%",
        },
        intro:
          "In a studio or one-room flat, the bed is often the first thing you see, and living, working and sleeping blur into one. Zoning gives each area its own place without putting up walls. Afterwards the room feels calmer and often even larger.",
        fit: {
          title: "when zoning makes sense",
          items: [
            "You live, sleep and work in one room.",
            "When you walk in, your eye goes straight to the bed.",
            "Your guests are practically sitting in your bedroom.",
            "You want a separation that doesn't cost space but adds storage.",
          ],
        },
        planning: [
          {
            title: "defining the zones",
            text: "We work out which areas you need – sleeping, living, working, dressing – and where they sit best in the room, taking windows, doors and routes into account.",
          },
          {
            title: "dividing with storage",
            text: "A room divider that doubles as shelving separates the areas and holds books, clothes or electronics at the same time. The separation doesn't cost space, it creates it.",
          },
          {
            title: "using the height",
            text: "A raised platform sets the sleeping area apart. Underneath there's room for a home office, a reading corner or a wardrobe.",
          },
          {
            title: "planning sightlines",
            text: "I plan the room so the bed isn't the centre of attention when you walk in. That turns a bedroom with a sofa back into a home.",
          },
        ],
        costs:
          "Zoning can work simply by rearranging furniture you already own – then the “impulse” or “concepts” package is often enough. For a made-to-measure room divider, platform or raised level, build costs depend on size and materials; you get a quote based on the finished concept.",
        projects: [2, 5, 0],
        faq: [
          {
            question: "How do I separate living and sleeping areas without a wall?",
            answer:
              "With a room divider that doubles as shelving or a wardrobe, with a platform bed or with a raised bed platform. Sometimes a curtain or a clever furniture layout is enough. What matters is that each area is clearly defined and the routes stay clear.",
          },
          {
            question: "Is zoning worth it in a small room?",
            answer:
              "Especially there. The smaller the room, the more it gains from clear zones. In the project “room divider with bed platform”, an extra home office corner even appeared under the raised bed.",
          },
          {
            question: "Can I keep using my existing furniture?",
            answer:
              "Often, yes. Sometimes rearranging the furniture you already have is enough to separate living and sleeping. I only plan made-to-measure pieces where they really make a difference.",
          },
        ],
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
        name: "impulse",
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
        name: "concepts",
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
        color: "yellow",
        popular: true,
      },
      {
        name: "transformation",
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
        color: "ink",
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

  seoServices: {
    title: "Space planning, built-in furniture & interior advice in Berlin – more room for your life",
    items: [
      {
        title: "Spatial concepts & floor plan optimisation",
        text: "A baby on the way, children who need more room, or a workspace that has to fit into the living room? I develop spatial concepts that make room for your daily life – from an extra children's room to a shared sibling room with separate areas for sleeping, playing and learning. With a well-planned layout, your current flat becomes a home that grows with you.",
      },
      {
        title: "Bespoke built-in furniture & storage",
        text: "When the cupboards are full and there's no floor space left, you need ideas that make better use of your room. I design bespoke built-in furniture for small flats in Berlin: platform beds with storage, loft beds and raised sleeping levels, built-in wardrobes for alcoves, and room dividers that separate living and sleeping areas. You build it yourself, or my partner joinery does.",
      },
      {
        title: "Interior advice & interior design",
        text: "Want to refurnish your flat but unsure about furniture, colours and materials? I develop a coherent interior concept and make it tangible with moodboards and 3D visualisations – on site in Berlin or online.",
      },
    ],
  },

  faq: {
    title: "frequently asked questions",
    subtitle: "storage, built-in furniture and space planning in berlin",
    items: [
      {
        question: "My small flat is cluttered – how do I get more storage?",
        answer:
          "Usually it isn't space that's missing, but a plan that uses it. I look at where your flat is losing floor area – in alcoves, above doors, under the bed or up to the ceiling – and plan built-in wardrobes, platform beds, raised levels or shelving walls there. In my project “a new use for 10 m²”, that turned a small room into a study, guest room and storage space in one.",
      },
      {
        question: "How can I separate the living and sleeping area in one room?",
        answer:
          "With zoning: a room divider with storage, a platform bed or a raised bed platform separates the sleeping area without cluttering the room. The bed moves out of sight, and under or beside it there's room for clothes, a home office or a reading corner. My projects “room divider with bed platform” and “platform bed for small flats” are examples.",
      },
      {
        question: "Do you design bespoke built-in furniture such as platform beds, loft beds or built-in wardrobes?",
        answer:
          "Yes, that's a core part of my work. I design made-to-measure built-in furniture for small flats in Berlin: platform beds with storage, loft beds with a walk-in wardrobe, built-in wardrobes for alcoves, and room dividers. Bespoke furniture planning is included in the “transformation” package and can be added to the “concepts” package for €500–700.",
      },
      {
        question: "How much does planning with raumideenwerk cost?",
        answer:
          "The packages have fixed base prices for rooms up to 20 m²: “impulse” (online) €590, “concepts” €890 and “transformation” €1,490. Larger rooms add a surcharge per additional m². If the scope isn't clear yet, I bill by the hour at €160. Building the furniture is not included; its cost depends on size and materials.",
      },
      {
        question: "Do you also take care of the build?",
        answer:
          "You have two options: you carry out the work yourself, with the concept, a shopping list and technical drawings if needed. Or I put you in touch with my partner joinery, who builds the furniture from my plans. Technical drawings and the introduction to the joinery are already included in the “transformation” package.",
      },
      {
        question: "Do you only work in Berlin?",
        answer:
          "For consultations and surveys on site, I come to you in Berlin. The “impulse” package runs entirely online: you measure up following my instructions, wherever you live in Germany.",
      },
    ],
  },

  contact: {
    title: "contact",
    subtitle: "ready to transform your home?",
    details: [
      { label: "email", value: "mail@raumideenwerk.com", href: "mailto:mail@raumideenwerk.com" },
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
        "That didn't work. Please try again later or write directly to mail@raumideenwerk.com.",
      captchaLabel: "security question",
      captchaNew: "new question",
      captchaLoading: "loading …",
      captchaRequired: "Please solve the small sum first.",
      rateLimited:
        "A lot of messages have come from your connection just now. Please try again in an hour, or write directly to mail@raumideenwerk.com.",
    },
  },

  footer: {
    contact: [
      { href: "mailto:mail@raumideenwerk.com", label: "mail@raumideenwerk.com" },
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
    services: "service",
    gallery: "images",
    ctaTitle: "interested in something similar?",
    ctaText: "Let's talk about your home. The first call is where it starts.",
    ctaButton: { href: "/en/#kontakt", label: "book a first call" },
    prev: "previous project",
    next: "next project",
  },

  servicePage: {
    back: "all services",
    planning: "how i plan it",
    costs: "what does it cost?",
    planningCosts:
      "Planning runs through my packages, with fixed base prices for rooms up to 20 m²: “impulse” (online) €590, “concepts” €890, “transformation” €1,490. Bespoke furniture planning is included in “transformation” and can be added to “concepts” for €500–700.",
    packagesLink: { href: "/en/#pakete", label: "see all packages" },
    projects: "related projects",
    faq: "frequently asked questions",
    more: "more services",
    ctaTitle: "let's talk about your flat",
    ctaText: "In the first call we work out which solution fits your room and your daily life.",
    ctaButton: { href: "/en/#kontakt", label: "book a first call" },
  },
};
