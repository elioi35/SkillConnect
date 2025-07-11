import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#8B1C2B] h-22 shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto rounded-lg mt-1.5 shadow border-2 border-white bg-white p-1 transition-transform duration-200 hover:scale-105"
            />
            <span className="text-white font-bold text-2xl tracking-wide drop-shadow">
              SkillConnect
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150">
              Home
            </Link>
            <Link
              to="/about"
              className="text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"   >
              About
            </Link>
            <Link
              to="/dashboard"
              className="text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
            >
              Dashboard
            </Link>
            <Link
              to="/mentors"
              className="text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
            >
              Mentors
            </Link>
            <Link
              to="/mycourses"
              className="text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
            >
              MyCourses
            </Link>
            <Link
              to="/login"
              className="text-black font-medium px-3 py-2 rounded bg-white  transition duration-150"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-black font-medium px-3 py-2 rounded bg-white  transition duration-150"
            >
              Register
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#8B1C2B] rounded-b-xl shadow animate-fade-in-down">
          <Link
            to="/"
            className="block text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/dashboard"
            className="block text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/mentors"
            className="block text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            Mentors
          </Link>
          <Link
            to="/mycourses"
            className="block text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-black transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            MyCourses
          </Link>
          <Link
            to="/login"
            className="block text-black font-medium px-3 py-2 rounded bg-white transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block text-black font-medium px-3 py-2 rounded bg-white transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
