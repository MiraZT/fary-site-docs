import { WIKI_SECTIONS } from "@/shared/lib/constants";
import { generateStaticParamsFor } from "nextra/pages";

export async function generateStaticParams() {
  const slugs = await generateStaticParamsFor("slug")();

  return WIKI_SECTIONS.flatMap((section) => {
    const rootSection = section.path.split("/").filter(Boolean)[0];

    const filteredSlugs = slugs.filter(({ slug }) => {
      return slug && slug[0] === rootSection;
    });

    return filteredSlugs.map(({ slug }) => ({
      root_section: rootSection,
      slug: slug.slice(1),
    }));
  });
}
