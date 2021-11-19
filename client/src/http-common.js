import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/v1/plants", //"https://grow-shop-backend.herokuapp.com/api/v1/plants"
  headers: {
    "Content-type": "application/json",
  },
});
