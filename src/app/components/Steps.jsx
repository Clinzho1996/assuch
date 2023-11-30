import Image from "next/image";
import React from "react";
import Vid from "../../../public/vid.png";
import Evaluate from "../../../public/evaluate.png";
import Close from "../../../public/close.png";
import Process from "../../../public/process.png";

function Steps() {
  return (
    <div className="flex flex-col md:flex-row justify-between align-middle p-[6%] gap-[50px] md:gap-[150px] items-center mt-10 md:mt-0">
      <div>
        <Image src={Vid} alt="video" />
      </div>
      <div className="flex flex-col mr-0 md:mr-48">
        <h2 className="text-black font-Montserrat text-[30px] leading-8 font-bold">
          We Follow three Steps
        </h2>
        <p className="text-black font-Montserrat text-[10px] leading-3 mt-5">
          Choose Assuch Global for a strategic partner committed to your success
          across real estate, <br className="sm:flex hidden" /> agriculture,
          import/export, technology, trading, and business services. Elevate
          your business <br className="sm:flex hidden" />
          with us – where you get as much as you expect.
        </p>
        <div className="process mt-10">
          <div className="border-[1px] border-[#97E0FCBD] p-6 flex flex-row gap-10 align-middle items-center">
            <div className="px-8 py-7 bg-[#DBF0F8] rounded-full">
              <Image
                src={Evaluate}
                alt="evaluate"
                className="w-[20px] h-[26px] object-contain"
              />
            </div>
            <div>
              <h3 className="text-black font-Montserrat text-[20px] leading-6 font-bold">
                Evaluate
              </h3>
              <p className="text-black font-Montserrat text-[10px] leading-3 mt-3">
                First you should evaluate our deals.
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#97E0FCBD] bg-[#00ADEF] p-6 flex flex-row gap-10 align-middle items-center mt-10 md:mt-20">
            <div className="px-8 py-7 bg-[#fff] rounded-full">
              <Image
                src={Process}
                alt="evaluate"
                className="w-[20px] h-[26px] object-contain"
              />
            </div>
            <div>
              <h3 className="text-white font-Montserrat text-[20px] leading-6 font-bold">
                Process
              </h3>
              <p className="text-white font-Montserrat text-[10px] leading-3 mt-3">
                Once deals are evaluated, we move{" "}
                <br className="sm:flex hidden" /> processing stage.
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#97E0FCBD] p-6 flex flex-row gap-10 align-middle items-center mt-10 md:mt-20">
            <div className="px-8 py-7 bg-[#DBF0F8] rounded-full">
              <Image
                src={Close}
                alt="evaluate"
                className="w-[20px] h-[26px] object-contain"
              />
            </div>
            <div>
              <h3 className="text-black font-Montserrat text-[20px] leading-6 font-bold">
                Close Deal
              </h3>
              <p className="text-black font-Montserrat text-[10px] leading-3 mt-3">
                You get as much as you expect and deals{" "}
                <br className="sm:flex hidden" /> get closed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
