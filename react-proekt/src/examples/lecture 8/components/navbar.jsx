import { useContext } from "react"
import UserProfile from "./userProfile"
import { UserContext } from "../context/userContext"

function Navbar(){
    const {user} = useContext(UserContext)
    console.log(user, "From navbar");
    return(
        <div>
            <h2>Simple Navbar Component</h2>
            <UserProfile/>
        </div>
    )
}
export default Navbar