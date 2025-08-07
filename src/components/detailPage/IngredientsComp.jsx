import React from 'react'

const IngredientsComp = ({ singleRecipe }) => {
  return (
    <div className='w-full px-40'>
        <div className='flex justify-center gap-35 items-center text-xl py-15'>
            <h1 className='capitalize'><span className='font-semibold'>Prep Time:</span> { singleRecipe?.prepTime } minutes</h1>
            <h1 className='capitalize'><span className='font-semibold'>Cook Time:</span> { singleRecipe?.cookTime } minutes</h1>
            <h1 className='capitalize'><span className='font-semibold'>Difficulty:</span> { singleRecipe?.level }</h1>
        </div>
        <div className='mt-10'>
            <h1 className='text-2xl mb-4 font-semibold'>Ingredients:</h1>
            <p className='text-lg leading-7 tracking-wider'>{ singleRecipe?.ingredients }</p>
        </div>
        <div className='mt-10'>
            <h1 className='text-2xl font-semibold mb-4'>How to Cook?</h1>
            <p className='text-xl leading-7 tracking-wider'>{ singleRecipe?.fullDesc }</p>
        </div>
    </div>
  )
}

export default IngredientsComp