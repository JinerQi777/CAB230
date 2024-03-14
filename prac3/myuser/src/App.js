//step 1, make a User componet, directly pass our janet obj

//setp 2 , useState, and a button in App , click the button to get janet obj, then change
//the state of our user componet

//step 3, instead of static janet, we use fetch to get obj from API



import React, {useState} from  'react';

function App() {
  const [user, setUser] = useState([]);
  const getuser=()=>{
    setUser(janet)
  }
  // const getuser= async () => {
  //   let data = await fetchUser();
  //   setUser(data)
  // }
  // const fetchUser=async ()=> {
  //   const url = `https://reqres.in/api/users/3`;
  //   const res = await fetch(url);
  //   const res_1 = await res.json();
  //   return res_1.data;
  // }

  

  return (
    <div >
     <h1>learn fetch</h1>
     <button onClick={getuser}>Get User</button>
     <User {...user}/>
    </div>
  );
}

export default App;



const User=({first_name, last_name, email,avatar})=>{
  return (
    <>
    <ul>
      <li>{first_name}</li>
      <li>{last_name}</li>
      <li>{email}</li>
    </ul>
    <img src={avatar}/>
    </>
  )
}

const janet = {
  "id": 2,
  "email": "janet.weaver@reqres.in",
  "first_name": "Janet",
  "last_name": "Weaver",
  "avatar": "https://reqres.in/img/faces/2-image.jpg"
};