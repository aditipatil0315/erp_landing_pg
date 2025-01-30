import React, { useState } from 'react';
import './Section1.css';
import img_2 from '../../assets/img_2.png';

const Section1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='section1'>
      <div className="navbar">
        <div className="logo">
          logo <br />text
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`links ${menuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </div>
          <button className="login-btn">Login</button>
      </div>

      <div className="content_section">
        <div className="left">
          <h1>Transform your business with custom-built management tools and workflows.</h1>
          <h3>Tailored solutions for all industries—manufacturing, healthcare, retail, and more.</h3>
          <button className='explore_btn'>Explore</button>
        </div>
        <div className="right">
          <img src={img_2} alt="Business Solutions" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
