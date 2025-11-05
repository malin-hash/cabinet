import React, {useState} from 'react';
import { LoginUser } from '../../../Apis/axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose} from 'react-icons/ai'


export default function ModalConnexion({close}) {
const [formData, setFormData] = useState({email: "", password_hash: ""})
const [message, setMessage] = useState("")
const [mail, setMail] = useState(false)
const [pass, setPass] = useState(false)
const [loading, setLoading] = useState(false)
const navigate = useNavigate()
const email =  formData.email;
const password_hash =  formData.password_hash;

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true)
    if (!email == []){
      setMail(false)
      if (!password_hash == []){
        setPass(false)
        try {
            const res = await LoginUser(formData);
            setMessage(res.data.message);
            navigate('/acceuil')
          }catch (err) {
            setMessage(err.response?.data?.message || "Erreur de connexion")
          }finally{
            setLoading(false)
          }
      }else{
        setPass(true)
        setLoading(false)
        setMessage("")
        
      }
    }else{
      setMail(true)
      setLoading(false) 
      setMessage("")
    }
}
  return (
    <div className='relative'>
        <div className='p-10 bg-white rounded-lg  top-0 left-0 right-0 lg:mx-72 mx-5 mt-28 fixed z-50 shadow-2xl'>
            <div className='p-2 flex items-center justify-center'>
                <img src="/justice.png" alt="" className='h-14 w-28'/>
                <div>
                   <p className='text-blue-600 text-sm font-mono'>PABINGUI <span className='text-yellow-600'>&</span> Associés</p>
                   <p className='text-blue-600 text-xs font-thin text-center -mt-1'>Justise - Défense - Droit</p>
                </div>
            </div>
          <button onClick={close}><AiOutlineClose className='text-red-600 absolute top-3 right-3 text-xl hover:text-red-700'/></button>
            
            {
              message && (
                 <div className='text-center bg-red-200 p-4 rounded-md'>
                    <p>{message}</p>
                 </div>
              )
            }
            <form onSubmit={handleSubmit} className='p-4'>
                <label htmlFor="" className='text-gray-500'>Email <span className='text-red-600 text-xl'>*</span></label>
                <input className={`${mail ? "w-full rounded-md mb-2 border-2 border-red-600 p-2": "w-full rounded-md mb-2 border-2 hover:border-blue-600 border-slate-600 p-2"}`} type="email" placeholder='exemple@gmail.com'  onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                <label htmlFor="" className='text-gray-500'>Mot de passe <span className='text-red-600 text-xl'>*</span></label>
                <input className={`${pass ? "w-full rounded-md mb-2 border-2 border-red-600 p-2": "w-full rounded-md mb-2 border-2 hover:border-blue-600 border-slate-600 p-2"}`} type="password" placeholder='*******'  onChange={(e) => setFormData({...formData, password_hash: e.target.value})}/>
                <div className='flex justify-center'>
                    <button className='py-2 px-8 rounded-lg text-white bg-blue-600 hover:bg-blue-800' type="submit">{loading ? 'Enrégistrement ...': "Se connecter"}</button>
                </div>
                <p className='text-blue-600 hover:text-blue-800 text-center cursor-pointer text-sm mt-3'>Mot de passe oublié ?</p>
            </form>
        </div>
    </div>
  )
}
