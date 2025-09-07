import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";

type Props = { params: Promise<{ docs_path_segments: string[] }> };

export const generateStaticParams =
  generateStaticParamsFor("docs_path_segments");

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { metadata } = await importPage(params.docs_path_segments);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: Props) {
  const params = await props.params;
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.docs_path_segments);
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
