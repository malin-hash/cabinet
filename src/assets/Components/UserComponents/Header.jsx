import React, {useState} from 'react'
import { Link } from 'react-scroll'
import { AiOutlineMenu } from 'react-icons/ai'
import Sidebar from './SideBar';
import ModalConnexion from './ModalConnexion';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false)
    const close = () => {
        setOpenModal(!openModal)
        setOpen(false)
    }
  return (
    <div className='fixed top-0 left-0 right-0 bg-white shadow-md z-30 md:px-4 px-1 text-sm'>
        <Sidebar open={open} onClose={() => setOpen(false)} close={close} openModal={openModal}/>
        <nav className='flex justify-between'>
            {/* Logo */}
        <div className='p-2 flex items-center'>
          <img src="/justice.png" alt="" className='h-14 w-28 '/>
          <div>
             <p className='text-blue-600 text-sm '>PABINGUI <span className='text-yellow-600'>&</span> Associés</p>
             <p className='text-blue-600 text-xs  text-center -mt-1'>Justise - Défense - Droit</p>
          </div>
        </div>
            <button onClick={() => setOpen(true)} className='lg:hidden block text-gray-800 p-3 font-bold cursor-pointer hover:text-blue-600'>
                <AiOutlineMenu size={20}/>
            </button>
            <div className='lg:block hidden'>
            <div className='flex justify-center gap-8 py-2 items-center'>
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
                to="rdv"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="border-b-2 border-blue-600 text-blue-600"
                className="p-2 cursor-pointer font-semibold text-gray-700 transition-colors hover:text-blue-600 border-b-2 hover:border-blue-600 duration-300"
                >
                    Prendre RDV
                </Link>
                <Link
                onClick={close}
                smooth={true}
                duration={500}
                spy={true}
                offset={-99}
                activeClass="text-blue-600 border-b-2 border-blue-600"
                className="p-2 cursor-pointer font-semibold text-white hover:bg-blue-500 transition-colors bg-blue-600 rounded-lg"
                >
                    Se connecter
                </Link> 
            </div>
            </div>
        </nav>
        {
             openModal && (
                 <ModalConnexion close={close}/>
             )
         }
    </div>
  )
}
