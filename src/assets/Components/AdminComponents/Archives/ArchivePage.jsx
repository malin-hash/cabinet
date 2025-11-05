import React, { useState, useEffect }  from 'react'
import { AiFillAccountBook, AiFillDelete, AiFillEdit, AiOutlineDownload, AiOutlinePrinter, AiOutlineShareAlt } from 'react-icons/ai'
import { FaFileArchive } from 'react-icons/fa'
import ModalArchive from './ModalArchive'
import { getArchive, deleteArchive } from '../../../../Apis/axios'
import { FiEdit, FiPrinter, FiShare2, FiTrash2 } from 'react-icons/fi'

export default function ArchivePage() {
const [docs, setDocs] = useState([])
  
  // Fetch archive
  const fetchArchive = async () => {
    const res = await getArchive()
    setDocs(res.data)
  };
  useEffect(() => {
    fetchArchive()
  }, [])
  
  // Delete client
  
  const ArchiveDelete = async (id) => {
    confirm('voulez-vous Supprimer cet archive ?')
    const res = await deleteArchive(id)
    setMessage(res.data.message || "Client supprimé" );
    setDocs((prev) => prev.filter((t) => t.id != id ))
  };
  const [open, setOpen] = useState(false)
  const openArchive = () => setOpen(!open)
  return (
    <div className='flex lg:flex-row sm:flex-col md:flex-row space-x-2 py-2 px-8 justify-between bg-slate-100 sm:-mt-16 md:mt-0 '>
      {
        open && (
          <ModalArchive openArchive={openArchive} fetchArchive={fetchArchive}/>
        )
      }
      <div className='flex-1'>
        {
          docs.map((doc) => (
          <div key={doc.id} className='flex justify-between p-3 bg-white rounded-md mb-2'>
            <div className='flex space-x-2'>
                <div className='p-3 bg-blue-300 text-blue-700 rounded-md'>
                  <FaFileArchive className='text-sm'/>
                </div>
                <div>
                  <p className='text-sm font-bold'>{doc.title}</p>
                  <p className='text-xs'>{doc.description}</p>
                </div>
            </div>
            <ul className='text-gray-700 text-sm flex space-x-2'>
                <li className='flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer'>
                    <FiEdit className='text-blue-500'/> 
                </li>
                <li className='flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer'>
                    <FiShare2 className='text-green-500'/> 
                </li>
                <li className='flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer'>
                    <FiPrinter className='text-indigo-500'/> 
                </li>
                <li onClick={() => ArchiveDelete(doc.id)} className='flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer'>
                    <FiTrash2 className='text-red-500' /> 
                </li>
            </ul>
         </div>
          ))
        }
      </div>
      <div className='p-2 w-72 sm:w-full'>
        <div className='bg-white rounded-lg shadow-xl py-2 px-5 mb-4'>
            <p className='text-sm text-gray-600 mb-2 font-bold'>Statistique</p>
            <div className='p-2 flex justify-between'>
              <p className='text-xs text-gray-600'>Total documents :</p>
              <p className='text-xs text-gray-600'>12345</p>
            </div>
            <div className='p-2 flex justify-between'>
              <p className='text-xs text-gray-600'>Ce mois :</p>
              <p className='text-xs text-gray-600'>12</p>
            </div>
            <div className='p-2 flex justify-between'>
              <p className='text-xs text-gray-600'>Espace utilisé :</p>
              <p className='text-xs text-gray-600'>5 GB</p>
            </div>
        </div>
        <div className='flex justify-center'>
          <button onClick={openArchive} className='py-2 px-4 flex space-x-2 cursor-pointer bg-blue-600  hover:bg-blue-700 rounded-lg '>
            <AiOutlineDownload className='text-white'/>
            <p className='text-sm text-white'>Archiver un document</p>
          </button>
        </div>
      </div>
    </div>
  )
}
