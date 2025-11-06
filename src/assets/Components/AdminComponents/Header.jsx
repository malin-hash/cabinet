import React, { useState } from 'react'
import { AiFillSetting, AiOutlineMenu, AiOutlineMessage} from 'react-icons/ai'
import RdvPage from './Rdv/RdvPage'
import Sidebar from './Sidebar'

export default function Header() {
// Modal rendez-vous
const [openRdv, setOpenRdv] = useState(false)
const closeRdv = () => setOpenRdv(!openRdv)
// Modal Sidebar
const [openSidebar, setOpenSidebar] = useState(false)
const closeSidebar = () => setOpenSidebar(!openSidebar)
  return (
    <div className='px-8 flex justify-between bg-blue-600 shadow-sm left-0 top-0 right-0 fixed z-30'>
        <div className='p-2 flex items-center'>
          <img src="/public/justice.png" alt="" className='h-14 w-28  '/>
          <div>
             <p className='text-white sm:text-xs md:sm font-mono'>PABINGUI <span className='text-yellow-600'>&</span> Associés</p>
             <p className='text-white text-xs font-thin text-center -mt-1'>Justise - Défense - Droit</p>
          </div>
        </div>
        <div className='flex space-x-3'>
            <div className='flex space-x-3 p-2 items-center text-white'>
            <div className='relative'>
                <AiOutlineMessage onClick={closeRdv} className='text-2xl cursor-pointer hover:text-slate-300 transition-colors duration-300'/>
                {
                  openRdv && (
                    <RdvPage/>
                  )
                }
                <div className='p-1 text-xs rounded-t-full rounded-l-full  bg-red-600 text-white absolute -top-3 right-5'>
                  1O
                </div>
            </div>
            <div className='md:hidden block'>
                <AiOutlineMenu onClick={closeSidebar} className='text-2xl cursor-pointer hover:text-slate-300 transition-colors duration-300'/>
            </div>
            </div>
              {
                openSidebar && (
                  <div className='transition-all duration-1000'>
                   <Sidebar openSidebar={openSidebar} closeSidebar={closeSidebar}/>
                  </div>
                )            
              }
        </div>
    </div>
  )
}
