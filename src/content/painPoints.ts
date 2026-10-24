import type { Locale, PainPointsContent } from "./types";

export const painPoints: Record<Locale, PainPointsContent> = {
  de: {
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
  en: {
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
};
