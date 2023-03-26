import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/Home/About";
import Needs from "./components/Events/EventNeeds";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./App.css";
import "./style.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
       <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/needs" element={<Needs />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
