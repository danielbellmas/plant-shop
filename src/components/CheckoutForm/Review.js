import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
const Review = ({ cartItems, subtotal }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Summery
      </Typography>
      <List disablePadding>
        {cartItems.map((item) => (
          <ListItem style={{ padding: "10px 0" }} key={item.name}>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${item.quantity}`}
            />
            <Typography variant="body2">{item.price}</Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            ${subtotal}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
