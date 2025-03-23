import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column - Logo and Description */}
        <div className="footer-column">
          <div className="footer-logo">
            <span>BankindApp</span>
          </div>
          <p className="footer-description">
            Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam.
          </p>
          <p className="footer-contact">📞 +91 77740 72522</p>
        </div>

        {/* Middle Column - Resources */}
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">SaaS Development</a></li>
            <li><a href="#">Our Products</a></li>
            <li><a href="#">User Flow</a></li>
            <li><a href="#">User Strategy</a></li>
          </ul>
        </div>

        {/* Middle Column - Company */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About BankindApp</a></li>
            <li><a href="#">Contact & Support</a></li>
            <li><a href="#">Success History</a></li>
            <li><a href="#">Setting & Privacy</a></li>
          </ul>
        </div>

        {/* Middle Column - Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Premium Support</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Know Our Team</a></li>
            <li><a href="#">Download App</a></li>
          </ul>
        </div>

        {/* Right Column - Social Media */}
        {/* <div className="footer-column">
          <h3>Follow Us On</h3>
          <div className="footer-social">
            <a href="#"><img src="facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="twitter.svg" alt="Twitter" /></a>
            <a href="#"><img src="youtube.svg" alt="YouTube" /></a>
            <a href="#"><img src="linkedin.svg" alt="LinkedIn" /></a>
          </div>
          <p className="footer-copyright">© 2025 BankindApp</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
