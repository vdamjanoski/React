import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  SimpleCounter  from "../src/examples/lecture 2/components/simpleCounter";
import {Component} from "react"
import UserCard from "../src/examples/lecture 2/components/userCard"
import Greeting  from "../src/examples/lecture 2/components/greeting"
import FruitList from './examples/lecture 2/components/FruitList';
class App extends Component{
  constructor(){
    super()

    this.state = {
      showCounter: true
    }
  }

  toggleCounter=() => {
    this.setState((prevState)=> ({
      showCounter: !prevState.showCounter
    }))
  }

  render(){
    return (
      <div>
        <button onClick={this.toggleCounter}>Toggle Counter</button>
        {this.state.showCounter ? <SimpleCounter /> : null}
        <UserCard  />
        <Greeting  />
        <FruitList />
      </div>
    )
  }
}


export default App
