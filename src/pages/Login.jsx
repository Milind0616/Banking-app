import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("customer");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const endpoint =
      userType === "admin" ? "/api/admin/login" : "/api/customers/login";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Login successful!");
        localStorage.setItem("username", username);
        localStorage.setItem("userType", userType);
        alert(`Welcome, ${username}!`);
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <>
    <Navbar/>
     <div className="login-page">

    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="customer">Customer Login</option>
          <option value="admin">Admin Login</option>
        </select>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
