"use client";
import Image from "next/image";
import React, { useState } from "react";

function webDevelopement() {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const buttonLable = [
    "web and apps",
    "payement gateways",
    "UI/UX design",
    "web and apps",
  ];
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <h1 className="text-[32px] text-[#F59620] font-[600]">
        Web Developement
      </h1>
      <div className="flex flex-col mdl:flex-row w-full max-w-7xl">
        <div className="relative flex flex-col w-full mdl:w-1/2 bg-[#EEEEEE] rounded-sm p-8 gap-4">
          <div className="absolute bottom-0 left-0">
            <svg
              width="210"
              height="254"
              viewBox="0 0 210 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-210 213.328C-210 331.146 -116.161 426.656 -0.403824 426.656C115.353 426.656 209.192 331.146 209.192 213.328C209.192 95.5102 115.353 0 -0.403824 0C-116.161 0 -210 95.5102 -210 213.328ZM114.232 213.328C114.232 277.767 62.9077 330.005 -0.403824 330.005C-63.7154 330.005 -115.039 277.767 -115.039 213.328C-115.039 148.889 -63.7154 96.6512 -0.403824 96.6512C62.9077 96.6512 114.232 148.889 114.232 213.328Z"
                fill="#56697A"
                fill-opacity="0.2"
              />
              <ellipse
                cx="72.8384"
                cy="74.1352"
                rx="72.8384"
                ry="74.1352"
                transform="matrix(-1 0 0 1 72.4346 139.193)"
                fill="#F59620"
                fill-opacity="0.32"
              />
            </svg>
          </div>
          <div className="flex flex-col w-full  gap-4">
            <p className="text-[14px] text-center md:text-start line-clamp-6 leading-7 text-black font-[400]">
              "Our worldwide web development services are a testament to our
              commitment to crafting visually captivating and functionally
              superior websites that authentically represent your global brand
              and captivate audiences across the globe. At Infinity Tech
              Solutions, our focus is on delivering web solutions that transcend
              international borders. We create websites that are more than just
              digital entities; they are the embodiment of your international
              brand, designed to leave a profound impact on a global audience.
              Discover the art of global web development with us."
            </p>
            <div className="flex flex-col gap-2">
              <h1 className="text-[18px] font-[600] text-black">
                Out Technologies
              </h1>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <Image
                    src={`/image/reactjs.png`}
                    alt="react js"
                    width={30}
                    height={0}
                  />
                  <span className="text-black">React js</span>
                </div>
                <div className="flex flex-col">
                  <Image
                    src={`/image/reactjs.png`}
                    alt="react js"
                    width={30}
                    height={0}
                  />
                  <span className="text-black">React js</span>
                </div>
                <div className="flex flex-col">
                  <Image
                    src={`/image/reactjs.png`}
                    alt="react js"
                    width={30}
                    height={0}
                  />
                  <span className="text-black">React js</span>
                </div>
                <div className="flex flex-col">
                  <Image
                    src={`/image/reactjs.png`}
                    alt="react js"
                    width={30}
                    height={0}
                  />
                  <span className="text-black">React js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mdl:w-1/2 px-2">
          <div className="grid grid-cols-2 sml:grid-cols-4 gap-4 w-full">
            {buttonLable.map((item, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`py-4 px-2 min-w-[100px] text-[12px] text-black  rounded-md ${
                  activeButton === index ? "bg-[#EEEEEE]" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="w-full flex flex-col md:flex-row gap-2 p-2 pt-6 sml:p-10 mdl:p-2 justify-center items-center  ">
            <Image
              src={`/image/service1.png`}
              alt="service image"
              width={400}
              height={0}
              className="w-full md:w-1/2 mdl:w-[400px]"
            />
            <Image
              src={`/image/service1.png`}
              alt="service image"
              width={400}
              height={0}
              className="w-full md:w-1/2 mdl:w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default webDevelopement;
