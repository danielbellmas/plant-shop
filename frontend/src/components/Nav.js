import logo from "../images/grow-logo.png";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React, { useContext } from "react";
import { CartContext } from "../PlantContext";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
const Nav = () => {
  const [cartItems] = useContext(CartContext);

  const NavSlide = () => {
    if (window.innerWidth <= 900) {
      const burger = document.querySelector(".burger");
      const nav = document.querySelector(".nav-links");
      const navLinks = document.querySelectorAll(".nav-links li");

      //Toggle Nav
      nav.classList.toggle("nav-active");

      //Burger Animation
      burger.classList.toggle("burger-shape");

      //Animation Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) link.style.animation = "";
        else
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
      });
    }
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "1.3rem",
  };

  return (
    <>
      <header>
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={logo} alt="grow." />
          </Link>
        </div>

        <nav>
          <ul className="nav-links" onClick={NavSlide}>
            <Link style={navLinkStyle} to="/">
              <li>Home</li>
            </Link>
            <Link style={navLinkStyle} to="/products">
              <li>Products</li>
            </Link>
            <Link style={navLinkStyle} to="/contacts">
              <li>Contacts</li>
            </Link>
            <Link style={navLinkStyle} to="/signup">
              <li>Sign Up</li>
            </Link>
            <Link style={navLinkStyle} to="/signin">
              <li>Sign In</li>
            </Link>
          </ul>
        </nav>

        <div className="cart">
          <IconButton component={Link} to="/cart" aria-label="Show Cart Items">
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCart style={{ fill: "whitesmoke" }} fontSize="large" />
            </Badge>
          </IconButton>
        </div>

        <div className="burger" onClick={NavSlide}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
      <div className="space-after-header"></div>
    </>
  );
};

export default Nav;
