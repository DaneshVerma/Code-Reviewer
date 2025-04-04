import React from "react";
import Nav from "../../components/topnav/Nav";
import Footer from "../../components/footer/Footer";
import "./about.css";
const AboutPage = () => {
  return (
    <>
      <Nav />
      <div className="about-hero">
        <div className="box"><a href=""><img src="/assets/Devimg.webp" alt="my-image" loading="eager" /></a></div>
        <hr />
        <div className="content">
          <div className="pro">
            <h2 className="title">Code Reviewer </h2>
            <p className="para">
              Code Reviewer is an AI-powered web application designed to help
              developers write cleaner, more efficient code. By integrating the
              Gemini AI API with advanced prompt engineering, it analyzes
              JavaScript projects and provides intelligent suggestions to
              improve code quality. Built using React, SCSS, Node.js, and
              Express, this tool offers an intuitive interface for reviewing,
              debugging, and optimizing code. It also enables users to download
              review reports in PDF and Markdown formats, making it easier to
              track changes and improvements.
            </p>
          </div>
          <div className="dev">
            <h2 className="title">the Developer / Me </h2>
            <p className="para">
              I am a MERN Stack Web Developer with expertise in building
              dynamic, user-friendly web applications. With a strong foundation
              in both front-end and back-end development, I specialize in
              creating seamless and efficient digital experiences. This project
              highlights my ability to integrate modern web technologies and
              APIs to enhance development workflows.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
