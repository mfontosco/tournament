import React from 'react'
import valorant from '../../../ass/Valorant.png'
import { FaUser } from "react-icons/fa6"
import { FaPlay } from "react-icons/fa6";
const Cards = ({title,body,desc}) => {
  return (
    <div className='bg-[#242424] flex w-1/2  items-center justify-between py-4 h-56'>
        <div className='flex flex-col items-start justify-center px-4  h-full'>
        <h2 className='text-white text-2xl font-[700] pb-2'>{title}</h2>
        <p className='text-[#f5f5f5]'>{body}</p>
        <button className=' text-sm flex gap-2 py-1 mt-2 items-center px-2'>
        <FaPlay  className='text-white' />
       <span className='text-white'>{desc}</span>
        </button>
                </div>
                <div className=' w-48 h-48'>
                    <img src={valorant} alt='logo'/>
                  </div>
    </div>
  )
}

export default Cards