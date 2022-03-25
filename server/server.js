import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import plants from "./api/plants.route.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

const publicPath = path.join(__dirname, "..", "public");
console.log("publicPath", publicPath);
app.use(express.static(publicPath));

app.use(cors());
app.use(express.json());

app.use("/api/v1/plants", plants);

// app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

if (process.env.NODE_ENV !== "production") {
  // app.use(express.static(path.join(__dirname, "../client/build")));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  // });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

export default app;
