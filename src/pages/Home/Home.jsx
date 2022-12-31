import React from "react";
import Movie from "../../components/movie/Movie";
import HomeSlider from "../../templates/HomeTemplate/Layout/HomeSLider/HomeSlider";

const Home = () => {
  return (
    <div style={{ overflow: "Hidden" }}>
      <HomeSlider />
      <section className="body" style={{ backgroundColor: "#05113d" }}>
        <Movie />
      </section>
    </div>
  );
};

export default Home;
