import React from 'react'

export default function ModalDelete({closeModal, data, deleteFolder}) {
  return (
    <div className='p-10 bg-slate-200 rounded-lg  top-0 left-0 right-0 lg:mx-72 mx-5 mt-28 fixed z-50 shadow-2xl'>
        <p className='text-center font-bold text-gray-600 text-md'>Voulez-vous vraiment continuer cette suppression ?</p>
        <div className='flex space-x-4 justify-center mt-10'>
            <button onClick={() => closeModal()} className='py-3 px-8 rounded-md bg-yellow-400 text-gray-500 duration-300 transition-colors cursor-pointer hover:bg-yellow-300'>Annuler</button>
            <button onClick={() => deleteFolder(data)} className='py-3 px-8 rounded-md bg-green-400 text-gray-500 duration-300 transition-colors cursor-pointer hover:bg-green-300'>Continuer</button>
        </div>
    </div>
  )
}
