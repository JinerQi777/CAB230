import React from 'react'
import { useState } from "react";
const API_URL = `http://4.237.58.241:3000`;


const Login = () => {
    const url = `${API_URL}/user/login`;
    const  [user, setUser] = useState({username:"", password: ""});

    const handleInput= (e)=> {
      const {name, value} = e.target;
      setUser({...user, [name]:value})
    }
    
    
    const handleSubmit= async (e)=>{
      e.preventDefault( );
      const res=await fetch(url,{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.username, password: user.password }),
      })
      const data=await res.json( ) ;
      localStorage.setItem("token" ,data.token);
      console.log(data)
      setUser({username:"", password: ""})
     
    }


  return (
    <div>
         <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id='username' name='username' value={user.username} onChange={handleInput}/>

        <label htmlFor="password">Password</label>
        <input type="password" id='password' name='password' value={user.password} onChange={handleInput}/>

        <button type="submit" >Login</button>
      </form>
    </div>
  )
}

export default Login