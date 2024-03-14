import React, {useState} from "react"

const Likecounter=()=>{

    const [counter,setCounter]=useState(0)
  
    const increment=()=>{
      setCounter(prevCount => prevCount + 1)
     }
     
     const decrement=()=>{
     setCounter(prevCount => prevCount - 1)
     }
    return (
      <>
      <h1>this is my like counter !</h1>
      <p>Overall Count: {counter}</p>
      <button onClick={increment}>Like</button>
      <br/>
      <button onClick={decrement}>Dislike</button>
  
      </>
    )
  }

  export default Likecounter;