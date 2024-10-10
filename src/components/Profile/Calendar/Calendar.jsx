import React from 'react'
import { PiCalendarDotsLight } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi"
const Calendar = ({text}) => {
  return (
    <div className='flex items-center gap-2 px-2'>
        <PiCalendarDotsLight className='text-[#FFFFFF]'/>
        <p  className='text-[#FFFFFF] text-xs'>{text}</p>
    </div>
  )
}

export default Calendar