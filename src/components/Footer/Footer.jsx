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
                        <h4>Get in touch - India</h4>
                        <ul>
                            <li>12B, Reliable Tech Park, C Wing, Thane - Belapur Rd, Gavate Wadi, MIDC, Airoli, Mumbai, Navi Mumbai, Maharashtra 400708, India</li>
                            <br />
                            <li>Email us : contact@stepdigitals.com</li>
                            <br />
                            <li>Call us: +91-8692845191</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Get in touch - Canada</h4>
                        <ul>
                            <li>Toronto, Canada</li>
                            <br />
                            <li>Email us : canada@stepdigitals.com
                            </li>
                            <br />
                            <li>Call us: +1(437)808-1479</li>
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