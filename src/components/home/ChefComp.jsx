import React from 'react';
import { Link } from "react-router-dom";

const ChefComp = () => {
  return (
    <div className='w-full md:h-[500px] md:flex-row flex-col-reverse flex items-center mt-10 md:mt-40 justify-center md:gap-30 md:px-0 px-5'>
        <div className='md:w-[700px] h-full flex items-start justify-center flex-col mt-5 md:mt-0'>
            <h1 className='text-5xl font-semibold'>Everyone can become chef on their own kitchen</h1>
            <p className='mt-5 mb-5 md:mb-10 text-lg'>Yumline is a platform that helps you become a chef right from your own home. It gives you the tools to share your cooking, connect with local food lovers, and even start selling your dishes. Whether you're just starting out or already passionate about cooking, Yumline makes it easy to turn your kitchen into a business.</p>
            <Link to={"/register"} className='px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 cursor-pointer'>Become a chef</Link>
        </div>
        <div className='md:w-[500px] h-full rounded-3xl bg-gradient-to-t from-cyan-200 to-transparent'>
            <img className='w-full h-full object-cover' src="https://www.pngplay.com/wp-content/uploads/1/Male-Chef-Free-Commercial-Use-PNG-Image.png" alt="" />
        </div>
    </div>
  )
}

export default ChefComp;