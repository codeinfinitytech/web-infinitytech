"use  client";
import { db } from "@/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const JobTable = () => {
  const [jobOffers, setJobOffers] = useState([]);

  useEffect(() => {
    const fetchJobOffers = async () => {
      const querySnapshot = await getDocs(collection(db, "jobOffers"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJobOffers(data);
    };

    fetchJobOffers();
  }, []);
  const handleDelete = async (jobId) => {
    try {
      // Construct a reference to the document to be deleted
      const jobDocRef = doc(db, "jobOffers", jobId);

      // Delete the document
      await deleteDoc(jobDocRef);

      // Update the local state to reflect the deletion
      setJobOffers((prevJobOffers) =>
        prevJobOffers.filter((job) => job.id !== jobId)
      );
    } catch (error) {
      console.error("Error deleting job offer: ", error);
    }
  };
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-300 h-10">
            <th className="font-[500] text-start">Job Name</th>
            <th className="font-[500] text-start">Job Salary</th>
            <th className="font-[500] text-start">Job Time</th>
            <th className="font-[500] text-start">Operation</th>
          </tr>
        </thead>
        <tbody>
          {jobOffers.map((job) => (
            <tr className="border-b border-gray-300 h-10">
              <td className="font-[300] text-start">{job.jobName}</td>
              <td className="font-[300] text-start">{job.jobSalary}</td>
              <td className="font-[300] text-start">{job.jobTime}</td>
              <td className="font-[300] text-start text-red-400">
                {" "}
                <button
                  className=" cursor-pointer"
                  onClick={() => handleDelete(job.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default JobTable;
