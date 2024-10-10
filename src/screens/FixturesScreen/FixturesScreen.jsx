import React from 'react'
import { IoChevronBackSharp } from "react-icons/io5";
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';

import { GiTrophyCup } from "react-icons/gi"
import { FaTrophy } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import Calendar from '../../components/Profile/Calendar/Calendar';
import { IoGameControllerSharp } from "react-icons/io5";
import Table from '../../components/Table/Table';
import Bracket from '../../components/Bracket/Bracket';
const  FixturesScreen = () => {
  return (
    <div className=' pb-4'>
        <div>
        <div className='flex items-center gap-2 mb-4'>
            <IoChevronBackSharp size={12} className='text-white text-2xl cursor-pointer'/>
            <h1 className='text-white text-sm font-bold'>Back</h1>
            </div>
           <Banner/>
           <Header title="Call of duty"/>
           <button className='py-2 px-4 bg-[#242424]  flex rounded-full items-center mt-4'><GiTrophyCup size={16} className='ml-2 mr-2 text-[#D1701C]'/><div className='flex items-center'><span className=' flex items-center text-[#7E7F7F] text-sm'>< TbCurrencyNaira/></span><span className=' flex items-center text-[#7E7F7F] text-sm'>10,000</span></div></button>
           <p className='py-2 text-[#7E7F7F] mt-4'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
           </p>
           <div className='flex gap-6 mt-4'>
        <Calendar text='10 Feb 2023'/>
        <Calendar text='Free-to-play'/>
        <Calendar text='4V4'/>
        <Calendar text='10/48'/>
      
       </div>
       <div className='flex mt-4 mb-4'>  <button className=' bg-[#8bc72f] text-sm text-[#242424] flex justify-center gap-2 py-2  items-center px-4'>
        <IoGameControllerSharp  className='text-[#2e2e2e] 'size={24} />
       <span className='text-[#121212] text-lg font-bold'>Join tournament</span>
        </button></div>
        <h2 className='text-2xl font-bold text-[#FFFFFF] leading-6 '>Tournament Information</h2>
         
       <div className='mb-4'>  <button className='w-[238px] py-2 mt-4  bg-[#3B3B3B]  text-[#FFFFFF] text-sm '>Leaderboard</button>
       <button className='w-[99px] mt-4 h-[32px] bg-[#141414] text-[#7E7F7F] text-sm ml-4'>Fixtures</button></div>
        </div>
       
        <Bracket/>
    </div>
  )
}

export default FixturesScreen