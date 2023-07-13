import React, {useEffect, useState} from 'react';
import './App.css';
import { AlbumList } from './components';

function App() {

    const [likedTracks, setLikedTracks] = useState([])
    const [status, setStatus] = useState('all')

    const [bgColor, setBgColor] = useState('lightpink')
    useEffect(() => {
        const timer = setInterval(() => {
            if(bgColor=='lightpink'){
                setBgColor('white')
            } else {
                setBgColor('lightpink')
            }
        },10000)
        return (() => clearInterval(timer))
    })

    return(
        <>
            <AlbumList likedTracks={likedTracks} setLikedTracks={setLikedTracks}
            bgColor={bgColor} setStatus={setStatus} status={status}/>
        </>
    )
}

export default App
