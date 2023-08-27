// components/ItemsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import "../index.css"

const ItemsPage = () => {
  return (
    <div>
      <Link to='/'>HomePage</Link>
      <h2>Items Page</h2>
      <ItemList />
      <Link to="/cart" className='go-to-cart-button'>Go to Cart</Link>
    </div>
  );
};

export default ItemsPage;
