import React, { useEffect, useState } from 'react'
import { getRdv } from '../../../../Apis/axios'
export default function RdvPage() {
  const [rdvs, setRdvs] = useState([]) 
  const [message, setMessage] = useState("")
  
  const fetchRdv = async () => {
    try{
      const res = await getRdv()
      setRdvs(res.data)
    }catch{
      setMessage("Aucune donnée")
    }
  }
  
  useEffect(() => {
    fetchRdv()
  }, [])
  
  return (
    <div className='p-4 bg-white rounded-l-md rounded-b-md top-12 right-20 fixed z-50 shadow-2xl text-black w-72 h-auto'>
      <p className='text-center text-blue-600 mb-5'>Tous les rendez-vous</p>
      {
        rdvs.map((rd) => (
          <div key={rd.id}>
              <div className='flex justify-between'>
                <div>
                    <p className='text-sm text-gray-700'>{rd.name}</p>
                    <p className='text-xs text-gray-500'>{rd.firstname}</p>
                </div>
                <div className='mb-2'>
                    <p className='text-sm text-green-700'>{rd.date}</p>
                    <p className='text-xs text-yellow-500'>{rd.time}</p>
                </div>
              </div>
              <hr className='border border-gray-400' />
          </div>
     )) }
     {
      <div className='w-full bg-red-200 text-center'>{message}</div>
     }
    </div>
  )
}
