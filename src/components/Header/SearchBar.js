import Videos from "../Videos";
import { useState } from "react";
import ModalWindow from "../ModalWindow";

const key = process.env.REACT_APP_API_KEY

export default function Home() {
    const [search, setSearch] = useState("")
    const [allVideos, setAllVideos] = useState([])
    const [showModal, setShowModal] = useState(false);
    // const [modal, setModal] = useState(true)


    function handleTextChange(event) {
        setSearch(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!search.trim()) {
          setShowModal(true);
          return;
        }
        return fetch(
          `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=${key}&part=snippet&type=video&maxResults=20`
        )
          .then((results) => results.json())
          .then((response) => {
            setAllVideos(response.items);
            if (response.items.length === 0) {
              setShowModal(true);
            } else {
              setShowModal(false);
            }
            console.log(response.items);
          })
          .catch((error) => {
            setShowModal(true);
            console.error(error);
          });
      }
      
      
    return (
        <div>
          <div className="search-button">
            <form onSubmit={handleSubmit}>
              <input
                className="search-bar"
                type="text"
                value={search}
                id="search"
                onChange={handleTextChange}
              />
              <input className="submit" type="submit" />
            </form>
          </div>
      
          {showModal && <ModalWindow closeModal={() => setShowModal(false)} />}
        </div>
      );
    }      
 

// Original fetch: 
// `https://youtube.googleapis.com/youtube/v3/search?key=${key}&q=${search}&part=snippet&maxResults=9&type=video`

// John's Fetch
// `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=${key}&part=snippet&type=video&maxResults=20`