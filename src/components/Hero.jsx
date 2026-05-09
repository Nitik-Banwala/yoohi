"use client"
import React from 'react'
import Button from './common/Button'
import Image from 'next/image'
import { useState } from 'react'
const Hero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    setEmail("")
    setError("");
    console.log(email);
  };
  return (
    <>
      <div className=" md:bg-[url('/assets/images/png/hero.png')] bg-[url('/assets/images/png/herotwo.png')] flex items-center justify-center min-h-[828.1px] w-full bg-no-repeat bg-center bg-cover px-4 sm:px-6 lg:px-8">
     <div className='hidden sm:flex min-[1107.1px]:hidden! w-30 mt-70'>
        <Image
        src={'/assets/images/png/flower.png'}
        width={300}
        height={500}
        alt='flowers'
        />
      </div>
        <div className='flex flex-col justify-center items-center w-full'>
          <h1 className='font-normal leading-110 text-custom-2xl sm:text-custom-3xl lg:text-custom-7xl max-w-[830.1px] text-center puls leading-110 px-2'>
            <span className='puls leading-110 font-extrabold'>Next Generation </span>
            Patient Engagement and RTM Solution✨
          </h1>
          <p className='text-base sm:text-xl leading-110 lg:text-2xl font-normal text-black/70 text-center mt-2 px-4'>
            Industry leading AI motion-tracking technology
          </p>
          <div className="max-w-[428.1px] flex flex-row justify-between items-center w-full h-[56.1px] rounded-sm mt-12.25 bg-white">

            <input
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className="ml-2.25 border-0 outline-none focus:outline-none focus:ring-0 placeholder:text-whity text-whity text-base font-medium placeholder:font-medium w-full bg-transparent"
            />

            <Button
              variants="first"
              text={"Get Started"}
              className={"h-11.25 w-30.75 mr-1"}
              onClick={handleSubmit}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2">
              {error}
            </p>
          )}
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