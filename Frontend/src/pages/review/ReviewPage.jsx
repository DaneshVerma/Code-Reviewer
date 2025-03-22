import React, { useRef } from "react";
import "./review.css";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import Editor from "react-simple-code-editor";
import rehypeHighlight from "rehype-highlight";
import "prismjs/themes/prism-tomorrow.css";
import "highlight.js/styles/github-dark.css";
import prism from "prismjs";
import axios from "axios";
import Nav from "../../components/topnav/Nav";
import Bottom from "../../components/bottomspan/Bottom";
const ReviewPage = () => {
  const [code, setcode] = useState(``);
  const [review, setReview] = useState("Reviwe Will here..");
  const editorRef = useRef(null)

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
          <div className="code">
            <Editor
            autoFocus
            ref={editorRef}
              placeholder="Paste Code Here..."
              value={code}
              onValueChange={(value) => setcode(value)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                outline:"none",
                fontFamily: '"Fira code, "Fira Mono, monospace',
                fontSize: 16,
                border: "0.1px solid #rgb(30 30 30)",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                overflow:"auto"
              }}
            />
          </div>
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
      <Bottom />
    </>
  );
};

export default ReviewPage;
