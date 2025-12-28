"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
const AuthButton = () => {
  const session = useSession();
  return (
    <div>
      {session.status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="btn btn-primary btn-outline"
        >
          Logout
          <MdOutlineLogout />
        </button>
      ) : (
        <Link href="/login" className="btn btn-primary btn-outline">
          Login
          <MdOutlineLogin />
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
