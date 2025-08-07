import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderComp = () => {

    const { token } = useSelector(state => state.auth);
    const username = localStorage.getItem("username");

  return (
    <div className='w-full md:h-[500px] bg-neutral-900 flex-col-reverse md:flex-row flex items-center justify-center md:pb-0 pb-10 px-5'>

        <div className='md:w-[40%] h-full flex items-center justify-center'>
            <div>
                <h1 className='text-[7.5vw] md:text-5xl font-semibold text-white md:mt-15'>Welcome { token && "back" } <span className='text-yellow-500 capitalize'>{ token ? username : "to Yumline!!" }</span></h1>
                <p className='text-lg md:text-xl mt-4 text-neutral-300 mb-7'>Yumline is a delicious food recipe website offering easy, flavorful dishes, cooking tips, and inspiration for home chefs everywhere.</p>
                <Link to={ token ? "/recipes" : "/login" } className='md:px-5 md:py-2 px-3 py-1 bg-yellow-500 text-neutral-900 text-lg md:text-xl font-semibold hover:bg-yellow-600 rounded cursor-pointer'>{ token ? "View Recipes" : "Get Started" }</Link>
            </div>
        </div>

        <div className='md:w-[30%] h-full flex items-center justify-center'>
            <img 
                src="https://rosepng.com/wp-content/uploads/elementor/thumbs/s11728_biryani_isolated_on_white_background_345f7498-388c-4ca0-8a88-cb5164050138_2-photoroom-qrmgbstkel0b3vz3k3ebx790215wrz8am8iw3ro4gw.png" 
                className='w-[300px] md:w-[400px] mt-20'    
            />
        </div>
    </div>
  )
}

export default HeaderComp