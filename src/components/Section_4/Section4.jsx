import React from 'react'
import './Section4.css'
import img1 from '../../assets/img_2.png'



const Section4 = () => {
  return (
    <div className='section4 '>
        <div className="sec4_upper">
            <h1> <span>We</span>  help your business run smoothly by setting clear success goals, improving workflows, and building a strong foundation. Our solutions are customized to meet your needs, <span>solving real problems and supporting growth.</span></h1>
        </div>

        <div className="sec4_lower">
            <img src= {img1} alt="" />
           


            
        </div>
        
    </div>
  )
}

export default Section4