import React, { useRef } from "react";
import "./review.css";
import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import "highlight.js/styles/github-dark.css";
import prism from "prismjs";
import axios from "axios";
import Nav from "../../components/topnav/Nav";
import Footer from "../../components/footer/Footer";
import CodeArea from "../../components/codeArea/CodeArea";
import ReviewArea from "../../components/reviewArea/ReviewArea";
const ReviewPage = () => {
  const [review, setReview] = useState("Reviwe Will here");
  const [code, setcode] = useState(``);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    prism.highlightAll();
  }, []);

  const reviewCode = async () => {
    setLoading(true); // Start loading
    setReview("Reviewing");

    let dots = 0;
    const interval = setInterval(() => {
      dots = (dots + 1) % 8;
      setReview(`Reviewing${".".repeat(dots)}`);
    }, 500);

    try {
      const response = await axios.post("http://localhost:3000/ai/review", {
        code,
      });
      clearInterval(interval); // Stop dots animation
      setReview(response.data); // Show actual review
    } catch (error) {
      clearInterval(interval);
      setReview("Failed to get review.");
    } finally {
      setLoading(false); // ✅ Done loading
    }
  };

  return (
    <>
      <Nav />
      <main>
        <div className="left">
          <CodeArea code={code} setcode={setcode} />
          <div
            onClick={() => {
              reviewCode();
            }}
            className="review-btn"
          >
            Review
          </div>
        </div>
        <div id="right" className="right">
          <ReviewArea review={review} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ReviewPage;
