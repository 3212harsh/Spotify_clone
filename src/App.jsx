import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='w-[25%] h-[90%] flex flex-col text-white'>
        <Sidebar />
      </div>
      <div className='h-[10%] flex justify-between items-center px-[1%]'>
          <Player />
      </div>
      
    </div>
  )
}

export default App
