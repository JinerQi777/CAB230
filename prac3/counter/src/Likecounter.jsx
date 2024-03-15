import React, {useState} from "react"

const Likecounter=()=>{

    const [counter,setCounter]=useState(0)
    const [superLikes, setSuperLikes] = useState(0);
  
    const increment=()=>{
      setCounter(prevCount => prevCount + 1)
     }
     
     const decrement=()=>{
     setCounter(prevCount => prevCount - 1)
     }

     const superLike = () => {
      if (superLikes < 2) {
        setCount(prevCount => prevCount + 10);
        setSuperLikes(prevSuperLikes => prevSuperLikes + 1);
      }
    };

    return (
      <>
      <h1>this is my like counter !</h1>
      <p>Overall Count: {counter}</p>
      <button onClick={increment}>Like</button>
      <br/>
      <button onClick={decrement}>Dislike</button>
      <button onClick={superLike} disabled={superLikes >= 2}>Super Like</button>
      </>
    )
  }

  export default Likecounter;