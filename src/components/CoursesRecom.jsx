import React from 'react'
import img1 from "../assets/images/c1.jpg";
import img2 from "../assets/images/c2.jpg";
import img3 from "../assets/images/c3.jpg";
import img4 from "../assets/images/c4.jpg";

const CoursesRecom = () => {
  return (
    <div className='mt-2 mx-2'>
       <h1 className='text-xl font-bold'>Recommended for you</h1>
       <p className='text-xs font-semibold pb-2 md:text-base'>Pick the best fit</p>
       <div className='flex justify-around flex-wrap '>
        <div className="basis-1/2 flex-grow p-2 md:basis-0 ">
            <img className='w-60 h-36 ' src={img1} alt="" />
            <h3 className=' font-bold mt-1 text-xs md:text-base'>Python data visualisation</h3>
            <p className='text-xs'>Col steele</p>
            <p className='text-xs'>4.9 ⭐⭐⭐⭐</p>
            <p className='text-xs'>449 <del>999</del></p>
        </div>
        <div className='basis-1/2 flex-grow p-2 md:basis-0 '>
            <img className='w-60 h-36 ' src={img2} alt="" />
            <h3 className=' font-bold mt-1 text-xs md:text-base'>Data Science</h3>
            <p className='text-xs'>Steeve</p>
            <p className='text-xs'>4.1 ⭐⭐⭐⭐</p>
            <p className='text-xs'>449 <del>1099</del></p>
        </div>
        <div className=' basis-1/2 flex-grow p-2 md:basis-0 '>
            <img className='w-60 h-36' src={img3} alt="" />
            <h3 className=' font-bold mt-1 text-xs md:text-base'>Machine Learning A-Z</h3>
            <p className='text-xs'>Mark antony</p>
            <p className='text-xs'>3.9 ⭐⭐⭐</p>
            <p className='text-xs'>449 <del>1000</del></p>
        </div>
        <div className=' basis-1/2 flex-grow p-2 md:basis-0 '>
            <img className='w-60 h-36 ' src={img4} alt="" />
            <h3 className=' font-bold mt-1 text-xs md:text-base'>AI Generative A-Z</h3>
            <p className='text-xs'>Vennin</p>
            <p className='text-xs'>4.4 ⭐⭐⭐⭐</p>
            <p className='text-xs'>449 <del>1099</del></p>
        </div>
       </div>
    </div>
  )
}

export default CoursesRecom