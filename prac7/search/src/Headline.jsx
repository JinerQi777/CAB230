

const Headline=({time,text,temp,wind,icon})=>{
  
    return (
      <>
      <ul>
        <li>time : {time}</li>
        <li>weather condiion: {text}</li>
        <li>temp: {temp}</li>
        <li>wind: {wind}</li>
        <img src={icon} alt='weather icon' /> 
      </ul>
     

      
  
      </>
    )
  }

  export default Headline;