import React from "react";
import "./Card.css";

const Card = ({ heading, text }) => {
  return (
    <div className="card">
      <h2 className="card-heading">{heading}</h2>
      {/* <br /> */}
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;
