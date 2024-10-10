import React from 'react'
import valorant from '../../../ass/Valorant.png'
import { FaUser } from "react-icons/fa6"
const Setup = () => {
  return (
    <div className='bg-[#242424] flex  items-center justify-between py-4 h-56'>
        <div className='flex flex-col items-start justify-center px-4  h-full'>
        <h2 className='text-white text-2xl font-[700] pb-2'>Setup your profile</h2>
        <p className='text-[#f5f5f5]'>Complete your information to get access to tournaments and other premium features</p>
        <button className='bg-[#8bc72f] text-sm flex gap-2 py-1 mt-2 items-center px-2'>
        <FaUser  className='text-[#121212]' />
       <span className='text-[#121212] font-bold'> complete profile</span>
        </button>
                </div>
                <div className=' w-48 h-48'>
                    <img src={valorant} alt='logo'/>
                  </div>
    </div>
  )
}

export default Setup