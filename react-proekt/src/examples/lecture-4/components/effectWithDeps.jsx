import { useState, useEffect } from "react"

const EffectWithDeps = () => {
    const [count, setCount] = useState(0)
    const [counterTwo, setCounterTwo] = useState(2)

    useEffect(() => {
        console.log("useEffect runs only after initial render");
        
    })
    useEffect(() => {
        console.log("Second useEffect")
    })
    return(
    <>
        <h2>Example of a simple useEffect</h2>
        <h4>{count}</h4>
        <button onClick={()=> setCount(count+1)}>Increment counter 1</button>
        <button onClick={()=> setCount(count+2)}>Increment counter 2</button>
    </>
    )
}
export default EffectWithDeps