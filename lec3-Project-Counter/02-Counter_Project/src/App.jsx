import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let Counter = 5;
  // const increaseValue = ()=>{
  //   console.log("clicked",Math.random());
  //   Counter++;//here value is increased but did'not get rendered in our webpage for rendering we need hooks
  // }
  //using hooks
  const [counter,setCounter] = useState(0);
  const  increaseValue = ()=>{
    if(counter == 20){
      return; 
    }
    setCounter(counter+1);
    console.log("counter increased in ui also")
  }
  const  decreaseValue = ()=>{
    if(counter == 0){
      return;
    }
    setCounter(counter-1);
    console.log("counter decreased in ui also")
  }


  return (
    <>
      <h1>Chai Aur Counter</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={increaseValue}>increase Value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value {counter} </button>
    </>
  )
}

export default App
