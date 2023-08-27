// components/ItemsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import "../index.css"

const ItemsPage = () => {
  return (
    <div>
      <div className="fixed-navbar">
        <Link to='/'>HomePage</Link>
        <Link to='/todo'>To-Do List</Link>
        <Link to='/item'>Shopping Page</Link>
        <Link to='/about'>About Page</Link>
        <Link to='/contact'>Contact Page</Link>
      </div>
      <h2 className='intro'>Items Page</h2>
      <ItemList />
      <Link to="/cart" className='go-to-cart-button'>Go to Cart</Link>
    </div>
  );
};

export default ItemsPage;
