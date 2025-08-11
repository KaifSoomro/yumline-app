import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleCategorie } from '../../features/fetchSlice';
import PanImage from "../../assets/3d_pan.webp";
import VegImage from "../../assets/veg_image.webp";
import MeatImage from "../../assets/meat_image.webp";
import CakeImage from "../../assets/cake_image.webp";
import ChocolateImage from "../../assets/chocolate_image.webp";

const CategoriesComp = () => {

    const dispatch = useDispatch();

    const categoriesData = [
        {
            name:"breakfast",
            path:"/recipes",
            imgURL: PanImage,
            color:"from-neutral-200"
        },
        {
            name:"lunch",
            path:"/recipes",
            imgURL:"https://img.pikbest.com/origin/10/40/87/42ppIkbEsTyZs.png!sw800",
            color:"from-orange-200"
        },
        {
            name:"healthy",
            path:"/recipes",
            imgURL: VegImage,
            color:"from-green-200"
        },
        {
            name:"meat",
            path:"/recipes",
            imgURL: MeatImage,
            color:"from-red-200"
        },
        {
            name:"desert",
            path:"/recipes",
            imgURL: CakeImage,
            color:"from-yellow-200"
        },
        {
            name:"chocolate",
            path:"/recipes",
            imgURL: ChocolateImage,
            color:"from-pink-200"
        },
    ];

  return (
    <>
        <div className='w-full flex items-center justify-between px-5 md:px-50'>
            <h1 className='mb-12 mt-15 text-3xl md:text-4xl text-neutral-900 font-semibold'>Categories</h1>
        </div>

        <div className='w-full md:h-40 grid grid-cols-2 md:flex md:items-center md:justify-center md:gap-30 gap-5 md:px-0 px-5'>

        {
            categoriesData && categoriesData.map((value) => (
                <Link onClick={()=>dispatch(handleCategorie(value?.name))} to={value?.path} className={`w-full md:w-[150px] md:h-[180px] cursor-pointer rounded-md group flex items-center flex-col justify-center bg-gradient-to-t ${value.color} to-transparent`}>
                    <img className='w-[100px] md:w-[130px] group-hover:-translate-y-2 transition-all' src={value.imgURL} alt="" />
                    <p className='text-sm font-semibold my-2'>{ value.name }</p>
                </Link>
            ))
        }

    </div>
    </>
  )
}

export default CategoriesComp