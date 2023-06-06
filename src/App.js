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
        <Routes>
          <Route path="/" element={<Home addSearchToHistory={addSearchToHistory} />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
        <SideBar className="sidebar" searchHistory={searchHistory} />{" "}
        {/* Pass searchHistory as prop */}

        <Footer />
      </Router>
    </div>
  );
}

export default App;
