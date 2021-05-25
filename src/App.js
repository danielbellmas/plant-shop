import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Nav from "./components/Nav";
import PlantList from "./components/PlantList";
import PlantDetails from "./components/PlantDetails";
import Footer from "./components/Footer";
import Checkout from "./components/CheckoutForm/Checkout";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={PlantList} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/products/:id" component={PlantDetails} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
