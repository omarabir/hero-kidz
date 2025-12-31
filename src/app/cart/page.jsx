import { TbHorseToy } from "react-icons/tb";
import React from "react";
import { fontBangla } from "../layout";
import Link from "next/link";
import { getUserOrders } from "@/actions/server/order";
import Cart from "@/Components/home/Cart";
import Image from "next/image";

const CartPage = async () => {
  const cartItems = await getUserOrders();
  const formattedItems = cartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <div className="my-10 ">
      {/* title  */}
      <div className="">
        <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8">
          My Cart
        </h2>
      </div>
      {cartItems.length == 0 ? (
        <>
          <div className="text-center py-20 space-y-5 mx-auto flex flex-col justify-center items-center">
            <h2 className={`${fontBangla.className} text-4xl font-bold`}>
              <Image
                className="mx-auto"
                width={250}
                height={250}
                src="/assets/empty-cart.png"
                alt="Empty Cart"
              />
              আপনি কার্টে কোন প্রোডাক্ট এড করেন নি
            </h2>
            <Link
              href={"/products"}
              className="btn btn-primary btn-lg btn-wide"
            >
              <TbHorseToy></TbHorseToy> পন্য দেখুন
            </Link>
          </div>
        </>
      ) : (
        <Cart cartItem={formattedItems}></Cart>
      )}
    </div>
  );
};

export default CartPage;
