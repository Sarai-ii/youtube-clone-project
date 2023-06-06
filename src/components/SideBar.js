import React from "react";
import "./SideBar.css"

const SideBar = ({ searchHistory }) => {
  return (
    <div className="sidebar">
      <h2>Search History:</h2>
      <ul>
        {searchHistory.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
