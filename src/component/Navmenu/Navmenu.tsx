import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Mask group.png"

export default function Navmenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-md px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
         <img src={logo} style={{width:70,height:50}}/>
        </div>

        {/* Center: Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link  className="relative text-gray-300 font-medium hover:text-white 
                 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 
                 after:bg-white after:transition-all after:duration-300 
                 hover:after:w-full" to="/">Home</Link>
          <Link  className="relative text-gray-300 font-medium hover:text-white 
                 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 
                 after:bg-white after:transition-all after:duration-300 
                 hover:after:w-full" to="/about">About Us</Link>
          <Link  className="relative text-gray-300 font-medium hover:text-white 
                 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 
                 after:bg-white after:transition-all after:duration-300 
                 hover:after:w-full" to="/service">Services</Link>
          <Link  className="relative text-gray-300 font-medium hover:text-white 
                 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 
                 after:bg-white after:transition-all after:duration-300 
                 hover:after:w-full" to="/franchise">Franchise</Link>
          <Link  className="relative text-gray-300 font-medium hover:text-white 
                 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 
                 after:bg-white after:transition-all after:duration-300 
                 hover:after:w-full" to="/">Contact</Link>
        </div>

        {/* Right: Empty for now */}
        <div className="flex-shrink-0"></div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2">
          <Link className="block text-gray-700 hover:text-blue-600 font-medium" to="/">Home</Link>
          <Link className="block text-gray-700 hover:text-blue-600 font-medium" to="/about">About Us</Link>
          <Link className="block text-gray-700 hover:text-blue-600 font-medium" to="/services">Services</Link>
          <Link className="block text-gray-700 hover:text-blue-600 font-medium" to="/franchise">Franchise</Link>
          <Link className="block text-gray-700 hover:text-blue-600 font-medium" to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}