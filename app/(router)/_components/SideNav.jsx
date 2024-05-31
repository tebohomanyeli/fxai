import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideNav() {
  const menu = [
    {
      id: 1,
      name: 'All courses',
      icon: BookOpen,
    },
    {
      id: 2,
      name: 'Membership',
      icon: BadgeIcon,
    },
    {
      id: 3,
      name: 'Be Instructor',
      icon: GraduationCap,
    },
  ]

  return (
    <div className='p-5 bg-white shadow-sm border h-screen'>
      {/*Logo*/}
      <Image src="/Logo_v1.svg" alt="logo" width={100} height={20} />
 

      <hr className='mt-5' />


      {/*Menu List*/}
      <div className='mt-10'>
        {menu.map((item, index) => (
          <div className='group flex gap-3 
          mt-2 p-3 text-[18px] items-center
          text-gray-600 cursor-pointer
          hover:bg-primary
          hover:text-white
          rounded-md
          transition-all ease-in-out duration-200
          '>
            <item.icon className='group-hover:animate-pulse'/>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideNav