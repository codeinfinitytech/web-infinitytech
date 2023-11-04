import React from "react";

import { Aboutus, ContactUs, Footer, Navbar2 } from "@/components";
import Image from "next/image";

function AboutusPage() {
  return (
    <div className="">
      {/* navbar */}
      <Navbar2 />
      {/* end navbar */}
      <div className="flex flex-col gap-6 justify-center w-full items-center ">
        <div className="mt-[50px]">
          <div className="relative  w-full gap-8  flex flex-col ">
            <div className="flex  max-w-7xl items-center justify-center flex-col gap-2 md:flex-row">
              <div className="relative flex  gap-2   h-[300px] mt-4  px-4 sm:px-20 md:px-20 flex-col w-full md:w-1/2  ">
                <div className="flex  justify-center items-center md:items-start md:justify-start">
                  <button className="px-[30px]  py-2 rounded-md font-[900] bg-[#F5962052]">
                    Aboutus
                  </button>
                </div>
                <h1 className="text-2xl md:text-3xl text-center md:text-start text-[#5F7487] font-bold leading-6 md:leading-10">
                  "Creating Tomorrow's <br /> Technology with a Smile!"
                </h1>
                <p className="text-[18px] text-center md:text-start font-light text-[#515151] line-clamp-5 leading-6">
                  Lorem ipsum dolor sit amet consectetur. Est risus tellus
                  lectus volutpat feugiat ultrices. Nulla facilisis varius nisi
                  justo ipsum amet enim. Eu vel iaculis et cursus fermentum
                  nullam malesuada cursus. Proin risus in maecenas at luctus
                  adipiscing amet ullamcorper. Condimentum fermentum at tellus
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
      <div className="flex flex-col gap-6 py-[56px] px-10 justify-center items-center">
        <h1 className="text-[30px] md:text-[40px] text-[#5F7487] font-bold">
          Meet Our Team
        </h1>
        <div className=" grid gap-x-10 grid-cols-2 md:grid-cols-4 md">
          <div className="flex flex-col gap-2">
            <Image src={`/image/member.png`} alt="" width={200} height={100} />
            <div className="flex flex-col">
              <h1 className="text-[18px] md:text-[24px] font-[600]">
                Nate Blaese
              </h1>
              <span className="text-[18px] text-[#292D32]">Developer</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={`/image/member.png`} alt="" width={200} height={100} />
            <div className="flex flex-col">
              <h1 className="text-[18px] md:text-[24px] font-[600]">
                Nate Blaese
              </h1>
              <span className="text-[18px] text-[#292D32]">Developer</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={`/image/member.png`} alt="" width={200} height={100} />
            <div className="flex flex-col">
              <h1 className="text-[18px] md:text-[24px] font-[600]">
                Nate Blaese
              </h1>
              <span className="text-[18px] text-[#292D32]">Developer</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={`/image/member.png`} alt="" width={200} height={100} />
            <div className="flex flex-col">
              <h1 className="text-[18px] md:text-[24px] font-[600]">
                Nate Blaese
              </h1>
              <span className="text-[18px] text-[#292D32]">Developer</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={`/image/member.png`} alt="" width={200} height={100} />
            <div className="flex flex-col">
              <h1 className="text-[18px] md:text-[24px] font-[600]">
                Nate Blaese
              </h1>
              <span className="text-[18px] text-[#292D32]">Developer</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={`/image/member.png`} alt="" width={200} height={100} />
            <div className="flex flex-col">
              <h1 className="text-[18px] md:text-[24px] font-[600]">
                Nate Blaese
              </h1>
              <span className="text-[18px] text-[#292D32]">Developer</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={`/image/member.png`} alt="" width={200} height={100} />
            <div className="flex flex-col">
              <h1 className="text-[18px] md:text-[24px] font-[600]">
                Nate Blaese
              </h1>
              <span className="text-[18px] text-[#292D32]">Developer</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={`/image/member.png`} alt="" width={200} height={100} />
            <div className="flex flex-col">
              <h1 className="text-[18px] md:text-[24px] font-[600]">
                Nate Blaese
              </h1>
              <span className="text-[18px] text-[#292D32]">Developer</span>
            </div>
          </div>
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
