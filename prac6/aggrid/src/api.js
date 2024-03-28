import  { useState, useEffect } from "react";

//const API_KEY = process.env.REACT_APP_API_KEY;

//const q="Brisbane"

//const url = `https://api.weatherapi.com/v1/forecast.json?q=${q}&key=${API_KEY}`;
//const url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${q}?key=${API_KEY}`
const url='https://openlibrary.org/subjects/drama.json?published_in=2000'

const useBook = () => {
    const [rowData, setRowData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    
    useEffect(() => {
        
        const fetchBook = async () => {
            try {
              const URL = url;
              const response = await fetch(URL);
              if (!response.ok) {
                throw new Error('Something went wrong!')
              }
              const data = await response.json();
              const books = data.works.map(book => ({
                title: book.title,
                author: book.authors[0].name,
                editionCount: book.edition_count,
                id: book.cover_id,
              }));
              
              setRowData(books)
              setLoading(false);
            } catch (error) {
              setError(error.message);
            } finally {
              setLoading(false);
            }
          };
        
          // Call fetchWeather() to initiate the data fetching
          fetchBook();

    }, [])

    return {
        rowData,
        loading,
        error
    }

}


export default useBook