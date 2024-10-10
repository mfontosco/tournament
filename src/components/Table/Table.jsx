import React from 'react';
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="bg-[#242424]">
            <th className="whitespace-nowrap px-4 py-4 font-medium text-[#7E7F7F]">Placement</th>
            <th className="whitespace-nowrap px-4 py-4 font-medium text-[#7E7F7F]">Players</th>
            <th className="whitespace-nowrap px-4 py-4 font-medium text-[#7E7F7F]">Games Played</th>
            <th className="whitespace-nowrap px-4 py-4 font-medium text-[#7E7F7F]">Wins</th>
            <th className="whitespace-nowrap px-4 py-4 font-medium text-[#7E7F7F]">Losses</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr className="bg-[#1C1C1C]">
            <td className="whitespace-nowrap px-4 py-4 flex justify-center items-center gap-4 text-center font-medium text-[#FFFFFF]">
                <span className=" text-[#7bae2c]"><FaChevronUp/></span>
                <span className=" text-[#FFFFFF]"> 1</span>  
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">Adebayo Oyeleye</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">20</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">20</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">0</td>
          </tr>

          <tr className="bg-[#1C1C1C]">
          <td className="whitespace-nowrap px-4 py-4 flex justify-center items-center gap-4 text-center font-medium text-[#FFFFFF]">
                <span className=" text-[#c52d26]"><FaChevronDown/></span>
                <span className=" text-[#FFFFFF]"> 1</span>  
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">iBROMOVIC109</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">20</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">19</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">1</td>
          </tr>

          <tr className="bg-[#1C1C1C]">
          <td className="whitespace-nowrap px-4 py-4 flex justify-center items-center gap-4 text-center font-medium text-[#FFFFFF]">
                <span className=" text-[#f8b301]"><FaMinus/></span>
                <span className=" text-[#FFFFFF]"> 1</span>  
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">Drillz</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">20</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">17</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">3</td>
          </tr>
          <tr className="bg-[#1C1C1C]">
          <td className="whitespace-nowrap px-4 py-4 flex justify-center items-center gap-4 text-center font-medium text-[#FFFFFF]">
                <span className=" text-[#7bae2c]"><FaChevronUp/></span>
                <span className=" text-[#FFFFFF]"> 1</span>  
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">Bigbadderwolf</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">20</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">12</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">8</td>
          </tr>
          <tr className="bg-[#1C1C1C]">
          <td className="whitespace-nowrap px-4 py-4 flex justify-center items-center gap-4 text-center font-medium text-[#FFFFFF]">
                <span className=" text-[#7bae2c]"><FaChevronUp/></span>
                <span className=" text-[#FFFFFF]"> 1</span>  
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">Pinky</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">20</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">10</td>
            <td className="whitespace-nowrap px-4 py-4 text-center text-[#FFFFFF]">6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
