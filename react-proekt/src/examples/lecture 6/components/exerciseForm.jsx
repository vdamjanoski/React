import { useState } from "react"

const MessageForm = () => {
    const [message,setMessage] = useState("")
    const [error, setError] = useState("")
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (message.trim === "" || message.length < 10){
            setError("The message is too short!")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Message:</label>
            <textarea value={message} onChange={(e) => handleMessage(e)} required></textarea>
            <input type="submit"/>
            {error  ?  <p>{error}</p> : <p>{message}</p>}
        </form>
    )
}
export default MessageForm