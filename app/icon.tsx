import { ImageResponse } from "next/og";

// The tab icon: the red ĐH seal, drawn the same way as the mark on the loading screen.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#aa101e",
          border: "3px solid #f7efe0",
          color: "#f7efe0",
          fontSize: 28,
          fontWeight: 900,
          letterSpacing: -1,
        }}
      >
        ĐH
      </div>
    ),
    size,
  );
}
