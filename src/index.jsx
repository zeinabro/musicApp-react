import React from "react"
import {createRoot} from "react-dom/client"

import Artist from "./Artist"
import Album from "./Album"
import Form from "./Form"

const root = createRoot(document.getElementById('root'))
root.render(
    <>
    <Artist/>
    <Album />
    <Form/>
    </>
)

