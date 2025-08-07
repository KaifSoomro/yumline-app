import React from 'react'

const DetailHeaderComp = ({ singleRecipe }) => {
  return (
    <div className='w-full h-[580px] relative bg-neutral-200 flex mt-20'>
          <img src={singleRecipe?.dishImage} alt="Image-not-found" className='absolute top-0 left-0 object-cover w-full h-full'/>
          <div className='absolute w-full h-full bg-gradient-to-t from-neutral-900/85 to-transparent'></div>
    
         <div className='w-[50%] h-full absolute bottom-0 left-0 text-white flex items-center justify-center'>
            <div className='ms-40'>
                <h4 className='text-3xl font-semibold mb-1 capitalize'>- {singleRecipe?.categorie} -</h4>
                <h1 className='text-6xl font-semibold mb-4 capitalize'>{ singleRecipe?.dishName }</h1>
                <p>{ singleRecipe?.smallDesc }</p>
                <p className='italic mt-3 capitalize'>By { singleRecipe?.authorName }</p>
            </div>
              </div>
            <div className='w-[50%] h-full absolute bottom-0 right-0 flex items-center justify-center'>
                <div className='w-[400px] h-[400px] rounded-2xl bg-white'>
                    <img src={singleRecipe?.dishImage} alt="" className='w-full h-full object-cover rounded-2xl'/>
                </div>
            </div>
    </div>
  )
}

export default DetailHeaderComp