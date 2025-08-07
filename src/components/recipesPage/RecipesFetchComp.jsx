import React, { useEffect } from 'react'
import RecipeCardComp from '../card/RecipeCardComp';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComp from "../LoadingComp";
import { getAllRecipes } from '../../features/recipesSlice.js';

const RecipesFetchComp = () => {
  const dispatch = useDispatch();
    const { allRecipesData, isLoading } = useSelector(state => state.recipes);

    useEffect(() => {
      dispatch(getAllRecipes());
    },[])

    if(isLoading){
        return <LoadingComp />
    }
  return (
    <div className='w-full h-full grid grid-cols-4'>
        { 
          allRecipesData?.map((values) => (
            <RecipeCardComp values={values}/>
          ))
        }
    </div>
  )
}

export default RecipesFetchComp;