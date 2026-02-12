import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const title = searchParams.get("title") || "Документация FarySD";
    const description =
      searchParams.get("description") ||
      "Документация проекта Фейри (он же FarySD).";
    const updatedAt = searchParams.get("updatedAt") || null;

    const size = { width: 1200, height: 630 };

    const primaryColor = "#d56716";
    const borderColor = "#feebda";
    const backgroundColor = "#fffcfb";
    const textColor = "#161616";

    const containerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    } as const;

    return new ImageResponse(
      <div
        style={{
          fontSize: 60,
          backgroundColor: borderColor,
          width: "100%",
          height: "100%",
          padding: "40px",
          ...containerStyle,
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
            ...containerStyle,
          }}
        >
          <div style={{ opacity: 0.6 }}>{updatedAt}</div>
          <div
            style={{
              color: primaryColor,
              fontSize: 62,
              fontWeight: "700",
            }}
          >
            {title}
          </div>
          <div style={{ color: textColor, fontSize: 36, opacity: 0.8 }}>
            {description}
          </div>
          <div
            style={{
              fontSize: 28,
              borderRadius: 36,
              color: backgroundColor,
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
