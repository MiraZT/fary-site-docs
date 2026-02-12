import { importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";
import type { PageProps as Props } from "./_types";

export { generateMetadata, generateStaticParams } from "./_lib";

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: Props) {
  const params = await props.params;
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.slug);
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
