import type { Metadata } from "next";

import { Head } from "nextra/components";

import { Ubuntu_Sans } from "next/font/google";

import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Документация FarySD",
    template: "%s « Фейри",
  },
  description: "Официальная документация, или же вики проекта, FarySD (Фейри).",
};

const fontSans = Ubuntu_Sans({
  weight: ["400", "600"],
  subsets: ["latin", "cyrillic"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      // Required
      dir="ltr"
      suppressHydrationWarning
    >
      <Head color={{ hue: 25, saturation: 100, lightness: 50 }} />
      <body>{children}</body>
    </html>
  );
}
