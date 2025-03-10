import React from 'react';
import './Ai_page.css';
import Ai_card from '../../src/components/Ai_card/Ai_card';
import c1 from "../assets/client1.jpeg";
import c2 from "../assets/client2.jpeg";
import c3 from "../assets/client3.jpeg";
import c4 from "../assets/client4.jpeg";
import c5 from "../assets/client5.jpeg";
import raveena from '../assets/Raveena.jpeg'
import manthan from '../assets/Manthan.jpeg'
import sanskar from '../assets/Sanskar.jpeg'

import { useState } from 'react';
import { FaHeartbeat, FaUtensils, FaShoppingCart, FaCarBattery, FaPlane, FaMusic, FaUsers, FaGlobe, FaHome, FaLeaf, FaGasPump, FaCar, FaUmbrella, FaIndustry, FaGraduationCap, FaNetworkWired, FaBoxes, FaTractor,FaPython,  FaDatabase, FaRobot, FaServer, FaBox, FaProjectDiagram, FaChartLine, FaTable, FaChartBar, FaBrain, FaCloud, FaAws, FaCode, FaTools, FaInfinity, FaBook, FaCubes  } from "react-icons/fa";
// import { FaPython, FaDatabase, FaRobot, FaServer, FaBox, FaProjectDiagram, FaChartLine, FaTable, FaChartBar, FaBrain, FaCloud, FaAws, FaCode, FaTools, FaInfinity, FaBook, FaCubes } from "react-icons/fa";




const ai_cardData = [
  { icon: <FaHeartbeat />, title: "Healthcare" },
  { icon: <FaChartLine />, title: "Finance" },
  { icon: <FaUtensils />, title: "Restaurant" },
  { icon: <FaShoppingCart />, title: "eCommerce" },
  { icon: <FaCarBattery />, title: "Electric Vehicle (EV)" },
  { icon: <FaCloud />, title: "SaaS" },
  { icon: <FaPlane />, title: "Travel" },
  { icon: <FaMusic />, title: "Entertainment" },
  { icon: <FaUsers />, title: "On-Demand" },
  { icon: <FaGlobe />, title: "Social Media" },
  { icon: <FaBoxes />, title: "Logistics" },
  { icon: <FaGraduationCap />, title: "Education" },
  { icon: <FaHome />, title: "Real Estate" },
  { icon: <FaLeaf />, title: "Aviation" },
  { icon: <FaNetworkWired />, title: "Telecom" },
  { icon: <FaTractor />, title: "Agriculture" },
  { icon: <FaGasPump />, title: "Oil and Gas" },
  { icon: <FaCar />, title: "Automotive" },
  { icon: <FaUmbrella />, title: "Insurance" },
  { icon: <FaIndustry />, title: "Manufacturing" },
]; 


const techStack = [
  { icon: <FaPython />, title: "Python" },
  { icon: <FaDatabase />, title: "Big Data" },
  { icon: <FaRobot />, title: "Machine Learning" },
  { icon: <FaServer />, title: "ETL" },
  { icon: <FaBox />, title: "Databricks" },
  { icon: <FaProjectDiagram />, title: "OpenCV" },
  { icon: <FaChartLine />, title: "Scikit-learn" },
  { icon: <FaTable />, title: "Pandas" },
  { icon: <FaChartBar />, title: "Tableau" },
  { icon: <FaBrain />, title: "Tensorflow" },
  { icon: <FaChartBar />, title: "Grafana" },
  { icon: <FaCloud />, title: "Azure" },
  { icon: <FaAws />, title: "AWS" },
  { icon: <FaCode />, title: "API" },
  { icon: <FaTools />, title: "DevOps" },
  { icon: <FaInfinity />, title: "Oracle" },
  { icon: <FaBook />, title: "Jupyter" },
  { icon: <FaCubes />, title: "Kubernetes" },
];




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
      <h2>Meet Our Experts Members</h2>
      <div className="member">
        <div className="profile">
          <div className="img_person">
          <img src= {sanskar} alt="" />
          </div>
      
          <div className="intro">
          <h2>Sanskaar Dubey</h2>
          <p>Founder</p>

          </div>
          

        </div>
        <div className="about">
          <p>Sanskar Dubey is the founder of Step Consultancy, the parent company of Step Tech, a venture dedicated to building innovative, scalable, and business-centric technology solutions. With a vision to bridge the gap between businesses and digital transformation, Step Tech focuses on creating high-performance web and mobile applications, enterprise software, and AI-driven automation tools that drive efficiency and growth. </p>
        </div>

        
      </div>

      <div className="member">
        <div className="profile">
          <div className="img_person">
          <img src= {raveena} alt="" />
          </div>
      
          <div className="intro">
          <h2>Raveena Mishra </h2>
          <p>Project Associate | Tech Management Lead</p>

          </div>
          

        </div>
        <div className="about">
          <p>Raveena ensures the seamless execution of tech projects by streamlining processes, optimizing team collaboration, and maintaining on-time delivery. She plays a key role in project planning, resource management, and agile implementation while ensuring quality and efficiency throughout the development cycle.</p>
        </div>

        
      </div>


      <div className="member">
        <div className="profile"> 
          <div className="img_person">
          <img src= {manthan} alt="" />
          </div>
      
          <div className="intro">
          <h2>Manthan Jethwani</h2>
          <p>AI Engineer | AI Agents | AI Automation</p>
          


          </div>
          

        </div>
        <div className="about">
          <p>Manthan designs and builds intelligent AI solutions and Ai agents. He empowers businesses to reclaim valuable time by automating repetitive tasks, optimizing processes, reducing overhead, and accelerating growth.</p>
        </div>

        
      </div>

      

  


    </div>



    <div className="ai_cards">
      <h1>Industries We Empower and Transform with Our AI Services</h1>
      <p>
        Our AI services redefine businesses across industries by driving innovation, improving efficiency, and unlocking new growth opportunities. From healthcare, finance, retail, and real estate to travel and hospitality, we empower businesses to stay ahead of the competition with cutting-edge AI business solutions tailored to their unique needs.
      </p>
      <div className="grid-container">
        {ai_cardData.map((item, index) => (
          <Ai_card key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>



    <div className="ai_cards">
      <h1>AI Tech Stack Cluster We Use for Intelligent Model Development</h1>
      <p>
      Our custom AI solutions for businesses are meticulously crafted using an ideal technology stack tailored to meet every requirement of your business. From advanced machine learning frameworks to cloud-based platforms, we utilize the best tools to ensure scalable, stable, efficient, and innovative AI-oriented outcomes.
      </p>
      <div className="grid-container">
        {techStack.map((item, index) => (
          <Ai_card key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>


  


    </div>
  );
};

export default Ai_page;
