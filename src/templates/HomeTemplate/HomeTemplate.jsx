import React from "react";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

const HomeTemplate =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Header />
        <Component {...props} />
        <Footer />
      </>
    );
  };

export default HomeTemplate;
