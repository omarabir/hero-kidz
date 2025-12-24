import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <Link href="/" className="flex items-center gap-2">
          <Image className="w-16" src={logo} alt="Hero Kidz Logo" />
          <h1 className="text-2xl font-bold">
            Hero <span className="text-primary">Kidz</span>
          </h1>
        </Link>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
