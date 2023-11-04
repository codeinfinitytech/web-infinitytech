import React from "react";
import Navbar from "./Navbar";

import Image from "next/image";

function Hero() {
  return (
    <div className="w-full flex flex-col items-center h-[100vh]  justify-center">
      <div className="bg-[#3e4b56] absolute opacity-90 -z-10 w-full h-full "></div>
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
        <div className="flex flex-col items-center justify-center text-[20px] mt-6">
          <h1 className="text-[40px] sm:text-[56px] font-bold text-[#F59620]  text-center font-outfit leading-none ">
            Unlock the Power <br /> of Technology"
          </h1>
          <p className="text-white mt-2  font-outfit">
            Innovate , Navigate, Elevate
          </p>
          <div className=" flex  gap-4 mt-6">
            <button
              className=" px-6 py-2 border border-[#F59620] text-[#F59620]
             hover:text-white hover:bg-[#F59620]"
            >
              Reach us
            </button>
            <button
              className=" px-6 py-2 border border-[#F59620] text-white
            bg-[#F59620]"
            >
              Our Work
            </button>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <a href="#service" className="text-center text-white">
          Scroll down
        </a>
      </div>
    </div>
  );
}

export default Hero;
