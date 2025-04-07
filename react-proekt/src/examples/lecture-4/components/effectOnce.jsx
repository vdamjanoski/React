import { useState, useEffect } from "react"

const EffectOnce = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("useEffect runs after only once after initial render")
    }, [])
    return(
        <>
        <h2>Example of a simple useEffect</h2>
        <h4>{count}</h4>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}
export default EffectOnce