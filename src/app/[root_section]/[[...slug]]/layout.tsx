import { WikiSwitcher } from "@/components/wiki-switcher";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner } from "nextra/components";
import { GlobeIcon } from "nextra/icons";

import { getPageMap } from "nextra/page-map";

import {
  DOCUMENTATION_REPOSITORY_BASE,
  MAIN_SITE_URL,
} from "@/shared/lib/constants";

import type { LayoutProps as Props } from "./_types";

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
  >
    <WikiSwitcher />
  </Navbar>
);
const footer = <Footer>MIT {new Date().getFullYear()} © Команда Фейри.</Footer>;

export default async function DocsLayout({ children, params }: Props) {
  const { root_section } = await params;
  const pageMap = await getPageMap(`/${root_section}`);

  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={pageMap}
      docsRepositoryBase={DOCUMENTATION_REPOSITORY_BASE}
      footer={footer}
    >
      {children}
    </Layout>
  );
}
