import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex flex-row'>

        <div className='w-[25%] flex flex-col text-white'>
          <Sidebar />
        </div>
        <Display/>
      </div>
      <div className='h-[10%] flex justify-between items-center px-[1%]'>
          <Player />
      </div>
      
    </div>
  )
}

export default App
