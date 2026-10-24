import { SECTION_IDS } from "./site";
import type { Locale, ProjectsContent } from "./types";

export const projects: Record<Locale, ProjectsContent> = {
  de: {
    title: "projekte",
    subtitle: "ausgewählte raumkonzepte und individuelle einbaulösungen",
    prevLabel: "Vorherige Projekte",
    nextLabel: "Nächste Projekte",
    ctaCard: {
      number: "07",
      title: "deine wohnung",
      subtitle: "erstgespräch buchen",
      section: SECTION_IDS.contact,
    },
    items: [
      {
        slug: "raumtransformation-mit-stauraum",
        number: "01",
        year: "2025",
        color: "yellow",
        title: "raumtransformation mit stauraum",
        subtitle: "einbauelement mit zusätzlicher ebene und einer kleinen kleiderkammer",
        metaTitle: "Raumtransformation mit Stauraum",
        description: "Einbauelement mit zusätzlicher Ebene und einer kleinen Kleiderkammer für eine 1-Zimmer-Wohnung.",
        story: "Dieses Projekt wurde für eine 1-Zimmer-Wohnung entworfen und verfolgte mehrere Ziele. Eine optisch ansprechende Lösung für die Schlafmöglichkeit zu schaffen, ohne beim Betreten des Zimmers gleich den Blick auf das Bett zu lenken. Zusätzlichen Stauraum zu schaffen, da der Platz in der 1-Zimmer-Wohnung sehr begrenzt war. Mit dieser Lösung wurde das Bett über Kopfhöhe angehoben und bietet dem Bewohner die Möglichkeit, darunter viele Gegenstände und seine Kleidung zu verstauen. Die sichtbare Seite zum Zimmer wurde mit einem großen Regal verkleidet, welches zur Raumgestaltung beiträgt und gleichzeitig Stauraum bietet. Dieses Möbelstück kaschiert die Raumnische und bildet klare Kanten, gleichzeitig löst es alle bislang vorhandenen Probleme.",
        goal: "Eine Lösung für einen Wohn- und Schlafraum auf kleiner Fläche finden.",
        materials: "Buchenholz, Naturöl-Finish",
        dimensions: "Regal: 200 × 200 × 40 cm, zweite Ebene: 240 × 200 cm",
        cover: {
          src: "/room/room1/nische_berliner-zimmer_hochbett_stauraum.webp",
          alt: "Nische in einem Berliner Zimmer mit Hochbett, Regal und Stauraum",
          position: "50% 45%",
        },
        detail: {
          src: "/room/room1/problem_nische_berliner_zimmer.webp",
          alt: "Die Nische im Berliner Zimmer vor dem Umbau",
          position: "50% 55%",
        },
        gallery: [
          {
            src: "/room/room1/problem_nische_berliner_zimmer.webp",
            alt: "Die Nische im Berliner Zimmer vor dem Umbau",
          },
          {
            src: "/room/room1/entwurf_nische_bett.webp",
            alt: "Entwurf für das Hochbett in der Nische",
          },
          {
            src: "/room/room1/nische_berliner-zimmer_hochbett_stauraum.webp",
            alt: "Nische mit Hochbett, Regal und Stauraum nach dem Umbau",
          },
        ],
      },
      {
        slug: "minimalistisches-sideboard",
        number: "02",
        year: "2024",
        color: "ink",
        title: "minimalistisches sideboard",
        subtitle: "elegante und funktionale aufbewahrung für moderne wohnräume",
        metaTitle: "Minimalistisches Sideboard aus Akazienholz",
        description: "Sideboard im Mid-Century-Stil aus Akazienholz mit Hairpin-Stahlfüßen: Stauraum für Bücher, Elektronik und persönliche Dinge.",
        story: "Entworfen als Sideboard für das Wohnzimmer. Schlankes Mid-Century-Modern-Design, das Funktionalität und Ästhetik vereint. Das Sideboard bietet großzügigen Stauraum für Bücher, Elektronik und persönliche Gegenstände. Die Kombination aus warmem Akazienholz und Stahlfüßen schafft einen eleganten Kontrast, der sich nahtlos in moderne Wohnräume einfügt. Dieses Möbelstück ist nicht nur funktional, sondern auch ein stilvolles Statement in jedem Raum.",
        goal: "Ein elegantes Möbelstück für einen Wohnbereich schaffen.",
        materials: "Akazienholz Nussbaum, Hairpin-Stahlfüße",
        dimensions: "135 × 40 × 80 cm",
        cover: {
          src: "/furniture/quadra/moebeldesign_akazienholz_sideboard_wide.webp",
          alt: "Sideboard aus Akazienholz mit Hairpin-Stahlfüßen",
        },
        detail: {
          src: "/furniture/quadra/massgeschneiderte_moebel_detail_altbau.webp",
          alt: "Detail des Sideboards im Altbau",
          position: "50% 60%",
        },
        gallery: [
          {
            src: "/furniture/quadra/moebelbau_akazien_sideboard_schrank.webp",
            alt: "Sideboard aus Akazienholz im Wohnzimmer",
          },
          {
            src: "/furniture/quadra/massgeschneiderte_moebel_detail_altbau.webp",
            alt: "Detail der Verarbeitung",
          },
          {
            src: "/furniture/quadra/sideboard_hochwertig_altbau_mid-century.webp",
            alt: "Sideboard im Mid-Century-Stil in einer Altbauwohnung",
          },
        ],
      },
      {
        slug: "raumteiler-und-empore-fuer-bett",
        number: "03",
        year: "2025",
        color: "petrol",
        title: "raumteiler und empore für bett",
        subtitle: "einbaulösung für die zonierung von wohn- und schlafbereich",
        metaTitle: "Raumteiler und Empore für das Bett",
        description: "Eine Einbaulösung für die Zonierung eines Wohn- und Schlafzimmers: Raumteiler mit Stauraum und Empore für das Bett.",
        story: "Dieses Möbelstück wurde für eine kompakte Wohnung entworfen, in der Wohn- und Schlafbereich klar voneinander getrennt werden sollten. Der Raumteiler bietet nicht nur Sichtschutz, sondern auch zusätzlichen Stauraum. Die integrierte Empore für das Bett schafft eine gemütliche Schlafnische und nutzt den vertikalen Raum optimal aus. Das Design kombiniert Funktionalität mit einem modernen Look, der den Raum zoniert und gleichzeitig eine klare Struktur schafft. Zudem ist unter der neu geschaffenen Ebene ein Raum entstanden, der als Ecke für Homeoffice oder gemütliche Leseecke genutzt werden kann.",
        goal: "Wohn- und Schlafbereich voneinander trennen und elegant in den Raum einbinden.",
        materials: "Fichtenholz, schwarz lackiert",
        dimensions: "Bett: 140 × 200 cm, Regal: 140 × 40 × 200 cm",
        cover: {
          src: "/room/room2/raumteiler_homeoffice_studio_kleine_wohnung_raumkonzept.webp",
          alt: "Raumteiler mit Homeoffice-Ecke unter der Empore",
          position: "50% 40%",
        },
        detail: {
          src: "/room/room2/wgzimmer_entwurf_altbauwohnung_raumkonzept.webp",
          alt: "Entwurf des Raumkonzepts für das Zimmer",
          position: "50% 50%",
        },
        gallery: [
          {
            src: "/room/room2/wgzimmer_berlin_kleiderschrank.webp",
            alt: "Das Zimmer vor dem Umbau",
          },
          {
            src: "/room/room2/wgzimmer_entwurf_altbauwohnung_raumkonzept.webp",
            alt: "Entwurf des Raumkonzepts",
          },
          {
            src: "/room/room2/raumteiler_homeoffice_studio_kleine_wohnung_raumkonzept.webp",
            alt: "Raumteiler mit Empore und Homeoffice-Ecke nach dem Umbau",
          },
        ],
      },
      {
        slug: "hochbett-kleiderschrank-wohnwand",
        number: "04",
        year: "2025",
        color: "yellow",
        title: "einbaumöbel für kleine apartments",
        subtitle: "begehbarer kleiderschrank, wohnwand und hochbett in einem",
        metaTitle: "Hochbett mit begehbarem Kleiderschrank und Wohnwand",
        description: "Eine multifunktionale Einbaulösung für einen kombinierten Wohn- und Schlafbereich: Hochbett, begehbarer Kleiderschrank und Wohnwand.",
        story: "Dieses Möbelstück wurde für eine kompakte Wohnung entworfen, in der zusätzlicher Stauraum unterhalb des Hochbetts entstehen sollte. Das Design kombiniert Funktionalität mit einem modernen Look, der den Raum zoniert und gleichzeitig eine klare Struktur schafft. Unter der neu geschaffenen Ebene ist ein Raum entstanden, der sowohl als begehbarer Kleiderschrank als auch als Wohnwand funktioniert. Dadurch wird der Raum strukturiert und wirkt deutlich aufgeräumter als zuvor.",
        materials: "Melaminharzbeschichtetes Sperrholz",
        dimensions: "Bett: 160 × 200 cm, Höhe: 200 cm",
        cover: {
          src: "/room/room4/einbauschrank_stauraum_bettschrank_kleine_wohnung_berlin.webp",
          alt: "Einbauschrank mit Stauraum und Hochbett in einer kleinen Wohnung in Berlin",
        },
        detail: {
          src: "/room/room4/zimmer_unordnung_schraenke_stauraum.webp",
          alt: "Das Zimmer vor dem Umbau mit einzelnen Schränken",
        },
        gallery: [
          {
            src: "/room/room4/zimmer_unordnung_schraenke_stauraum.webp",
            alt: "Das Zimmer vor dem Umbau mit einzelnen Schränken",
          },
          {
            src: "/room/room4/studio_designloesung_raumbildend_einbauschrank.webp",
            alt: "Entwurf für den raumbildenden Einbauschrank",
          },
          {
            src: "/room/room4/einbauschrank_stauraum_bettschrank_kleine_wohnung_berlin.webp",
            alt: "Einbauschrank mit Hochbett nach dem Umbau",
          },
        ],
      },
      {
        slug: "neue-nutzung-fuer-10-qm-zimmer",
        number: "05",
        year: "2026",
        color: "ink",
        title: "neue nutzung für 10 m²",
        subtitle: "arbeitszimmer, gästezimmer und stauraum in einem raum",
        metaTitle: "Neue Nutzung für ein 10-m²-Zimmer",
        description: "Raumkonzept für ein 10 m² kleines Zimmer, das jetzt als Arbeitszimmer, Gästezimmer und Stauraum funktioniert.",
        story: "Obwohl der Raum nur 10 m² groß ist, wurde er so umgestaltet, dass er als Arbeitszimmer, Gästezimmer und Stauraum genutzt werden kann. Durch die clevere Anordnung der Möbel und die Nutzung des vertikalen Raums oberhalb der Tür konnte eine funktionale Lösung geschaffen werden. Sie wird den Bedürfnissen der Bewohner gerecht, schafft Platz zum Arbeiten, für Gäste, zum Lesen und für die Aufbewahrung und entlastet so die anderen Zimmer der Wohnung.",
        goal: "Stauraum schaffen, Zonen erstellen und den Raum für mehrere Zwecke nutzbar machen.",
        materials: "Individuelle Holzplatte als Schreibtisch, Regal und Stauraum aus dem Möbelhaus",
        dimensions: "Schreibtisch: ca. 170 × 65 cm",
        cover: {
          src: "/room/room13/kleines_arbeitszimmer_nachher_1.webp",
          alt: "Kleines Arbeitszimmer mit Schreibtisch und Stauraum nach dem Umbau",
        },
        detail: {
          src: "/room/room13/kleines_arbeitszimmer_vorher_1.webp",
          alt: "Das Zimmer vor dem Umbau",
        },
        gallery: [
          {
            src: "/room/room13/kleines_arbeitszimmer_vorher_1.webp",
            alt: "Arbeitsbereich vor dem Umbau",
          },
          {
            src: "/room/room13/kleines_arbeitszimmer_nachher_1.webp",
            alt: "Arbeitsbereich nach dem Umbau",
          },
          {
            src: "/room/room13/gaestezimmer_stauraum_vorher_2.webp",
            alt: "Gäste- und Stauraumbereich vor dem Umbau",
          },
          {
            src: "/room/room13/gaestezimmer_stauraum_nachher_2.webp",
            alt: "Gäste- und Stauraumbereich nach dem Umbau",
          },
        ],
      },
      {
        slug: "podestbett-fuer-kleine-wohnungen",
        number: "06",
        year: "2025",
        color: "petrol",
        title: "podestbett für kleine wohnungen",
        subtitle: "kombinierte lösung aus kleiderschrank und bett",
        metaTitle: "Podestbett mit Kleiderschrank für kleine Wohnungen",
        description: "Plattformbett mit integriertem Stauraum, das einen Kleiderschrank ersetzt und Wohn- und Schlafbereich trennt.",
        story: "Dieses Möbelstück wurde für eine kompakte Wohnung entworfen, um den Fokus vom Bett zu lenken. Das Podest bietet viel zusätzlichen Stauraum und ersetzt einen Kleiderschrank. Das Design gleicht einem langen Sideboard und schafft Platz für eine Matratze, ohne direkt an ein Bett zu erinnern. Dadurch wirkt der Raum deutlich aufgeräumter als zuvor.",
        goal: "Wohn- und Schlafbereich voneinander trennen und elegant in den Raum einbinden.",
        materials: "Melaminharzbeschichtetes Sperrholz",
        dimensions: "Bett: 140 × 200 cm",
        cover: {
          src: "/room/room11/podestbett_arbeitsplatz_altbauwohnung_studio_stauraum.webp",
          alt: "Podestbett mit Arbeitsplatz in einer Altbauwohnung",
        },
        detail: {
          src: "/room/room11/studio_bett_stauraumproblem_kleine_wohnung.webp",
          alt: "Das Zimmer vor dem Umbau mit zu wenig Stauraum",
        },
        gallery: [
          {
            src: "/room/room11/studio_bett_stauraumproblem_kleine_wohnung.webp",
            alt: "Das Zimmer vor dem Umbau mit zu wenig Stauraum",
          },
          {
            src: "/room/room11/wgzimmer_dunkel_schreibtisch_wohnbereich.webp",
            alt: "Wohn- und Arbeitsbereich vor dem Umbau",
          },
          {
            src: "/room/room11/kleine-wohnung_design_entwurf_podestbett.webp",
            alt: "Entwurf für das Podestbett",
          },
          {
            src: "/room/room11/zimmer_design_podestbett.webp",
            alt: "Visualisierung des Zimmers mit Podestbett",
          },
          {
            src: "/room/room11/podestbett_arbeitsplatz_altbauwohnung_studio_stauraum.webp",
            alt: "Podestbett mit Arbeitsplatz nach dem Umbau",
          },
          {
            src: "/room/room11/podestbett_stauraum_homeoffice_raumkonzept_farbkonzept.webp",
            alt: "Podestbett mit Stauraum und Homeoffice im Farbkonzept",
          },
        ],
      },
    ],
  },
  en: {
    title: "projects",
    subtitle: "selected spatial concepts and bespoke built-in solutions",
    prevLabel: "Previous projects",
    nextLabel: "Next projects",
    ctaCard: {
      number: "07",
      title: "your flat",
      subtitle: "book a first call",
      section: SECTION_IDS.contact,
    },
    items: [
      {
        slug: "room-transformation-with-storage",
        number: "01",
        year: "2025",
        color: "yellow",
        title: "room transformation with storage",
        subtitle: "a built-in element with an extra level and a small walk-in wardrobe",
        metaTitle: "Room Transformation with Storage",
        description: "A built-in element with an extra level and a small walk-in wardrobe for a one-room flat.",
        story: "This project was designed for a one-room flat and had several goals. To find a visually appealing solution for the sleeping area without the bed being the first thing you see on entering. And to create additional storage, because space in a one-room flat is tight. The bed was raised above head height, which lets the resident store plenty of belongings and clothes underneath. The side facing the room was clad with a large shelf that shapes the space and provides storage at the same time. The piece conceals the alcove and creates clean edges, while solving every problem the room had.",
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
        description: "A mid-century sideboard in acacia with hairpin steel legs: storage for books, electronics and personal belongings.",
        story: "Designed as a sideboard for the living room. A slim mid-century modern design that brings together function and aesthetics. The sideboard offers generous storage for books, electronics and personal belongings. The combination of warm acacia and steel legs creates an elegant contrast that fits seamlessly into modern interiors. The piece is not only practical but also a stylish statement in any room.",
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
        description: "A built-in solution that zones a combined living and sleeping room: a room divider with storage and a raised platform for the bed.",
        story: "This piece was designed for a compact flat where the living and sleeping areas needed to be clearly separated. The divider provides not only privacy but also extra storage. The integrated platform creates a snug sleeping nook and makes the most of the vertical space. The design combines function with a modern look that zones the room and gives it a clear structure. Underneath the new level, a space emerged that works as a home office corner or a comfortable reading spot.",
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
        description: "A multifunctional built-in solution for a combined living and sleeping area: loft bed, walk-in wardrobe and media wall.",
        story: "This piece was designed for a compact flat where additional storage was to be created beneath a loft bed. The design combines function with a modern look that zones the room and gives it a clear structure. Underneath the new level, a space emerged that works both as a walk-in wardrobe and as a media wall. The room now reads as structured and far tidier than before.",
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
        description: "A spatial concept for a 10 m² room that now works as a study, a guest room and storage.",
        story: "Although the room measures only 10 m², it was reworked so that it serves as a study, a guest room and storage. A clever furniture layout and the use of the vertical space above the door made a functional solution possible. It meets the residents' needs, creates room to work, to host guests, to read and to store things, and takes the pressure off the other rooms in the flat.",
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
        description: "A platform bed with integrated storage that replaces a wardrobe and separates the living and sleeping areas.",
        story: "This piece was designed for a compact flat in order to draw attention away from the bed. The platform offers a great deal of extra storage and replaces a wardrobe. The design resembles a long sideboard and makes room for a mattress without immediately reading as a bed. The room now feels considerably tidier than before.",
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
    ],
  },
};
