import Products from "@/Components/home/Products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata = {
  title: "All Products",
  description:
    "Browse Hero Kidz educational toys: number & alphabet learning boards, flash cards, logic games, and activity sets. Safe, non‑toxic, screen‑free learning.",
  alternates: { canonical: "/products" },
  openGraph: {
    type: "website",
    url: `${siteUrl}/products`,
    title: "All Products — Hero Kidz",
    description:
      "Browse learning boards, flash cards, logic games, and activity sets.",
    images: [
      {
        url: "https://i.ibb.co.com/vCY93fCt/image.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Products — Hero Kidz",
    description:
      "Browse learning boards, flash cards, logic games, and activity sets.",
    images: ["https://i.ibb.co.com/vCY93fCt/image.png"],
  },
};
const page = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default page;
