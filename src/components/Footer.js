import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <h6>About</h6>
            <p class="text-justify">
              grow.com was founded with a simple but important goal: to bring
              back traditions of garden, soil, and nature, blend them with the
              latest technology to embrace modern living.
            </p>
          </div>

          {/* <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <Link to="/contacts">
                <li>Contact Us</li>

            </ul>
          </div> */}
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by <em>grow.</em>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
