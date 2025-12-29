"use server";

import { AuthOption } from "@/lib/AuthOption";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

const { dbConnect, collections } = require("@/lib/database");

const orderCollection = dbConnect(collections.ORDERS);

export async function createOrder(orderData, inc = true) {
  const session = await getServerSession(AuthOption);
  const userEmail = session?.user?.email;
  if (!userEmail) return { success: false, message: "User not authenticated" };
  const productID = orderData?.product?._id;
  if (!productID) return { success: false, message: "Product not specified" };
  const query = { userEmail, productID };
  const isAdded = await orderCollection.findOne(query);
  if (isAdded) {
    const updatedOrder = {
      $inc: { quantity: inc ? 1 : -1 },
    };
    const result = await orderCollection.updateOne(query, updatedOrder);
    return {
      success: Boolean(result.modifiedCount),
      message: "Order updated successfully",
    };
  } else {
    const product = await dbConnect(collections.PRODUCTS).findOne({
      _id: new ObjectId(productID),
    });
    const newData = {
      productId: product?._id,
      email: userEmail,
      title: product.title,
      quantity: 1,
      image: product.image,
      price: product.price - (product.price * product.discount) / 100,
      username: session?.user?.name,
    };
    const result = await orderCollection.insertOne(newData);
    return {
      success: result.acknowledged,
      message: "Order created successfully",
    };
  }
}
