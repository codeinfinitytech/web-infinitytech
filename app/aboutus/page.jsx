import React from "react";

import { Aboutus, ContactUs, Footer, Navbar, Navbar2 } from "@/components";
import Image from "next/image";
import { TEAMWORKERS } from "@/constants/libs";

export const metadata = {
  title: "Infinity-Tech About us",
};

function AboutusPage() {
  return (
    <div className="">
      {/* navbar */}
      <Navbar />
      {/* end navbar */}
      <div className="flex flex-col gap-6 justify-center w-full items-center ">
        <div className="mt-[50px]">
          <div className="relative  w-full gap-8  flex flex-col ">
            <div className="flex  max-w-7xl  justify-center flex-col gap-2 md:flex-row">
              <div className="relative  flex  gap-2   max-h-[330px] md:max-h-[100vh] overflow-hidden   px-4 sm:px-20 md:px-20 flex-col w-full md:w-1/2  ">
                <div className="flex  pb-2 justify-center items-center md:items-start md:justify-start">
                  <button className="px-[30px]  py-2 rounded-md font-[900] bg-[#F59620]">
                    About us
                  </button>
                </div>
                <h1 className="text-2xl md:text-3xl text-center md:text-start text-[#5F7487] font-bold leading-6 md:leading-[40px]">
                  "Creating Tomorrow's <br /> Technology with a Smile!"
                </h1>
                <p className="text-[16px] flex flex-col gap-4 text-center md:text-start font-light text-[#515151]  leading-5">
                  <span>
                    Infinity Tech Solutions: A Global Team of Committed
                    Professionals. Our unwavering mission is to empower
                    businesses worldwide with cutting-edge IT solutions,
                    fostering innovation, and fueling success on a global scale.
                  </span>
                  <span>
                    We are a dynamic international collective of experts, driven
                    by a shared commitment to technological excellence and a
                    profound understanding of the international landscape. Our
                    passion for innovation and our global perspective define our
                    approach to shaping the future of technology, transcending
                    borders, and delivering exceptional value to our clients.
                  </span>
                  <span>
                    At Infinity Tech Solutions, we take pride in our role as
                    global leaders in IT innovation, committed to forging a path
                    that is marked by expertise, innovation, and excellence.
                    Join us on our journey as we continue to make a profound
                    impact in the world of technology and transform industries
                    on an international stage
                  </span>
                </p>
              </div>
              <div className="flex  flex-col  min-w-[400px]   w-full mt-4 gap-4 md:mt-0 md:w-1/2 justify-center items-center md:items-start md:justify-start px-8">
                <Image
                  src={`/image/aboutus.png`}
                  alt=""
                  width={400}
                  height={0}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <Aboutus />
      </div>
      {/* our team member */}
      <div className="max-container padding-container flexCenter flex flex-col gap-6 py-[56px] px-10 justify-center items-center">
        <h1 className="text-[30px] md:text-[40px] text-[#5F7487] font-bold">
          Meet Our Team
        </h1>
        <div className="grid gap-x-10 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md">
          {/* dasdas */}
            { TEAMWORKERS.map((man, name) => (
          <div className="flex flex-col gap-2" key={name}>
            <div className="w-[200px] h-[250px]">
              <Image
                src={man.imageSrc}
                alt=""
                width={200}
                height={100}
                className="rounded-md h-full object-cover shadow-lg"
                />
            </div>
            <div className="flex flex-col gap-[-12px]">
              <h1 className="text-[14px] md:text-[18px] text-black font-[600]">
                {man.name}
              </h1>
              <span className="text-[16px] max-w-[200px] leading-5 font-[400] text-gray-700">
              {man.position}
              </span>
            </div>
          </div>
          ))}
        </div>
      </div>
      {/* end of our team `/image/member.png` */}
      <div className="mt-[100px]">
        <ContactUs />
      </div>
      <div className="flex  justify-center items-center">
        <Footer />
      </div>
    </div>
  );
}

export default AboutusPage;
