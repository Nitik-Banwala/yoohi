import React from 'react'
import { PARTNERSDATA } from '@/utils/helper'
import Image from 'next/image'
const Partners = () => {
  return (
    <div className='px-4'>
      <div className='max-w-[684.1px] mx-auto flex flex-col justify-center text-center mt-21.75'>
        <p className='text-dark font-medium text-base uppercase leading-[100%]'>
          PARTNERS
        </p>
        <h2 className='mt-4 max-w-[684.1px] font-normal text-custom-5xl puls leading-120'>
          Recognized by Leading{' '}
          <span className='font-semibold puls '>
            Healthcare Institutions
          </span>
        </h2>
      </div>
      <div className='max-w-285 mx-auto flex flex-row items-center justify-center flex-wrap pt-9.25 pb-23.75 gap-6'>
        {PARTNERSDATA.map((item,index) => {
          return (
            <div
              key={index}>
              <div className='w-[208.1px] flex items-center justify-center h-[137.87px] rounded-sm border shadow-[0px_4px_20px_rgba(0,0,0,0.06)] border-black/10'>
                <Image
                src={item.image}
                 width={96}
                 height={90}
                 alt='images'
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Partners
