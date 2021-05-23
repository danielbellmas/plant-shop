import React, { useState } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "../styles/cart-style.js";
import { Link, LInk } from "react-router-dom";
const Cart = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      There are no Plants in your cart
      <Link to="/products">Start Adding Some!</Link>
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}></Grid>
    </>
  );

  const classes = useStyles();

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
