import React from 'react'
import logo from  '../../ass/Logo.png'
import Search from './Search'
import { TbSchoolBell } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";
import { FaUser } from "react-icons/fa6"
import { RiArrowDownWideLine } from "react-icons/ri";
const NavBar = () => {
  return (
  <div className='border-b border-gray-400'>  <div className='w-screen bg-[#121212] py-4  flex '>
  <div className='w-64  flex justify-center items-center'>
      <div className='  '>
<img src={logo}/>
  </div>
  </div>
  <div className='w-1/2  pl-10 text-center bg-[var(--Surface-Subdued, #1C1C1C)] '>
      <Search/>
  </div>
  <div className='w-1/4  flex items-center gap-4'>
     <div className=' flex items-center gap-4 '> <div className=''>
      <TbSchoolBell className='text-white' />
      </div>
      <div className=' flex items-center gap-2'>
      <FaCoins className='text-[#FFB800]' />
      <p className='text-[#E5E4E4]' >20,000</p>
        </div></div>

        <div className=' flex gap-2   items-center'>
        <div className=' rounded-full flex justify-center items-center  w-10 h-10 bg-[#1C1C1C]'>
        <FaUser  className='text-white' />
      </div>
      <div className='flex flex-col justify-center items-start '>
  <p className='text-[#E5E4E4] text-sm'>Akinola Olalekan</p>
  <button className='text-[#E5E4E4] bg-[#40610F] gap-1 px-2 py-1 text-sm flex items-center'>
    Online <RiArrowDownWideLine />
  </button>
</div>

        </div>

      </div>
</div></div>
  )
}

export default NavBar