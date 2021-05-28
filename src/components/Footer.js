import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <h6>About</h6>
            <p className="text-justify">
              grow.com was founded with a simple but important goal: to bring
              back traditions of garden, soil, and nature, blend them with the
              latest technology to embrace modern living.
            </p>
          </div>

          {/* <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <Link to="/contacts">
                <li>Contact Us</li>

            </ul>
          </div> */}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved by{" "}
              <em>grow.</em>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
