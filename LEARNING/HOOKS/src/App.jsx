import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  
  let [counter,setCounter] = useState(0);

  const addValue = () =>{
    setCounter(counter+1);
    setCounter(counter=counter+1);
    setCounter(counter=counter+1);
    if(counter>4) {
      setCounter(5);
    }
  }
  const remValue = () =>{
    setCounter(counter-1);
    if(counter<1){
      setCounter(0);
    }
  }
  return (
    <>
      <h1>COUNTER APP</h1>
      <h3>Counter Value :  {counter}</h3>
   
      <button onClick={addValue}>Add </button>
      <br />
      
      <button onClick={remValue}>Remove</button>
    </>
  )
}

export default App
