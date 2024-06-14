import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
 
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl ">CARDS</h1>
      <Card username="kaushal"/>
      <Card username="Qaushal"/>
    </>
  )
}

export default App
