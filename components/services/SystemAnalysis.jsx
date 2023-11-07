import Image from "next/image";
import React from "react";

function SystemAnalysis() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <h1 className="text-[32px] text-[#F59620] font-[600]">System Analysis</h1>
      <div className="flex flex-col mdl:flex-row w-full max-w-7xl">
        <div className="flex flex-col w-full mdl:w-1/2 p-4">
          <div className="grid grid-cols-2 sml:grid-cols-4 gap-4 w-full">
            <button className="py-4 px-2 min-w-[100px] text-[12px] text-black bg-[#EEEEEE] rounded-md">
              Web and apps
            </button>
            <button className="py-4 px-2 min-w-[100px] text-[12px]  border border-[#EEEEEE] rounded-md">
              Payment gateways
            </button>
            <button className="py-4 px-2 min-w-[100px] text-[12px] text-black border border-[#EEEEEE]  rounded-md">
              Web and apps
            </button>
            <button className="py-4 px-2 min-w-[100px] text-[12px] text-black border border-[#EEEEEE]   rounded-md">
              Web and apps
            </button>
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
        <div className="relative flex flex-col w-full mdl:w-1/2 bg-[#EEEEEE] rounded-sm p-8 gap-4 overflow-hidden">
          <div className="absolute bottom-0 right-0">
            <svg
              width="210"
              height="427"
              viewBox="0 0 210 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-3.05176e-05 213.328C-3.05176e-05 331.146 93.8394 426.656 209.596 426.656C325.353 426.656 419.192 331.146 419.192 213.328C419.192 95.5102 325.353 0 209.596 0C93.8394 0 -3.05176e-05 95.5102 -3.05176e-05 213.328ZM324.232 213.328C324.232 277.767 272.908 330.005 209.596 330.005C146.285 330.005 94.9605 277.767 94.9605 213.328C94.9605 148.889 146.285 96.6512 209.596 96.6512C272.908 96.6512 324.232 148.889 324.232 213.328Z"
                fill="#56697A"
                fill-opacity="0.2"
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
          <div className="flex flex-col w-full  gap-4">
            <p className="text-[18px] line-clamp-6 text-black">
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

export default SystemAnalysis;
