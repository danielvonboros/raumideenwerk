export function SeoServices() {
  return (
    <section
      aria-label="Platzhalter: Leistungsübersicht"
      className="px-5 py-16 md:px-14 md:py-[72px]"
    >
      <div className="flex flex-col gap-7 border-2 border-dashed border-tinte p-6 md:p-10">
        <h2 className="text-3xl leading-none font-bold tracking-[-0.035em] md:text-[44px]">
          Raumplanung & Einrichtungsberatung in Berlin - mehr Platz für dein
          Leben
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Raumkonzepte & Grundrissoptimierung",
              text: "Ein Arbeitsplatz im Wohnzimmer, ein Kinderzimmer mehr oder endlich ein abgetrennter Schlafbereich? Ich entwickle individuelle Raumkonzepte für kleine Wohnungen und veränderte Lebenssituationen – mit durchdachter Raumaufteilung und passenden Lösungen für deinen Alltag.",
            },
            {
              title: "Stauraum & individuelle Möbellösungen",
              text: "Wenn Schränke voll sind und Stellfläche fehlt, braucht es Ideen, die deinen Raum besser nutzen. Ich plane Einbauschränke, Hochebenen und multifunktionale Möbel, die zusätzlichen Stauraum schaffen und zu deiner Wohnung passen.",
            },
            {
              title: "Einrichtungsberatung & Interior Design",
              text: "Du möchtest deine Wohnung neu einrichten, bist aber bei Möbeln, Farben und Materialien unsicher? Ich entwickle ein stimmiges Einrichtungskonzept und mache es mit Moodboards und 3D-Visualisierungen für dich greifbar – bei dir vor Ort in Berlin oder online.",
            },
          ].map((service) => (
            <div key={service.title} className="flex flex-col gap-2.5">
              <h3 className="text-2xl leading-tight font-bold tracking-[-0.02em]">
                {service.title}
              </h3>
              <p className="text-lg leading-[1.5] text-schiefer">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
