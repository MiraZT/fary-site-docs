import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";

type Props = { params: Promise<{ slug: string[] }> };

export const generateStaticParams = generateStaticParamsFor("slug");

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { metadata } = await importPage(params.slug);
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
  } = await importPage(params.slug);
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
