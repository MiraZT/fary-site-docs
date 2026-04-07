import { useMDXComponents as getMDXComponents } from "@/mdx-components";
import { importPage } from "nextra/pages";
import { resolvePathSegments } from "./_lib";

import type { PageProps as Props } from "./_types";

export { generateMetadata, generateStaticParams } from "./_lib";

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: Props) {
  const pathSegments = resolvePathSegments(await props.params);

  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(pathSegments);

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={props.params} />
    </Wrapper>
  );
}
