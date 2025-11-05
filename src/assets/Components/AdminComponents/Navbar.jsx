import React from 'react'
import { AiOutlineCalendar, AiOutlineFileAdd, AiOutlineFolderAdd, AiOutlineMenu, AiOutlineUser, AiOutlineUserAdd } from 'react-icons/ai'
import { NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='py-3 px-8 mt-16 left-0 top-0 right-0 fixed z-20 bg-white mb-2 md:block hidden'>
      <div className='flex space-x-16 mb-7 mt-3'>
           <NavLink to="/acceuil" end className={({isActive}) => isActive ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-2" : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"}>
            <AiOutlineMenu className='text-lg'/>
            <p className='text-sm'>Acceuil</p>
          </NavLink>
          <NavLink to="/acceuil/client" className={({isActive}) => isActive ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-2" : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"}>
            <AiOutlineUser className='text-lg hover:text-blue-600 '/>
            <p className='text-sm'>Clients</p>
          </NavLink>
          <NavLink to='/acceuil/dossier' className={({isActive}) => isActive ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-2" : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"}>
            <AiOutlineFolderAdd className='text-lg hover:text-blue-600 '/>
            <p className='text-sm'>Dossiers</p>
          </NavLink>
          <NavLink to='/acceuil/archive' className={({isActive}) => isActive ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-2" : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"}>
            <AiOutlineFileAdd className='text-lg hover:text-blue-600 '/>
            <p className='text-sm'>Archive</p>
          </NavLink>
          <NavLink to='/acceuil/register' className={({isActive}) => isActive ? "flex space-x-2 p-2 text-blue-600 border-blue-600 border-b-2" : "flex space-x-2 p-2 hover:text-blue-600 border-blue-600 hover:border-b-2 duration-300 transition-all"}>
            <AiOutlineUserAdd className='text-lg hover:text-blue-600 '/>
            <p className='text-sm'>Utilisateurs</p>
          </NavLink>
      </div>
      <p className='text-xl font-bold'>Menu</p>
    </div>
  )
}
