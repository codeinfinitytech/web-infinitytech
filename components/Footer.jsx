"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <footer className="max-container padding-container bg-slate-200 py-20 px-10 w-full">
      <main>
      <div
        data-aos="fade-up"
        className="max-w-6xl px-10 space-y-10 sm:space-y-0 sm:px-0 mx-auto md:grid-cols-2 lg:grid-cols-4 sm:gap-20 grid w-full justify-center"
      >
        <div className="flex flex-col gap-4">
          {" "}
          <Image src={`/image/logo2.png`} alt="" width={150} height={100} />
          <div className="flex gap-4 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                stroke="#56697A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13.256 21.433c4.267-2.16 7.596-5.736 7.596-10.085 0-4.638-3.787-8.397-8.459-8.397-4.671 0-8.459 3.76-8.459 8.397 0 4.349 3.33 7.926 7.597 10.085a1.911 1.911 0 001.725 0z"></path>
                <path d="M15.54 11.41a3.147 3.147 0 11-6.294 0 3.147 3.147 0 016.295 0z"></path>
              </g>
            </svg>
            <p className="text-[#56697A]">89 KG 14 Ave, Kigali</p>
          </div>
          <div className="flex gap-4 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zM12 7.25a.75.75 0 01.75.75v3.69l2.28 2.28a.75.75 0 11-1.06 1.06l-2.5-2.5a.75.75 0 01-.22-.53V8a.75.75 0 01.75-.75z"
                fill="#56697A"
              ></path>
            </svg>
            <p className="text-[#56697A]">open 24 Hours</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#56697A]">Company</h4>
          <a className="text-[#56697A]" href="#">
            About us
          </a>
          <a className="text-[#56697A]" href="#">
            Services
          </a>
          <a className="text-[#56697A]" href="#">
            Our work
          </a>
          <a className="text-[#56697A]" href="#">
            Contact us
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#56697A]">Services</h4>
          <a className="text-[#56697A]" href="#">
            Web development
          </a>
          <a className="text-[#56697A]" href="#">
            Data protection
          </a>
          <a className="text-[#56697A]" href="#">
            System analysis
          </a>
          <a className="text-[#56697A]" href="#">
            Networking
          </a>
          <a className="text-[#56697A]" href="#">
            Graphic design
          </a>
          <a className="text-[#56697A]" href="#">
            Audit &amp; consultancy
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#56697A]">Technologies</h4>
          <a className="text-[#56697A]" href="#">
            AngularJs
          </a>
          <a className="text-[#56697A]" href="#">
            ReactJs
          </a>
          <a className="text-[#56697A]" href="#">
            VueJs
          </a>
          <a className="text-[#56697A]" href="#">
            PHP Laravel
          </a>
          <a className="text-[#56697A]" href="#">
            Python Django
          </a>
          <a className="text-[#56697A]" href="#">
            Java SpringBoot
          </a>
        </div>
      </div>
      </main>
      
    </footer>
  );
}

export default Footer;
