import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

  const bgdisplay = useRef();
  const location = useLocation();
  const isalbum = location.pathname.includes("album");
  const id = isalbum?location.pathname.slice(-1) : "";
  const bgcolor = albumsData[Number(id)].bgColor;

  useEffect(()=>{
    if(isalbum){
      bgdisplay.current.style.background = `linear-gradient(${bgcolor},#121212)`;
      console.log(bgcolor);
    }
    else{
      bgdisplay.current.style.background = `#121212`;
    }
  })



  return (
    <div ref={bgdisplay} className='w-[100%] h-[98%] px-6 pt-4 overflow-auto rounded m-2 bg-[#121212] '>
      <Routes>
        <Route path='/' element={<DisplayHome/>} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
