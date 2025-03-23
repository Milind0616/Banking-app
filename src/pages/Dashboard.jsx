import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
    <Navbar/>
    <div>
      <h2>Welcome to Your Dashboard</h2>
      <p>View your account balance and transactions.</p>
    </div>
    <Footer/>
    </>
  );
}

export default Dashboard;
