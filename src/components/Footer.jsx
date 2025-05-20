import React from 'react'

const Footer = () => {
    return (

        <div className='mt-2 bg-gray-900 text-white'>
            <div className='flex px-10 py-10 gap-20 text-xs font-bold md:text-sm'>
                <ul className='space-y-4'>
                    <li>Udemy business</li>
                    <li>Teach on Udemy</li>
                    <li>Get the App</li>
                    <li>About Me</li>
                    <li>Contact Us</li>
                </ul>
                <ul className='space-y-4'>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Help and Support</li>
                    <li>Affiliate</li>
                    <li>Investors</li>
                </ul>
            </div>
            <div className='flex items-center justify-between px-4 '>
                <h2 className='text-xl md:text-2xl font-bold'>Udemy</h2>
                <p className='text-xs md:text-sm'>&copy; Udemy Inc</p>
            </div>
        </div>
    )
}

export default Footer