import { useParams } from "react-router-dom"

function User(){

    const {id} = useParams()
    console.log("User ID", id);
    
    return(
        <div>
            <h1>User Profile Page</h1>
            <p>You are viewing the profile of user with id: <b>{id}</b></p>
        </div>
    )
}
export default User