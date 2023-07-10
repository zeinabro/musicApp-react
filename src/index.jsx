import React from "react"
import {createRoot} from "react-dom/client"
import Album from "./Album"

const root = createRoot(document.getElementById('root'))
root.render(
    <>
    <Album />
    </>
)
