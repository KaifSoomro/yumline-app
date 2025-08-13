import React from 'react';

const SkeletonCardComp = () => {

  return (
     <div className='w-full grid md:grid-cols-4 grid-cols-1 px-5 md:px-40'>


       <div className='relative w-[300px] h-[300px] animate-pulse hover:scale-103 cursor-pointer transition-all mx-auto flex flex-col bg-gradient-to-t from-neutral-200 to-neutral-200 rounded-2xl mt-10 p-2 overflow-hidden'>
        
        <div className='w-full h-[60%]'>
            <div className='w-full h-full rounded-2xl bg-neutral-100'></div>
        </div>

        <div className='w-full h-[40%] py-3 px-1'>
            <h1 className='font-semibold text-xl mb-3 h-8 rounded-2xl bg-neutral-100'></h1>
            <div className='w-full flex gap-5'>
                <span className='flex gap-1 h-8 w-8 rounded-2xl items-center bg-neutral-100'></span>
                <span className='flex gap-1 h-8 w-8 rounded-2xl items-center bg-neutral-100'></span>
            </div>
        </div>

        </div>

        <div className='relative w-[300px] h-[300px] animate-pulse hover:scale-103 cursor-pointer transition-all mx-auto flex flex-col bg-gradient-to-t from-neutral-200 to-neutral-200 rounded-2xl mt-10 p-2 overflow-hidden'>
        
        <div className='w-full h-[60%]'>
            <div className='w-full h-full rounded-2xl bg-neutral-100'></div>
        </div>

        <div className='w-full h-[40%] py-3 px-1'>
            <h1 className='font-semibold text-xl mb-3 h-8 rounded-2xl bg-neutral-100'></h1>
            <div className='w-full flex gap-5'>
                <span className='flex gap-1 h-8 w-8 rounded-2xl items-center bg-neutral-100'></span>
                <span className='flex gap-1 h-8 w-8 rounded-2xl items-center bg-neutral-100'></span>
            </div>
        </div>

        </div>

        <div className='relative w-[300px] h-[300px] animate-pulse hover:scale-103 cursor-pointer transition-all mx-auto flex flex-col bg-gradient-to-t from-neutral-200 to-neutral-200 rounded-2xl mt-10 p-2 overflow-hidden'>
        
        <div className='w-full h-[60%]'>
            <div className='w-full h-full rounded-2xl bg-neutral-100'></div>
        </div>

        <div className='w-full h-[40%] py-3 px-1'>
            <h1 className='font-semibold text-xl mb-3 h-8 rounded-2xl bg-neutral-100'></h1>
            <div className='w-full flex gap-5'>
                <span className='flex gap-1 h-8 w-8 rounded-2xl items-center bg-neutral-100'></span>
                <span className='flex gap-1 h-8 w-8 rounded-2xl items-center bg-neutral-100'></span>
            </div>
        </div>

        </div>

        <div className='relative w-[300px] h-[300px] animate-pulse hover:scale-103 cursor-pointer transition-all mx-auto flex flex-col bg-gradient-to-t from-neutral-200 to-neutral-200 rounded-2xl mt-10 p-2 overflow-hidden'>
        
        <div className='w-full h-[60%]'>
            <div className='w-full h-full rounded-2xl bg-neutral-100'></div>
        </div>

        <div className='w-full h-[40%] py-3 px-1'>
            <h1 className='font-semibold text-xl mb-3 h-8 rounded-2xl bg-neutral-100'></h1>
            <div className='w-full flex gap-5'>
                <span className='flex gap-1 h-8 w-8 rounded-2xl items-center bg-neutral-100'></span>
                <span className='flex gap-1 h-8 w-8 rounded-2xl items-center bg-neutral-100'></span>
            </div>
        </div>

        </div>

        


     </div>
  )
}

export default SkeletonCardComp