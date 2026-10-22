import React,{useState} from 'react'
import { createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

      if (!existingItem) {
        return [...prevItems, item];
      }

      return prevItems.map((cartItem) =>
        cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
    });
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };   


