import React, { useState } from "react";
import NoIntern from "../NoIntern";

const Internship = () => {
  const [openModal,setOpenModal] = useState(false)
  const handelModal = ()=>{
    setOpenModal(!openModal)
  }
  return (
    <div className="px-[10px] md:px-[50px] py-24 flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[10px] items-center">
        <h1 className="text-center text-[42px] max-w-[600px] leading-[44px] font-[600]">
          <span className="text-blue-600 ">Software Development</span>{" "}
          Internship Opportunity Awaits!
        </h1>
        <span className="text-center text-gray-500 font-[300] max-w-[800px]">
          Begin your journey into the world of software development with our
          immersive MERN Stack Internship Program. Dive deep into the
          intricacies of MongoDB, Express.js, React, and Node.js as you gain
          invaluable experience through real-world projects and mentorship from
          industry experts. Don't miss this opportunity to master the MERN stack
          and kickstart your career in web development. Apply now and unlock the
          door to endless possibilities!
        </span>
        <span
     
          onClick={handelModal}
          className="p-3 cursor-pointer rounded-[14px] text-[18px] mt-4 px-10 w-[200px] flex items-center justify-center bg-[#F59620] text-white"
        >
          Apply Now
        </span>
      </div>
      {openModal ?(
        <NoIntern handelModal={handelModal}/>

      ): (
        ""
      )}
    </div>
  );
};

export default Internship;
