
import React from "react";


const Ai_card = ({ icon, title }) => {
  return (
    <div className="ai-card">
      <div className="ai-icon">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
};

export default Ai_card;
