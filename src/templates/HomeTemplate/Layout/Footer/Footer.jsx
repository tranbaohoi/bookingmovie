import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../../../assets/images/logo.png";

import "./footer.css";
const Footer = () => {
  return (
    <div className="footer__main">
      <Container style={{ maxWidth: "1140px" }}>
        <div className="footer__card"></div>
        <div className="footer__info">
          <div className="footer__logo">
            <Link to="/">
              <img className="footer__logo" src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="footer__social">
            <li className="footer__icon">
              <i class="ri-facebook-fill"></i>
            </li>
            <li className="footer__icon">
              <i class="ri-twitter-fill"></i>
            </li>
            <li className="footer__icon">
              <i class="ri-pinterest-fill"></i>
            </li>
            <li className="footer__icon">
              <i class="ri-instagram-fill"></i>
            </li>
            <li className="footer__icon">
              <i class="ri-google-fill"></i>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <span>Copyright © 2020. All Rights Reserved By Movflx</span>
          <ul className="footer__terms">
            <li>About</li>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>Feedback</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
