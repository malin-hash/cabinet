import React from 'react'
import { AiFillCalendar, AiFillFolderOpen, AiOutlineFolder, AiOutlineUser } from 'react-icons/ai'
import Card from '../@design-system/Card'
import { FaDeleteLeft } from 'react-icons/fa6'
import { FaEye } from 'react-icons/fa'

export default function HomePage() {
  const infos = [
    {id:1, name:"Nombre des Clients", number: 247, color:"blue", avatar: <AiOutlineUser/>},
    {id:2, name:"Dossier en cours", number: 89, color:"green", avatar: <AiFillFolderOpen/>},
    {id:3, name:"Rendez-vous en Attente", number: 34, color: "yellow", avatar:<AiFillCalendar/>},
    {id:4, name:"Nombre documents archivés", number: 1000, color: "pink", avatar:<AiOutlineFolder/>},
  ]
  return (
    <div className='md:px-8 px-2 py-2 sm:-mt-16 md:mt-16'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 mb-3'>
        {
         infos.map((info) => (
          <Card id={info.id} name={info.name} number={info.number} color={info.color} avatar={info.avatar} />
         ))
        }
      </div>
    </div>
  )
}
