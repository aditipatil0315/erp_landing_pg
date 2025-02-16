import React from "react";
import './Section6.css';


const Section6 = () => {
  const points = [
    { title: " Tailored to Your Business", description: "Get only the features you need, perfectly aligned with your workflow, and scalable as your business grows." , icon: "fa-solid fa-seedling"},
    { title: " AI & ML-Powered Decisions", description: "Leverage AI to predict trends, automate tasks, and gain smart insights for better decision-making.",icon: "fa-solid fa-robot" },
    { title: " Intuitive UI/UX", description: "Enjoy a simple, user-friendly interface with custom dashboards and a seamless design across all tools.", icon: "fa-solid fa-laptop" },
    { title: " Seamless Integration", description: "Easily connect your business tools, automate workflows, and centralize data for better insights.", icon: "fa-brands fa-connectdevelop" },
    { title: " Cost-Effective & Scalable", description: "Own your software with no recurring fees, faster training, and no need for costly third-party add-ons.", icon: "fa-solid fa-dollar-sign" },
    { title: " Full Control & Flexibility", description: "Ensure strong security, gain custom reports, and easily add or modify features as needed." , icon: "fa-solid fa-phone"},
    { title: " Dedicated Support", description: "Get expert assistance, regular updates, and full ownership without vendor lock-in.", icon: "fa-solid fa-seedling" },
    { title: " Strategic Optimization", description: "Track key performance, optimize workflows, and build a secure, scalable system tailored to you." ,icon: "fa-solid fa-brain"},
  ];

  return (
    <section className="section6" id="explore">
      <h2 className="section-title"> Why Custom ERP, CRM & Management Software?</h2>
      <br />
      <div className="cards_box">
        {points.map((point, index) => (
          <div key={index} className="feature">
            <i className={point.icon}></i>
            <br />
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section6;

