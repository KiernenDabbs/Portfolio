import { ImageResponse } from "next/og"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        background: "rgb(2, 6, 23)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(45deg, #00BFFF, #4B0082)",
          borderRadius: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "120px",
          height: "120px",
        }}
      >
        <div
          style={{
            fontSize: "64px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          KD
        </div>
      </div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}

