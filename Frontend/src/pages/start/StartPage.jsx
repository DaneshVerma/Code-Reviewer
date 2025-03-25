import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./start.css";
import axios from "axios";
import Nav from "../../components/topnav/Nav";
import Footer from "../../components/footer/Footer";
const StartPage = () => {
  const [ready, setReady] = useState(false);
  async function connect() {
    try {
      const response = await axios.get( import.meta.env.VITE_API_START_URL
      );
      if (response.status == 200) {
        setReady(true);
      }
    } catch (error) {
      console.log(error);
    }finally{      
    }
  }
  useEffect(() => {
    connect();
  },);
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
          <Link to={"/review"} className="starter">
          {ready?<button className="btn">Let's Review</button>: 
           <h3 className="waiting">Getting ready..! <br />Please wait</h3> }
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StartPage;
