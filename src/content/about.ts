import type { AboutContent, Locale } from "./types";

export const about: Record<Locale, AboutContent> = {
  de: {
    title: "über mich",
    subtitle: "architekt und interior designer mit leidenschaft für außergewöhnliche räume",
    spine: "daniel von boros",
    text: "Ich bin Architekt mit über fünf Jahren Erfahrung im Aus- und Umbau von Häusern, Wohnungen sowie in der Gestaltung von Innen- und Außenräumen. Mein Fokus liegt darauf, Funktionalität und ästhetische Schönheit zu verbinden – denn Räume sollten nicht nur gut aussehen, sondern auch den Alltag ihrer Bewohner bereichern. Mein Weg begann mit dem Architekturstudium, in dem ich ein tiefes Verständnis für räumliche Zusammenhänge, strukturelle Integrität und den Einfluss von Umgebungen auf unser Wohlbefinden entwickelte.",
    portrait: { src: "/image_daniel.jpeg", alt: "Daniel von Boros", position: "50% 30%" },
  },
  en: {
    title: "about me",
    subtitle: "architect and interior designer with a passion for exceptional spaces",
    spine: "daniel von boros",
    text: "I am an architect with more than five years of experience converting and extending houses and flats, and designing interior and exterior spaces. My focus is on bringing function and beauty together — because rooms should not only look good, they should make daily life better for the people in them. My path began with studying architecture, where I developed a deep understanding of spatial relationships, structural integrity and the effect an environment has on our wellbeing.",
    portrait: { src: "/image_daniel.jpeg", alt: "Daniel von Boros", position: "50% 30%" },
  },
};
