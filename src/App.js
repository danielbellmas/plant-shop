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
import Contacts from "./components/Contacts";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={PlantList} />
          <Route path="/products/:id" component={PlantDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
