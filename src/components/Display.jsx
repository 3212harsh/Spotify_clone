import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'

const Display = () => {
  return (
    <div className='w-[100%] h-[98%] px-6 py-4 rounded m-2 bg-[#121212] h-full'>
      <Routes>
        <Route path='/' element={<DisplayHome/>} />
      </Routes>
    </div>
  )
}

export default Display
