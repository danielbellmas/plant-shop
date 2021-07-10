import React, { useState, useEffect, createContext } from "react";
// import plantDB from "./plantDB.json";
import PlantDataService from "./services/plant.js";

export const ProductContext = createContext();
export const CartContext = createContext();
export const CartSubtotalContext = createContext();

export const ProductProvider = (props) => {
  const [plants, setPlants] = useState([]); //plantDB);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    retrievePlants();
  }, []);

  const retrievePlants = () => {
    PlantDataService.getAll()
      .then((response) => {
        // console.log(response.data.plants);
        setPlants(response.data.plants);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
