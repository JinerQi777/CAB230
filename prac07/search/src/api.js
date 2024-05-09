import  { useState, useEffect } from "react";

const API_KEY = '';// please insert your own API KEY





const useWeather = (query ) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    
    useEffect(() => {
        
        const fetchWeather = async () => {
            try {
                const url = `https://api.weatherapi.com/v1/forecast.json?q=${query}&key=${API_KEY}`;
              const response = await fetch(url);
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

    }, [query])

    return {
        data,
        loading,
        error
    }

}


export default useWeather