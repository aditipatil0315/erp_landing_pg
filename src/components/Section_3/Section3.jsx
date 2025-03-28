


import React from 'react';
import './Section3.css';

const Section3 = () => {
  return (
    <div className='section3' id='about'>
      <div className="sec3_left">
        <h1>About Us</h1>
        <div className="lower">
          <h2>We don’t just build software—we create systems that work for you.</h2>
          <h3>From defining key success metrics and streamlining workflows to building a strong, scalable foundation, we ensure smooth operations. Our solutions are tailored to your business needs, providing tools that solve real challenges and drive growth.</h3>
        </div>
      </div>

      <div className="sec3_right">
        <h2 className="video-heading">Step Tech Testimonials</h2>
        <div className="video-container">
          <iframe 
            className="yt-video" 
            src="https://www.youtube.com/embed/mOym_4LXkSU" 
            title="Step Tech Testimonial"
            allowFullScreen>
          </iframe>

          <iframe 
            className="yt-video" 
            src="https://www.youtube.com/embed/QftS2hIPqjk" 
            title="Step Tech Testimonial"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Section3;
