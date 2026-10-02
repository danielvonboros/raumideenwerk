import { Hanken_Grotesk } from "next/font/google";
import type { Locale } from "@/content/types";
import StructuredData from "@/components/StructuredData";
import { themeScript } from "@/components/ThemeToggle";
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
    <html lang={locale} className={hanken.variable} suppressHydrationWarning>
      <head>
        <StructuredData />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-linen font-sans text-ink antialiased dark:bg-ink dark:text-linen">
        {children}
      </body>
    </html>
  );
}
