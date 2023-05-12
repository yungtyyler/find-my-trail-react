import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import TrailDirectory from './pages/TrailDirectory';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/trail-directory' element={ <TrailDirectory /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
