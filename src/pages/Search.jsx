import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, Image } from "react-bootstrap";

import Title from "../components/Title";
import Footer from "../components/Footer";

const Search = () => {
  const { nama } = useParams();
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  console.log(movies);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/search/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          query: nama,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, [nama]);
  return (
    <div className="movie-search">
      <Title label="Search Movie" />
      <Container>
        <Row>
          {movies.map((result, index) => {
            console.log(result.id);
            return (
              <Col md={3} className="movieWrapper" key={index}>
                <Card className="text-center movieImg" onClick={() => navigate(`/detail/${result.id}`)}>
                  <Image src={`${process.env.REACT_APP_IMG_PATH}/${result.poster_path}`} alt="movie" style={{ borderRadius: "15px" }} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Search;
