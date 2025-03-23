import { useState } from "react";
import "../styles/Register.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Register = () => {
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const newCustomer = {
      name,
      accountNumber,
      mobileNumber,
      email,
      username,
      password,
    };

    try {
      const response = await fetch("/api/customers/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCustomer),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Registration successful! You can now log in.");
        setName("");
        setAccountNumber("");
        setMobileNumber("");
        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setError("Registration failed. Try again.");
      }
    } catch (error) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    // Add your code here
    <>
    <Navbar/>
    <div className="register-page">
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Register;
