import express from "express";
import cors from "cors";
import path from "path";
import plants from "./api/plants.route.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/plants", plants);
// app.use("*", (req, res) => res.status(404).json({ error: "not found" }));
if (process.env.NODE_ENV !== "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

export default app;
