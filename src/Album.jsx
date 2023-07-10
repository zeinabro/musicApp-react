import  React, { useState } from "react"

export default function Album() {
    const albumsInfo = [
        { name: "Queen",
          tracks: ["Keep Yourself Alive","Doing All Right","Great King Rat","My Fairy King","Liar","The Night Comes Down","Modern Times Rock 'N' Roll","Son and Daughter","Jesus","Seven Seas of Rhye"],
          cover: "http://1.bp.blogspot.com/-UcZgFF2K53A/UfgIJ9pZpcI/AAAAAAAAAxg/Ou7-xvbabWE/s1600/queen+-+queen+-+1973+-+album+cover.jpg",
          release: 1973
        }
    ]

    const showAlbums = () => {
        return (albumsInfo.map(album => <li>{album}</li>))
    }

    return(
        <>
            <div id="album">
                <header>Albums</header>
                <table>
                    <th>Cover</th>
                    <th>Name</th>
                    <th>Tracks</th>
                    <th>Year of Release</th>
                    {albumsInfo.map((album) => {
                        return(
                        <tr>
                        <td><img src={album.cover}/></td>
                        <td>{album.name}</td>
                        <td><ol>{album.tracks.map(track => <li>{track}</li>)}</ol></td>
                        <td>{album.release}</td>
                        </tr>
                        )
                    })}
                </table>
            </div>
        </>
    )
}
