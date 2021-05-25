import React, { useState, useContext } from "react";
import { Grid } from "@material-ui/core";
import Plant from "./Plant";
import { ProductContext } from "../PlantContext";
const PlantList = () => {
  const [plants, setPlants] = useContext(ProductContext);

  return (
    <main style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Grid container justify="center" spacing={4}>
        {plants.map((plant) => (
          <Grid item key={plant.id} xs={12} sm={6} md={4} lg={3}>
            <Plant plant={plant} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default PlantList;
