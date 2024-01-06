import React from "react";
import "./App.css";
import FrontPage from "./frontPage";
import Interests from "./interest";
import Reviews from "./Reviews";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
