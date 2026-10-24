import { business, offerCatalog, person } from "@/content/schema";
import { servicePages } from "@/content/servicePages";
import { site } from "@/content/site";
import type { FaqItem, Locale } from "@/content/types";
import { absoluteUrl, pathFor } from "./routes";

const id = (fragment: string) => `${site.url}/#${fragment}`;

const city = { "@type": "City", name: business.areaServed };

export const businessSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": id("business"),
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: { "@type": "ImageObject", url: absoluteUrl(business.logo) },
      image: {
        "@type": "ImageObject",
        url: absoluteUrl(business.image.src),
        width: business.image.width,
        height: business.image.height,
      },
      description: business.description,
      telephone: site.phoneE164,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.postalCode,
        addressLocality: site.address.city,
        addressCountry: site.address.country,
      },
      geo: { "@type": "GeoCoordinates", ...site.geo },
      areaServed: city,
      priceRange: business.priceRange,
      currenciesAccepted: business.currency,
      founder: { "@id": id("person") },
      sameAs: [site.instagram.url],
      knowsAbout: business.knowsAbout,
      hasOfferCatalog: { "@id": id("services") },
    },
    {
      "@type": "Person",
      "@id": id("person"),
      name: site.owner,
      jobTitle: person.jobTitle,
      description: person.description,
      image: { "@type": "ImageObject", url: absoluteUrl(person.image) },
      url: site.url,
      worksFor: { "@id": id("business") },
      sameAs: [site.linkedin, site.instagram.url],
      knowsAbout: person.knowsAbout,
    },
    {
      "@type": "OfferCatalog",
      "@id": id("services"),
      name: offerCatalog.name,
      itemListElement: offerCatalog.offers.map((offer) => ({
        "@type": "Offer",
        ...(offer.priceRange
          ? {
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: offer.priceRange.min,
                maxPrice: offer.priceRange.max,
                priceCurrency: business.currency,
              },
            }
          : { price: offer.price, priceCurrency: business.currency }),
        itemOffered: {
          "@type": "Service",
          "@id": id(offer.id),
          name: offer.name,
          serviceType: offer.serviceType,
          description: offer.description,
          provider: { "@id": id("business") },
          areaServed: { "@type": offer.areaServed.type, name: offer.areaServed.name },
        },
      })),
    },
  ],
});

export const serviceSchema = (locale: Locale, index: number) => {
  const service = servicePages[locale].items[index];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.metaTitle,
    description: service.description,
    url: absoluteUrl(pathFor(locale, { kind: "service", index })),
    image: absoluteUrl(service.image.src),
    provider: { "@id": id("business") },
    areaServed: city,
  };
};

export const faqSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});
