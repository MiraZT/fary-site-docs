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
    const updatedAt = searchParams.get("updatedAt") || null;

    const primaryColor = "#d56716";
    const borderColor = "#fffcfb";
    const backgroundColor = "#ffebda";
    const textColor = "#fffcfb";

    const size = { width: 1200, height: 630 };

    return new ImageResponse(
      <div
        style={{
          fontSize: 60,
          backgroundColor: borderColor,
          width: "100%",
          height: "100%",
          padding: "40px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            textAlign: "center",
            borderRadius: 36,
            color: primaryColor,
            backgroundColor: backgroundColor,
            width: "100%",
            height: "100%",
            padding: "24px 16px",
            marginTop: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ opacity: 0.6 }}>{updatedAt}</div>
          <div
            style={{
              color: primaryColor,
              fontSize: 72,
              fontWeight: "bold",
              marginBottom: 30,
            }}
          >
            {title}
          </div>
          <div style={{ color: "#", fontSize: 36, opacity: 0.8 }}>
            {description}
          </div>
          <div
            style={{
              fontSize: 28,
              borderRadius: 36,
              color: textColor,
              backgroundColor: primaryColor,
              padding: "24px 16px",
              marginTop: 50,
            }}
          >
            wiki.fary.lanvalird.ru
          </div>
        </div>
      </div>,
      {
        ...size,
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
