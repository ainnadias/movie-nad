import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import LModal from "./components/Modal/LModal";
import RModal from "./components/Modal/RModal";
import NavBar from "./components/NavBar";
import Protected from "./components/Protected";
import { store } from "./app/store/store";

import "./App.css";

function App() {
  // Get token from local storage
  const tokenLocalStorage = localStorage.getItem("token");
  // So we will pas token from local storage to this state
  // This is global state
  // For futher, we will use redux for global state (state management)
  const [token, setToken] = useState(tokenLocalStorage);

  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <NavBar setToken={setToken} token={token} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/detail/:id"
              element={
                <Protected token={token} setToken={setToken}>
                  <Detail />
                </Protected>
              }
            />
            <Route path="/search/:nama" element={<Search />} />
            <Route path="/login" element={<LModal token={token} setToken={setToken} />} />
            <Route path="/register" element={<RModal token={token} setToken={setToken} />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
