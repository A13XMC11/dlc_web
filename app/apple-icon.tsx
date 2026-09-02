import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#01313f",
          color: "#00f0ff",
          fontFamily: "Arial, sans-serif",
          border: "10px solid #00f0ff",
        }}
      >
        <div style={{ fontSize: 54, fontWeight: 900, letterSpacing: 0 }}>DLC</div>
        <div style={{ marginTop: 6, fontSize: 18, fontWeight: 700, color: "#ffffff", letterSpacing: 0 }}>
          TEC
        </div>
      </div>
    ),
    size
  );
}
