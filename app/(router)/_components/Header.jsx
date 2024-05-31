import { Button } from '@/components/ui/button'
import { BellDot, Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='flex p-5 bg-white justify-between'>

      {/*Search Textfield*/}
      <div className='flex gap-4 border rounded-md p-2'>
        <Search className='h-5 w-5'/>
        <input className="outline-none" type="text" placeholder='Search...'/>
      </div>

      {/*Get Started Button*/}
      <div className='flex gap-4 items-center'>
        <BellDot className='text-gray-600'/>
        <Button variant="default">Get Started</Button>
      </div>


    </div>
  )
}

export default Header