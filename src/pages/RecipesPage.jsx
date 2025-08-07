import React from 'react';
import RecipesFetchComp from '../components/recipesPage/recipesFetchComp';

const RecipesPage = () => {

  return (
    <div className='w-full h-screen'>
      <div className='w-[70%] mt-25 h-20 bg-neutral-300 shadow rounded-full mx-auto'></div>
      <RecipesFetchComp />
    </div>
  )
}

export default RecipesPage