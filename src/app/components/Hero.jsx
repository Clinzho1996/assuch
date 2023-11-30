"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "../api/Motion";
import { Button } from "react-scroll";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div
        className="relative bg-cover bg-center h-[80vh] md:h-[100vh] flex items-center w-full"
        style={{
          background:
            "linear-gradient(99deg, rgba(115, 173, 254, 0.48) 43.16%, rgba(82, 110, 150, 0.00) 76.84%), url('/hero.png') lightgray",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div className="px-5 xl:px-20 lg:px-10">
          <motion.h2
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="font-Montserrat relative flex items-center font-bold text-primary text-[36px] md:text-[56px] md:leading-[63px] leading-[40px]"
          >
            Top-Notch Products <br className="sm:flex hidden" /> And Services
            for You
            <span className="absolute right-[2%] md:right-[0%] bottom-[-7%] md:bottom-[0%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="14"
                viewBox="0 0 90 14"
                fill="none"
              >
                <path
                  d="M2.92295 11.0522C25.1015 6.66936 47.4392 4.84636 69.9882 3.48591C77.7652 3.0167 85.8208 2.21025 93.6256 2.97673"
                  stroke="#C82C2F"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </motion.h2>
          <motion.h2
            className=" font-Montserrat font-medium text-[16px] text-black text-md mt-5"
            variants={slideIn("left", "tween", 0.2, 1)}
          >
            Explore our products and services and get as{" "}
            <br className="sm:flex hidden" />
            much as you expect. We have tailored our{" "}
            <br className="sm:flex hidden" />
            products and services to suit your needs.
          </motion.h2>
          <Button className="bg-[#C82C2F] px-10 py-3 rounded-md text-white font-Montserrat text-lg mt-10">
            Contact Us
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
