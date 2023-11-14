"use client";
import React from "react";

const Form = () => {
  return (
    <div className="sm:max-w-lg mx-auto w-full flex flex-col gap-4">
      <input
        type="text"
        className=" bg-[#63798D] rounded-lg py-3 px-5 outline-none text-white placeholder:text-white w-full"
        placeholder="Name"
      />
      <input
        type="text"
        className="  bg-[#63798D] rounded-lg py-3 px-5 outline-none text-white placeholder:text-white w-full"
        placeholder="Name"
      />
      <textarea
        name=""
        className=" bg-[#63798D] rounded-lg py-3 px-5 outline-none text-white resize-none placeholder:text-white w-full !h-[130px]"
        placeholder="your email"
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
