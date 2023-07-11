import React, { useState } from "react";
import "./App.css";

export default function Album() {
  const albumsInfo = [
    {
      name: "Queen",
      tracks: [
        "Keep Yourself Alive",
        "Doing All Right",
        "Great King Rat",
        "My Fairy King",
        "Liar",
        "The Night Comes Down",
        "Modern Times Rock 'N' Roll",
        "Son and Daughter",
        "Jesus",
        "Seven Seas of Rhye"
      ],
      cover:
        "http://1.bp.blogspot.com/-UcZgFF2K53A/UfgIJ9pZpcI/AAAAAAAAAxg/Ou7-xvbabWE/s1600/queen+-+queen+-+1973+-+album+cover.jpg",
      release: 1973
    }
  ];

  const [likedTracks, setLikedTracks] = useState([]);

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

  return (
    <>
      <div id="album">
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
            {albumsInfo.map(album => (
              <tr key={album.name}>
                <td>
                  <img src={album.cover} alt={album.name} />
                </td>
                <td>{album.name}</td>
                <td>
                  <ol>
                    {album.tracks.map(track => (
                      <li
                        key={track}
                        onClick={() => likeTrack(track)}
                        style={isTrackLiked(track)}
                      >
                        {track}
                      </li>
                    ))}
                  </ol>
                </td>
                <td>{album.release}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

