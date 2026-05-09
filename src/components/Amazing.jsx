"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import Button from './common/Button'
import { SLIDER_DATA } from '@/utils/helper'
import { LIBRARY_DATA } from '@/utils/helper'
import Icons from './common/Icons'
import Image from 'next/image'

function Amazing() {
    const [swiperInstance, setSwiperInstance] = useState(null)

    return (
        <>
            <div className='max-w-284.5 z-30  mx-auto max-[1350px]:px-4 mt-30 w-full'>
                <div className='bg-white shadow-[0_26px_27px_0_rgba(0,0,0,0.04)] pt-15.25 pb-[60.25px] sm:pl-[30.64px] sm:pr-[30.64px] xl:pr-0 rounded-4xl'>
                    <div className='flex flex-col xl:flex-row gap-10 xl:gap-31 max-w-[1138.1px]'>

                        {/* Left Content */}
                        <div className='shrink-0'>
                            <p className='font-inter font-medium text-base uppercase leading-118 text-dark'>Library</p>
                            <h3 className='pt-2 pb-5.25  puls font-normal text-2xl sm:text-custom-3xl leading-110 text-black'>
                                Extensive Exercise <span className='font-semibold puls'>Library</span>
                            </h3>
                            <div className='flex flex-col gap-2.25 max-w-117 mb-9.25'>
                                {LIBRARY_DATA.map((item, i) => (
                                    <div key={i} className='flex items-center gap-3.75'>
                                        <span>
                                            <Icons icon={'checkbox'} />
                                        </span>
                                        <p className={`font-inter font-normal text-base leading-150 text-black/70 pr-1 `}>
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <Button text={'   View the Library'} variants='first' className='bg-dark rounded-sm py-4 px-[18.5px] text-white' />


                        </div>

                        {/* Right Slider */}
                        <div className='relative w-full xl:w-auto'>
                            <Image
                                src="/assets/images/png/blueground.png"
                                height={262}
                                width={626}
                                alt="image"
                                className='hidden xl:block translate-y-[-47.1px]'
                            />

                            {/* Slider container */}
                            <div
                                className="
                            xl:absolute xl:top-0 xl:left-[-57.1px]
                            w-full xl:w-[570.1px]
                            overflow-hidden
                            "
                            >
                                <Swiper
                                    modules={[Navigation]}
                                    onSwiper={setSwiperInstance}
                                    slidesPerView={'auto'}
                                    spaceBetween={35}
                                    loop={true}
                                    grabCursor={true}
                                    className='overflow-visible!'
                                >
                                    {SLIDER_DATA.map((item, i) => (
                                        <SwiperSlide key={i} style={{ width: '461.03px' }}>
                                            <Image
                                                src={item.img}
                                                width={460}
                                                height={331}
                                                alt="slider-image"
                                                className='w-[461.03px] h-[331.29px] object-cover'
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className='flex items-center gap-2.5 mt-3.75'>
                                    <button
                                        onClick={() => swiperInstance?.slidePrev()}
                                        className='w-8.75 h-8.75 rounded-full flex items-center justify-center border border-black hover:bg-dark hover:border-transparent cursor-pointer group'
                                    >
                                        <Icons icon={'prev'} />
                                    </button>
                                    <button
                                        onClick={() => swiperInstance?.slideNext()}
                                        className='w-8.75 h-8.75 rounded-full flex items-center justify-center border border-black hover:bg-dark hover:border-transparent cursor-pointer group rotate-180'
                                    >
                                        <Icons icon={'next'} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=' absolute -z-1 left-0 -mt-10'>
                <Icons icon={'right'} />
            </div>
        </>
    )
}

export default Amazing