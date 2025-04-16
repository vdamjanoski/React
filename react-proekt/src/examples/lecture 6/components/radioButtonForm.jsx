import { useState } from "react"

function RadioButtonForm(){
    const [gender,setGender] = useState("")

    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
    }
    return(
        <div>
            <h2>React Form with radio buttons</h2>

            <form onSubmit={handleSubmit}>
                <label > <input type="radio" value="male" checked={gender === "male"} onChange={handleGenderChange}/> Male </label>
                <label > <input type="radio" value="female" checked={gender === "female"} onChange={handleGenderChange}/> Female </label>
            </form>
        </div>
    )
}
export default RadioButtonForm