import { useState } from "react"
import { UsersContext } from "../context/createContext"

export const UsersProvider = ( {children} ) => {
    const [users,setUsers] = useState([])

    const addUser = (name) => {
            setUsers((prevUsers) => [...prevUsers, name])
    }

    return(
        <UsersContext.Provider value={{users, addUser}}>
            {children}
        </UsersContext.Provider>
    )
}