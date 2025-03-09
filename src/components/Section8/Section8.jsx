import React from 'react'
import "./Section8.css";

const factorsData = [
    {
      id: "001",
      title: "Quality Product",
      description:
        "As the best custom software development company in USA, we first build an MVP to test the efficiency of your product. We ensure the implementation of rigorous testing techniques, obtain continuous feedback to meet user requirements and deliver a user-friendly and intuitive software solution.",
    },
    {
      id: "002",
      title: "Agile Software Services",
      description:
        "As an esteemed software solution company, our team, with its rich expertise and diverse experience, optimizes all processes and employs the best agile practices for offering mobile software development services, leading to a reduction in custom software application development time by approximately 50%.",
    },
    {
      id: "003",
      title: "Security and Compliance",
      description:
        "As a trusted custom software development company, we adhere to relevant regulatory compliance and data security measures. We continually update our security protocols to counter emerging threats and maintain a secure, compliant environment tailored to your needs.",
    },
    {
      id: "004",
      title: "Latest Technology Stack",
      description:
        "As a remarkable software development services company, we utilize a range of advanced technologies and programming languages for your project that guarantees seamless integration of processes, from system architecture to frontend and backend development and post-delivery maintenance.",
    },
    {
      id: "005",
      title: "Complete Transparency",
      description:
        "Transparency is the key to effective business relationships. As a software development company, we always keep our clients up to date with the status of their projects and provide a clear view of every technological decision.",
    },
  ];

const Section8 = () => {
    return (
        <div className="factor_container">
          <h2 className="factor_heading">Factors that Cement Our Credibility as a Custom Software Development Company</h2>
          <p className="factor_para">With almost a decade of experience in the industry, we have the expertise to handle software development projects of diverse complexity levels, making Step Tech's custom software development services the right fit <span>for your IT consulting needs.</span></p>
          <br />
          <div className="factor_grid">
            {factorsData.map((factor, index) => (
              <div
                key={factor.id}
                className={`factor ${index % 2 === 0 ? "left_" : "right"}`}
              >
                <span className="factor_id">{factor.id}</span>
                <h3 className="factor_title">{factor.title}</h3>
                <p className="factor_description">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Section8