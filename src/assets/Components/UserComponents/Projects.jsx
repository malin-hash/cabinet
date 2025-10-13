import React from 'react'
import { FaUser, FaPlusCircle, FaCheckSquare} from 'react-icons/fa'

export default function Projects() {
    const equipes = [
        {id: 1, name: "Acquisition d'entreprise de 5.000.000.000 Fcfa", funtion: "Accord amiable obtenu", speciality: "Droit des affaire", experience: "Groupe industriel Sénégalais", content: "Accompagnement Complet d'une acquisition d'entreprise", avatar: "/entre.jpg"},
        {id: 2, name: "Divorce complexe avec patrimoine internationnale", funtion: "transaction finalisée en 6 mois", speciality: "Droit de la famille", experience: "Couple d'entrepreneurs", content: "Expert en droit pénal avec une formation approfondie en criminologie et droit familial", avatar: "/div.jpg"},
        {id: 3, name: "Défence Pénale en cour d'assises", funtion: "Acquitement total obtenu", speciality: "Droit pénal", experience: "Chef d'entreprise", content: "Spécialiste reconnu en transactions immobilières complexes et droit social", avatar: "/blog-4.jpg"},
    ]
  return (
    <div className='md:px-24 px-12 bg-slate-100  py-5'>
      <h1 className='text-center text-gray-700 mb-4 font-bold md:text-2xl text-xl'>Nos Succès Récents</h1>
      <p className='text-gray-500 text-center mb-8 md:text-md text-xs'>Découvrez quelques-unes de nos affaires les plus marquantes et les résultats obtenus pour nos clients</p>
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-3 mb-6'>
        {
            equipes.map((equipe) => (
                <div key={equipe.id} className='bg-white p-2 shadow-md rounded-md '>
                  <div className='relative'>
                    <img src={equipe.avatar} className='rounded-md mb-2 h-40  w-[100%]'/>
                    <p className='text-white text-sm text-center absolute top-2 left-3 py-1 px-3 rounded-lg bg-blue-700'>{equipe.speciality}</p>
                  </div>
                    <h1 className='text-gray-700 text-center text-sm font-bold'>{equipe.name}</h1>
                    <p className='text-gray-800 text-center text-sm'>{equipe.content}</p>
                    <div className='flex space-x-2 justify-center mt-1'>
                      <FaCheckSquare size={16} className='text-green-500'/>
                      <p className='text-sm text-green-500 text-center'>{equipe.funtion}</p>
                    </div>
                    <div className='flex space-x-2 justify-center mt-3'>
                      <FaUser size={15} className='text-gray-400'/>
                        <p className='text-gray-400 text-sm text-center'>{equipe.experience}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}
