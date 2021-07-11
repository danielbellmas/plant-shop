import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "../styles/plant-style";
import Swal from "sweetalert2";
import { CartContext } from "../PlantContext";

const Plant = ({ plant }) => {
  const { id, name, price, image } = plant;
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [cartItems, setCartItems] = useContext(CartContext);

  const AddToCart = () => {
    let existingItemIndex = cartItems.findIndex((item) => item.id === plant.id);
    if (existingItemIndex >= 0) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cartItems, { ...plant, quantity: 1 }])
      );
      setCartItems(JSON.parse(localStorage.getItem("cart")));
    }
    Swal.fire({
      position: "top-end",
      title: `${name} successfully added to cart!`,
      icon: "success",
      showCancelButton: true,
      cancelButtonText: "Continue shopping",
      cancelButtonColor: "green",
      confirmButtonText: "Go To Cart",
      confirmButtonColor: "blue",
    }).then((result) => {
      if (result.isConfirmed) history.push("/cart");
      else if (
        location.pathname === "/" &&
        result.dismiss === Swal.DismissReason.cancel
      )
        history.push("/products");
    });
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component={Link}
        to={`/products/${id}`}
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5">{price}</Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add To Cart">
          <AddShoppingCart onClick={AddToCart} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Plant;
