"use server";

import { collections, dbConnect } from "@/lib/database";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  try {
    const { email, password, name } = payload;

    if (!email || !password || !name) {
      console.log("Missing required fields");
      return null;
    }

    // Check if user already exists
    const existingUser = await dbConnect(collections.USERS).findOne({ email });

    if (existingUser) {
      console.log("User already exists with email:", email);
      return null;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 14);
    console.log("Password hashed successfully");

    // Insert new user
    const newUser = await dbConnect(collections.USERS).insertOne({
      provider: "credentials",
      email,
      password: hashedPassword,
      name,
      role: "user",
      image: null,
      createdAt: new Date(),
    });

    console.log("New user created:", newUser.insertedId);

    if (newUser.acknowledged) {
      return {
        acknowledged: true,
        insertedId: newUser.insertedId.toString(),
      };
    }

    return null;
  } catch (error) {
    console.error("Error in postUser:", error);
    return null;
  }
};

export const loginUsers = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) return null;
  const user = await dbConnect(collections.USERS).findOne({ email });
  if (!user) return null;
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (isPasswordValid) {
    return user;
  } else {
    return null;
  }
};
