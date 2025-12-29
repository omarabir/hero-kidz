"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Test = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return <div>Loading...</div>;
  return (
    <div>
      <div>Session: {JSON.stringify(session)}</div>
      <div>Role: {session?.user?.role || "No role found"}</div>
    </div>
  );
};

export default Test;
