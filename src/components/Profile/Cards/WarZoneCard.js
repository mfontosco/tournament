import React from 'react'
import war  from '../../../ass/warzone.png'
import { IoGameControllerSharp } from "react-icons/io5";
import { PiCalendarDotsLight } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi"
import { FaTrophy } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import Calendar from '../Calendar/Calendar';
const WarZoneCard = () => {
  return (
    <div className='w-1/3 mt-4'>
       <div className='w-full'>
       <img src={war} alt='logo' />
       </div>
       <h3 className='text-white text-sm font-medium px-2 mb-2'>Call of Duty</h3>
      <div className='flex justify-between'> <div className='flex gap-2 flex-col items-between'>
        <Calendar text='10 Feb 2023'/>
        <Calendar text='4V4'/>
       </div>
       <div className='flex gap-2 flex-col  items-between'>
        <Calendar text='Free-to-play'/>
        <Calendar text='10/48'/>
       </div></div>
       <button className='py-2  flex rounded-full items-center mt-2'><GiTrophyCup size={12} className='ml-4 text-white'/><span>< TbCurrencyNaira/></span><span className=' flex items-center text-[#7E7F7F] text-sm'>10,000</span></button>
       <div className='flex justify-center items-center'>  <button className='w-full bg-[#8bc72f] text-sm text-[#242424] flex justify-center gap-2 py-2 mt-2 items-center px-2'>
        <IoGameControllerSharp  className='text-[#2e2e2e]' />
       <span className='text-[#242424] text-md font-bold'>Join tournament</span>
        </button></div>
        <div className='flex justify-center items-center '>  <button className='w-full bg-[#242424] text-sm text-white flex justify-center gap-2 py-2 items-center px-2'>
        <IoGameControllerSharp  className='text-white' />
       <span className='text-white text-md font-bold'>view details</span>
        </button></div>
    </div>
  )
}

export default WarZoneCard