"use client";
import Link from "next/link";
import React from "react";
import { Button } from "react-scroll";
import { FiSearch } from "react-icons/fi";

function InfoSearch() {
  return (
    <div
      className="relative bg-cover bg-center h-[50vh] md:h-[80vh] items-center w-full md:mt-[-150px] mt-[0px] hidden md:flex"
      style={{
        background: "url('/curve.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        padding: "0% 6%",
        width: "100%",
      }}
    >
      <div className="flex-row gap-5 justify-between content-center align-middle items-center w-[85%] mx-auto shadow-lg p-8 ">
        <Link href="/" className="border-[#00000066] border-r-2 px-9">
          Real Estate
        </Link>
        <Link href="/" className="border-[#00000066] border-r-2 px-9">
          Agriculture
        </Link>
        <Link href="/" className="border-[#00000066] border-r-2 px-9">
          Trading
        </Link>
        <Link href="/" className="border-[#00000066] border-r-2 px-9">
          Import
        </Link>
        <Link href="/" className="border-[#00000066] border-r-2 px-9">
          Export
        </Link>
        <Link href="/" className="border-[#00000066] border-r-2 px-9">
          Business
        </Link>
        <Link href="/" className=" px-9">
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
