import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Card, Image, Modal } from "react-bootstrap";
import { FaRegPlayCircle, FaStar } from "react-icons/fa";

import Footer from "../components/Footer";
import Title from "../components/Title";

import "../styles/detail.css";
import "../styles/intro.css";

import { getMovies, getVideos } from "../app/reducer/Detail";

const Detail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { movies } = useSelector((state) => state.detail);
  const { videos } = useSelector((state) => state.detail);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    dispatch(getMovies(id));
    dispatch(getVideos(id));
  }, []);

  return (
    <div>
      <div>
        {localStorage.getItem("token") ? (
          <div className="detail">
            <Title label="Detail Movie" />
            <Container className=" justify-content-center">
              <Row>
                <Col className="imageD">
                  <Image src={`${process.env.REACT_APP_IMG_PATH}/${movies.poster_path}`} alt="movie" />
                </Col>
                <Col className=" justify-content-center">
                  <Row className="desc">
                    <div className="title">{movies.original_title}</div>
                    <div className="genre mt-2">{movies.genres_ids}</div>
                    <div className="my-3">
                      <Card.Text>{movies.overview}</Card.Text>
                    </div>
                    <div className="rating my-4">
                      <FaStar color="yellow" />
                      {Math.min(movies.vote_average).toFixed(1)} / 10
                    </div>
                    <div className="watchTrailer">
                      <Button variant="info" onClick={handleShow}>
                        Watch Trailer {movies.video}
                        <FaRegPlayCircle size="25px" />
                      </Button>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Body>
                          <div className="trailer">
                            <iframe
                              width="450"
                              height="315"
                              src={`https://www.youtube.com/embed/${videos}`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="danger" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        ) : (
          navigate("/")
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
