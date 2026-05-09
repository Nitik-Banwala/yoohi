"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import { SLIDER_DATA } from '@/utils/helper'
import { LIBRARY_DATA } from '@/utils/helper'
import Icons from './common/Icons'

function Amazing() {
    const [swiperInstance, setSwiperInstance] = useState(null)

    return (
        <div className='max-w-284.5 mx-auto max-[1350px]:px-4 mt-30 w-full'>
            <div className='bg-white shadow-[0_26px_27px_0_rgba(0,0,0,0.04)] pt-15.25 pb-[60.25px] sm:pl-[30.64px] sm:pr-[30.64px] xl:pr-0 rounded-4xl'>
                <div className='flex flex-col xl:flex-row gap-10 xl:gap-31 max-w-[1138.1px]'>

                    {/* Left Content */}
                    <div className='shrink-0'>
                        <p className='font-inter font-medium text-base uppercase leading-[118%] text-dark'>Library</p>
                        <h3 className='pt-2 pb-5.25 font-plus-jakarta font-normal text-custom-3xl leading-110 text-black'>
                            Extensive Exercise <span className='font-semibold'>Library</span>
                        </h3>
                        <div className='flex flex-col gap-2.25 max-w-117 mb-9.25'>
                            {LIBRARY_DATA.map((item, i) => (
                                <div key={i} className='flex items-center gap-3.75'>
                                    <span>
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4833 17.55L19.1208 9.9125L17.6042 8.39584L11.4833 14.5167L8.39584 11.4292L6.87917 12.9458L11.4833 17.55ZM5.41667 22.75C4.82084 22.75 4.31059 22.5377 3.88592 22.113C3.46125 21.6883 3.24928 21.1784 3.25 20.5833V5.41667C3.25 4.82084 3.46234 4.31059 3.887 3.88592C4.31167 3.46125 4.82156 3.24928 5.41667 3.25H20.5833C21.1792 3.25 21.6894 3.46234 22.1141 3.887C22.5388 4.31167 22.7507 4.82156 22.75 5.41667V20.5833C22.75 21.1792 22.5377 21.6894 22.113 22.1141C21.6883 22.5388 21.1784 22.7507 20.5833 22.75H5.41667Z" fill="#82B2C2" />
                                        </svg>
                                    </span>
                                    <p className={`font-inter font-normal text-base leading-150 text-black/70 pr-1 `}>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <button className='bg-[#076787] rounded-sm py-4 px-[18.5px] text-white'>
                            View the Library
                        </button>
                    </div>

                    {/* Right Slider */}
                    <div className='relative w-full xl:w-auto'>
                        {/* Background image — hidden on small screens */}
                        <img
                            src="/assets/images/png/blueground.png"
                            alt="image"
                            className='hidden xl:block -translate-y-11.75'
                        />

                        {/* Slider container */}
                        <div
                            className='
                                xl:absolute xl:top-0 xl:-left-14.25
                                w-full xl:w-[570px]
                                overflow-hidden
                            '
                        >
                            <Swiper
                                modules={[Navigation]}
                                onSwiper={setSwiperInstance}
                                slidesPerView={'auto'}
                                spaceBetween={35}
                                loop={true}
                                grabCursor={true}
                                className='!overflow-visible'
                            >
                                {SLIDER_DATA.map((item, i) => (
                                    <SwiperSlide key={i} style={{ width: '461.03px' }}>
                                        <img
                                            src={item.img}
                                            alt="slider-image"
                                            className='w-[461.03px] h-[331.29px] object-cover'
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className='flex items-center gap-2.5 mt-3.75'>
                                <button
                                    onClick={() => swiperInstance?.slidePrev()}
                                    className='w-8.75 h-8.75 rounded-full flex items-center justify-center border border-black hover:bg-[#076787] hover:border-transparent cursor-pointer group'
                                >
                                    <Icons icon={'prev'}/>
                                </button>
                                <button
                                    onClick={() => swiperInstance?.slideNext()}
                                    className='w-8.75 h-8.75 rounded-full flex items-center justify-center border border-black hover:bg-[#076787] hover:border-transparent cursor-pointer group rotate-180'
                                >
                                      <Icons icon={'next'}/>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Amazing