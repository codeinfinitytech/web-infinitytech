// components/Login.js
"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

const AdminLogin = ({ isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Handle successful login (e.g., redirect, update state)
      localStorage.setItem("isLoggedIn", "true");
      isLogin(true);
      console.log("Logged in:", userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 justify-center h-[100vh] items-center">
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <h1 className="text-center text-[24px]">Infinity Tech Admin Login</h1>
        <div className="flex flex-col gap-1">
          <label>Email:</label>
          <input
            className="border border-gray-500 rounded-md py-3 px-2 bg-transparent"
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Password:</label>
          <input
            className="border border-gray-500 bg-tra rounded-md  py-3 px-2  bg-transparent"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-orange-400 text-white p-3 rounded-md"
        >
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;
