import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Book from './Book';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/book" element={<Book />}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


