import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image,name,desc,id}) => {

  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] flex flex-col gap-2 p-2 px-3 rounded-lg cursor-pointer hover:bg-[#ffffff26] text-white'>
      <img width="180px" className=' rounded' src={image} />
      <h1 className=' font-bold text-lg'>{name}</h1>
      <p className=' text-zinc-300 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem
