"use client";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

const Event = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvent(data);
      setLoading(false);
    };

    fetchEvent();
  }, []);
  return (
    <div className="px-4 md:px-24 py-10 flex flex-col gap-2  ">
      <h1 className="text-center text-[32px] text-black py-4">
        Upcoming <span className="text-orange-400"> Coding </span> Adventures
      </h1>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <InfinitySpin width="200" color="#F59620" />
        </div>
      ) : (
        <>
          <h1 className=" text-center text-[30px] text-gray-500">
            {event.length} Event
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full py-4">
            {event.map((event) => (
              <div className="flex flex-col gap-2">
                <div className="w-[250px]">
                  <img
                    src={event.imageUrl}
                    alt=""
                    className="w-full object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col ">
                  <span className="text-orange-400">{event.date}</span>
                  <h1 className="text-[24px] font-[600]">{event.title}</h1>
                  <p className="text-[14px] text-gray-500">
                    {event.description}
                  </p>
                  <span className="text-orange-400 text-[14px] cursor-pointer">
                    Lead more
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Event;
