import React from 'react';
import AboutChef from "../../assets/about.webp";
import WheelImage from "../../assets/wheel.webp";
import "../../index.css"

const AboutMainComp = () => {
  return (
    <div className='w-full h-full md:h-screen flex md:flex-row flex-col bg-neutral-200 pb-20 px-5 md:px-40'>

        <div className='md:w-[50%] relative h-full flex items-center justify-center'>
            <img className='md:w-[60%] md:mt-20 mt-40 md:ms-20 rounded-md' src={AboutChef} alt="about-image" />
            <h1 className='uppercase absolute top-24 right-0 md:top-50 md:-right-90 me-5 text-neutral-900 z-10 text-4xl md:text-9xl font-semibold'>About Us</h1>
            <img src={WheelImage} className='w-18 md:w-30 spin absolute top-20 ms-5 md:top-50 left-0 md:left-30' alt="wheel-image" />
        </div>

        <div className='md:w-[50%] h-full mt-15 md:mt-5 flex flex-col items-start justify-start md:justify-center'>
            <p className='tracking-wide text-lg md:mt-50'>At Yumline, we believe that great food brings people together. That’s why we’ve created a space where food lovers from all walks of life can share, discover, and celebrate recipes like never before. Whether you're a seasoned chef or just starting your cooking journey, Yumline is your go-to recipe-sharing social platform. Snap, share, and explore dishes from around the world, connect with fellow foodies, and build your own flavorful feed. On Yumline, it's not just about cooking—it's about community, creativity, and the love of good food.</p>
            <p className='tracking-wide text-lg mt-5'>What makes Yumline different? It’s not just a recipe app—it’s a living, breathing feed of culinary expression. From posting step-by-step guides and short cooking clips to saving your favorite recipes and interacting with others through likes, comments, and follows, Yumline blends the best parts of social media with a passion for food. We're here to turn your everyday meals into something worth sharing. Let’s cook, connect, and inspire—together.</p>
        </div>

    </div>
  )
}

export default AboutMainComp