
import SideBar from '../SideBar/SideBar';
import NavBar from '../NavBar/NavBar';
import { GoHome } from "react-icons/go";
import { IoGameControllerSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaCoins } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { LiaCameraRetroSolid } from "react-icons/lia"
import { MdLiveTv } from "react-icons/md";
import { FaTrophy } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const Layout = ({ children }) => {

  const sideBarItems = [
    {
      label: "Tournaments",
      icon: <IoGameControllerSharp size={12}/>,
      url:"/"
    },
    {
      label: "Leaderboards",
      icon:<FaTrophy size={12}/>,
      url: "/game"
    },   {
        label: "Token shop",
        icon: <FaCoins size={12}/>,
        url: "/fixtures"
      },
      {
        label: "Live Betting",
        icon: <FaVideo size={12}/>,
        url:"/#"
      },
      {
        label: "Content Locker",
        icon: <FaLock size={12}/>,
        url:"/#"
      },
      {
        label: "Community",
        icon:<FaUsers size={12}/>,
        url: "/#"
      },
  ];
 

  return (
    <div className=' flex flex-col  min-h-screen overflow-x-hidden  '>
          <NavBar/>
     <div className='flex  bg-[#121212]'>
         <div className=' w-64  '>
      <SideBar items={sideBarItems} />
      </div>
      <main className=' w-3/5 flex-1 px-10  pt-4   '>
        
       
        {children}
        
      </main></div>
    </div>
  );
};

export default Layout;