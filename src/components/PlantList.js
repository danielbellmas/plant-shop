import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Plant from "./Plant";
import db from "../db.json";

const PlantList = () => {
  // const plants = [
  //   {
  //     id: 1,
  //     name: "Aloe",
  //     price: "$15.00",
  //     image:
  //       "https://redsquareflowers.com/wp-content/uploads/2020/11/Aloe-Vera-400x400.jpg",
  //     details: "a little water and sun",
  //   },
  //   {
  //     id: 2,
  //     name: "Pothos",
  //     price: "$10.00",
  //     image:
  //       "https://redsquareflowers.com/wp-content/uploads/2020/09/Pothos-2-400x400.jpg",
  //     details: "a little water and sun",
  //   },
  // ];

  const [plants, setPlants] = useState(db);
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {plants.map((plant) => (
          <Grid item /*key={plant.id}*/ xs={12} sm={6} md={4} lg={3}>
            <Plant
              name={plant.name}
              price={plant.price}
              image={plant.image}
              details={plant.details}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default PlantList;
