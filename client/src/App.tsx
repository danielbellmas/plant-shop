import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
  ReactGA.initialize("UA-202264338-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Plant Shop</title>

        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2"
          as="font"
          crossOrigin="anonymous"
        />
      </Helmet>

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
              src="/images/preloader.gif"
              alt="loading..."
              style={{ width: "100px", height: "auto" }}
            />
          </div>
        }
      >
        <Router>
          <Nav />
          <div id="page-container">
            <div id="content-wrap">
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
            </div>
            <Footer />
          </div>
        </Router>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
