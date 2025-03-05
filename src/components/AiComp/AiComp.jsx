import React from 'react'
import './AiComp.css'
import StatsSection from '../Stats/Stats.jsx'



const aiIntegrationData = [
    {
      number: "Higher Automation",
      description:
        "With the latest AI LLMs taking over most of your mundane business processes, focus your resources’ attention on ideas, strategies, and actions of growth.",
    },
    {
      number: "Smarter Predictions",
      description:
        "Empower your efficiency, intelligence, and analytics teams with smarter, automatically curated, customizable data to provide deeper on-demand insights and consistent real-time monitoring.",
    },
    {
      number: "Quality Coding",
      description:
        "One of our development teams' biggest boons is adding AI coding and code-reviewing integrations that help build top-quality codes for your product and provide a no-code environment for future innovations.",
    },
  ];



const AiComp = () => {
  return (
    <section className="ai-integration-section">
    <div className="ai-integration-content">
      <h2>Your Software Product Comes Pre-Built With AI Integrations</h2>
      <p>
        One of our goals is to provide our clients with a ready competitive 
        advantage and integrate AI capabilities during the software development 
        process to empower:
      </p>
    </div>

    <div className="ai-cards-container">
        <StatsSection stats={aiIntegrationData}/>
    </div>
        
    </section>
  )
}

export default AiComp