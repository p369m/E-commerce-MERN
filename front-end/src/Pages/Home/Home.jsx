import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import NavBar from '../../Components/NavBar/NavBar'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'

const Home = () => {

  const [catagory , setCatagory]=useState("all");
  return (
    <div>
       
      <Header/>
      <ExploreMenu catagory={catagory} setCatagory={setCatagory}/>
      <FoodDisplay catagory={catagory} />
    </div>
  )
}

export default Home
