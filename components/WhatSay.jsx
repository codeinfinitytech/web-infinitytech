"use client";
import Image from "next/image";
import React, { useState } from "react";

function WhatSay() {
  const says = [
    {
      url: `/image/say1.jpg`,
      disc: "Working with your team was a game-changer for our business! The website, mobile app, and dashboard your company developed are not just visually stunning but also incredibly user-friendly. Our customers love the seamless experience, and we've seen a significant increase in engagement since the launch.",
      name: "Umuhoza Yvethe",
      title: "Profession",
    },
    {
      url: `/image/say2.jpg`,
      disc: "Collaborating with your tech experts was a breeze. Our website, mobile app, and dashboard not only look fantastic but also perform flawlessly. The feedback from our users has been overwhelmingly positive, highlighting the user-centric design and the seamless integration of cutting-edge technologies.",
      name: "Rukundo Christian",
      title: "CEO TUZA",
    },
    {
      url: `/image/say3.jpg`,
      disc: "Impressed with the professionalism and technical expertise of your company. From conceptualizing our ideas to delivering a fully functional website, mobile app, and dashboard, the entire process was smooth. Your team's commitment to quality and innovation truly sets you apart in the tech industry",
      name: "Ntwali Emma",
      title: "CEO TUZA",
    },
    {
      url: `/image/project1.png`,
      disc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis quisquam eaque a sequi dignissimos ipsa ratione ab sapiente voluptatum sunt minima esse explicabo reprehenderit et maiores placeat, sit eos.",
      name: "Edson",
      title: "CEO TUZA",
    },
    {
      url: `/image/project2.png`,
      disc: "Editor subtract rectangle auto project flatten content opacity hand horizontal. Effect pen draft subtract style background mainarrange ipsum. Pen editor arrange pen invite reesizing verticalduplicate. Pixel italic editor main project effect invite share.Hand strikethrough create vertical rectangle inspect auto",
      name: "Ben",
      title: "CEO TUZA",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const GoToWhatSay = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? says.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === says.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" flex max-h-[250vh]  w-full flex-col md:flex-row ">
      <div className="w-full px-4 md:max-w-1/2 flex bg-[#E5E5E5] pt-[105px]">
        <div className="max-w-lg mx-auto flex flex-col   max-h-[100vh] gap-6 items-center md:items-start justify-end">
          <Image
            src={says[currentIndex].url}
            alt="profile"
            width={130}
            height={120}
            className="rounded-lg"
          />
          <div className="w-full text-center md:text-start md:w-[400px] h-[30vh]">
            <span className="text-[#303030] font-outfit">
              {says[currentIndex].disc}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[18px] font-[400 ] text-black  font-outfit">
              {says[currentIndex].name}
            </span>
            <span className="text-[16px] text-[#626262] font-outfit">
              {says[currentIndex].title}
            </span>
          </div>
          <div className="flex w-full py-10 ">
            <div className="mx-auto  md:mx-0 md:ml-auto flex  gap-4">
              <button onClick={prevSlide}>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 0.333252C26.19 0.333252 33.6667 7.80992 33.6667 16.9999C33.6667 26.1899 26.19 33.6666 17 33.6666C7.81004 33.6666 0.333374 26.1899 0.333374 16.9999C0.333374 7.80992 7.81004 0.333252 17 0.333252ZM17 2.83325C9.18837 2.83325 2.83337 9.18825 2.83337 16.9999C2.83337 24.8116 9.18837 31.1666 17 31.1666C24.8117 31.1666 31.1667 24.8116 31.1667 16.9999C31.1667 9.18825 24.8117 2.83325 17 2.83325ZM20.289 10.3328C20.7774 10.8228 20.774 11.6144 20.2857 12.1011L15.3657 16.9994L20.2857 21.8994C20.774 22.3861 20.7774 23.1761 20.289 23.6661C20.0457 23.9128 19.724 24.0344 19.404 24.0344C19.0857 24.0344 18.7657 23.9128 18.5224 23.6694L12.7107 17.8861C12.4757 17.6511 12.344 17.3328 12.344 16.9994C12.344 16.6678 12.4757 16.3494 12.7107 16.1144L18.5224 10.3294C19.0107 9.84275 19.8007 9.84275 20.289 10.3328Z"
                    fill="#56697A"
                  />
                </svg>
              </button>
              <button onClick={nextSlide}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0002 3.33325C29.1835 3.33325 36.6668 10.8166 36.6668 19.9999C36.6668 29.1999 29.1835 36.6666 20.0002 36.6666L19.5339 36.6602C10.5492 36.413 3.3335 29.044 3.3335 19.9999C3.3335 10.8166 10.8002 3.33325 20.0002 3.33325ZM17.6002 12.9666C17.2668 12.9666 16.9502 13.0833 16.7002 13.3333C16.2168 13.8333 16.2168 14.6166 16.7168 15.0999L21.6335 19.9999L16.7168 24.8999C16.2168 25.3833 16.2168 26.1833 16.7002 26.6666C17.2002 27.1666 17.9835 27.1666 18.4668 26.6666L24.2835 20.8833C24.5168 20.6499 24.6502 20.3333 24.6502 19.9999C24.6502 19.6666 24.5168 19.3499 24.2835 19.1166L18.4668 13.3333C18.2335 13.0833 17.9168 12.9666 17.6002 12.9666Z"
                    fill="#56697A"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:max-w-1/2 items-center flex  flex-col justify-between px-2 py-[70px]">
        <h1 className=" font-outfit text-[24px] text-center text-[#F59620] font-bold">
          WHAT THEY SAY ABOUT US
        </h1>

        <div className=" grid grid-cols-2     sm:grid-cols-2  gap-x-4   lg:gap-x-10 gap-y-20 py-10 ">
          {/* start part */}
          {says.map((item, index) => {
            return (
              <div
                onClick={() => GoToWhatSay(index)}
                key={index}
                className={`${
                  currentIndex === index ? "border-2 bg-gray-200" : ""
                } rounded-md p-1 flex gap-2 max-h-[20vh] items-center max-w-[300px] cursor-pointer hover:bg-gray-200`}
              >
                <div className="w-16 h-16">
                  <Image
                    src={item.url}
                    alt="profile 2"
                    width={60}
                    className="w-full h-full object-cover rounded-lg"
                    height={100}
                  />
                </div>
                <div className="flex flex-col justify-evenly py-2">
                  <span className="text-[16px] font-[400] text-black font-outfit">
                    {item.name}
                  </span>
                  <span className="text-[16px] font-[200] text-[#626262] font-outfit">
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* endding part */}
      </div>
    </div>
  );
}

export default WhatSay;
