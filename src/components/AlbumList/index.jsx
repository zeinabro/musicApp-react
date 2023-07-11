//album list component
import data from "../../data"
import React from 'react';
import AlbumItem from "../AlbumItem";

function AlbumList ({likedTracks,setLikedTracks,bgColor}) {

    function likeTrack(track) {
      if (likedTracks.includes(track)) {
        setLikedTracks(prevState => prevState.filter(item => item !== track));
      } else {
        setLikedTracks(prevState => [...prevState, track]);
      }
    }
  
    function isTrackLiked(track) {
      return likedTracks.includes(track) ? { color: "red" } : { color: "black" };
    }
  

    return(
        <>
            <div id="albums" className={bgColor}>
            <header>Albums</header>
        <table>
          <thead>
            <tr>
              <th>Cover</th>
              <th>Name</th>
              <th>Tracks</th>
              <th>Year of Release</th>
            </tr>
          </thead>
          <tbody>
            {data.map((album,index) => <AlbumItem likedTracks={likedTracks} setLikedTracks={setLikedTracks} likeTrack={likeTrack} isTrackLiked={isTrackLiked} key={index}/>)}
          </tbody>
        </table>
            </div>
        </>
    )
}

export default AlbumList
