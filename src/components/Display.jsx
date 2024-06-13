import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {
  return (
    <div className='w-[100%] h-[98%] px-6 py-4 overflow-auto rounded m-2 bg-[#121212] h-full'>
      <Routes>
        <Route path='/' element={<DisplayHome/>} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
