import React from 'react'
import './Section4.css'
import img1 from '../../assets/img_2.png'



const Section4 = () => {
  return (
    <div className='section4 '>
        <div className="sec4_upper">
            <h1> <span>HIMS</span> is a top digital healthcare solution for hospitals, managing appointments, billing, labs, inventory, pharmacy, and more.</h1>
        </div>

        <div className="sec4_lower">
            <img src= {img1} alt="" />
           


            
        </div>
        
    </div>
  )
}

export default Section4