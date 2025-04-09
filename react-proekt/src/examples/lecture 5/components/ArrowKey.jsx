import { useEffect, useState } from "react"

const ArrowKeyDisplay = () => {
    const [arrowDirection, setArrowDirection] = useState("center");

    const handleKeyDown = (event) => {
        switch (event.key) {
            case "ArrowUp": 
            setArrowDirection("up"); break;
            case "ArrowDown":
            setArrowDirection("down"); break;
            case "ArrowRight":
            setArrowDirection("right"); break;
            case "ArrowLeft":
            setArrowDirection("left"); break;
            case "center":
            setArrowDirection("center"); break;
            default: break;
        }
        
    };

    useEffect(()=> {
        window.addEventListener("keydown", handleKeyDown);
        return() => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    },[]);

    return(
        <div style={{fontSize: "19px", width: "100%", height: "100%"}}>
            {arrowDirection === "center" && (
                <p>Try pressing the arrow keys on your keyboard</p>
            )}
            {arrowDirection === "up" && (
                <p>Arrow UP</p>
            )}
            {arrowDirection === "down" && (
                <p>Arrow DOWN</p>
            )}
            {arrowDirection === "right" && (
                <p>Arrow RIGHT</p>
            )}
            {arrowDirection === "left" && (
                <p>Arrow LEFT</p>
            )}
        </div>
    )
}

export default ArrowKeyDisplay