import React, { useContext } from "react";
import "../styles/Home.css";
import { Grid } from "@material-ui/core";
import Plant from "./Plant";
import { ProductContext } from "../PlantContext";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const Home = () => {
  const [plants] = useContext(ProductContext);

  const smoothScroll = () => {
    const el = document.querySelector("#featured-plants");
    el.scrollIntoView({ block: "center", behavior: "smooth" });
    const arrow = document.querySelector(".arrow");
    arrow.style.visibility = "hidden";
  };

  return (
    <>
      <section id="main-content" className="main-content">
        <img
          className="calathea"
          src="/images/calethea_leaf.webp"
          alt="Calathea Leaf"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />

        <div className="slogan">
          <span>
            grow. <br />
          </span>
          <p>See The Growth, Feel The Shine.</p>
          <a href="/products" className="btn">
            Shop Now
          </a>
        </div>
      </section>
      <div onClick={smoothScroll} className="arrow">
        <ArrowDownwardIcon
          style={{ width: 60, height: "auto" }}
          fontSize="large"
          justify="center"
        />
      </div>
      <section id="featured-plants" className="featured-plants">
        <h1>Featured Plants</h1>
        <Grid container justifyContent="center" spacing={2}>
          {plants.slice(plants.length - 3, plants.length).map((plant) => (
            <Grid item key={plant.id} xs={12} sm={6} md={4} lg={3}>
              <Plant plant={plant} />
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default Home;
