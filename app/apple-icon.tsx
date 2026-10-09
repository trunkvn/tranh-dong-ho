import { ImageResponse } from "next/og";

// The icon for a phone's home screen: the same seal on the dark red wall.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#430509",
        }}
      >
        <div
          style={{
            width: 124,
            height: 124,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#aa101e",
            border: "5px solid #f7efe0",
            color: "#f7efe0",
            fontSize: 70,
            fontWeight: 900,
            letterSpacing: -2,
          }}
        >
          ĐH
        </div>
      </div>
    ),
    size,
  );
}
