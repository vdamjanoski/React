
const ChildComponent = ({changeUserInfo}) => {
    return(
        <>
        <h2>Child Component</h2>
        <button onClick={() => changeUserInfo({age: 34, surname: "Popovski"})}>Update user</button>
        </>
    )
}
export default ChildComponent