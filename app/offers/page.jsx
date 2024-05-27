import { Navbar } from "@/components";
import Job from "@/components/events/Job";
import React from "react";

export const metadata = {
  title: "Job Offers | Infinity-Tech",
};


const Offers = () => {
  return (
    <div>
      <Navbar />
      <Job />
    </div>
  );
};

export default Offers;
