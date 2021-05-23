import React from "react";
import { useLocation } from "react-router-dom";
import db from "../db.json";
import "../styles/PlantDetails.css";
const PlantDetails = () => {
  const location = useLocation();
  const plantName = location.pathname.split("/")[2];
  const plantItem = db.filter((plant) => plantName === plant.name)[0];
  console.log(plantItem.name);
  return (
    <div className="details">
      <div className="plant-image">
        <img src={plantItem.image} alt={plantItem.name} />
      </div>
      <div className="description">
        <h1>{plantItem.name}</h1>
        <p>{plantItem.price}</p>
        <p>{plantItem.details}</p>
      </div>
    </div>
  );
};

export default PlantDetails;
