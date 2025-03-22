import React, { useRef } from "react";
import "./review.css";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "prismjs/themes/prism-tomorrow.css";
import "highlight.js/styles/github-dark.css";
import prism from "prismjs";
import axios from "axios";
import Nav from "../../components/topnav/Nav";
import Footer from "../../components/footer/Footer";
import CodeArea from "../../components/codeArea/CodeArea";
const ReviewPage = () => {
  const [review, setReview] = useState("Reviwe Will here");
  const [code, setcode] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    console.log(code);

    const response = await axios.post("http://localhost:3000/ai/review", {
      code,
    });
    console.log(response);

    setReview(response.data);
  }

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
            className="review"
          >
            Review
          </div>
        </div>
        <div id="right" className="right">
          <Markdown rehypePlugins={rehypeHighlight}>{review}</Markdown>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ReviewPage;
