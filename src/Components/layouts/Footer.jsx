import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
          <Link href="/" className="flex items-center gap-2">
            <Image className="w-16" src={logo} alt="Hero Kidz Logo" />
            <h1 className="text-2xl font-bold">
              Hero <span className="text-primary">Kidz</span>
            </h1>
          </Link>
          <p className="mt-2 max-w-xs">
            Inspiring Young Heroes Since 2024
            <br />
            Quality educational toys for every child's learning journey
          </p>

          <div className="grid grid-flow-col gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="btn btn-ghost btn-circle"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="btn btn-ghost btn-circle"
            >
              <FaXTwitter size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="btn btn-ghost btn-circle"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="btn btn-ghost btn-circle"
            >
              <FaYoutube size={24} />
            </Link>
          </div>
        </aside>

        <nav>
          <h6 className="footer-title">Shop</h6>
          <Link href="/products" className="link link-hover">
            All Products
          </Link>
          <Link
            href="/products?category=learning-boards"
            className="link link-hover"
          >
            Learning Boards
          </Link>
          <Link
            href="/products?category=flash-cards"
            className="link link-hover"
          >
            Flash Cards
          </Link>
          <Link
            href="/products?category=logic-games"
            className="link link-hover"
          >
            Logic Games
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about" className="link link-hover">
            About Us
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
          <Link href="/blog" className="link link-hover">
            Blog
          </Link>
          <Link href="/stores" className="link link-hover">
            Store Locations
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title">Support</h6>
          <Link href="/faq" className="link link-hover">
            FAQ
          </Link>
          <Link href="/shipping" className="link link-hover">
            Shipping Info
          </Link>
          <Link href="/returns" className="link link-hover">
            Returns
          </Link>
          <Link href="/privacy" className="link link-hover">
            Privacy Policy
          </Link>
        </nav>
      </div>

      <div className="footer footer-center bg-neutral text-neutral-content border-t border-base-300 p-6">
        <div>
          <p>© {new Date().getFullYear()} Hero Kidz. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
