import React from 'react'
import './Section4.css'

const Section4 = () => {
  return (
    <div className='section4'>
      <div className="sec4_upper">
        <br />
        <h2>
          <span>We</span> help your business run smoothly by setting clear success goals, 
          improving workflows, and building a strong foundation. Our solutions are customized 
          to meet your needs, <span>solving real problems and supporting growth.</span>
        </h2>
        <br />
      </div>

      <div className="sec4_bottom">
        <div className="left_one">
          <h1>Why Choose Step Technology?</h1>
          {/* <br /> */}
          <h2>Comprehensive Solutions from Consultation to Ongoing Support</h2>
          <p><span>We provide</span> consultation, development, seamless integration, training, and continuous maintenance to ensure a custom-fit, scalable solution for your business. Partner with Step Technology to transform your <span>ERP, CRM, and management systems.</span></p>

        </div>

        <div className="right_one">
          <h2>We provide <span>end-to-end <br /> solutions</span>,including</h2>
          <ol>
            <li>Consultation and System Design</li>
            <li>UI/UX Design & Digital Experience</li>
            <li>Social Media & Content Design</li>
            <li>Maintenance and Support</li>
            <li>Development and Integration</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Section4
