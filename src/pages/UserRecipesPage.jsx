import React from 'react'
import { Link } from 'react-router-dom';

const UserRecipesPage = () => {
    const username = localStorage.getItem("username");
    const userRole = localStorage.getItem("user-role");
  return (
    <div className='w-full h-screen'>
        <div className='w-[50%] h-25 mt-25 mx-auto bg-neutral-200 shadow rounded-full px-10 flex items-center justify-center gap-30'>
            <h1 className='text-3xl font-semibold capitalize'>Hi, {username && username}</h1>
        
            {
                userRole === "chef" ? <Link to={"/add-recipe"} className='hidden md:block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer'>Add New Recipe</Link> : ""
            }
        </div>
    </div>
  )
}

export default UserRecipesPage