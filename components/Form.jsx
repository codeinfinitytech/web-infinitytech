"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [emapty, setEmpty] = useState();

  async function handelSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = {
      username,
      email,
      message,
    };
    if (username == "") {
      setEmpty("username");
      setLoading(false);
    } else if (email == "") {
      setEmpty("email");
      setLoading(false);
    } else if (message == "") {
      setEmpty("message");
      setLoading(false);
    } else {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setLoading(false);
        setEmpty("");
        setEmail("");
        setUsername("");
        setMessage("");
        toast.success("Email sent successfully");
        console.log("Message sent successfully");
      }
      if (!response.ok) {
        setLoading(false);
        setEmpty("");
        setEmail("");
        setUsername("");
        setMessage("");
        toast.error("message not sent");
        console.log("error sending message");
      }
    }
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <form
      onSubmit={handelSubmit}
      data-aos="flip-left"
      className="sm:max-w-lg mx-auto w-full flex flex-col gap-4"
    >
      <input
        value={username}
        type="text"
        className={`${
          emapty == "username" ? "border border-orange-300 " : ""
        }font-[300] bg-[#63798D] rounded-lg py-3 px-5 outline-none text-white placeholder:text-white w-full`}
        placeholder="Your name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        value={email}
        type="email"
        className={`${
          emapty == "email" ? "border border-orange-300 " : ""
        } font-[300] bg-[#63798D] rounded-lg py-3 px-5 outline-none text-white placeholder:text-white w-full`}
        placeholder="Your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        name=""
        value={message}
        className={`${
          emapty == "message" ? "border border-orange-300 " : ""
        } font-[300] bg-[#63798D] rounded-lg py-3 px-5 outline-none text-white resize-none placeholder:text-white w-full h-[130px]`}
        placeholder="Message"
        id=""
        cols={30}
        rows={10}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="  bg-[#F59620] w-full py-3.5 px-2 text-white rounded-lg mt-10 flex justify-center items-center"
      >
        {loading ? (
          <ThreeDots
            height="20"
            width="80"
            radius="9"
            color="white"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default Form;
