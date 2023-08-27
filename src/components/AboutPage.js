import React from 'react';
import {Link} from 'react-router-dom'
import "../index.css"


const AboutPage = () => {
  return (
    <div>
        <div className="fixed-navbar">
        <Link to='/'>HomePage</Link>
        <Link to='/todo'>To-Do List</Link>
        <Link to='/item'>Shopping Page</Link>
        <Link to='/about'>About Page</Link>
        <Link to='/contact'>Contact Page</Link>
      </div>
        <p className='intro'>
          <h2>About Page</h2>

            Welcome to To-Do-Shopping-Cart - Your Source for Convenience and Quality!

            At To-Do-Shoppping-Cart, we're committed to providing you with a seamless online experience that simplifies your daily 
            tasks and enhances your shopping journey. Our platform is designed to cater to your needs, whether you're looking to 
            manage your tasks efficiently or explore a wide range of products.
            <br></br>
            Created by Snehasish Mallik for the task given my Ambula for the role of UI Developer. 
         </p>
    </div>
  );
};

export default AboutPage;
