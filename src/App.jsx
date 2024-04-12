import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'

//might be able to put router within this component
//call pokemon api with https://pokeapi.co/api/v2/evolution-chain/{id}/ and receive back a species with another link to call API with

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
