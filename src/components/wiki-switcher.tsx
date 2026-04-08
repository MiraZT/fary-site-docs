"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { WIKI_SECTIONS } from "@/shared/lib/constants";

export function WikiSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentWiki =
    WIKI_SECTIONS.find((wiki) => pathname?.startsWith(wiki.path)) ||
    WIKI_SECTIONS[0];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(event.target.value);
  };

  return (
    <select value={currentWiki.path} onChange={handleChange}>
      {WIKI_SECTIONS.map((wiki) => (
        <option key={wiki.id} value={wiki.path}>
          {wiki.name}
        </option>
      ))}
    </select>
  );
}
