import React from 'react'
import Icons from './Icons'
import { COLUMNS } from '@/utils/helper'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
      <div className='w-full bg-black px-4 '>
        <div className='max-w-285 flex flex-col min-[620.1px]:flex-row justify-between mx-auto pt-26.75'>
          <div>
            <Link 
            href="">
            <Icons icon={'footerlogo'} />
            </Link>
            <p className='text-white max-w-[277.1px] text-sm mt-7.5 font-light leading-150'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” </p>
            <div className='mt-7.5'>
              <Link href="mailto:example@gmail.com" className='flex flex-row items-center max-w-[197.1px] w-full justify-between'><Icons icon={'mail'} /> <span className='text-white'>contact@yoomi.com</span></Link>
              <Link href="tel:+919876543210" className='flex mt-4 mb-10.25 flex-row items-center max-w-[146.1px] w-full justify-between'><Icons icon={'phone'} /> <span className='text-white'>+123 456 789</span></Link>
            </div>
          </div>
          <div className="flex justify-between mb-5 max-w-[360.1px] w-full min-[620.1px]:mb-0">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-5">
                <h3 className="text-white font-semibold text-sm">
                  {col.title}
                </h3>

                <ul className="flex flex-col gap-4">
                  {col.items.map((item) => (
                    <Link
                    href=""
                      key={item}
                      className="text-white leading-100 text-sm hover:underline duration-200 font-normal cursor-pointer"
                    >
                      {item}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='max-w-360 border-t border-white/20 h-15'>
          <div className='max-w-285 mx-auto gap-5.75 justify-end flex flex-row my-5.5 '>
            <span className='text-white/60 text-sm'>Terms of Service</span>
            <span className='text-white/60 text-sm'>Privacy Policy</span>
            <span className='text-white/60 text-sm'>Cookies</span>
          </div>
        </div>
      </div >
    </>
  )
}

export default Footer
