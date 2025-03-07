import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-section branding">
            <h2>Ayurvedic</h2>
            <p>Harness the wisdom of Ayurveda for a balanced, natural lifestyle.</p>
          </div>
          <div className="footer-section links">
            <h3 className="quick">Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/health-care">Health Care</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section services">
            <h3 className="our-services">Our Services</h3>
            <ul>
              <li><a href="/services/herbal">Herbal Treatments</a></li>
              <li><a href="/services/remedies">Natural Remedies</a></li>
              <li><a href="/services/consultations">Ayurvedic Consultations</a></li>
            </ul>
          </div>
          <div className="footer-section stores">
            <h3>Our Stores</h3>
            <ul>
              <li><a href="/stores/india">India</a></li>
              <li><a href="/stores/usa">USA</a></li>
              <li><a href="/stores/uk">United Kingdom</a></li>
              <li><a href="/stores/canada">Canada</a></li>
              <li><a href="/stores/australia">Australia</a></li>
            </ul>
          </div>
          <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <Facebook className="social-icon" />
              <Twitter className="social-icon" />
              <Instagram className="social-icon" />
              <YouTube className="social-icon" />
            </div>
          </div>
        </div>
        <div className="newsletter-container">
          <h3>Stay Updated With Our Newsletter</h3>
          <div className="email-input-container">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ayurvedic E-Commerce. All rights reserved.</p>
          <div className="footer-links-bottom">
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;