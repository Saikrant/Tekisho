import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Events from './pages/Events';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container w-full">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <BottomNav />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
