import React from 'react';
import { useAppContext } from '../context/AppContext';
import {Link} from 'react-router-dom'
import "../index.css"


const ShoppingCart = () => {
  const { cartItems, setCartItems } = useAppContext();

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <div>
        <div className="fixed-navbar">
        <Link to='/'>HomePage</Link>
        <Link to='/todo'>To-Do List</Link>
        <Link to='/item'>Shopping Page</Link>
        <Link to='/about'>About Page</Link>
        <Link to='/contact'>Contact Page</Link>
      </div>
      <h2 className='intro'>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className='cart-item'>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => removeFromCart(item.id)} className='add-to-cart-button'>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total items in cart: {cartItems.length}</p>
      <p>Subtotal: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
    </div>
  );
};

export default ShoppingCart;
