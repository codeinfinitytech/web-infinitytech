"use client";
import { db } from "@/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const EventTable = () => {
  const [event, setEvent] = useState([]);

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
  const handleDelete = async (eventId) => {
    try {
      // Construct a reference to the document to be deleted
      const jobDocRef = doc(db, "events", eventId);

      // Delete the document
      await deleteDoc(jobDocRef);

      // Update the local state to reflect the deletion
      setJobOffers((prevJobOffers) =>
        prevJobOffers.filter((event) => event.id !== eventId)
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
            <th className="font-[500] text-start">Event title</th>
            <th className="font-[500] text-start">Event Date</th>

            <th className="font-[500] text-start">Operation</th>
          </tr>
        </thead>
        <tbody>
          {event.map((event) => (
            <tr className="border-b border-gray-300 h-10">
              <td className="font-[300] text-start">{event.title}</td>
              <td className="font-[300] text-start">{event.date}</td>
              <td className="font-[300] text-start text-red-400">
                {" "}
                <button
                  className=" cursor-pointer"
                  onClick={() => handleDelete(event.id)}
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

export default EventTable;
