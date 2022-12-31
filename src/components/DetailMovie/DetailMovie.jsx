import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./detailMovie.css";
// import movieimg from "../../assets/images/gp03.jpg";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachHeThongRap,
  layDanhSachRapChieu,
  layThongTinChiTietPhim,
} from "../../redux/actions/QuanLyRapActions";
import moment from "moment/moment";
const DetailMovie = (props) => {
  const navigate = useNavigate();
  const showTimeRef = useRef();
  const [rap, setRap] = useState();
  const dispatch = useDispatch();
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
  console.log("rap", rap);
  // console.log("filmDetail", filmDetail);

  //load danh sách rạp chiếu

  const { danhSachRapChieu, heThongRapChieu } = useSelector(
    (state) => state.QuanLyRapReducer
  );

  console.log("danhSachRapChieu", danhSachRapChieu);
  console.log("heThongRapChieu", heThongRapChieu);

  const { hinhAnh, moTa, ngayKhoiChieu, tenPhim, trailer } = filmDetail;

  const { id } = useParams();
  const handleChangeLogo = (data) => {
    dispatch(layDanhSachHeThongRap(danhSachRapChieu[data]?.maHeThongRap));
  };
  // const goToBooking = (id, maHeThongRap) => {
  //   history(`/checkout/${id}`);
  //   // <Navigate to={`/checkout/${id}`} replace />;
  // };
  const checkArr = [];
  useEffect(() => {
    dispatch(layDanhSachRapChieu());
    dispatch(layDanhSachHeThongRap());
    dispatch(layThongTinChiTietPhim(id));
  }, []);
  // if (heThongRapChieu.length === 0) {
  //   return;
  // }
  return (
    <div className="movie__detail">
      <div
        className="detail__banner"
        // style={{
        //   backgroundImage: `url(${hinhAnh})`,
        // }}
        style={{
          backgroundImage:
            "url('http://pixner.net/boleto/demo/assets/images/banner/banner03.jpg')",
        }}
      >
        <div className="detailmovie__info">
          <Container>
            <Row>
              <Col lg="3">
                <div>
                  <img className="movie__image" src={hinhAnh} alt="" />
                </div>
              </Col>
              <Col lg="9">
                <div>
                  <h1 className="movie__name">{tenPhim}</h1>
                  <h6 className="movie__lang" style={{ color: "#9aace5" }}>
                    ENGLISH , VIETNAMESE
                  </h6>
                  <h6 className="movie__category" style={{ color: "#9aace5" }}>
                    ACTION
                  </h6>
                  <div className="movie__social" style={{ color: "#9aace5" }}>
                    <div>
                      <div className="movie__time">
                        <i class=" ri-calendar-line"></i>
                        <span>{ngayKhoiChieu}</span>
                        <i class=" ri-time-line"></i>
                        <span>2 hrs 50 mins</span>
                      </div>
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
                  <div style={{ color: "#9aace5" }} className="movie__content">
                    <h4>Movie content:</h4>
                    <span>{moTa}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container styled={{ maxWidth: "1140px" }}>
        <div className="movie__cinema">
          <h2 className="movie__choice">Choose cinema:</h2>
          <Row>
            {danhSachRapChieu.map((item, index) => {
              return (
                <>
                  <Col lg="2" md="2" sm="2">
                    <div
                      style={{ cursor: "pointer" }}
                      key={item.maHeThongRap}
                      onClick={() => handleChangeLogo(index)}
                      src={item.logo}
                    >
                      <img
                        style={{ minWidth: "100px", maxWidth: "100px" }}
                        src={item.logo}
                        alt={item.tenHeThongRap}
                      />
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
          <Row>
            <h2>{heThongRapChieu?.tenHeThongRap}</h2>
            <p>Choose the cinema and heThongRapChieu you want to see</p>
          </Row>
          <Row>
            <div style={{ background: "#0c1b36" }}>
              {heThongRapChieu?.lstCumRap?.map((cumRap) => {
                const currentMovie = cumRap.danhSachPhim.find((item) => {
                  console.log(typeof item.maPhim, "item maPhim");
                  return item.maPhim == id;
                });
                console.log("id", id);
                console.log(currentMovie, "currentMovie");
                if (!currentMovie) {
                  return null;
                }
                if (currentMovie) {
                  checkArr.push(currentMovie);
                }
                return (
                  <>
                    <div className="cinema__full">
                      <div>
                        <div className="cinema__info">
                          <img
                            className="cinema__logo"
                            src={heThongRapChieu.logo}
                            alt="logo"
                          />
                          <div>
                            <p>{cumRap.tenCumRap}</p>
                            <p>{cumRap.diaChi}</p>
                          </div>
                        </div>
                      </div>
                      <div ref={showTimeRef} className="pt-2">
                        <p>Show times:</p>
                        <div className="cinema__time">
                          {currentMovie.lstLichChieuTheoPhim.map(
                            (item, index) => {
                              return (
                                <button
                                  key={index}
                                  onClick={() =>
                                    navigate(`/checkout/${item.maLichChieu}`)
                                  }
                                >
                                  {moment(item.ngayChieuGioChieu).format(
                                    "hh:mm"
                                  )}
                                </button>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              {checkArr.length === 0 && (
                <>
                  <div className="flex items-center justify-center flex-col py-12 px-8 text-center">
                    <img
                      className="object-contain"
                      style={{ width: "120px", height: "120px" }}
                      src="https://movie.zalopay.vn/images/mascot-1.png"
                      alt="thong bao"
                    />
                    <p className="mt-6 font-medium xs:text-sm sm:text-lg text-white mb-0 leading-5 ">
                      This theater hasn't had a show time of this movie yet
                    </p>
                    <p
                      className="mt-2 leading-5 sm:text-sm xs:text-xs"
                      style={{ color: "#ccd2d8" }}
                    >
                      Please find another theater
                    </p>
                  </div>
                </>
              )}
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default DetailMovie;
