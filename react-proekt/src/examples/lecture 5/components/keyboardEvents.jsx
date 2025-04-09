const KeyboardEvents = () => {
    const handleKeyDown = (event) => {
        console.log(event.key);
    }
    return <input type="text" placeholder="Press any key" onKeyDown={handleKeyDown}/>
}
export default KeyboardEvents