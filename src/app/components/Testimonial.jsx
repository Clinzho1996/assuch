"use client";
import Image from "next/image";
import React from "react";
import User from "../../../public/user.png";
import Quote from "../../../public/quote.png";
import Rating from "../../../public/star.png";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "../api/Motion";

function Testimonial() {
  return (
    <div
      className="bg-center h-full flex items-center w-full mb-6"
      style={{
        background: "url('/mesh.png')",
        backgroundRepeat: "no-repeat",
        padding: "10% 6%",
        backgroundSize: "cover",
        width: "100%",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-col md:flex-row justify-start gap-10 items-center align-middle pb-[300px] hidden md:flex">
        <div className="flex flex-col">
          <Image
            src={User}
            alt="testimonials"
            className="h-[774px] object-contain"
            variants={slideIn("left", "tween", 0.2, 1)}
          />
          <div className="bg-white shadow-xl p-20 left-20 w-[100%] mt-[-200px] ml-[350px]">
            <Image
              src={Quote}
              alt="quote"
              className="w-[7%] object-contain mt-2"
            />
            <div className="flex flex-col ml-10">
              <p className="text-black text-[11px] font-Montserrat leading-5">
                Assuch Global made my life easy. It helped me with the{" "}
                <br className="sm:flex hidden" /> search for my first ever
                investment. Thanks to the team <br className="sm:flex hidden" />
                for providing me with the support I need.
              </p>
              <h4 className="text-black font-Montserrat font-bold text-[15px] mt-10">
                David Chukwudi
              </h4>
              <p className="text-black font-medium text-[11px]">
                CEO and Co Founder
              </p>
              <Image
                src={Rating}
                alt="rating"
                className="w-[10%] object-contain mt-2"
              />
            </div>
          </div>
        </div>
        <div className="ml-[-300px]">
          <h3 className="text-black font-Montserrat font-bold text-[26px] md:text-[30px]">
            Testimonials
          </h3>
          <p className="text-black text-[11px] font-Montserrat leading-5">
            Over Ten thousand happy clients! Are you the next one?
          </p>
        </div>
      </div>
      <div className="flex flex-col md:hidden  mt-[0px] md:mt-0">
        <div>
          <h3 className="text-black font-Montserrat font-bold text-[26px] md:text-[30px]">
            Testimonials
          </h3>
          <p className="text-black text-[11px] font-Montserrat leading-5">
            Over Ten thousand happy clients! Are you the next one?
          </p>
        </div>
        <Image
          src={User}
          alt="testimonials"
          className="h-[774px] object-contain mt-[-50px] md:mt-0"
        />
        <div className="bg-white p-10 shadow-md mt-[-150px]">
          <Image
            src={Quote}
            alt="quote"
            className="w-[20%] object-contain mt-2"
          />
          <div className="flex flex-col">
            <p className="text-black text-[11px] font-Montserrat leading-5">
              Assuch Global made my life easy. It helped me with the{" "}
              <br className="sm:flex hidden" /> search for my first ever
              investment. Thanks to the team <br className="sm:flex hidden" />
              for providing me with the support I need.
            </p>
            <h4 className="text-black font-Montserrat font-bold text-[15px] mt-10">
              David Chukwudi
            </h4>
            <p className="text-black font-medium text-[11px]">
              CEO and Co Founder
            </p>
            <Image
              src={Rating}
              alt="rating"
              className="w-[20%] object-contain mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
