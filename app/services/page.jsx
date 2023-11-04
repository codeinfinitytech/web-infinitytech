import {
  Audit,
  ContactUs,
  DataProtection,
  Footer,
  Navbar2,
  Networking,
  Services,
  SystemAnalysis,
  WebDevelopement,
} from "@/components";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col justify-center">
      <Navbar2 />
      <div className="flex flex-col gap-6 justify-center w-full items-center ">
        <h1 className="text-[40px] text-center text-[#5F7487] font-bold leading-10 mt-10">
          "Creating Tomorrow's <br /> Technology with a Smile!"
        </h1>
        <Services />
        <div className="mt-[100px]">
          <WebDevelopement />
        </div>
        <div className="mt-[100px]">
          <SystemAnalysis />
        </div>
        <div className="mt-[100px]">
          <DataProtection />
        </div>
        <div className="mt-[100px]">
          <Audit />
        </div>
        <div className="mt-[100px]">
          <Networking />
        </div>
      </div>
      <div className="mt-[100px]">
        <ContactUs />
      </div>
      <div className="mt-[100px]">
        <Footer />
      </div>
    </main>
  );
};

export default page;
