import React, {useEffect, useState} from 'react'
import {AiOutlineUserAdd, AiOutlineUserDelete, AiOutlineUsergroupAdd, AiOutlineUsergroupDelete } from 'react-icons/ai'
import { FaDeleteLeft } from 'react-icons/fa6'
import { FaEdit} from 'react-icons/fa'
import { client, getClient, deleteClient } from '../../../../Apis/axios'

export default function ClientPage() {
  // const [newClient, setNewClient] = useState(false)
  // const openClient = () => setNewClient(!newClient)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [firstname, setFirstname] = useState("")
  const [nationality, setNationality] = useState("")
  const [sex, setSex] = useState("")
  const [address, setAddress] = useState("")
  const [fichier, setFichier] = useState(null)
  const [clients, setClients] = useState([])
  
  // Fetch client
  const fetchClient = async () => {
    const res = await getClient()
    setClients(res.data)
  };
  useEffect(() => {
    fetchClient()
  }, [])
  
  // Delete client
  
  const CLientDelete = async (id) => {
    window.confirm('voulez-vous Supprimer ce client ?')
    const res = await deleteClient(id)
    setMessage(res.data.message || "Client supprimé" );
    return setClients((prev) => prev.filter((t) => t.id != id ))
  };

  
  // Submit client
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    
    const formData = new FormData()
    formData.append("name", name)
    formData.append("firstname", firstname)
    formData.append("nationality", nationality)
    formData.append("sex", sex)
    formData.append("address", address)
    formData.append("fichier", fichier)
     
    try {
      const res = await client(formData)
      setMessage(res.data.message);
      setName("")
      setFirstname("")
      setNationality("")
      setAddress("")
      setSex("")
      setFichier([])
      await fetchClient()
    }catch (err) {
      setMessage(err.response?.data?.message || "Erreur de connexion")
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className='px-8 py-2 md:mt-0 sm:-mt-12'>
      <div className='flex justify-between gap-3 md:flex-row sm:flex-col-reverse'>
        <div className='p-6 shadow-xl flex-1'>
          {/* <div className='flex justify-between'>
              <p className='font-bold'>Gestion des client</p>
              <button onClick={openClient} className='p-2 text-sm rounded-lg text-white bg-blue-600  hover:bg-blue-800 duration-300 transition-colors'>
                {
                  newClient ?
                  (
                    <p>Revenir sur les détails</p>
                  ):
                  <p className='flex'>
                     <AiOutlineUserAdd className='text-xl'/>
                     <p>Nouveau Client</p>
                  </p>
                }
               
              </button>
          </div> */}
          <div>
          
            <table className='w-full border-collapse mt-2 text-sm'>
              <thead>
                  <tr className='bg-gray-100 text-left text-gray-600'>
                    <th className='py-2 px-3'>Nom</th>
                    <th className='py-2 px-3'>Prénom</th>
                    <th className='py-2 px-3'>Adresse</th>
                    <th className='py-2 px-3'>Action</th>
                  </tr>
              </thead>
              <tbody>
                    {
                      clients.map((clt) => (
                    <tr key={clt.id}>
                        <td className='p-3 font-medium text-gray-800'>{clt.name}</td>
                        <td className='p-3 font-medium text-gray-800'>{clt.firstname}</td>
                        <td className='p-3 font-medium text-gray-800'>{clt.address}</td>
                        <td className='px-3 py-4 font-medium text-gray-800 flex space-x-3'>
                          <AiOutlineUserDelete onClick={() => deleteClient(clt.id)} className='text-red-600 text-lg cursor-pointer hover:text-red-800 duration-300 transition-colors'/>
                          <FaEdit className='text-green-600 text-lg cursor-pointer hover:text-green-800 duration-300 transition-colors'/>
                        </td>
                    </tr>
                      ))
                    }
              </tbody>
            </table>
          </div>
        </div>
        {/* {
          newClient ? 
          (  */}
            <div className='p-2'>
              <h1 className='text-md text-center font-bold mb-2'>Ajouter un client</h1>
              {
              message && (
                 <div className='text-center bg-green-100 p-4 rounded-md mb-3'>
                    <p className='text-green-600'>{message} 👨</p>
                 </div>
              )
            }
              <form onSubmit={handleSubmit} >
                <div className='grid grid-cols-2 gap-2 mb-2'>
                  <input type="text" value={name}  placeholder='Votre Nom' className='border-2 border-black hover:border-blue-700 w-full rounded-lg p-2' onChange={(e) => setName(e.target.value)}/>
                  <input type="text" value={firstname}  placeholder='Votre Pénom' className='border-2 border-black hover:border-blue-700 w-full rounded-lg p-2' onChange={(e) => setFirstname(e.target.value)}/>
                </div>
                <div className='grid grid-cols-2 gap-2 mb-2'>
                  <input type="text" value={nationality} placeholder='Votre Nationalité' className='border-2 border-black hover:border-blue-700 w-full rounded-lg p-2' onChange={(e) => setNationality(e.target.value)}/>
                  <select type="text" value={sex} placeholder='Votre sexe' className='border-2 border-black hover:border-blue-700 w-full rounded-lg p-2'  onChange={(e) => setSex(e.target.value)}>
                    <option  className='text-gray-500'>Votre Sexe</option>
                    <option  className='text-gray-500' value="masculin">Masculin</option>
                    <option  className='text-gray-500' value="feminin">Feminin</option>
                  </select>
                </div>
                  <input type="text" value={address} placeholder='Votre adresse' className='border-2 mb-2 border-black hover:border-blue-700 w-full rounded-lg p-2' onChange={(e) => setAddress(e.target.value)}/>
                  <input accept=".jpg, .jpeg, .png, .docx, .pdf" type="file"  placeholder='Votre dossier' className='border-2 mb-2 border-black hover:border-blue-700 w-full rounded-lg p-5' onChange={(e) => setFichier(e.target.files[0])}/>
                  <div className='flex justify-center'>
                    <button className='p-3 rounded-lg text-white bg-blue-600 hover:bg-blue-800'>{loading ? 'Chargement ...': 'Ajouter le Client'}</button>
                  </div>
              </form>
            </div>
          {/* ): */}
        {/* <div className='p-2  flex justify-between gap-3 h-32'> */}
          {/* <div className=' shadow-xl p-4 rounded-lg'> */}
            {/* <p className='text-center font-semibold mb-3'>Nombre de client satisfait</p> */}
            {/* <div className='flex justify-between'> */}
              {/* <div className='p-4 rounded-lg bg-green-300'> */}
                {/* <AiOutlineUsergroupAdd className='text-xl text-green-700'/> */}
              {/* </div> */}
              {/* <p className='font-extrabold text-2xl '>234</p> */}
            {/* </div> */}
          {/* </div> */}
          {/* <div className=' shadow-xl p-4 rounded-lg'> */}
            {/* <p className='text-center font-semibold mb-3'>Nombre de client insatisfait</p> */}
            {/* <div className='flex justify-between'> */}
              {/* <div className='p-4 rounded-lg bg-red-300'> */}
                {/* <AiOutlineUsergroupDelete className='text-xl text-red-600'/> */}
              {/* </div> */}
              {/* <p className='font-extrabold text-2xl '>20</p> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div>  */}
        {/* } */}
      </div>
    </div>
  )
}
