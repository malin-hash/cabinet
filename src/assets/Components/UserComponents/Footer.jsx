import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import {FaLocationPin } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div className='bg-black p-10 text-white '>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-5 mb-5'>
            <div className='space-y-4'>
                <p>Logo</p>
                <p className='text-xs'>Votre partenaire juridique de confiance pour tous vos besoins légaux</p>
                <div className='flex space-x-3'>
                    <FaFacebookF className='text-xl hover:text-blue-600 hover:bg-white rounded-full p-1 text-white bg-blue-600 cursor-pointer transition-colors duration-300'/>
                    <FaInstagram className='text-xl text-orange-600 hover:text-orange-500 cursor-pointer hover:shadow-orange-500 shadow-transparent'/>
                    <FaTwitter className='text-xl text-blue-400 hover:text-blue-500 cursor-pointer'/>
                    <FaLinkedinIn className='text-xl text-purple-600 hover:text-purple-500 cursor-pointer'/>
                </div>
            </div>
            <div className='space-y-4'>
                <p className='font-bold'>Services</p>
                <div className='space-y-1'>
                    <p className='text-xs'>Droit des affaires</p>
                    <p className='text-xs'>Droit de la famille</p>
                    <p className='text-xs'>Droit Immobiler</p>
                    <p className='text-xs'>Droit pénale</p>
                </div>
            </div>
            <div className='space-y-1'>
                <p className='mb-4 font-bold'>Contact</p>
                <div className='flex space-x-2'>
                    <FaLocationPin size={15}/>
                    <p className='text-xs'>Centre ville, 1er Arrondissement, Avenue D.Dacko</p>
                </div>
                <div className='flex space-x-2'>
                    <FaPhoneAlt size={15}/>
                    <p className='text-xs'>(+236) 74427249</p>
                </div>
                <div className='flex space-x-2'>
                    <FaEnvelope size={15}/>
                    <p className='text-xs'>malin@gmail.com</p>
                </div>
            </div>
            <div className='space-y-4'>
                <p className='font-bold'>Horaires</p>
                <div className='space-y-1'>
                    <p className='text-xs'>Lundi - Vendredi : 8h - 17h</p>
                    <p className='text-xs'>samedi : 8h - 12h</p>
                    <p className='text-xs'>Dimanche : Fermé</p>
                    <p className='text-xs'>Consultations d'urgence disponibilité : 24h/7j</p>
                </div>
            </div>
        </div>
        <hr className='text-gray-500 font-extralight mb-3 '/>
        <p className='text-center text-sm'>© {new Date().getFullYear()} cabinet juridique PABINGUI & Associés. Tous droits réservés</p>
    </div>
  )
}
