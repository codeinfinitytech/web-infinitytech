import React from "react";
import { useRef, useEffect } from "react";

const JobModal = ({ isOpen, onClose, jobDetails }) => {
  const modalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay absolute bg-black/10 rounded-md p-6 w-full h-full top-0 left-0 flex justify-center items-center">
      <div
        className="modal bg-white py-10 px-4 relative pb-10 sm:80% md:w-[40%] rounded-md gap-4 flex flex-col items-center justify-center"
        ref={modalRef}
      >
        {/* <button className="modal-close" onClick={onClose}>
          &times;
        </button> */}
        <div className=" absolute top-[-6vh] py-4 w-[100px] flex items-center justify-center  bg-orange-400 rounded-md">
          <h1 className="text-[30px] text-white">
            {jobDetails.jobName.substring(0, 2).toUpperCase()}
          </h1>
        </div>
        <div className=" items-center flex flex-col">
          <h2 className="flex  flex-row items-center gap-1 mt-4">
            <span>Job Titel:</span>
            {jobDetails.jobName}
          </h2>
          <p>
            Salary:{" "}
            <span className="text-orange-400">{jobDetails.jobSalary}</span> Frw
          </p>
          <p>
            Time: <span className="text-orange-400">{jobDetails.jobTime}</span>
          </p>
        </div>
        <p className="text-center px-5">{jobDetails.jobDescription}</p>
        {/* Add other job details as needed */}
        <button className="rounded-md border p-4 hover:bg-orange-400/80 bg-orange-400 text-white w-[200px]">
          Aplly now
        </button>
      </div>
    </div>
  );
};

export default JobModal;
