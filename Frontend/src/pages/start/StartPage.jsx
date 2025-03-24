import React from "react";
import { Link } from "react-router-dom";
import "./start.css";
import Nav from "../../components/topnav/Nav";
import Footer from "../../components/footer/Footer";
const StartPage = () => {
  return (
    <>
      <Nav />
      <div className="start">
        <div className="hero">
          <div className="logo">
            <img src="/assets/react.svg" alt="" />
          </div>
          <h1>
            Welcome To <br className="new-line" /> code-view's
          </h1>
          <Link to={"/review"}>
            <button className="btn">Let's Review</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StartPage;
