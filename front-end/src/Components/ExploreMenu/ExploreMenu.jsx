import React from 'react'
import './ExploreMenu.css'
import { frontend_assets, menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus eaque, unde mollitia cumque alias rem nisi, nulla iste quis corporis eum? Nihil dolorum deleniti a eos quas, quia error.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,i)=>{
            return (
                <div key={i} className="explore-menu-item">
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
