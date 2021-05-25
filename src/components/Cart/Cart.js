import React, { useState, useEffect, useContext } from "react";
import { Typography, Container, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles/cart-style.js";
import { Link } from "react-router-dom";
import { CartContext, CartSubtotalContext } from "../../PlantContext";
import CartItem from "../Cart/CartItem";
import Swal from "sweetalert2";

const Cart = () => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [subtotal, setSubtotal] = useContext(CartSubtotalContext);
  useEffect(() => {
    CalculateSubtotal();
  }, [cartItems]);

  const CalculateSubtotal = () => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.quantity * parseFloat(item.price.replace("$", ""));
    });
    setSubtotal(parseFloat(sum).toFixed(2));
  };
  const handleEmptyCart = () => {
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
        setCartItems([]);
        Swal.fire("Deleted!", "Your cart is now empty.", "success");
      }
    });
  };

  const EmptyCart = () => (
    <>
      <Typography variant="body1">There are no Plants in your cart</Typography>
      <Button
        size="large"
        type="button"
        variant="contained"
        component={Link}
        to="/products"
      >
        Start Adding Some!
      </Button>
    </>
  );
  const FilledCart = () => (
    <>
      <Grid justify="space-between" container spacing={3}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} CalculateSubtotal={CalculateSubtotal} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: ${subtotal}</Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
            component={Link}
            to="/checkout"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cartItems.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
