import data from "../../data"
import React from 'react';

function AlbumItem({isTrackLiked, likeTrack,index}) {
    return (
        <>
            {data.map(album => (
              <tr>
                <td>
                  <img src={album.cover} alt={album.name} />
                </td>
                <td>{album.name}</td>
                <td>
                  <ol>
                    {album.tracks.map((track) => (
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
