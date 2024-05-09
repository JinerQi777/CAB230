import Likecounter from "./Likecounter"

const Headline=({content})=>{
    return (
      <>
      this is my Headline contain a title and a like button 
      <h2>{content}</h2>
      <Likecounter/>
  
      </>
    )
  }

  export default Headline;