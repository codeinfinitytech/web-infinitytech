import React, { useRef } from "react";

const NoIntern = ({handelModal}) => {
    const modalRef = useRef()
    
  return (
    <div className="w-full h-[100vh]  flex items-center p-4 justify-center  bg-black/50 fixed top-0 z-40 left-0">
      <div ref={modalRef} className="w-full md:w-[60%] bg-white p-4 flex flex-col gap-[20px] ">
        <span className="text-center">
          Thank you for your interest in our software internship program! At the
          moment, we don't have any open internship positions. However, we're
          actively working to open up opportunities for aspiring interns like
          yourself. Stay tuned for updates on our website, and we'll notify you
          as soon as new positions become available. We appreciate your patience
          and look forward to potentially working with you in the future!
        </span>
        <button onClick={handelModal} className="p-3 mx-auto flex px-10 bg-[#F59620] text-white">
          Go back
        </button>
      </div>
    </div>
  );
};

export default NoIntern;
