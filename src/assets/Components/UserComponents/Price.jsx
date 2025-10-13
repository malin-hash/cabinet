import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-scroll'

export default function Price() {
  return (
    <div className=' md:px-20 px-10 py-5 bg-slate-100'>
      <h1 className='text-center text-gray-700 md:mb-4 mb-2 font-bold md:text-2xl text-xl'>Nos Tarifs Transparents</h1>
      <p className='text-gray-500 text-center mb-8 md:text-md text-sm'>Des frais clairs et transparents adaptés à vos besoins et à la complexité de votre dossier</p>
        <div className='grid md:grid-cols-3 grid-cols-1 text-gray-700 gap-4 mb-10'>
          <div className='p-5 bg-white shadow-xl rounded-xl'>
                  <p className='text-center font-bold text-gray-700 text-lg'>Consultation initiale</p>
                  <h1 className='text-xl font-semibold mb-3 text-center text-blue-500'>Gratuité</h1>
                  <p className='text-center font-bold text-gray-500 text-sm mb-4'>30 minutes</p>
                  <p className='text-sm text-gray-500 mb-4 text-center'>Première consultation pour évaluer votre situation</p>
                  <div className='flex space-x-2 px-4 mb-3'>
                    <FaCheck className='text-green-400 text-md'/>
                    <p className='text-sm text-gray-500'>Analyser votre situation</p>
                  </div>
                 <div className='flex space-x-2 px-4 mb-3'>
                    <FaCheck className='text-green-400 text-md'/>
                    <p className='text-sm text-gray-500'>Conseils juridiques préliminaires</p>
                  </div>
                  <div className='flex space-x-2 px-4 mb-3'>
                    <FaCheck className='text-green-400 text-md'/>
                    <p className='text-sm text-gray-500'>Estimation des coûts</p>
                  </div>
                  <div className='flex space-x-2 px-4 mb-7'>
                    <FaCheck className='text-green-400 text-md'/>
                    <p className='text-sm text-gray-500'>Plan d'action proposé</p>
                  </div>
                  <button className="p-2 rounded-lg bg-white text-center border-2 border-blue-600 cursor-pointer text-blue-600 w-full hover:bg-blue-600 hover:text-white">
                     <Link >Reserver maintenant</Link>
                  </button>
          </div>
          <div className='p-5 md:block hidden bg-white shadow-xl rounded-lg border-2 border-blue-600'>
                  <p className='text-center font-bold text-gray-700 text-lg'>Norme de consultation</p>
                  <h1 className='text-xl font-semibold mb-3 text-center text-blue-500'>20.000 Fcfa</h1>
                  <p className='text-center font-bold text-gray-500 text-sm mb-4'>1 heures</p>
                  <p className='text-sm text-gray-500 mb-4 text-center'>Consultation approfondie avec conseils détaillés</p>
                  <div className='flex space-x-2 px-4 mb-3'>
                    <FaCheck className='text-green-400 text-md'/>
                    <p className='text-sm text-gray-500'>Analyse juridique complète</p>
                  </div>
                 <div className='flex space-x-2 px-4 mb-3'>
                    <FaCheck className='text-green-400 text-md'/>
                    <p className='text-sm text-gray-500'>Rédaction de courriers simples </p>
                  </div>
                  <div className='flex space-x-2 px-4 mb-3'>
                    <FaCheck className='text-green-400 text-md'/>
                    <p className='text-sm text-gray-500'>Conseils personnalisés</p>
                  </div>
                  <div className='flex space-x-2 px-4 mb-7'>
                    <FaCheck className='text-green-400 text-md'/>
                    <p className='text-sm text-gray-500'>Suivi téléphonique inclus</p>
                  </div>
                  <button className="p-2 rounded-lg bg-blue-600 text-center text-white w-full hover:bg-blue-500">
                     <Link >Prendre rendez-vous</Link>
                  </button>
          </div>
          <div className='p-5 md:block hidden bg-white shadow-xl rounded-lg'>
                  <p className='text-center font-bold text-gray-700 text-lg'>Acconpagnement Premium</p>
                  <h1 className='text-xl font-semibold mb-3 text-center text-blue-500'>Sur Devis</h1>
                  <p className='text-center font-bold text-gray-500 text-sm mb-4'>Selon les besoin</p>
                  <p className='text-sm text-gray-500 mb-4 text-center'>Accompagnement complet pour affaires complexes</p>
                  <div className='flex space-x-2 px-4 mb-3'>
                    <FaCheck className='text-green-400 text-md'/>
                    <p className='text-sm text-gray-500'>Représentation en justice</p>
                  </div>
                 <div className='flex space-x-2 px-4 mb-3'>
                    <FaCheck className='text-green-400 text-md'/>
                    <p className='text-sm text-gray-500'>Rédaction d'actes complexes</p>
                  </div>
                  <div className='flex space-x-2 px-4 mb-3'>
                    <FaCheck className='text-green-400 text-md'/>
                    <p className='text-sm text-gray-500'>Négotiations avec les parties adverses</p>
                  </div>
                  <div className='flex space-x-2 px-4 mb-7'>
                    <FaCheck className='text-green-400 text-md'/>
                    <p className='text-sm text-gray-500'>Suivi personalisé 24h/7j</p>
                  </div>
                  <button className="hover:bg-blue-600 hover:text-white p-2 rounded-lg bg-white text-center border-2 border-blue-600 text-blue-600 w-full">
                     <Link >Prendre rendez-vous</Link>
                  </button>
          </div>
        </div>
    </div>
  ) 
}
