import React from 'react'
import Button from './common/Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/assets/images/png/hero.png')] flex items-center justify-center min-h-[828.1px] w-full bg-no-repeat bg-center bg-cover px-4 sm:px-6 lg:px-8">
        <div className='flex flex-col justify-center items-center w-full'>
          <h1 className='font-normal text-custom-2xl sm:text-custom-3xl lg:text-custom-7xl max-w-[830.1px] text-center puls leading-110 px-2'>
            <span className='puls font-extrabold'>Next Generation </span>
            Patient Engagement and RTM Solution✨
          </h1>
          <p className='text-base sm:text-xl lg:text-2xl font-normal text-black/70 text-center mt-2 px-4'>
            Industry leading AI motion-tracking technology
          </p>
          <div className='max-w-[428.1px] shadow-[0px_4px_15px_0px_#07678726] flex flex-row justify-between items-center w-full h-[56.1px] rounded-sm mt-12.25 bg-white mx-4'>
            <input
              type="text"
              placeholder='Enter Your Email'
              className='ml-2.25 border-0 outline-none focus:outline-none focus:ring-0 placeholder:text-whity text-whity text-sm sm:text-base font-medium placeholder:font-medium min-w-0 flex-1'
            />
            <Button
              variants='first'
              text={'Get Started'}
              className={'h-11.25 w-30.75 mr-1 shrink-0'}
            />
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-[1051.1px] w-full -mt-25 px-4 sm:px-6 lg:px-0'>
        <Image
          src={'/assets/images/png/workout.png'}
          width={1051}
          height={582}
          alt='dite'
          className='w-full h-auto'
        />
      </div>
    </>
  )
}

export default Hero