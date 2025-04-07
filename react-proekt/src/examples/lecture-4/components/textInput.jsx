import { useEffect } from "react";
import { useRef } from "react";


function TextInput() {
    const inputRef = useRef(null)

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus()
    }, [])

    return(
        <>
            <h2>Focus Input</h2>
            <input ref={inputRef} type="text" id="input" />
        </>
    )
}
export default TextInput