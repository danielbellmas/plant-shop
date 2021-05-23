import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "../styles/plant-style";
import swal from "sweetalert";
import PlantDetails from "./PlantDetails";

const Plant = ({ name, price, image, details }) => {
  const classes = useStyles();

  const AddToCart = () => {
    //Need to add to cart and add a button to the cart
    swal({
      title: `${name} successfully added to cart!`,
      icon: "success",
    });
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component={Link}
        to={`/products/${name}`}
        /*change to id */
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
