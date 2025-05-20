import React from 'react'

const CoursesNavbar = () => {
  return (
    <ul className='flex justify-around mt-2 cursor-pointer text-xs border-b border-black pb-2  md:text-base'>
        <li className='bg-purple-700 rounded-2xl text-white p-1 hover:bg-purple-400 md:px-2'>Development</li>
        <li className='bg-purple-700 rounded-2xl text-white p-1  hover:bg-purple-400 md:px-2'>Business</li>
        <li className='bg-purple-700 rounded-2xl text-white  p-1  hover:bg-purple-400 md:px-2'>IT & Software</li>
        <li className='bg-purple-700 rounded-2xl text-white  p-1  hover:bg-purple-400 md:px-2'>Personal Development</li>
        <li className='bg-purple-700 rounded-2xl text-white  p-1  hover:bg-purple-400 md:px-2'>Design</li>
        <li className='bg-purple-700 rounded-2xl text-white  p-1  hover:bg-purple-400 md:px-2'>Marketing</li>
    </ul>
  )
}

export default CoursesNavbar