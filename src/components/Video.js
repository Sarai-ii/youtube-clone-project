import react, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import Youtube from "react-youtube"

export default function Video () {
    const {id} = useParams()
    

    const BASE_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`

    useEffect(() => {
        fetch(`${BASE_URL}`)
    })















}