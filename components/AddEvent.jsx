"use client";
import { db, storage } from "@/firebase";
import { addDoc, collection, refEqual } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import React, { useState } from "react";

const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image to Firebase Storage
    try {
      // Upload image to Firebase Storage and get download URL
      const imageUrl = await uploadImage();

      // Store event details with image URL in Firestore
      const eventsRef = collection(db, "events");
      const newEvent = {
        title,
        date,
        description,
        imageUrl,
        createdAt: new Date(),
      };

      await addDoc(eventsRef, newEvent);
      console.log("inserted");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  const uploadImage = async () => {
    if (!image) {
      return null;
    }

    const storageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(storageRef, image);

    // Get the download URL for the uploaded image
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };
  return (
    <div className="w-full flex ">
      <form
        onSubmit={handleSubmit}
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
      >
        {/* Job Name */}
        <div className="flex flex-col">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border border-gray-500 p-3 rounded-md"
          />
        </div>

        {/* Job Salary */}
        <div className="flex flex-col">
          <label>Date of event:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="border border-gray-500 p-3 rounded-md"
            />
          </label>
        </div>

        {/* Job Time */}
        <div className="flex flex-col">
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="border border-gray-500 p-3 rounded-md"
          />
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

export default AddEvent;
