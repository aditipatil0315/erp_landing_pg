import React, { useState } from 'react';
import './Section1.css';
import img_2 from '../../assets/design_img.png';

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
          <a href="#about">About</a>
          <a href="#product">Products</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="content_section">
        <div className="left">
          <h1>Transform your business with custom-built management tools and workflows.</h1>
          <h3>Tailored solutions for all industries—manufacturing, healthcare, retail, and more.</h3>
          <a href="#explore"><button className='explore_btn' >Explore</button></a>
        </div>
        <div className="right">
          <img src={img_2} alt="Business Solutions" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
