import React, { useState } from "react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.message === "Login successful") {
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("adminToken", data.sessionToken);
        setMessage("Login successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/admin"; // Redirect to admin dashboard
        }, 1000);
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-10 p-6 sm:p-8 md:p-10 login-box rounded-2xl shadow-lg">
      <h2 className="mb-6 text-center font-bold text-xl sm:text-2xl text-white">
        Admin Login
      </h2>
      {message && <p className="text-center text-white mb-4">{message}</p>}
      <form onSubmit={handleLogin} className="space-y-5">
        <input
          type="text"
          className="w-fit input-box px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-100 "
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-fit input-box px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-100"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-green-300 px-6 py-2 rounded-lg cursor-pointer hover:bg-white transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>

  );
}
