import React, { useState, useRef, useContext } from "react";
import { Grid, InputBase, IconButton, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Plant from "./Plant";
import { ProductContext } from "../PlantContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    margin: "0 0 1rem",
    display: "inline-flex",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const PlantList = () => {
  const [plants, setPlants] = useContext(ProductContext);
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const classes = useStyles();

  const searchRef = useRef(null);

  const handleSubmit = () => {
    setFilteredPlants(
      plants.filter((plant) =>
        plant.name.toLowerCase().includes(searchRef.current.value)
      )
    );
  };

  const SearchBar = () => (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <InputBase
        inputRef={searchRef}
        className={classes.input}
        placeholder="Search..."
        inputProps={{ "aria-label": "search plants" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );

  return (
    <main
      style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}
    >
      <SearchBar />
      <Grid container justify="center" spacing={4}>
        {filteredPlants.map((plant) => (
          <Grid item key={plant.id} xs={12} sm={6} md={4} lg={3}>
            <Plant plant={plant} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default PlantList;
