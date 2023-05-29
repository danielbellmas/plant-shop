import React, { useState, useEffect, createContext } from "react";
// import PlantDataService from "./services/plant.js";
import plantDB from "./data/plantDB.json";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  details: string;
  quantity?: number;
}

export const ProductContext = createContext({}) as React.Context<
  [Product[], React.Dispatch<React.SetStateAction<Product[]>>]
>;
export const CartContext = createContext({}) as React.Context<
  [Product[], React.Dispatch<React.SetStateAction<Product[]>>]
>;
export const CartSubtotalContext = createContext({}) as React.Context<
  [number, React.Dispatch<React.SetStateAction<number>>]
>;

export const ProductProvider = (props) => {
  const [plants, setPlants] = useState([]);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    retrievePlants();
  }, []);

  const retrievePlants = () => {
    setPlants(plantDB);

    let prices = plantDB.map((plant) =>
      parseFloat(plant.price.replace("$", ""))
    );
    let minPrice = Math.min(...prices);
    let maxPrice = Math.max(...prices);
    localStorage.setItem("min", minPrice.toString());
    localStorage.setItem("max", maxPrice.toString());

    // PlantDataService.getAll()
    //   .then((response) => {
    //     setPlants(response.data.plants);
    //     let prices = response.data.plants.map((plant) =>
    //       parseFloat(plant.price.replace("$", ""))
    //     );
    //     let minPrice = Math.min(...prices);
    //     let maxPrice = Math.max(...prices);
    //     localStorage.setItem("min", minPrice);
    //     localStorage.setItem("max", maxPrice);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
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
