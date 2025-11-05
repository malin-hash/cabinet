import React, {useState} from 'react'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { FaAccessibleIcon, FaCar, FaEnvelope, FaFacebook, FaFile, FaInstagram, FaLinkedin, FaPhone, FaStopwatch, FaTwitter } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { contact } from '../../../Apis/axios'

export default function Contact() {
    const [formData, setFormData] = useState({name: "", firstname: "", email: "", phone: "", subject: "", message: ""})
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true)
      try {
        const res = await contact(formData);
        setMessage(res.data.message);
      }catch (err) {
        setMessage(err.response?.data?.message || "Erreur d'ajout")
      }finally{
        setLoading(false)
      }
    }
  return (
    <div className='p-6 bg-blue-50'>
        <h1 className='text-center text-gray-700 md:text-2xl text-xl mb-3'>Nous contactez</h1>
        <p className='text-center text-gray-500 md:text-md text-sm mb-6'>Une question ? un conseil juridique ? n'hésitez pas à nous contacter, nous vous répondrons rapidement</p>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-2'>
            <div className='p-5 bg-white shadow-lg rounded-lg'>
                {
                message && (
                    <div className='m-1 p-3 w-full bg-green-300 text-black'>{message}</div>
                )
                }
                <h1 className='text-center text-md md:text-lg text-gray-600'>Envoyer nous un message</h1>
                <form onSubmit={handleSubmit}>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                        <div>
                            <label className='text-sm text-gray-500' htmlFor="">Nom <span className='text-red-600'>*</span></label>
                            <input type="text"  className='w-full p-2 border-2 border-black rounded-lg' placeholder='Exemple: malin'
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className='text-sm text-gray-500' htmlFor="">Prénom <span className='text-red-600'>*</span></label>
                            <input type="text"  className='w-full p-2 border-2 border-black rounded-lg' placeholder='Exemple: mokos'
                            onChange={(e) => setFormData({...formData, firstname: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                        <div>
                            <label className='text-sm text-gray-500' htmlFor="">E-mail <span className='text-red-600'>*</span></label>
                            <input type="email"  className='w-full p-2 border-2 border-black rounded-lg' placeholder='Exemple: malin@gmail.com'
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className='text-sm text-gray-500' htmlFor="">Téléphone <span className='text-red-600'>*</span></label>
                            <input type="number"  className='w-full p-2 border-2 border-black rounded-lg' placeholder='Exemple: 74427249'
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                    </div>
                        <div>
                            <label className='text-sm text-gray-500' htmlFor="">Sujet <span className='text-red-600'>*</span></label>
                            <select name="" id="" className='w-full p-2 border-2 border-black rounded-lg' onChange={(e) => setFormData({...formData, subject: e.target.value})}>
                                <option  className='text-gray-500'>Sélectionnez un sujet</option>
                                <option  className='text-gray-500' value="Droit de l'immobilier">Droit de l'immobilier</option>
                                <option  className='text-gray-500' value="Droit de la famille">Droit de la famille</option>
                            </select>
                        </div>
                    <div className='w-full'>
                        <div>
                            <label className='text-sm text-gray-500' htmlFor="">Message <span className='text-red-600'>*</span></label>
                            <textarea name="" id="" cols="50"  className='w-full p-2 border-2 border-black rounded-lg resize-none' placeholder='Décrivez votre demande' onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                        </div>
                        <p className='text-sm text-gray-500'>0/500 caractères</p>
                    </div>
                    <button className='p-3 text-center w-full rounded-lg text-white bg-blue-700 hover:bg-blue-500 transition-colors duration-300'>{loading ? 'Chargement ...': 'Envoyez le message'}</button>
                </form>
            </div>
            <div className='p-5 bg-blue-600 text-white shadow-lg rounded-lg space-y-2'>
                    <h1 className='text-center text-xl '>Nos coordonnées</h1>
                    <div className='flex space-x-2'>
                        <div className='p-3'>
                            <FaLocationPin size={15} className='text-white'/>
                        </div>
                        <div>
                            <h3 className='text-sm '>Adresse</h3>
                            <p className='text-xs '>Centre ville, 1er Arrondissement, Bangui</p>
                        </div>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='p-3'>
                            <FaPhone size={15} className='text-white'/>
                        </div>
                        <div>
                            <h3 className='text-sm '>Téléphone</h3>
                            <p className='text-xs '>(+236) 74427249</p>
                            <p className='text-xs'>Urgence 24h/24 & 7j/7</p>
                        </div>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='p-3'>
                            <FaEnvelope size={15} className='text-white'/>
                        </div>
                        <div>
                            <h3 className='text-sm '>E-mail</h3>
                            <p className='text-xs '>malin@gmail.com</p>
                            <p className='text-xs'>Réponse sous 24h</p>
                        </div>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='p-3'>
                            <FaStopwatch size={15} className='text-white'/>
                        </div>
                        <div>
                            <h3 className='text-sm '>Horaires</h3>
                            <p className='text-xs '>Lundi - Vendredi : 8h - 17h</p>
                            <p className='text-xs '>Samedi : 8h - 13h</p>
                            <p className='text-xs '>Dimanche : Fermé</p>
                        </div>
                    </div>
                    <h2 className='text-center'>Nos réseaux sociaux</h2>
                    <div className='flex  space-x-5 py-4 px-10'>
                        <FaLinkedin className=' text-xl cursor-pointer hover:text-blue-400 transition-colors duration-300'/>
                        <FaInstagram className=' text-xl cursor-pointer hover:text-blue-400 transition-colors duration-300'/>
                        <FaTwitter className=' text-xl cursor-pointer hover:text-blue-400 transition-colors duration-300'/>
                        <FaFacebook className=' text-xl cursor-pointer hover:text-blue-400 transition-colors duration-300'/>
                    </div>
                    <div className='text-center text-white'>
                        <h1>Accès et transport</h1>
                        <div className='flex  space-x-5 py-4 px-10'>
                            <FaCar/>
                            <p className='text-xs'>Parking disponible sur place</p>
                        </div>
                        <div className='flex  space-x-5 px-10'>
                            <FaAccessibleIcon/>
                            <p className='text-xs'>Accessible en moto et voiture depuis tous les quartiers </p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
