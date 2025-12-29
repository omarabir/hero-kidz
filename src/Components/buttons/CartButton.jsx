"use client";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { createOrder } from "@/actions/server/order";

const CartButton = ({ product }) => {
  const { title, image, price, ratings, reviews, sold, _id } = product;
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const isLogin = session?.status === "authenticated";
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    if (isLogin) {
      const result = await createOrder({ product, inc: true });
      if (result.success) {
        toast.success(result.message || `${title} added to cart!`);
      } else {
        toast.error(result.message || `Failed to add ${title} to cart.`);
      }
    } else {
      setIsLoading(false);
      toast.info("Please login to add items to cart");
      router.push(`/login?callbackUrl=${pathname}`);
    }

    // Check if user is authenticated
    // if (status === "unauthenticated") {
    //   // Save current page URL to redirect back after login
    //   const callbackUrl = encodeURIComponent(pathname);
    //   console.log("Current pathname:", pathname);
    //   console.log("Encoded callbackUrl:", callbackUrl);
    //   console.log("Full redirect URL:", `/login?callbackUrl=${callbackUrl}`);
    //   toast.info("Please login to add items to cart");
    //   router.push(`/login?callbackUrl=${callbackUrl}`);
    //   return;
    // }

    // if (status === "loading") {
    //   toast.info("Please wait...");
    //   return;
    // }

    // // User is authenticated, add to cart
    // // TODO: Implement your cart logic here
    // toast.success(`${title} added to cart!`);
    // console.log("Adding to cart:", { _id, title, price, image });
  };

  return (
    <div>
      <button
        disabled={isLoading}
        onClick={handleAddToCart}
        className="btn btn-primary"
      >
        <FaCartPlus />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
