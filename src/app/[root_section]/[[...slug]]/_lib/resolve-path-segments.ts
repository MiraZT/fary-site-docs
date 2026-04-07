import { Segments as Params } from "../_types";

export function resolvePathSegments(params: Params): string[] {
  const { root_section: rootSection, slug } = params;
  const pathSegments = [rootSection, ...(slug || [])];

  return pathSegments;
}
