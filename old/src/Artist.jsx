import React from "react"
import {createRoot} from "react-dom/client"
import './App.css';


const data = [
    { artistName: "Queen", genre: "Rock", description: "We are Queen ..." },
]

export default function Artist(){
   
    return (
        <>
        <div className="Artist">
            <table>
                <tr>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Description</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.artistName}</td>
                            <td>{val.genre}</td>
                            <td>{val.description}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        </>    
    )
}