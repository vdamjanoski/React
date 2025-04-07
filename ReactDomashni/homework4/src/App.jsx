import { useState } from 'react'
import './App.css'
import DynamicCounter from './components/DynamicCounter'
import Users from './components/RandomUserFetcher'
import CatImg from './components/CatImg'

function App() {
  const [catImages, setCatImages] = useState([])
  const fetchCatImages = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
      const data = await response.json();
      const url = data.map(catImage => catImage.url);
      setCatImages(url)
  }

  return (
    <>
    <DynamicCounter/>
    <Users/>
    <div className='cats'>
    <button onClick={fetchCatImages} style={{width: '400px',height: '400px',borderRadius: '50%',backgroundColor: 'gray'}}>Fetch Cat Images</button>
      {catImages.map((url , index)=> (
        <CatImg key={index} url={url}/>
      ))}
    </div>
    </>
  )
}

export default App
