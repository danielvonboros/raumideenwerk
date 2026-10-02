import { Hanken_Grotesk } from "next/font/google";
import type { Locale } from "@/content/types";
import StructuredData from "@/components/StructuredData";
import "@/app/globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export function Document({
  locale,
  children,
}: Readonly<{ locale: Locale; children: React.ReactNode }>) {
  return (
    <html lang={locale} className={hanken.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="bg-leinen font-sans text-tinte antialiased">
        {children}
      </body>
    </html>
  );
}
