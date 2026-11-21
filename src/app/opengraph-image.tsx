import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Sebin Mathew — Technical Project Manager | Business Analyst";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0B0D12",
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(139, 92, 246, 0.28) 0%, transparent 48%), radial-gradient(circle at 88% 82%, rgba(251, 146, 60, 0.24) 0%, transparent 48%)",
          padding: "64px 72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#F8FAFC",
        }}
      >
        {/* Top Header Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 24px",
            borderRadius: "9999px",
            backgroundColor: "rgba(45, 212, 191, 0.12)",
            border: "1px solid rgba(45, 212, 191, 0.4)",
            color: "#2DD4BF",
            fontSize: "20px",
            fontWeight: 600,
            letterSpacing: "0.5px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#2DD4BF",
            }}
          />
          <span>Open to Opportunities • Based in Dubai, UAE</span>
        </div>

        {/* Name, Title, and Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "66px",
              fontWeight: 800,
              letterSpacing: "-1.8px",
              lineHeight: 1.1,
              color: "#F8FAFC",
            }}
          >
            Sebin Mathew
          </div>
          <div
            style={{
              fontSize: "34px",
              fontWeight: 600,
              background: "linear-gradient(90deg, #A78BFA, #FB923C)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Technical Project Manager | Business Analyst
          </div>
        </div>

        {/* Bottom Proof Strip */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "20px 28px",
            borderRadius: "18px",
            backgroundColor: "rgba(29, 35, 48, 0.85)",
            border: "1px solid rgba(161, 161, 170, 0.25)",
            fontSize: "22px",
            fontWeight: 500,
            color: "#E2E8F0",
          }}
        >
          <span>34+ Live Products Delivered • PRD to Deployment • MERN, Next.js & AI Workflows</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
