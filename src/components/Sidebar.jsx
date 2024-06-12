import React from 'react'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <>
    <div className='flex flex-col px-[8%] py-[2%] m-2 rounded bg-[#121212]'>
      <div className='flex mb-3 items-center gap-5'>
        <img width="30px" src={assets.home_icon} />
        <p className='font-bold'>Home</p>
      </div>
      <div className='flex mb-3 items-center gap-5'>
        <img width="30px" src={assets.search_icon} />
        <p className='font-bold'>Search</p>
      </div>
    </div>
    <div className='flex flex-col px-[2%] py-[4%] m-2 rounded gap-3 h-full bg-[#121212]'>
        <div className='flex items-center px-2 justify-between'>
            <div className='flex gap-3 items-center'>
                <img width="35px" src={assets.stack_icon} />
                <p className=' font-semibold'>Your Library</p>
            </div>
            <div className='flex gap-3 items-center'>
                <img width="22px" src={assets.arrow_icon} />
                <img width="22px" src={assets.plus_icon} />
            </div>
        </div>

        <div className='flex flex-col bg-[#242424] rounded px-[7%] py-[5%] gap-4 justify-between'>
            <div>
                <h1 className=' font-bold'>Create your first playlist</h1>
                <p>it's easy we will help you</p>
            </div>
            <div>
                <button className=' bg-white text-black rounded-full font-semibold px-6 py-2'>Create Playlist</button>
            </div>
        </div>

        <div className='flex flex-col bg-[#242424] rounded px-[7%] py-[5%] gap-4 justify-between'>
            <div>
                <h1 className=' font-bold'>Let's findsome podcasts to follow</h1>
                <p>we'll keep you update on new episodes</p>
            </div>
            <div>
                <button className=' bg-white text-black rounded-full font-semibold px-6 py-2'>Browse podcasts</button>
            </div>
        </div>

    </div>
    </>
  )
}
 
export default Sidebar
