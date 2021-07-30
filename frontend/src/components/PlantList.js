import React, { useState, useRef, useContext } from "react";
import {
  Grid,
  InputBase,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import Plant from "./Plant";
import { ProductContext } from "../PlantContext";
import Slider from "@material-ui/core/Slider";

const PlantList = () => {
  const [plants] = useContext(ProductContext);
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const maxPlantPrice = parseInt(localStorage.getItem("max"));
  const minPlantPrice = parseInt(localStorage.getItem("min"));
  const [sliderValue, setSliderValue] = useState(maxPlantPrice);
  const classes = useStyles();

  const searchRef = useRef(null);

  const [page, setPage] = useState(1);
  const plantsPerPage = 12;
  const pagesVisited = (page - 1) * plantsPerPage;
  const displayPlants = filteredPlants.slice(
    pagesVisited,
    pagesVisited + plantsPerPage
  );
  const pageCount = Math.ceil(filteredPlants.length / plantsPerPage);

  const handleSliderChange = (e, value) => {
    setSliderValue(value);

    setFilteredPlants(
      plants.filter(
        (plant) => parseFloat(plant.price.replace("$", "")) <= sliderValue
      )
    );
  };
  const handleSubmit = () => {
    setFilteredPlants(
      plants.filter((plant) =>
        plant.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
      )
    );
    setSliderValue(maxPlantPrice);
  };
  const handlePageChange = (event, value) => setPage(value);

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
      style={{
        textAlign: "center",
        marginTop: "2.5rem",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <SearchBar />
        <div>
          <Typography>
            Current maximum price: <b>${sliderValue}</b>
          </Typography>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={sliderValue}
            min={minPlantPrice + 1}
            max={maxPlantPrice}
            onChange={handleSliderChange}
          />
        </div>
      </div>

      {filteredPlants.length !== 0 ? (
        <>
          <Grid container justify="center" spacing={3}>
            {displayPlants.map((plant) => (
              <Grid item key={plant.id} xs={12} sm={6} md={4} lg={3}>
                <Plant plant={plant} />
              </Grid>
            ))}
          </Grid>
          <br />
          <Pagination
            page={page}
            count={pageCount}
            color="primary"
            size="large"
            onChange={handlePageChange}
            style={{ display: "flex", justifyContent: "center" }}
          />
        </>
      ) : (
        <>
          <h1>No plants found.</h1>
          <h4>Please try another plant 🌿</h4>
        </>
      )}
    </main>
  );
};

export default PlantList;
const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
    width: 300,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

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
