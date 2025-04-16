import { useState } from "react";

function EmailInput() {

    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [interests, setInterest] = useState([])
    const [name, setName] = useState("")
    const [country, setCountry] = useState("")

    const [submittedData, setSubmittedData] = useState();

    const handleCountryChange = (event) => {
        setCountry(event.target.value)
    } 

    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleInterestChange = (event) => {
        if (event.target.checked){
            setInterest([...interests, event.target.value])
        } else {
            setInterest(interests.filter((interest) => interest !== event.target.value))
        }
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault() 
        setSubmittedData([name,gender,country,interests,email])
    }

    return (
<div>
      <form onSubmit={handleSubmit}>
         <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        /> 
        <br />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <div>
        <label>Gender:</label>

        <label>
              <input type="checkbox" value="Male" checked={gender === "Male"} onChange={handleGenderChange}/> Male
        </label>
        <label>
              <input type="checkbox" value="Female" checked={gender === "Female"} onChange={handleGenderChange}/> Female
        </label>
        </div>
        
        <div>
        <label>Interests:</label>
        <label>
            <input type="checkbox" value="Music" checked={interests.includes("Music")} onChange={handleInterestChange} /> Music
        </label>
        <label>
            <input type="checkbox" value="Sports" checked={interests.includes("Sports")} onChange={handleInterestChange} /> Sports
        </label>
        <label>
            <input type="checkbox" value="Reading" checked={interests.includes("Reading")} onChange={handleInterestChange} /> Reading
        </label>
        <label>
            <input type="checkbox" value="Travelling" checked={interests.includes("Travelling")} onChange={handleInterestChange} /> Travelling
        </label>
        </div>
        <label>
            Select Country:
        </label>
                <select value={country} onChange={handleCountryChange}>
                    <option value="">Select</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="macedonia">Macedonia</option>
                </select>
                <br />
        <button type="submit">
            Submit
        </button>
      </form>
      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Data:</h3>
          <p>{JSON.stringify(submittedData, null, 2)}</p>
        </div>
      )}
      </div>
    );
  }

  export default EmailInput