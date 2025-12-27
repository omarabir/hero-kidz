"use server";

import { collections, dbConnect } from "@/lib/database";
import bcrypt from "bcryptjs";
export const postUser = async (payload) => {
  const { email, password, name } = payload;
  if (!email || !password) return null;

  const ifExit = await dbConnect(collections.USERS).findOne({ email });
  if (ifExit) return null;

  const newUser = await dbConnect(collections.USERS).insertOne({
    provider: "credentials",
    email,
    password: await bcrypt.hash(password, 14),
    name,
    role: "user",
  });

  if (newUser.acknowledged) {
    return { ...newUser, insertedId: newUser.insertedId.toString() };
  }
};
