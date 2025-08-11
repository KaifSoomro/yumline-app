import React from 'react';
import { Link } from "react-router-dom";
import { PiHamburgerFill } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import Logo from "../assets/logo-black-full.png";

const Footer = () => {
  return (
    <div className='w-full h-[350px] mt-20 md:mt-40 bg-neutral-900 text-white flex items-center justify-center md:px-0 px-5'>
       <div className='w-[500px] text-center flex items-center justify-center flex-col'>
          
          <Link to={"/"}><img src={Logo} alt="logo-picture" className='w-58 md:w-70'/></Link>
          <p className='text-sm md:text-lg mt-8'>Explore thousands of easy-to-follow recipes from around the world. Save favorites, create shopping lists, and get daily cooking inspiration—all in one app.</p>
          
          <div className='flex items-center justify-center gap-5 mt-5 text-4xl'>
              <Link to={"https://www.facebook.com/people/Kaif-Soomro/pfbid0xnxPZZ1kJz284t1YQTKifBVAqVP31JH75BQnuEDuvdFGjyaqK3D2Ekn9jnhzxgcfl/"}>
                <CiFacebook />
              </Link>
              <Link to={"https://www.instagram.com/kaif__soomro/"}>
                <CiInstagram />
              </Link>
          </div>
       </div>
    </div>
  )
}

export default Footer