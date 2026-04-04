interface Params {
  root_section: string;
  slug?: string[];
}

export interface PageProps {
  params: Promise<Params>;
}
export interface LayoutProps {
  children: React.ReactNode;
  params: Promise<Params>;
}
