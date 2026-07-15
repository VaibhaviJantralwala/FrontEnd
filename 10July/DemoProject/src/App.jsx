import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {ThumbsUp} from 'lucide-react'

function App() {

  const[like,setLike] = useState(0);

  return (
    <>
      <button className='like' onClick={()=>{setLike(like+1)}}><ThumbsUp /></button>
      <span>{like}</span>
    </>
  )
}

export default App
