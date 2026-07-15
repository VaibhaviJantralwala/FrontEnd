import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 const passref = useRef();

  const passInput = ()=>{
    passref.current.type = "password"
  };

  const passOutput = ()=>{
    passref.current.type = "text"
  };

  return (
    <>

      <div>
        <button onClick={passInput}>password</button>
        <input type='password' ref={passref}></input>
        <button onClick={passOutput}>show</button>
      </div>

    </>
  )
}

export default App
