import React, { useState } from 'react';
import './Section1.css';
import c1 from "../../assets/client1.jpeg";
import c2 from "../../assets/client2.jpeg";
import c3 from "../../assets/client3.jpeg";
import c4 from "../../assets/client4.jpeg";
import c5 from "../../assets/client5.jpeg";


const Section1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const clients = [
    c1, c2, c3, c4, c5

    
  ];

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
          <h1><span>Transform your business</span> with custom-built management tools and workflows.</h1>
          <h3>Tailored solutions for all industries—manufacturing, healthcare, retail, and more.</h3>
          <h3>Unlock efficiency with custom management tools—tailored for every industry! <br /> <br /> <span>Contact us today</span></h3>
          <div className="btns">
          <a href="#contact"><button className='explore_btn' >Book My Slot</button></a>
          <a href="#explore"><button className='explore_btn' >Explore</button></a>
          </div>
        </div>

        <div className="clients-section">
      <h2>Our Clients</h2>
      <div className="clients-grid">
        {clients.map((logo, index) => (
          <div key={index} className="client-logo">
            <img src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>


        
      </div>
    </div>
  );
};

export default Section1;
