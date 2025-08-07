import React from 'react'
import HeaderComp from '../components/home/HeaderComp'
import CategoriesComp from '../components/home/CategoriesComp'
import LunchComp from '../components/home/LunchComp'
import ChefComp from '../components/home/ChefComp'

const HomePage = () => {
  return (
    <>
      <HeaderComp />
      <CategoriesComp />
      <LunchComp />
      <ChefComp />
    </>
  )
}

export default HomePage