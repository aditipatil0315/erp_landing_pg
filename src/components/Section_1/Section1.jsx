import React from 'react'
import './Section1.css'
import img_1 from '../../assets/design_img.png'
import img_2 from '../../assets/img_2.png'


const Section1 = () => {
  return (
    <div className='section1 '>
        <div className="navbar">

            <div className="logo">
                logo <br />text
            </div>

            <div className="links">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Products</a>
                <a href="">Contact</a>

            </div>

            <button>Login</button>
        </div>


        <div className="content_section">
            <div className="left">
                <h1>Transform your business with custom-built management tools and workflows.</h1>
                <h3>Tailored solutions for all industries—manufacturing, healthcare, retail, and more.</h3>
                {/* <br /> */}
                <button className='explore_btn button'>Explore </button>

            </div>
            <div className="right">
                <img src={img_2} alt="" />

            </div>


        </div>
        
    </div>
  )
}

export default Section1