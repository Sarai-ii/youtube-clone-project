import React from 'react'
import SearchBar from "./Header/SearchBar"

const Home = () => {
  return (
    <div>
              <SearchBar className="searchbar" />{" "}
        {/* Pass addSearchToHistory as prop */}
    </div>
  )
}

export default Home
