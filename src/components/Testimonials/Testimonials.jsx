import React from 'react'
import './Testimonials.css'
import { useState, useRef } from "react";

const testimonials = [
  {
    text: "Step Tect transformed our operations with a seamless ERP solution. Their team understood our needs, optimized workflows, and delivered on time. A game-changer for our business!",
    name: "- Sudhir brothers",
  
  },
  {
    text: "The Step Tect team went above and beyond to provide an ERP tailored to our business. Their proactive support and attention to detail made all the difference.",
    name: "- Afcons",
    
  },
  {
    text: "Step Tect’s HRMS made managing our team so much easier. Payroll, attendance, and performance tracking are now seamless and hassle-free.",
    name: "- Stride HRMS",
    
  },
  {
    text: "Step Tect’s ERP helped us automate finance, inventory, and customer management. Their expertise and commitment to excellence made the transition smooth and hassle-free.",
    name: "- Groundscrew company",
    
  },
  {
    text: "Implementing Step Tect’s HMS was the best decision for our healthcare facility. Their system is intuitive, scalable, and backed by an outstanding support team.",
    name: "- New Orchid Hospital ",
    
  },
 
];




const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonialsRef = useRef(null);
  
    const scrollToTestimonial = (index) => {
      setActiveIndex(index);
      testimonialsRef.current.scrollTo({
        left: index * testimonialsRef.current.clientWidth,
        behavior: "smooth",
      });
    };
  
    return (
      <div className="testimonial-container">

        <div className="testimonial-header">
          <h2>Testimonials that Prove Our Software Development Expertise</h2>
          <p>
            With over 3,000 businesses served globally and a 95% client retention rate over the past nine years, 
            here is what our clients have to say about our software development services.
          </p>
        </div>
  
        <div className="testimonial-slider" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">“{testimonial.text}”</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
            </div>
          ))}
        </div>
  
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => scrollToTestimonial(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };

export default Testimonials