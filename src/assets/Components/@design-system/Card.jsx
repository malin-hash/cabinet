import React from 'react'

export default function Card({id, name, number, color, avatar}) {
  return (
    <div className='py-4 px-6 rounded-lg bg-slate-100 shadow-2xl mb-2' key={id}>
        <p className={`font-semibold text-sm text-${color}-600 mb-2`}>{name}</p>
        <div className='flex justify-between'>
            <p className={`font-semibold text-lg `}>{number}</p>
            <div className={`p-4 rounded-md bg-${color}-100`}>
                 <p className={` text-3xl text-${color}-600 `}>{avatar}</p>
            </div>
        </div>
    </div>
  )
}
