import express from "express";
// import PlantsCtrl from "./plants.controller.js";

const router = express.Router();

router.route("/").get((req, res) => res.send("hello")); //PlantsCtrl.apiGetPlants);

export default router;
