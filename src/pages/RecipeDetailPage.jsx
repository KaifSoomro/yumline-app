import React, { useEffect } from 'react'
import DetailHeaderComp from '../components/detailPage/DetailHeaderComp';
import IngredientsComp from '../components/detailPage/IngredientsComp';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneRecipe } from '../features/recipesSlice';
import LoadingComp from '../components/LoadingComp';

const RecipeDetailPage = () => {

  const { singleRecipe, isLoading } = useSelector(state => state.recipes);

  const { recipeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if(recipeId){
      dispatch(getOneRecipe(recipeId))
    }
  }, [])

  if(isLoading){
    return <LoadingComp />
  }

  return (
    <>
      <div className='w-full'>
         <DetailHeaderComp singleRecipe={singleRecipe}/>
         <IngredientsComp singleRecipe={singleRecipe}/>
      </div>
    </>
  )
}

export default RecipeDetailPage