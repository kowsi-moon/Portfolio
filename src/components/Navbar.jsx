import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "ABOUT ME", path: "/" },
    { name: "RESUME", path: "/resume" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" }
  ];

  return (
    <nav className="border-b border-gray-200 bg-white fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-3 h-3 bg-blue-600 rounded-sm" />
          <div className="leading-tight">
            <div className="font-semibold text-gray-900 text-sm uppercase">Kowsalya</div>
            <div className="text-[10px] uppercase text-gray-500 tracking-widest">
              <span className="text-gray-300 mr-1">/</span> Frontend Developer
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-xs font-bold">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`tracking-widest transition-colors ${
                  location.pathname === item.path ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4">
          <ul className="flex flex-col space-y-4 text-xs font-bold">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} onClick={() => setIsOpen(false)} className="text-gray-600 uppercase tracking-widest">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}