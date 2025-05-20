import React from 'react'
import img1 from "../assets/images/c1.jpg";
import img2 from "../assets/images/c2.jpg";
import img3 from "../assets/images/c3.jpg";
import img4 from "../assets/images/c4.jpg";
import img5 from "../assets/images/c5.jpg";
import img6 from "../assets/images/c11.jpg";
import img7 from "../assets/images/c10.jpg";
import img8 from "../assets/images/c6.jpg";


const Popular = () => {
  return (
    <div className='mt-2 mx-2'>
        <h1 className='text-xl font-bold'>Most Popular</h1>
    <p className='text-xs font-semibold pb-2 md:text-base'>Pick the best fit</p>
    <div className='flex flex-wrap gap-5'>
        <div className='basis-1/3 flex-grow md:basis-1/5'>
            <img  className="w-60 h-36" src={img1} alt="" />
            <h3 className=' font-bold mt-1 text-xs md:text-base'>Fullstack Development</h3>
            <p  className='text-xs'>Col Steele</p>
            <p  className='text-xs'>4.9 ⭐⭐⭐⭐</p>
            <p  className='text-xs'>449 <del>999</del></p>
        </div>
        <div className='basis-1/3 flex-grow md:basis-1/5'>
            <img  className="w-60 h-36" src={img2} alt="" />
          <h3 className=' font-bold mt-1 text-xs md:text-base'>AI Generative</h3>
            <p  className='text-xs'>Steeve</p>
            <p  className='text-xs'>4.9 ⭐⭐⭐⭐</p>
            <p  className='text-xs'>449 <del>999</del></p>
        </div>
        <div className='basis-1/3 flex-grow md:basis-1/5'>
            <img  className="w-60 h-36" src={img3} alt="" />
            <h3 className=' font-bold mt-1 text-xs md:text-base'>Machine learning</h3>
            <p  className='text-xs'>Mark Antony</p>
            <p  className='text-xs'>4.9 ⭐⭐⭐⭐</p>
            <p  className='text-xs'>449 <del>999</del></p>
        </div>
        <div className='basis-1/3 flex-grow md:basis-1/5'>
            <img  className="w-60 h-36" src={img4} alt="" />
             <h3 className=' font-bold mt-1 text-xs md:text-base'>AI Generative A-Z</h3>
            <p  className='text-xs'>Vennin</p>
            <p  className='text-xs'>4.9 ⭐⭐⭐⭐</p>
            <p  className='text-xs'>449 <del>999</del></p>
        </div>
        <div className='basis-1/3 flex-grow md:basis-1/5'>
            <img  className="w-60 h-36" src={img5} alt="" />
             <h3 className=' font-bold mt-1 text-xs md:text-base'>complete AI Guide</h3>
            <p  className='text-xs'>Madith</p>
            <p  className='text-xs'>4.9 ⭐⭐⭐⭐</p>
            <p  className='text-xs'>449 <del>999</del></p>
        </div>
        <div className='basis-1/3 flex-grow md:basis-1/5'>
            <img  className="w-60 h-36" src={img6} alt="" />
            <h3 className=' font-bold mt-1 text-xs md:text-base'>Python development</h3>
            <p  className='text-xs'>Vels</p>
            <p  className='text-xs'>4.9 ⭐⭐⭐⭐</p>
            <p  className='text-xs'>449 <del>999</del></p>
        </div>
        <div className='basis-1/3 flex-grow md:basis-1/5'>
            <img  className="w-60 h-36" src={img7} alt="" />
             <h3 className=' font-bold mt-1 text-xs md:text-base'>Machine Learning</h3>
            <p  className='text-xs'>Nathsi</p>
            <p  className='text-xs'>4.9 ⭐⭐⭐⭐</p>
            <p  className='text-xs'>449 <del>999</del></p>
        </div>
        <div className='basis-1/3 flex-grow md:basis-1/5'>
            <img  className="w-60 h-36" src={img8} alt="" />
             <h3 className=' font-bold mt-1 text-xs md:text-base'>Javascript Course</h3>
            <p  className='text-xs'>Kethai</p>
            <p  className='text-xs'>4.9 ⭐⭐⭐⭐</p>
            <p  className='text-xs'>449 <del>999</del></p>
        </div>
    </div>
    </div>
  )
}

export default Popular