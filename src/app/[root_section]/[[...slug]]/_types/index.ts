export interface Segments {
  root_section: string;
  slug?: string[];
}

interface Params extends Segments {}

export interface PageProps {
  params: Promise<Params>;
}
export interface LayoutProps {
  children: React.ReactNode;
  params: Promise<Params>;
}
