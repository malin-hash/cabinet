import React from 'react'
import { Link } from 'react-scroll'
import { FaCalendarDay, FaArrowCircleDown, FaLightbulb, FaClock, FaBalanceScale } from 'react-icons/fa'

export default function HomePage() {
  return (
    <div className="bg-[url('/blog-3.jpg')] bg-cover bg-center md:py-16 py-5 md:max-h-screen h-screen px-24">
      <h1 className='text-center text-white md:text-3xl text-2xl font-bold'>Votre Cabinet de confiance</h1>
      <h1 className='text-center text-blue-600 md:text-4xl text-lg font-bold'>PABINGUI & Associés</h1>
      <p className='text-center font-bold text-white md:text-md text-sm mb-6'>Expertises juridiques <span className='text-xl text-blue-500'>.</span> Conseil personnalisé <span className='text-xl text-blue-500'> .</span> Défense de vos droits</p>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 md:mx-40 mx-2 mb-9'>
        <Link
        to='rdv' 
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        className="flex hover:bg-blue-500 transition-colors duration-300 cursor-pointer gap-2 text-white p-4 rounded-md bg-blue-600 justify-center">
          <FaCalendarDay size={20}/>
          <p>Consultation Gratuite</p>
        </Link>
        <Link 
        to='services' 
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        className="flex gap-2 cursor-pointer  p-4 rounded-md border-2 border-white justify-center font-extrabold text-white hover:bg-blue-600 duration-300 transition-colors hover:border-blue-600">
            <FaArrowCircleDown size={20}/>
            <p>Découvrez nos services</p>
        </Link>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-8 text-white'>
        <div className='p-6 bg-white/20 backdrop-blur-0 rounded-md text-center'>
            <div className='flex justify-center'>
               <FaLightbulb className='text-4xl p-2 rounded-full bg-blue-600'/>
            </div>
            <h1 className='text-xl font-bold text-center'>{new Date().getFullYear() - 2000}+ Ans d'expérience</h1>
            <span className='text-center'>Une expérience reconnue dans tous les domaines du droit</span>
        </div>
        <div className='p-6 bg-white/20 backdrop-blur-0 rounded-md text-center md:block hidden'>
            <div className='flex justify-center'>
               <FaBalanceScale className='text-4xl p-2 rounded-full bg-blue-600'/>
            </div>
            <h1 className='text-xl font-bold text-center'>Plus de 500 clients satisfaits</h1>
            <span className='text-center'>Une relation de conficiance établie avec nos clients</span>
        </div>
        <div className='p-6 bg-white/20 backdrop-blur-0 rounded-md text-center md:block hidden'>
            <div className='flex justify-center'>
               <FaClock className='text-4xl p-2 rounded-full bg-blue-600'/>
            </div>
            <h1 className='text-xl font-bold text-center'>Disponiblité 24h/7j</h1>
            <span className='text-center'>Assistance juridique lorsque vous en avez besoin</span>
        </div>
      </div>
    </div>
  )
}
