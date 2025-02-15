import React from "react";
import "./Section5.css";
import contact_img from '../../assets/contact.jpg'

const ContactPage = () => {
  return (
    <div className="section5" id="contact">
      <div className="image-section">
        <img src= {contact_img} alt="Contact Us" />
      </div>
      <div className="form-section">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mobile">Mobile Number</label>
          <input type="tel" id="mobile" name="mobile" required />

          <button type="submit" className="submit_btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
