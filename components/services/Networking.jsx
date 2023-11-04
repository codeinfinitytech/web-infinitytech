import Image from "next/image";
import React from "react";

function Networking() {
  return (
    <div className="relative  w-full gap-8  flex flex-col ">
      <h1 className="text-[32px] text-center text-[#F59620] font-[700]">
        Networking
      </h1>
      <div className="flex max-w-7xl flex-col md:flex-row">
        <div className="relative  min-h-[400px] pt-20 px-4  sm:px-10 flex w-full md:w-1/2 justify-end bg-[#EEEEEE]">
          <div className=" absolute bottom-0 left-0">
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
      </div>
    </div>
  );
}

export default Networking;
