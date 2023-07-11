import React, {useEffect, useState} from 'react';
import './App.css';
import { AlbumList } from './components';

function App() {

    const [bgColor, setBgColor] = useState('lightpink')
    useEffect(() => {
        const timer = setInterval(() => {
            if(bgColor=='lightpink'){
                setBgColor('white')
            } else {
                setBgColor('lightpink')
            }
        },1000)
        return (() => clearInterval(timer))
    })

    const [likedTracks, setLikedTracks] = useState([])
    return(
        <>
            <AlbumList likedTracks={likedTracks} setLikedTracks={setLikedTracks} bgColor={bgColor}/>
        </>
    )
}

export default App
