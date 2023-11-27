"use client";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import JobModal from "./JobModal";

const Job = () => {
  const [jobOffers, setJobOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  useEffect(() => {
    const fetchJobOffers = async () => {
      const querySnapshot = await getDocs(collection(db, "jobOffers"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJobOffers(data);
      setLoading(false);
    };

    fetchJobOffers();
  }, []);
  return (
    <div className="md:px-24 px-4 py-10 flex flex-col gap-2  ">
      <JobModal
        isOpen={selectedJob !== null}
        onClose={closeModal}
        jobDetails={selectedJob}
      />
      <h1 className="text-center text-blac text-[32px] py-4">
        Explore Exciting <span className="text-orange-400">Job</span>{" "}
        Opportunities
      </h1>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <InfinitySpin width="200" color="#F59620" />
        </div>
      ) : (
        <>
          <h1 className=" text-center text-[40px] text-gray-500">
            {jobOffers.length} job
          </h1>
          <div className="flex flex-col gap-2 w-full">
            {jobOffers.map((jobOffer) => (
              <div
                onClick={() => openModal(jobOffer)}
                className="cursor-pointer hover:bg-gray-300/80 flex fle-col items-center justify-between bg-gray-200/80 p-2 rounded-md px-2 w-full"
              >
                <div className="flex flex-col md:flex-row w-full md:w-[40] gap-4 items-center">
                  <div className="py-4 w-[100px] flex items-center justify-center  bg-orange-400/80 rounded-md">
                    <h1 className="text-[30px] text-white">
                      {jobOffer.jobName.substring(0, 2).toUpperCase()}
                    </h1>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-[400] text-center md:text-start">
                      {jobOffer.jobName}
                    </h1>
                    <div className="flex flex-row gap-4">
                      <span>At infinity Tech </span>
                      <span className="text-orange-400">
                        {jobOffer.jobTime}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  {/* <h1 className="text-orange-400">Open</h1> */}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Job;
