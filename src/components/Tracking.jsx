import React from 'react'
import Button from './common/Button'
import Image from 'next/image'
import { FEATURES } from '@/utils/helper'
import Icons from './common/Icons'
const Tracking = () => {
  return (
    <div className='px-4 my-24 '>
      <div className='max-w-[1138.1px] flex flex-col py-14.5 ms:pr-7 sm:pl-18 min-[1120px]:flex-row justify-between min-[1120px]:items-center mx-auto w-full rounded-4xl shadow-[0px_26px_27px_0px_#0000000A]'>
        <div className='min-[1120px]:mb-0 mb-3'>
          <div className=' sm:flex hidden absolute max-w-[552.1px] mt-[-42.1px] ml-[-38.1px] w-full flex-row  justify-between'>
            <Image
              src={'/assets/images/png/trackingone.png'}
              width={217}
              height={124}
              alt='main' className='trackingone' />
            <Image
              src={'/assets/images/png/pychart.png'}
              width={120}
              height={120}
              alt='main' />
          </div>
          <Image
            src={'/assets/images/png/trackingmain.png'}
            width={490}
            height={287}
            alt='main' className='trackingmain' />
        </div>
        <div className='min-[1120px]:mt-0 mt-5'>
          <p className='text-dark font-medium text-base leading-[100%]'>TRACKING</p>
          <h2 className='text-custom-3xl font-normal leading-120 text-black max-w-[468.1px] mb-5 w-full mt-2'>Cutting Edge Motion <span className='font-semibold'>Tracking/ Feedback</span></h2>
          {FEATURES.map((item, index) => (
            <div
              key={index}
              className='mt-2.25'
            >
            <div className='min-[1120px]:max-w-[432.1px] w-full text-base font-normal leading-150 flex flex-row items-center gap-5 '> <span><Icons icon={'checkbox'}/></span> <h3 className='text-base font-normal leading-150 text-black/70'>{item.title}</h3> </div>
            </div>
          ))}
          <Button
          text={'Test it Yourself'}
          variants='first'
          className={'w-45 h-12.75 mt-10'}
          />
        </div>
      </div>
    </div>
  )
}

export default Tracking
