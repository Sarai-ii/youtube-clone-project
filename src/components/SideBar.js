import React, { useState } from "react";
import "./SideBar.css";

const SideBar = ({ searchHistory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}></button>
      <div className="sidebar-content">
        <ul className="sidebar-links">
          <li>
            <a>Library</a>
          </li>
          <li>
            <a>History</a>
          </li>
          <li>
            <a>Your Videos</a>
          </li>
          <li>
            <a>Watch Later</a>
          </li>
          <li>
            <a>Show More</a>
          </li>
        </ul>
        <div></div>
        <div className="sidebar-divider"></div>
        <div></div>
        <h2>Search History:</h2>
        <ul>
          {searchHistory.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>

        <ul></ul>
      </div>
    </div>
  );
};

export default SideBar;
