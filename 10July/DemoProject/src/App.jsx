import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const[like,setLike] = useState(0);

  return (
    <>
      <button onClick={()=>{setLike(like+1)}}>Like </button>
      <span>{like}</span>
    </>
  )
}

export default App
