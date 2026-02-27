import type { Metadata } from "next";

import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { GlobeIcon } from "nextra/icons";

import { getPageMap } from "nextra/page-map";

import { Ubuntu_Sans } from "next/font/google";

import {
  DOCUMENTATION_REPOSITORY_BASE,
  MAIN_SITE_URL,
} from "@/shared/lib/constants";

import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Документация FarySD",
    template: "%s « Фейри",
  },
  description: "Официальная документация, или же вики проекта, FarySD (Фейри).",
};

// Exemple: release-server--nelya-1
const banner = (
  <Banner storageKey="add-opengraph-to-wiki--03-02-2026">
    Добавлены OpenGraph-описания для статей
  </Banner>
);
const navbar = (
  <Navbar
    logo={<b>Фейри</b>}
    projectLink={MAIN_SITE_URL}
    projectIcon={<GlobeIcon />}
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Команда Фейри.</Footer>;

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
      <body className={fontSans.className}>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase={DOCUMENTATION_REPOSITORY_BASE}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
