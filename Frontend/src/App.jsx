import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/start/StartPage";
import ReviewPage from "./pages/review/ReviewPage";
function App() {
 
  return (
    <Routes>

      <Route path="/"
      element={<StartPage />} />
      <Route path="/review"
      element={<ReviewPage />} />
     
     
    </Routes>
  );
}

export default App;
