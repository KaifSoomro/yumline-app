import React, { useState } from 'react';
import RecipesFetchComp from '../components/recipesPage/recipesFetchComp';
import { useSelector } from 'react-redux';

const RecipesPage = () => {

  const [searchedText, setSearchText] = useState('');
  const [categorie, setCategorie] = useState('');

  const { allRecipesData } = useSelector(state => state.recipes);

  const filterData = allRecipesData?.filter(recipe => {
     const searchedData = recipe?.dishName.toLowerCase().includes(searchedText.toLowerCase());
     const categorieData = recipe?.categorie.toLowerCase().includes(categorie.toLowerCase());
     return searchedData && categorieData;
  })

  return (
    <div className='w-full h-screen'>
      <div className='w-[70%] mt-25 h-20 bg-neutral-200 flex items-center justify-evenly shadow rounded-full mx-auto'>
      <input type="text" onChange={(e)=>setSearchText(e.target.value)} placeholder='Search' className='w-70 outline-none border border-neutral-600 rounded-full px-3 py-1 ps-3'/>

         <div>
            <select onChange={(e)=>setCategorie(e.target.value)} className="w-48 px-4 py-2 rounded-md">
              <option className='bg-neutral-400 text-neutral-700'>Select categorie</option>
              <option value={""}>All</option>
              <option value={"breakfast"}>Breakfast</option>
              <option value={"healthy"}>Healthy</option>
              <option value={"meat"}>Meat</option>
              <option value={"chocolate"}>Chocolate</option>
              <option value={"lunch"}>Lunch</option>
              <option value={"desert"}>Desert</option>
              <option value={"dinner"}>Dinner</option>
            </select>
         </div>

      </div>
      <RecipesFetchComp filterData={filterData}/>
    </div>
  )
}

export default RecipesPage