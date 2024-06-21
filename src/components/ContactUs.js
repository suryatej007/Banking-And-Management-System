import React from "react";
import './ContactUs.css';
import axios from 'axios';
import Navbar from "./Navbar";
function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name :data.get('name'),
      email :data.get('email'),
      message:data.get('message')
      });
      axios.post("http://localhost:3001/contact", {
      name :data.get('name'),
      email :data.get('email'),
      message:data.get('message')
    }).then((response)=>{
      console.log(response.data);
      alert("form submited")
    });
  };

  return (
    <div><Navbar/>
    <div className="contact-us">
      
      <form className="contact-form" onSubmit={handleSubmit}>
        
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
    </div>
  );
}

export default ContactUs;