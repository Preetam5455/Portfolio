import '../styles/contact.css';
import React, { useState } from 'react';
import axios from 'axios'; // Import axios

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    number:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can perform further actions here, like sending the form data to a server
    console.log(formData);
    try {
      await axios.post('http://localhost:5000/send-email', formData); // Make a POST request to your Node.js server
      alert('Email sent successfully');
  } catch (error) {
      console.error(error);
      alert('Failed to send email');
  }
  };

  return (
    <div className="profile">
      <div className="main-contact_data">
        <div className="skills_text">
          <h2 className="role_title">Contact me</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
            <label htmlFor="number">Your contact number:</label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
            </div>
            <div>
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea rows="6"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="skills_photo">
          <h2 className="role_title">Get in Touch</h2>
          <div className='wrapper_container'>
          <p>Contact me using this form or you can contact me using following contact number or email address.</p>
          <div>
            <p className='contact_data'><span className="material-symbols-outlined">
              location_on
            </span> Pune</p>
            <p className='contact_data'><span className="material-symbols-outlined">
              call
            </span>9823695455</p>
            <p className='contact_data'><span className="material-symbols-outlined">
              mail
            </span>preetam.ch03@gmail.com</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
