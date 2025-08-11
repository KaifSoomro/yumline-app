import React from 'react';
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { handleCloseMobileNav } from '../features/fetchSlice';
import UserIcon from './UserIcon';
import { logout } from '../features/authSlice';

const MobileNavBarComp = () => {

    const { mobileNav } = useSelector(state => state.fetch);
    const { token } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const showBar = mobileNav ? "left-0" : "left-[-200%]";

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(logout())
        navigate("/"); 
    }; 

  return (
    <div className={`fixed top-0 ${showBar} w-[95%] transition-all h-full bg-white z-50 shadow-md px-5`}>
        <button onClick={() => dispatch(handleCloseMobileNav())} className='absolute top-3 right-3 text-4xl'>
            <IoClose/>
        </button>

        <div className='flex items-start justify-center flex-col gap-7 text-xl mt-20'>
          <div className='mb-4'>
                <UserIcon />
          </div> 
          <NavLink onClick={() => dispatch(handleCloseMobileNav())} to={"/"} className={({isActive}) => `${ isActive ? "text-black font-semibold" : "text-neutral-500 font-semibold" }`}>
            Home
          </NavLink>

          <NavLink onClick={() => dispatch(handleCloseMobileNav())} to={"/recipes"} className={({isActive}) => `${ isActive ? "text-black font-semibold" : "text-neutral-500 font-semibold" }`}>
            Recipes
          </NavLink>

          <NavLink onClick={() => dispatch(handleCloseMobileNav())} to={"/about"} className={({isActive}) => `${ isActive ? "text-black font-semibold" : "text-neutral-500 font-semibold" }`}>
            About Us
          </NavLink>
          <div className='mt-4'>
            {
                token ? <Link onClick={handleLogout} className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer'>Log out</Link>
                : <Link to={"/register"} className='px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-800 cursor-pointer'>Sign in</Link>
            }
        </div>
        </div>
    </div>
  )
}

export default MobileNavBarComp