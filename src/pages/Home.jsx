import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <header className="header-section">
        <h2>Welcome to XYZ Bank</h2>
        <p>Secure & Fast Banking at Your Fingertips</p>
        <Link to="/register" className="cta-button">
          Get Started
        </Link>
      </header>

      {/* Latest News & Blogs Section */}
      <section className="news-section">
        <h3>Latest News & Updates</h3>
        <div className="news-container">
          {[
            {
              title: "New Loan Offers!",
              content: "We have introduced flexible loan plans for small businesses.",
            },
            {
              title: "Secure Your Banking",
              content: "Enable 2FA & biometric authentication for enhanced security.",
            },
          ].map((news, index) => (
            <article key={index} className="news-box">
              <h4>{news.title}</h4>
              <p>{news.content}</p>
            </article>
          ))}
        </div>
        <button className="explore-button">Explore More</button>
      </section>


      {/* Security & Compliance Section */}
      <section className="security-section">
        <h3>Security & Compliance</h3>
        <ul>
          <li>✅ End-to-end encryption for all transactions.</li>
          <li>✅ Multi-factor authentication available.</li>
          <li>✅ FDIC-insured for customer protection.</li>
        </ul>
      </section>



    </div>
  );
}

export default Home;
