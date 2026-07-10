import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'

function App() {
  const cart = [
    {
      id:1,
      name:"pen",
      price:10.0,
      quantity:2
    },
    {
      id:2,
      name:"pencil",
      price:5.0,
      quantity:1
    },
    {
      id:3,
      name:"book",
      price:50.0,
      quantity:3
    }
  ];

  return (
    <><table border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((index)=>(
              <tr key={index}>
                <td>{index.id}</td>
                <td>{index.name}</td>
                <td>{index.price}</td>
                <td>{index.quantity}</td>
                <td>{index.price * index.quantity}</td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </>
  )
}

export default App
