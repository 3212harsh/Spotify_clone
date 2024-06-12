import React from 'react'
import {songsData} from '../assets/assets'
import {assets} from '../assets/assets'

const Player = () => {
  return (
    <>
      <div className='flex flex-row items-center gap-3'>
        <img width="50px" src={songsData[0].image} />
        <div className='flex flex-col text-white'>
            <h1 className=' font-semibold'>{songsData[0].name}</h1>
            <p className=' text-sm'>{songsData[0].desc.slice(0,20)}</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-1 '>
        <div className='flex flex-row gap-5 items-center'>
            <img width='20px' src={assets.shuffle_icon} />
            <img width='20px' src={assets.prev_icon} />
            <img width='20px' src={assets.play_icon} />
            <img width='20px' src={assets.next_icon} />
            <img width='20px' src={assets.loop_icon} />
        </div>
        <div className='flex flex-row gap-5 items-center text-white'>
            <p>1:05</p>
            <div className=' h-1 bg-white p-0 overflow-hidden rounded-full w-[60vh]'>
                <hr className='h-full w-[45%] bg-green-400' />
            </div>
            <p>3:20</p>
        </div>
      </div>

      <div className='flex flex-row gap-3 items-center text-white'>
        <img width="20px" src={assets.plays_icon} />
        <img width="20px" src={assets.mic_icon} />
        <img width="20px" src={assets.queue_icon} />
        <img width="20px" src={assets.speaker_icon} />
        <img width="20px" src={assets.volume_icon} />
        <div className='h-1 w-[10vh] bg-white rounded-full'>

        </div>
        <img width="20px" src={assets.mini_player_icon} />
        <img width="20px" src={assets.zoom_icon} />
        
      </div>
    </>
  )
}

export default Player
