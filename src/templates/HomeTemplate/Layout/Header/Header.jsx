import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../../../assets/images/logo.png";
import backgroundhome from "../../../../assets/images/backgroundhome.jpg";
import "./header.css";
const nav__links = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Contact",
    path: "/contact",
  },
  { display: "About", path: "/about" },
  { display: "News", path: "/news" },
  { display: "Download", path: "/download" },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll", null);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container style={{ maxWidth: "1140px" }}>
        <div className="nav__wrapper">
          <div className="nav__logo">
            <Link to="/">
              <img className="nav__logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="navigation" onClick={toggleMenu} ref={menuRef}>
            <div className="menu">
              <span className="menu__user">
                <Link to="/">
                  <i className="user__icon ri-user-line"></i>
                </Link>
                <Link to="/signup">Sign up</Link>
                {/* | <Link to="/">Sign in</Link> */}
              </span>
              {nav__links.map((item, index) => (
                <NavLink to={item.path} key={index}>
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="nav__right">
            <span className="user">
              <Link to="/">
                <i className="user__icon ri-user-line"></i>
              </Link>
              <Link to="/signup">Sign up</Link> |{" "}
              <Link to="/signin">Sign in</Link>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
