import React,{useState,useContext} from 'react'
import {UserContext} from '../context/UserContext'


function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const{setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }

  return (
    <>
    <div>Login</div>
    <input type="text" 
    placeholder='username'
    onChange={(e)=>setUsername(e.target.value)}    
    />
    <br/>
    <input type="text" 
    placeholder='password'
    onChange={(e)=>setPassword(e.target.value)}    
    />
    <br />
    
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login