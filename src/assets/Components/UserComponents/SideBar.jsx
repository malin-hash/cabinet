import React from 'react'
import { BsMenuApp } from 'react-icons/bs'
import { FaTimes, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-scroll'

export default function Sidebar({ onClose, open, close}){
  return (
    <div className={`${open ? "fixed inset-0 z-50" : "hidden"} lg:hidden`}>
      <div className="absolute inset-0 bg-black/60" ></div>
      <aside className="absolute right-0 top-0 w-72 h-full bg-white dark:bg-gray-900">
        <div className="flex justify-between items-center mb-3 w-full bg-slate-200 p-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold"></div>
          <button className='hover:text-red-500 text-xl transition-colors duration-300' onClick={onClose}><FaTimes /></button>
        </div>
        {/* <p className='p-2 font-bold text-lg'>Menu</p> */}
        <div>
        <div>
        </div>
          <nav className="flex flex-col px-12">
            <Link onClick={onClose} smooth={true} duration={600} spy={true} offset={-80} activeClass='bg-blue-600 text-center text-sm' to="acceuil" className='mb-1  block p-3 hover:bg-blue-600 rounded-lg  cursor-pointer transition-all duration-500 font-semibold text-xs'>Acceuil</Link>
            <Link onClick={onClose} smooth={true} duration={600} spy={true} offset={-80} activeClass='bg-blue-600 text-center text-sm' to="services" className='mb-1  block p-3 hover:bg-blue-600 rounded-lg  cursor-pointer transition-all duration-500 font-semibold text-xs'>Services</Link>
            <Link onClick={onClose} smooth={true} duration={600} spy={true} offset={-80} activeClass='bg-blue-600 text-center text-sm' to="compétences"className='mb-1  block p-3 hover:bg-blue-600 rounded-lg  cursor-pointer transition-all duration-500 font-semibold text-xs'>Compétences</Link>
            <Link onClick={onClose} smooth={true} duration={600} spy={true} offset={-80} activeClass='bg-blue-600 text-center text-sm' to="tarif" className='mb-1  block p-3 hover:bg-blue-600 rounded-lg  cursor-pointer transition-all duration-500 font-semibold text-xs'>Tarif</Link>
            <Link onClick={onClose} smooth={true} duration={600} spy={true} offset={-80} activeClass='bg-blue-600 text-center text-sm' to="projets" className='mb-1  block p-3 hover:bg-blue-600 rounded-lg  cursor-pointer transition-all duration-500 font-semibold text-xs'>Projets</Link>
            <Link onClick={onClose} smooth={true} duration={600} spy={true} offset={-80} activeClass='bg-blue-600 text-center text-sm' to="guide" className='mb-1  block p-3 hover:bg-blue-600 rounded-lg  cursor-pointer transition-all duration-500 font-semibold text-xs'>Guide</Link>
            <Link onClick={onClose} smooth={true} duration={600} spy={true} offset={-80} activeClass='bg-blue-600 text-center text-sm' to="rdv" className='mb-1  block p-3 hover:bg-blue-600 rounded-lg  cursor-pointer transition-all duration-500 font-semibold text-xs'>Prendre rendez-vous</Link>
            <Link onClick={close} smooth={true} duration={600} spy={true} offset={-80} activeClass='bg-blue-600 text-center text-sm'  className='mb-6  block p-3 hover:bg-blue-600 rounded-lg  cursor-pointer transition-all duration-500 font-semibold text-xs'>Se connecter</Link>
          </nav>
        </div>
        <hr />
        <h1 className='p-4 font-bold ml-4'>Nos réseaux sociaux</h1>
        <div className="flex gap-4 px-8 py-2">
          <FaFacebookF className='text-xl hover:text-blue-600 hover:bg-white rounded-full p-1 text-white bg-blue-600 cursor-pointer transition-colors duration-300'/>
          <FaInstagram className='text-xl text-orange-600 hover:text-orange-500 cursor-pointer hover:shadow-orange-500 shadow-transparent'/>
          <FaTwitter className='text-xl text-blue-400 hover:text-blue-500 cursor-pointer'/>
          <FaLinkedinIn className='text-xl text-purple-600 hover:text-purple-500 cursor-pointer'/>
        </div>


      </aside>
    </div>
  )
}
