import  { useState, useEffect } from "react";

const API_KEY = 'b6aa02c42ba44cccad1210147241503';

const q="Brisbane"

const url = `https://api.weatherapi.com/v1/forecast.json?q=${q}&key=${API_KEY}`;
//const url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${q}?key=${API_KEY}`
const useWeather = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    
    useEffect(() => {
        
        const fetchWeather = async () => {
            try {
              const URL = url;
              const response = await fetch(URL);
              if (!response.ok) {
                throw new Error('Something went wrong!')
              }
              const data = await response.json();
              const forecasts = data.forecast.forecastday[0].hour.map(r => {
                return {
                  time: r.time,
                  text: r.condition.text,
                  temp: r.temp_c,
                  wind: r.wind_kph,
                  icon: r.condition.icon
                }
              })
              console.log(forecasts)
              setData(forecasts);
              setLoading(false);
            } catch (error) {
              setError(error.message);
            } finally {
              setLoading(false);
            }
          };
        
          // Call fetchWeather() to initiate the data fetching
          fetchWeather();

    }, [])

    return {
        data,
        loading,
        error
    }

}


export default useWeather