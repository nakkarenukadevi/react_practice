
import "./App.css";

import Header from "./Header";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

export const CartContext = createContext();


function App() {
  let [CartItems, setCartItems] = useState({});
  const handleCatItems = (cartItems) => {
    setCartItems(cartItems)

  }
  return (
    <>
      <CartContext.Provider value={{ CartItems, handleCatItems }}>
        <Header />
        <Outlet />
      </CartContext.Provider>
    </>

  )
}

export default App;
