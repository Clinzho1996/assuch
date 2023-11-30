"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../api/Motion";
import { deals } from "../api/Data";
import { Button } from "react-scroll";

function Deals() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="p-[6%] mt-[5%] md:mt-[-10%]"
    >
      <motion.h2
        variants={fadeIn("down", "tween", 0.2, 1)}
        className="font-montserrat text-black text-[30px] font-bold"
      >
        Latest Deals
      </motion.h2>
      <div className="flex justify-between lg:flex-row flex-col xl:gap-0 gap-10 mt-5">
        {deals.map((deal, index) => {
          return (
            <li key={index} className="mr-3">
              <Image
                src={deal.img}
                alt={deal.title}
                className="w-full h-[235px] object-fill md:w-[250px] md:h-[235px]"
              />
              <div className="p-5 shadow-lg">
                <h3 className="font-Monserrat font-bold underline">
                  {deal.title}
                </h3>
                <p className="text-black text-[8px]">{deal.content}</p>
                <div className="flex flex-row justify-end">
                  <Button className="bg-[#00ADEF] justify-end rounded-sm px-4 py-1 text-white text-[12px]">
                    See all
                  </Button>
                </div>
              </div>
            </li>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Deals;
