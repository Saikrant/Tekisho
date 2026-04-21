import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/context/ThemeContext";

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
      <div className="w-8 h-8 border-2 border-[#1B4FD8] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// App is the root layout shell — vite-react-ssg provides the Router context.
// BrowserRouter is NOT used here; routing is handled by ViteReactSSG in main.jsx.
function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:text-[#1B4FD8] focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <div className="app-container w-full">
          <ScrollToTop />
          <Navbar />
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
          <Footer />
          <BottomNav />
          <ThemeToggle />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
