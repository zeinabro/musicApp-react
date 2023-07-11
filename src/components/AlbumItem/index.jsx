import data from "../../data"
import React from 'react';

function AlbumItem({isTrackLiked, likeTrack}) {
    return (
        <>
            {data.map(album => (
              <tr key={album.name}>
                <td>
                  <img src={album.cover} alt={album.name} />
                </td>
                <td>{album.name}</td>
                <td>
                  <ol>
                    {album.tracks.map((track,index) => (
                      <><li
                        key={index}
                        style={isTrackLiked(track)}
                      >
                        {track } 
                        <button onClick={() => likeTrack(track)}>Like</button>
                      </li>
                      </>
                    ))}
                  </ol>
                </td>
                <td>{album.release}</td>
              </tr>
            ))}
        </>
    )
}

export default AlbumItem
