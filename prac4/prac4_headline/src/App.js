// add icon , using the weatherapi (for the student who ask me how to...)
// for those who attend my class today, if you are using .env and it doesn't work , just restart the app then it will work.



// Render a list of headline ( key props)

// clean up our sturcutre

//https://www.weatherapi.com/login.aspx change to https://www.visualcrossing.com/

//get a api key and store in the .env file 

// make a customised hook , api.js , useWeather 

import React from 'react';
import Headline from './components/Headline';
import useWeather from './api';
//step 1 : use following headlines array without key, show the console error

// const headlines=[
//   {content:"This is some content"},
//   {content:"More Content"},
//   {content:"Even more"},
//   {content: "And done"}
// ]  

//step2, update my headlines array to have 4 obj that has key and content 

// const headlines=[
//   {content:"This is some content",key:"1"},
//   {content:"More Content",key:"2"},
//   {content:"Even more",key:"3"},
//   {content: "And done",key:"4"}
// ]  

//step 3 

// const headlines = [
//   { time: '2023-03-16 02:00', text: 'Partly cloudy', temp: 20, wind: 6.1 },
//   { time: '2023-03-16 05:00', text: 'Cloudy', temp: 22, wind: 9.3 },
//   { time: '2023-03-16 09:00', text: 'Fine', temp: 25, wind: 15.1 },
//   { time: '2023-03-16 11:00', text: 'Fine', temp: 28, wind: 12 }
// ];

function App() {

  const { data, loading, error } = useWeather();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>
  }
  // from original data list to form a new list that contain each obj has time,text,temp,wind:
  const forecasts = data.forecast.forecastday[0].hour.map(r => {
    return {
      time: r.time,
      text: r.condition.text,
      temp: r.temp_c,
      wind: r.wind_kph,
      icon: r.condition.icon
    }
  })
console.log(data)
  /////// due to WeatherAPI has intermittently been unavailable for the past few days.



  // const forecasts = data.days.map(forecast => {
  //   return {
  //     time: forecast.datetime,
  //     text: forecast.description,
  //     temp: forecast.temp,
  //     wind: forecast.windspeed
  //   }
  // })

  return (
    <div >
      <h1>Welcome week 4!</h1>
      {/* <Headline {...data} /> */}
      {forecasts.map(x=><Headline key={x.time} {...x}/>)}
      {/* {headlines.map((h)=><Headline  key={h.key}  {...h}/>)} */}
      {/* <Headline content="React is awesome" /> */}

    </div>
  );
}

export default App;







