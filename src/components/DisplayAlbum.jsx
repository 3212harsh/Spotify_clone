import React from 'react'
import { useParams } from 'react-router-dom'
import {albumsData, assets, songsData} from '../assets/assets'
import Navbar from './Navbar';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumdata = albumsData[id];

  return (
    <>
        <Navbar />
        <div className='flex flex-col mt-4 md:flex-row gap-5 px-2 text-white'>
            <img src={albumdata.image} className='w-48 rounded' />
            <div className='flex flex-col '>
                <p>Playlist</p>
                <h1 className=' font-bold text-[50px]'>{albumdata.name}</h1>
                <h1>{albumdata.desc}</h1>
                <div className='flex items-center gap-5 mt-4'>
                    <div className='flex items-center gap-1'>
                        <img className='w-6' src={assets.spotify_logo}/>
                        <p className=' font-bold'>Spotify</p>
                    </div>
                    <p>1,93,674 likes</p>
                    <p className=' font-semibold'>50 songs,</p>
                    <p>about 2 hr 15 min </p>
                </div>
            </div>

        </div>
        <div className='grid grid-cols-3 md:grid-cols-4 mb-2 mt-5 px-2 text-[#a7a7a7]'>
            <p><b className='mr-4'>#</b>Title</p>
            <p>album</p>
            <p className='hidden md:block'>Date Added</p>
            <img className='w-4 m-auto' src={assets.clock_icon} />
        </div>
        <hr />
        <div>
            {songsData.map((item,index)=>(
                <div className='grid grid-cols-3 md:grid-cols-4 items-center  text-[#a7a7a7] py-2 px-2 my-1 hover:bg-[#ffffff27] cursor-pointer'>
                    <p className=' flex items-center'>
                        <b className='mr-4'>{index+1}</b>
                        <div className=' flex items-center gap-5'>
                            <img className='w-12' src={item.image} />
                            <p className=' font-semibold text-white'>{item.name}</p>
                        </div>  
                    </p>
                    <p>{albumdata.name}</p>
                    <p className='hidden md:block'>5 days ago</p>
                    <p className='m-auto'>{item.duration}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default DisplayAlbum
