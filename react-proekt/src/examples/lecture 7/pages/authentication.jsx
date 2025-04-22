import { Outlet } from "react-router-dom"

function Authentication(){
    return(
        <div>
            <h1>This is a simple Authentication Page</h1>
            <Outlet/>
        </div>
    )
}
export default Authentication