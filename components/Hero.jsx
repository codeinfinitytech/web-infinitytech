import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

import Image from "next/image";

function Hero() {
  return (
    <div className="w-full flex flex-col items-center h-[100vh]  justify-center">
      <div className="bg-[#3e4b56] absolute opacity-90 top-0 -z-10 w-full h-full "></div>
      <div className="absolute h-full w-full flex items-center justify-center -z-20 overflow-hidden">
        <Image
          src={`/image/herroBack.png`}
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Navbar />
      <div className="px-2 h-full mx-auto max-w-lg flex gap-[26px] mb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center justify-center text-[20px] mt-6"
        >
          <h1 className="text-[40px] sm:text-[56px] font-bold text-[#F59620]  text-center font-outfit leading-none ">
            Unlock the Power <br /> of Technology"
          </h1>
          <p className="text-white mt-2  font-outfit">
            Innovate , Navigate, Elevate
          </p>
          <div className=" flex  gap-4 mt-6">
            <a
              href="#contactus"
              className=" px-6 py-2 border border-[#F59620] text-[#F59620]
             hover:text-white hover:bg-[#F59620] rounded-md"
            >
              Reach us
            </a>
            <button
              className=" px-6 py-2 border border-[#F59620] text-white
            bg-[#F59620] rounded-md"
            >
              Our Work
            </button>
          </div>
        </motion.div>
      </div>
      <div className="pb-20">
        <a href="#service" className="text-center text-white">
          Scroll down
        </a>
      </div>
    </div>
  );
}

export default Hero;
