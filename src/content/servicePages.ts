import type { Locale, ServicePagesContent } from "./types";

export const servicePages: Record<Locale, ServicePagesContent> = {
  de: {
    title: "leistungen im detail",
    items: [
      {
        slug: "einbaumoebel-stauraum",
        color: "yellow",
        label: "einbaumöbel & stauraum",
        title: "einbaumöbel nach maß in berlin",
        subtitle: "mehr stauraum für kleine wohnungen, ohne umzug",
        metaTitle: "Einbaumöbel nach Maß & Stauraum für kleine Wohnungen in Berlin",
        description: "Einbaumöbel nach Maß für kleine Wohnungen in Berlin: Einbauschränke, Podestbetten, Hochebenen und Regalwände, die Stauraum schaffen – geplant vom Architekten.",
        image: {
          src: "/room/room4/einbauschrank_stauraum_bettschrank_kleine_wohnung_berlin.webp",
          alt: "Einbauschrank mit Stauraum und Hochbett in einer kleinen Wohnung in Berlin",
        },
        intro: "Wenn die Schränke voll sind und jede Ecke zugestellt ist, liegt das selten an zu wenig Quadratmetern. Meist bleiben Nischen, Wandflächen und die Raumhöhe ungenutzt. Einbaumöbel nach Maß holen genau diesen Platz zurück: Sie passen sich dem Raum an, statt ihn mit Standardmöbeln zu füllen.",
        fit: {
          title: "wann sich einbaumöbel lohnen",
          items: [
            "Deine Schränke sind voll, und für einen weiteren ist kein Platz.",
            "Deine Wohnung hat Nischen, Vorsprünge oder Ecken, in die kein Standardmöbel passt.",
            "Die Decke ist hoch, aber der Raum darüber bleibt ungenutzt.",
            "Ein Zimmer soll mehrere Aufgaben übernehmen, zum Beispiel Arbeiten, Schlafen und Gäste.",
          ],
        },
        planning: [
          {
            title: "alltag verstehen",
            text: "Ich schaue mir an, was du verstauen musst und wie du deine Wohnung im Alltag nutzt. Daraus ergibt sich, wo Stauraum hingehört – und wo er stören würde.",
          },
          {
            title: "verlorenen platz nutzen",
            text: "Nischen, Flächen über Türen, der Platz unter dem Bett und die Höhe bis zur Decke: Dort plane ich Einbauschränke, Podeste, Hochebenen oder Regalwände.",
          },
          {
            title: "ruhig gestalten",
            text: "Einbaumöbel sollen den Raum ordnen, nicht füllen. Durchgehende Fronten und klare Kanten lassen ein Zimmer aufgeräumter und größer wirken.",
          },
          {
            title: "baubar planen",
            text: "Du bekommst technische Zeichnungen, nach denen du selbst baust oder meine Partnertischlerei ein Angebot erstellt.",
          },
        ],
        costs: "Was der Bau kostet, hängt stark von Größe, Material und Oberfläche ab. Deshalb nenne ich dafür keinen Pauschalpreis: Mit dem fertigen Konzept bekommst du ein konkretes Angebot von der Tischlerei – oder du baust selbst.",
        projects: [3, 0, 4, 5],
        faq: [
          {
            question: "Was ist der Unterschied zwischen Einbaumöbeln und normalen Möbeln?",
            answer: "Einbaumöbel werden für einen bestimmten Raum geplant und nutzen ihn bis in die Ecken und bis unter die Decke. Standardmöbel lassen dagegen Lücken, die verloren gehen. Gerade in kleinen Wohnungen macht das beim Stauraum einen großen Unterschied.",
          },
          {
            question: "Kann ich meine vorhandenen Möbel einbeziehen?",
            answer: "Ja. Oft lässt sich ein Teil des Stauraums mit vorhandenen Möbeln oder Möbeln aus dem Möbelhaus lösen, wie im Projekt „neue nutzung für 10 m²“. Einbauten nach Maß plane ich dort, wo Standardmöbel nicht passen.",
          },
          {
            question: "Baust du die Möbel selbst?",
            answer: "Nein, ich plane sie. Gebaut wird von dir selbst oder von meiner Partnertischlerei, an die ich dich vermittle.",
          },
        ],
      },
      {
        slug: "podestbett",
        color: "petrol",
        label: "podestbett",
        title: "podestbett nach maß in berlin",
        subtitle: "schlafen, verstauen und den raum zonieren",
        metaTitle: "Podestbett mit Stauraum planen lassen in Berlin",
        description: "Podestbett nach Maß für kleine Wohnungen in Berlin: mit Stauraum, der den Kleiderschrank ersetzen kann, und klarer Trennung von Wohn- und Schlafbereich.",
        image: {
          src: "/room/room11/podestbett_arbeitsplatz_altbauwohnung_studio_stauraum.webp",
          alt: "Podestbett mit Stauraum und Arbeitsplatz in einer Altbauwohnung",
        },
        intro: "Ein Podestbett hebt die Matratze auf eine Ebene, unter der viel Stauraum entsteht – oft genug, um einen Kleiderschrank zu ersetzen. Gleichzeitig gliedert es den Raum: Das Bett wird Teil eines Möbels und bestimmt nicht mehr das ganze Zimmer.",
        fit: {
          title: "wann sich ein podestbett lohnt",
          items: [
            "Du wohnst in einer 1-Zimmer-Wohnung oder einem Studio, in dem Wohnen und Schlafen in einem Raum stattfinden.",
            "Ein Kleiderschrank nimmt zu viel Platz weg oder passt gar nicht hinein.",
            "Das Bett soll beim Betreten des Zimmers nicht als Erstes ins Auge fallen.",
            "Du möchtest den Raum in Zonen gliedern, ohne Wände einzuziehen.",
          ],
        },
        planning: [
          {
            title: "höhe und zugang",
            text: "Wie hoch das Podest wird, hängt davon ab, wie viel Stauraum du brauchst und wie bequem das Ein- und Aussteigen sein soll.",
          },
          {
            title: "stauraum, der erreichbar bleibt",
            text: "Schubladen, Klappen oder offene Fächer – je nachdem, was du darin verstaust und wie oft du es brauchst.",
          },
          {
            title: "ein möbel statt eines betts",
            text: "Im Projekt „podestbett für kleine wohnungen“ wirkt das Podest wie ein langes Sideboard. So entsteht ein Schlafplatz, der nicht an ein Bett erinnert.",
          },
          {
            title: "zusammen mit dem raum",
            text: "Das Podest plane ich gemeinsam mit Arbeitsplatz, Regalen und Farbkonzept, damit der ganze Raum funktioniert.",
          },
        ],
        costs: "Die Kosten für den Bau hängen von Größe, Aufteilung des Stauraums und Material ab. Einen seriösen Preis gibt es erst mit dem fertigen Konzept – dann bekommst du ein Angebot von der Tischlerei, oder du baust selbst.",
        projects: [5, 2],
        faq: [
          {
            question: "Wie viel Stauraum bietet ein Podestbett?",
            answer: "Allein unter einer Liegefläche von 140 × 200 cm liegen fast drei Quadratmeter, die du als Stauraum nutzen kannst. Im Projekt „podestbett für kleine wohnungen“ hat das gereicht, um den Kleiderschrank zu ersetzen.",
          },
          {
            question: "Was ist der Unterschied zwischen Podestbett und Hochbett?",
            answer: "Ein Podestbett ist niedrig, der Stauraum liegt darunter in Schubladen oder Fächern. Ein Hochbett oder eine Hochebene hebt den Schlafplatz so weit an, dass darunter ein nutzbarer Bereich entsteht, etwa für einen begehbaren Kleiderschrank oder einen Arbeitsplatz. Welche Lösung passt, hängt vor allem von der Raumhöhe ab.",
          },
          {
            question: "Kann ich ein Podestbett selbst bauen?",
            answer: "Ja. Im Paket „transformation“ bekommst du technische Zeichnungen, nach denen du selbst bauen kannst. Wenn du das nicht möchtest, vermittle ich dich an meine Partnertischlerei.",
          },
        ],
      },
      {
        slug: "hochebene-hochbett",
        color: "ink",
        label: "hochebene & hochbett",
        title: "hochebene und hochbett in berlin",
        subtitle: "die raumhöhe als zusätzliche fläche nutzen",
        metaTitle: "Hochebene & Hochbett nach Maß planen lassen in Berlin",
        description: "Hochebene oder Hochbett nach Maß für kleine Wohnungen in Berlin: Die Raumhöhe wird zur zusätzlichen Fläche für Schlafplatz, Kleiderschrank oder Arbeitsplatz.",
        image: {
          src: "/room/room1/nische_berliner-zimmer_hochbett_stauraum.webp",
          alt: "Hochbett mit Regal und Stauraum in der Nische eines Berliner Zimmers",
          position: "50% 45%",
        },
        intro: "Viele Berliner Wohnungen, vor allem im Altbau, haben hohe Decken. Eine Hochebene oder ein Hochbett macht aus dieser Höhe zusätzliche Fläche: oben schlafen, darunter verstauen, arbeiten oder sich anziehen. So bekommt ein kleines Zimmer eine zweite Ebene, ohne enger zu wirken.",
        fit: {
          title: "wann sich eine hochebene lohnt",
          items: [
            "Dein Zimmer hat hohe Decken, zum Beispiel im Berliner Altbau.",
            "Du brauchst Platz zum Schlafen und für Stauraum, aber die Grundfläche reicht nicht für beides.",
            "Eine Nische oder ein Teil des Raums wird bisher kaum genutzt.",
            "Unter dem Bett soll ein begehbarer Kleiderschrank, ein Arbeitsplatz oder eine Leseecke entstehen.",
          ],
        },
        planning: [
          {
            title: "raumhöhe prüfen",
            text: "Ob eine Hochebene sinnvoll ist, entscheidet die Deckenhöhe: Oben und unten muss genug Luft bleiben, damit beide Ebenen angenehm nutzbar sind. Das prüfe ich als Erstes.",
          },
          {
            title: "sicher konstruieren",
            text: "Konstruktion, Aufstieg und Absturzsicherung gehören zur Planung. Du bekommst Zeichnungen, nach denen die Tischlerei – oder du selbst – bauen kann.",
          },
          {
            title: "die untere ebene nutzen",
            text: "Darunter entsteht ein eigener Bereich: ein begehbarer Kleiderschrank wie im Projekt „einbaumöbel für kleine apartments“ oder eine Homeoffice-Ecke wie bei „raumteiler und empore für bett“.",
          },
          {
            title: "ein möbel statt eines gerüsts",
            text: "Zum Raum hin kann die Hochebene mit einem Regal verkleidet werden. So wird sie zu einem Möbel, das den Raum ordnet, statt wie ein Gerüst zu wirken.",
          },
        ],
        costs: "Für den Bau gibt es eine große Spanne: Einfache Hochebenen werden ab etwa 2.000 € angeboten. Mit Größe, Material, Einbauten und Oberfläche – etwa einer Lackierung – kann der Preis aber auch ein Vielfaches betragen. Ein konkretes Angebot bekommst du deshalb erst auf Grundlage des fertigen Konzepts.",
        projects: [0, 3, 2],
        faq: [
          {
            question: "Was kostet eine Hochebene in Berlin?",
            answer: "Einfache Hochebenen gibt es ab etwa 2.000 €. Je nach Größe, Material, Einbauten und Oberfläche kann der Preis aber ein Vielfaches davon betragen. Dazu kommt die Planung: Die individuelle Möbelplanung ist zum Beispiel im Paket „transformation“ für 1.490 € enthalten.",
          },
          {
            question: "Wie hoch muss ein Raum für eine Hochebene sein?",
            answer: "Das hängt davon ab, wie du die beiden Ebenen nutzen willst. Zum Schlafen reicht oben weniger Höhe als für einen Arbeitsplatz darunter, an dem du aufrecht sitzen oder stehen möchtest. Hohe Altbaudecken sind ideal – ob es bei dir passt, kläre ich beim Aufmaß.",
          },
          {
            question: "Ist eine Hochebene in einer Mietwohnung möglich?",
            answer: "Oft ja, wenn sie freistehend gebaut wird und sich beim Auszug wieder abbauen lässt. Kläre das trotzdem vorher mit deinem Vermieter oder deiner Hausverwaltung – gern besprechen wir das im Erstgespräch.",
          },
        ],
      },
      {
        slug: "wohn-und-schlafbereich-trennen",
        color: "yellow",
        label: "wohn- und schlafbereich trennen",
        title: "wohn- und schlafbereich trennen",
        subtitle: "zonierung für 1-zimmer-wohnungen und studios in berlin",
        metaTitle: "Wohn- und Schlafbereich in einem Zimmer trennen – Raumplanung in Berlin",
        description: "Wohn- und Schlafbereich in einem Zimmer trennen: mit Raumteiler, Podestbett oder Empore. Zonierung für 1-Zimmer-Wohnungen und Studios in Berlin.",
        image: {
          src: "/room/room2/raumteiler_homeoffice_studio_kleine_wohnung_raumkonzept.webp",
          alt: "Raumteiler mit Empore für das Bett und Homeoffice-Ecke darunter",
          position: "50% 40%",
        },
        intro: "In einer 1-Zimmer-Wohnung oder einem Studio ist das Bett oft das Erste, was man sieht, und Wohnen, Arbeiten und Schlafen gehen ineinander über. Mit Zonierung bekommt jeder Bereich seinen Platz, ohne dass Wände eingezogen werden müssen. Das Zimmer wirkt danach ruhiger und oft sogar größer.",
        fit: {
          title: "wann sich eine zonierung lohnt",
          items: [
            "Du wohnst, schläfst und arbeitest in einem Raum.",
            "Beim Betreten des Zimmers fällt der Blick zuerst auf das Bett.",
            "Deine Gäste sitzen praktisch in deinem Schlafzimmer.",
            "Du suchst eine Trennung, die keinen Platz kostet, sondern zusätzlichen Stauraum bringt.",
          ],
        },
        planning: [
          {
            title: "zonen festlegen",
            text: "Wir klären, welche Bereiche du brauchst – Schlafen, Wohnen, Arbeiten, Ankleiden – und wo sie im Raum am besten liegen, mit Blick auf Fenster, Türen und Wege.",
          },
          {
            title: "trennen mit stauraum",
            text: "Ein Raumteiler als Regal trennt die Bereiche und nimmt gleichzeitig Bücher, Kleidung oder Technik auf. So kostet die Trennung keinen Platz, sondern schafft welchen.",
          },
          {
            title: "die höhe nutzen",
            text: "Eine Empore oder ein Podest hebt den Schlafbereich ab. Darunter entsteht Platz für Homeoffice, Leseecke oder Kleiderschrank.",
          },
          {
            title: "blickachsen planen",
            text: "Ich plane so, dass das Bett beim Hereinkommen nicht im Mittelpunkt steht. So wird aus einem Schlafzimmer mit Sofa wieder eine Wohnung.",
          },
        ],
        costs: "Eine Zonierung kann schon mit gut gestellten vorhandenen Möbeln gelingen – dann reicht oft das Paket „impuls“ oder „konzept“. Für Raumteiler, Podest oder Empore nach Maß hängen die Baukosten von Größe und Material ab; ein Angebot gibt es auf Grundlage des fertigen Konzepts.",
        projects: [2, 5, 0],
        faq: [
          {
            question: "Wie trenne ich Wohn- und Schlafbereich ohne Wand?",
            answer: "Mit einem Raumteiler, der gleichzeitig Regal oder Schrank ist, mit einem Podestbett oder mit einer Empore. Manchmal reichen auch ein Vorhang oder eine geschickte Möbelstellung. Entscheidend ist, dass jeder Bereich klar erkennbar ist und die Wege frei bleiben.",
          },
          {
            question: "Lohnt sich eine Zonierung in einem kleinen Zimmer?",
            answer: "Gerade dort. Je kleiner der Raum, desto mehr profitiert er von klaren Zonen. Im Projekt „raumteiler und empore für bett“ ist unter der Empore sogar eine zusätzliche Homeoffice-Ecke entstanden.",
          },
          {
            question: "Kann ich meine vorhandenen Möbel weiter nutzen?",
            answer: "Oft schon. Manchmal reicht eine neue Anordnung der Möbel, die du schon hast, damit Wohnen und Schlafen getrennt wirken. Einbauten nach Maß plane ich nur dort, wo sie wirklich etwas bringen.",
          },
        ],
      },
    ],
  },
  en: {
    title: "services in detail",
    items: [
      {
        slug: "built-in-furniture-storage",
        color: "yellow",
        label: "built-in furniture & storage",
        title: "bespoke built-in furniture in berlin",
        subtitle: "more storage for small flats, without moving",
        metaTitle: "Bespoke Built-in Furniture & Storage for Small Flats in Berlin",
        description: "Made-to-measure built-in furniture for small flats in Berlin: built-in wardrobes, platform beds, raised levels and shelving walls that create storage – designed by an architect.",
        image: {
          src: "/room/room4/einbauschrank_stauraum_bettschrank_kleine_wohnung_berlin.webp",
          alt: "Built-in wardrobe with storage and a loft bed in a small flat in Berlin",
        },
        intro: "When the cupboards are full and every corner is cluttered, it's rarely because there aren't enough square metres. Usually alcoves, wall space and ceiling height go unused. Made-to-measure built-in furniture wins that space back: it adapts to the room instead of filling it with standard furniture.",
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
        costs: "What the build costs depends heavily on size, materials and finish. That's why I don't give a flat price for it: once the concept is finished, you get a concrete quote from the joinery – or you build it yourself.",
        projects: [3, 0, 4, 5],
        faq: [
          {
            question: "What's the difference between built-in and regular furniture?",
            answer: "Built-in furniture is designed for one specific room and uses it right into the corners and up to the ceiling. Standard furniture leaves gaps that are lost. In small flats especially, that makes a big difference to storage.",
          },
          {
            question: "Can I include furniture I already have?",
            answer: "Yes. Part of the storage can often be solved with furniture you already own or pieces from a furniture store, as in the project “a new use for 10 m²”. I plan made-to-measure pieces where standard furniture doesn't fit.",
          },
          {
            question: "Do you build the furniture yourself?",
            answer: "No, I design it. It's built by you or by my partner joinery, which I put you in touch with.",
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
        description: "Made-to-measure platform beds for small flats in Berlin: with storage that can replace a wardrobe, and a clear separation of living and sleeping areas.",
        image: {
          src: "/room/room11/podestbett_arbeitsplatz_altbauwohnung_studio_stauraum.webp",
          alt: "Platform bed with storage and a workspace in a period flat",
        },
        intro: "A platform bed raises the mattress onto a level with plenty of storage underneath – often enough to replace a wardrobe. At the same time it structures the room: the bed becomes part of a piece of furniture and no longer dominates the whole space.",
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
        costs: "The cost of building it depends on size, the storage layout and materials. A reliable price is only possible once the concept is finished – then you get a quote from the joinery, or you build it yourself.",
        projects: [5, 2],
        faq: [
          {
            question: "How much storage does a platform bed give me?",
            answer: "Under a 140 × 200 cm mattress alone there are almost three square metres you can use for storage. In the project “platform bed for small flats”, that was enough to replace the wardrobe.",
          },
          {
            question: "What's the difference between a platform bed and a loft bed?",
            answer: "A platform bed is low, with storage underneath in drawers or compartments. A loft bed or raised level lifts the bed high enough to create a usable area below, for a walk-in wardrobe or a workspace, for example. Which one fits depends mainly on the ceiling height.",
          },
          {
            question: "Can I build a platform bed myself?",
            answer: "Yes. The “transformation” package includes technical drawings you can build from yourself. If you'd rather not, I'll put you in touch with my partner joinery.",
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
        description: "Made-to-measure raised levels and loft beds for small flats in Berlin: ceiling height becomes extra space for sleeping, a wardrobe or a workspace.",
        image: {
          src: "/room/room1/nische_berliner-zimmer_hochbett_stauraum.webp",
          alt: "Loft bed with shelving and storage in the alcove of a Berlin room",
          position: "50% 45%",
        },
        intro: "Many Berlin flats, especially in period buildings, have high ceilings. A raised level or loft bed turns that height into extra space: sleep up top, and store things, work or get dressed below. A small room gains a second level without feeling more cramped.",
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
        costs: "Build costs vary widely: simple raised levels are offered from around €2,000. Depending on size, materials, built-in elements and finish – a lacquered finish, for example – the price can be several times that. That's why you only get a concrete quote once the concept is finished.",
        projects: [0, 3, 2],
        faq: [
          {
            question: "How much does a raised level cost in Berlin?",
            answer: "Simple raised levels start at around €2,000. Depending on size, materials, built-in elements and finish, the price can be several times that. Planning comes on top: bespoke furniture planning is included in the “transformation” package for €1,490, for example.",
          },
          {
            question: "How high does a room need to be for a raised level?",
            answer: "That depends on how you want to use the two levels. Sleeping up top needs less headroom than a workspace below where you want to sit or stand upright. High period ceilings are ideal – whether it works in your flat is something I check when measuring up.",
          },
          {
            question: "Is a raised level possible in a rented flat?",
            answer: "Often, yes, if it's freestanding and can be taken down when you move out. Still, check with your landlord or property management first – we can talk it through in the first call.",
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
        description: "Separate the living and sleeping area in one room: with a room divider, platform bed or raised bed platform. Zoning for studios and one-room flats in Berlin.",
        image: {
          src: "/room/room2/raumteiler_homeoffice_studio_kleine_wohnung_raumkonzept.webp",
          alt: "Room divider with a raised bed platform and a home office corner underneath",
          position: "50% 40%",
        },
        intro: "In a studio or one-room flat, the bed is often the first thing you see, and living, working and sleeping blur into one. Zoning gives each area its own place without putting up walls. Afterwards the room feels calmer and often even larger.",
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
        costs: "Zoning can work simply by rearranging furniture you already own – then the “impulse” or “concepts” package is often enough. For a made-to-measure room divider, platform or raised level, build costs depend on size and materials; you get a quote based on the finished concept.",
        projects: [2, 5, 0],
        faq: [
          {
            question: "How do I separate living and sleeping areas without a wall?",
            answer: "With a room divider that doubles as shelving or a wardrobe, with a platform bed or with a raised bed platform. Sometimes a curtain or a clever furniture layout is enough. What matters is that each area is clearly defined and the routes stay clear.",
          },
          {
            question: "Is zoning worth it in a small room?",
            answer: "Especially there. The smaller the room, the more it gains from clear zones. In the project “room divider with bed platform”, an extra home office corner even appeared under the raised bed.",
          },
          {
            question: "Can I keep using my existing furniture?",
            answer: "Often, yes. Sometimes rearranging the furniture you already have is enough to separate living and sleeping. I only plan made-to-measure pieces where they really make a difference.",
          },
        ],
      },
    ],
  },
};
