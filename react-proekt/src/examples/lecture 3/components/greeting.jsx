const Greeting = ({name, greetAlert}) => {
    const myName = "Stefan"
    return <>
    <h1>Hello {name}</h1>
    <button onClick={() => greetAlert(myName)}>Greet!</button>
    </>
}
export default Greeting