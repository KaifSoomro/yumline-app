import React, { use, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { findUserRecipes } from '../features/recipesSlice';
import LoadingComp from "../components/LoadingComp";
import RecipeCardComp from "../components/card/RecipeCardComp";

const UserRecipesPage = () => {
    const username = localStorage.getItem("username");
    const userRole = localStorage.getItem("user-role");
    const authorEmail = localStorage.getItem("user-email");

    const { isLoading, singleUserData } = useSelector(state => state.recipes);

    const dispatch = useDispatch()

    useEffect(() => {
      if(authorEmail){
        dispatch(findUserRecipes(authorEmail))
      }
    }, [])    

    if(isLoading){
      return <LoadingComp />
    }


  return (
    <div className='w-full'>
        <div className='w-[50%] h-25 mt-25 mx-auto bg-neutral-200 shadow rounded-full px-10 flex items-center justify-center gap-30'>
            <h1 className='text-3xl font-semibold capitalize'>Hi, {username && username}</h1>
        
            {
                userRole === "chef" ? <Link to={"/add-recipe"} className='hidden md:block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer'>Add New Recipe</Link> : ""
            }
        </div>

        {
          userRole === "chef" ? <div className='text-4xl px-55 font-semibold mt-15 mb-10'>My Recipes</div> : ""
        }

        <div className='w-full grid grid-cols-4 px-40'>
            {
              singleUserData?.map((values) => (
                  <RecipeCardComp values={values}/>
              ))
            }
        </div>
    </div>
  )
}

export default UserRecipesPage