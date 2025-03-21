import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './examples/lecture 1/components/button'
import { MyFirstComponent } from './examples/lecture 1/components/Vezbi/MyFirstComponent'
import MySecondComponent from './examples/lecture 1/components/Vezbi/MySecondComponent'

function App() {

  return (
      <div>
        <MyFirstComponent/>
        <MySecondComponent/>
      </div>
  )
}

export default App
