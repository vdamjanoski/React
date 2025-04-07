import { useEffect } from "react"
import { useState } from "react"

const Users = () => {
const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response ) => response.json())
        .then((data) => setUsers(data))
    }, [])

    return(
        <div>
            <h1>List of users</h1>
            {users.length > 0 ? users.map(user => {
                return <div>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p> </div>
            }) : <p> Users not found</p>}
        </div>
    )
}

export default Users