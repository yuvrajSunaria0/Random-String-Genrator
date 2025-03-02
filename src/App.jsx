import { useState, useCallback, useEffect,useRef } from 'react'
// import reactLogo from '..svg'
import './App.css'



function App() {
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [length, setLength] = useState(8)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("");
  //useref
  const passwordref =useRef(null)
  const passWordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) { str += "0123456789" }
    if (characterAllowed) { str += "!@#$%^&*()_+={}[]~`" }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
     setPassword(pass)

    

  }, [length, numberAllowed, characterAllowed])
  const lund =useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)},[password]);
    
  useEffect(()=>{passWordGenrator()},[length,numberAllowed,characterAllowed,passWordGenrator]);

  

  return (
    <>
      <div>
        <div className="text-3xl font-bold ">Password genrator</div>
        <div>
          <input ref={passwordref}type="text" className="lol outline-none w-full my-1 py-1 px-3 bg-amber-50 text-black " value={password} />
          <button onClick={lund} className='lol outline-none bg-blue-400 text-white py-1 px-1 my-1'
           >COPY</button>
        </div>
        <div className=' flex justify-between'>
          <input className='cursor-pointer ' type="range" min={7} max={100} value={length}
            onChange={(e) => { setLength(e.target.value) }} />

          <label className='mx-2' >length {length}</label>
          <div className="mx-6 place-content-around "><label className='mx-2'>Number</label>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={(e) => {
              setNumberAllowed(prev => !prev)
            }} />
            <label className='mx-2' >Characters</label>
            <input type="checkbox" defaultChecked={characterAllowed} onChange={(e) => {
              setCharacterAllowed(prev => !prev)
            }} />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
