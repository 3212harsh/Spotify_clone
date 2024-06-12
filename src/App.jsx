import React from 'react'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='w-[25%] h-[85%] flex flex-col text-white'>
        <Sidebar />
      </div>
      
    </div>
  )
}

export default App
