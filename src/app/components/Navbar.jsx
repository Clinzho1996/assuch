"use client";
import React from "react";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-scroll";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <div className="bg-white px-[6%] py-2 flex flex-row justify-between align-middle items-center shadow-lg">
      <div className="flex flex-row align-middle gap-2 items-center">
        <Image src={Logo} alt="logo" className="w-[70px]" />
        <p className="text-black leading-3 text-[12px]">
          Assuch <br /> Global
        </p>
      </div>
      <div className="flex-row gap-10 md:flex hidden">
        <Link href="/" className="text-black font-Montserrat text-[12px]">
          Home
        </Link>
        <Link href="/" className="text-black font-Montserrat text-[12px]">
          About Us
        </Link>
      </div>
      <div className="h-6 justify-between items-center gap-2 w-[500px] p-5 border rounded-md md:flex hidden">
        <div className="flex flex-row gap-5 items-center ">
          <div className="w-4 h-4 justify-center items-center flex">
            <div className="w-4 h-4 relative">
              <FiSearch />
            </div>
          </div>
          <input
            placeholder="Search"
            className="placeholder:text-neutral-400 text-gray-900 text-base font-normal leading-normal tracking-tight w-[50%] focus:border-0 focus:outline-none focus:ring-0 font-Montserrat"
          />
        </div>
        <select className="pl-5 border-l-2 border-[#00000066]">
          <option>Explore</option>
          <option>Browse</option>
        </select>
      </div>
      <div className="md:flex hidden flex-row gap-10 items-center">
        <Link href="/" className="text-black font-Montserrat text-[12px]">
          Categories
        </Link>
        <Link href="/" className="text-black font-Montserrat text-[12px]">
          Sign In
        </Link>
        <Button className="bg-[#C82C2F] px-5 py-2 rounded-md text-white text-[12px] font-Montserrat text-md">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
