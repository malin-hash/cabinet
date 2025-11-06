import React, {useState} from 'react';
import { RegisterUser } from '../../../Apis/axios';
import { AiOutlineClose} from 'react-icons/ai'


export default function RegistrerPage() {
const [formData, setFormData] = useState({username: "", firstname: "", function: "", email: "", address: ""})
const [message, setMessage] = useState("")
const [mail, setMail] = useState(false)
const [name, setName] = useState(false)
const [firstname, setFirstname] = useState(false)
const [address, setAddress] = useState(false)
const [loading, setLoading] = useState(false)
const names =  formData.username;
const firstnames =  formData.firstname;
// const functions =  formData.function;
const email =  formData.email;
const addres =  formData.address;

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true)
  setName(false)
  setFirstname(false)
  setMail(false)
  setAddress(false)
  if(names == []) {
    setLoading(false) 
    return setName(true)
  }   
  if(firstnames == []) {
    setLoading(false) 
    return setFirstname(true)
  }   
  if(email == []) {
    setLoading(false) 
    return setMail(true)
  }
  if(addres == []) {
    setLoading(false) 
    return setAddress(true)
  }   
     
   try {
     const res = await RegisterUser(formData);
     setMessage(res.data.message);
   }catch (err) {
     setMessage(err.response?.data?.message || "Erreur de connexion")
   }finally{
     setLoading(false)
   }
}
  return (
    <div className='lg:px-36 md:px-16 px-3 -mt-28 md:mt-0'>
        <div className='p-10 bg-white rounded-lg  top-0 '>
            
            {
              message && (
                 <div className='text-center bg-red-200 p-4 rounded-md mb-2'>
                    <p>{message}</p>
                 </div>
              )
            }
            <form onSubmit={handleSubmit} className='p-4'>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                  <div>
                    <label htmlFor="" className='text-gray-500'>Nom <span className='text-red-600 text-xl'>*</span></label>
                    <input className={`${name ? "w-full rounded-md mb-2 border-2 border-red-600 p-2": "w-full rounded-md mb-2 border-2 hover:border-blue-600 border-slate-600 p-2"}`} type="text" placeholder="Nom de l'avocat"  onChange={(e) => setFormData({...formData, username: e.target.value})}/>
                  </div>
                  <div>
                    <label htmlFor="" className='text-gray-500'>Prénom <span className='text-red-600 text-xl'>*</span></label>
                    <input className={`${firstname ? "w-full rounded-md mb-2 border-2 border-red-600 p-2": "w-full rounded-md mb-2 border-2 hover:border-blue-600 border-slate-600 p-2"}`} type="text" placeholder="Prénom de l'avocat"  onChange={(e) => setFormData({...formData, firstname: e.target.value})}/>
                  </div>
                  <div>
                    <label htmlFor="" className='text-gray-500'>Fonction <span className='text-red-600 text-xl'>*</span></label>
                    <input className="w-full rounded-md mb-2 border-2 hover:border-blue-600 border-slate-600 p-2" type="text" placeholder="Fonction de l'avocat"  onChange={(e) => setFormData({...formData, function: e.target.value})}/>
                  </div>
                  <div>
                    <label htmlFor="" className='text-gray-500'>E-mail <span className='text-red-600 text-xl'>*</span></label>
                    <input className={`${mail ? "w-full rounded-md mb-2 border-2 border-red-600 p-2": "w-full rounded-md mb-2 border-2 hover:border-blue-600 border-slate-600 p-2"}`} type="email" placeholder="E-mail de l'avocat"  onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                  </div>
                </div>
                <div>
                    <label htmlFor="" className='text-gray-500'>Adresse <span className='text-red-600 text-xl'>*</span></label>
                    <input className={`${address ? "w-full rounded-md mb-2 border-2 border-red-600 p-2": "w-full rounded-md mb-2 border-2 hover:border-blue-600 border-slate-600 p-2"}`} type="text" placeholder="Adresse de l'avocat"  onChange={(e) => setFormData({...formData, address: e.target.value})}/>
                  </div>
                <div className='flex justify-center'>
                    <button className='py-2 px-8 rounded-lg text-white bg-blue-600 hover:bg-blue-800' type="submit">{loading ? 'Enrégistrement ...': "Nouvel avocat"}</button>
                </div>
            </form>
        </div>
    </div>
  )
}
