import path from "node:path";
import nextra from "nextra";

import { WIKI_SECTIONS } from "@/shared/lib/constants";

const withNextra = nextra({
  contentDirBasePath: "/",
});

export default withNextra({
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./src/mdx-components.tsx",
    },
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: WIKI_SECTIONS[0].path || "/wiki",
        permanent: true,
      },
    ];
  },
});
