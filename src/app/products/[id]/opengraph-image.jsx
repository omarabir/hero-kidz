import { ImageResponse } from "next/og";
import { getSingleProduct } from "@/actions/server/product";

export const runtime = "nodejs"; // uses DB
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const brand = "#FC4000";
  const { id } = await params;
  const product = (await getSingleProduct(id)) || {};

  const title = product?.title || "Hero Kidz Product";
  const price = product?.price || 0;
  const discount = product?.discount || 0;
  const discountedPrice = price - (price * discount) / 100;

  const priceText =
    Number.isFinite(discountedPrice) && discount > 0
      ? `৳${discountedPrice}  •  was ৳${price}`
      : `৳${price}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg, #ffffff 0%, #fff4ee 100%)",
        }}
      >
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: brand,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            HK
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 36,
              fontWeight: 800,
              color: "#111",
            }}
          >
            <span>Hero&nbsp;</span>
            <span style={{ color: brand }}>Kidz</span>
          </div>
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 56,
            lineHeight: 1.15,
            fontWeight: 800,
            color: "#111",
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div
          style={{ marginTop: 14, fontSize: 30, color: brand, fontWeight: 800 }}
        >
          {priceText}
        </div>
        <div
          style={{ marginTop: 10, fontSize: 26, color: "#444", maxWidth: 980 }}
        >
          Educational toy • Safe • Screen‑free learning
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
