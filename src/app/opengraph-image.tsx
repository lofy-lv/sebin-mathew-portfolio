import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const alt = "Sebin Mathew — Technical Project Manager | Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  let logoDataUrl = "";
  try {
    const logoFilePath = path.join(process.cwd(), "public", "assets", "logo-square.png");
    if (fs.existsSync(logoFilePath)) {
      const buffer = fs.readFileSync(logoFilePath);
      logoDataUrl = `data:image/png;base64,${buffer.toString("base64")}`;
    }
  } catch {
    // fallback if file read fails
  }

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
            "radial-gradient(circle at 12% 18%, rgba(139, 92, 246, 0.32) 0%, transparent 48%), radial-gradient(circle at 88% 82%, rgba(251, 146, 60, 0.26) 0%, transparent 48%)",
          padding: "56px 64px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#F8FAFC",
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Dubai Status Badge */}
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
            <span>Available Immediately in Dubai · UAE</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: "#94A3B8",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            <span>PMP · CSM</span>
            <span>•</span>
            <span>100% CSAT</span>
          </div>
        </div>

        {/* Brand identity: Logo + Name + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {logoDataUrl ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "104px",
                height: "104px",
                borderRadius: "52px",
                backgroundColor: "#FFFFFF",
                border: "2px solid rgba(255, 255, 255, 0.6)",
                padding: "12px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoDataUrl}
                alt="Sebin Mathew Logo"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
            </div>
          ) : null}

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div
              style={{
                fontSize: "64px",
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
                fontSize: "30px",
                fontWeight: 700,
                background: "linear-gradient(90deg, #A78BFA, #FB923C)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Technical Project Manager · Full Stack Developer
            </div>
          </div>
        </div>

        {/* Bottom Proof Strip */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 28px",
            borderRadius: "18px",
            backgroundColor: "rgba(29, 35, 48, 0.85)",
            border: "1px solid rgba(161, 161, 170, 0.25)",
            fontSize: "20px",
            fontWeight: 500,
            color: "#E2E8F0",
          }}
        >
          <span>33+ Live Products Delivered • PRD to Deployment • MERN, Next.js & AI Workflows</span>
          <span style={{ color: "#38BDF8", fontWeight: 600 }}>sebinmathew.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
