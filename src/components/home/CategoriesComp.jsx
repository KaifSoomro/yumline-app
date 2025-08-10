import React from 'react'
import { Link } from 'react-router-dom';

const CategoriesComp = () => {

    const categoriesData = [
        {
            name:"breakfast",
            path:"/recipes",
            imgURL:"https://static.vecteezy.com/system/resources/thumbnails/033/260/507/small_2x/3d-render-of-a-fried-egg-on-a-frying-pan-png.png",
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
            imgURL:"https://cdn3d.iconscout.com/3d/premium/thumb/broccoli-8586611-6773798.png?f=webp",
            color:"from-green-200"
        },
        {
            name:"meat",
            path:"/recipes",
            imgURL:"https://static.vecteezy.com/system/resources/thumbnails/026/691/450/small/meat-beef-isolated-camping-and-hiking-equipment-summer-camp-and-holiday-vacation-3d-rendering-png.png",
            color:"from-red-200"
        },
        {
            name:"desert",
            path:"/recipes",
            imgURL:"https://cdn3d.iconscout.com/3d/premium/thumb/cake-slice-10958159-8837526.png",
            color:"from-yellow-200"
        },
        {
            name:"chocolate",
            path:"/recipes",
            imgURL:"https://cdn3d.iconscout.com/3d/premium/thumb/chocolate-bar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--delicious-logo-choco-sweet-valentine-pack-festival-days-icons-8448092.png",
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
                <Link to={value?.path} className={`w-full md:w-[150px] md:h-[180px] cursor-pointer rounded-md group flex items-center flex-col justify-center bg-gradient-to-t ${value.color} to-transparent`}>
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