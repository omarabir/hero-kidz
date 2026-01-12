"use server";

import { AuthOption } from "@/lib/AuthOption";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { cache } from "react";
const { dbConnect, collections } = require("@/lib/database");

const orderCollection = dbConnect(collections.ORDERS);

export async function createOrder(orderData, inc = true) {
  const session = await getServerSession(AuthOption);
  const userEmail = session?.user?.email;
  if (!userEmail) return { success: false, message: "User not authenticated" };
  const productID = orderData?.product?._id;
  if (!productID) return { success: false, message: "Product not specified" };

  // Check with the correct field name used during insertion
  const query = { email: userEmail, productId: new ObjectId(productID) };
  const isAdded = await orderCollection.findOne(query);

  console.log("Query:", query);
  console.log("IsAdded:", isAdded);

  if (isAdded) {
    const updatedOrder = {
      $inc: { quantity: inc ? 1 : -1 },
    };
    const result = await orderCollection.updateOne(query, updatedOrder);
    console.log("Update result:", result);
    return {
      success: Boolean(result.modifiedCount),
      message: "Order updated successfully",
    };
  } else {
    const product = await dbConnect(collections.PRODUCTS).findOne({
      _id: new ObjectId(productID),
    });
    if (!product) {
      return {
        success: false,
        message: "Product not found",
      };
    }
    const newData = {
      productId: product._id,
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

export const getUserOrders = cache(async () => {
  const session = await getServerSession(AuthOption);
  const userEmail = session?.user?.email;
  if (!userEmail) return [];
  const query = { email: userEmail };
  const result = await orderCollection.find(query).toArray();
  return result;
});

export const deleteUserOrder = async (orderId) => {
  const session = await getServerSession(AuthOption);
  const userEmail = session?.user?.email;
  if (!userEmail) return { success: false, message: "User not authenticated" };
  if (orderId?.length != 24) {
    return { success: false, message: "Invalid order ID" };
  }
  const query = { _id: new ObjectId(orderId) };
  const result = await orderCollection.deleteOne(query);
  return {
    success: Boolean(result.deletedCount),
    message: "Order deleted successfully",
  };
};

// Update order quantity by order ID
export const updateOrderQuantity = async (orderId, increment = true) => {
  const session = await getServerSession(AuthOption);
  const userEmail = session?.user?.email;

  if (!userEmail) return { success: false, message: "User not authenticated" };
  if (orderId?.length != 24) {
    return { success: false, message: "Invalid order ID" };
  }

  const query = { _id: new ObjectId(orderId), email: userEmail };
  const updatedOrder = {
    $inc: { quantity: increment ? 1 : -1 },
  };

  const result = await orderCollection.updateOne(query, updatedOrder);

  return {
    success: Boolean(result.modifiedCount),
    message: "Order quantity updated successfully",
  };
};

export const increaseItemDB = async (id, quantity) => {
  const session = await getServerSession(AuthOption);
  const userEmail = session?.user?.email;

  if (quantity > 10) {
    return { success: false, message: "Maximum quantity reached" };
  }

  const query = { _id: new ObjectId(id) };
  const updatedOrder = {
    $inc: { quantity: 1 },
  };
  const result = await orderCollection.updateOne(query);
  return {
    success: Boolean(result.modifiedCount),
    message: "Order updated successfully",
  };
};
