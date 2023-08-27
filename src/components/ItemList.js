// components/ItemList.js
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchItems } from '../services/api';
import { Link } from 'react-router-dom';
import "../index.css"

//here we are fetching all the items from the api
const ItemList = () => {
  const { cartItems, setCartItems } = useAppContext();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchAndSetItems() {
      const fetchedItems = await fetchItems();
      setItems(fetchedItems);
    }
    fetchAndSetItems();
  }, []);


  //here the fuctionality adding items to cart

  const addToCart = (item) => {
    setCartItems([...cartItems, { id: Date.now(), ...item }]);
  };

  return (
    <div className='shopping-page'>
    
      <h2>Available Items</h2>
      <ul className='shopping-items'>
        {items.map(item => (
          <li key={item.id} className='shopping-item'>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => addToCart(item)} className="add-to-cart-button">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
