import type { Locale, TestimonialsContent } from "./types";

export const testimonials: Record<Locale, TestimonialsContent> = {
  de: {
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
  en: {
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
};
