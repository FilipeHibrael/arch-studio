import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { DataContextProvider } from './context/DataContext';

export default function App() {
  return (
    <div className="max-w-[1440px] mx-auto px-40">
      <Header />
      <BrowserRouter>
        <DataContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </DataContextProvider>
      </BrowserRouter>
    </div>
  );
}
