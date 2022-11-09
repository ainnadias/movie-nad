import React, { useState } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";

import LModal from "./Modal/LModal";
import RModal from "./Modal/RModal";
import Logo from "../assets/img/Logo.png";

import "../styles/NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const submitData = () => {
    navigate(`/search/${input}`);
  };

  return (
    <div className="relative">
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img alt="" src={Logo} width="200px" className="d-inline-block align-top" />
            </Link>
          </Navbar.Brand>
          <Form onSubmit={submitData}>
            <Form.Control
              type="text"
              placeholder="What do you want to watch?"
              aria-label="Search"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="formSearch"
              variant="formSearch"
            />
          </Form>
          <Nav>
            {localStorage.getItem("token") ? (
              <>
                <Button
                  variant="danger"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <LModal />
                <RModal />
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default NavBar;
