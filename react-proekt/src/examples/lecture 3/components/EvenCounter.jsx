import { useState } from "react"

const EvenCounter = ({increment,count}) => {
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Next Even Number</button>
        </div>
    )
}

export default EvenCounter