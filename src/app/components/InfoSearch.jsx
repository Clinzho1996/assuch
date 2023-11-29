"use client";
import Link from "next/link";
import React from "react";
import { Button } from "react-scroll";
import { FiSearch } from "react-icons/fi";

function InfoSearch() {
  return (
    <div
      className="relative bg-cover bg-center h-[50vh] md:h-[80vh] flex items-center w-full md:mt-[-150px] mt-[0px]"
      style={{
        background: "url('/curve.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        padding: "0% 6%",
        width: "100%",
      }}
    >
      <div className="flex-row gap-5 justify-between content-center align-middle items-center w-[85%] mx-auto shadow-lg p-8 hidden md:flex">
        <Link href="/" className="border-[#00000066] border-r-2 px-5">
          Real Estate
        </Link>
        <Link href="/" className="border-[#00000066] border-r-2 px-5">
          Agriculture
        </Link>
        <Link href="/" className="border-[#00000066] border-r-2 px-5">
          Trading
        </Link>
        <Link href="/" className="border-[#00000066] border-r-2 px-5">
          Import
        </Link>
        <Link href="/" className="border-[#00000066] border-r-2 px-5">
          Export
        </Link>
        <Link href="/" className="border-[#00000066] border-r-2 px-5">
          Business
        </Link>
        <Link href="/" className="border-[#00000066] border-r-2 px-5">
          Technology
        </Link>
        <Button className="bg-[#C82C2F] p-2">
          <FiSearch color="#fff" size={20} />
        </Button>
      </div>
    </div>
  );
}

export default InfoSearch;
