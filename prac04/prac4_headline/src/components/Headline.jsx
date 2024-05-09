import Likecounter from "./Likecounter";

const Headline=({time,text,temp,wind,icon})=>{
  
    return (
      <>
      <ul>
        <li>{time}</li>
        <li>{text}</li>
        <li>{temp}</li>
        <li>{wind}</li>
        <img src={icon} alt='weather icon' /> 
      </ul>
     

      <Likecounter/>
  
      </>
    )
  }

  export default Headline;