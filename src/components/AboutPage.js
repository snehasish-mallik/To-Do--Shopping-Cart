import React from 'react';
import {Link} from 'react-router-dom'
import "../index.css"


const AboutPage = () => {
  return (
    <div>
        <Link to='/'>HomePage</Link>
        <h2>To-Do and Shopping Cart!</h2>
        <p>We are....</p>
    </div>
  );
};

export default AboutPage;
