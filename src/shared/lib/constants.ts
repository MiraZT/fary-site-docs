export const BASE_SITE_URL =
  process.env.BASE_SITE_URL || "https://wiki.fary.lanvalird.ru";
export const MAIN_SITE_URL =
  process.env.MAIN_SITE_URL || "https://fary.lanvalird.ru";

export const REPOSITORY_BASE =
  process.env.REPOSITORY_BASE || "https://github.com/mirazt/fary-site-docs";
export const DOCUMENTATION_REPOSITORY_BASE =
  process.env.DOCUMENTATION_REPOSITORY_BASE || `${REPOSITORY_BASE}/tree/master`;

export const WIKI_SECTIONS = [
  { id: "main", name: "Основной раздел", path: "/main" },
  { id: "design", name: "Дизайн", path: "/design" },
  { id: "enthusiasts", name: "Энтузиастам", path: "/enthusiasts" },
] as const;
