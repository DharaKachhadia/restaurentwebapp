import React from 'react';
import './home.scss'
import Logo from "../../../src/assets/icon.svg";
import { HiOutlineChevronUpDown, HiShoppingCart } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";

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
    </div>
  )
}

export default Home
