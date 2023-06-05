import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Videos from "./components/Videos";
import Video from "./components/Video";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer";
import ModalWindow from "./components/ModalWindow";
import SideBar from "./components/SideBar";
import SearchBar from "./components/Header/SearchBar";

import "./App.css";

function App() {
  const [searchHistory, setSearchHistory] = useState([]);

  const addSearchToHistory = (search) => {
    setSearchHistory((prevHistory) => [...prevHistory, search]);
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/video/:id" element={<Video />} />
            <Route path="/*" element={<Home />} /> {/* This will catch anything else that accidentally gets typed in and bring people home. */}
          </Routes>
        </div>
        <div className="move-search-bar-home hidden">
          <SearchBar addSearchToHistory={addSearchToHistory} /> {/* Pass addSearchToHistory as prop */}
        </div>

        <SideBar searchHistory={searchHistory} /> {/* Pass searchHistory as prop */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;

