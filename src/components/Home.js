import React, { useState } from 'react';
import SearchBar from "./Header/SearchBar";
import SideBar from './SideBar';


const Home = () => {
  const [searchHistory, setSearchHistory] = useState([]);

  const addSearchToHistory = (search) => {
    setSearchHistory((prevHistory) => [...prevHistory, search]);
  };

  return (
    <div>
      <SearchBar addSearchToHistory={addSearchToHistory} />
      <SideBar searchHistory={searchHistory} />
    </div>
  );
}

export default Home;
