import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";

import GoogleLogin from "../GoogleLogin";

function LModal(token, setToken) {
  const [login, setShowLogin] = useState(false);

  const loginhandleClose = () => setShowLogin(false);
  const loginhandleShow = () => setShowLogin(true);

  const { handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let data = {
        email: values.email,
        password: values.password,
      };
      console.log(data);

      //berinteraksi dengan server
      const datas = await axios.post(`${process.env.REACT_APP_AUTH_API}/api/v1/auth/login`, data);
      console.log(datas);

      //localstorage
      if (datas.data.token) {
        // Set token from backend to local storage
        // {"data": { "token": "ini token" }}
        localStorage.setItem("token", datas.data.token);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <Button variant="outline-info" onClick={loginhandleShow}>
        Login
      </Button>

      <Modal show={login} onHide={loginhandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login to your account</Modal.Title>
        </Modal.Header>
        <>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Modal.Body>
              <GoogleLogin setToken={setToken} label="Login with Google" />
              <br />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Address" name="email" values={values.email} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" name="password" values={values.password} onChange={handleChange} />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={loginhandleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={loginhandleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </>
      </Modal>
    </>
  );
}

export default LModal;
