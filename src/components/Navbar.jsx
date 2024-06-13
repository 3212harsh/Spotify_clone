import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-5'>
            <img className='w-9 text-white bg-black cursor-pointer rounded-full p-2' src={assets.arrow_left} />
            <img className='w-9 text-white bg-black cursor-pointer rounded-full p-2' src={assets.arrow_right} />
        </div>
        <div className='flex items-center gap-5'>
            <p className='bg-white text-black font-semibold rounded-full px-4 py-1 cursor-pointer'>Explore Premium</p>
            <p className='text-white bg-black font-semibold rounded-full px-4 py-1 cursor-pointer'>Install App</p>
            <p className=' bg-orange-600 text-white px-4 py-2 rounded-full'>H</p>
        </div>
    </div>
    <div className='flex items-center mt-4 gap-3'>
        <p className='bg-white text-black font-semibold rounded-full px-4 py-1 cursor-pointer'>All</p>
        <p className='text-white bg-black font-semibold rounded-full px-4 py-1 cursor-pointer'>Music</p>
        <p className='text-white bg-black font-semibold rounded-full px-4 py-1 cursor-pointer'>Podcasts</p>
    </div>
    </>
  )
}

export default Navbar
