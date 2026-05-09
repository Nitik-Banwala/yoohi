'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { KNOWSDATA } from '@/utils/helper'

const Knowmore = () => {
 const [activeImage, setActiveImage] = useState(1)

 return (
  <div className='overflow-hidden px-4'>
   <div className='max-w-[615.1px] mb-13.75 mx-auto flex flex-col items-center justify-center text-center'>
    <p className='text-dark font-medium text-base uppercase leading-100'>
     Know More
    </p>
    <h2 className='mt-4 font-normal text-3xl sm:text-custom-5xl puls leading-120'>
     And Used by the Biggest{' '}
     <span className=' puls font-semibold'>
      Figures in Sports and Rehab
     </span>
    </h2>
   </div>
   <div className=' max-w-[946.1px] h-[474.1px] w-full mx-auto rounded-xl overflow-hidden'>
    <Image
     src={KNOWSDATA[activeImage].image}
     width={946}
     height={474}
     alt='main-image'
     className='w-full h-full object-cover duration-300'
    />
   </div>
   <div className='max-w-[750.1px] h-[144.1px] overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-[#888] scrollbar-track-transparent hover:scrollbar-thumb-[#555] min-[770.1px]:h-[144.1px] mt-13 mb-26.75 gap-5.5 mx-auto flex flex-nowrap sm:justify-center items-center'>
  {KNOWSDATA.map((item, index) => {
    const isActive = activeImage === index

    return (
      <div
        key={index}
        onClick={() => setActiveImage(index)}
        className={`
          cursor-pointer overflow-hidden rounded-sm transition-all duration-300 flex-shrink-0
          ${
            isActive
              ? 'min-w-[193.1px] w-[193.1px] h-[144.1px]'
              : 'w-[152.1px] min-w-[152.1px] h-[114.1px]'
          }
        `}
      >
        <Image
          src={item.image}
          width={193}
          height={144}
          alt='patients'
          className='h-[144.1px] object-cover rounded-sm'
        />
      </div>
    )
  })}
</div>
  </div>
 )
}

export default Knowmore