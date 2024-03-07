import { animals, animals2 } from "./data";
function App() {
  return (
    <div className="App">
      <h1>Welcome CAB230!</h1>
      <p>{animals[0]}</p>
      {animals.map(animal => (
        <p>{animal}</p>
      ))}
      {/* {animals2.map(animal => (
        <div>
        <h1>{animal.name}</h1>
        <p>{animal.number}</p>
        </div>
      ))} */}
      {animals2.map(animal => (
        <Animals name={animal.name} number={animal.number} />
        // <Animals {...animal}/> the better way 
      ))}
      
    </div>
  );
}

export default App;



const Animals = (props) => {
  // console.log(props)
 const {name,number}=props  
 //object Destructuring assignment
  return (
    <div>
        <h1>{name}</h1>
        <p>{number}</p>
        </div>
  )
}

