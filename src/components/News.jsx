"use client"
import React from 'react'
import Icons from './common/Icons'
import Button from './common/Button'
import Image from 'next/image'
import { useState } from 'react'

const News = () => {
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
    <div className='px-4 pb-1 -mb-0.5 bg-[linear-gradient(180deg,transparent_70%,#000000_30%)] '>
      <div className="bg-[url('/assets/images/png/news.png')] flex flex-col py-10 md:py-0 rounded-4xl md:flex-row justify-between items-center px-[84.1px] bg-center bg-no-repeat bg-cover mx-auto max-w-[1145.1px] w-full min-h-[379.1px] h-full">
        <div>
          <Icons icon={'footerlogo'} />
          <h2 className='text-white mt-7 text-3xl font-normal puls leading-110'>Sign Up to Join <span className='font-semibold puls'>Our Newsletter</span></h2>
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
              className={"h-11.25 w-40.75 mr-1"}
              onClick={handleSubmit}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2">
              {error}
            </p>
          )}
        </div>
        <div className='mr-5 mt-4'>
          <Image
            src={'/assets/images/svg/reporter.svg'}
            width={300}
            height={321}
            alt='reporter' />
        </div>
      </div>
    </div>
  )
}

export default News
