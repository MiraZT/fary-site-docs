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

const banner = (
  <Banner storageKey="release-server--nelya-1">
    Nelya 1.x уже вышла:{" "}
    <a
      href="https://fary.lanvalird.ru"
      target="_blank"
      rel="noopener noreferrer"
    >
      сайт проекта
    </a>
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
      // Not required, but good for SEO
      lang="ru"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/mirazt/fary-site-docs/tree/main/src/content"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
