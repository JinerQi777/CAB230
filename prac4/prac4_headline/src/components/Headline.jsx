import Likecounter from "./Likecounter";

const Headline=({time,text,temp,wind})=>{
  
    return (
      <>
      <ul>
        <li>{time}</li>
        <li>{text}</li>
        <li>{temp}</li>
        <li>{wind}</li>
      </ul>
     

      <Likecounter/>
  
      </>
    )
  }

  export default Headline;