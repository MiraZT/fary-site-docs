"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

// @TODO: брать динамически (например, через пропсы)
const WIKIS = [
  { id: "main", name: "Основной раздел", path: "/main" },
  { id: "design", name: "Дизайн", path: "/design" },
  { id: "programming", name: "Программирование", path: "/programming" },
  { id: "enthusiasts", name: "Для энтузиастов", path: "/enthusiasts" },
];

export function WikiSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentWiki =
    WIKIS.find((wiki) => pathname?.startsWith(wiki.path)) || WIKIS[0];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPath = event.target.value;
    const newPath =
      pathname?.replace(currentWiki.path, selectedPath) || selectedPath;
    router.push(newPath);
  };

  return (
    <select value={currentWiki.path} onChange={handleChange}>
      {WIKIS.map((wiki) => (
        <option key={wiki.id} value={wiki.path}>
          {wiki.name}
        </option>
      ))}
    </select>
  );
}
