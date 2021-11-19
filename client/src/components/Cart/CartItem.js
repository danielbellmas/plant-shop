import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "../../styles/cart-item-style.js";
import Swal from "sweetalert2";
import { CartContext } from "../../PlantContext";

const CartItem = ({ item, CalculateSubtotal }) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  let itemIndex = cartItems.findIndex((plant) => plant.id === item.id);

  const IncrementQuantity = () => {
    let newQuantity = itemQuantity + 1;
    cartItems[itemIndex].quantity = newQuantity;
    setItemQuantity(newQuantity);
    CalculateSubtotal();

    //Maybe add a limit of 4 plants
  };
  const DecrementQuantity = () => {
    let newQuantity;
    if (itemQuantity > 1) newQuantity = itemQuantity - 1;
    else newQuantity = 1;
    cartItems[itemIndex].quantity = newQuantity;
    setItemQuantity(newQuantity);
    CalculateSubtotal();
  };
  const handleRemoveFromCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem(
          "cart",
          JSON.stringify(
            cartItems.filter((cartItem) => item.id !== cartItem.id)
          )
        );
        setCartItems(JSON.parse(localStorage.getItem("cart")));
        Swal.fire("Deleted!", "", "success");
      }
    });
  };

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        component={Link}
        to={`/products/${item.id}`}
        image={item.image}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.price}</Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={DecrementQuantity}>
            -
          </Button>
          <Typography>{itemQuantity}</Typography>
          <Button
            color=""
            type="button"
            size="small"
            onClick={IncrementQuantity}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={handleRemoveFromCart}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
