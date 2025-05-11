import React, { useState } from "react";
import "./ContactUs.css"; 

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="contact-container">
  <h2 className="contact-title">Contact Us</h2>
  <form onSubmit={handleSubmit} className="contact-form">
    <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
    <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
    <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
    <button type="submit">Submit</button>
  </form>
</div>

  );
}

export default ContactUs;
