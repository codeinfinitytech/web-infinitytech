"use client";
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

const JobOffers = () => {
  const [jobName, setJobName] = useState("");
  const [jobSalary, setJobSalary] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobTime, setJobTime] = useState("full-time"); // Default to full-time

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the form data
    const jobOfferData = {
      jobName,
      jobSalary: parseFloat(jobSalary), // Convert salary to a number
      jobDescription,
      jobTime,
    };

    // Add the job offer data to Firebase
    try {
      const docRef = await addDoc(collection(db, "jobOffers"), jobOfferData);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // Reset the form after submission
    setJobName("");
    setJobSalary("");
    setJobDescription("");
    setJobTime("full-time");
  };
  return (
    <div className="w-full flex ">
      <form
        onSubmit={handleSubmit}
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
      >
        {/* Job Name */}
        <div className="flex flex-col">
          <label>Job Name:</label>
          <input
            type="text"
            value={jobName}
            onChange={(e) => setJobName(e.target.value)}
            required
            className="border border-gray-500 p-3 rounded-md"
          />
        </div>

        {/* Job Salary */}
        <div className="flex flex-col">
          <label>Job Salary (per month):</label>
          <input
            type="number"
            value={jobSalary}
            onChange={(e) => setJobSalary(e.target.value)}
            required
            className="border border-gray-500 p-3 rounded-md"
          />
        </div>

        {/* Job Description */}
        <div className="flex flex-col">
          <label>
            Job Description:
            <br />
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
              className="border border-gray-500 p-3 rounded-md"
            />
          </label>
        </div>

        {/* Job Time */}
        <div className="flex flex-col px-5">
          <label>Job Time:</label>
          <select
            value={jobTime}
            className="border border-gray-500 p-3 rounded-md"
            onChange={(e) => setJobTime(e.target.value)}
          >
            <option value="full-time">Full Time</option>
            <option value="half-time">Half Time</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit "
          className="h-14  px-6 bg-orange-400 text-white  mt-4 rounded-md flex items-center justify-center "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobOffers;
