import React from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter, Routes,  Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' element={<Header />} /> 
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
