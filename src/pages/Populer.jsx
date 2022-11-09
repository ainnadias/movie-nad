import { useEffect } from "react";
import React from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getMovies } from "../app/reducer/Home";
import "../styles/home.css";

const Populer = () => {
  const navigate = useNavigate();
  const { movies } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <Container>
        <h1 className="mt-5">Popular Movie</h1>
        <div className="right">
          <Button variant="Link">See All Movies</Button>
        </div>
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={3} className="movieWrapper" key={index}>
                <Card
                  className="text-center movieImg"
                  onClick={() => {
                    localStorage.getItem("token") ? navigate(`/detail/${result.id}`) : alert("Login dulu !! ");
                  }}
                >
                  <Image src={`${process.env.REACT_APP_IMG_PATH}/${result.poster_path}`} alt="movie" style={{ borderRadius: "15px" }} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Populer;
