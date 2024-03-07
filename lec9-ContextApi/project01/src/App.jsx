import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'

import './App.css'
import Login from './components/Login'
import Profie from './components/Profie'

function App() {

  return (
    <>
      <h1>React With chai and share is important</h1>
      <UserContextProvider>
        <h1>React with chai context API </h1>
        <Login/>
        <Profie/>

      </UserContextProvider>
    </>
  )
}

export default App
