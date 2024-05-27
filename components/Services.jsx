"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { services } from "@/constants/services";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className=" w-full mt-14px px-2 md:px-10   pt-20 sm:px-10  max-h-[300vh] items-center justify-center"
      id="service"
    >
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="relative py-10  flex-col gap-10 sm:gap-20 overflow-hidden bg-[#EEEEEE] flex max-w-7xl medium:flex-row mx-auto z-50 px-10 sm:px-20 sm:py-20  "
      >
        <div className="absolute left-0 top-0 -z-10">
          <svg
            width="244"
            height="548"
            viewBox="0 0 244 548"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-294.112 273.846C-294.112 425.087 -173.651 547.692 -25.0558 547.692C123.54 547.692 244 425.087 244 273.846C244 122.605 123.54 0 -25.0558 0C-173.651 0 -294.112 122.605 -294.112 273.846ZM122.1 273.846C122.1 356.565 56.2164 423.622 -25.0558 423.622C-106.328 423.622 -172.212 356.565 -172.212 273.846C-172.212 191.127 -106.328 124.07 -25.0558 124.07C56.2164 124.07 122.1 191.127 122.1 273.846Z"
              fill="#56697A"
              fillOpacity="0.2"
            />
            <ellipse
              cx="93.5016"
              cy="95.1664"
              rx="93.5016"
              ry="95.1664"
              transform="matrix(-1 0 0 1 68.4458 178.68)"
              fill="#F59620"
              fillOpacity="0.32"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-1 sm:w-[320px] z-10">
          <h1 className="text-3xl font-bold text-[#56697A] mb-1 leading-none font-outfit">
            Our Services
          </h1>
          <p className="text-[14px] text-black text-base font-light w-full font-outfit ">
            Explore our comprehensive range of services designed to meet your
            needs and exceed your expectations. F
          </p>
          <button className="flex items-center justify-between  gap-2 mt-6 py-2.5 px-4 w-fit max-w-[200px] font-outfit  rounded-md text-white bg-[#F59620] group transition-all duration-300">
            <Link href="/services">Discover More</Link>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.64143 16.2753C6.41954 16.0534 6.39937 15.7061 6.58092 15.4615L6.64143 15.3914L12.0325 9.99998L6.64143 4.60859C6.41954 4.3867 6.39937 4.03948 6.58092 3.7948L6.64143 3.7247C6.86332 3.50282 7.21054 3.48264 7.45522 3.66419L7.52532 3.7247L13.3586 9.55804C13.5805 9.77993 13.6007 10.1271 13.4192 10.3718L13.3586 10.4419L7.52532 16.2753C7.28124 16.5193 6.88551 16.5193 6.64143 16.2753Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className=" mt-10 sm:mt-0 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3 grid lg:gap-12 flex-1">
          {services.map((item) => (
            <div
              key={item.id}
              className="flex items-start flex-col min-w-[150px] gap-2 group cursor-pointer "
            >
              <div className="flex h-14 max-w-1/2 items-center justify-center">
                {item.image}
              </div>
              <h4 className="text-[#292D32] text-[18px] font-medium mt-2 font-outfit ">
                {item.name}
              </h4>
              <p className=" text-[14px] text-[#292D32] font-normal line-clamp-3 w-full font-outfit">
                {item.disc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
