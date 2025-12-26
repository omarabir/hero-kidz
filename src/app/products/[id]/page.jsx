import { getSingleProduct } from "@/actions/server/product";
import CartButton from "@/Components/buttons/CartButton";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  let product = {};
  try {
    product = await getSingleProduct(id);
  } catch (e) {
    product = {};
  }

  const titleBase = product?.title
    ? `${product.title}`
    : "Product Details — Hero Kidz";
  const rawDesc =
    product?.description ||
    "Explore quality educational toys at Hero Kidz — learning boards, flash cards, logic games and more.";
  const description =
    rawDesc.length > 180 ? `${rawDesc.slice(0, 177)}...` : rawDesc;
  const image = product?.image || "/assets/logo.png";

  return {
    title: titleBase,
    description,
    alternates: { canonical: `/products/${id}` },
    openGraph: {
      type: "website",
      url: `${siteUrl}/products/${id}`,
      title: titleBase,
      description,
      siteName: "Hero Kidz",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: product?.title || "Hero Kidz",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleBase,
      description,
      images: [image],
    },
  };
}
const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);
  console.log(product);
  const {
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;
  const discountedPrice = price - (price * discount) / 100;
  return (
    <div
      className={`  max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10`}
    >
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: title || "Product",
            image: image
              ? [image]
              : [
                  `${
                    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
                  }/assets/logo.png`,
                ],
            description: description || "Educational toy from Hero Kidz",
            brand: { "@type": "Brand", name: "Hero Kidz" },
            aggregateRating: ratings
              ? {
                  "@type": "AggregateRating",
                  ratingValue: ratings,
                  reviewCount: reviews || 0,
                }
              : undefined,
            offers: {
              "@type": "Offer",
              url: `${
                process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
              }/products/${id}`,
              priceCurrency: "BDT",
              price: Number.isFinite(discountedPrice)
                ? discountedPrice
                : price || 0,
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      {/* Image */}
      <div className="rounded-xl overflow-hidden bg-gray-100">
        {image ? (
          <Image
            width={600}
            height={420}
            src={image}
            alt={title || "Product image"}
            className="w-full h-auto object-cover"
            sizes="(min-width: 768px) 600px, 100vw"
          />
        ) : (
          <div className="w-full h-[420px] flex items-center justify-center text-gray-400">
            <span>No image available</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <h1 className="text-3xl font-bold mb-3">{title}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(ratings) ? "" : "opacity-30"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {ratings} ({reviews} reviews) • {sold} sold
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="line-through text-gray-400 ml-3">৳{price}</span>
          )}
        </div>

        {/* Actions */}

        {/* Key Features */}
        <div className="my-6">
          <h3 className="font-semibold mb-2">Key Features</h3>
          <ul className="list-disc list-inside space-y-1">
            {info?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <CartButton
        //   product={{ ...product, _id: product._id.toString() }}
        ></CartButton>
      </div>
      <div className="col-span-full">
        {/* Description */}
        <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
          {description?.split("\n\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Q&A */}
        <div className="mt-8">
          <h3 className="font-semibold mb-3">Q & A</h3>
          <div className="space-y-3">
            {qna?.map((item, i) => (
              <div key={i} className="border rounded-lg p-3">
                <p className="font-medium">{item.question}</p>
                <p className="text-sm text-gray-600 mt-1">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
