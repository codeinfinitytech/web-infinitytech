import React from "react";

const Aboutus = () => {
  return (
    <div className="relative  w-full pt-10 flex flex-col">
      <div className="relative flex w-full   bg-[#56697A] overflow-hidden">
        <div className="flex items-center justify-center  flex-col lg:flex-row z-20  px-[10vh]  py-[6vh] lg:py-[6vh] w-full gap-20 md:gap-40">
          <div className=" flex flex-col  w-full max-w-[500px] lg:w-1/3 items-center lg:items-start gap-4">
            <span
              className="text-[24px] md:text-[24px] font-bold text-[#F59620] font-outfit text-center md:text-start lg:items-start"
              style={{ lineHeight: 1 }}
            >
              We assist businesses in telling successful tales.
            </span>
            <span className="text-white text-[16px] font-outfit text-center md:text-start lg:items-start">
              Providing exceptional bespoke software solutions to startups,
              small companies, medium enterprises, and major corporations across
              all industries.
            </span>
          </div>
          <div className="flex flex-col  items-center">
            <div className="flex">
              <div className="flex flex-col w-[140px] md:w-[200px] lg:min-w-[300px]  items-start px-6 justify-center h-[100px] bg-[#5F7487]">
                <span className="text-white w-20 font-outfit">
                  Successful Clients
                </span>
                <span className="text-white font-bold text-[24px] font-outfit">
                  25
                </span>
              </div>
              <div className="flex flex-col w-[140px] md:w-[200px] lg:min-w-[300px]  max-w-[290px] items-start px-6 justify-center h-[100px] bg-[#56697A]">
                <span className="text-white w-20 font-outfit">
                  Customer Reach
                </span>
                <span className="text-white font-bold text-[24px] font-outift">
                  42
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col w-[140px] md:w-[200px]  lg:min-w-[300px]  max-w-[290px] items-start px-6 justify-center h-[100px] ">
                <span className="text-white w-40 font-outfit">
                  Projects <br /> Worked So far
                </span>
                <span className="text-white font-bold text-[24px] font-outfit">
                  25
                </span>
              </div>
              <div className="flex flex-col w-[140px] md:w-[200px] lg:min-w-[300px]  max-w-[290px] items-start px-6 justify-center gap-2 h-[100px] bg-[#5F7487]">
                <span className="text-white w-20 font-outfit">Companies</span>
                <span className="text-white font-bold font-outfit text-[24px]">
                  42
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-0 right-0">
          <svg
            width="329"
            height="336"
            viewBox="0 0 329 336"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M553.83 276.915C553.83 429.851 429.851 553.83 276.915 553.83C123.979 553.83 0 429.851 0 276.915C0 123.979 123.979 0 276.915 0C429.851 0 553.83 123.979 553.83 276.915ZM125.46 276.915C125.46 360.561 193.269 428.369 276.915 428.369C360.561 428.369 428.369 360.561 428.369 276.915C428.369 193.269 360.561 125.46 276.915 125.46C193.269 125.46 125.46 193.269 125.46 276.915Z"
              fill="#607486"
            />
            <circle cx="276.915" cy="276.915" r="96.2328" fill="#F59620" />
          </svg>
        </div>
      </div>
      {/* WHAT THEY SAY ABOUT US */}
    </div>
  );
};

export default Aboutus;
