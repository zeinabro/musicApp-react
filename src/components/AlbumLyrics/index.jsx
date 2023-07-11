import data from "../../data"
import React from 'react';

function AlbumLyrics(album,trackName) {


    useEffect( () => {
        fetch(`https://api.lyrics.ovh/v1/${album.artistName}/${trackName}`)
        .then(resp => resp.json())
        .then(lyrics => lyrics.json())
    },[])
}

export default AlbumLyrics
