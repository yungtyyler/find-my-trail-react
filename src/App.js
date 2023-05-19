import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import TrailDirectory from './pages/TrailDirectory';
import TrailDetailPage from './pages/TrailDetailPage';
import ContactPage from './pages/ContactPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrails } from './features/trails/trailsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrails());
  })

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/trail-directory' element={ <TrailDirectory /> } />
        <Route path='/trail-directory/:id' element={ <TrailDetailPage /> } />
        <Route path='/contact-us' element={ <ContactPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
