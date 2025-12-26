import React from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
const loading = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-5">
      {/* <h2 className="text-5xl font-bold animate-pulse">Loading</h2> */}
      <div className="flex items-center text-5xl text-primary animate-pulse font-bold ">
        Loa <Image className=" animate-spin" src={logo} alt="Hero Kidz Logo" />{" "}
        ding
      </div>
    </div>
  );
};

export default loading;
