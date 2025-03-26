import { Component } from "react";
import './UserProfileClass.css';

// import props from "prop-types";

class UserProfileClass extends Component {
    render(){
        const {name, age, hobby} = this.props
    return(
        
        <div className="card">
            <h2>User Profile</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Hobby: {hobby}</p>
        </div>
    )}
}

export default UserProfileClass