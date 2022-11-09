import Populer from "./Populer";
import React from "react";
import Footer from "../components/Footer";
import Carousels from "../components/Carousels";
import "../styles/home.css";

function Home() {
  return (
    <div>
      <div className="mainBackground">
        <Carousels />
      </div>
      <div className="populer">
        <Populer />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
