import React from "react";

const SideBar = ({ searchHistory }) => {
  return (
    <div>
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
