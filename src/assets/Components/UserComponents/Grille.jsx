import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa'

export default function Grille() {
  return (
    <div className='bg-gray-100 p-5'>
        <div className='bg-white rounded-md p-5'>
            <h3 className='text-center font-bold text-slate-700 mb-2'>Grille tarifaire</h3>
            <div className='grid md:grid-cols-2 gri gap-4'>
                <div className='flex justify-between bg-slate-100 p-3 rounded-md'>
                    <p className='md:text-md text-sm'>Consultation juridique</p>
                    <p className='text-blue-600 md:text-md text-sm'>50.000 Fcfa/heure</p>
                </div>
                <div className='flex justify-between bg-slate-100 p-3 rounded-md'>
                    <p className='md:text-md text-sm'>Rédaction du contrat simple</p>
                    <p className='text-blue-600 md:text-md text-sm'>50.000 - 10.000 fcfa</p>
                </div>
                <div className='flex justify-between bg-slate-100 p-3 rounded-md'>
                    <p className='md:text-md text-sm'>Rédaction du contrat complexe</p>
                    <p className='text-blue-600 md:text-md text-sm'>100.000 - 160.000 Fcfa</p>
                </div>
                <div className='flex justify-between bg-slate-100 p-3 rounded-md'>
                    <p className='md:text-md text-sm'>Procédure de divorce amiable</p>
                    <p className='text-blue-600 md:text-md text-sm'>200.000 Fcfa</p>
                </div>
                <div className='flex justify-between bg-slate-100 p-3 rounded-md'>
                    <p className='md:text-md text-sm'>Procédure de divorce Contentieux</p>
                    <p className='text-blue-600 md:text-md text-sm'>50.000 Fcfa</p>
                </div>
                <div className='flex justify-between bg-slate-100 p-3 rounded-md'>
                    <p className='md:text-md text-sm'>Création d'entreprise</p>
                    <p className='text-blue-600 md:text-md text-sm'>50.000 Fcfa</p>
                </div>
                <div className='flex justify-between bg-slate-100 p-3 rounded-md'>
                    <p className='md:text-md text-sm'>Représentation tribunal correctionnel</p>
                    <p className='text-blue-600 md:text-md text-sm'>50.000 Fcfa</p>
                </div>
                <div className='flex justify-between bg-slate-100 p-3 rounded-md'>
                    <p className='md:text-md text-sm'>Représentation cour d'assise</p>
                    <p className='text-blue-600 md:text-md text-sm'>50.000 Fcfa</p>
                </div>
            </div>
            <div className='bg-blue-100 mt-4 rounded-md p-3 space-y-3'>
                <p className='mb-2'>Information importantes :</p>
                <div className='flex space-x-2 '>
                    <FaExclamationCircle className='text-lg text-gray-600'/>
                    <p className='text-sm text-gray-600'>Les tarifs peuvent varier selon la complexité du dossier.</p>
                </div>
                <div className='flex space-x-2 '>
                    <FaExclamationCircle className='text-lg text-gray-600'/>
                    <p className='text-sm text-gray-600'>Devis gratuit et sans engagement pour toute prestation.</p>
                </div>
                <div className='flex space-x-2 '>
                    <FaExclamationCircle className='text-lg text-gray-600'/>
                    <p className='text-sm text-gray-600'>Possibilité de paiement échelonné selon le cas.</p>
                </div>
                <div className='flex space-x-2 '>
                    <FaExclamationCircle className='text-lg text-gray-600'/>
                    <p className='text-sm text-gray-600'>Aide juridictionnelle acceptée selon conditions de ressources.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
