import React from 'react'
import { RiArrowDownWideLine } from "react-icons/ri";
import { BiSortAlt2 } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
const Tournaments = () => {
  return (
    <div className='flex justify-between py-2'>
<h2 className='text-white font-medium text-xl'>Tournaments</h2>
<div className='flex items-center text-white gap-2 justify-between'><button className='flex px-2 py-1 items-center gap-4   bg-[#242424]' ><BiSortAlt2 />Sort by <RiArrowDownWideLine /></button>
<button className=' bg-[#242424] px-2 py-1 flex items-center gap-4' ><CiFilter />Filter by <RiArrowDownWideLine /></button></div>
    </div>
  )
}

export default Tournaments