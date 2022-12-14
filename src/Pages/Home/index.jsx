import React from 'react';
import './home.scss'
import Logo from "../../../src/assets/icon.svg";
import { HiOutlineChevronUpDown, HiShoppingCart } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import { Category } from '../../utils/common'

function Home() {
  return (
    <div className='nav-container'>
      <div className='main-container'>
        <img src={Logo} alt="logo" className="logo" />
        <p className='Da-Otto'> Da Otto</p>
        <HiOutlineChevronUpDown size={25} className="down-up-arrow" />
        <div className='search'>
          <AiOutlineSearch className='search-icon' />
          <input type="text" className='search-input' maxLength="50" size="15" placeholder="Search for Restaurants  (Press Enter to search)" />
        </div>
        <div className='filter-container'>
          <BiFilter size={30} />
        </div>
        <div className='shopping-container'>
          <HiShoppingCart size={25} />
        </div>
      </div>
      <h4 className='mt-5'>Category</h4>
      <div className='d-flex mt-4'>
        {Category.map((item, index) => {
          return (
            <div className='d-flex align-items-center justify-content-center mx-4'>
              <img src={item.img} alt="logo" className='ms-2' />
              <p className='m-0'>{item.name}</p>
            </div>
          )
        })}
      </div>
      <h4 className='mt-5'>Restaurants</h4>
      <div className="restaurants-container mt-4">
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="logo" className='ms-2' />
        <div className='d-flex justify-content-between mt-2'>
          <p className='burger-mania'>Burger Mania</p>
          <div className='open-now'><p>open now</p></div>
        </div>
        <div>
          <p className='details-restaurant'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies quis lorem non mollis. Fusce nec est at sem interdum congue. Aliquam venenatis turpis ac ...</p>
        </div>
      </div>
    </div>
  )
}

export default Home
