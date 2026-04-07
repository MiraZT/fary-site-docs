interface Params {
  root_section: string;
  slug?: string[];
}

export function resolvePathSegments(params: Params): string[] {
  const { root_section: rootSection, slug } = params;
  const pathSegments = [rootSection, ...(slug || [])];

  return pathSegments;
}
