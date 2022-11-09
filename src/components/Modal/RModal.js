import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";
import GoogleLogin from "../GoogleLogin";

function RModal({ token, setToken }) {
  const [register, setShowRegister] = useState(false);

  const registerhandleClose = () => setShowRegister(false);
  const registerhandleShow = () => setShowRegister(true);

  const { handleChange, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      console.log(data);

      //berinteraksi dengan server
      const datas = await axios.post(`${process.env.REACT_APP_AUTH_API}/api/v1/auth/register`, data);
      console.log(datas);

      //localstorage
      if (datas.data.token) {
        // Set token from backend to local storage
        // {"data": { "token": "ini token" }}
        localStorage.setItem("token", datas.data.token);
        setToken(datas.data.token);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <Button variant="info" onClick={registerhandleShow}>
        Register
      </Button>

      <Modal show={register} onHide={registerhandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Modal.Body>
              <GoogleLogin setToken={setToken} label="Register with Google" />
              <br />
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Control type="name" placeholder="First Name" name="name" values={values.name} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Address" name="email" values={values.email} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" name="password" values={values.password} onChange={handleChange} />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={registerhandleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit" onClick={registerhandleClose}>
                Register
              </Button>
            </Modal.Footer>
          </Form>
        </>
      </Modal>
    </>
  );
}

export default RModal;
