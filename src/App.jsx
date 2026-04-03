import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/context/ThemeContext";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Events from "@/pages/Events";

function App() {
  return (
    <ThemeProvider>
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
          <Footer />
          <BottomNav />
          <ThemeToggle />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
