import React, { useEffect } from 'react'
import RecipeCardComp from '../card/RecipeCardComp';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../../features/recipesSlice.js';
import SkeletonCardComp from '../skeleton/SkeletonCardComp.jsx';

const RecipesFetchComp = ({ filterData }) => {
  const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.recipes);

    useEffect(() => {
      dispatch(getAllRecipes());
    },[])

    if(isLoading){
        return <SkeletonCardComp />
    }
  return (
    <div className='w-full h-full grid grid-cols-1 md:grid-cols-4 px-5 md:px-40'>
        { 
          filterData?.map((values) => (
            <RecipeCardComp values={values}/>
          ))
        }
    </div>
  )
}

export default RecipesFetchComp;