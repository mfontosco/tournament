import React from 'react'
import Setup from '../../components/Profile/Setup/Setup'
import Cards from '../../components/Profile/Cards/Cards'
import Tournaments from '../../components/Profile/Tournaments/Tournaments'
import WarZoneCard from '../../components/Profile/Cards/WarZoneCard'

const ProfileSScreen = () => {
  return (
    <div>
   <Setup/>
   <div className='flex gap-4 mt-4'>
    <Cards title={"Continue Playing"} body={"start or esume tournaments you have registered for"} desc="Continue playing"/>
   <Cards title={"Quick Match"} body={"create a tournament and invite others to play"} desc="Let's go"/></div>
   <Tournaments/>
   <div className='flex gap-4'>
    <WarZoneCard/>
    <WarZoneCard/>
    <WarZoneCard/>
   </div>
   <div className='flex gap-4 mt-4'>
    <WarZoneCard/>
    <WarZoneCard/>
    <WarZoneCard/>
   </div>
     </div>
  )
}

export default ProfileSScreen