import React from "react";
import './Section6.css';


const Section6 = () => {
  const points = [
    { title: " Tailored to Your Business", description: "Get only the features you need, perfectly aligned with your workflow, and scalable as your business grows." },
    { title: " AI & ML-Powered Decisions", description: "Leverage AI to predict trends, automate tasks, and gain smart insights for better decision-making." },
    { title: " Intuitive UI/UX", description: "Enjoy a simple, user-friendly interface with custom dashboards and a seamless design across all tools." },
    { title: " Seamless Integration", description: "Easily connect your business tools, automate workflows, and centralize data for better insights." },
    { title: " Cost-Effective & Scalable", description: "Own your software with no recurring fees, faster training, and no need for costly third-party add-ons." },
    { title: " Full Control & Flexibility", description: "Ensure strong security, gain custom reports, and easily add or modify features as needed." },
    { title: " Dedicated Support", description: "Get expert assistance, regular updates, and full ownership without vendor lock-in." },
    { title: " Strategic Optimization", description: "Track key performance, optimize workflows, and build a secure, scalable system tailored to you." },
  ];

  return (
    <section className="section6">
      <h2 className="section-title"> Why Custom ERP, CRM & Management Software?</h2>
      <div className="cards_box">
        {points.map((point, index) => (
          <div key={index} className="feature">
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section6;

