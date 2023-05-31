import Videos from "./Videos";
import { useState } from "react";

const key = process.env.REACT_APP_API_KEY

export default function Home() {
    const [search, setSearch] = useState("")
    const [allVideos, setAllVideos] = useState([])
    // const [modal, setModal] = useState(true)


    function handleTextChange(event) {
        setSearch(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=${key}&part=snippet&type=video&maxResults=20`)
        .then((results) => results.json())
        .then(response => {
            setAllVideos(response.items)
            // setModal(false)
            console.log(response.items)

        })
        .catch((error => {
            // console.log(error)
            // setModal(false)
        }))
    } 
        return (
            <div>
                <div className="search-button">
                    <form onSubmit={handleSubmit}>
                        <input className="search-bar"
                        type="text"
                        value={search}
                        id="search"
                        onChange={handleTextChange}
                        />
                        <input className="submit" type="submit"/>
                    </form>

                </div>
               
            </div>
        )
}
 

// Original fetch: 
// `https://youtube.googleapis.com/youtube/v3/search?key=${key}&q=${search}&part=snippet&maxResults=9&type=video`

// John's Fetch
// `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=${key}&part=snippet&type=video&maxResults=20`