import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/ToDoList';
import ShoppingCart from './components/ShoppingCart';
import WelcomeMessage from './components/WelcomeMessage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { fetchItems } from './services/api';
import { AppProvider, useAppContext } from './context/AppContext'; // Import useAppContext
import ItemPage from './components/ItemPage'; // Import ItemsPage



const App = () => {
  
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route exact path="/" element={<WelcomeMessage/>} />
          <Route path="/todo" element={<TodoList/>} />
          <Route path="/cart" element={<ShoppingCart/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/item" element={<ItemPage/>} />
        </Routes>
      </AppProvider>
    </Router>
  );
};

export default App;
