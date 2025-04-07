import { useState } from 'react'
import './App.css'
import Counter from './examples/lecture 3/components/counter'
import Greeting from './examples/lecture 3/components/greeting'
import Message from './examples/lecture 3/components/Message'
import Parent from './examples/lecture 3/components/parent'
import User from './examples/lecture 3/components/user'
import EvenCounter from './examples/lecture 3/components/EvenCounter'
import SimpleEffect from './examples/lecture-4/components/simpleEffect'
import EffectOnce from './examples/lecture-4/components/effectOnce'
import EffectWithDeps from './examples/lecture-4/components/effectWithDeps'
import EffectUnmount from './examples/lecture-4/components/effectUnmount'
import InfiniteLoop from './examples/lecture-4/components/infiniteLoop'
import Users from './examples/lecture-4/components/users'
import TextInput from './examples/lecture-4/components/textInput'

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

  const [toggleBool, setToggleBoo] = useState(true)

  return(
    <>
    {/* <Counter/>
    <Message msg="Hello there, React is awesome!" toggleMsg={toggleMsg} show={show} color={color} changeColor={changeColor}/>
    <Greeting name="Darko" greetAlert={greet}/>
    <Parent />
    <User isLoggedin={false}/>
    <EvenCounter increment={handleIncrement} count={count}/>
    <SimpleEffect/>
    <EffectOnce/>
    <EffectWithDeps/>
    {toggleBool ? <EffectUnmount toggleBool={toggleBool}/> : "null"}
    <button onClick={()=>setToggleBoo(!toggleBool)}>Toggle Bool</button>
    <InfiniteLoop/>
    <Users/> */}
    <TextInput/>
    </>
  )
}
export default App
