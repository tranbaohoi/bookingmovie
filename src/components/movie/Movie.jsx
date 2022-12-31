import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import moviepicture from "../../assets/images/gp03.jpg";
import { getListFilmsActions } from "../../redux/actions/QuanLyPhimActions";
import "./movie.css";
import "./pagination.css";
import Modal from "react-modal";
import ReactPlayer from "react-player";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    maxWidth: "100vw",
    overflow: "hidden",
  },
};

const Movie = (props) => {
  const [trailer, setTrailer] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  console.log("arrFilm", arrFilm);
  useEffect(() => {
    dispatch(getListFilmsActions());
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = arrFilm.slice(visitedPage, visitedPage + productPerPage);

  const pageCount = Math.ceil(arrFilm.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const renderFilm = () =>
    displayPage.map((item, index) => (
      <Col lg="3" md="4" sm="6" xs="12">
        <div className="movie__card">
          <div className="movie__play">
            <img className="movie__img" src={item.hinhAnh} alt={item.tenPhim} />
            <div className="movie__img--overlay"></div>
            <div
              onClick={() => {
                const trailer = item.trailer;
                setTrailer(trailer);
                openModal();
              }}
              className="movie__trailer--btn"
            >
              <i class="trailer__btn ri-play-circle-line"></i>
            </div>
          </div>

          <div className="movie__name">{item.tenPhim}</div>
          <div className="movie__desc">
            <span className="movie__C">C18</span>
            <div className="movie__info">
              <i class="ri-time-line"></i>120 min
              <i class="ri-thumb-up-fill"></i>
              {item.danhGia}
            </div>
          </div>

          <NavLink className="movie__book" to={`/detail/${item.maPhim}`}>
            <span>Book Ticket </span>
          </NavLink>
        </div>
      </Col>
    ));

  return (
    <Container style={{ maxWidth: "1140px", padding: "0px 20px" }}>
      <Row>
        {renderFilm()}
        <div>
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel="Prev"
            nextLabel="Next"
            containerClassName="paginationBttns"
          />
        </div>
      </Row>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ReactPlayer
          style={{ maxWidth: "100vw" }}
          className="react-player"
          playing={true}
          width={640}
          height={360}
          controls={true}
          url={trailer}
        />
      </Modal>
    </Container>
  );
};

export default Movie;
