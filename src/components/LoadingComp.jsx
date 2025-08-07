import React from 'react';
import LoadingImage from "../assets/loading.gif";

const LoadingComp = () => {
  return (
    <div className='w-full h-screen bg-white flex items-center justify-center flex-col'>
        <img src={LoadingImage} alt="" />
        <h1 className='text-2xl'>Loading...</h1>
    </div>
  )
}

export default LoadingComp