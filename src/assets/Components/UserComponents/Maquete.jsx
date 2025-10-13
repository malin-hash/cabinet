import React from 'react'

export default function Maquete() {
  return (
      <div className='w-full bg-blue-100 rounded-md p-6 grid grid-cols-4 mt-12'>
        <div className='flex-col text-center space-y-2'>
            <p className='md:text-3xl text-lg text-blue-600 font-bold'>500+</p>
            <p className='md:text-sm text-xs text-gray-500'>Satisfaction des clients</p>
        </div>
        <div className='flex-col text-center space-y-2'>
            <p className='md:text-3xl text-lg text-blue-600 font-bold'>90%</p>
            <p className='md:text-sm text-xs text-gray-500'>Taux de Réussite</p>
        </div>
        <div className='flex-col text-center space-y-2'>
            <p className='md:text-3xl text-lg text-blue-600 font-bold'>{new Date().getFullYear() - 2000} ans</p>
            <p className='md:text-sm text-xs text-gray-500'>Années d'Expérience</p>
        </div>
        <div className='flex-col text-center space-y-2'>
            <p className='md:text-3xl text-lg text-blue-600 font-bold'>6j/7</p>
            <p className='md:text-sm text-xs text-gray-500'>Disponibilité</p>
        </div>
      </div>
  )
}
