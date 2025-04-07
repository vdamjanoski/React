import { useEffect } from "react"
import { useState } from "react"

useState
function InfiniteLoop(){
    const [count, setCount] = useState(10)

    useEffect(() => {
        setCount(count + 1)
    }, [])

    return(
        <div>
            <p>Count: {count}</p>
        </div>
    )
}

export default InfiniteLoop