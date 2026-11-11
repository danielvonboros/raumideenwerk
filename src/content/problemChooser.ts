import type { Locale, ProblemChooserContent } from "./types";

export const problemChooser: Record<Locale, ProblemChooserContent> = {
  de: {
    title: "kommt dir das bekannt vor?",
    subtitle: "wähl dein problem, ich zeige dir lösungen",
    tabsLabel: "Probleme",
    servicesLabel: "passende leistungen",
    projectsLabel: "projekte dazu",
    problems: [
      {
        id: "stauraum",
        label: "zu wenig stauraum",
        text: "Kein Platz für alles? Meist fehlt nicht die Fläche, sondern eine Planung, die sie nutzt: Einbauschränke in Nischen, Podestbetten mit Schubladen, Regale bis unter die Decke.",
        services: [0, 1],
        projects: [3, 0, 4, 5],
      },
      {
        id: "wohnen-und-schlafen",
        label: "wohnen und schlafen in einem raum",
        text: "Das Bett soll nicht das Erste sein, was man sieht? Ein Raumteiler, ein Podest oder eine Empore trennt den Schlafbereich ab, ohne den Raum zuzustellen.",
        services: [3, 1, 4],
        projects: [2, 5, 0],
      },
      {
        id: "viele-aufgaben",
        label: "ein zimmer, viele aufgaben",
        text: "Arbeiten, Gäste und Stauraum in einem kleinen Zimmer? Mit klarer Zonierung und Möbeln nach Maß bekommt jede Nutzung ihren eigenen Platz.",
        services: [4, 0],
        projects: [4, 2],
      },
      {
        id: "grundflaeche",
        label: "zu wenig grundfläche",
        text: "Wenn der Boden voll ist, bleibt der Raum nach oben. Hochebenen und Hochbetten schaffen eine zweite Ebene für Schlafen, Stauraum oder ein Kinderbett. Zwei Kinder, ein Zimmer: das geht.",
        services: [2],
        projects: [0, 3, 2],
      },
    ],
  },
  en: {
    title: "sound familiar?",
    subtitle: "pick your problem, i'll show you solutions",
    tabsLabel: "Problems",
    servicesLabel: "matching services",
    projectsLabel: "related projects",
    problems: [
      {
        id: "storage",
        label: "not enough storage",
        text: "Nowhere to put anything? Usually it isn't space that's missing, but a plan that uses it: built-in wardrobes in alcoves, platform beds with drawers, shelving up to the ceiling.",
        services: [0, 1],
        projects: [3, 0, 4, 5],
      },
      {
        id: "living-and-sleeping",
        label: "living and sleeping in one room",
        text: "Don't want the bed to be the first thing you see? A room divider, a platform or a raised bed separates the sleeping area without cluttering the room.",
        services: [3, 1, 4],
        projects: [2, 5, 0],
      },
      {
        id: "many-uses",
        label: "one room, many uses",
        text: "Work, guests and storage in one small room? With clear zoning and bespoke furniture, every use gets a place of its own.",
        services: [4, 0],
        projects: [4, 2],
      },
      {
        id: "floor-space",
        label: "not enough floor space",
        text: "When the floor is full, there's still room upwards. Raised levels and loft beds add a second level for sleeping, storage or a child's bed. Two children, one room: it works.",
        services: [2],
        projects: [0, 3, 2],
      },
    ],
  },
};
