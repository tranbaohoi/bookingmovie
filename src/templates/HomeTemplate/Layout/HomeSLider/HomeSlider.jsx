import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getSliderActions } from "../../../../redux/actions/SliderActions";

const HomeSlider = () => {
  const dispatch = useDispatch();
  const { arrImg } = useSelector((state) => state.SliderReducer);

  useEffect(() => {
    dispatch(getSliderActions());
  }, []);

  const renderImg = () => {
    return arrImg.map((item, index) => (
      <div className="banner__img">
        <img
          style={{ maxHeight: "400px", width: "100%" }}
          src={item.hinhAnh}
          alt=""
        />
      </div>
    ));
  };

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 10000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <Slider {...settings}>{renderImg()}</Slider>;
};

export default HomeSlider;
