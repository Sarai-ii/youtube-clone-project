import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {useState} from "react"

// Components 
import Home from "./components/Home"
import About from "./components/About"
import Videos from "./components/Videos"
import Video from "./components/Video"
import NavBar from "./components/Header/NavBar"
import Footer from "./components/Footer"
import ModalWindow from "./components/ModalWindow";


// Styling 
import './App.css';


function App() {
  return (
    <div className="App">
     {/* <p>Working App</p> */}
     <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/videos" element={<Videos />} /> */}
          <Route path="/video/:id" element={<Video />} /> 
          {/* Checkout using Asterik for pathways and how it affects 404 page */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
