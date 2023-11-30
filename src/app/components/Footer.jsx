"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "react-scroll";
import Logo from "../../../public/logo.png";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div className="bg-[#DBF0F8] px-[6%]">
      <center className="bg-white px-[10%] pb-[6%] w-[98%] md:w-[80%] mx-auto pt-5">
        <h2 className="text-black font-Montserrat font-bold text-[26px] md:text-[30px]">
          Subscribe to our newsletter
        </h2>
        <div className="flex flex-row justify-between bg-[#00ADEF] p-4  mt-10">
          <input
            placeholder="Enter your email"
            className="text-base placeholder:text-white bg-transparent font-normal leading-normal tracking-tight w-[50%] focus:border-0 focus:outline-none focus:ring-0 font-Montserrat text-white"
            type="email"
          />
          <Button className="bg-white px-4 py-2 text-[#00ADEF] text-[15px">
            Send
          </Button>
        </div>
      </center>
      <div className="flex flex-col md:flex-row justify-between items-start mt-[40px] md:mt-[100px] w-[95%] md:w-[80%] mx-auto">
        <div className="flex flex-col">
          <h3 className="text-black font-Montserrat font-bold text-[15px]">
            Useful links
          </h3>
          <div className="mt-4 flex flex-col gap-3 md:mt-10">
            <Link
              className="text-gray-500 font-Montserrat text-[15px]"
              href="/"
            >
              Find Deals
            </Link>
            <Link
              className="text-gray-500 font-Montserrat text-[15px]"
              href="/"
            >
              Find Property
            </Link>
            <Link
              className="text-gray-500 font-Montserrat text-[15px]"
              href="/"
            >
              Sell Property
            </Link>
            <Link
              className="text-gray-500 font-Montserrat text-[15px]"
              href="/"
            >
              Get Agent
            </Link>
            <Link
              className="text-gray-500 font-Montserrat text-[15px]"
              href="/"
            >
              Listing Category
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-6 md:mt-0">
          <h3 className="text-black font-Montserrat font-bold text-[15px]">
            About
          </h3>
          <div className="mt-4 flex flex-col gap-3 md:mt-10">
            <Link
              className="text-gray-500 font-Montserrat text-[15px]"
              href="/"
            >
              About Us
            </Link>
            <Link
              className="text-gray-500 font-Montserrat text-[15px]"
              href="/"
            >
              How It Works
            </Link>
            <Link
              className="text-gray-500 font-Montserrat text-[15px]"
              href="/"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-6 md:mt-0">
          <h3 className="text-black font-Montserrat font-bold text-[15px]">
            Terms
          </h3>
          <div className="mt-4 flex flex-col gap-3 md:mt-10">
            <Link
              className="text-gray-500 font-Montserrat text-[15px]"
              href="/"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-gray-500 font-Montserrat text-[15px]"
              href="/"
            >
              Terms and Conditions
            </Link>
            <Link
              className="text-gray-500 font-Montserrat text-[15px]"
              href="/"
            >
              Copyright Policy
            </Link>
            <Link
              className="text-gray-500 font-Montserrat text-[15px]"
              href="/"
            >
              Security
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-6 md:mt-0">
          <Image src={Logo} alt="logo" width={50} height={50} />
          <div className="mt-5 flex flex-col gap-3">
            <Link
              className="text-gray-500 font-Montserrat text-[15px]"
              href="/"
            >
              40 Ezekiel Ovah Ogidan <br />
              Lekki Epe Expressway, Lagos, Nigeria <br />
              Email: info@assuchglobal.com <br />
              Phone: +234803 549 1849 <br />
              RC: 1632744
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 mt-5">
        <center>
          <div className="bg-[#00000029] border border-t-[1px] w-[95%] mx-auto my-10" />
          <div className="gap-10 flex flex-row justify-center pb-5">
            <div className="bg-[#00ADEF] p-2 w-[40px]">
              <Link href="/">
                <FiFacebook color="#fff" />
              </Link>
            </div>
            <div className="bg-[#00ADEF] p-2 w-[40px]">
              <Link href="/">
                <FiInstagram color="#fff" />
              </Link>
            </div>
            <div className="bg-[#00ADEF] p-2 w-[40px]">
              <Link href="/">
                <FiTwitter color="#fff" />
              </Link>
            </div>
          </div>
          <p className="text-[#00000059] text-[15px] font-Montserrat pb-5">
            Copyright 2023 Assuch Global. All Rights Reserved.{" "}
          </p>
        </center>
      </div>
    </div>
  );
}

export default Footer;
