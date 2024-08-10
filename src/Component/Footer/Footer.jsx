import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-column footer-column-large contact-info">
                        <h3>Contact Info</h3>
                        <p className="text-justify">
                            <label>Address:</label>
                            Finance and Economics Club, IIT Kharagpur<br />
                            Kharagpur, West Bengal, India
                        </p>
                        <p className="text-justify">
                            <label>Email:</label>
                            <a href="mailto:fec.iitkgp@gmail.com">fec.iitkgp@gmail.com</a>
                        </p>
                        <p className="text-justify">
                            <label>Phone:</label>
                            +91 12345 67890
                        </p>
                    </div>
                    <div className="footer-column footer-column-small">
                        <h3>Categories</h3>
                        <ul className="footer-links">
                            <li><a href="#">FINANCE</a></li>
                            <li><a href="#">Stock Market</a></li>
                            <li><a href="#">Financial Modeling</a></li>
                            <li><a href="#">Crypto</a></li>
                        </ul>
                    </div>
                    <div className="footer-column footer-column-small">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/team">Team</a></li>
                            <li><a href="/privacy-policy/">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="footer-bottom-container">
                <div className="footer-row">
                    <div className="footer-bottom-column footer-bottom-column-large">
                        <p className="copyright-text">
                            Copyright © 2022 All Rights Reserved by
                            <a href="#"> FEC</a>
                        </p>
                    </div>
                    <div className="footer-bottom-column footer-bottom-column-small">
                        <ul className="social-icons">
                            <li><SocialIcon url="https://www.facebook.com/people/Finance-and-Economics-Club-IIT-Kharagpur/100093523843643/?_rdr"  target="_blank" className="social-icon" /></li>
                            <li><SocialIcon url="mailto:fec.iitkgp@gmail.com" target="_blank" className="social-icon" /></li>
                            <li><SocialIcon url="https://www.instagram.com/fec_iitkgp" target="_blank" className="social-icon" /></li>
                            <li><SocialIcon url="https://www.linkedin.com/company/fec-iit-kharagpur"  target="_blank" className="social-icon" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
