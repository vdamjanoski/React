function User({isLoggedin}){
        // if(isLoggedin){
        //     return <h1>Welcome User!</h1>
        // } else {
        //     <h1>Please log in first.</h1>
        // }
        // <h1>{isLoggedin ? "Welcome User" : "Please log in first"}</h1>
        return <>
            {isLoggedin && <h1>Welcome User </h1>}
            {!isLoggedin && <h1>Please Log in first</h1>}
        </>
    }
export default User