import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("olive");

  return (
    <>
      <div className='w-full h-screen  '
      style={{backgroundColor:color}}
      ></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center shadow-xl gap-3 bg-white px-3 py-2  rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor:"yellow"}}
            
          >Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}
          >Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor:"Blue"}}
          onClick={()=>setColor("blue")}
          >Blue</button>
        </div>
      </div>
      </>
  )
}

export default App
