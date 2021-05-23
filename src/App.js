import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Plant from "./components/Plant";
import PlantList from "./components/PlantList";
import PlantDetails from "./components/PlantDetails";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <br />
        <Switch>
          <Route path="/products" exact component={PlantList} />
          <Route path="/cart" component={Cart} />
          <Route path="/products/:id" component={PlantDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
