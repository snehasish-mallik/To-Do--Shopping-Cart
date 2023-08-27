import React from 'react';
import ItemList from './ItemList';
import {Link} from 'react-router-dom'
import "../index.css"

const WelcomeMessage = () => {
  return (
    <div>
      <Link to='/'>HomePage</Link>

      <h2>Welcome to To-Do and Shopping Cart!</h2>
      <p className='intro'>
      Discover a world of convenience and organization with our all-in-one platform designed to enhance your productivity. 
      Our website offers a seamless experience for managing tasks, exploring a wide range of items, and simplifying your 
      shopping endeavors. Whether you're seeking efficient task management or browsing for your favorite products, 
      we've got you covered.
      </p>
      <br></br>
      <Link to='/todo'>To-Do List</Link>
      <br></br>
      <Link to='/item'>Shopping Page</Link>
      <br></br>
      <Link to='/about'>About Page</Link>
      <br></br>
      <Link to='/contact'>Contact Page</Link>

      
    </div>
  );
};

export default WelcomeMessage;
