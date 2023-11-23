"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="flip-left"
      className="sm:max-w-lg mx-auto w-full flex flex-col gap-4"
    >
      <input
        type="text"
        className="font-[300] bg-[#63798D] rounded-lg py-3 px-5 outline-none text-white placeholder:text-white w-full"
        placeholder="Your name"
      />
      <input
        type="text"
        className=" font-[300] bg-[#63798D] rounded-lg py-3 px-5 outline-none text-white placeholder:text-white w-full"
        placeholder="Your email"
      />
      <textarea
        name=""
        className="font-[300] bg-[#63798D] rounded-lg py-3 px-5 outline-none text-white resize-none placeholder:text-white w-full !h-[130px]"
        placeholder="Message"
        id=""
        cols={30}
        rows={10}
      ></textarea>
      <button className=" bg-[#F59620] w-full py-3.5 px-2 text-white rounded-lg mt-10">
        Send Message
      </button>
    </div>
  );
};

export default Form;
