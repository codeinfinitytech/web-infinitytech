"use client";
import React from "react";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <div className="w-full h-[100vh] flex bg-[#56697A] items-center justify-center">
      <div className="w-[200px] h-[200px]  rounded-full border-r-0 border animate-spin border-white flex items-center justify-center">
        <div className="w-[150px] h-[150px]  rounded-full border-l-0 border animate-spin border-white flex items-center justify-center">
          <Image
            src={`/image/logoOgy.png`}
            alt="spin"
            width={50}
            height={0}
            className=" animate-reverse-spin"
          />
        </div>
        <style jsx>{`
          @keyframes reverse-spin {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          .animate-reverse-spin {
            animation: reverse-spin 2s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default SplashScreen;
