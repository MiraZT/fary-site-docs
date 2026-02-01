import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";

type Props = { params: Promise<{ slug: string[] }> };

export const generateStaticParams = generateStaticParamsFor("slug");

const BASE_SITE_URL = "https://wiki.fary.lanvalird.ru";

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;
  const { metadata } = await importPage(slug);

  const pageUrl = slug ? `${BASE_SITE_URL}/${slug}` : BASE_SITE_URL;

  const title =
    metadata.title + " « Документация Фейри" || "Документация Фейри";
  const description =
    metadata.description || "Документация проекта Фейри (он же FarySD).";

  const ogImageUrl = new URL(
    "/api/og",
    process.env.NEXT_PUBLIC_SITE_URL || BASE_SITE_URL,
  );
  ogImageUrl.searchParams.set(
    "title",
    metadata.title /* чтобы без "водянки" */,
  );
  if (metadata.description) {
    ogImageUrl.searchParams.set("description", description);
  }

  return {
    title: {
      default: "Документация FarySD",
      template: "%s « Фейри",
    },
    description: description,

    openGraph: {
      title: title,
      description: description,
      type: slug ? "article" : "website",
      url: pageUrl,
      images: [
        {
          url: ogImageUrl.toString(),
          width: 1200,
          height: 630,
          alt: `Обложка поста "${title}"`,
        },
      ],
      siteName: "FarySD (Фейри)",
      locale: "ru_RU",
    },

    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogImageUrl.toString()],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
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
