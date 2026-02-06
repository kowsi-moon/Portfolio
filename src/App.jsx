import React from "react";
// This line below is the missing piece that caused the crash!
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        {/* pt-20 ensures content doesn't hide behind the fixed navbar */}
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirect any unknown routes back to home */}
            <Route path="*" element={<Hero />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}