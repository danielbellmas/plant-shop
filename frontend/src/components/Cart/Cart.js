import React, { useEffect, useContext } from "react";
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
      <Typography style={{ fontSize: "2rem" }}>
        There are no plants in your cart
      </Typography>
      <br />
      <Button
        style={{
          background: "rgba(33, 107, 101, 0.8)",
          color: "white",
          fontWeight: "400",
          fontSize: "1.3rem",
        }}
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
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} CalculateSubtotal={CalculateSubtotal} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: <b>${subtotal}</b>
        </Typography>
        <div className={classes.buttons}>
          <Button
            className={classes.checkoutButton}
            style={{ color: "white" }}
            size="large"
            type="button"
            variant="contained"
            color="primary"
            component={Link}
            to="/checkout"
          >
            Checkout
          </Button>
          <Button
            className={classes.continueButton}
            size="large"
            type="button"
            variant="contained"
            style={{ background: "#216B65", color: "white" }}
            component={Link}
            to="/products"
          >
            Continue Shopping
          </Button>
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
        </div>
      </div>
    </>
  );

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cartItems.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
