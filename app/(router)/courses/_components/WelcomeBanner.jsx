import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
      <Image src={"/bull_ai.png"} alt="bull" width={120} height={120} />

      <div>
        <h2 className='font-bold text-[24px]'>
            Welcome to <span className='text-primary'>Forex Artificial Intelligence</span> Academy
        </h2>

        <h2  className='font-medium text-[18px] text-gray-600'>
          Explore, Learn and Trade with AI
        </h2>
      </div>
    </div>
  )
}

export default WelcomeBanner