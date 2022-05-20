import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Region from './pages/Region';
import CountryFound from './pages/CountryFound';
import DetailedCountry from './pages/DetailedCountry';
import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className='app-container' theme={theme}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/region/:regionName' element={<Region />} />
          <Route path='/search/:countryName' element={<CountryFound />} />
          <Route path='/country/:detailedName' element={<DetailedCountry />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}
