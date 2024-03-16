
import  { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const q="Brisbane"

const url = `https://api.weatherapi.com/v1/forecast.json?q=${q}&key=${API_KEY}`;

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
              setData(data);
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