// components/ContactPage.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {Link} from 'react-router-dom'
import "../index.css"


const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using Email.js
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    emailjs.send('service_k3517ty', 'template_a3j7w1j', templateParams, '2gRGn7Ufr7pDHqx-V')
      .then((result) => {
        console.log('Email sent successfully!', result);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="contact-page">
      <div className="fixed-navbar">
        <Link to='/'>HomePage</Link>
        <Link to='/todo'>To-Do List</Link>
        <Link to='/item'>Shopping Page</Link>
        <Link to='/about'>About Page</Link>
        <Link to='/contact'>Contact Page</Link>
      </div>

      <h2 className='intro'>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form"> 
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
