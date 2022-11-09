import React from "react";
import axios from "axios";

import { useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";

function GoogleLogin({ label }) {
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      // Send access token to backend
      try {
        const data = {
          access_token: response.access_token,
        };
        const datas = await axios.post(`${process.env.REACT_APP_AUTH_API}/api/v1/auth/google`, data);
        if (datas.data.token) {
          // Set token from backend to local storage
          // {"data": { "token": "ini token" }}
          localStorage.setItem("token", datas.data.token);
          // setToken(datas.data.token);
          window.location.reload();
        }
      } catch (error) {
        // If there are any error it will show the error message from backend
        // { "message": "Password salah" }
        alert(error.response.data.message);
      }
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <div className="d-grid">
      <div className="m-auto">
        <Button variant="primary" onClick={googleLogin}>
          <FontAwesomeIcon icon={faGoogle} /> {label}
        </Button>
      </div>
    </div>
  );
}

export default GoogleLogin;
