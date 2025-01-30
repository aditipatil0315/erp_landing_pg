import React from 'react'
import './Section3.css'
import img_about from '../../assets/img_3.jpg'

const Section3 = () => {
  return (
    <div className=' section3'>
        <div className="sec3_left">
            <div className="upper">
                <h1>About Us</h1>

            </div>

            <div className="lower">
                <h2>Hospital Management Software for Enhanced Healthcare Efficiency</h2>
                <h3>Our comprehensive hospital management software helps you manage patient records, optimize workflows, and improve overall service delivery. Designed for hospitals of all sizes, our system ensures a seamless experience for both patients and healthcare providers.</h3>

            </div>

        </div>


        <div className="sec3_right">

            <img src= {img_about} alt="" />



        </div>
        

    </div>
  )
}

export default Section3