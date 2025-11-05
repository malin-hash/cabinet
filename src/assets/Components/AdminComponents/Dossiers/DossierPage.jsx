import React, {useState, useEffect, useRef} from 'react'
import { AiFillCloseSquare, AiFillFolderOpen, AiOutlineFullscreenExit, AiOutlineSearch, AiTwotoneFilePdf } from 'react-icons/ai'
import { FiDownload, FiEdit, FiShare2, FiTrash2 } from 'react-icons/fi'
import { MdMoreHoriz, MdMoreVert, MdStorage } from 'react-icons/md'
import { getClient, deleteClient } from '../../../../Apis/axios'
export default function DossierPage() {
    // Config parameter
    const [parameter, SetParameter] = useState(false)
    const openParameter = (id) => {
      SetParameter(parameter === id ? null : id)
    }
    const [size, SetSize] = useState(false)
    const [name, SetName] = useState(false)
    const [date, SetDate] = useState(false)
    const openSize = () => SetSize(!size)
    const openName = () => SetName(!name)
    const openDate = () => SetDate(!date)
    // Close menu
    const menuRef = useRef(null)
    useEffect(() => {
      const click = (event) => {
        if(menuRef.current && !menuRef.current.contains(event.target)){
          SetParameter(null)
        }
      };
      document.addEventListener("mousedown", click);
      return () => document.removeEventListener("mousedown", click)
    }, [])
    //  FOlder
      const [folders, setFolders] = useState([])
      
      // Fetch folder
      const fetchClient = async () => {
        const res = await getClient()
        setFolders(res.data)
      };
      useEffect(() => {
        fetchClient()
      }, [])
      // Delete folder 
      const CLientDelete = async (id) => {
          confirm('voulez-vous Supprimer ce client ?')
          const res = await deleteClient(id)
          setMessage(res.data.message || "Client supprimé" );
          setFolders((prev) => prev.filter((t) => t.id != id ))
        };
      
  return (
    <div className='flex lg:flex-row flex-col-reverse gap-3 py-2 px-8 justify-between lg:mt-0 md:mt-0 sm:-mt-16'>
        <div className='flex-1'>
          <form className='relative flex mb-3' >
            <input type="search" placeholder='Rechercher un dossier ...' className='py-2 px-2 indent-16 border-2 border-black w-full rounded-l-lg'/>
            <button className='p-2 text-white bg-blue-600 rounded-r-lg hover:bg-blue-800 duration-300 transition-colors'>Chercher</button>
            <AiOutlineSearch className='absolute top-3 left-3 text-2xl'/>
          </form>
          <div className='p-2 grid grid-cols-4 gap-2'>
          {
            folders.map((folder) => (  
              <div key={folder.id}>
                  <div className='rounded-lg shadow-2xl bg-slate-200 flex items-center justify-center p-6 relative'>
                      <div onClick={() => openParameter(folder.id)} className='absolute right-2 top-2 cursor-pointer'>
                        {
                          parameter  === folder.id ? 
                          (
                            <AiFillCloseSquare className='text-red-600 hover:text-red-800'/>
                          ):
                          <MdMoreVert className='hover:text-blue-600'/>
                        }
                      </div>
                      <AiTwotoneFilePdf className='text-5xl text-red-500'/>
                      {
                        parameter === folder.id && (
                          <div className='bg-white shadow-xl py-4 px-2 absolute right-2 top-8 rounded-md z-10 w-36 '>
                            <ul className='text-gray-700 text-sm'>
                                <li className='flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer'>
                                    <FiEdit className='text-blue-500'/> Modifier
                                </li>
                                <li className='flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer'>
                                    <FiShare2 className='text-green-500'/> Partager
                                </li>
                                <li className='flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer'>
                                    <FiDownload className='text-indigo-500'/> Télécharger
                                </li>
                                <li onClick={() => CLientDelete(folder.id)} className='flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer'>
                                    <FiTrash2 className='text-red-500' /> Supprimer
                                </li>
                            </ul>
                          </div>
                        )
                      }
                  </div>
                  {
                    name && (
                      <p className='text-xs'>dossier de :{folder.name}</p>
                    )
                  }
                  {
                    date && (
                      <p className='text-xs'>{folder.dateFolder}</p>
                    )
                  }
                  {
                    size && (
                      <p className='text-xs'>{folder.sizeFolder}</p>
                    )
                  }
              </div>
             ))
          }
          </div>
        </div>
        <div className='shadow-lg'>
            <div className='flex-1 p-2 grid grid-cols-2 gap-2 mb-2'>
              <div className=' shadow-2xl p-2 rounded-lg'>
                  <p className='text-center font-semibold mb-3 text-sm'>Nombre total des dossiers client</p>
                  <div className='flex justify-between'>
                    <div className='p-2 rounded-lg bg-amber-100'>
                      <AiFillFolderOpen className='text-4xl text-amber-700'/>
                    </div>
                    <p className='font-bold text-xl '>20</p>
                  </div>
              </div>
              <div className=' shadow-2xl p-2 rounded-lg'>
                  <p className='text-center font-semibold mb-3 text-sm'>Stockage</p>
                  <div className='flex justify-between'>
                    <div className='p-2 rounded-lg bg-amber-100'>
                      <MdStorage className='text-4xl text-amber-700'/>
                    </div>
                    <p className='font-bold text-xl '>20 GO</p>
                  </div>
              </div>
            </div>
            <p className='text-center font-semibold text-sm'>Parametre d'affichage</p>
            <div className='grid grid-cols-2 gap-1 text-sm'>
              <div className='px-3 py-1 flex space-x-2'>
                  <input onClick={openSize} type="checkbox" className='border-2 border-black w-5 cursor-pointer' />
                  <label className='font-semibold text-md'>Taille du dossier</label>
              </div>
              <div className='px-3 py-1 flex space-x-2'>
                  <input onClick={openName} type="checkbox" className='border-2 border-black w-5 cursor-pointer' />
                  <label className='font-semibold text-md'>Nom du dossier</label>
              </div>
              <div className='px-3 py-1 flex space-x-2'>
                  <input onClick={openDate} type="checkbox" className='border-2 border-black w-5 cursor-pointer' />
                  <label className='font-semibold text-md'>Date creation du dossier</label>
              </div>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}
