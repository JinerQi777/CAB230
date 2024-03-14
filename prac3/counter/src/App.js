// Adding Some Functionality useState 

// make a like counter 

//make a reuseable component , Headline include a title and like counter

//Using fetch to Load Content  from an API ( useEffect next week )
import  React, {useState} from 'react';
import Headline from './Headline';

function App() {

  return (
    <div >
      <h1>Welcome week 3!</h1>
      {/* <Likecounter/> */}
      <Headline content="React is awesome" />
    
    </div>
  );
}

export default App;







