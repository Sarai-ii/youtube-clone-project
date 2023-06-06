import { useState } from "react";
import Videos from "../Videos";
import ModalWindow from "../ModalWindow";
import "./NavBar.css";

const key = process.env.REACT_APP_API_KEY;

export default function SearchBar({ addSearchToHistory }) {
  const [search, setSearch] = useState("");
  const [allVideos, setAllVideos] = useState([]);
  const [searchFailed, setSearchFailed] = useState(false);

  function handleTextChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!search.trim()) {
      setSearchFailed(true);
      return;
    }
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=${key}&part=snippet&type=video&maxResults=20`
    )
      .then((results) => results.json())
      .then((response) => {
        if (response.items.length === 0) {
          setSearchFailed(true);
        } else {
          setSearchFailed(false);
          setAllVideos(response.items);
          addSearchToHistory(search); // Add search to history
        }
        console.log(allVideos);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <div className="search-button">
        <form onSubmit={handleSubmit}>
          <label for="search">
            <input
              className="search-bar"
              type="text"
              value={search}
              id="search"
              onChange={handleTextChange}
            />
          </label>
          <label for="submit">
            <input className="submit" type="submit" id="submit" />
          </label>
        </form>
      </div>

      <div className="">
        <Videos videos={allVideos} />
      </div>

      {searchFailed && (
        <ModalWindow closeModal={() => setSearchFailed(false)} />
      )}
    </div>
  );
}




// Original fetch: 
// `https://youtube.googleapis.com/youtube/v3/search?key=${key}&q=${search}&part=snippet&maxResults=9&type=video`

// John's Fetch
// `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=${key}&part=snippet&type=video&maxResults=20`