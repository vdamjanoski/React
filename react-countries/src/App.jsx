import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import CountryCard from './components/countryCard'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/:name" element={<CountryCard/>} />
      </Routes>
    </div>
  )
}

export default App
