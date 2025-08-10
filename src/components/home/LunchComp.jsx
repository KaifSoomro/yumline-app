import React, { useEffect, useState } from 'react'
import RecipeCardComp from '../card/RecipeCardComp';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from "axios";

const LunchComp = () => {

    const { token } = useSelector(state => state.auth);
    const [lunchData,setLunchData] = useState([]);
    const categorie = "lunch";

    useEffect(() => {
        const lunchCategorie = async() => {
          try {
            const response = await axios.get(`http://localhost:8000/upload/dynamic-recipes/${categorie}`)
            console.log(response?.data?.foundedRecipes)
            return setLunchData(response?.data?.foundedRecipes);
          } catch (error) {
            console.log(error)
          }
        }

        lunchCategorie();
    },[])

  return (
    <div className='w-full md:h-[400px] md:mt-20 mt-5 py-5 md:px-50 px-5'>
        <h1 className='md:text-4xl text-3xl text-center md:text-start text-neutral-900 font-semibold'>Lunch recipes</h1>
       
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-4'>
           {
             lunchData && lunchData.map((values) => (
                 <RecipeCardComp values={values}/>
             ))
           }
        </div>
        <div className='w-full flex items-center justify-center mt-10'>
            <Link to={ token ? "/recipes" : "/login" } className='px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 cursor-pointer'>View more</Link>
        </div>
    </div>
  )
}

export default LunchComp