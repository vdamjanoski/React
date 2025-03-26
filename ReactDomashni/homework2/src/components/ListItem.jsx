import React from "react"
import './ListItem.css'

function ListItem(){

    const tasks = [
        { name: "Learn React", priority: "High" },
        { name: "Do Groceries", priority: "Low" },
        { name: "Exercise", priority: "High" },
        { name: "Read a Book", priority: "Medium" },
    ] 

    return (
        <>
        <ul>
        {tasks.map((task, index)=> {
            return(
                <React.Fragment key={index}>
                    <li>{task.name} 
                        <ul><li>{task.priority}</li></ul>
                    </li>
                </React.Fragment>
            )
        })}
        </ul>

     
    </> 
    )
}
export default ListItem
