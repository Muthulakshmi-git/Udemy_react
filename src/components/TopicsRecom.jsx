import React from 'react'

const TopicsRecom = () => {
  return (
    <div className='mt-2 mx-2'>
        <h1 className='font-bold text-xl '>Topics Recommended for you</h1>
        <ul className='flex flex-wrap gap-1 mt-2'>
            <li className='border-2 border-gray-500 p-1 pl-4 flex-grow basis-1/4'>Website</li>
            <li className='border-2  border-gray-500 p-1 pl-4 flex-grow basis-1/4'>JavaScript</li>
            <li className='border-2  border-gray-500 p-1 pl-4 flex-grow basis-1/4'>CSS</li>
            <li className='border-2 border-gray-500 p-1 pl-4 flex-grow basis-1/4'>React JS</li>
            <li className='border-2 border-gray-500 p-1 pl-4 flex-grow basis-1/4'>Docker</li>
            <li className='border-2 border-gray-500 p-1 pl-4 flex-grow basis-1/4'>Mongo DB</li>
            <li className='border-2 border-gray-500 p-1 pl-4 flex-grow basis-1/4'>Azure</li>
            <li className='border-2 border-gray-500 p-1 pl-4 flex-grow basis-1/4'>AWS</li>
            <li className='border-2 border-gray-500 p-1 pl-4 flex-grow basis-1/4'>Github</li>
        </ul>
    </div>
  )
}

export default TopicsRecom