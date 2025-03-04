import React from 'react'
import './Stats.css'

const StatsSection = ({ stats = [] }) => {
    return (
      <section className="stats-container">
        <div className="divv">
        {stats.length > 0 ? (
          stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <h2>{stat.number}</h2>
              <p>{stat.description}</p>
            </div>
          ))
        ) : (
          <p className="error-message">No stats available</p>
        )}
        </div>
        <button className="consultation-btn">Schedule Consultation Call</button>
      </section>
    );
  };
  
  export default StatsSection;