import React, { useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import "../styles/PlantDetails.css";
import { ProductContext, CartContext } from "../PlantContext";
import Swal from "sweetalert2";

const PlantDetails = () => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [plants] = useContext(ProductContext);
  const [cartItems, setCartItems] = useContext(CartContext);
  const location = useLocation();
  const history = useHistory();
  const plantId = location.pathname.split("/")[2];
  const plant = plants.find((plant) => plantId === plant.id);

  const handleAddToCart = () => {
    let existingItemIndex = cartItems.findIndex(
      (plant) => plant.id === plantId
    );
    if (existingItemIndex >= 0)
      cartItems[existingItemIndex].quantity += itemQuantity;
    else setCartItems([...cartItems, { ...plant, quantity: itemQuantity }]);

    Swal.fire({
      position: "top-end",
      title: `${plant.name} successfully added to cart!`,
      icon: "success",
      showCancelButton: true,
      cancelButtonText: "Continue shopping",
      cancelButtonColor: "green",
      confirmButtonText: "Go To Cart",
      confirmButtonColor: "blue",
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/cart");
      } else history.push("/products");
    });
  };

  const IncrementQuantity = () => {
    setItemQuantity(itemQuantity + 1);
    //Maybe add a limit of 4 plants
  };
  const DecrementQuantity = () => {
    if (itemQuantity > 1) setItemQuantity(itemQuantity - 1);
    else setItemQuantity(1);
  };

  return (
    <div className="details">
      <img className="plant-image box" src={plant.image} alt={plant.name} />

      <div className="description box">
        <h1>{plant.name}</h1>
        <p>{plant.price}</p>
        <p>{plant.details}</p>
        <div className="add-to-cart">
          <Button
            style={{ color: "#216B65", fontWeight: "900", fontSize: "1.2rem" }}
            type="button"
            size="small"
            onClick={DecrementQuantity}
          >
            -
          </Button>
          <Typography variant="h5">{itemQuantity}</Typography>
          <Button
            style={{ color: "#216B65", fontWeight: "900", fontSize: "1.2rem" }}
            type="button"
            size="small"
            onClick={IncrementQuantity}
          >
            +
          </Button>
          <Button
            style={{
              color: "white",
              background: "#216B65",
              fontSize: "1.3rem",
            }}
            fullWidth
            type="button"
            size="large"
            onClick={handleAddToCart}
            color="primary"
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
