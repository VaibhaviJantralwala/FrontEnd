import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count,setCount] = useState(30);

  useEffect(()=>{
    
   const timer = setInterval(()=>{
    setCount((prev)=>{
      if( prev == 0 ){
        clearInterval(timer);
        return 0;
      }
      return prev-1;
      });
   },1000);

   return ()=>clearInterval(timer);

  },[]);

  return (
    <>
     {count === 0 ? <h1>Time Over</h1> : <h1>{count}</h1>}
    </>
  )
}

export default App
