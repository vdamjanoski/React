import { useState } from 'react'
import './App.css'
import Counter from './examples/lecture 3/components/counter'
import Greeting from './examples/lecture 3/components/greeting'
import Message from './examples/lecture 3/components/Message'
import Parent from './examples/lecture 3/components/parent'
import User from './examples/lecture 3/components/user'
import EvenCounter from './examples/lecture 3/components/EvenCounter'

function App (){
  const [show, setShow] = useState(true)
  const [color, setColor] = useState("#cccccc")
  const [count, setCount] = useState(2)

  function toggleMsg(){
    setShow(!show)
  }

  const changeColor = () => { setColor("red") }

  function greet(name){
    alert(`Hello, ${name}`);
  }


  const handleIncrement = () => {setCount(count => count + 2);}

  return(
    <>
    {/* <Counter/> */}
    {/* <Message msg="Hello there, React is awesome!" toggleMsg={toggleMsg} show={show} color={color} changeColor={changeColor}/> */}
    {/* <Greeting name="Darko" greetAlert={greet}/> */}
    {/* <Parent /> */}
    {/* <User isLoggedin={false}/> */}
    <EvenCounter increment={handleIncrement} count={count}/>
    </>
  )
}
export default App
