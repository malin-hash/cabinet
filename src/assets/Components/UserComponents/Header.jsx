import React, {useState} from 'react'
import { Link } from 'react-scroll'
import { AiOutlineMenu } from 'react-icons/ai'
import Sidebar from './SideBar';

export default function Header() {
    const [open, setOpen] = useState(false);
  return (
    <div className='fixed top-0 left-0 right-0 bg-white shadow-md z-30 px-4 text-sm'>
        <Sidebar open={open} onClose={() => setOpen(false)}/>
        <nav className='flex justify-between'>
            {/* Logo */}
            <div className='p-2'>
               <p className='py-1 text-blue-600 font-mono text-lg'>PABINGUI & Associés</p>
            </div>
            <button onClick={() => setOpen(true)} className='md:hidden block text-gray-800 p-3 font-bold cursor-pointer hover:text-blue-600'>
                <AiOutlineMenu size={20}/>
            </button>
            <div className='md:block hidden'>
            <div className='flex justify-center gap-8 py-2'>
                <Link
                to="acceuil"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="border-b-2 border-blue-600 text-blue-600"
                className="p-2 cursor-pointer font-semibold text-gray-700 transition-colors hover:text-blue-600 border-b-2 hover:border-blue-600 duration-300"
                >
                    Acceuil
                </Link>
                <Link
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="border-b-2 border-blue-600 text-blue-600"
                className="p-2 cursor-pointer font-semibold text-gray-700 transition-colors hover:text-blue-600 border-b-2 hover:border-blue-600 duration-300"
                >
                    Services
                </Link>
                <Link
                to="compétences"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="border-b-2 border-blue-600 text-blue-600"
                className="p-2 cursor-pointer font-semibold text-gray-700 transition-colors hover:text-blue-600 border-b-2 hover:border-blue-600 duration-300"
                >
                    Compétences
                </Link>
                <Link
                to="tarif"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="border-b-2 border-blue-600 text-blue-600"
                className="p-2 cursor-pointer font-semibold text-gray-700 transition-colors hover:text-blue-600 border-b-2 hover:border-blue-600 duration-300"
                >
                    Tarif
                </Link>
                <Link
                to="projets"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="border-b-2 border-blue-600 text-blue-600"
                className="p-2 cursor-pointer font-semibold text-gray-700 transition-colors hover:text-blue-600 border-b-2 hover:border-blue-600 duration-300"
                >
                    Projets
                </Link>
                <Link
                to="guide"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="border-b-2 border-blue-600 text-blue-600"
                className="p-2 cursor-pointer font-semibold text-gray-700 transition-colors hover:text-blue-600 border-b-2 hover:border-blue-600 duration-300"
                >
                    Guide
                </Link>
                
                <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="border-b-2 border-blue-600 text-blue-600"
                className="p-2 cursor-pointer font-semibold text-gray-700 transition-colors hover:text-blue-600 border-b-2 hover:border-blue-600 duration-300"
                >
                    Contact
                </Link>
                <Link
                to="rdv"
                smooth={true}
                duration={500}
                spy={true}
                offset={-99}
                activeClass="text-blue-600 border-b-2 border-blue-600"
                className="p-2 cursor-pointer font-semibold text-white hover:bg-blue-500 transition-colors bg-blue-600 rounded-lg"
                >
                    Prendre rendez-vous
                </Link> 
            </div>
            </div>
        </nav>
    </div>
  )
}
