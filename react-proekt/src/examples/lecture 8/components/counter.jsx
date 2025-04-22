import { useContext } from "react"
import { CounterContext } from "../context/counterContext"

const Counter = () => {
    const {count, increment, decrement, reset} = useContext(CounterContext)

    return(
        <div>
            <h3>Counter Component</h3>
            <span>Count: {count}</span>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter