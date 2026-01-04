import type { Metadata } from "next";

import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";

import { getPageMap } from "nextra/page-map";

import "nextra-theme-docs/style.css";

export const metadata: Metadata = {
  title: {
    default: "Документация FarySD",
    template: "%s « Фейри",
  },
  description: "Официальная документация, или же вики проекта, FarySD (Фейри).",
};

// Exemple: release-server--nelya-1
const banner = (
  <Banner storageKey="update-wiki--10-11-2025">
    Вики была полностью переработана
  </Banner>
);
const navbar = <Navbar logo={<b>Фейри</b>} />;
const footer = <Footer>MIT {new Date().getFullYear()} © Команда Фейри.</Footer>;

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
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/mirazt/fary-site-docs/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
