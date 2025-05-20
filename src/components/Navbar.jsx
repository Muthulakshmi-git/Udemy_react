import React from 'react'
import {FaShoppingCart,FaBell, FaUser,FaSearch,FaBars} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='flex items-center gap-4 justify-between mt-3 px-2 border-b border-black md:px-2 '>
      <h1 className='text-2xl text-purple-700 font-bold mb-2 md:text-3xl'>Udemy</h1>
      <div className='border w-96  flex items-center gap-1 border-black rounded-2xl pl-2 mb-2  '>
        <FaSearch  />
        <input className='w-56 outline-none p-1 md:w-80' type="text"  placeholder='Search for Anything here. Tech, Business, Art...'/>
      </div>
      <FaBars className='cursor-pointer mb-2 md:hidden'/>
      <ul className='font-semibold flex items-center gap-3 mb-2 hidden md:flex'>
        <li>Courses</li>
        <li>My Learning</li>
        <li><FaShoppingCart/></li>
        <li><FaBell/></li>
        <li><FaUser/></li>
      </ul>
    </nav>
  )
}

export default Navbar