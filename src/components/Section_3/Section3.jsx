import React from 'react'
import './Section3.css'
import img_about from '../../assets/img_3.jpg'
import VideoSection from '../VideoSection/VideoSection'

const Section3 = () => {
  return (
    <div className=' section3' id='about'>
        <div className="sec3_left">
            
                <h1>About Us</h1>

            

            <div className="lower">
                <h2>We don’t just build software—we create systems that work for you.</h2>
                <h3>From defining key success metrics and streamlining workflows to building a strong, scalable foundation, we ensure smooth operations. Our solutions are tailored to your business needs, providing tools that solve real challenges and drive growth.</h3>

            </div>

        </div>


        <div className="sec3_right">
            <VideoSection/>

            {/* <img src= {img_about} alt="" /> */}



        </div>
        

    </div>
  )
}

export default Section3