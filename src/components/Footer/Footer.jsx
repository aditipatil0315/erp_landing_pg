import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container_footer">
                <div className="footer-grid">
                    <div className="footer-section">
                        <div className="support-team">
                            <h4>Company</h4>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Products</li>
                                <li>News</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Help</h4>
                        <ul>
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li>Blogs</li>
                            <li>Youtube Channel</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Get in touch</h4>
                        <ul>
                            <li>SRD House, LNB Road, Mangaldoi, Assam,784125</li>
                            <li>Email us : hello@organictea.com</li>
                            <li>Call us: +91 8210687508</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© Copyright 2024, All Rights Reserved </p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;