import React, { useState, useEffect, createContext } from "react";
import PlantDataService from "./services/plant.js";
import plantDB from "./plantDB.json";

export const ProductContext = createContext();
export const CartContext = createContext();
export const CartSubtotalContext = createContext();

export const ProductProvider = (props) => {
  const [plants, setPlants] = useState(plantDB);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    retrievePlants();
  }, []);

  const retrievePlants = () => {
    PlantDataService.getAll()
      .then((response) => {
        setPlants(response.data.plants);

        let prices = response.data.plants.map((plant) =>
          parseFloat(plant.price.replace("$", ""))
        );

        let minPrice = Math.min(...prices);
        let maxPrice = Math.max(...prices);
        localStorage.setItem("min", minPrice);
        localStorage.setItem("max", maxPrice);
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
