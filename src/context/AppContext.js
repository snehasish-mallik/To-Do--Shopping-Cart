import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [apiData, setApiData] = useState(null);

  return (
    <AppContext.Provider
      value={{
        todoList,
        setTodoList,
        cartItems,
        setCartItems,
        apiData,
        setApiData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
