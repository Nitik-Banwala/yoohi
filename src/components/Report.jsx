import React from 'react'
import Button from './common/Button'
import Image from 'next/image'

const Report = () => {
  return (
    <div className='px-4 mb-24'>
      <div className="max-w-[1138.1px] bg-[url('/assets/images/png/Reporting.png')] bg-center bg-cover bg-no-repeat flex flex-col lg:flex-row justify-between items-center mx-auto w-full rounded-4xl pt-[90.1px] pb-[106.1px] pl-8.5 pr-9.25 shadow-[0px_26px_27px_0px_#0000000A]">

        {/* Left Content */}
        <div className='max-w-[404.1px] text-center lg:text-start w-full'>
          <p className='uppercase font-medium text-base text-dark leading-100'>report</p>
          <h2 className='mt-2 font-normal text-black text-2xl sm:text-custom-3xl puls'>Reporting + <span className='font-semibold puls'>Analytics</span></h2>
          <p className='mt-5 text-black leading-150 max-w-[385.1px] opacity-70'>
            Track patient progress over time with compliance, pain, RPE, ROM and other key metrics
          </p>
          <Button
            text={'View the Matrics'}
            variants='first'
            className={'w-[171.1px] h-12.75 mt-9.25'}
          />
        </div>
        <div>
          <Image
            src={'/assets/images/png/reportone.png'}
            width={282}
            height={141}
            alt='rporter'
            className='reportone rounded-sm mt-[-41.1px] md:hidden block'
          />
        </div>
        {/* Right Images */}
        <div className='relative h-auto mt-20 lg:mt-0 mb-16 lg:mb-0 self-center'>
          {/* Overlay top-left image */}
          <Image
            src={'/assets/images/png/reportone.png'}
            width={282}
            height={141}
            alt='rporter'
            className='reportone absolute z-10 ml-[-70.1px] rounded-sm mt-[-41.1px] md:block hidden'
          />

          {/* Main center image */}
          <Image
            src={'/assets/images/png/reportmain.png'}
            width={549}
            height={354}
            alt='rporter'
            className='reportmain relative z-0 max-w-full h-auto'
          />

          {/* Overlay bottom-right image */}
          <Image
            src={'/assets/images/png/reporttwo.png'}
            width={201}
            height={152}
            alt='rporter'
            className='reporttwo absolute z-10 mt-[-90.1px] rounded-sm ml-[325.1px] md:block hidden'
          />
        </div>
        <div>
          <Image
            src={'/assets/images/png/reporttwo.png'}
            width={201}
            height={152}
            alt='rporter'
            className=' reporttwo  rounded-sm md:hidden block'
          />
        </div>
      </div>
    </div>
  )
}

export default Report