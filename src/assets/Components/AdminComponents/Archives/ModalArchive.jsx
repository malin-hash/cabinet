import React, {useState} from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { archive } from '../../../../Apis/axios';


export default function ModalArchive({openArchive, fetchArchive}) {
const [formData, setFormData] = useState({folder: "", title: "", description: ""})
const [message, setMessage] = useState("")
const [doc, setDoc] = useState(false)
const [titles, setTitle] = useState(false)
const [desc, setDesc] = useState(false)
const [loading, setLoading] = useState(false)
const folder =  formData.folder;
const title =  formData.title;
const description =  formData.description;

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true)
  setTitle(false)
  setDesc(false)
  setDoc(false)
  if(title == []) {
    setLoading(false) 
    return setTitle(true)
  }   
  if(description == []) {
    setLoading(false) 
    return setDesc(true)
  }   
  if(folder == []) {
    setLoading(false) 
    return setDoc(true)
  }   
     
   try {
     const res = await archive(formData);
     setMessage(res.data.message);
     await fetchArchive()
   }catch (err) {
     setMessage(err.response?.data?.message || "Erreur de connexion")
   }finally{
     setLoading(false)
   }
}
  return (
    <div className='relative '>
        <div className='p-10 bg-slate-200 rounded-lg  top-0 left-0 right-0 lg:mx-64 md:mx-20 mx-5 mt-28 fixed z-50 shadow-2xl '>
            {
              message && (
                 <div className='text-center bg-green-200 p-4 rounded-md'>
                    <p>{message}</p>
                 </div>
              )
            }
           <AiOutlineClose onClick={openArchive} className=' top-4 right-4 absolute text-blue-600 hover:text-blue-900 cursor-pointer text-xl'/>
            <form onSubmit={handleSubmit} className='p-4'>
                <div className='grid grid-cols-2 gap-2'>
                    <input className={`${titles ? " w-full rounded-md mb-2 border-2 border-red-600 p-2": "w-full rounded-md mb-2 border-2 hover:border-blue-600 border-slate-600 p-2"}`} type="text" placeholder='Titre du document'   onChange={(e) => setFormData({...formData, title: e.target.value})}/>
                    <input className={`${desc ? " w-full rounded-md mb-2 border-2 border-red-600 p-2": "w-full rounded-md mb-2 border-2 hover:border-blue-600 border-slate-600 p-2"}`} type="text" placeholder='Description du document'   onChange={(e) => setFormData({...formData, description: e.target.value})}/>
                </div>
                <input accept=".jpg, .jpeg, .png, .docx, .pdf" className={`${doc ? "px-4 py-10 w-full rounded-md mb-2 border-2 border-red-600 p-2": "w-full rounded-md mb-2 border-2 hover:border-blue-600 border-slate-600 px-4 py-10"}`} type="file"   onChange={(e) => setFormData({...formData, folder: e.target.files[0]})}/>
                <div className='flex justify-center'>
                    <button className='py-2 px-8 rounded-lg text-white bg-blue-600 hover:bg-blue-800' type="submit">{loading ? 'Archivage ...': "Archiver"}</button>
                </div>
            </form>
        </div>
    </div>
  )
}

