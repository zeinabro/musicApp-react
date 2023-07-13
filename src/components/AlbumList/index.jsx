//album list component
import data from "../../data"
import  React  from 'react';
import AlbumItem from "../AlbumItem";

function AlbumList ({likedTracks,setLikedTracks,bgColor,setStatus,status}) {

    function likeTrack(track) {
      if (likedTracks && likedTracks.includes(track)) {
        setLikedTracks(prevState => prevState.filter(item => item !== track));
      } else {
        setLikedTracks(prevState => [...prevState, track]);
      }
    }
  
    function isTrackLiked(track) {
      return (likedTracks && likedTracks.includes(track) ? { color: "red" } : { color: "black" });
    }
  
    function filterTracks(status) {
      if(status=='liked'){
        data = likedTracks
      } else if(status=='not-liked') {
        data = data.filter((track) => (likedTracks ? likedTracks.includes(track) == false : data))
      }
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
              <th>Tracks
                <select name="select" id="select" className="select" onChange={filterTracks(status)}>
                  <option value="all">All</option>
                  <option value="liked">Liked</option>
                  <option value="not-liked">Not Liked</option>
                </select>
              </th>
              <th>Year of Release</th>
            </tr>
          </thead>
          <tbody>
            {data.map((album,index) => <AlbumItem likedTracks={likedTracks} setLikedTracks={setLikedTracks} likeTrack={likeTrack} isTrackLiked={isTrackLiked} key={index} setStatus={setStatus}/>)}
          </tbody>
        </table>
            </div>
        </>
    )
}

export default AlbumList
