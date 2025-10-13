import React, {useState} from 'react'
import {  FaBalanceScale, FaCheck, FaUsers, FaGavel, FaHandshake, FaHome, FaArrowCircleRight, FaFileContract } from 'react-icons/fa'

export default function Services() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(!open)
  const button = open ? "Voir moins" : "Voir plus"
  return (
    <div className=' bg-slate-50 md:py-10 py-5 md:px-24 px-10'>
      <h1 className='text-center text-gray-700 md:mb-4 mb-2 font-bold md:text-3xl text-xl'>Nos Domaines d'Expertises</h1>
      <p className='text-gray-500 text-center md:text-md text-sm'>Une Equipe d'avocats spécialisés pour répondre à tous vos besoins juridiques avec</p>
      <p className='text-gray-500 text-center md:mb-12 mb-3 md:text-md text-sm'>professionnalisme et éficacité</p>
      <div className='grid md:grid-cols-3 grid-cols-1 text-gray-700 gap-4 mb-4'>
        <div className='p-6 bg-white shadow-xl rounded-lg'>
            <FaBalanceScale className='text-4xl text-blue-700 p-2 rounded-full bg-blue-200 mb-3'/>
            <h1 className='text-lg font-semibold mb-3'>Droit des Affaires</h1>
            <p className='text-sm text-gray-500 mb-4'>Création d'entreprise, contrats commerciaux, fusions-acquisitions droit des sociétés</p>
            <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Conseil en création d'entreprise</p>
            </div>
           <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Rédaction de contrats</p>
            </div>
            <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Négociation commerciale</p>
            </div>
            <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Contentieux commercial</p>
            </div>
        </div>
        <div className='p-6 bg-white shadow-xl rounded-lg'>
            <FaUsers className='text-4xl text-blue-700 p-2 rounded-full bg-blue-200 mb-3'/>
            <h1 className='text-lg font-semibold mb-3'>Droit de la famille</h1>
            <p className='text-sm text-gray-500 mb-4'>Divorce et garde d'enfants, succession, adoption, violance conjugale</p>
            <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Procédures de divorce</p>
            </div>
           <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Garde d'enfants</p>
            </div>
            <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Pension alimentaire</p>
            </div>
            <div className='flex space-x-2 px-4'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Succession et testament</p>
            </div>
        </div>
        <div className='p-6 bg-white shadow-xl rounded-lg'>
            <FaHome className='text-4xl text-blue-700 p-2 rounded-full bg-blue-200 mb-3'/>
            <h1 className='text-lg font-semibold mb-3'>Droit Immobilier</h1>
            <p className='text-sm text-gray-500 mb-4'>Achat-Vente, localisation, copropriété, construction, urbanisme</p>
            <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Transations immobilières</p>
            </div>
           <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Baux commerciaux</p>
            </div>
            <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Copropriété</p>
            </div>
            <div className='flex space-x-2 px-4'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Permis de construire</p>
            </div>
        </div>
      </div>
       {
          open && (
            <div className='space-y-3 grid md:grid-cols-3 grid-cols-1 gap-4 mb-4'>
            <div className='p-6 bg-white shadow-xl rounded-md'>
            <FaGavel className='text-4xl text-blue-700 p-2 rounded-full bg-blue-200 mb-3'/>
            <h1 className='text-lg font-semibold mb-3'>Droit Pénal</h1>
            <p className='text-sm text-gray-500 mb-4'>Défense pénale, garde à vue, comparution, appel, cassation</p>
            <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Assistance garde à vue</p>
            </div>
           <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Défense au tribunal</p>
            </div>
            <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Procédures d'appel</p>
            </div>
            <div className='flex space-x-2 px-4'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Droit des victimes</p>
            </div>
            </div>
            <div className='p-6 bg-white shadow-xl rounded-md'>
            <FaFileContract className='text-4xl text-blue-700 p-2 rounded-full bg-blue-200 mb-3'/>
            <h1 className='text-lg font-semibold mb-3'>Droit du Travail</h1>
            <p className='text-sm text-gray-500 mb-4'>Contrat de travail, Licenciement, harcèlement</p>
            <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Contrat de travail</p>
            </div>
           <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Licence</p>
            </div>
            <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Harcèlement moral</p>
            </div>
            <div className='flex space-x-2 px-4'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Conseil aux entreprises</p>
            </div>
            </div>
            <div className='p-6 bg-white shadow-xl rounded-md'>
            <FaHandshake className='text-4xl text-blue-700 p-2 rounded-full bg-blue-200 mb-3'/>
            <h1 className='text-lg font-semibold mb-3'>Médiation & Arbitrage</h1>
            <p className='text-sm text-gray-500 mb-4'>Résolution amiable des conflits, médiation familiale et commerciale</p>
            <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Médiation Familiale</p>
            </div>
           <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Arbitrage commercial</p>
            </div>
            <div className='flex space-x-2 px-4 mb-3'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Négociation</p>
            </div>
            <div className='flex space-x-2 px-4'>
              <FaCheck className='text-green-400 text-md'/>
              <p className='text-sm text-gray-500'>Résolution des conflits</p>
            </div>
            </div>
            </div>
          )
        }
        
        <div className=''>
          <div className='flex space-x-3 text-white  justify-center'>
          <div  onClick={close} className='bg-blue-600 px-4 py-2 flex space-x-2 rounded-md cursor-pointer hover:bg-blue-500'>
            <p className='text-xs'>{button}</p>
            <FaArrowCircleRight size={16} className=''/>
          </div>
          </div>
        </div>
    </div>
  )
}
