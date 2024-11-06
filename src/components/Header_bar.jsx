import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header_bar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <nav className="bg-black p-4 flex justify-between items-center sticky">
      <Link to="/" className="text-white text-xl font-bold">
        Zaibson Polymer Industries
      </Link>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        <HashLink to="/#products" className="text-white hover:text-gray-400">Products</HashLink>
        <HashLink to="/#about" className="text-white hover:text-gray-400">About</HashLink>
        <Link to="/contact" className="text-white hover:text-gray-400">Contact Us</Link>
      </div>
      <button onClick={toggleSidebar} className="md:hidden text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 right-0 bg-black text-white w-64 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
      >
        <div className="h-full flex flex-col">
          <button onClick={toggleSidebar} className="text-white p-4 self-end">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex-1 p-4 space-y-2">
            <Link to="/" className="block py-2 text-lg hover:bg-gray-700 rounded" onClick={toggleSidebar}>Home</Link>
            <Link to="/products" className="block py-2 text-lg hover:bg-gray-700 rounded" onClick={toggleSidebar}>Products</Link>
            <Link to="/#about" className="block py-2 text-lg hover:bg-gray-700 rounded" onClick={toggleSidebar}>About</Link>
            <Link to="/contact" className="block py-2 text-lg hover:bg-gray-700 rounded" onClick={toggleSidebar}>Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header_bar;
