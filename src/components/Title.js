import React from "react";
import { Container, Row } from "react-bootstrap";

import "../styles/title.css";

function Title({ label }) {
  return (
    <div className="background">
      <Container className="justify content center ">
        <Row className="Title">
          <div className="title-detail">
            <h1>{label}</h1>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Title;
