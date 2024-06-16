import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
 const [length,setLength] = useState(6);
 const[numberallowed,setNumberAllowed] = useState(false);
 const[spechar,setCharAllowed] = useState(false);
 const[password,setPassword] = useState("");

 const passwordGenerator = useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWVYZabcdefghijklmnopqrstuvwxyz";
  if(spechar) str+="!@#$%^&*-_+=[]{}~`";
  if(numberallowed) str+="0123456789";

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    console.log(char);  
    pass += str.charAt(char);
  }

  setPassword(pass);

 },[length,numberallowed,spechar,setPassword]) 

 useEffect(() => {
  passwordGenerator()
}, [length, numberallowed, spechar, passwordGenerator])

const passwordRef = useRef(null);

const copyPasswordToClipboard = useCallback(()=>{  
  passwordRef.current?.select();},[password])
  window.navigator.clipboard.writeText(password)

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
       onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={39}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberallowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={spechar}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </>
  )
}

export default App
