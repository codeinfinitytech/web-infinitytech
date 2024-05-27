"use client";
import AddEvent from "@/components/AddEvent";
import AdminLogin from "@/components/AdminLogin";
import EventTable from "@/components/EventTable";
import JobOffers from "@/components/JobOffers";
import JobTable from "@/components/JobTable";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showJobOffersModal, setShowJobOffersModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);
  const [opt, setOpt] = useState("job");

  const [event, setEvent] = useState([]);
  const [job, setJob] = useState([]);
  // count event
  useEffect(() => {
    const fetchEvent = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvent(data);
    };

    fetchEvent();
  }, []);

  // count job
  useEffect(() => {
    const fetchJob = async () => {
      const querySnapshot = await getDocs(collection(db, "jobOffers"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJob(data);
    };

    fetchJob();
  }, []);

  // useEffect(() => {
  //   // Check local storage for the login status
  //   const storedLoginStatus = localStorage.getItem("isLoggedIn");

  //   // If the value is "true", set isLogin to true
  //   if (storedLoginStatus === "true") {
  //     setIsLogin(true);
  //   } else {
  //     // If not in local storage, check Firebase authentication

  //     setIsLogin(false);
  //   }
  // }, []);
  const openEventModal = () => {
    setEventModal(true);
  };
  const closeEventModal = () => {
    setEventModal(false);
  };
  const openJobOffersModal = () => {
    setShowJobOffersModal(true);
  };

  const closeJobOffersModal = () => {
    setShowJobOffersModal(false);
  };

  // const logout = () => {
  //   // Remove the logged-in status from local storage
  //   localStorage.removeItem("isLoggedIn");

  //   // Update the state to reflect the logged-out status
  //   setIsLogin(false);

  //   // Reload the page
  //   window.location.reload();
  // };

  return (
    <div className="w-full">
      {/* {isLogin ? ( */}
        <div className="w-full h-[100vh] px-8 md:px-40 pflex flex-col">
          <div className="relative w-full border-b border-gray-400 py-4">
            <h1 className="text-[16px] text-center md:text-start md:text-[24px]">
              Infinity Tech solution Admin Panel
            </h1>
            {/* <button
              onClick={logout}
              className="text-red-500 hover:opacity-60 cursor-pointer absolute right-0 top-7"
            >
              Logout
            </button> */}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 py-2">
            <div className="border border-gray-400 p-2 w-[150px] flex flex-col gap-2 rounded-md">
              <h1>{job.length}</h1>
              <span>Job Offers</span>
            </div>
            <div className="border border-gray-400 p-2 w-[150px] flex flex-col gap-2 rounded-md">
              <h1>{event.length}</h1>
              <span>up coming event</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-6 py-4">
              <h1
                onClick={() => setOpt("job")}
                className={`${
                  opt == "job" ? " text-blue-500" : "text-black"
                } cursor-pointer hover:opacity-60`}
              >
                Job Offers
              </h1>
              <h1
                onClick={() => setOpt("event")}
                className={`${
                  opt != "job" ? " text-blue-500" : "text-black"
                } cursor-pointer hover:opacity-60`}
              >
                Upcomming Event
              </h1>
            </div>
            {showJobOffersModal && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={closeJobOffersModal}>
                    &times;
                  </span>
                  <JobOffers />
                </div>
              </div>
            )}
            {eventModal && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={closeEventModal}>
                    &times;
                  </span>
                  <AddEvent />
                </div>
              </div>
            )}
            <div className="w-full">
              {opt == "job" ? (
                <>
                  {" "}
                  <h1
                    onClick={openJobOffersModal}
                    style={{ cursor: "pointer" }}
                    className="text-orange-400"
                  >
                    Click To Add Job
                  </h1>
                  <JobTable />
                </>
              ) : (
                <>
                  {" "}
                  <h1
                    onClick={openEventModal}
                    style={{ cursor: "pointer" }}
                    className="text-orange-400"
                  >
                    Click To Add Event
                  </h1>
                  <EventTable />
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">{/* JobOffers modal */}</div>
        </div>
      {/* ) : (
        <AdminLogin isLogin={setIsLogin} />
      )} */}
    </div>
  );
};

export default Admin;
