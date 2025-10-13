import React from 'react'
import { Link } from 'react-scroll'

export default function Rubon() {
  return (
    <div className='w-full bg-blue-100 rounded-md p-6 '>
        <h1 className='text-xl md:text-2xl text-center text-gray-700 font-bold'>Votre Affaire Pourrait Être la Prochaine</h1>
        <p className='text-sm md:text-md text-gray-700 text-center mb-2'>Chaque dosier est unique et mérite une attention particulière. Contactez-nous pour discuter de votre situation.</p>  
        <div className='grid md:grid-cols-2 grid-cols-1 gap-3 md:px-40 '>
            <Link className="p-4 text-center rounded-lg bg-blue-700 cursor-pointer text-white hover:bg-blue-500">Prendre Rendez-vous</Link>    
            <Link className="p-4 text-center rounded-lg border-2 border-blue-600 text-blue-700 hover:bg-blue-700 hover:text-white cursor-pointer">Nous contacter</Link>    
        </div>  
    </div>
  )
}
