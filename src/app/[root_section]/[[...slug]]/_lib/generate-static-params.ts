import { WIKI_SECTIONS } from "@/shared/lib/constants";
import { generateStaticParamsFor } from "nextra/pages";

export async function generateStaticParams() {
  const slugs = await generateStaticParamsFor("slug")();
  return WIKI_SECTIONS.flatMap((section) => {
    const root_section = section.path.split("/").filter(Boolean)[0];

    return slugs
      .filter((segment) => {
        const slugArray = segment.slug;
        return slugArray && slugArray[0] === root_section;
      })
      .map((segment) => ({
        root_section,
        slug: segment.slug.slice(1),
      }));
  });
}
