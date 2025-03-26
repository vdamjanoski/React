import React from "react";

const UserProfileFunction = ({name, age, hobby}) => {
    return(
        <>
        <div className="card">
            <h2>User Profile</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Hobby: {hobby}</p>
        </div>
        </>
    )
}

export default UserProfileFunction