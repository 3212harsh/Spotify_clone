import React from 'react'
import Navbar from './Navbar'
import {albumsData,songsData} from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongsItem from './SongsItem'

const DisplayHome = () => {
  return (
    <>
        <Navbar />
        <h1 className='text-white my-5 text-2xl font-bold'>Featured Chart's</h1>
        <div className='my-4 flex overflow-auto gap-5 '>
            {albumsData.map((items,index)=>(<AlbumItem key={index} image={items.image} name={items.name} desc={items.desc} id={items.id} />))}
        </div>
        <h1 className='text-white my-5 text-2xl font-bold'>Today's biggest hits</h1>
        <div className='my-4 flex overflow-x-auto gap-5 '>
            {songsData.map((items,index)=>(<SongsItem key={index} image={items.image} name={items.name} desc={items.desc} id={items.id} />))}
        </div>
    </>
  )
}

export default DisplayHome
