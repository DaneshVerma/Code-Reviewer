
import { Route, Routes } from "react-router-dom";
import ReviewPage from "./pages/ReviewPage";
function App() {
 
  return (
    <Routes>
      <Route path="/"
      element={<ReviewPage />} />
     
      {/* <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(value) => setcode(value)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code, "Fira Mono, monospace',
                fontSize: 16,

                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div
            onClick={() => {
              reviewCode();
            }}
            className="review"
          >
            Riview
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={rehypeHighlight}>{review}</Markdown>
        </div>
      </main> */}
    </Routes>
  );
}

export default App;
