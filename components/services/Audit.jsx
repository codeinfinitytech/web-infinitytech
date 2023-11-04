import React from "react";

import Image from "next/image";

function Audit() {
  return (
    <div className="relative  w-full gap-8  flex flex-col ">
      <h1 className="text-[32px] text-center text-[#F59620] font-[700]">
        Audit & consultancy
      </h1>
      <div className="flex max-w-7xl flex-col md:flex-row">
        <div className="flex flex-col   w-full mt-4 gap-4 md:mt-0 md:w-1/2 justify-center items-center  px-4">
          <div className="flex w-full items-center justify-center ">
            <div className="grid  grid-cols-2  gap-2 items-center justify-center  sm:grid-cols-4  ">
              <button className="px-[10px] py-[16px] min-w-[100px] max-w-[250px]  text-[14px] font-[500] bg-gray-200 rounded-md">
                Web and Apps
              </button>
              <button className="px-[10px] py-[16px] min-w-[100px] max-w-[250px] text-[14px] font-[500] bg-gray-200 rounded-md">
                Web and Apps
              </button>
              <button className="px-[10px] py-[16px] min-w-[100px] max-w-[250px] text-[14px] font-[500] bg-gray-200 rounded-md">
                Web and Apps
              </button>
              <button className="px-[10px] py-[16px] min-w-[100px] max-w-[250px] text-[14px] font-[500] bg-gray-200 rounded-md">
                Web and Apps
              </button>
            </div>
          </div>
          <div className="flex flex-col  sm:flex-row gap-2">
            <Image
              src={`/image/service1.png`}
              width={200}
              height={0}
              alt=""
              className="w-full sm:w-1/2 "
            />
            <Image
              src={`/image/service1.png`}
              width={200}
              height={0}
              alt=""
              className="w-full sm:w-1/2"
            />
          </div>
        </div>

        <div className="relative  h-[400px] pt-20 px-20 flex w-full md:w-1/2 justify-end bg-[#EEEEEE]">
          <div className=" absolute bottom-0 right-0">
            <svg
              width="210"
              height="400"
              viewBox="0 0 210 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-3.05176e-05 213.328C-3.05176e-05 331.146 93.8394 426.656 209.596 426.656C325.353 426.656 419.192 331.146 419.192 213.328C419.192 95.5102 325.353 0 209.596 0C93.8394 0 -3.05176e-05 95.5102 -3.05176e-05 213.328ZM324.232 213.328C324.232 277.767 272.908 330.005 209.596 330.005C146.285 330.005 94.9605 277.767 94.9605 213.328C94.9605 148.889 146.285 96.6512 209.596 96.6512C272.908 96.6512 324.232 148.889 324.232 213.328Z"
                fill="#56697A"
                fill-opacity="0.15"
              />
              <ellipse
                cx="72.8384"
                cy="74.1352"
                rx="72.8384"
                ry="74.1352"
                transform="matrix(-1 0 0 1 282.435 139.193)"
                fill="#F59620"
                fill-opacity="0.32"
              />
            </svg>
          </div>
          <div>
            <p className="text-[18px] text-center md:text-start line-clamp-6 md:line-clamp-6">
              Lorem ipsum dolor sit amet consectetur. Est risus tellus lectus
              volutpat feugiat ultrices. Nulla facilisis varius nisi justo ipsum
              amet enim. Eu vel iaculis et cursus fermentum nullam malesuada
              cursus. Proin risus in maecenas at luctus adipiscing amet
              ullamcorper. Condimentum fermentum at tellus facilisis pulvinar.
              Nisi eros viverra neque pulvinar malesuada id et in sem. Faucibus
              quisque lacus rutrum eu purus accumsan at cursus hac. Convallis
              amet aliquet nisi aenean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audit;
