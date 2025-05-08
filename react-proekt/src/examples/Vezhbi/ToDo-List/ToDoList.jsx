import React, { useState } from "react"
import "./ToDoList.css"
function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if (newTask.trim() !== ""){
            setTasks(e => [...e, newTask])
            setNewTask("")
        }
    }

    function deleteTask(id){
        const updatedTasks = tasks.filter((element, index) => index !== id);
        setTasks(updatedTasks);
    }

    function moveTaskUp(id){
        if (id > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[id], updatedTasks[id - 1]] = [updatedTasks[id - 1], updatedTasks[id]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(id){
        if (id < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[id], updatedTasks[id + 1]] = [updatedTasks[id + 1], updatedTasks[id]]
            setTasks(updatedTasks)
        }
    }

    return(
        <div className="to-do-list">
                <h1>To Do List</h1>
                <div>
                    <input type="text"
                    placeholder="Enter a task.."
                    value={newTask}
                    onChange={handleInputChange} />
                    <button className="add-btn" onClick={addTask}>Add a task</button>
                </div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="move-btn" onClick={() => moveTaskUp(index)}>Up</button>
                            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="move-btn" onClick={() => moveTaskDown(index)}>Down</button>
                        </li>
                    ))}
                </ul>
        </div>
    )
}
export default ToDoList