import React, { useState, useEffect, createContext } from "react";
import plantDB from "./plantDB.json";

export const ProductContext = createContext();
export const CartContext = createContext();
export const CartSubtotalContext = createContext();

export const ProductProvider = (props) => {
  const [plants, setPlants] = useState(plantDB);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let plantPrices = plants.map((plant) =>
      parseFloat(plant["price"].replace("$", ""))
    );
    let minPrice = Math.min(...plantPrices);
    let maxPrice = Math.max(...plantPrices);
    localStorage.setItem("min", minPrice);
    localStorage.setItem("max", maxPrice);
  }, []);

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
