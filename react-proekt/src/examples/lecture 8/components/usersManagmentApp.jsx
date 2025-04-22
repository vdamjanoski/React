import { useContext } from "react"
import { UsersContext } from "../context/createContext"
import { useState } from "react"

export const UsersManagmentApp = () => {
    const {users, addUser} = useContext(UsersContext)
    const[inputValue, setInputValue] = useState("")

    const handleSubmit = () => {
        addUser(inputValue)
        setInputValue("")
    }
    return(
        <div>
            <h2>User Managment</h2>
            <input type="text" placeholder="Enter user name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={handleSubmit}> Add user's name</button>
            {users.length === 0 ? (
                <p>Add some users to the list</p>
            ):(
                <p>
                    {users.map((user,index) => (
                        <span key={index}>{user}</span>
                    ))}
                </p>
            )}
        </div>
    )
}