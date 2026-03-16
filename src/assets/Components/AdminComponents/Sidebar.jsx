import React from 'react'
import { AiFillCloseCircle, AiFillFileAdd, AiFillFolderAdd, AiOutlineLogout, AiOutlineMenu, AiOutlineUser, AiOutlineUserAdd } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Sidebar({closeSidebar}) {
// Route de déconnexion
const nav = useNavigate()
const logout = () => {
  localStorage.removeItem("token");
  nav("/")
}
  return (
    <div className='fixed right-0 top-0 p-3 z-50 bg-white h-screen w-72'>
        <div className='relative p-3'>
            <AiFillCloseCircle onClick={closeSidebar} className='absolute top-3 right-3 text-2xl text-blue-600 cursor-pointer hover:text-red-600 duration-300 transition-colors'/>
        </div>
        <div className='py-16 px-6'>
            <hr className='border-2 text-gray-500 mb-6 -mt-5'/>
            <NavLink onClick={closeSidebar} to="/admin" end className={({isActive}) => isActive ? "mb-4 flex space-x-2 p-2 text-white bg-blue-600 border-b-2 rounded-lg justify-center" : "mb-4 flex space-x-2 p-2 hover:text-white text-gray-600 hover:justify-center rounded-lg hover:bg-blue-600 duration-300 transition-all"}>
              <AiOutlineMenu className='text-lg'/>
              <p className='text-sm'>Acceuil</p>
            </NavLink>
            <NavLink onClick={closeSidebar} to="/admin/client" className={({isActive}) => isActive ? "mb-4 flex space-x-2 p-2 text-white bg-blue-600 border-b-2 rounded-lg justify-center" : "mb-4 flex space-x-2 p-2 hover:text-white text-gray-600 hover:justify-center rounded-lg hover:bg-blue-600 duration-300 transition-all"}>
                <AiOutlineUser className='text-lg hover:text-blue-600 '/>
                <p className='text-sm'>Clients</p>
            </NavLink>
            <NavLink onClick={closeSidebar} to='/admin/dossier' className={({isActive}) => isActive ? "mb-4 flex space-x-2 p-2 text-white bg-blue-600 border-b-2 rounded-lg justify-center" : "mb-4 flex space-x-2 p-2 hover:text-white text-gray-600 hover:justify-center rounded-lg hover:bg-blue-600 duration-300 transition-all"}>
                <AiFillFolderAdd className='text-lg hover:text-blue-600 '/>
                <p className='text-sm'>Dossiers</p>
            </NavLink>
            <NavLink onClick={closeSidebar} to='/admin/archive' className={({isActive}) => isActive ? "mb-4 flex space-x-2 p-2 text-white bg-blue-600 border-b-2 rounded-lg justify-center" : "mb-4 flex space-x-2 p-2 hover:text-white text-gray-600 hover:justify-center rounded-lg hover:bg-blue-600 duration-300 transition-all"}>
                <AiFillFileAdd className='text-lg hover:text-blue-600 '/>
                <p className='text-sm'>Archive</p>
            </NavLink>
            <NavLink onClick={closeSidebar} to='/admin/register' className={({isActive}) => isActive ? "mb-6 flex space-x-2 p-2 text-white bg-blue-600 border-b-2 rounded-lg justify-center" : "mb-6 flex space-x-2 p-2 hover:text-white text-gray-600 hover:justify-center rounded-lg hover:bg-blue-600 duration-300 transition-all"}>
                <AiOutlineUserAdd className='text-lg hover:text-blue-600 '/>
                <p className='text-sm'>Utilisateurs</p>
            </NavLink>
        <hr className='border-2 text-gray-500'/>
        </div>
        <div>
            <NavLink onClick={() => logout()} className="flex space-x-2 py-3 text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-lg justify-center -mt-4">
                <AiOutlineLogout/>
                <p className='text-sm'>Se déconnecte</p>
            </NavLink>
        </div>
    </div>
  )
}
