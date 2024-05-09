// step 1 : form 
// step 2 : use form to get user input , login then retrive volcano details ( jwt token)
// step 3 : search 
import Login from "./Login";
import { useState } from "react";


const API_URL = `http://4.237.58.241:3000`;



function App() {
  const [volcano,setVolcano]=useState(null);


const getVolcanoDetails=async ()=>{
  const url = `${API_URL}/volcano/1`;
  const token=localStorage.getItem('token');
   const res= await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  })

  const data = await res.json();
  setVolcano(data)
  console.log(data)



}

  return (
    <div >
      <h1>welcome to week 7!</h1>
      
      {volcano && volcano.name}
      <Login />
      <button onClick={getVolcanoDetails}>Get Volcano Details</button>
      
    

    </div>
  );
}

export default App;
