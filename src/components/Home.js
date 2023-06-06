import React from 'react';
import SearchBar from "./Header/SearchBar";

const Home = ({ addSearchToHistory }) => {
  return (
    <div>
      <SearchBar className="searchbar" addSearchToHistory={addSearchToHistory} />{" "}
      {/* Pass addSearchToHistory as prop */}
    </div>
  );
}

export default Home;
