"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../api/Motion";
import { whyUs } from "../api/Data";

function WhyUs() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        className="flex justify-center  flex-col items-center xl:gap-0 gap-10 mt-20 md:mt-0"
        variants={fadeIn("down", "tween", 0.2, 1)}
        style={{
          background:
            "linear-gradient(99deg, rgba(115, 173, 254, 0.48) 43.16%, rgba(82, 110, 150, 0.00) 76.84%), url('/bgwhy.png') lightgray",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-white px-10 py-5 md:px-40 rounded-br-md rounded-bl-md">
          <motion.h2 className="font-montserrat text-black text-[30px] aliign-middle text-center font-bold">
            Why Choose Us
          </motion.h2>
        </div>
        <div className="flex justify-center px-[6%] py-[10%] items-center lg:flex-row flex-col xl:gap-0 gap-10">
          {whyUs.map((why, index) => {
            return (
              <center key={index} className="px-6">
                <div className="flex justify-center items-center  w-[72px] h-[72px] bg-white p-6 rounded-full">
                  <Image src={why.img} width={32} height={32} alt={why.title} />
                </div>
                <h3 className="mt-4 font-Montserrat font-bold text-[19px]">
                  {why.title}
                </h3>
                <p className="text-black text-[10px] font-Montserrat">
                  {why.content}
                </p>
              </center>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WhyUs;
