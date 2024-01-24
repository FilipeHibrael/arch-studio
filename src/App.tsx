import React from 'react';
import Header from './pages/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { DataContextProvider } from './context/DataContext';
import Footer from './pages/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';

export default function App() {
  return (
    <div className="max-w-[1440px] mx-auto px-40">
      <BrowserRouter>
        <DataContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer />
        </DataContextProvider>
      </BrowserRouter>
    </div>
  );
}
