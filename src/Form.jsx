import React from "react"
import {createRoot} from "react-dom/client"

export default function Artist(){
    //const [inputs, setInputs] = useState({})
    return (
        <form>
          <label>Enter the Artist name:
            <input type="text" />
          </label>
          <label>Enter the Artist's music type:
            <input type="text" />
          </label>
          <label>Enter the Artist's description:
            <input type="text" />
          </label>
        </form>
      )

}