import React from 'react'
import { Link } from 'react-scroll'

export default function Rubon() {
  return (
    <div className='w-full bg-blue-100 rounded-md p-6 '>
        <h1 className='text-xl md:text-2xl text-center text-gray-700 font-bold'>Votre Affaire Pourrait Être la Prochaine</h1>
        <p className='text-sm md:text-md text-gray-700 text-center mb-2'>Chaque dosier est unique et mérite une attention particulière. Contactez-nous pour discuter de votre situation.</p>  
        <div className='grid grid-cols-1 md:px-40 '>
            <Link
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            to='rdv' 
            className="p-4 text-center rounded-lg border-2 border-blue-600 text-blue-700 hover:bg-blue-700 hover:text-white cursor-pointer">Prendre Rendez-vous</Link>    
        </div>  
    </div>
  )
}
