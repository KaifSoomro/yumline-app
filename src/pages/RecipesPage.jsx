import React from 'react';
import RecipesFetchComp from '../components/recipesPage/recipesFetchComp';
import { HiMagnifyingGlass } from "react-icons/hi2";

const RecipesPage = () => {

  return (
    <div className='w-full h-screen'>
      <div className='w-[70%] mt-25 h-20 bg-neutral-300 flex items-center justify-evenly shadow rounded-full mx-auto'>

         <div className='w-[310px] bg-neutral-200 border rounded flex items-center justify-between py-1 pe-3'>
            <input type="text" placeholder='Search' className='outline-none border-none ps-3'/>
            <button className='text-white rounded cursor-pointer'>
               <HiMagnifyingGlass className='text-3xl text-neutral-900'/>
            </button>
         </div>

         <div>
            <select className="w-48 px-4 py-2 rounded-md border border-gray-300">
              <option className='bg-neutral-400 text-neutral-700'>Select categorie</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Desert</option>
              <option>Dinner</option>
            </select>
         </div>

      </div>
      <RecipesFetchComp />
    </div>
  )
}

export default RecipesPage