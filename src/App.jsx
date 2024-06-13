import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[88%] flex flex-row'>

        <div className='w-[25%] hidden lg:flex flex-col text-white'>
          <Sidebar />
        </div>
        <Display/>
      </div>
      <div className='h-[12%] py-[2%] flex justify-between items-center px-[1%]'>
          <Player />
      </div>
      
    </div>
  )
}

export default App
