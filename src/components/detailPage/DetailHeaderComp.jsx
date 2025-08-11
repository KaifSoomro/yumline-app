import React from 'react'

const DetailHeaderComp = ({ singleRecipe }) => {
  return (
    <div className='w-full md:h-[580px] relative bg-neutral-200 flex md:flex-row flex-col-reverse mt-15 md:mt-20'>
          <img src={singleRecipe?.dishImage} alt="Image-not-found" className='absolute top-0 left-0 object-cover w-full h-full'/>
          <div className='absolute w-full h-full bg-gradient-to-t from-neutral-900/85 to-transparent'></div>
    
         <div className='w-full md:w-[50%] mt-5 md:mt-0 h-full z-10 text-white flex items-center justify-center px-5 md:px-0'>
            <div className='md:ms-40'>
                <h4 className='text-lg md:text-3xl font-semibold md:mb-1 capitalize'>- {singleRecipe?.categorie} -</h4>
                <h1 className='text-4xl md:text-6xl font-semibold md:mb-4 capitalize'>{ singleRecipe?.dishName }</h1>
                <p className='my-3 md:my-0'>{ singleRecipe?.smallDesc }</p>
                <p className='italic text-sm mt-1 md:mt-3 md:mb-0 mb-5 capitalize'>By { singleRecipe?.authorName }</p>
            </div>
              </div>
            <div className='w-full md:w-[50%] md:mt-0 mt-5 h-full flex items-center justify-center'>
                <div className='w-[200px] md:w-[400px] z-10 md:h-[400px] h-[200px] rounded-2xl bg-white'>
                    <img src={singleRecipe?.dishImage} alt="" className='w-full h-full object-cover rounded-2xl'/>
                </div>
            </div>
    </div>
  )
}

export default DetailHeaderComp