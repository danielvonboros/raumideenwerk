import type { Project, SiteContent } from "./types";

const projects: Project[] = [
  {
    slug: "raumtransformation-mit-stauraum",
    number: "01",
    year: "2025",
    color: "yellow",
    title: "raumtransformation mit stauraum",
    subtitle: "einbauelement mit zusätzlicher ebene und einer kleinen kleiderkammer",
    metaTitle: "Raumtransformation mit Stauraum",
    description:
      "Einbauelement mit zusätzlicher Ebene und einer kleinen Kleiderkammer für eine 1-Zimmer-Wohnung.",
    story:
      "Dieses Projekt wurde für eine 1-Zimmer-Wohnung entworfen und verfolgte mehrere Ziele. Eine optisch ansprechende Lösung für die Schlafmöglichkeit zu schaffen, ohne beim Betreten des Zimmers gleich den Blick auf das Bett zu lenken. Zusätzlichen Stauraum zu schaffen, da der Platz in der 1-Zimmer-Wohnung sehr begrenzt war. Mit dieser Lösung wurde das Bett über Kopfhöhe angehoben und bietet dem Bewohner die Möglichkeit, darunter viele Gegenstände und seine Kleidung zu verstauen. Die sichtbare Seite zum Zimmer wurde mit einem großen Regal verkleidet, welches zur Raumgestaltung beiträgt und gleichzeitig Stauraum bietet. Dieses Möbelstück kaschiert die Raumnische und bildet klare Kanten, gleichzeitig löst es alle bislang vorhandenen Probleme.",
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
    description:
      "Sideboard im Mid-Century-Stil aus Akazienholz mit Hairpin-Stahlfüßen: Stauraum für Bücher, Elektronik und persönliche Dinge.",
    story:
      "Entworfen als Sideboard für das Wohnzimmer. Schlankes Mid-Century-Modern-Design, das Funktionalität und Ästhetik vereint. Das Sideboard bietet großzügigen Stauraum für Bücher, Elektronik und persönliche Gegenstände. Die Kombination aus warmem Akazienholz und Stahlfüßen schafft einen eleganten Kontrast, der sich nahtlos in moderne Wohnräume einfügt. Dieses Möbelstück ist nicht nur funktional, sondern auch ein stilvolles Statement in jedem Raum.",
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
    description:
      "Eine Einbaulösung für die Zonierung eines Wohn- und Schlafzimmers: Raumteiler mit Stauraum und Empore für das Bett.",
    story:
      "Dieses Möbelstück wurde für eine kompakte Wohnung entworfen, in der Wohn- und Schlafbereich klar voneinander getrennt werden sollten. Der Raumteiler bietet nicht nur Sichtschutz, sondern auch zusätzlichen Stauraum. Die integrierte Empore für das Bett schafft eine gemütliche Schlafnische und nutzt den vertikalen Raum optimal aus. Das Design kombiniert Funktionalität mit einem modernen Look, der den Raum zoniert und gleichzeitig eine klare Struktur schafft. Zudem ist unter der neu geschaffenen Ebene ein Raum entstanden, der als Ecke für Homeoffice oder gemütliche Leseecke genutzt werden kann.",
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
    description:
      "Eine multifunktionale Einbaulösung für einen kombinierten Wohn- und Schlafbereich: Hochbett, begehbarer Kleiderschrank und Wohnwand.",
    story:
      "Dieses Möbelstück wurde für eine kompakte Wohnung entworfen, in der zusätzlicher Stauraum unterhalb des Hochbetts entstehen sollte. Das Design kombiniert Funktionalität mit einem modernen Look, der den Raum zoniert und gleichzeitig eine klare Struktur schafft. Unter der neu geschaffenen Ebene ist ein Raum entstanden, der sowohl als begehbarer Kleiderschrank als auch als Wohnwand funktioniert. Dadurch wird der Raum strukturiert und wirkt deutlich aufgeräumter als zuvor.",
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
    description:
      "Raumkonzept für ein 10 m² kleines Zimmer, das jetzt als Arbeitszimmer, Gästezimmer und Stauraum funktioniert.",
    story:
      "Obwohl der Raum nur 10 m² groß ist, wurde er so umgestaltet, dass er als Arbeitszimmer, Gästezimmer und Stauraum genutzt werden kann. Durch die clevere Anordnung der Möbel und die Nutzung des vertikalen Raums oberhalb der Tür konnte eine funktionale Lösung geschaffen werden. Sie wird den Bedürfnissen der Bewohner gerecht, schafft Platz zum Arbeiten, für Gäste, zum Lesen und für die Aufbewahrung und entlastet so die anderen Zimmer der Wohnung.",
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
    description:
      "Plattformbett mit integriertem Stauraum, das einen Kleiderschrank ersetzt und Wohn- und Schlafbereich trennt.",
    story:
      "Dieses Möbelstück wurde für eine kompakte Wohnung entworfen, um den Fokus vom Bett zu lenken. Das Podest bietet viel zusätzlichen Stauraum und ersetzt einen Kleiderschrank. Das Design gleicht einem langen Sideboard und schafft Platz für eine Matratze, ohne direkt an ein Bett zu erinnern. Dadurch wirkt der Raum deutlich aufgeräumter als zuvor.",
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
];

export const de: SiteContent = {
  skipLink: "zum inhalt springen",
  nav: [
    { href: "/#projekte", label: "projekte" },
    { href: "/#leistungen", label: "leistungen" },
    { href: "/#ablauf", label: "ablauf" },
    { href: "/#pakete", label: "pakete" },
    { href: "/#ueber-mich", label: "über mich" },
    { href: "/#kontakt", label: "kontakt" },
  ],
  headerCta: { href: "/#kontakt", label: "erstgespräch buchen" },
  menu: { open: "Menü öffnen", close: "Menü schließen" },

  hero: {
    spine: ["raumideenwerk", "berlin"],
    claim: "mehr raum ohne umzug.",
    keywords: "innenarchitektur und raumplanung für kleine wohnungen in berlin",
    primaryCta: { href: "/#kontakt", label: "erstgespräch buchen" },
    secondaryCta: { href: "/#projekte", label: "projekte ansehen" },
    imageTop: {
      src: "/room/room11/podestbett_stauraum_homeoffice_raumkonzept_farbkonzept.webp",
      alt: "Zimmer mit Podestbett, Stauraum und Arbeitsplatz",
      position: "50% 55%",
    },
    imageBottom: {
      src: "/room/room13/kleines_arbeitszimmer_nachher_1.webp",
      alt: "Kleines Arbeitszimmer mit Regal und Schreibtisch",
      position: "50% 60%",
    },
  },

  projects: {
    title: "projekte",
    subtitle: "ausgewählte raumkonzepte und individuelle einbaulösungen",
    prevLabel: "Vorherige Projekte",
    nextLabel: "Nächste Projekte",
    ctaCard: {
      number: "07",
      title: "deine wohnung",
      subtitle: "erstgespräch buchen",
      href: "/#kontakt",
    },
    items: projects,
  },

  services: {
    title: "meine leistungen",
    subtitle: "smart space. better living.",
    items: [
      {
        title: "raumgestaltung & innenarchitektur",
        text: "Ich habe mich darauf spezialisiert, bestehende Räume in funktionale, ästhetische und personalisierte Lebensräume zu verwandeln.",
      },
      {
        title: "raumoptimierung ohne umzug",
        text: "Anstatt umzuziehen, helfe ich Menschen, das Beste aus dem aktuellen Zuhause herauszuholen – durch clevere Umorganisation, durchdachte Zonierung und maßgeschneiderte Möbel-Lösungen.",
      },
      {
        title: "raumkonzepte und einbaulösungen",
        text: "Jedes Konzept wird auf den Lebensstil der Kunden zugeschnitten und verbindet Praktikabilität mit zeitlosem Design.",
      },
      {
        title: "optimierte nutzung und verbessertes raumgefühl",
        text: "Das Ergebnis: Wohnräume, die größer wirken, besser funktionieren und die Menschen, die in ihnen leben, wirklich widerspiegeln.",
      },
    ],
  },

  servicePages: {
    title: "leistungen im detail",
    items: [
      {
        slug: "einbaumoebel-stauraum",
        color: "yellow",
        label: "einbaumöbel & stauraum",
        title: "einbaumöbel nach maß in berlin",
        subtitle: "mehr stauraum für kleine wohnungen, ohne umzug",
        metaTitle: "Einbaumöbel nach Maß & Stauraum für kleine Wohnungen in Berlin",
        description:
          "Einbaumöbel nach Maß für kleine Wohnungen in Berlin: Einbauschränke, Podestbetten, Hochebenen und Regalwände, die Stauraum schaffen – geplant vom Architekten.",
        image: {
          src: "/room/room4/einbauschrank_stauraum_bettschrank_kleine_wohnung_berlin.webp",
          alt: "Einbauschrank mit Stauraum und Hochbett in einer kleinen Wohnung in Berlin",
        },
        intro:
          "Wenn die Schränke voll sind und jede Ecke zugestellt ist, liegt das selten an zu wenig Quadratmetern. Meist bleiben Nischen, Wandflächen und die Raumhöhe ungenutzt. Einbaumöbel nach Maß holen genau diesen Platz zurück: Sie passen sich dem Raum an, statt ihn mit Standardmöbeln zu füllen.",
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
        costs:
          "Was der Bau kostet, hängt stark von Größe, Material und Oberfläche ab. Deshalb nenne ich dafür keinen Pauschalpreis: Mit dem fertigen Konzept bekommst du ein konkretes Angebot von der Tischlerei – oder du baust selbst.",
        projects: [3, 0, 4, 5],
        faq: [
          {
            question: "Was ist der Unterschied zwischen Einbaumöbeln und normalen Möbeln?",
            answer:
              "Einbaumöbel werden für einen bestimmten Raum geplant und nutzen ihn bis in die Ecken und bis unter die Decke. Standardmöbel lassen dagegen Lücken, die verloren gehen. Gerade in kleinen Wohnungen macht das beim Stauraum einen großen Unterschied.",
          },
          {
            question: "Kann ich meine vorhandenen Möbel einbeziehen?",
            answer:
              "Ja. Oft lässt sich ein Teil des Stauraums mit vorhandenen Möbeln oder Möbeln aus dem Möbelhaus lösen, wie im Projekt „neue nutzung für 10 m²“. Einbauten nach Maß plane ich dort, wo Standardmöbel nicht passen.",
          },
          {
            question: "Baust du die Möbel selbst?",
            answer:
              "Nein, ich plane sie. Gebaut wird von dir selbst oder von meiner Partnertischlerei, an die ich dich vermittle.",
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
        description:
          "Podestbett nach Maß für kleine Wohnungen in Berlin: mit Stauraum, der den Kleiderschrank ersetzen kann, und klarer Trennung von Wohn- und Schlafbereich.",
        image: {
          src: "/room/room11/podestbett_arbeitsplatz_altbauwohnung_studio_stauraum.webp",
          alt: "Podestbett mit Stauraum und Arbeitsplatz in einer Altbauwohnung",
        },
        intro:
          "Ein Podestbett hebt die Matratze auf eine Ebene, unter der viel Stauraum entsteht – oft genug, um einen Kleiderschrank zu ersetzen. Gleichzeitig gliedert es den Raum: Das Bett wird Teil eines Möbels und bestimmt nicht mehr das ganze Zimmer.",
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
        costs:
          "Die Kosten für den Bau hängen von Größe, Aufteilung des Stauraums und Material ab. Einen seriösen Preis gibt es erst mit dem fertigen Konzept – dann bekommst du ein Angebot von der Tischlerei, oder du baust selbst.",
        projects: [5, 2],
        faq: [
          {
            question: "Wie viel Stauraum bietet ein Podestbett?",
            answer:
              "Allein unter einer Liegefläche von 140 × 200 cm liegen fast drei Quadratmeter, die du als Stauraum nutzen kannst. Im Projekt „podestbett für kleine wohnungen“ hat das gereicht, um den Kleiderschrank zu ersetzen.",
          },
          {
            question: "Was ist der Unterschied zwischen Podestbett und Hochbett?",
            answer:
              "Ein Podestbett ist niedrig, der Stauraum liegt darunter in Schubladen oder Fächern. Ein Hochbett oder eine Hochebene hebt den Schlafplatz so weit an, dass darunter ein nutzbarer Bereich entsteht, etwa für einen begehbaren Kleiderschrank oder einen Arbeitsplatz. Welche Lösung passt, hängt vor allem von der Raumhöhe ab.",
          },
          {
            question: "Kann ich ein Podestbett selbst bauen?",
            answer:
              "Ja. Im Paket „transformation“ bekommst du technische Zeichnungen, nach denen du selbst bauen kannst. Wenn du das nicht möchtest, vermittle ich dich an meine Partnertischlerei.",
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
        description:
          "Hochebene oder Hochbett nach Maß für kleine Wohnungen in Berlin: Die Raumhöhe wird zur zusätzlichen Fläche für Schlafplatz, Kleiderschrank oder Arbeitsplatz.",
        image: {
          src: "/room/room1/nische_berliner-zimmer_hochbett_stauraum.webp",
          alt: "Hochbett mit Regal und Stauraum in der Nische eines Berliner Zimmers",
          position: "50% 45%",
        },
        intro:
          "Viele Berliner Wohnungen, vor allem im Altbau, haben hohe Decken. Eine Hochebene oder ein Hochbett macht aus dieser Höhe zusätzliche Fläche: oben schlafen, darunter verstauen, arbeiten oder sich anziehen. So bekommt ein kleines Zimmer eine zweite Ebene, ohne enger zu wirken.",
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
        costs:
          "Für den Bau gibt es eine große Spanne: Einfache Hochebenen werden ab etwa 2.000 € angeboten. Mit Größe, Material, Einbauten und Oberfläche – etwa einer Lackierung – kann der Preis aber auch ein Vielfaches betragen. Ein konkretes Angebot bekommst du deshalb erst auf Grundlage des fertigen Konzepts.",
        projects: [0, 3, 2],
        faq: [
          {
            question: "Was kostet eine Hochebene in Berlin?",
            answer:
              "Einfache Hochebenen gibt es ab etwa 2.000 €. Je nach Größe, Material, Einbauten und Oberfläche kann der Preis aber ein Vielfaches davon betragen. Dazu kommt die Planung: Die individuelle Möbelplanung ist zum Beispiel im Paket „transformation“ für 1.490 € enthalten.",
          },
          {
            question: "Wie hoch muss ein Raum für eine Hochebene sein?",
            answer:
              "Das hängt davon ab, wie du die beiden Ebenen nutzen willst. Zum Schlafen reicht oben weniger Höhe als für einen Arbeitsplatz darunter, an dem du aufrecht sitzen oder stehen möchtest. Hohe Altbaudecken sind ideal – ob es bei dir passt, kläre ich beim Aufmaß.",
          },
          {
            question: "Ist eine Hochebene in einer Mietwohnung möglich?",
            answer:
              "Oft ja, wenn sie freistehend gebaut wird und sich beim Auszug wieder abbauen lässt. Kläre das trotzdem vorher mit deinem Vermieter oder deiner Hausverwaltung – gern besprechen wir das im Erstgespräch.",
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
        description:
          "Wohn- und Schlafbereich in einem Zimmer trennen: mit Raumteiler, Podestbett oder Empore. Zonierung für 1-Zimmer-Wohnungen und Studios in Berlin.",
        image: {
          src: "/room/room2/raumteiler_homeoffice_studio_kleine_wohnung_raumkonzept.webp",
          alt: "Raumteiler mit Empore für das Bett und Homeoffice-Ecke darunter",
          position: "50% 40%",
        },
        intro:
          "In einer 1-Zimmer-Wohnung oder einem Studio ist das Bett oft das Erste, was man sieht, und Wohnen, Arbeiten und Schlafen gehen ineinander über. Mit Zonierung bekommt jeder Bereich seinen Platz, ohne dass Wände eingezogen werden müssen. Das Zimmer wirkt danach ruhiger und oft sogar größer.",
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
        costs:
          "Eine Zonierung kann schon mit gut gestellten vorhandenen Möbeln gelingen – dann reicht oft das Paket „impuls“ oder „konzept“. Für Raumteiler, Podest oder Empore nach Maß hängen die Baukosten von Größe und Material ab; ein Angebot gibt es auf Grundlage des fertigen Konzepts.",
        projects: [2, 5, 0],
        faq: [
          {
            question: "Wie trenne ich Wohn- und Schlafbereich ohne Wand?",
            answer:
              "Mit einem Raumteiler, der gleichzeitig Regal oder Schrank ist, mit einem Podestbett oder mit einer Empore. Manchmal reichen auch ein Vorhang oder eine geschickte Möbelstellung. Entscheidend ist, dass jeder Bereich klar erkennbar ist und die Wege frei bleiben.",
          },
          {
            question: "Lohnt sich eine Zonierung in einem kleinen Zimmer?",
            answer:
              "Gerade dort. Je kleiner der Raum, desto mehr profitiert er von klaren Zonen. Im Projekt „raumteiler und empore für bett“ ist unter der Empore sogar eine zusätzliche Homeoffice-Ecke entstanden.",
          },
          {
            question: "Kann ich meine vorhandenen Möbel weiter nutzen?",
            answer:
              "Oft schon. Manchmal reicht eine neue Anordnung der Möbel, die du schon hast, damit Wohnen und Schlafen getrennt wirken. Einbauten nach Maß plane ich nur dort, wo sie wirklich etwas bringen.",
          },
        ],
      },
    ],
  },

  painPoints: {
    title: "kommt dir das bekannt vor?",
    items: [
      {
        title: "kleine wohnung in berlin",
        text: "Du hast wenig Quadratmeter, aber viele Bedürfnisse? Ich zeige dir, wie du ohne Umzug mehr aus deiner Wohnung holst.",
      },
      {
        title: "platzmangel & kein stauraum",
        text: "Kein Platz für alles? Clevere Einbaulösungen schaffen Stauraum, wo du ihn nicht erwartest.",
      },
      {
        title: "kinderzimmer zu klein",
        text: "Zwei Kinder, ein Zimmer — das geht. Mit der richtigen Planung wird aus Chaos ein funktionaler Wohntraum.",
      },
      {
        title: "wohntraum ohne umzug",
        text: "Eine größere Wohnung kostet in Berlin ein Vermögen. Ich helfe dir, in deiner jetzigen Wohnung zu bleiben — und sie zu lieben.",
      },
    ],
  },

  process: {
    title: "ablauf",
    subtitle: "so arbeiten wir zusammen",
    steps: [
      {
        title: "erstgespräch",
        text: "Wir sprechen über deinen Alltag und darüber, was in der Wohnung gerade nicht funktioniert.",
      },
      {
        title: "aufmaß",
        text: "Du misst selbst nach meiner Anleitung, oder ich komme vorbei und nehme den Bestand auf.",
      },
      {
        title: "konzept",
        text: "Zonen, Stauraum und Einbauten, als Grundriss, Skizze oder Visualisierung.",
      },
      {
        title: "umsetzung",
        text: "Du baust selbst um, oder ich vermittle dich an meine Partnertischlerei.",
      },
    ],
  },

  packages: {
    title: "pakete",
    subtitle: "grundpreise für räume bis 20 m²",
    popularLabel: "am beliebtesten",
    addOnsLabel: "zusätzlich buchbar",
    items: [
      {
        name: "impuls",
        kind: "online paket",
        price: "590 €",
        surcharge: "ab 20 m²: +30 € pro weiterem m²",
        description:
          "Das Paket für Inspirationen und Ideen für deine Räume. Für Räume bis 20 m². Online-Beratung.",
        features: [
          "Designberatung",
          "Stilberatung",
          "Raumberatung",
          "Materialvorschläge",
          "Grober Grundriss",
          "Aufmaß durch dich",
        ],
        cta: "impulse buchen",
        color: "petrol",
      },
      {
        name: "konzept",
        kind: "profi-paket",
        price: "890 €",
        surcharge: "ab 20 m²: +45 € pro weiterem m²",
        description:
          "Das Rundum-Paket für Räume von 15 bis 20 m². Das Konzept zum Umbau deines Wohnraums in Eigenregie, mit Beratung vor Ort in Berlin.",
        features: [
          "Designberatung",
          "Stilkonzept",
          "Raumkonzept",
          "Materialberatung",
          "Moodboard",
          "Shoppingliste",
          "Perspektivische Skizze",
        ],
        addOns: [
          { name: "Individuelle Möbelplanung", price: "500–700 €" },
          { name: "Fotorealistische Visualisierung", price: "150 €" },
        ],
        cta: "konzepte wählen",
        color: "yellow",
        popular: true,
      },
      {
        name: "transformation",
        kind: "komplettlösung",
        price: "1.490 €",
        surcharge: "ab 20 m²: +75 € pro weiterem m²",
        description:
          "Das Sorglos-Paket für die Verwandlung deines Wohnraums, mit 3D-Visualisierung und Aufmaß vor Ort in Berlin. Für Räume bis 20 m².",
        features: [
          "Alles aus Raum Konzepte",
          "Individuelle Möbelplanung, inklusive",
          "Fotorealistische Visualisierung, inklusive",
          "Aufmaß vor Ort",
          "Technische Zeichnungen",
          "Vermittlung an Partnertischlerei",
        ],
        cta: "raum transformieren",
        color: "ink",
      },
    ],
    notes: [
      "Sollte der Umfang einer Anfrage noch nicht ganz klar sein oder kein Paket gebucht werden, rechne ich nach Zeitaufwand ab. Mein Stundensatz liegt bei 160 €.",
      "Alle Preise sind Grundpreise und können je nach Projektkomplexität und spezifischen Anforderungen variieren.",
    ],
  },

  about: {
    title: "über mich",
    subtitle: "architekt und interior designer mit leidenschaft für außergewöhnliche räume",
    spine: "daniel von boros",
    text: "Ich bin Architekt mit über fünf Jahren Erfahrung im Aus- und Umbau von Häusern, Wohnungen sowie in der Gestaltung von Innen- und Außenräumen. Mein Fokus liegt darauf, Funktionalität und ästhetische Schönheit zu verbinden – denn Räume sollten nicht nur gut aussehen, sondern auch den Alltag ihrer Bewohner bereichern. Mein Weg begann mit dem Architekturstudium, in dem ich ein tiefes Verständnis für räumliche Zusammenhänge, strukturelle Integrität und den Einfluss von Umgebungen auf unser Wohlbefinden entwickelte.",
    portrait: {
      src: "/image_daniel.jpeg",
      alt: "Daniel von Boros",
      position: "50% 30%",
    },
  },

  testimonials: {
    title: "was kunden sagen",
    items: [
      {
        text: "Ich war schon lange Zeit unzufrieden mit der Aufteilung unseres Wohnzimmers. Daniel hatte die richtigen Ideen für unsere Bedürfnisse und half uns, mit unseren vorhandenen Möbeln den Raum so umzugestalten, dass wir uns wieder darin wohlfühlen. Mit der neuen Aufteilung wirkt der Raum viel offener und einladender, und man schaut nicht mehr direkt auf die Rückseite der Couch, wenn man die Wohnung betritt.",
        author: "Lisa V.",
      },
      {
        text: "Ich war schon seit langem auf der Suche nach einer individuellen Lösung für meinen Schreibtisch. Zunächst suchte ich nur nach einer Möglichkeit, die Lautsprecher auf meinem Schreibtisch etwas zu erhöhen, doch ich habe wertvolle Inspirationen bekommen. Gemeinsam haben wir anhand meiner Bedürfnisse eine Lösung geschaffen, die zusätzlichen Stauraum, die gewünschte Erhöhung der Lautsprecher und meines Bildschirms an meinem Arbeitsplatz, sowie zusätzliche Stellfläche für all mein Audio Equipment geschaffen hat. Ich bin sehr glücklich mit der neuen Lösung.",
        author: "Nadia P.",
      },
      {
        text: "Daniel hat uns umfassend zu vielen kleinen Problemzonen in unserem Ferienhaus beraten und sehr viele sowohl optisch sehr ansprechende, als auch technisch sehr ausgeklügelte Ideen gefunden. Nun sehen die ehemals kleinen Problemstellen sehr einladend aus und bieten sowohl Stauraum, sind aber auch optisch sehr ansprechend. Ich kann die Beratung nur empfehlen.",
        author: "Christina K.",
      },
    ],
  },

  seoServices: {
    title: "Raumplanung, Einbaumöbel & Einrichtungsberatung in Berlin – mehr Platz für dein Leben",
    items: [
      {
        title: "Raumkonzepte & Grundrissoptimierung",
        text: "Nachwuchs kündigt sich an, die Kinder brauchen mehr Platz oder ein Arbeitsplatz muss ins Wohnzimmer passen? Ich entwickle Raumkonzepte, die Platz für euren Alltag schaffen – vom zusätzlichen Kinderzimmer bis zum Geschwisterzimmer mit eigenen Bereichen zum Schlafen, Spielen und Lernen. Mit durchdachter Raumaufteilung wird aus eurer bestehenden Wohnung ein Zuhause, das mitwächst.",
      },
      {
        title: "Einbaumöbel nach Maß & Stauraum",
        text: "Wenn Schränke voll sind und Stellfläche fehlt, braucht es Ideen, die deinen Raum besser nutzen. Ich plane individuelle Einbaumöbel für kleine Wohnungen in Berlin: Podestbetten mit Stauraum, Hochbetten und Hochebenen, Einbauschränke für Nischen und Raumteiler, die Wohn- und Schlafbereich trennen. Gebaut wird von dir selbst oder von meiner Partnertischlerei.",
      },
      {
        title: "Einrichtungsberatung & Interior Design",
        text: "Du möchtest deine Wohnung neu einrichten, bist aber bei Möbeln, Farben und Materialien unsicher? Ich entwickle ein stimmiges Einrichtungskonzept und mache es mit Moodboards und 3D-Visualisierungen für dich greifbar – bei dir vor Ort in Berlin oder online.",
      },
    ],
  },

  faq: {
    title: "häufige fragen",
    subtitle: "stauraum, einbaumöbel und raumplanung in berlin",
    items: [
      {
        question: "Meine kleine Wohnung ist vollgestellt – wie bekomme ich mehr Stauraum?",
        answer:
          "Meist fehlt nicht der Platz, sondern eine Planung, die ihn nutzt. Ich schaue mir an, wo in deiner Wohnung Fläche verloren geht – in Nischen, über Türen, unter dem Bett oder bis unter die Decke – und plane dort Einbauschränke, Podestbetten, Hochebenen oder Regalwände. So ist in meinem Projekt „neue nutzung für 10 m²“ aus einem kleinen Zimmer ein Arbeitszimmer, Gästezimmer und Stauraum in einem geworden.",
      },
      {
        question: "Wie kann ich Wohn- und Schlafbereich in einem Zimmer sinnvoll trennen?",
        answer:
          "Mit Zonierung: Ein Raumteiler mit Stauraum, ein Podestbett oder eine Empore trennen den Schlafbereich ab, ohne den Raum zuzustellen. Das Bett rückt aus dem Blickfeld, und unter oder neben ihm entsteht Platz für Kleidung, ein Homeoffice oder eine Leseecke. Beispiele dafür sind meine Projekte „raumteiler und empore für bett“ und „podestbett für kleine wohnungen“.",
      },
      {
        question: "Planst du individuelle Einbaumöbel wie Podestbett, Hochbett oder Einbauschrank?",
        answer:
          "Ja, das ist ein Schwerpunkt meiner Arbeit. Ich plane Einbaumöbel nach Maß für kleine Wohnungen in Berlin: Podestbetten mit Stauraum, Hochbetten mit begehbarem Kleiderschrank, Einbauschränke für Nischen und Raumteiler. Die individuelle Möbelplanung ist im Paket „transformation“ enthalten und im Paket „konzept“ für 500–700 € zubuchbar.",
      },
      {
        question: "Was kostet die Planung bei raumideenwerk?",
        answer:
          "Die Pakete haben feste Grundpreise für Räume bis 20 m²: „impuls“ (online) 590 €, „konzept“ 890 € und „transformation“ 1.490 €. Für größere Räume kommt ein Aufschlag pro weiterem m² dazu. Ist der Umfang noch offen, rechne ich nach Zeitaufwand ab – mein Stundensatz liegt bei 160 €. Der Bau der Möbel ist nicht enthalten, seine Kosten hängen von Größe und Material ab.",
      },
      {
        question: "Kümmerst du dich auch um die Umsetzung?",
        answer:
          "Du hast zwei Möglichkeiten: Du baust selbst um – dafür bekommst du Konzept, Shoppingliste und bei Bedarf technische Zeichnungen. Oder ich vermittle dich an meine Partnertischlerei, die die Einbaumöbel nach meinen Plänen baut. Im Paket „transformation“ sind technische Zeichnungen und die Vermittlung bereits enthalten.",
      },
      {
        question: "Arbeitest du nur in Berlin?",
        answer:
          "Für Beratung und Aufmaß vor Ort komme ich zu dir nach Berlin. Das Paket „impuls“ läuft komplett online: Du misst selbst nach meiner Anleitung, egal wo in Deutschland du wohnst.",
      },
    ],
  },

  contact: {
    title: "kontakt",
    subtitle: "bereit, deine wohnung zu verwandeln?",
    details: [
      { label: "e-mail", value: "mail@raumideenwerk.com", href: "mailto:mail@raumideenwerk.com" },
      { label: "telefon", value: "+49 160 495 81 48", href: "tel:+491604958148" },
      {
        label: "instagram",
        value: "@raum.ideen.werk.berlin",
        href: "https://www.instagram.com/raum.ideen.werk.berlin",
      },
      { label: "adresse", value: "Kolonnenstraße 8, 10827 Berlin" },
    ],
    form: {
      name: "name",
      email: "e-mail",
      subject: "betreff",
      message: "nachricht",
      submit: "nachricht senden",
      sending: "wird gesendet …",
      success: "Danke, deine Nachricht ist angekommen. Ich melde mich in der Regel innerhalb von 24 bis 48 Stunden an Werktagen.",
      captchaRequired: "Bitte löse zuerst die kleine Rechenaufgabe.",
      error:"Das hat nicht geklappt. Versuch es bitte später noch einmal oder schreib direkt an mail@raumideenwerk.com.",
      captchaLabel: "sicherheitsfrage",
      captchaNew: "neue aufgabe",
      captchaLoading: "wird geladen …",
      rateLimited:
        "Es sind gerade viele Nachrichten von deinem Anschluss gekommen. Bitte versuch es in einer Stunde noch einmal oder schreib direkt an mail@raumideenwerk.com.",
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
      { href: "/impressum", label: "impressum" },
      { href: "/datenschutz", label: "datenschutz" },
    ],
    homeLabel: "raumideenwerk, zur Startseite",
  },

  projectPage: {
    back: "alle projekte",
    goal: "projektziel",
    story: "über dieses projekt",
    materials: "materialien",
    dimensions: "abmessungen",
    year: "jahr",
    services: "leistung",
    gallery: "bilder",
    ctaTitle: "interessiert an einem ähnlichen projekt?",
    ctaText: "Lass uns über deine Wohnung sprechen. Das Erstgespräch ist der erste Schritt.",
    ctaButton: { href: "/#kontakt", label: "erstgespräch buchen" },
    prev: "vorheriges projekt",
    next: "nächstes projekt",
  },

  servicePage: {
    back: "alle leistungen",
    planning: "so plane ich",
    costs: "was kostet das?",
    planningCosts:
      "Die Planung läuft über meine Pakete mit festen Grundpreisen für Räume bis 20 m²: „impuls“ (online) 590 €, „konzept“ 890 €, „transformation“ 1.490 €. Die individuelle Möbelplanung ist in „transformation“ enthalten und in „konzept“ für 500–700 € zubuchbar.",
    packagesLink: { href: "/#pakete", label: "alle pakete ansehen" },
    projects: "passende projekte",
    faq: "häufige fragen",
    more: "weitere leistungen",
    ctaTitle: "lass uns über deine wohnung sprechen",
    ctaText: "Im Erstgespräch klären wir, welche Lösung zu deinem Raum und deinem Alltag passt.",
    ctaButton: { href: "/#kontakt", label: "erstgespräch buchen" },
  },

};
