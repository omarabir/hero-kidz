"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/logo.png";
import { BsCart2 } from "react-icons/bs";
const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const navOptions = (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={
              pathname === link.href ? "active font-bold text-primary" : ""
            }
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-box">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Link href="/" className="flex items-center gap-2">
          <Image className="w-16" src={logo} alt="Hero Kidz Logo" priority />
          <h1 className="text-2xl font-bold">
            Hero <span className="text-primary">Kidz</span>
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <Link href="/cart" className="btn btn-ghost btn-circle  mr-2">
          <BsCart2 color="#FC4000" size={24} />
        </Link>
        <Link href="/login" className="btn btn-primary btn-outline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
