// Render a list of headline ( key props)

// clean up our sturcutre

//https://www.weatherapi.com/login.aspx

//get a api key and store in the .env file 

// make a customised hook , api.js , useWeather 

import  React from 'react';
import Headline from './components/Headline';

//step 1 : use following headlines array without key, show the console error

// const headlines=[
//   {content:"This is some content"},
//   {content:"More Content"},
//   {content:"Even more"},
//   {content: "And done"}
// ]  
 
//step2, update my headlines array to have 4 obj that has key and content 

const headlines=[
  {content:"This is some content",key:"1"},
  {content:"More Content",key:"2"},
  {content:"Even more",key:"3"},
  {content: "And done",key:"4"}
]  

function App() {

  

  return (
    <div >
      <h1>Welcome week 4!</h1>
     {headlines.map((h)=><Headline  key={h.key}  content={h.content}/>)}
      {/* <Headline content="React is awesome" /> */}
    
    </div>
  );
}

export default App;







