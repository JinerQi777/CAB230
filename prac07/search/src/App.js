
import useWeather from "./api";
import Headline from "./Headline";
import { useState } from "react";
function App() {

  const [query,setQuery]=useState("Brisbane")
  const [inputValue, setInputValue] = useState("");
  const {data,error,loading}=useWeather(query)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handler for form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the form from causing a page reload
    setQuery(inputValue);  
    setInputValue(" ")
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>
  }


  return (
    <div >
      <h1>week 7 search bar </h1>
      <h2> {query } weather forcast today </h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a city"
        />
        <button type="submit">Search</button>
      </form>
      
     { data && data.map(x=><Headline key={x.time} {...x}/>)}
     
    </div>
  );
}

export default App;
