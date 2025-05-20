import React from 'react'
import saleimg from "../assets/images/sale-img.jpg"

const Sale = () => {
  return (
    <div className='relative'>
        <img src={saleimg} alt="" />
        <div className='border border-black w-60 absolute top-1 ml-6 p-1 z-1 scale-50 hover:scale-100  duration-1000 md:ml-32  md:p-2 '>
            <h1 className='font-bold text-2xl md:text-3xl'>Udemy Flash Sale! 24 Hours to Save</h1>
        <p className='font-semibold pt-1'>Get the top courses for just 499.Just one day to save but a lifetime to learn.</p>
        </div>
    </div>
  )
}

export default Sale