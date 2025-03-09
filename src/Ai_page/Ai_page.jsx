import React from 'react';
import './Ai_page.css';
import c1 from "../assets/client1.jpeg";
import c2 from "../assets/client2.jpeg";
import c3 from "../assets/client3.jpeg";
import c4 from "../assets/client4.jpeg";
import c5 from "../assets/client5.jpeg";
import { useState } from 'react';
// import bgVideo from "../assets/Ai_bg.mp4"; 




const Ai_page = () => {

  const clients = [c1, c2, c3, c4, c5];

const [openIndex, setOpenIndex] = useState(null);

const questions = [
  { id: 1, title: "Comprehensive and Tailored AI Services", content: "We offer AI services that are customized to meet your specific business needs." },
  { id: 2, title: "Compliance-First Approach", content: "Our AI solutions prioritize compliance with industry standards and regulations." },
  { id: 3, title: "Innovation-Inclusive Culture", content: "We foster an environment where innovation drives AI advancements." },
  { id: 4, title: "Proven Track Record", content: "Our AI implementations have consistently delivered impactful results." },
];

const toggleDropdown = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};


  return (
    <div className='ai_container'>
      <div className="video_container">
      {/* <video autoPlay loop muted playsInline defaultmuted="true" className="bg_video">
  <source src= "/videos/Ai_bg.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video> */}
        <div className="video_overlay"></div>
        <div className="heading_tagline">
          <h1>Empowering Autonomous Growth <br /> with Time-Tested AI Services and Solutions</h1>
          <h3>
            Unlock new potential and upgrade existing business capabilities with AI services that streamline operations, <br />
            elevate customer experience, and drive innovation.
          </h3>
          <button className='cta_ai'>AI CTA</button>

          <div className="clients_showcase">
        <h2>Trusted by</h2>
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




      <div className="scale_section">
        <h1>Scale Smarter with our Site of Artificial Intelligence Services and Solutions.</h1>
        <h3>Explore our comprehensive suite of AI services designed to drive profitable innovations and deliver tangible outcomes. From consulting to development and beyond, our extensive artificial intelligence services and solutions are tailored to meet unique business needs in any industry.</h3>
<br />
        <div className="applications_card">
          <h2>Business Applications</h2>
        <div className="services_box">

          
          <div className="services_given">
          <i className="fa-solid fa-robot"></i>
          Identification of AI-Driven Automation Opportunities

          </div>

          <div className="services_given">
          <i className="fa-solid fa-percent"></i>
          AI Governance and Compliance Strategies Creation

          </div>

          <div className="services_given">
          <i className="fa-solid fa-puzzle-piece"></i>
          AI Ethics and Responsible AI Frameworks Implementation

          </div>

          <div className="services_given">
          <i className="fa-solid fa-people-arrows"></i>
            Ethical andResponsible AI Framework Integration

          </div>

        </div>

        <br />
        <br />

        <h2>Our Offerings</h2>
        <p>Unlock the full creative potential of gen Al with our Generative Al  
your team to craft tailored roadmaps that seamlessly integrate ge  
impact use cases that drive innovation and efficiency.</p>
       
          
        </div>
      </div>



      <div className="faq-container">
      {/* Left Side Text Section */}
      <div className="faq-left">
        <h2>What Makes Our AI Services Ideal for You?</h2>
        <p>
          As a premium AI services company, we provide tailored AI solutions designed for your business needs.
          Our expertise ensures custom AI solutions that are strategically developed to deliver exceptional results.
        </p>
      </div>

      {/* Right Side Accordion Section */}
      <div className="faq-right">
        {questions.map((item, index) => (
          <div key={item.id} className="faq-item">
            <div className="faq-question" onClick={() => toggleDropdown(index)}>
              <span>{index + 1}/ {item.title}</span>
              <span className="arrow">{openIndex === index ? "▲" : "▶"}</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>





    <div className="our_team_section">
      <h2>Meet Our Experts</h2>
      <div className="member">
        <div className="profile">
          <div className="img_person">
          <img src="" alt="" />
          </div>
      
          <div className="intro">
          hello

          </div>
          

        </div>
        <div className="about">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quae architecto minima enim, aut illum.</h2>
        </div>

        
      </div>

      <div className="member">
        <div className="profile">
          <div className="img_person">
          <img src="" alt="" />
          </div>
      
          <div className="intro">
          hello

          </div>
          

        </div>
        <div className="about">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quae architecto minima enim, aut illum.</h2>
        </div>

        
      </div>


      <div className="member">
        <div className="profile"> 
          <div className="img_person">
          <img src="" alt="" />
          </div>
      
          <div className="intro">
          hello
          


          </div>
          

        </div>
        <div className="about">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quae architecto minima enim, aut illum.</h2>
        </div>

        
      </div>

      

  


    </div>
    
  


    </div>
  );
};

export default Ai_page;
