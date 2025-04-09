import { useState } from "react"

function ColorChange(){
const [color, setColor] = useState("#ff0000")

const getRandomColor= () => {
        const letters = "0123456789abcdef"
        let colorHash = "#"
        
        for(let i = 0; i<6; i++){
            colorHash += letters[Math.floor(Math.random() * 16)]
        }
        return colorHash
    }

    
    
    

    return(
        <div>
            <div style={ {backgroundColor: color, width: "350px", height: "150px"}}>
            <h3>Press the spacebar to change the background color of the app</h3>
            </div>
        </div>
    )
}
export default ColorChange