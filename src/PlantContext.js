import React, { useState, createContext } from "react";
import plantDB from "./plantDB.json";

export const ProductContext = createContext();
export const CartContext = createContext();
export const CartSubtotalContext = createContext();

export const ProductProvider = (props) => {
  const [plants, setPlants] = useState(plantDB);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  return (
    <ProductContext.Provider value={[plants, setPlants]}>
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <CartSubtotalContext.Provider value={[subtotal, setSubtotal]}>
          {props.children}
        </CartSubtotalContext.Provider>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};
