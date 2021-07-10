import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import preloader from "./images/preloader.gif";
import "./App.css";
const Cart = React.lazy(() => import("./components/Cart/Cart"));
const Nav = React.lazy(() => import("./components/Nav"));
const PlantList = React.lazy(() => import("./components/PlantList"));
const PlantDetails = React.lazy(() => import("./components/PlantDetails"));
const Footer = React.lazy(() => import("./components/Footer"));
const Checkout = React.lazy(() => import("./components/CheckoutForm/Checkout"));
const Home = React.lazy(() => import("./components/Home"));
const Contacts = React.lazy(() => import("./components/Contacts"));
const SignIn = React.lazy(() => import("./components/SignIn"));
const SignUp = React.lazy(() => import("./components/SignUp"));

function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "grid",
            placeItems: "center",
            alignItems: "center",
            height: "100vh",
            background:
              "linear-gradient(244.36deg,rgba(33, 107, 101, 0.1) 10.28%,rgba(33, 107, 101, 0.2) 109.64%",
          }}
        >
          <img
            src={preloader}
            alt="loading..."
            style={{ width: "100px", height: "auto" }}
          />
        </div>
      }
    >
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
    </Suspense>
  );
}

export default App;