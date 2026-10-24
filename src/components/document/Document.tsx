import { Hanken_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import type { Locale } from "@/content/types";
import { businessSchema } from "@/lib/schema";
import StructuredData from "@/components/structuredData/StructuredData";
import { themeScript } from "@/components/themeToggle/themeScript";
import "@/theme/globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

interface DocumentProps {
  locale: Locale;
  children: ReactNode;
}

const Document = ({ locale, children }: DocumentProps) => {
  return (
    <html lang={locale} className={hanken.variable} suppressHydrationWarning>
      <head>
        <StructuredData data={businessSchema()} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-linen font-sans text-ink antialiased dark:bg-ink dark:text-linen">
        {children}
      </body>
    </html>
  );
};

export default Document;
