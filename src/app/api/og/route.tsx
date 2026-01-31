import type { NextRequest } from "next/server";

import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const title = searchParams.get("title") || "Документация FarySD";
    const description =
      searchParams.get("description") ||
      "Официальная документация, или же вики проекта, FarySD (Фейри).";

    return new ImageResponse(
      <div
        style={{
          fontSize: 60,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          textAlign: "center",
        }}
        className={"x:bg-primary-100 x:bg-primary-400/10 x:text-primary-600"}
      >
        <div style={{ fontSize: 72, fontWeight: "bold", marginBottom: 30 }}>
          {title}
        </div>
        <div style={{ fontSize: 36, opacity: 0.8 }}>{description}</div>
        <div style={{ marginTop: 50, fontSize: 28 }}>fary.lanvalird.ru</div>
      </div>,
      {
        width: 1200,
        height: 630,
        headers: {
          "Cache-Control": "public, immutable, no-transform, max-age=18000",
        },
      },
    );
  } catch (e) {
    console.error("OG image generation failed:", e);
    return new Response("Failed to generate image", { status: 500 });
  }
}
