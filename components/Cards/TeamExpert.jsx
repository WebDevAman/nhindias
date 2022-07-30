import Image from 'next/image'
import React from 'react'

const TeamExpert = ({ expert }) => {
  return (
    <div className='flex flex-col max-w-[17rem] items-center  space-y-3 overflow-hidden relative'>
      <img src={expert.image} className='object-cover w-full min-h-[27rem] h-full ease-in-out transition-all duration-300 hover:scale-105' />
      <div className="bg-themeColor absolute h-fit text-white text-center py-2 w-full bottom-0">
        <h2 className='font-bold text-lg lg:text-xl'> {expert.name} </h2>
        <h3>{expert.role}</h3>
      </div>
    </div>
  )
}

export default TeamExpert