import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from './Welcome'

function App() {

  const employee = {
    id: 101,
    name:"emp1",
    salary: 50000
  }

  return (
    <div>
      <h3>ID: {employee.id}</h3>
      <h3>ID: {employee.name}</h3>
      <h3>ID: {employee.salary}</h3>
    </div>
  );
}

export default App
