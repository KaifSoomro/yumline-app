import React from 'react';
import { HiClock } from "react-icons/hi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";

const RecipeCardComp = ({ values }) => {
  return (
    <Link to={`/recipes/${values?._id}`} className='relative w-[300px] h-[300px] hover:scale-103 cursor-pointer transition-all mx-auto flex flex-col bg-gradient-to-t from-cyan-100 to-transparent rounded-2xl mt-10 p-2 overflow-hidden'>
        <button className='absolute top-3 right-3 cursor-pointer active:scale-95 flex items-center justify-center text-lg w-10 h-10 rounded-full bg-white shadow'>
            <GoHeartFill className='text-neutral-500'/>
        </button>
        
        <div className='w-full h-[60%]'>
            <img className='w-full h-full rounded-2xl object-cover' src={values?.dishImage} alt="" />
        </div>

        <div className='w-full h-[40%] py-3 px-1'>
            <h1 className='font-semibold text-xl mb-3 h-13'>{ values?.dishName }</h1>
            <div className='w-full flex gap-5'>
                <span className='flex gap-1 items-center'><HiClock className='text-xl'/> { values?.cookTime } min</span>
                <span className='flex gap-1 items-center capitalize'><TbToolsKitchen2 className='text-xl'/> { values?.categorie }</span>
            </div>
        </div>

    </Link>
  )
}

export default RecipeCardComp