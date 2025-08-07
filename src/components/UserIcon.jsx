// UserMenu.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';

export default function UserIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { token } = useSelector(state => state.auth);
  const username = localStorage.getItem("username");

  const userNameLetter = username.slice(0,1).toUpperCase();

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center cursor-pointer w-20 h-20 md:w-10 md:h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
      >
        <span className="text-3xl md:text-lg text-black">{ token ? userNameLetter : <FaRegUser /> }</span>
      </button>

      {isOpen && (
        <div className="absolute md:right-0 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-700 hover:bg-neutral-100"
          >
            Profile
          </Link>
         {
            token ?  <Link
            to="/my-recipes"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            My Recipes
          </Link> : ""
         }
        </div>
      )}
    </div>
  );
}
