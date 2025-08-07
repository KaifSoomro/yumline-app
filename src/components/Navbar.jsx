import React from 'react';
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../index.css";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
import UserIcon from './UserIcon';
import { HiBars3CenterLeft } from "react-icons/hi2";
import { handleOpenMobileNav } from '../features/fetchSlice';
import { toast } from 'react-toastify';
import Logo from "../assets/logo.png";

const Navbar = () => {

   const { token } = useSelector(state => state.auth);
   const navigate = useNavigate();
   const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout())
    navigate("/"); 
  }; 

  return (
    <nav className='fixed top-0 left-0 z-40 bg-white w-full h-20 shadow-md flex items-center justify-between px-5 md:px-30'>
      <Link to={"/"} className='text-3xl md:text-4xl font-semibold flex items-center gap-1'><img src={Logo} alt="logo-picture" className='w-20'/> Yumline</Link>

      <div className='flex items-center justify-center gap-10'>

        <div className='hidden md:flex items-center justify-center gap-7 text-lg'>
          <NavLink to={"/"} className={({isActive}) => `${ isActive ? "text-black font-semibold" : "text-neutral-500 font-semibold" }`}>
            Home
          </NavLink>

          <NavLink onClick={()=> token ? "" : toast.error("Sign in/Login first to visit recipes page")} to={"/recipes"} className={({isActive}) => `${ isActive ? "text-black font-semibold" : "text-neutral-500 font-semibold" }`}>
            Recipes
          </NavLink>

          <NavLink to={"/contact"} className={({isActive}) => `${ isActive ? "text-black font-semibold" : "text-neutral-500 font-semibold" }`}>
            Contact
          </NavLink>

          <NavLink to={"/about"} className={({isActive}) => `${ isActive ? "text-black font-semibold" : "text-neutral-500 font-semibold" }`}>
            About Us
          </NavLink>
        </div>

        <div className='flex items-center gap-3'>
          <div className='hidden w-11 h-11 text-xl p-1 rounded-full bg-neutral-800 text-white md:flex items-center justify-center cursor-pointer'>
            <span>
                <UserIcon />
            </span>
        </div>

        {
          token ? <Link onClick={handleLogout} className='hidden md:block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer'>Log out</Link>
          : <Link to={"/register"} className='hidden md:block px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-800 cursor-pointer'>Sign in</Link>
        }

        <button onClick={()=>dispatch(handleOpenMobileNav())} className='md:hidden text-5xl'>
            <HiBars3CenterLeft />
        </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar